# BullMQ NestJS Sample
A high-performance, distributed background task processing system built with NestJS and BullMQ. This project demonstrates how to decouple heavy operations from the HTTP request-response cycle using Redis as a message broker.

## Get Started
1. Start infrastructure:
```bash
docker compose up -d
```
2. Install and run:
```bash
pnpm install
pnpm run start:dev
```
3. Test: Navigate to http://localhost:3000/docs to see the Swagger docs!