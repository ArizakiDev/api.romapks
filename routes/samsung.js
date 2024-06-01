const express = require('express');
const router = express.Router();
const samsungController = require('../controllers/samsungController');

router.get('/', samsungController.getTech);
router.get('/rom', samsungController.getAvailableRoms);
router.get('/rom/:rom', samsungController.getModelsByRom);
router.get('/rom/:rom/:model', samsungController.getRom);
router.get('/apk/:apk/:model', samsungController.getApk);

module.exports = router;
