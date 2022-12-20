const querystring = require('querystring');
const axios = require('axios');
const Campaign = require('./models/CampaignModel');

async function createAdCampaign(req, res) {
  try {
    let body = req.body;
    const newAdCampaign = new Campaign(req.body);
    const savedAdCampaign = await newAdCampaign.save();
    await axios.post(
      `https://graph.facebook.com/v15.0/${process.env.ACCOUNT_ID}/campaigns?access_token=${process.env.TOKEN}&${querystring.stringify(body)}`
    );
    res.status(200).json(savedAdCampaign);
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = createAdCampaign;