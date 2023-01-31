const Koa = require('koa2');
const cors = require('koa-cors');
const path = require('path');
const static = require('koa-static');
const router = require('./router/index');
const app = new Koa();

// 允许前端跨域请求
app.use(cors());
app.use(static(path.join(__dirname + '/assets')));
// routes 的作用是启动路由
// allowedMethods
/**
 * @params routes 的作用是启动路由
 * @params allowedMethods 允许所有请求方法
 */
app.use(router.routes(), router.allowedMethods());
// app.use(async (ctx) => {
//   // 返回数据给页面
//   ctx.response.body = "hello koa";
// });
app.listen(3030, () => {
    console.log(`Server is running at http://localhost:3030`);
});
// ? 1、创建表 sql语句
// CREATE TABLE `banner`(
// `id` INT PRIMARY KEY AUTO_INCREMENT,
// `imgUrl` varchar(100) COMMENT '轮播图地址'
// );

// ? 2、创建完表以后需要 DESCRIBE 一下表

// ? 插入数据，因为表中有2个字段：id, imgUrl, 所以values里面对应的是这些字段值
// ? insert into banner values(1, '/server/assets/iShot_2022-05-29_15.40.54.png');
// ? 只需要增加一个imgUrl字段值不需要修改id insert into banner (imgUrl) values('/server/assets/iShot_2022-05-29_15.40.54.png')
