import React, {Component} from 'react';
import './App.css';
import AppChannel from './components/channel/channel';
import AppChattingView from './components/chattingView/chattingView';


//채널 기반 채팅이기에 변수는 channel 밖에 없음

class App extends Component{
  constructor(props){
    super(props);
    this.state = {channel: 'snutiise'};
    this.updateChannel = this.updateChannel.bind(this);
  }

  updateChannel(channel){
    this.setState({channel: channel});
  }

  render(){
    return(
      <div className = "App">
          <AppChannel channel = {this.state.channel} onUpdate = {this.updateChannel} />
          <AppChattingView channel = {this.state.channel}/>

      </div>

    );
  }
}


export default App;
