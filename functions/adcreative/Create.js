const querystring = require('querystring');
const axios = require('axios');

const admin = require('firebase-admin');
const db = admin.firestore();

async function createAdCreative(req, res) {
    try {
        const savedAdcreative = await axios.post(
            `${process.env.API_VERSION}/${process.env.ACCOUNT_ID}/ads?access_token=${process.env.TOKEN}`,
            {
                name: req.body.name,
                adset_id: req.body.adset_id,
                "creative": {
                    name: req.body.creative.name,
                    "object_story_spec": {
                        page_id: req.body.creative.object_story_spec.page_id,
                        "link_data": {
                            image_hash: req.body.creative.object_story_spec.link_data.image_hash,
                            link: req.body.creative.object_story_spec.link_data.link,
                            message: req.body.creative.object_story_spec.link_data.message,
                        }
                    }
                },
                status: req.body.status
            }
        );
        db.collection("adcreatives").doc(`/${Date.now()}/`).create({
            id: Date.now(),
            name: req.body.name,
            adset_id: req.body.adset_id,
            "creative": {
                name: req.body.creative.name,
                "object_story_spec": {
                    page_id: req.body.creative.object_story_spec.page_id,
                    "link_data": {
                        image_hash: req.body.creative.object_story_spec.link_data.image_hash,
                        link: req.body.creative.object_story_spec.link_data.link,
                        message: req.body.creative.object_story_spec.link_data.message,
                    }
                }
            },
            status: req.body.status,
            ad_creative_id: savedAdcreative.data.id
        });
        res.status(200).json(savedAdcreative.data);
    } catch (error) {
        res.json(JSON.stringify(error));
    }
}

module.exports = createAdCreative;