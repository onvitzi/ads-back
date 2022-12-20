const axios = require('axios');

async function pauseCampaign(req, res) {
  try {
    let id = req.params.id;
    await axios.post(
      `https://graph.facebook.com/v15.0/${id}?status=PAUSED&access_token=${process.env.TOKEN}`
    );
    res.json({
      "message": "¡Campaña pausada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = pauseCampaign;