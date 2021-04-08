import ScheduleRegister, { RegisterData } from "./modules/register/controller";
import ScheduleRemove, { RemoveData } from "./modules/remove/controller";
import ScheduleUpdate, { UpdateData } from "./modules/update/controller";
import ScheduleGet, { GetData } from "./modules/get/controller";
import { configOptions } from "./services/database";

namespace BuuhVSchedule {
    /**
     * Novo agendamento
     */
    export class Register extends ScheduleRegister {
        constructor(config: configOptions, data: RegisterData) {
            super(config, data);
        }
    }
    /**
     * Remover agendamento
     */
     export class Remove extends ScheduleRemove {
        constructor(config: configOptions, data: RemoveData) {
            super(config, data);
        }
    }
    /**
     * Atualizar agendamento
     */
     export class Update extends ScheduleUpdate {
        constructor(config: configOptions, data: UpdateData) {
            super(config, data);
        }
    }
    /**
     * Carregar agendamento
     */
     export class Get extends ScheduleGet {
        constructor(config: configOptions, data: GetData) {
            super(config, data);
        }
    }
}

export default BuuhVSchedule;