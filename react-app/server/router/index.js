// 引入路由
const Router = require('koa-router');
const router = new Router();
const list = require('./list');
const home = require('./home');
const login = require('./login');


// 如果前端还是访问http://localhost:3030，后端依然给他重定向到/home下的某个路由

router.use('/home', home.routes(), home.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());
router.redirect('/', '/home');
// 导出router给index使用
module.exports = router;
