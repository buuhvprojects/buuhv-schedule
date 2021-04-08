"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
var BuuhVDatabase;
(function (BuuhVDatabase) {
    class Database {
        constructor(config) {
            this.config = {
                host: null,
                user: null,
                password: null,
                database: null,
                port: 3306
            };
            /**
             * Executa uma query no banco de dados
             * @param query
             * @param values
             * @returns Promise
             */
            this.poolAsync = (query, values = []) => {
                const dbConn = mysql2_1.createPool(this.config);
                return new Promise(function (resolve, reject) {
                    dbConn.query(query, values, function (error, results, fields) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(results);
                        }
                    });
                });
            };
            /**
             * Realiza uma operação no banco de dados
             * @param query
             * @param values
             * @returns Promise
             */
            this.query = (query, values = []) => __awaiter(this, void 0, void 0, function* () { return yield this.poolAsync(query, values); });
            /**
             * Realiza um insert no banco de dados
             * @returns Promise
             */
            this.insert = (data) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.poolAsync(`INSERT INTO ${data.TABLE} (${data.columns.join(',')}) VALUES (${data.values.join(',')})`, data.endValues);
                return response;
            });
            /**
             * Realiza um select de colunas em uma tabela, a partir condições no banco de dados
             * @returns Promise
             */
            this.selectWhere = (data) => __awaiter(this, void 0, void 0, function* () {
                let select = `SELECT ${data.columns.join(',')} FROM ${data.TABLE} WHERE ${data.where.join(' ')}`;
                if (data.order)
                    select += ` ORDER ${data.order}`;
                if (data.limit)
                    select += ` LIMIT ${data.limit}`;
                const response = yield this.poolAsync(select, data.endValues);
                return response;
            });
            /**
             * Realiza um select de colunas em uma tabela no banco de dados
             * @returns Promise
             */
            this.select = (data) => __awaiter(this, void 0, void 0, function* () {
                let select = `SELECT ${data.columns.join(',')} FROM ${data.TABLE}`;
                if (data.join)
                    select += data.join;
                if (data.order)
                    select += ` ORDER ${data.order}`;
                if (data.limit)
                    select += ` LIMIT ${data.limit}`;
                const response = yield this.poolAsync(select, []);
                return response;
            });
            /**
             * Realiza um update de colunas em uma tabela no banco de dados a partir de condições
             * @returns Promise
             */
            this.updateWhere = (data) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.poolAsync(`UPDATE ${data.TABLE} SET ${data.columns.join(',')} WHERE ${data.where.join(' ')}`, data.endValues);
                return response;
            });
            /**
             * Realiza um update de colunas em uma tabela no banco de dados
             * @returns Promise
             */
            this.update = (data) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.poolAsync(`UPDATE ${data.TABLE} SET ${data.columns.join(',')}`, data.endValues);
                return response;
            });
            /**
             * Realiza um delete em uma tabela, a partir condições no banco de dados
             * @returns Promise
             */
            this.deleteWhere = (data) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.poolAsync(`DELETE FROM ${data.TABLE} WHERE ${data.where.join(' ')}`, data.endValues);
                return response;
            });
            /**
             * Realiza um delete em uma tabela no banco de dados
             * @returns Promise
             */
            this.delete = (data) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.poolAsync(`DELETE FROM ${data.TABLE}`, []);
                return response;
            });
            this.config = config;
        }
    }
    BuuhVDatabase.Database = Database;
})(BuuhVDatabase || (BuuhVDatabase = {}));
exports.default = BuuhVDatabase;
//# sourceMappingURL=index.js.map