class cc{
    constructor(){
        console.log("5")
    }
    gett(){
        return 5
    }
}

var d = new cc()
console.log(d.gett())
//设置值 ...
d.dsafd = 55
console.log(d.dsafd)

function dd() {
}

dd.prototype.sfs = function () {
    return 5 + 5
}
var d = new dd()
console.log(d.sfs())


