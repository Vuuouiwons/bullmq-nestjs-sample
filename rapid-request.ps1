Invoke-WebRequest -Uri "http://localhost:3000/dummy/queue1" `
  -Method Post `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ "data": "queue1" }'

Invoke-WebRequest -Uri "http://localhost:3000/dummy/queue2" `
  -Method Post `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ "data": "queue2" }'
  
Invoke-WebRequest -Uri "http://localhost:3000/dummy/queue3" `
  -Method Post `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ "data": "queue3" }'