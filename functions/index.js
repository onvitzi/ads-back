const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({ origin: true }));

app.use('/', require('./routes/router'))

exports.apiv1 = functions.https.onRequest(app);