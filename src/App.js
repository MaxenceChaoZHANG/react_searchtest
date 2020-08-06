import React from 'react'
import './App.css'
import {BrowserRouter,Route, Switch,Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import PubSub from 'pubsub-js'
import MyNavigator from './componets/mynavigator/MyNavigator'
import WebCamWebAPI from './componets/webcam/WebCam'
import Search from './pages/search/Search'
import { Layout} from 'antd'
import Header from './componets/header/index'




export default class App extends React.Component{

 state={PhotoUploadVisible: false}


 handleApplyPhoto =(imgObj)=>{
   console.log('调用')
 }

  render(){
    const {Content, Footer} = Layout;
    const fileTypes=[{TYPE_CODE:1,TYPE_DESC:'说明'},{TYPE_CODE:2,TYPE_DESC:'TEST'}];

    return ( 
    <BrowserRouter>
    <Layout>
      <MyNavigator></MyNavigator>
      <Layout>
      <Header></Header>
        <Content style={{ margin: '24px 16px 0' }}>
             <Switch>
               <Route path='/webcam' render={()=>(<WebCamWebAPI
                    fileTypes={fileTypes}
                    addFile={(imgObj) => {
                        this.handleApplyPhoto(imgObj);
                    }}
                    onClose={() => {
                        this.setState({
                            PhotoUploadVisible: false
                        })}}
                    />)}
                />  
               <Route path='/search' component={Search}/>
               <Redirect  to='/search'/>
            </Switch>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  </Layout>
  </BrowserRouter>
    )
  }
}