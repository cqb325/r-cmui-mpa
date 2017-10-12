import React, {PureComponent} from 'react';
import classNames from 'classnames';
import grids from '../utils/grids';

class Label extends PureComponent{
    render(){
        let className = classNames('cm-label', this.props.className, grids.getGrid(this.props.grid));
        let eleName = this.props.component || 'div';
        return React.createElement(eleName, {
            className: className,
            style: this.props.style
        }, this.props.children);
    }
}

export default Label;
