/**
 * Created by DELL on 2017/5/10.
 */
var fs = require("fs");

console.log("创建目录 /tmp/test/");
fs.mkdir("tmp",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});