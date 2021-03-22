import { Schema } from 'mongoose';

export const ContactSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    company: { ref: 'Company', type: Schema.Types.ObjectId },
    title: { type: String },

    name: { type: String },
    lastname: { type: String },
    gender: { ref: 'Company', type: Schema.Types.ObjectId },
    birthday: { type: String },
    phone: { type: String },
    mobile: { type: String },
    home: { type: String },
    email: { type: String },

    address: { type: String },
    country: { ref: 'Company', type: Schema.Types.ObjectId },
    state: { ref: 'Company', type: Schema.Types.ObjectId },
    city: { ref: 'Company', type: Schema.Types.ObjectId },
    postalCode: { type: String },

    img: { type: String },
    imgUrl: { type: String },
  },
  {
    versionKey: false,
  },
);
