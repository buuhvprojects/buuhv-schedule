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
        content: {
            startAt: new Date('12:00 04/08/2021'),
            endAt: new Date('13:00 04/08/2021'),
            title: 'Test',
            description: 'Scheduling test'
        }
    }
    const register = new BuuhVSchedule.Register(database, data);
    const response = await register.init();
    console.log(response);
})();