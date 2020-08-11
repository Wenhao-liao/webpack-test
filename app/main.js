//main.js 
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());
// console.lg(1111)

import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';
import './main.css'


render (<Greeter />,document.getElementById('root'))