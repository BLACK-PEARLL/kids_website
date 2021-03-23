const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    Name: { 
       type: String, 
       required: true, 
       trim: true 
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
    Age: { 
        type:Number, 
        required:true,  
    },
    role: { 
        type: String, 
    },
    recommend: { 
        type: String, 
    },
    FCC: {
        type:String,
    },
    Future: {
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model('Form', formSchema);