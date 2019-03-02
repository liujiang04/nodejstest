var xmlreader = require("xmlreader");
var fs = require("fs");

var xml_string = '<response id="1" shop="aldi">'
    + 		'This is some other content'
    +		'<who name="james">James May</who>'
    + 		'<who name="sam">'
    +			'Sam Decrock'
    +			'<location>Belgium</location>'
    +		'</who>'
    + 		'<who name="jack">Jack Johnsen</who>'
    +		'<games age="6">'
    +			'<game>Some great game</game>'
    +			'<game>Some other great game</game>'
    +		'</games>'
    +		'<note>These are some notes</note>'
    +	'</response>';

xmlreader.read(xml_string, function(errors, response){
    if(null !== errors ){
        console.log(errors)
        return;
    }
    console.log( response.response );
    console.log( response.response.text() );
});

const exml = "/Users/admin/Documents/ljworkspace/local/egret/ProStoneAge/ProStoneAge/StoneAppPro/resource/mySkins/HomeCity.exml"

fs.readFile(exml, 'utf8', function(err, data){
    console.log(data);
});
