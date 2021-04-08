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
interface sqlInsert {
    columns: string[];
    values: string[];
    endValues: string[] | number[];
}

class ScheduleRegister extends BuuhVDatabase.Database {
    private data: RegisterData = {
        table: "BuuhV_Schedule",
        content: {
            startAt: new Date(),
            endAt: new Date(),
            title: "",
            description: "",
        },
    };
    constructor(config: configOptions, data: RegisterData) {
        super(config);
        this.data = data;
    }
    /**
     * Verifica se existe uma data em uso no interfalo selecionado
     * @returns Promise<Object>
     */
    private checkIntervalDate = async (): Promise<boolean> => {
        const response: any[] = await this.query(
            `SELECT id FROM ${this.data.table} 
            WHERE (startAt = ? || endAt = ?) || (startAt BETWEEN ? AND ?)`,
            [this.data.content.startAt, this.data.content.endAt, this.data.content.startAt, this.data.content.endAt]
        );
        return response.length ? true : false;
    };
    /**
     * Constrói a estrutura de insert
     * @returns Object
     */
    private buildSql = (): sqlInsert => {
        let columns = [];
        let values = [];
        let endValues = [];

        Object.keys(this.data.content).forEach((item) => {
            columns.push(item), values.push("?");
            endValues.push(this.data.content[item]);
        });

        return {
            columns,
            values,
            endValues,
        };
    };
    /**
     * Inicia o processo de criar um agendamento
     * @returns Promise<Object>
     */
    public init = async (): Promise<returnPromise> => {
        const exist = await this.checkIntervalDate();
        if (exist) {
            return {
                status: false,
                message: "schedulingExists",
            };
        }

        const response = await this.insert({
            TABLE: this.data.table,
            ...this.buildSql(),
        });
        if (!response.insertId) {
            return {
                status: false,
                message: "cannotCreateScheduling",
                values: response,
            };
        }

        return {
            status: true,
            values: response.insertId,
        };
    };
}
export default ScheduleRegister;
