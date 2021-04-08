import { returnPromise } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";
export interface RegisterData {
    table: string;
    content: {
        startAt: Date;
        endAt: Date;
        title: string;
        description: string;
    };
}
declare class ScheduleRegister extends BuuhVDatabase.Database {
    private data;
    constructor(config: configOptions, data: RegisterData);
    /**
     * Verifica se existe uma data em uso no interfalo selecionado
     * @returns Promise<Object>
     */
    private checkIntervalDate;
    /**
     * Constrói a estrutura de insert
     * @returns Object
     */
    private buildSql;
    /**
     * Inicia o processo de criar um agendamento
     * @returns Promise<Object>
     */
    init: () => Promise<returnPromise>;
}
export default ScheduleRegister;
