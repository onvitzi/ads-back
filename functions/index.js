const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

app.use('/', require('./routes/router'))

exports.widgets = functions.https.onRequest(app);