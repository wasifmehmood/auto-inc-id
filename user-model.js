var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const autoIncrementModelID = require('./counter-model');

const userModel = new Schema({
    id: { type: Number, unique: true, min: 1 },
    name: String,
    designation: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    someOtherField: { type: String }
});

userModel.pre('save', function (next) {

    if (!this.isNew) {
        next();
        return;
    }
    
    autoIncrementModelID('user_counter', this, next);
});

module.exports = mongoose.model('userModel', userModel);