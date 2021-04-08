import { returnPromise } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";
export interface RemoveData {
    table: string;
    id: number;
}
declare class ScheduleRemove extends BuuhVDatabase.Database {
    private data;
    constructor(config: configOptions, data: RemoveData);
    /**
     * Inicia o processo de remoção de um agendamento
     * @returns Promise<Object>
     */
    init: () => Promise<returnPromise>;
}
export default ScheduleRemove;
