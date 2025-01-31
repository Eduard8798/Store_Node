const Router = require('express')
const router = new Router()
const UseController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',UseController.registration)
router.post('/login',UseController.login)
router.get('/auth',authMiddleware,UseController.chek)


module.exports = router