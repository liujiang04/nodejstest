/**
 * Created by DELL on 2017/11/23.
 */

var mkdirs = module.exports.mkdirs = function(dirpath, mode, callback) {
    path.exists(dirpath, function(exists) {
        if(exists) {
            callback(dirpath);
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), mode, function(){
                fs.mkdir(dirpath, mode, callback);
            });
        }
    });
};
mkdirs("C:\\Users\\DELL\\Desktop\\lj\\myData\\nodejs\\download\\docs\\manual\\introduction\\Creating-a-scene","",function () {
    
});