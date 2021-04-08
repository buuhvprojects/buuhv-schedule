import { createPool, Pool } from 'mysql2';

interface insertParams {
    TABLE: string,
    columns: Array<string>,
    values: Array<string>,
    endValues: Array<string|number>
}
interface selectColumnsWhere {
    TABLE: string,
    columns: Array<string>,
    where: Array<string>,
    join?: string,
    order?: string,
    limit?: number,
    endValues: Array<string|number>
}
interface selectColumns {
    TABLE: string,
    columns: Array<string>,
    join?: string,
    order?: string,
    limit?: number,
}
interface updateColumnsWhere {
    TABLE: string,
    columns: Array<string>,
    where: Array<string>,
    endValues: Array<string|number>
}
interface updateColumns {
    TABLE: string,
    columns: Array<string>,
    endValues: Array<string|number>,
}
interface deleteWhere {
    TABLE: string,
    where: Array<string>,
    endValues: Array<string|number>
}
interface deleteValues {
    TABLE: string
}
export interface configOptions {
    host: string,
    user: string,
    pass: string|number,
    database: string,
    port?: number
}
namespace BuuhVDatabase {
    export class Database {
        private config: configOptions = {
            host: null,
            user: null,
            pass: null,
            database: null,
            port: 3306
        };
        constructor(config: configOptions) {
            this.config = config;
        }
        /**
         * Executa uma query no banco de dados
         * @param query 
         * @param values
         * @returns Promise
         */
        private poolAsync = (query: string, values = []): Promise<any> => {
            const dbConn: Pool = createPool(this.config);
            return new Promise(function (resolve, reject) {
                dbConn.query(query, values, function (error: any, results: any, fields: Array<any>|null|number) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(results);
                    }
                });
            });
        }
        /**
         * Realiza uma operação no banco de dados
         * @param query 
         * @param values
         * @returns Promise
         */
        public query = async (query: string, values = []) => await this.poolAsync(query, values);
        /**
         * Realiza um insert no banco de dados
         * @returns Promise
         */
        public insert = async (data: insertParams): Promise<any> => {
            const response = await this.poolAsync(`INSERT INTO ${data.TABLE} (${data.columns.join(',')}) VALUES (${data.values.join(',')})`, data.endValues);
    
            return response;
        }
        /**
         * Realiza um select de colunas em uma tabela, a partir condições no banco de dados
         * @returns Promise
         */
        public selectWhere = async (data: selectColumnsWhere): Promise<any> => {
            let select = `SELECT ${data.columns.join(',')} FROM ${data.TABLE} WHERE ${data.where.join(' ')}`;
    
            if (data.order) select += ` ORDER ${data.order}`;
            if (data.limit) select += ` LIMIT ${data.limit}`;
    
            const response = await this.poolAsync(select, data.endValues);
    
            return response;
        }
        /**
         * Realiza um select de colunas em uma tabela no banco de dados
         * @returns Promise
         */
        public select = async (data: selectColumns): Promise<any> => {
            let select = `SELECT ${data.columns.join(',')} FROM ${data.TABLE}`;
            
            if (data.join) select += data.join;
            if (data.order) select += ` ORDER ${data.order}`;
            if (data.limit) select += ` LIMIT ${data.limit}`;
    
            const response = await this.poolAsync(select, []);
    
            return response;
        }
        /**
         * Realiza um update de colunas em uma tabela no banco de dados a partir de condições
         * @returns Promise
         */
        public updateWhere = async (data: updateColumnsWhere): Promise<any> => {
            const response = await this.poolAsync(`UPDATE ${data.TABLE} SET ${data.columns.join(',')} WHERE ${data.where.join(' ')}`, data.endValues);
    
            return response;
        }
        /**
         * Realiza um update de colunas em uma tabela no banco de dados
         * @returns Promise
         */
        public update = async (data: updateColumns): Promise<any> => {
            const response = await this.poolAsync(`UPDATE ${data.TABLE} SET ${data.columns.join(',')}`, data.endValues);
    
            return response;
        }
        /**
         * Realiza um delete em uma tabela, a partir condições no banco de dados
         * @returns Promise
         */
        public deleteWhere = async (data: deleteWhere): Promise<any> => {
            const response = await this.poolAsync(`DELETE FROM ${data.TABLE} WHERE ${data.where.join(' ')}`, data.endValues);
    
            return response;
        }
        /**
         * Realiza um delete em uma tabela no banco de dados
         * @returns Promise
         */
        public delete = async (data: deleteValues): Promise<any> => {
            const response = await this.poolAsync(`DELETE FROM ${data.TABLE}`, []);
    
            return response;
        }
    }
}

export default BuuhVDatabase;