import React from 'react'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import videojs from 'video.js'

const url = [
    {
        url:"rtsp://192.168.1.215:554/main_stream",
        name:"监控"
    }
]


class Test extends React.Component{


    constructor(props){

        super(props);
        this.state={
            Username:'',
        }
    }

    componentDidMount(){
        // var webRtcServer      = null;
        //     window.onload         = function() { 
		// 		console.log(""+"localhost"+":8000")
        //     webRtcServer      = new WebRtcStreamer("video","http://localhost:8000/");
        //         webRtcServer.connect("rtsp://192.168.1.215:554/main_stream");
                
        //     }
        
    }
   

        
    render(){
        return(
           <div>
              
               
           </div>
        )
    }


    
    
}

export default Test;