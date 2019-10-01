const mongoose = require('mongoose');

let tenantSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    address : {
        type : String,
    },
    aadhar : {
        type : String,
    },
    pan : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

let tenant = mongoose.model('tenants', tenantSchema);
module.exports = tenant;  