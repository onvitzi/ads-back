const admin = require('firebase-admin');
const db = admin.firestore();

async function getAllAdsets(req, res) {
  try {
    let query = db.collection("adsets");
      let response = [];

      await query.get().then((data) => {
        let docs = data.docs;

        docs.forEach((doc) => {
          const selectedData = {
            id: doc.data().id,
            name: doc.data().name,
            optimization_goal: doc.data().optimization_goal,
            billing_event: doc.data().billing_event,
            bid_amount: doc.data().bid_amount,
            daily_budget: doc.data().daily_budget,
            campaign_id: doc.data().campaign_id,
            targeting: {
                "geo_locations": {"countries":["CO"]}
            },
            start_time: doc.data().start_time,
            end_time: doc.data().end_time,
            status: doc.data().status,
            adsetId: doc.data().adsetId,
          };

          response.push(selectedData);
        });
        return response;
      });
      return res.status(200).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({ status: "Failed", msg: err });
  }
}

module.exports = getAllAdsets;