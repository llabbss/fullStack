let mysql = require('mysql');
// 连接池
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'OLIVER_HOME',
    user: 'root',
    password: '123456'
});
// 对数据库进行crud操作的基础
function query(sql, callback) {
    console.log(pool.getConnection, '====pool');
    pool.getConnection(function (err, connection) {
        console.log(err, '====err');
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release(); // 中断链接
        });
    });
}
exports.query = query;
