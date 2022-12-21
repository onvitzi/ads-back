const querystring = require('querystring');
const axios = require('axios');

const admin = require('firebase-admin');
const db = admin.firestore();

async function createAdCampaign(req, res) {
  try {
    let body = req.body;
    const savedCampaign = await axios.post(
      `https://graph.facebook.com/v15.0/${process.env.ACCOUNT_ID}/campaigns?access_token=${process.env.TOKEN}&${querystring.stringify(body)}`
    );
    db.collection("campaigns").doc(`/${Date.now()}/`).create({
      id: Date.now(),
      nameCampaign: req.body.name,
      objective: req.body.objective,
      status: req.body.status,
      campaignId: savedCampaign.data.id,
      active: 1
    });
    res.status(200).json(savedCampaign.data);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = createAdCampaign;