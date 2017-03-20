/**
 * Created by Administrator on 2017/3/13.
 */
var a = require("./a");
import {multiply} from "./common.js";
const newMess = () => (multiply(3,3));
var app = document.getElementById('app');
app.innerHTML=newMess();

if(module.hot){
    module.hot.accept();
}