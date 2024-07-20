const { Router } = require('express')
const controller = require('./controller')

const router = Router()

// Test route
router.post('/login', controller.user.login)

module.exports = router;