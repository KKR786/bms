// const Product = require('../models/product')

// const createBillboard = async (req, res) => {
//     const images = req.files ? req.files.map(file => file.path) : [];

//     const { name, description, price, quantity, category } = req.body;

//     let emptyFields = [];
  
//     if (!name) emptyFields.push('name');
//     if (!price) emptyFields.push('price');
//     if (!quantity) emptyFields.push('quantity');
//     if (!category) emptyFields.push('category');

//     if (emptyFields.length > 0) {
//         return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
//     }
//     if (price <= 0) {
//         return res.status(400).json({
//             error: 'Price must be greater than zero'
//         });
//     }
  
//     try {
//         const product = await Product.create({
//             name,
//             description,
//             price,
//             quantity,
//             category,
//             images
//         });
//       res.status(201).json(product)
//     } catch (error) {
//       res.status(400).json({error: error.message})
//     }
// }


// const deleteBillboard = async (req, res) => {
//     const { id } = req.params

//     const deletedBillboard = await Product.findOneAndDelete({_id: id})

//     if (!deletedBillboard) {
//         return res.status(404).json({error: 'No such Billboard'})
//     }

//     res.status(200).json(deletedBillboard)
// }

// const getBillboardList = async (req, res) => {
//     const billboardList = await Product.find()
//     res.status(200).json(billboardList)
// }

// module.exports = { createBillboard, getBillboardList, deleteBillboard }