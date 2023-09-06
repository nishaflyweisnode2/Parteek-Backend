const express = require('express');
const router = express.Router();
const { createLocation, getAllLocations, getLocationById, updateLocation } = require('../controllers/locationController');


router.post('/api/location', createLocation);

router.get('/api/allLocation', getAllLocations);

router.get('/api/:locationId', getLocationById);

router.put('/api/locations/:locationId', updateLocation);


module.exports = router;
