"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyService = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
let DummyService = class DummyService {
    queueOne;
    queueTwo;
    queueThree;
    constructor(queueOne, queueTwo, queueThree) {
        this.queueOne = queueOne;
        this.queueTwo = queueTwo;
        this.queueThree = queueThree;
    }
    async sendToQueue1(data) {
        this.queueOne.add('queueOneJob', data);
        return {
            'status': 'queue 1 scheduled'
        };
    }
    async sendToQueue2(data) {
        this.queueTwo.add('queueTwoJob', data);
        return {
            'status': 'queue 2 scheduled'
        };
    }
    async sendToQueue3(data) {
        this.queueThree.add('queueThreeJob', data);
        return {
            'status': 'queue 3 scheduled'
        };
    }
};
exports.DummyService = DummyService;
exports.DummyService = DummyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bullmq_1.InjectQueue)('queue1')),
    __param(1, (0, bullmq_1.InjectQueue)('queue2')),
    __param(2, (0, bullmq_1.InjectQueue)('queue3')),
    __metadata("design:paramtypes", [bullmq_2.Queue,
        bullmq_2.Queue,
        bullmq_2.Queue])
], DummyService);
//# sourceMappingURL=dummy.service.js.map