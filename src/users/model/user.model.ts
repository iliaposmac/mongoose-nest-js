import * as mongoose from 'mongoose'

export const UserSChema = new mongoose.Schema({
    name: String,
    age: Number,
    profesion: String
})