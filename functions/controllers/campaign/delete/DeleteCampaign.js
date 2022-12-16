const axios = require('axios');

async function deleteCampaign() {
    try {
      const res = await axios.delete(
        'https://graph.facebook.com/v15.0/120330000221359917/?access_token=EABPXIaaCqXsBAOjyYmQA1Fj7MZByvK0EUQ3dyHOrNK7uXz7zNuAGsqyouuRxsn3cT32NCN8JbH4ZAeMZCZBZAhfoz4n53sC42w5hsK9LzkP5jBJvQlMu9qxq4FKZCKlEv4KVxGHE4BnapaZCZBtyOY7g6EojUCeQ9Vlbf8PiupZAjZA2Y5AVABRjFEXHVYNeT1ZB5UZD',
        {
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

module.exports = deleteCampaign;