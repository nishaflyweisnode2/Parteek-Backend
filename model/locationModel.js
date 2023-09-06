const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    locationType: {
        type: String,
        required: true,
        enum: ['Country', 'State', 'City', 'Other'],
    },
    countryState: {
        type: String,
        required: true,
    },
    locationName: {
        type: String,
        required: true,
    },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
