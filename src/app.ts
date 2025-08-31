import express from 'express'
import RabbitMQService from './services/rabbitmq.service.js'

const app = express()

RabbitMQService.getInstance().initialize()

app.listen(3003, () => console.log("Notification service started at port 3003"))