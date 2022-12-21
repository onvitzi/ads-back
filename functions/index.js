const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert("../../../vitzi-ads-firebase-adminsdk-4w76l-4525eee6d6.json"),
  });
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({ origin: true }));

app.use('/', require('./routes/router'))

exports.apiv1 = functions.https.onRequest(app);