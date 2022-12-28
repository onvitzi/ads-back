const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();

async function editCampaign(req, res) {
  try {

    const collectionRef = db.collection('campaigns').doc(req.params.id);

    const documents = await collectionRef.get();

    const id = documents._fieldsProto.campaignId.stringValue;

    await axios.post(
      `${process.env.API_VERSION}/${id}?access_token=${process.env.TOKEN}`,
      {
        name: req.body.name,
        objective: req.body.objective,
        status: req.body.status
      }
    );

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