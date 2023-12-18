const mongoose = require('mongoose')
const {Schema, model} = mongoose

const theaterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    isActive: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports = model("theaters", theaterSchema)