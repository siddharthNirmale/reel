const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email:{
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password:{
    type: String,

  }
},{
  timestamps: true,

})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
