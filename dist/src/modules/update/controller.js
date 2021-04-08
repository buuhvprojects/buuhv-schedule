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
const database_1 = require("../../services/database");
class ScheduleUpdate extends database_1.default.Database {
    constructor(config, data) {
        super(config);
        this.data = {
            table: "BuuhV_Schedule",
            id: 0,
            content: {
                startAt: new Date(),
                endAt: new Date(),
                title: "",
                description: "",
            },
        };
        /**
         * Verifica se existe uma data em uso no interfalo selecionado
         * @returns Promise<Object>
         */
        this.checkIntervalDate = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.query(`SELECT id FROM ${this.data.table} 
            WHERE (startAt = ? || endAt = ?) || (startAt BETWEEN ? AND ?)`, [
                this.data.content.startAt,
                this.data.content.endAt,
                this.data.content.startAt,
                this.data.content.endAt,
            ]);
            return response.length ? true : false;
        });
        /**
         * Constrói a estrutura de update
         * @returns Object
         */
        this.buildSql = () => {
            let columns = [];
            let where = ['id = ?'];
            let endValues = [];
            Object.keys(this.data.content).forEach((item) => {
                columns.push(`${item} = ?`);
                endValues.push(this.data.content[item]);
            });
            endValues.push(this.data.id);
            return {
                columns,
                where,
                endValues,
            };
        };
        /**
         * Inicia o processo de atualizar um agendamento
         * @returns Promise<Object>
         */
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.checkIntervalDate();
            if (exist) {
                return {
                    status: false,
                    message: "schedulingExists",
                };
            }
            const response = yield this.updateWhere(Object.assign({ TABLE: this.data.table }, this.buildSql()));
            if (!response.affectedRows) {
                return {
                    status: false,
                    message: "cannotUpdateScheduling",
                    values: response,
                };
            }
            return {
                status: true
            };
        });
        this.data = data;
    }
}
exports.default = ScheduleUpdate;
//# sourceMappingURL=controller.js.map