import React from 'react';
import { Input,Layout} from 'antd';


export default class App extends React.Component{

onSearch=(value)=>{
    if(value===""){
        return
    }
    this.props.refreshKeyWord(value)
}

  render(){

    const { Header} = Layout;
    const { Search } = Input;

    return ( 
      <Header  style={{padding: 20,  background: '#fff',margin:'10 5 10'}} >
         <Search placeholder="input search text" onSearch={this.onSearch} enterButton style={{ width: 400 }}/>
      </Header>
    )
  }
}

