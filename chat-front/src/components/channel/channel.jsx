import React, {Component} from 'react';
import {Button,Input, Container, Box} from '@material-ui/core';

class Channel extends Component{

    updateChannel(event){
        if(event.target.value != this.state.channel) this.props.onUpdate(event.target.value);
    }

    keyUpdateChannel(event){
        if(event.keyCode ==13){
            if(event.target.value != this.state.channel) this.props.onUpdate(event.target.value);
        }
    }

    render(){

        return(
            <header className = "Channel-header">
                <h1 className ="Channel-title">chatting app</h1>
                <Input type = "text" className = "channel" placeholder="channel name" onBlur = {this.updateChannel} onKeyDown={this.keyUpdateChannel} />
            </header>
        );
    }
}

export default Channel;