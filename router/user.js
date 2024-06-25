const express = require('express');
const router = express.Router();

const user_handler = require('../router_handler/user');
//导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
const {reg_login_schema} = require('../schema/user'); 
router.post('/reguser',expressJoi(reg_login_schema),user_handler.regUser)
router.post('/login',expressJoi(reg_login_schema),user_handler.login)
const buy_handler = require('../router_handler/buy.js')
router.post('/buy',buy_handler.sumbit)
router.post('/track',buy_handler.track)
module.exports = router;