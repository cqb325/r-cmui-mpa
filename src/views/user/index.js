import 'core-js/es6/map';
import 'core-js/es6/set';

if(!window.requestAnimationFrame){
    window.requestAnimationFrame = function(callback) {
        setTimeout(callback, 0);
    };
}
import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.less';
import User from './user';

ReactDOM.render(<User />, document.querySelector('#root'));
