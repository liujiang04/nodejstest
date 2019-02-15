/**
 * Created by DELL on 2017/5/10.
 */
var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("../",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});