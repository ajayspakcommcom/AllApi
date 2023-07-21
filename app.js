const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const { isArray } = require("util");
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors({
//     origin: ['http://rays.snmih.in']
// }));

app.use(cors({
    origin: '*'
}));


const alupacRoute = require('./routes/alupac');
const aceTextTileRoute = require('./routes/acetexttile');

app.use(alupacRoute);
app.use(aceTextTileRoute);

app.listen(process.env.PORT || 3333, () => {
    console.clear();
    console.log("Application listening on port 3333!");
});


