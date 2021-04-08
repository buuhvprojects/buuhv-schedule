import ScheduleRegister, { RegisterData } from "./modules/register/controller";
import ScheduleRomeve, { RemoveData } from "./modules/remove/controller";
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
    export class Remove extends ScheduleRomeve {
        constructor(config: configOptions, data: RemoveData) {
            super(config, data);
        }
    }
}

export default BuuhVSchedule;