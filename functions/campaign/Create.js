const querystring = require('querystring');
const axios = require('axios');

async function createAdCampaign(req, res) {
  try {
    let body = req.body;
    await axios.post(
      'https://graph.facebook.com/v15.0/act_240364401389186/campaigns?' + querystring.stringify(body)
    );
    res.json({
      "message": "¡Campaña creada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = createAdCampaign;