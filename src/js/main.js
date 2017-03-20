/**
 * Created by Administrator on 2017/3/13.
 */
var a = require("./a");
var app = document.getElementById('app');
app.innerHTML="<p>" + a.h1+""+a.event+"</p>";

if(module.hot){
    module.hot.accept();
}