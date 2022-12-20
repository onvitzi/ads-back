const querystring = require('querystring');
const axios = require('axios');

async function createAdCampaign(req, res) {
  try {
    let body = req.body;
    await axios.post(
      `https://graph.facebook.com/v15.0/${process.env.ACCOUNT_ID}/campaigns?access_token=${process.env.TOKEN}&${querystring.stringify(body)}`
    );
    res.json({
      "message": "¡Campaña creada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = createAdCampaign;