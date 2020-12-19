'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const serviceSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    name: {
        type: String,
        required: [ true, 'mesaj de eroare personalizat'],
        unique: false
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    ageRef: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    }
}, {
      timestamps: { currentTime: () => new Date().getTime() }
});

module.exports = mongoose.model('service', serviceSchema, 'services');