import { returnPromise } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";
export interface UpdateData {
    table: string;
    id: number;
    content: {
        startAt: Date;
        endAt: Date;
        title: string;
        description: string;
    };
}
declare class ScheduleUpdate extends BuuhVDatabase.Database {
    private data;
    constructor(config: configOptions, data: UpdateData);
    /**
     * Verifica se existe uma data em uso no interfalo selecionado
     * @returns Promise<Object>
     */
    private checkIntervalDate;
    /**
     * Constrói a estrutura de update
     * @returns Object
     */
    private buildSql;
    /**
     * Inicia o processo de atualizar um agendamento
     * @returns Promise<Object>
     */
    init: () => Promise<returnPromise>;
}
export default ScheduleUpdate;
