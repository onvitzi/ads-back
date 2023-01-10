const querystring = require('querystring');
const axios = require('axios');

const admin = require('firebase-admin');
const db = admin.firestore();

async function createAdset(req, res) {
  try {
    let body = req.body;
    const savedAdset = await axios.post(
      `${process.env.API_VERSION}/${process.env.ACCOUNT_ID}/adsets?access_token=${process.env.TOKEN}`,
      {
        name: req.body.name,
        optimization_goal: req.body.optimization_goal,
        billing_event: req.body.billing_event,
        bid_amount: req.body.bid_amount,
        daily_budget: req.body.daily_budget,
        campaign_id: req.body.campaign_id,
        "targeting": {
          "geo_locations": {countries:[req.body.targeting.geo_locations.countries]}
      },
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        status: req.body.status
      }
    );
    db.collection("adsets").doc(`/${Date.now()}/`).create({
        id: Date.now(),
        name: req.body.name,
        optimization_goal: req.body.optimization_goal,
        billing_event: req.body.billing_event,
        bid_amount: req.body.bid_amount,
        daily_budget: req.body.daily_budget,
        campaign_id: req.body.campaign_id,
        "targeting": {
            "geo_locations": {countries:[req.body.targeting.geo_locations.countries]}
        },
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        status: req.body.status,
        adsetId: savedAdset.data.id
    });
    res.status(200).json(savedAdset.data);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = createAdset;