
const express = require('express');
const createAdCampaign = require('../campaign/Create');
const deleteCampaign = require('../campaign/Delete');
const getAllCampaigns = require('../campaign/GetAll');
const pauseCampaign = require('../campaign/Pause');
const generateToken = require('../campaign/Token');
const editCampaign = require('../campaign/Edit');
const getOneCampaign = require('../campaign/GetOne');
const createAdset = require('../adset/Create');
const deleteAdset = require('../adset/Delete');
const editAdset = require('../adset/Edit');
const getAllAdsets = require('../adset/GetAll');
const getOneAdset = require('../adset/GetOne');
const createAdCreative = require('../adcreative/Create');
const deleteAdCreative = require('../adcreative/Delete');
const editAdCreative = require('../adcreative/Edit');
const getAllAdCreatives = require('../adcreative/GetAll');
const getOneAdCreative = require('../adcreative/GetOne');
const PaginationCampaigns = require('../campaign/Pagination');
const router = express.Router();

//CAMPAIGN

router.post('/campaign/create', createAdCampaign);

router.post('/campaign/delete/:id', deleteCampaign);

router.post('/campaign/pause/:id', pauseCampaign);

router.post('/campaign/generate-token', generateToken);

router.post('/campaign/edit/:id', editCampaign);

router.get('/campaign/get-all', getAllCampaigns);

router.get('/campaign/get-one/:id', getOneCampaign);

router.get('/campaign/get', PaginationCampaigns);

//ADSET

router.post('/adset/create', createAdset);

router.post('/adset/delete/:id', deleteAdset);

router.post('/adset/edit/:id', editAdset);

router.get('/adset/get-all', getAllAdsets);

router.get('/adset/get-one/:id', getOneAdset);

//ADCREATIVE

router.post('/adcreative/create', createAdCreative);

router.post('/adcreative/delete/:id', deleteAdCreative);

router.post('/adcreative/edit/:id', editAdCreative);

router.get('/adcreative/get-all', getAllAdCreatives);

router.get('/adcreative/get-one/:id', getOneAdCreative);

module.exports = router;