const Location = require('../model/locationModel');


exports.createLocation = async (req, res) => {
    try {
        const { locationType, countryState, locationName } = req.body;
        const location = new Location({
            locationType,
            countryState,
            locationName,
        });
        const savedLocation = await location.save();
        res.status(201).json({ status: 201, message: 'Location created successfully', location: savedLocation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, error: 'Failed to create location' });
    }
};



exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json({ status: 200, locations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, error: 'Failed to fetch locations' });
    }
};



exports.getLocationById = async (req, res) => {
    try {
        const { locationId } = req.params;
        const location = await Location.findById(locationId);
        if (!location) {
            return res.status(404).json({ status: 404, message: 'Location not found' });
        }
        res.status(200).json({ status: 200, location });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, error: 'Failed to fetch location' });
    }
};




exports.updateLocation = async (req, res) => {
    try {
        const { locationId } = req.params;
        const { locationType, countryState, locationName } = req.body;

        // Check if the location exists
        const location = await Location.findById(locationId);

        if (!location) {
            return res.status(404).json({ status: 404, message: 'Location not found' });
        }

        location.locationType = locationType;
        location.countryState = countryState;
        location.locationName = locationName;

        await location.save();

        res.status(200).json({ status: 200, message: 'Location updated successfully', data: location });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Failed to update location' });
    }
};



