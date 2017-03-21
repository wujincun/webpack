/**
 * Created by Administrator on 2017/3/13.
 */
var a = require("./a");
import '../style/main.less';
import {multiply} from "./common.js";
const newMess = () => (multiply(4,4      ));
var app = document.getElementById('app');
app.innerHTML=newMess();

if(module.hot){
    module.hot.accept();
}