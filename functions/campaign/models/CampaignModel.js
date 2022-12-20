const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
},{timestamps:true});

module.exports = mongoose.model("Ad", CampaignSchema);