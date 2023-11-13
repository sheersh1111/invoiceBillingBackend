const mongoose= require("mongoose");
const invoiceSchema = new mongoose.Schema({

    amount:{
        type: Number,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"please enter product description"],
    },
    deadline:{
        type: Date,
        required: true
    },
    paid:{
        type: Boolean,
        default:false,
    }

})
module.exports= mongoose.model("Invoice",invoiceSchema);