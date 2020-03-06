const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    trim: true,
    required: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.sayName = (dog) => {
  console.log(dog.name);
};

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogSchema.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);


// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
