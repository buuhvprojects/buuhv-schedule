export interface returnPromise {
    status: boolean;
    message?: string;
    values?: any;
}
export interface ScheduleData {
    id: number;
    startAt: string;
    endAt: string;
    title: string;
    description: string;
}
