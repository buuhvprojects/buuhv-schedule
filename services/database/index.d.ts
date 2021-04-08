interface insertParams {
    TABLE: string;
    columns: Array<string>;
    values: Array<string>;
    endValues: Array<string | number>;
}
interface selectColumnsWhere {
    TABLE: string;
    columns: Array<string>;
    where: Array<string>;
    join?: string;
    order?: string;
    limit?: number;
    endValues: Array<string | number>;
}
interface selectColumns {
    TABLE: string;
    columns: Array<string>;
    join?: string;
    order?: string;
    limit?: number;
}
interface updateColumnsWhere {
    TABLE: string;
    columns: Array<string>;
    where: Array<string>;
    endValues: Array<string | number>;
}
interface updateColumns {
    TABLE: string;
    columns: Array<string>;
    endValues: Array<string | number>;
}
interface deleteWhere {
    TABLE: string;
    where: Array<string>;
    endValues: Array<string | number>;
}
interface deleteValues {
    TABLE: string;
}
export interface configOptions {
    host: string;
    user: string;
    pass: string | number;
    database: string;
    port?: number;
}
declare namespace BuuhVDatabase {
    class Database {
        private config;
        constructor(config: configOptions);
        /**
         * Executa uma query no banco de dados
         * @param query
         * @param values
         * @returns Promise
         */
        private poolAsync;
        /**
         * Realiza uma operação no banco de dados
         * @param query
         * @param values
         * @returns Promise
         */
        query: (query: string, values?: any[]) => Promise<any>;
        /**
         * Realiza um insert no banco de dados
         * @returns Promise
         */
        insert: (data: insertParams) => Promise<any>;
        /**
         * Realiza um select de colunas em uma tabela, a partir condições no banco de dados
         * @returns Promise
         */
        selectWhere: (data: selectColumnsWhere) => Promise<any>;
        /**
         * Realiza um select de colunas em uma tabela no banco de dados
         * @returns Promise
         */
        select: (data: selectColumns) => Promise<any>;
        /**
         * Realiza um update de colunas em uma tabela no banco de dados a partir de condições
         * @returns Promise
         */
        updateWhere: (data: updateColumnsWhere) => Promise<any>;
        /**
         * Realiza um update de colunas em uma tabela no banco de dados
         * @returns Promise
         */
        update: (data: updateColumns) => Promise<any>;
        /**
         * Realiza um delete em uma tabela, a partir condições no banco de dados
         * @returns Promise
         */
        deleteWhere: (data: deleteWhere) => Promise<any>;
        /**
         * Realiza um delete em uma tabela no banco de dados
         * @returns Promise
         */
        delete: (data: deleteValues) => Promise<any>;
    }
}
export default BuuhVDatabase;
