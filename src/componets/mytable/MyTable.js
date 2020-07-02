import React from 'react';
import axios from 'axios'
import Qs from 'qs'
import { Table } from 'antd';



export default class App extends React.Component{


 state={data1:{},
        data2:{},
        data3:{},
        data4:[],
        searchMode:''
    }

    columnsQueryById = [
        {
          title: 'BoardingGate',
          dataIndex: 'boardingGate',
        },
        {
          title: 'TakeoffTime',
          dataIndex: 'takeoffTime',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'FlightNumber',
          dataIndex: 'flightNumber',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Location',
          dataIndex: 'location',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Machine',
          dataIndex: 'machine',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Time',
          dataIndex: 'time',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
      ]
    columnsQueryByFlight = [
        {
            title: 'Person',
            dataIndex: 'person',
          },
        {
          title: 'BoardingGate',
          dataIndex: 'boardingGate',
        },
        {
          title: 'TakeoffTime',
          dataIndex: 'takeoffTime',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'FlightNumber',
          dataIndex: 'flightNumber',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Location',
          dataIndex: 'location',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Machine',
          dataIndex: 'machine',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Time',
          dataIndex: 'time',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
      ];
    columnsQueryLocationRich = [
        {
          title: 'BoardingGate',
          dataIndex: 'boardingGate',
        },
        {
          title: 'TakeoffTime',
          dataIndex: 'takeoffTime',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'FlightNumber',
          dataIndex: 'flightNumber',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Location',
          dataIndex: 'location',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Machine',
          dataIndex: 'machine',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Time',
          dataIndex: 'time',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
      ];
    columnsQueryTestHistory = [
        {
          title: 'BoardingGate',
          dataIndex: 'boardingGate',
        },
        {
          title: 'TakeoffTime',
          dataIndex: 'takeoffTime',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'FlightNumber',
          dataIndex: 'flightNumber',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Location',
          dataIndex: 'location',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Machine',
          dataIndex: 'machine',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Time',
          dataIndex: 'time',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
      ];


  onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }
  
  UNSAFE_componentWillReceiveProps=(newProps)=>{
      
    let chedata =''
    let searchMode=newProps.searchMode
    let url=''

    if(searchMode==="1"){
        chedata ={location:newProps.keyWord}
        url='http://47.97.121.21:8080/user/LocationRichQuery'
     }else if(searchMode==="2"){
        chedata ={flight:newProps.keyWord}
        url='http://47.97.121.21:8080/user/QueryByFlight'
     }else if(searchMode==="3"){
        chedata ={id:newProps.keyWord}
        url='http://47.97.121.21:8080/user/QueryById'
     }else if(searchMode==="4"){
        chedata ={id:newProps.keyWord}
        url='http://47.97.121.21:8080/user/testHistoryQuery'
     }

    axios({
      header: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      method:'post',
      url:url,
      data:Qs.stringify(chedata),//在传参之前先用qs.stringify转化一下格式
    //   responseType:'json'
    }).then((response) => {
      console.log(response)
      let data =response.data

     if(searchMode==="1"){
        this.setState({ data1: data ,searchMode: searchMode}) 
     }else if(searchMode==="2"){
        this.setState({ data2: data ,searchMode: searchMode}) 
     }else if(searchMode==="3"){
        this.setState({ data3: data ,searchMode: searchMode}) 
     }else if(searchMode==="4"){
        this.setState({ data4: data ,searchMode: searchMode}) 
     }
      
    }).catch((err)=>{
      console.log(err)
    })
}

  render(){
    let state =this.state
    let searchMode=state.searchMode
    let data=''

    if(searchMode==="1"){
        data=state.data1.map((item,index)=>{
            return {
                key: index,
                person:item.Key,
                boardingGate:item.Record.boardinggate,
                takeoffTime:item.Record.currenttakeofftime ,
                flightNumber:item.Record.flightnumber ,
                location: item.Record.location,
                machine: item.Record.machine,
                time:item.Record.time
            }
        })
       
    }else if(searchMode==="2"){
        data=state.data2.map((item,index)=>{
            return {
                key: index,
                person:item.Key,
                boardingGate:item.Record.boardinggate,
                takeoffTime:item.Record.currenttakeofftime ,
                flightNumber:item.Record.flightnumber ,
                location: item.Record.location,
                machine: item.Record.machine,
                time:item.Record.time
            }
        })
       
    }else if(searchMode==="3"){
       
       data= [
        {
          key: '1',
          boardingGate:state.data3.boardinggate,
          takeoffTime:state.data3.currenttakeofftime ,
          flightNumber:state.data3.flightnumber ,
          location: state.data3.location,
          machine: state.data3.machine,
          time:state.data3.time
        },  
      ];
      if(this.state.data3==="")
      data=[]

    }else if(searchMode==="4"){
        data=state.data4.map((item,index)=>{
            return {
                key: index,
                boardingGate:item.value.boardinggate,
                takeoffTime:item.value.currenttakeofftime ,
                flightNumber:item.value.flightnumber ,
                location: item.value.location,
                machine: item.value.machine,
                time:item.value.time
            }
        })     
    }
  
    if(searchMode==="1"){
        return ( 
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,background: '#fff'}}>
              <Table columns={this.columnsQueryLocationRich} dataSource={data} onChange={this.onChange} />
            </div>  
      )
       
    }else if(searchMode==="2"){
        return ( 
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,background: '#fff'}}>
              <Table columns={this.columnsQueryByFlight} dataSource={data} onChange={this.onChange} />
            </div>  
      )
       
    }else if(searchMode==="3"){
        return ( 
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,background: '#fff'}}>
              <Table columns={this.columnsQueryById} dataSource={data} onChange={this.onChange} />
            </div>  
      )
    }else if(searchMode==="4"){
        return ( 
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,background: '#fff'}}>
              <Table columns={this.columnsQueryTestHistory} dataSource={data} onChange={this.onChange} />
            </div>  
      )
    }else{
        return ( 
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,background: '#fff'}}>
              当前查询没有数据
            </div>  
      )

    }

    
  }
}

