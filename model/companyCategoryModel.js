const mongoose = require('mongoose');

const companyCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    seminarFee: {
        type: Number,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });

const CompanyCategory = mongoose.model('CompanyCategory', companyCategorySchema);

module.exports = CompanyCategory;
