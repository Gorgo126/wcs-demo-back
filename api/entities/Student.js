const mongoose = require('mongoose')
const conn = require('../connections/index').mongo

/* Student Schema
 * ----------- */

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    favoriteDessert: {
        type: String,
        default: 'Cookies'
    }
})

module.exports = conn.model('Student', StudentSchema)
