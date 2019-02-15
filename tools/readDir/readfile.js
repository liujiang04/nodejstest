
var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('../../foreignTools/lan');



/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */

function fileDisplay(filePath,alllist){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                           allList.push(filedir)
                            //console.log(filedir);
                            //writeFile(filedir)
                            alllist.push(filedir)
                            //console.log(alllist)
                        }
                        if(isDir){
                            fileDisplay(filedir,alllist);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });

        }
        //return alllist
    });

}

// 写入到filelisttxt文件
// function writeFile(data){

//     var data = data.join("\n");
//     fs.writeFile(filePath+"/"+"filelist.txt",data+'\n',function(err){
//         if(err) throw err;
//         console.log("写入成功");
//     });
// }
//调用文件遍历方法
var allList = []
fileDisplay(filePath,[]);
console.log(allList)