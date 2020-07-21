import React, {Component} from 'react';
import { Container,Typography } from '@material-ui/core';
import AppChannel from '../channel/channel';
import AppChattingView from '../chattingView/chattingView';

class RootContainer extends Component{
    constructor(props){
        super(props);
        this.state = {channel: 'snutiise'};
        this.updateChannel = this.updateChannel.bind(this);
      }
    
      updateChannel(channel){
        this.setState({channel: channel});
      }

    render(){
        return (

            <Container>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    {/* <AppChannel channel = {this.state.channel} onUpdate = {this.updateChannel} /> */}
                    <AppChattingView channel = {this.state.channel}/>
               </Typography>
               
            </Container>
        );
    };

}

export default RootContainer;