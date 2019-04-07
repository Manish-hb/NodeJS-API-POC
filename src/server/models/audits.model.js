import mongoose from 'mongoose'

var AuditsSchema = new mongoose.Schema(
  {
    storeId: { type: String },
    module: { type: String },
    question: { type: String },
    auditor: { type: String },
    auditedDate: { type: Date },
    dueDate: { type: Date },
    status: { type: String },
    createdDate: { type: Date, default: Date.now },
    events: [
      {
        createdDate: { type: Date, default: Date.now },
        closeDate: { type: Date },
        note: { type: String },
        closeProofUrl: { type: String },
        closedBy: { type: String },
        status: { type: String },
      },
    ],
  }, //, {timestamps: true}
)

export default mongoose.model('Audits', AuditsSchema)
