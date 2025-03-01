const express = require('express')
const upload = require('../middlewares/imageUpload');

const { newRole, getRoleList, deleteRole } = require('../controllers/roleController')
const { getUsers } = require('../controllers/auth')
const { 
    createBillboard, 
    getBillboardList, 
    getSingleBillboard,
    updateBillboard,
    deleteBillboard 
} = require('../controllers/billboard')

const requireAuth = require('../middlewares/requireAuth')
const access = require('../middlewares/roleBasedAccess')

const router = express.Router()

router.use(requireAuth)

router.post('/role/create', access.checkPermission('create_record'), newRole)
router.delete('/role/:id', access.checkPermission('delete_record'), deleteRole)
router.get('/role/all', access.checkPermission('read_record'), getRoleList)

router.get('/users', getUsers)

router.get('/billboard/all', getBillboardList)
router.post('/billboard/create', createBillboard)
router.get('/billboard/:id', getSingleBillboard)
router.put('/billboard/:id', updateBillboard)
router.delete('/billboard/:id', deleteBillboard)

module.exports = router