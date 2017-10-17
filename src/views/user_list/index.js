import 'core-js/es6/map';
import 'core-js/es6/set';

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
        setTimeout(callback, 0);
    };
}

import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.less';

class App extends React.PureComponent {
    displayName = 'App';
    render () {
        return (
            <div>
                user list
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
