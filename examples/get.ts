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
        id: 2
    }
    const remove = new BuuhVSchedule.Remove(database, data);
    const response = await remove.init();
    console.log(response);
})();