import { returnPromise } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";
export interface GetData {
    table: string;
    id: number;
}
declare class ScheduleGet extends BuuhVDatabase.Database {
    private data;
    constructor(config: configOptions, data: GetData);
    /**
     * Inicia o processo de carregar um agendamento
     * @returns Promise<Object>
     */
    init: () => Promise<returnPromise>;
}
export default ScheduleGet;
