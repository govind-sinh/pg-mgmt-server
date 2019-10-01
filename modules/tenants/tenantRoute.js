const express = require('express');
const tenantCtrl = require('./tenantController');
const tenantRouter = express.Router();
tenantRouter.get('/',tenantCtrl.listTenant);
tenantRouter.post('/edit',tenantCtrl.editTenant);
tenantRouter.post('/remove', tenantCtrl.deleteTenant)
tenantRouter.post('/',tenantCtrl.createTenant);
module.exports = tenantRouter;