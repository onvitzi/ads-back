
const express = require('express');
const createAdCampaign = require('../campaign/Create');
const deleteCampaign = require('../campaign/Delete');
const getAllCampaigns = require('../campaign/GetAll');
const pauseCampaign = require('../campaign/Pause');
const generateToken = require('../campaign/Token');
const router = express.Router();

router.post('/campaign/create', createAdCampaign);

router.post('/campaign/delete/:id', deleteCampaign);

router.post('/campaign/pause/:campaignId/:id', pauseCampaign);

router.post('/campaign/generate-token', generateToken);

router.get('/campaign/get-all', getAllCampaigns);

module.exports = router;