import React, {Component} from 'react';
import {TextField, withStyles} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import styles from './styles';
import axios from 'axios';

class ChatTextBoxComponent extends Component{

    constructor(){
        super();
        this.state = {
            chatText : ''
        };
    }

    render(){
        const {classes}  = this.props;
        return(
            <div className={classes.chatTextBoxContainer}>
                <TextField placeholder ='Type your Message...'
                onKeyUp={(e)=> this.userTyping(e)}
                id='chattextbox'
                className ={classes.chatTextBox}
                onFocus={this.userClickedInput}> </TextField>
                <Send onClick = {this.submitMessage} className={classes.sendBtn}></Send>
            
            </div>
        );
    }

    userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({chatText: e.target.value});
    
    //find the all space char
    //빈거거나, 스페이스 바께 없을 때는 취소
    messageValid = (txt) => txt && txt.replace(/\s/g, '').length;

    submitMessage = () =>{
        if(this.messageValid(this.state.chatText)){
            this.props.submitMessageFn(this.state.chatText);
          
            //call parent function
            document.getElementById('chattextbox').value = '';

            //axios url call
            
            


        }
    }
    userClickedInput = () => this.props.messageReadFn();
}

//withstyle 에 style 자바스크립트를 적용할때에는 className을 명시해야함
export default withStyles(styles)(ChatTextBoxComponent);