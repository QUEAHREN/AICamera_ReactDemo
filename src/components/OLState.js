import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions, Badge } from 'antd';
import axios from 'axios';


class OLState extends React.Component{


    constructor(props){

        super(props);

        this.state={
            systemStatus:'success',
            isOline:0,
            systemStatusTxt:'运行中'
        }
        
    }


    render(){
        return(

            <Layout>
                <Descriptions title="" bordered>               
                    <Descriptions.Item label="设备状态" span={3}>
                    <Badge status={this.state.systemStatus} text={this.state.systemStatusTxt} />
                    </Descriptions.Item>                 
                </Descriptions>
            </Layout>
        )
    }
    
    componentDidMount(){

        const _this=this;  
        axios.defaults.withCredentials = true;
        axios.get('http://192.168.1.215:8080/System/Info/OnlineState')
        .then(function (response) {
            _this.setState({
                isOline:response.data.Result,
            });
            console.log(_this.state.isOline); 
            
        })
        .catch(function (error) {
            console.log(error); 
            _this.setState({
                isOline:1,   
            })
        })

        if (_this.state.isOline == 0){
            _this.setState({
                systemStatus:'success',
                systemStatusTxt:'运行中'
            });
        }
        else
            _this.setState({
                systemStatus:'error',
                systemStatusTxt:'错误'
            });


    }

}

export default OLState;
