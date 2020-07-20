import React, {Component} from 'react';

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
                <input type = "text" className = "channel" placeholder="channel name" onBlur = {this.updateChannel} onKeyDown={this.keyUpdateChannel} />
            </header>
        );
    }
}

export default Channel;