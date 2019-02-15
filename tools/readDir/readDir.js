/**
 * Created by DELL on 2017/12/4.
 */
/*
 * 重新获取所有文件夹列表
 * */
var fs = require('fs');
var sep = require('path').sep;

var listArr = [];
var readDir = function(path) {

    var exists = fs.existsSync(path),
        stat = fs.statSync(path);

    if (exists && stat) { //判断文件、文件目录是否存在
        if (stat.isFile()) {//文件
            var fpath = path.split(sep);
            //console.info(symbol(fpath) + fpath[fpath.length - 1]);
            var onPath = symbol(fpath);
            console.log(onPath);
            listArr.push(onPath);
            console.log("1")
        } else if (stat.isDirectory()) {//文件夹
            var fpath = path.split(sep);
            //console.info(symbol(fpath) + fpath[fpath.length - 1]);
            console.log(symbol(fpath));
            console.log("2");
            var files = fs.readdirSync(path);
            if (files && files.length > 0) {
                files.forEach(function(file) {
                    readDir(path + sep + file); //递归
                });
            }
        }
    } else {
        console.info('根目录不存在.');
    }
};

//符号拼接。
//为了省事，这里采用了字符串拼接的方式，最优的方式应该用buffer来做字符拼接。
var symbol = function(fpath) {
    var s = '';
    for (var i = 1; i < fpath.length; i++) {
        s += '/' +fpath[i];
    }
    return s;
};

readDir('../download/docs');
var json = JSON.stringify(listArr);
console.log(json);
console.log("准备写入文件");
var jsonDir = 'list.json'
fs.writeFile(jsonDir, json,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("success！");

    fs.readFile(jsonDir, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("read: " + data.toString());
    });
});
