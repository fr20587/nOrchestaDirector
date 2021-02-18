import { Schema } from "mongoose";


export const ProductSchema = new Schema({
    user: { ref: 'User', type: Schema.Types.ObjectId, required: false },

    name: { type: String, required: false },
    shortDetails: { type: String },
    description: { type: String },
    img: { type: String },
    imageUrl: { type: String },

    stock: { type: Number, required: false },
    cost: { type: Number, required: false },
    price: { type: Number, required: false },
    discount: { type: Number },
    rate: { type: Number, min: 0, max: 5 },

    onSale: { type: Boolean, required: false },
    newItem: { type: Boolean },
    newSupplier: { type: Boolean },

    category: { ref: 'Category', type: Schema.Types.ObjectId },
    brand: { ref: 'Brand', type: Schema.Types.ObjectId },
    supplier: { ref: 'Supplier', type: Schema.Types.ObjectId },
    unit: { type: String },

    ingredients: [{ ref: 'Ingredient', type: Schema.Types.ObjectId }],
}, {
    timestamps: true,
    versionKey: false,
});

ProductSchema.virtual('categoryRef', {
    ref: 'Category',
    localField: 'category',
    foreignField: '_id'
});