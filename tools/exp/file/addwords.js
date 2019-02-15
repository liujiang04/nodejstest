/**
 * Created by DELL on 2017/5/10.
 */
var fs = require("fs");

fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        const a = 55;
        console.log(a);
        console.log("异步读取文件数据: " + data.toString());
    });
});54654