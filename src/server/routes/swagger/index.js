import swagger from './swagger'
import swaggerUI from './swagger-ui'
import express from 'express'
const router = express.Router()

//Swagger
router.get('/', swagger)
router.get('/ui', swaggerUI)

export default router
