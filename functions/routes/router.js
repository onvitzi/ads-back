
const express = require('express');
const createAdCampaign = require('../controllers/CreateCampaign');
const router = express.Router();

router.post('/campaign/create', (req, res) => {
    createAdCampaign(req.body);
    res.json(req.body); 
})

module.exports = router;