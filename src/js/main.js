/**
 * Created by Administrator on 2017/3/13.
 */
var a = require("./a");
import '../style/main.less';
import {multiply} from "./common.js";
const newMess = () => (`
    DEV:${DEVELOPMENT.toString()}</br>
    PRO:${PRODUCTION.toString()}</br>
`);


var app = document.getElementById('app');
app.innerHTML=newMess();

if(module.hot){
    module.hot.accept();
}