import Joi from 'joi'

export default {
  // POST /audit/createAudit
  createAudit: {
    body: {
      storeId: Joi.string().required(),
      module: Joi.string().required(),
      question: Joi.string().required(),
      auditor: Joi.string().required(),
      status: Joi.string().required(),
      auditedDate: Joi.string().required(),
    },
  },

  // GET /audits/findStoreAudits
  storeAudits: {
    params: {
      storeId: Joi.string().required(),
    },
  },

  // POST /audits/addEvents/:id
  addEvents: {
    body: {
      status: Joi.string().required(),
      note: Joi.string().required(),
    },
    params: {
      id: Joi.string().required(),
    },
  },
}
