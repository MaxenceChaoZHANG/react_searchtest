import React from 'react';
import {
    Input, Card, Button,
    Select, Table
} from 'antd';
import {reqFindPerson,reqHistoryQuery,reqQueryByFlight} from '../../api/index'
import { columnsFindPerson,columnsHistoryQuery,columnsQueryByFlight} from './comlums'


const Option = Select.Option

// const dataSource = [
//     {
//         key: '1',
//         name: '胡彦斌',
//         age: 32,
//         address: '西湖区湖底公园1号',
//     },
//     {
//         key: '2',
//         name: '胡彦祖',
//         age: 42,
//         address: '西湖区湖底公园1号',
//     },
// ];

// const columns = [
//     {
//         title: '姓名',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: '住址',
//         dataIndex: 'address',
//         key: 'address',
//     },
// ];

export default class Search extends React.Component {


    state = {
        keyWord: '',
        total: 0, // 商品的总数量
        loading: false, // 是否正在加载中
        searchName: '', // 搜索的关键字
        searchType: 'FindPerson', // 根据哪个字段搜索
        data: [],
        columns: [],
        PhotoUploadVisible: false
    }

    /*
      获取数据显示
       */
    getData = async () => {

        this.setState({ loading: true }) // 显示loading

        const { searchName, searchType } = this.state
        // 如果搜索关键字有值, 说明我们要做搜索分页
        let result
        if (searchName) {
            if (searchType === 'FindPerson') {
               
            }else if(searchType === 'HistoryQuery'){
                result = await reqHistoryQuery(searchName)
                // console.log(result)
            }else if(searchType === 'QueryByFlight'){
                result = await reqQueryByFlight(searchName)
                console.log(result)
            }
        }
        let data
        this.setState({ loading: false }) // 隐藏loading

       if(searchType === 'FindPerson'){

       } else if (searchType === 'HistoryQuery') {
            if(result[0]&&result.length>0){
                const { tx_id, value  } = result[0]
                data=[{key: tx_id,
                    machine: value.machine,
                    flightNumber:value.flightnumber ,
                    location: value.location,
                    time:value.time}]
                this.setState({data:data})
            }
        }else if(searchType === 'QueryByFlight'){
            if(result[0]&&result.length>0){
                data=result.map((item,index)=>{
                    return {
                        key: index,
                        person:item.Key,
                        machine: item.Record.machine,
                        flightNumber:item.Record.flightnumber ,
                        location: item.Record.location,
                        time:item.Record.time
                    }
                })
                this.setState({data:data}) 
            }
        }
    }

    onChange = value => {
        this.setState({ searchType: value })
        if(value==='FindPerson'){
           this.setState({ columns:columnsFindPerson,data: [] })
        }
        if(value==='HistoryQuery'){
            this.setState({ columns:columnsHistoryQuery,data: [] })
        }
        if(value==='QueryByFlight'){
            this.setState({ columns:columnsQueryByFlight,data: [] })
        }
    }

    render() {

        const { data, total, loading, searchType, searchName,columns } = this.state
        const title = (
            <span>
                {/* 受控组件 onChange */}
                <Select
                    value={searchType}
                    style={{ width: 150 }}
                    onChange={this.onChange}
                >
                    <Option value='FindPerson'>FindPerson</Option>
                    <Option value='HistoryQuery'>HistoryQuery</Option>
                    <Option value='QueryByFlight'>QueryByFlight</Option>

                </Select>
                <Input
                    placeholder='关键字'
                    style={{ width: 150, margin: '0 15px' }}
                    // margin单个可以写数值省略单位，多个字符串不能省略单位
                    value={searchName}
                    onChange={event => this.setState({ searchName: event.target.value })}
                />
                {/*使用箭头函数*/}
                <Button type='primary' onClick={() => this.getData()}>搜索</Button>
            </span>
        )

        return (

            <Card title={title} >
                <Table ordered
                    loading={loading}
                    dataSource={data}
                    columns={columns}
                    pagination={{
                        total,
                        defaultPageSize: 4,
                        showQuickJumper: true
                    }}>
                </Table>
            </Card>


        )
    }
}

