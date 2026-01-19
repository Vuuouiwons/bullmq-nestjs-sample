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
exports.DummyController = void 0;
const common_1 = require("@nestjs/common");
const dummy_service_1 = require("./dummy.service");
const create_dto_1 = require("./dto/create.dto");
const swagger_1 = require("@nestjs/swagger");
let DummyController = class DummyController {
    dummyService;
    constructor(dummyService) {
        this.dummyService = dummyService;
    }
    async handleQueue1(body) {
        return this.dummyService.sendToQueue1(body);
    }
    async handleQueue2(body) {
        return this.dummyService.sendToQueue2(body);
    }
    async handleQueue3(body) {
        return this.dummyService.sendToQueue3(body);
    }
};
exports.DummyController = DummyController;
__decorate([
    (0, common_1.Post)('queue1'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a job to Queue 1' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job successfully added to queue.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "handleQueue1", null);
__decorate([
    (0, common_1.Post)('queue2'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a job to Queue 2' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job successfully added to queue.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "handleQueue2", null);
__decorate([
    (0, common_1.Post)('queue3'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a job to Queue 3' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job successfully added to queue.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "handleQueue3", null);
exports.DummyController = DummyController = __decorate([
    (0, swagger_1.ApiTags)('Dummy Queues'),
    (0, common_1.Controller)('dummy'),
    __metadata("design:paramtypes", [dummy_service_1.DummyService])
], DummyController);
//# sourceMappingURL=dummy.controller.js.map