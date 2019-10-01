// const mongoose = 
const tenantModel = require('./tenantModel');
const mongoose = require('mongoose');
const adminCtr = {};

adminCtr.listTenant = async (req, res) => {
    try {
        const tenants = await tenantModel.find({});
        return res.status(200).json(tenants);
    } catch(err) {
        return res.status(400).json({message: "Please Try again"});
    }
}

adminCtr.createTenant = async (req, res) => {
    try {
        const tenant = new tenantModel(req.body);
        await tenant.save();
        return res.status(200).json({message: 'Data saved successfully'});
    } catch(err) {
        return res.status(400).json({message: "Please Try again"});
    }
}

adminCtr.editTenant = async (req, res) => {
    try {
        const { _id } = req.body;
        await tenantModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, req.body);
        return res.status(200).json({message: 'Data Updated successfully'});
    } catch(err) {
        console.log("err:", err);
        return res.status(400).json({message: "Please Try again"});
    }
}

adminCtr.deleteTenant = async (req, res) => {
    try {
        const { tenantId } = req.body;
        await tenantModel.findOneAndRemove({_id: tenantId});
        return res.status(200).json({message: 'Data Delete successfully'});
    } catch(err) {
        return res.status(400).json({message: "Please Try again"});
    }
}

module.exports = adminCtr;