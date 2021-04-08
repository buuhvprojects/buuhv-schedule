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
class ScheduleGet extends database_1.default.Database {
    constructor(config, data) {
        super(config);
        this.data = {
            table: "BuuhV_Schedule",
            id: 0,
        };
        /**
         * Inicia o processo de carregar um agendamento
         * @returns Promise<Object>
         */
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.selectWhere({
                TABLE: this.data.table,
                columns: ["*"],
                where: ["id = ?"],
                endValues: [this.data.id],
            });
            if (!response.length) {
                return {
                    status: false,
                    message: "cannotGetScheduling",
                    values: response,
                };
            }
            return {
                status: true,
                values: response[0],
            };
        });
        this.data = data;
    }
}
exports.default = ScheduleGet;
//# sourceMappingURL=controller.js.map