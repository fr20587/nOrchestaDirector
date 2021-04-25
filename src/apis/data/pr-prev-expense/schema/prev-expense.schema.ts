import { Schema } from 'mongoose';

export const PrevExpenseSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId, require: true },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, require: true },
    name: {
      ref: 'TypePrevExpense',
      type: Schema.Types.ObjectId,
      require: true,
    },
    cost: { type: Number, require: true },
  },
  {
    versionKey: false,
  },
);

PrevExpenseSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

PrevExpenseSchema.virtual('typePrevExpenseRef', {
  ref: 'TypePrevExpense',
  localField: 'name',
  foreignField: '_id',
});

PrevExpenseSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
