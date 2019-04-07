import express from 'express'
import validate from 'express-validation'
import bodyValidation from './audits.validations'
import auditsCtrl from '../../controllers/audits.controller'

const router = express.Router() // eslint-disable-line new-cap

// router.route('/')
// /** GET /v1/audits/ - Get list of all Audits */
// .get(auditsCtrl.allAudits)

router
  .route('/createAudit')
  /** POST /v1/audits/createAudit - create Audit */
  .post(validate(bodyValidation.createAudit), auditsCtrl.create)

// router.route('/storeAuditsAllEvents/:storeId')
//   /** GET /v1/audits/storeAuditsAllEvents/:storeId - find all Audits with events of an store */
//   .get(validate(bodyValidation.storeAudits),auditsCtrl.storeAuditsAllEvents)

router
  .route('/storeAudits/:storeId')
  /** GET /v1/audits/storeAudits/:storeId - find all Audits with one event of an store */
  .get(validate(bodyValidation.storeAudits), auditsCtrl.storeAudits)

router
  .route('/addEvent/:id')
  /** POST /v1/audits/addEvent/:id - Add events to an Audit */
  .post(validate(bodyValidation.addEvents), auditsCtrl.addEvents)

export default router
