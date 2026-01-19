"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('BullMQ Sample')
        .setDescription('BullMQ example for multiple queue and processors')
        .setVersion('1.0')
        .build();
    const documentFactory = () => swagger_2.SwaggerModule.createDocument(app, config);
    swagger_2.SwaggerModule.setup('docs', app, documentFactory);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map