import { returnPromise, ScheduleData } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";

export interface GetData {
    table: string;
    id: number;
}

class ScheduleGet extends BuuhVDatabase.Database {
    private data: GetData = {
        table: "BuuhV_Schedule",
        id: 0,
    };
    constructor(config: configOptions, data: GetData) {
        super(config);
        this.data = data;
    }
    /**
     * Inicia o processo de carregar um agendamento
     * @returns Promise<Object>
     */
    public init = async (): Promise<returnPromise> => {
        const response: ScheduleData[] = await this.selectWhere({
            TABLE: this.data.table,
            columns: ["*"],
            where: ["id = ?"],
            endValues: [this.data.id],
        });
        if (!response.length) {
            return {
                status: false,
                message: "cannotGetScheduling",
                values: response,
            };
        }

        return {
            status: true,
            values: response[0],
        };
    };
}
export default ScheduleGet;
