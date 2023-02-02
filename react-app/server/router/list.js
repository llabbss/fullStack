// 这里是关于列表的所有接口
const Router = require("koa-router");
const list = new Router();

list.get("/", async (ctx) => {
  ctx.body = "列表";
});
list.get("/yinger", async (ctx) => {
  ctx.body = "列表---婴儿";
});
list.get("/wangju", async (ctx) => {
  ctx.body = "列表---网剧";
});

module.exports = list;
