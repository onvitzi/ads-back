const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();

async function getAllAdCreatives(req, res) {
    try {
        let query = db.collection("adcreatives");
        let response = [];

        await query.get().then((data) => {
            let docs = data.docs;

            docs.forEach((doc) => {
                const selectedData = {
                    id: doc.data().id,
                    name: doc.data().name,
                    adset_id: doc.data().adset_id,
                    "creative": {
                        name: doc.data().creative.name,
                        "object_story_spec": {
                            page_id: doc.data().creative.object_story_spec.page_id,
                            "link_data": {
                                image_hash: doc.data().creative.object_story_spec.link_data.image_hash,
                                link: doc.data().creative.object_story_spec.link_data.link,
                                message: doc.data().creative.object_story_spec.link_data.message,
                            }
                        }
                    },
                    status: doc.data().status,
                    ad_creative_id: doc.data().ad_creative_id 
                };

                response.push(selectedData);
            });
            return response;
        });
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        res.json(JSON.stringify(error));
    }
}

module.exports = getAllAdCreatives;