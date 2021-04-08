"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./modules/register/controller");
const controller_2 = require("./modules/remove/controller");
const controller_3 = require("./modules/update/controller");
const controller_4 = require("./modules/get/controller");
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
    /**
     * Atualizar agendamento
     */
    class Update extends controller_3.default {
        constructor(config, data) {
            super(config, data);
        }
    }
    BuuhVSchedule.Update = Update;
    /**
     * Carregar agendamento
     */
    class Get extends controller_4.default {
        constructor(config, data) {
            super(config, data);
        }
    }
    BuuhVSchedule.Get = Get;
})(BuuhVSchedule || (BuuhVSchedule = {}));
exports.default = BuuhVSchedule;
//# sourceMappingURL=index.js.map