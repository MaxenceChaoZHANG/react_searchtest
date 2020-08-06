import React from 'react';
import './index.less'
import { Layout, Menu } from 'antd';
import {Link, withRouter} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

class MyNavigator extends React.Component{

  onClick=({ item, key, keyPath, domEvent })=>{
      // this.props.refreshSearchMode(key)
  }  
//   <img src={logo}  alt="logo" />
  render(){
    const { Sider } = Layout;  
    return ( 
      <Sider>
      <div className="left-nav">
      <Link to='/' className="left-nav-header">
          <img src={logo} alt="logo"/>
          <h1>旅客追踪</h1>
        </Link>
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />} >
              <Link to='/search'>
                <span>信息查询</span>
              </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} >
              <Link to='/webcam'>
                <span>人脸识别</span>
              </Link>
        </Menu.Item>
      </Menu>
      </div>
      </Sider>
  
    )
  }
}

/*
withRouter高阶组件:
包装非路由组件, 返回一个新的组件
新的组件向非路由组件传递3个属性: history/location/match
 */
export default withRouter(MyNavigator)