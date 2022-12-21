const admin = require('firebase-admin');
const db = admin.firestore();

async function getAllCampaigns(req, res) {
  try {
    let query = db.collection("campaigns");
      let response = [];

      await query.get().then((data) => {
        let docs = data.docs;

        docs.map((doc) => {
          const selectedData = {
            id: doc.data().id,
            nameCampaign: doc.data().nameCampaign,
            objective: doc.data().objective,
            status: doc.data().status,
            campaignId: doc.data().campaignId,
            active: doc.data().active
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

module.exports = getAllCampaigns;