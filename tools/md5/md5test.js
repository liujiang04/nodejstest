var crypto = require('crypto');
var fs = require('fs');
var rs = fs.createReadStream('./ppika_fqaAVn.png');
var hash = crypto.createHash('md5');
rs.on('data', function (data) {
    var signature = crypto.createHash('md5').update(data).digest('hex');
    console.log( ">>>46654" +shortMD5(signature.toUpperCase()));
})
// rs.on('data', hash.update.bind(hash));
// var nd5
// rs.on('end', function () {
//
//     nd5 = hash.digest('hex')
//     console.log(nd5);
//     console.log(shortMD5(nd5));
// });
fs.readFile('./ppika_fqaAVn.png', function(err, data){
    var signature = crypto.createHash('md5').update(data).digest('hex');
    //var str = decodeStrings()
    console.log( ">>>+" +shortMD5(signature.toUpperCase()));
});
function shortMD5( md5) {
   var  chars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
        "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z" ];

    // 把加密字符按照8位一组16进制与0x3FFFFFFF进行位与运算
    var  sTempSubString = md5.substring(8, 16);
    console.log(sTempSubString);
    var  lHexLong = 0x3FFFFFFF & parseInt(sTempSubString, 16)
    //var  lHexLong = 0x3FFFFFFF & Long.parseLong(sTempSubString, 16);
    var  outChars = "";
    for (var j = 0; j < 6; j++) {
        // 把得到的值与 0x0000003D 进行位与运算，取得字符数组 chars 索引
        var index = 0x0000003D & lHexLong;
        // 把取得的字符相加
        outChars += chars[index];
        // 每次循环按位右移 5 位
        lHexLong = lHexLong >> 5;
    }
    return outChars;
}
function md5File(path, callback) {
    fs.readFile(path, function(err, data) {
        if (err) return;
        var md5Value= crypto.createHash('md5').update(data).digest('hex');
        callback(md5Value)
    });
}
function a (data){console.log("aaa ... +" + data)}
console.log(md5File('./ppika_fqaAVn.png',a))

var signature = crypto.createHash('md5').update(new Buffer("aaa")).digest('hex');
console.log("signature =>" + signature.toUpperCase())

