const axios = require('axios');

async function generateToken(req, res) {
  try {
    await axios.get(
      `https://graph.facebook.com/v15.0/oauth/access_token?client_id=870396537320225&redirect_uri=https://www.onvitzi.com/&client_secret=b0a3ae15e4fcc7e105c1e21a068f5959&code=1234`
    );
    res.json({
      "message": "Token creado correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = generateToken;