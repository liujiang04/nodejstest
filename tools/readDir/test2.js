
var fs = require('fs')

var tes =require("./tes.js");
function geFileList(path)
{
    var filesList = [];
    readFile(path,filesList);
    return filesList;
}
//遍历读取文件
function readFile(path,filesList)
{
    files = fs.readdirSync(path);//需要用到同步读取
    files.forEach(walk);
    function walk(file)
    {
        states = fs.statSync(path+'/'+file);
        if(states.isDirectory())
        {
            readFile(path+'/'+file,filesList);
        }
        else
        {
            //创建一个对象保存信息
            var obj = new Object();
            obj.size = states.size;//文件大小，以字节为单位
            obj.name = file;//文件名
            obj.path = path+'/'+file; //文件绝对路径
            filesList.push(obj.path);
        }
    }
}
var filesList = geFileList("../../foreignTools/lan");
console.log(filesList)
console.log(tes.window.document.ccConfig)



