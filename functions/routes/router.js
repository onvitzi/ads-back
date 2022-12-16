
const express = require('express');
const createAdCampaign = require('../controllers/campaign/create/CreateCampaign');
const deleteCampaign = require('../controllers/campaign/delete/DeleteCampaign');
const pauseCampaign = require('../controllers/campaign/pause/PauseCampaign');
const router = express.Router();

router.post('/campaign/create', (req, res) => {
    createAdCampaign(req.body);
    res.json(req.body); 
})

router.delete('/campaign/delete', (req, res) => {
    deleteCampaign();
    res.json(req.body); 
})

router.post('/campaign/pause', (req, res) => {
    pauseCampaign();
    res.json(req.body); 
})

module.exports = router;