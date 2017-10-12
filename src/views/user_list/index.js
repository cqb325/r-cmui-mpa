import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.less';
import 'r-cmui/styles/theme.less';
import 'r-cmui/styles/font-awesome.min.css';

class App extends React.PureComponent{
    render(){
        return (
            <div>
                user list
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
