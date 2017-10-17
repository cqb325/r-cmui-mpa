import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'r-cmui/components/Layout';
import Sider from 'r-cmui/components/Layout/Sider';
import Nav from './Nav';
import Dom from 'r-cmui/components/utils/Dom';
const {Header, Content} = Layout;

class App extends React.Component {
    displayName = 'App';
    gotoPage = (item) => {
        const desktop = Dom.dom(this.refs.desktop);
        desktop.attr('src', item.props.href);
    }

    render () {
        return (
            <Layout className="app">
                <Header>
                    <h3>CMUI v2.0.1</h3>
                </Header>
                <Layout>
                    <Sider>
                        <Nav gotoPage={this.gotoPage}/>
                    </Sider>
                    <Content>
                        <div className="frame-desktop">
                            <iframe title="desktop" width={'100%'} height={'100%'} frameBorder="0" scrolling="no" ref="desktop"></iframe>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
