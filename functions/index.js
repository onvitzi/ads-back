const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const app = express();

/*const firebaseConfig = {
    apiKey: "AIzaSyBYptFdYaG3lAUuDRXsrkySIss5pCHRnG0",
    authDomain: "vitzi-ads.firebaseapp.com",
    databaseURL: "https://vitzi-ads.firebaseio.com/",
    projectId: "vitzi-ads",
    storageBucket: "vitzi-ads.appspot.com",
    messagingSenderId: "184868360024",
    appId: "1:184868360024:web:973fa0f3b6e06bbf5f1f2d",
    measurementId: "G-EHLQTPKLRQ"
};*/

app.use(cors({ origin: true }));

app.use('/', require('./routes/router'))

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect((process.env.MONGO));
        console.log("Connected to database");
    } catch (error) {
        throw error;
    }
};
connect();

exports.apiv1 = functions.https.onRequest(app);