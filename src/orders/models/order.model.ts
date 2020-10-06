import * as mongoose from 'mongoose'

export const OrdersSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    userId: String,
    title: String,
    price: Number
})