const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true },
    isEntity: { type: Boolean, default: false },
    entity: { type: String, default: 'Cliente' },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);