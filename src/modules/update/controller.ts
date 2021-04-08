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
interface sqlUpdate {
    where: string[]
    columns: string[];
    endValues: string[] | number[];
}

class ScheduleUpdate extends BuuhVDatabase.Database {
    private data: UpdateData = {
        table: "BuuhV_Schedule",
        id: 0,
        content: {
            startAt: new Date(),
            endAt: new Date(),
            title: "",
            description: "",
        },
    };
    constructor(config: configOptions, data: UpdateData) {
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
            [
                this.data.content.startAt,
                this.data.content.endAt,
                this.data.content.startAt,
                this.data.content.endAt,
            ]
        );
        return response.length ? true : false;
    };
    /**
     * Constrói a estrutura de update
     * @returns Object
     */
    private buildSql = (): sqlUpdate => {
        let columns = [];
        let where = ['id = ?'];
        let endValues = [];

        Object.keys(this.data.content).forEach((item) => {
            columns.push(`${item} = ?`);
            endValues.push(this.data.content[item]);
        });
        endValues.push(this.data.id);

        return {
            columns,
            where,
            endValues,
        };
    };
    /**
     * Inicia o processo de atualizar um agendamento
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

        const response = await this.updateWhere({
            TABLE: this.data.table,
            ...this.buildSql(),
        });
        if (!response.affectedRows) {
            return {
                status: false,
                message: "cannotUpdateScheduling",
                values: response,
            };
        }

        return {
            status: true
        };
    };
}
export default ScheduleUpdate;
