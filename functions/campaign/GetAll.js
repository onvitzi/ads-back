const admin = require('firebase-admin');
const db = admin.firestore();

async function getAllCampaigns(req, res) {
  try {
    let query = db.collection("campaigns");
    const snapshot = await query.get();
    const response = snapshot.docs.map(doc => doc.data());
      return res.status(200).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({ status: "Failed", msg: err });
  }
}

module.exports = getAllCampaigns;