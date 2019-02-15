/**
 * Created by DELL on 2017/5/10.
 */
var fs = require('fs');

fs.stat('input.txt', function (err, stats) {
    console.log(stats);
    console.log(stats.isFile()); 		//true
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
})