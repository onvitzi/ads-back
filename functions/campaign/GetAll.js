const axios = require('axios');

async function getAllCampaigns(req, res) {
  try {
    console.log(req.body);
    await axios.get(
      'https://graph.facebook.com/v15.0/act_240364401389186/campaigns?access_token=EAAMXnvxrsyEBAMmRA7FN8PObZBKYUZB9HORVh6dbEYUDWTjPAT6KhpvhqrixZCbBKLXSgdFMyjignqDXxxcdwVMhfQC9p0L7ILzjRXUVblQytHDGLkhftaVvTfGplFo2Wf8nxXiNZAkl2pbkAy0gF6co7FYC4TOdZCEbkZABlfKXpTaYziNZADpZAzDEVobabMs26GC08gjFFQZDZD'
    );
    res.json({
      "message": "¡Listado de Campañas!"
    });
  } catch (error) {
    res.json(JSON.stringify(error));
  }
}

module.exports = getAllCampaigns;