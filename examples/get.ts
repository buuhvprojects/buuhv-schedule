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
        id: 1
    }
    const get = new BuuhVSchedule.Get(database, data);
    const response = await get.init();
    console.log(response);
})();