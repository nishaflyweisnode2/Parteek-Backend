const express = require('express');
const router = express.Router();

const { createCompanyCategory, getAllCompanyCategories, updateCompanyCategory } = require('../controllers/companyCategoryController');


router.post('/api/company-categories', createCompanyCategory);

router.get('/api/company-categories', getAllCompanyCategories);

router.put('/api/company-categories/:categoryId', updateCompanyCategory);



module.exports = router;
