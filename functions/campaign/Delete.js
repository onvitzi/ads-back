const axios = require('axios');

async function deleteCampaign(req, res) {
  try {
    let id = req.params.id;
    await axios.delete(
      `https://graph.facebook.com/v15.0/${id}?access_token=${process.env.TOKEN}`
    );
    res.json({
      "message": "¡Campaña eliminada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = deleteCampaign;