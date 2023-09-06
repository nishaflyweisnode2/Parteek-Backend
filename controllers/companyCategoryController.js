const CompanyCategory = require('../model/companyCategoryModel');



exports.createCompanyCategory = async (req, res) => {
    try {
        const { categoryName, currency, seminarFee, isPublished } = req.body;

        const newCategory = new CompanyCategory({
            categoryName,
            currency,
            seminarFee,
            isPublished,
        });

        await newCategory.save();

        res.status(201).json({ status: 201, message: 'Company category created successfully', data: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create company category' });
    }
};



exports.getAllCompanyCategories = async (req, res) => {
    try {
        const categories = await CompanyCategory.find();
        res.status(200).json({ status: 200, categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch company categories' });
    }
};



exports.updateCompanyCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const companyCategory = await CompanyCategory.findById(categoryId);

        if (!companyCategory) {
            return res.status(404).json({ message: 'Company Category not found' });
        }

        companyCategory.categoryName = req.body.categoryName || companyCategory.categoryName;
        companyCategory.currency = req.body.currency || companyCategory.currency;
        companyCategory.seminarFee = req.body.seminarFee || companyCategory.seminarFee;
        companyCategory.isPublished = req.body.isPublished || companyCategory.isPublished;

        const updatedCategory = await companyCategory.save();

        res.status(200).json({ message: 'Company Category updated successfully', data: updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update Company Category' });
    }
};





