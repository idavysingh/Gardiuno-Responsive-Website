var Readable = require('stream').Readable  
var util = require('util'); 
var five = require('johnny-five');  

//This is stuff electron neds to run j5.js 

util.inherits(MyStream, Readable)  
function MyStream(opt) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__('stdin', function() {  
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
})

var board = new five.Board();
var valueDiv = document.querySelector("#plantValue");

board.on("ready", function() {
	var sensor = new five.Sensor({     //JSON
		pin: "A0",
		freq: 250, // emits the data envent every 250ms
		threshold: 2
		//emits change event when value has changed by +2/-2
	});

	sensor.on("change", function() {
		console.log(this.value); 
		valueDiv.innerHTML = this.value;
		var humidity 	="500"; 
		var light 		="800"; 
		var water		="1200";
		var moisture 	=this.value;
		var data = 'humidity='+ humidity +'&light='+ light +'&water='+water +'&moisture='+moisture;
		//var data = 'humidity="++"&light="Ford"&water="water"&moisture="moisture"';
		valueDiv.innerHTML = this.value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };

	xhttp.open("POST", "http://localhost:8888/echolivephp/insert.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(data);

	})
})