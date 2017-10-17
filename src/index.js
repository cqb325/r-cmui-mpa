import 'core-js/es6/map';
import 'core-js/es6/set';

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
        setTimeout(callback, 0);
    };
}
import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import 'r-cmui/styles/theme.less';
import 'r-cmui/styles/font-awesome.min.css';
import App from './app';

ReactDOM.render(<App />, document.querySelector('#root'));
