const axios = require('axios');

async function pauseCampaign(req, res) {
  try {
    let id = req.params.id;
    await axios.post(
      `https://graph.facebook.com/v15.0/${id}?status=PAUSED&access_token=EAAMXnvxrsyEBAMmRA7FN8PObZBKYUZB9HORVh6dbEYUDWTjPAT6KhpvhqrixZCbBKLXSgdFMyjignqDXxxcdwVMhfQC9p0L7ILzjRXUVblQytHDGLkhftaVvTfGplFo2Wf8nxXiNZAkl2pbkAy0gF6co7FYC4TOdZCEbkZABlfKXpTaYziNZADpZAzDEVobabMs26GC08gjFFQZDZD`
    );
    res.json({
      "message": "¡Campaña pausada correctamente!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = pauseCampaign;