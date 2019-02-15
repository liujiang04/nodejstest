/**
 * Created by DELL on 2017/11/22.
 */

var crypto  = require("crypto");
var fs = require("fs");
var request = require("request");

function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback);
}

function  readyJsonFle(path) {
    var data=fs.readFileSync(path,"utf-8");

    return JSON.parse(data)
}

function  makeDir(path,flag,callback) {//最后一个是否为文件
    var str = path.split("\\");
    var al_path = "";
    var num = 0;
    var pathArr=[];
    for (var i=0;i<str.length;i++){
        if (flag && (i == (str.length-1))){
           break
        }
        al_path = al_path + str[i] + "\\";
        pathArr.push(al_path)
    }
    console.log(pathArr);
    function cret(p) {
        fs.exists(p[num],function(exists){
            if(exists){
                //console.log("文件存在")
                num = num + 1;
                if (num ==p.length ){
                    callback();
                    return
                }else {
                    cret(p)
                }
            }
            if(!exists){
                //console.log("文件不存在")
                fs.mkdir(p[num],function(err){
                    if (err) {
                        return console.error(err);
                    }
                    num = num + 1;
                    if (num ==p.length ){
                        callback();
                        return
                    }else {
                        cret(p)
                    }
                });
            }
        })
    }
    cret(pathArr);

}

//downloadFile("http://techbrood.com/threejs/docs/api/constants/CustomBlendingEquations.html","docs\\manual\\CustomBlendingEquations.html",function(){
    //console.log(filename+'下载完毕');
//});
//http://techbrood.com/threejs/docs/#参考手册/常量(Constants)/GL状态(GLState)
//http://techbrood.com/threejs/docs/api/constants/GLState.html
function getObjectPath(list) {
    var pages = [];
    for ( var section in list ) {
        for ( var category in list[ section ] ) {
            for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {
                var page = list[ section ][ category ][ i ];
                pages.push(page)
            }
        }
    }
    if (pages.length>0){
        return pages
    }
}
var readyJsonFileName = "lise.json";
var list =  readyJsonFle(readyJsonFileName);
var parentUrl = "http://techbrood.com/threejs/docs/";
var pages = getObjectPath(list);
var DIR = "docs\\";
var index = 0;
var filename = DIR+ pages[index];
var fileUrl = parentUrl + pages[index] +".html";
function loadCreatFile(arr) {
    var on=DIR+arr[index][1];
    on = on.replace(/\//g,'\\');
    makeDir(on,true,function () {
        filename = DIR+ pages[index][1] + ".html";///
        filename = filename.replace(/\//g,'\\');
        fileUrl = parentUrl + pages[index][1] +".html";
        console.log(fileUrl);
        //console.log(name);
        downloadFile(fileUrl,filename,function(){
            index++;
            if (index ==arr.length ){
                return
            }else {
                loadCreatFile(arr)
            }
        });
    });
}
loadCreatFile(pages);
