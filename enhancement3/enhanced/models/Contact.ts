import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
}

const contactSchema = new Schema<IContact>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});

const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;