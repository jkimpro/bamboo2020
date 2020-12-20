import React, {Component} from 'react';
import './App.css';
import RootContainer from './components/rootContainer/rootContainer';


//채널 기반 채팅이기에 변수는 channel 밖에 없음

class App extends Component{
  render(){
    return(
      <div className = "App">
        <RootContainer>
        {this.props}
        </RootContainer>
      </div>
      );
  }
}


export default App;
