import { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    img: { type: String },
  },
  {
    versionKey: false,
  },
);

CategorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'category',
});
