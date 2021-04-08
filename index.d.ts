import ScheduleRegister, { RegisterData } from "./modules/register/controller";
import ScheduleRemove, { RemoveData } from "./modules/remove/controller";
import ScheduleUpdate, { UpdateData } from "./modules/update/controller";
import ScheduleGet, { GetData } from "./modules/get/controller";
import { configOptions } from "./services/database";
declare namespace BuuhVSchedule {
    /**
     * Novo agendamento
     */
    class Register extends ScheduleRegister {
        constructor(config: configOptions, data: RegisterData);
    }
    /**
     * Remover agendamento
     */
    class Remove extends ScheduleRemove {
        constructor(config: configOptions, data: RemoveData);
    }
    /**
     * Atualizar agendamento
     */
    class Update extends ScheduleUpdate {
        constructor(config: configOptions, data: UpdateData);
    }
    /**
     * Carregar agendamento
     */
    class Get extends ScheduleGet {
        constructor(config: configOptions, data: GetData);
    }
}
export default BuuhVSchedule;
