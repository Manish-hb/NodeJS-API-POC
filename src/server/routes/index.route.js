import express from 'express'
import auditsRoutes from './audits/audits.route'

const router = express.Router() // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'))

// define api routes
router.use('/v1/audits', auditsRoutes)

export default router
