/**
 * Created by DELL on 2017/5/10.
 */
var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录
fs.rmdir("tmp",function(err){
    if (err) {
        return console.error(err);
    }

    fs.readdir("..",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});