
const express = require('express');
const createAdCampaign = require('../campaign/Create');
const deleteCampaign = require('../campaign/Delete');
const getAllCampaigns = require('../campaign/GetAll');
const pauseCampaign = require('../campaign/Pause');
const generateToken = require('../campaign/Token');
const editCampaign = require('../campaign/Edit');
const getOneCampaign = require('../campaign/GetOne');
const router = express.Router();

router.post('/campaign/create', createAdCampaign);

router.post('/campaign/delete/:id', deleteCampaign);

router.post('/campaign/pause/:campaignId/:id', pauseCampaign);

router.post('/campaign/generate-token', generateToken);

router.post('/campaign/edit/:id', editCampaign);

router.get('/campaign/get-all', getAllCampaigns);

router.get('/campaign/get-one/:id', getOneCampaign);

module.exports = router;