// Greeter.js
//#region 依据CommonJS规范导出
// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
//#endregion

// #region 依据ES6 module语法
// import React,{Component} from 'react';
// import config from './config.json';
// class Greeter extends Component{
//     render(){
//         return (
//             <div>
//                 {config.greetText}
//             </div>
//         )
//     }
// }
// export default Greeter

import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.scss'   // 引入

class Greeter extends Component{
  render() {
    return (
       //使用cssModule添加类名的方法
       <div className={styles.root}>
         <div className={styles.text}>
           .........
            {config.greetText}
          </div>
      </div>
    );
  }
}

export default Greeter


