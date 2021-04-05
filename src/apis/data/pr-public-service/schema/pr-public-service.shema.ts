import { Schema } from 'mongoose';

export const PrPublicServiceSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: [
      {
        serviceID: { ref: 'PublicService', type: Schema.Types.ObjectId },
        type: { type: String, require: true },
        name: { type: String, require: true },
        unit: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
  },
  {
    versionKey: false,
  },
);
