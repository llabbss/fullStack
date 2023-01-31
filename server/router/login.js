const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const db = require('../utils/db');
const login = new Router();

login.use(bodyParser());
login.post('/', async ctx => {
    const {username, password} = ctx.request.body;
    const sql = `select * from users where username='${username}'`;
    const token = jwt.sign({username, password}, 'secret', {expiresIn: 3600});
    // sql查询的数据要通过塞进微任务返回出来
    const userArr = await new Promise((resolve, reject) => {
        return db.query(sql, (err, data) => {
            if (err) {
                throw new Error(err);
            }
            resolve(data);
            // 数组长度大于0
            console.log(data, 'data');
        });
    });
    if (userArr.length > 0) {
        ctx.body = {
            code: 200,
            token,
            msg: 'OK'
        };
    } else {
        ctx.body = {
            code: 500,
            msg: '登录失败'
        };
    }
});
login.post('/login/regist', async ctx => {
    const username = ctx.response.body.username;
    const password = ctx.response.body.password;
    ctx.body = '登录';
    const sql = `select * from users where username='${username}'`;
    db.query(sql, (err, data) => {
        if (err) {
            throw new Error(err);
        }
    });
});

module.exports = login;
