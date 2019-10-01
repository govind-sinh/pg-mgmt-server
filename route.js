const express = require('express');
const app = express.Router();
const tenantRoute = require('./modules/tenants/tenantRoute');
app.use('/api/v1/tenant',tenantRoute);
app.all('/*', (req, res) => {
    return res.status(404).json({"message":"Invaid Request"});
});
module.exports = app;