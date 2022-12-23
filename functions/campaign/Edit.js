const admin = require('firebase-admin');
const db = admin.firestore();

async function editCampaign(req, res) {
  try {
    const docRef = await db.collection("campaigns").doc(req.params.id).update({
      nameCampaign: req.body.name,
      objective: req.body.objective,
      status: req.body.status
    });
    res.status(200).json(docRef);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = editCampaign;