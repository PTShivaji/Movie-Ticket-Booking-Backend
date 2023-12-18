const mongoose =require('mongoose')
const {Schema, model} = mongoose
const showSchema=new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref:'movies',
        required: true
    },
    ticketPrice:{
        type: Number,
        required: true
    },
    totalSeats:{
        type: Number,
        required: true
    },
    bookedSeats:{
        type:Array,
        default:[]
    },
    theater:{
        type: Schema.Types.ObjectId,
        ref:'theaters',
        required: true
    },
},{timestamps:true})

const Show = model('shows',showSchema)

module.exports = Show