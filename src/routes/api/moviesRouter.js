const express = require('express');
const router = express.Router();
const apiMoiviesController = require('../../controllers/api/moviesController')

router.post('/api/movies/create', apiMoiviesController.create)
router.delete('/api/movies/delete/:id', apiMoiviesController.delete)

module.exports = router;