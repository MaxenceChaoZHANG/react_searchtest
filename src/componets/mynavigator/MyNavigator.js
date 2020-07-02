import React from 'react';
// import logo from '../../logo.svg';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

export default class MyNavigator extends React.Component{

  onClick=({ item, key, keyPath, domEvent })=>{
      this.props.refreshSearchMode(key)
  }  
//   <img src={logo}  alt="logo" />
  render(){
    const { Sider } = Layout;  
    return ( 
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" style={{ height: '32px', margin: '16px'}}>
         
      </div>
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />} onClick={this.onClick}>
        QueryLocationRich获取旅客信息
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={this.onClick}>
        QueryByFlight获取旅客信息 String flight1
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />} onClick={this.onClick}>    
         QueryById获取旅客信息
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />} onClick={this.onClick}>
         QueryTestHistory获取旅客信息
        </Menu.Item>
      </Menu>
    </Sider>
    )
  }
}

