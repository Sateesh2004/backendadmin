import mongoose, { Document,Model } from "mongoose";

export interface IAuditLog extends Document {
  action: string;
  adminId: mongoose.Types.ObjectId;
  timestamp: Date;
}

const auditLogSchema = new mongoose.Schema<IAuditLog>({
  action: { type: String, required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
});

const AuditLog: Model<IAuditLog>=mongoose.model<IAuditLog>("AuditLog", auditLogSchema);
export default AuditLog