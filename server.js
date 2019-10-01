require("dotenv").config();
require('./config/database.js');
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
app.use(bodyParser.urlencoded({limit: '1gb',extended:true}));
app.use(bodyParser.json());
//always put helmet middleware above cors or allow origin header code to avoid in http options method applying defaults of helmet.
app.use(helmet());
// To Enabling CORS Pre-Flight(such as DELETE,OPTIONS Method) please see the official npm pkg site.
app.use(cors());
app.use(require('./route.js'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
