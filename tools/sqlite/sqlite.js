let sqlite3 = require("sqlite3")
let fs = require("fs")

//数据库 名字
let dbDame = "user.db"
let tb_use = "user"

let table = fs.readFileSync('tools/sqlite/daily_player_2019_01_13.sql', 'utf-8');
//console.log(table)

var db = new sqlite3.Database('1.db', function () {
    //exec 执行多条 语句
    //run  执行 一条 语句
    db.exec(table,function () {//'drop table if exists Abouttab;'
        // db.run(
        //     'create table if not exists Abouttab(\n' +
        //     '  Id integer primary key autoincrement,  \n' +
        //     '  Info text null,  \n' +
        //     '  Lan integer \n' +
        //     ')', function (err) {
        //         //db.run('drop table if exists Abouttab;' ,function () {
        //             db.all("select * from Abouttab", function (err, res) {
        //                     if (!err)
        //                         console.log(JSON.stringify(res));
        //                     else
        //                         console.log(err);
        //                 });
        //        // })
        //     });
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