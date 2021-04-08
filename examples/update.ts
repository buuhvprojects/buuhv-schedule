import BuuhVSchedule from '../src';

'use-strict';

( async () => {
    const database = {
        host: 'localhost',
        user: 'root',
        pass: '',
        database: 'buuhv_schedule'
    }
    const data = {
        table: 'BuuhV_schedule',
        id: 1,
        content: {
            startAt: new Date('13:00 04/08/2021'),
            endAt: new Date('14:00 04/08/2021'),
            title: 'Test',
            description: 'Scheduling test'
        }
    }
    const update = new BuuhVSchedule.Update(database, data);
    const response = await update.init();
    console.log(response);
})();