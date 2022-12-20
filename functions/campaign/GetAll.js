const axios = require('axios');

async function getAllCampaigns(req, res) {
  try {
    console.log(req.body);
    await axios.get(
      `https://graph.facebook.com/v15.0/${process.env.ACCOUNT_ID}/campaigns?access_token=${process.env.TOKEN}`
    );
    res.json({
      "message": "¡Listado de Campañas!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = getAllCampaigns;