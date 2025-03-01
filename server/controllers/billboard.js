const Billboard = require('../models/billboard');

const createBillboard = async (req, res) => {
    const image = req.file ? req.file.path : null;

    const { 
        title,
        address,
        city,
        zipCode,
        country,
        dimensions,
        dailyRate,
        minimumBookingDays,
        facing,
        visibility,
        description,
        surroundingArea,
        restrictions
    } = req.body;

    let emptyFields = [];
  
    // Check required fields
    if (!title) emptyFields.push('title');
    if (!address) emptyFields.push('address');
    if (!city) emptyFields.push('city');
    if (!zipCode) emptyFields.push('zipCode');
    if (!country) emptyFields.push('country');
    if (!dimensions?.width) emptyFields.push('width');
    if (!dimensions?.height) emptyFields.push('height');
    if (!dailyRate) emptyFields.push('dailyRate');
    if (!minimumBookingDays) emptyFields.push('minimumBookingDays');
    if (!facing) emptyFields.push('facing');
    if (!image) emptyFields.push('image');

    if (emptyFields.length > 0) {
        return res.status(400).json({ 
            error: 'Please fill in all required fields', 
            emptyFields 
        });
    }

    // Validate numerical values
    if (dailyRate <= 0) {
        return res.status(400).json({
            error: 'Daily rate must be greater than zero'
        });
    }

    if (minimumBookingDays < 1) {
        return res.status(400).json({
            error: 'Minimum booking days must be at least 1'
        });
    }

    if (dimensions.width <= 0 || dimensions.height <= 0) {
        return res.status(400).json({
            error: 'Dimensions must be greater than zero'
        });
    }
  
    try {
        const billboard = await Billboard.create({
            title,
            location: {
                address,
                city,
                zipCode,
                country
            },
            dimensions: {
                width: dimensions.width,
                height: dimensions.height
            },
            dailyRate,
            minimumBookingDays,
            facing,
            visibility,
            description,
            surroundingArea,
            restrictions,
            image
        });
        res.status(201).json(billboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getBillboardList = async (req, res) => {
    try {
        const billboards = await Billboard.find({}).sort({ createdAt: -1 });
        res.status(200).json(billboards);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSingleBillboard = async (req, res) => {
    const { id } = req.params;

    try {
        const billboard = await Billboard.findById(id);
        
        if (!billboard) {
            return res.status(404).json({ error: 'Billboard not found' });
        }

        res.status(200).json(billboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBillboard = async (req, res) => {
    const { id } = req.params;

    try {
        const billboard = await Billboard.findOneAndDelete({ _id: id });

        if (!billboard) {
            return res.status(404).json({ error: 'Billboard not found' });
        }

        res.status(200).json(billboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateBillboard = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const image = req.file ? req.file.path : undefined;

    if (image) {
        updates.image = image;
    }

    try {
        const billboard = await Billboard.findOneAndUpdate(
            { _id: id },
            { 
                ...updates,
                updatedAt: new Date()
            },
            { new: true, runValidators: true }
        );

        if (!billboard) {
            return res.status(404).json({ error: 'Billboard not found' });
        }

        res.status(200).json(billboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { 
    createBillboard, 
    getBillboardList, 
    getSingleBillboard,
    updateBillboard,
    deleteBillboard 
};