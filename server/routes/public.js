const express = require('express')
const upload = require('../middlewares/imageUpload');

const { loginUser, signupUser, updateUserProfile, updateUserPassword } = require('../controllers/auth')

const router = express.Router()


router.post('/user/signin', loginUser)
router.post('/user/signup', upload.single('photo'), signupUser)


//update user info
router.patch('/user/profile/:_id', updateUserProfile)
router.patch('/user/change_password/:_id', updateUserPassword)



module.exports = router