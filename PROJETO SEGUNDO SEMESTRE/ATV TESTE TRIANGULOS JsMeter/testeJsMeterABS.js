const jm = require('js-meter')
var VerificaTriangulo = require("./VerificaTriangulo");

const isPrint = true
const isKb = true       // or Mb
const m = new jm({isPrint, isKb})
 
for(var i=0; i<1000000; i++){
    //Math.random();
    console.log(VerificaTriangulo.FormaTrianguloUsandoABS(3, 3, 3));    
}
 
const meter = m.stop()
// RAM        :  1080 kb
// HeapTotal  :  1024 kb
// HeapUsed   :  -7.2265625 kb
// External   :  0 kb
// CPU        :  3.344 ms
// Spend time :  1004 ms