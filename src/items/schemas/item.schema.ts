import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  qty: Number,
  description: String,
});
