const axios = require('axios');

async function deleteCampaign(req, res) {
  try {
    console.log(req.body.access_token);
    let id = req.params.id;
    await axios.delete(
      `https://graph.facebook.com/v15.0/${id}?access_token=${req.body.access_token}`
    );
    res.json({
      "message": "¡Campaña eliminada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = deleteCampaign;