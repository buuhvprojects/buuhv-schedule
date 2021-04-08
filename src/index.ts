import ScheduleRegister, { RegisterData } from "./modules/register/controller";
import { configOptions } from "./services/database";

namespace BuuhVSchedule {
    export class Register extends ScheduleRegister {
        constructor(config: configOptions, data: RegisterData) {
            super(config, data);
        }
    }
}

export default BuuhVSchedule;