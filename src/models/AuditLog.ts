import mongoose, { Document, Model } from "mongoose"; // Import mongoose and types for Document and Model

// Define the IAuditLog interface, extending Mongoose's Document
export interface IAuditLog extends Document {
  action: string; // Action performed by the admin
  adminId: mongoose.Types.ObjectId; // Reference to the admin who performed the action
  timestamp: Date; // Timestamp when the action was performed
}

// Define the audit log schema
const auditLogSchema = new mongoose.Schema<IAuditLog>({
  action: { type: String, required: true }, // Action field, required
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Admin reference, required
  timestamp: { type: Date, default: Date.now }, // Timestamp field, defaults to current date/time
});

// Create and export the AuditLog model based on the schema
const AuditLog: Model<IAuditLog> = mongoose.model<IAuditLog>("AuditLog", auditLogSchema);

export default AuditLog; // Export the model for use in other parts of the application
