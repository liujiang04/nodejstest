let sqlite3 = require("sqlite3")
let fs = require("fs")

//数据库 名字
let dbDame = "user.db"
let tb_use = "user"



'  tableSql = \'\'\'CREATE TABLE IF NOT EXISTS USER\n' +
'       (ID INT PRIMARY KEY     NOT NULL,\n' +
'       NAME           TEXT    NOT NULL,\n' +
'       AGE            INT     NOT NULL,\n' +
'       ADDRESS        CHAR(50),\n' +
'       SALARY         REAL);\'\'\''

let table = fs.readFileSync('tools/sqlite/daily_player_2019_01_13.sql', 'utf-8');
//console.log(table)
let data = fs.readFileSync('tools/sqlite/daily_player_2019_01_13_t.sql', 'utf-8');
//console.log(data)
var db = new sqlite3.Database('1.db', function () {
    //sql 必须 一条 一条的 执行
    db.run(table,function () {//'drop table if exists Abouttab;'
        db.run(
            'create table if not exists Abouttab(\n' +
            '  Id integer primary key autoincrement,  \n' +
            '  Info text null,  \n' +
            '  Lan integer \n' +
            ')', function (err) {
                //db.run('drop table if exists Abouttab;' ,function () {
                    db.all("select * from Abouttab", function (err, res) {
                            if (!err)
                                console.log(JSON.stringify(res));
                            else
                                console.log(err);
                        });
               // })
            });
    })



});
//
//
// var db = new sqlite3.Database('1.db', function () {
//
//     db.all("select * from test", function (err, res) {
//         if (!err)
//             console.log(JSON.stringify(res));
//         else
//             console.log(err);
//     });
//
// });