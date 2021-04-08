import { returnPromise } from "../../interfaces";
import BuuhVDatabase, { configOptions } from "../../services/database";

export interface RemoveData {
    table: string;
    id: number
}

class ScheduleRemove extends BuuhVDatabase.Database {
    private data: RemoveData = {
        table: "BuuhV_Schedule",
        id: 0
    };
    constructor(config: configOptions, data: RemoveData) {
        super(config);
        this.data = data;
    }
    /**
     * Inicia o processo de remoção de um agendamento
     * @returns Promise<Object>
     */
    public init = async (): Promise<returnPromise> => {

        const response = await this.deleteWhere({
            TABLE: this.data.table,
            where: ['id = ?'],
            endValues: [this.data.id]
        });
        if (!response.affectedRows) {
            return {
                status: false,
                message: "cannotRemoveScheduling",
                values: response,
            };
        }

        return {
            status: true
        };
    };
}
export default ScheduleRemove;
