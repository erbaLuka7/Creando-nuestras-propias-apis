const express = require('express');
const router = express.Router();
const apiActorsController = require('../../controllers/api/actorsController')

router.get('/api/actors', apiActorsController.list)
router.get('/api/actors/:id', apiActorsController.detail)
router.post('/api/actors/create', apiActorsController.create)
router.delete('/api/actors/delete/:id', apiActorsController.delete)

module.exports = router;