import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export const UserSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
      maxlength: 20,
    },
    password: { type: String, required: true, minlength: 8 },
    name: { type: String, required: true, maxlength: 20 },
    lastName: { type: String, required: true, maxlength: 20 },
    roles: [{ type: String }],

    phone: { type: String, minlength: 7, maxlength: 20 },
    img: { type: String },
    gender: { type: String },
    birthday: { type: String },

    address: { type: String },
    street1: { type: String },
    street2: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { typr: String },
    info: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(13);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

