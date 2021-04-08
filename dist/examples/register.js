"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
'use-strict';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const database = {
        host: 'localhost',
        user: 'root',
        pass: '',
        database: 'buuhv_schedule'
    };
    const data = {
        table: 'BuuhV_schedule',
        content: {
            startAt: new Date('12:00 04/08/2021'),
            endAt: new Date('13:00 04/08/2021'),
            title: 'Test',
            description: 'Scheduling test'
        }
    };
    const register = new src_1.default.Register(database, data);
    const response = yield register.init();
    console.log(response);
}))();
//# sourceMappingURL=register.js.map