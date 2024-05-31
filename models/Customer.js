import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    phone:{type:String},
    email:{type:String
    }
})

export const Customer=mongoose.model('Customer',customerSchema);

