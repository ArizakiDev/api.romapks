const express = require('express');
const router = express.Router();
const xiaomiController = require('../controllers/xiaomiController');

router.get('/', xiaomiController.getTech);
router.get('/rom', xiaomiController.getAvailableRoms);
router.get('/rom/:rom', xiaomiController.getModelsByRom);
router.get('/rom/:rom/:model', xiaomiController.getRom);
router.get('/apk/:apk/:model', xiaomiController.getApk);
router.get('/apk', xiaomiController.getAvailableVersions);
router.get('/apk', xiaomiController.getAvailableVersions);
router.get('/apk', xiaomiController.getAvailableVersions);
router.get('/apk/:version', xiaomiController.getAvailableApps);
router.get('/apk/:version/:app', xiaomiController.downloadApk);

module.exports = router;
