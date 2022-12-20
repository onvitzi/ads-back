const axios = require('axios');
const Campaign = require('./models/CampaignModel');

async function getAllCampaigns(req, res) {
  try {
    const tasks = await Campaign.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = getAllCampaigns;