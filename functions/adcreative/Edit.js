const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();

async function editAdCreative(req, res) {
  try {
    const collectionRef = db.collection('adcreatives').doc(req.params.id);

    const documents = await collectionRef.get();

    const id = documents._fieldsProto.ad_creative_id.stringValue;

    const docRef = await axios.post(
      `${process.env.API_VERSION}/${id}?access_token=${process.env.TOKEN}`,
      {
        name: req.body.name,
        "creative": {
            name: req.body.creative.name,
            "object_story_spec": {
                "link_data": {
                    image_hash: req.body.creative.object_story_spec.link_data.image_hash,
                    message: req.body.creative.object_story_spec.link_data.message,
                }
            }
        },
        status: req.body.status
    }
    );

    /*const docRef = await db.collection("adcreatives").doc(req.params.id).update({
        name: req.body.name,
        "creative": {
            name: req.body.creative.name,
            "object_story_spec": {
                "link_data": {
                    image_hash: req.body.creative.object_story_spec.link_data.image_hash,
                    message: req.body.creative.object_story_spec.link_data.message,
                }
            }
        },
        status: req.body.status
    });*/
    
    res.status(200).json(docRef);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = editAdCreative;