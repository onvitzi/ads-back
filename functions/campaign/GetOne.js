const admin = require('firebase-admin');
const db = admin.firestore();

async function getOneCampaign(req, res) {
  try {
    const documentId = req.params.id;

    const response = await db.collection('campaigns').doc(documentId).get()
    .then(doc => {
      if (!doc.exists) {
        res.status(404).send('Document not found');
      } else {
        res.send(doc.data());
      }
      return res.status(200).send({ status: "Success", data: response });
    })
  } catch (err) {
    res.status(500).send({ status: "Failed", msg: err });
  }
}

module.exports = getOneCampaign;