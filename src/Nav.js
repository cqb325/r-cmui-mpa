import React, {PureComponent} from 'react';
import FontIcon from 'r-cmui/components/FontIcon';
import Menu from 'r-cmui/components/Menu';
import data from './menu';
import store from 'store';
const {SubMenu, MenuItemGroup} = Menu;

class Nav extends PureComponent{
    constructor(props){
        super(props);

        this.menuIndex = 0;
    }

    gotoPage(item){
        store.set('cmui-lastSelectKey', item.getKey());
        if(this.props.gotoPage){
            this.props.gotoPage(item);
        }
    }

    componentDidMount(){
        let key = store.get('cmui-lastSelectKey');
        if(key) {
            window.setTimeout(()=>{
                this.refs.menu.selectItem(key);
            }, 10);
        }else{
            this.refs.menu.selectItem('dashboard');
        }
    }

    renderMenu(){
        return data.data.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: '8px'}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} href={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>;
            }else{
                return <MenuItemGroup key={this.menuIndex} title={menuItem.icon? <span><FontIcon icon={menuItem.icon}></FontIcon>{menuItem.text}</span>
                    : menuItem.text
                }>
                    {this.renderSubMenu(menuItem.children)}
                </MenuItemGroup>;
            }
        });
    }

    renderSubMenu(subMenus){
        if(!subMenus){
            return null;
        }
        return subMenus.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: '8px'}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} href={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>;
            }else{
                return <SubMenu key={this.menuIndex} title={menuItem.text}>
                    {this.renderMenuItemGroup(menuItem.children)}
                </SubMenu>;
            }
        });
    }

    renderMenuItemGroup(subMenus){
        if(!subMenus){
            return null;
        }
        return subMenus.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: '8px'}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} href={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>;
            }else{
                return null;
            }
        });
    }

    render(){
        return (
            <Menu ref="menu" style={{width: 200}} startIndex={2} theme="light" onSelect={this.gotoPage.bind(this)}>
                {this.renderMenu()}
            </Menu>
        );
    }
}

export default Nav;
