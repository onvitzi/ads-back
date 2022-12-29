const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();

async function editAdset(req, res) {
  try {
    const collectionRef = db.collection('adsets').doc(req.params.id);

    const documents = await collectionRef.get();

    const id = documents._fieldsProto.adsetId.stringValue;

    await axios.post(
      `${process.env.API_VERSION}/${id}?access_token=${process.env.TOKEN}`,
      {
        name: req.body.name,
        optimization_goal: req.body.optimization_goal,
        billing_event: req.body.billing_event,
        bid_amount: req.body.bid_amount,
        daily_budget: req.body.daily_budget,
        "targeting": {
          "geo_locations": { countries: [req.body.targeting.geo_locations.countries] }
        },
        status: req.body.status
      }
    );

    const docRef = await db.collection("adsets").doc(req.params.id).update({
      name: req.body.name,
      optimization_goal: req.body.optimization_goal,
      billing_event: req.body.billing_event,
      bid_amount: req.body.bid_amount,
      daily_budget: req.body.daily_budget,
      "targeting": {
        "geo_locations": { countries: [req.body.targeting.geo_locations.countries] }
      },
      status: req.body.status
    });

    res.status(200).json(docRef);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = editAdset;