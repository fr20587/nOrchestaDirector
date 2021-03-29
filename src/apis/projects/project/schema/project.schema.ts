import { Schema } from 'mongoose';

export const ProjectSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },

    name: { type: String },
    code: { type: String },

    price: { type: Number },
    client: { ref: 'Company', type: Schema.Types.ObjectId },
    service: { ref: 'Service', type: Schema.Types.ObjectId },
    person: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
