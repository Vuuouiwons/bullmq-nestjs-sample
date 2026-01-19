"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue3Processor = exports.Queue2Processor = exports.Queue1Processor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
let Queue1Processor = class Queue1Processor extends bullmq_1.WorkerHost {
    async process(job) {
        console.log(`Queue1 Data: ${JSON.stringify(job.data)}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return { sent: true };
    }
};
exports.Queue1Processor = Queue1Processor;
exports.Queue1Processor = Queue1Processor = __decorate([
    (0, bullmq_1.Processor)('queue1')
], Queue1Processor);
let Queue2Processor = class Queue2Processor extends bullmq_1.WorkerHost {
    async process(job) {
        console.log(`Queue2 Data: ${JSON.stringify(job.data)}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return { sent: true };
    }
};
exports.Queue2Processor = Queue2Processor;
exports.Queue2Processor = Queue2Processor = __decorate([
    (0, bullmq_1.Processor)('queue2')
], Queue2Processor);
let Queue3Processor = class Queue3Processor extends bullmq_1.WorkerHost {
    async process(job) {
        console.log(`Queue3 Data: ${JSON.stringify(job.data)}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return { sent: true };
    }
};
exports.Queue3Processor = Queue3Processor;
exports.Queue3Processor = Queue3Processor = __decorate([
    (0, bullmq_1.Processor)('queue3')
], Queue3Processor);
//# sourceMappingURL=dummy.processor.js.map