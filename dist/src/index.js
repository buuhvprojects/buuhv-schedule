"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./modules/register/controller");
const controller_2 = require("./modules/remove/controller");
var BuuhVSchedule;
(function (BuuhVSchedule) {
    /**
     * Novo agendamento
     */
    class Register extends controller_1.default {
        constructor(config, data) {
            super(config, data);
        }
    }
    BuuhVSchedule.Register = Register;
    /**
     * Remover agendamento
     */
    class Remove extends controller_2.default {
        constructor(config, data) {
            super(config, data);
        }
    }
    BuuhVSchedule.Remove = Remove;
})(BuuhVSchedule || (BuuhVSchedule = {}));
exports.default = BuuhVSchedule;
//# sourceMappingURL=index.js.map