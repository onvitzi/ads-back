const querystring = require('querystring');
const axios = require('axios');

async function createAdCampaign(body) {
    try {
      const res = await axios.post(
        'https://graph.facebook.com/v15.0/act_1347854532624104/campaigns?' + querystring.stringify(body),
        {
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

module.exports = createAdCampaign;