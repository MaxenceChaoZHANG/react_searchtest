import React from 'react';
import './App.css';
// import PropTypes from 'prop-types';
// import PubSub from 'pubsub-js'
// import {link,Route} from 'react-router-dom'yarn 
import MyNavigator from './componets/mynavigator/MyNavigator'
import MySearch from './componets/mysearch/MySearch'
import MyTable from './componets/mytable/MyTable'
import { Layout} from 'antd';


export default class App extends React.Component{

 state={searchMode:'',
        keyWord:''}

 refreshKeyWord = (keyWord) => this.setState({keyWord})

 refreshSearchMode = (searchMode) => this.setState({searchMode})

  render(){
    const {Content, Footer} = Layout;

    return ( 
    <Layout>
      <MyNavigator refreshSearchMode={this.refreshSearchMode}></MyNavigator>
      <Layout>
        <MySearch refreshKeyWord={this.refreshKeyWord}></MySearch>
        <Content style={{ margin: '24px 16px 0' }}>
          <MyTable keyWord={this.state.keyWord} searchMode={this.state.searchMode}></MyTable>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  </Layout>
    )
  }
}

