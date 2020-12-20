import React, {Component} from 'react';
import styles from './styles';
import {Button, Container, Grid, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

class ChatViewComponent extends Component{

    componentDidUpdate = () =>{ //component가 mounted 된 상태에서만 콜이됌
        const container = document.getElementById('chatview-container');
        if(container)
            container.scrollTo(0, container.scrollHeight);
    }

    render(){
        const {classes, chat, user} = this.props;
        //래퍼런스를 index로 사용하고 있음

        if(chat === undefined){
            return (
                <main id = 'chatview-container'className = {classes.content}></main>
            );
        }
        else{
            
            chat.messages.map((_msg, _index) =>{
                console.log(_msg.message);
            });

            return(
                <div>
                    <div className = {classes.chatHeader}>
                        {chat.users.filter(_usr => _usr !==user)[0]} 님과 대화하고 있습니다.
                    </div>
                    <main id='chatview-container' className = {classes.content}>
                        {
                            chat.messages.map((_msg, _index) =>{
                                return(
                                    //친구면 왼쪽 배치, 나일 경우 오른쪽에 배치
                                    <div key = {_index} className = {_msg.sender === user ? classes.userSent : classes.friendSent}>
                                        {_msg.message}

                                        {/* 여기에 필요시 버튼 삽입하기  && res 관련 code에 따라서 분기처리 하기*/}
                                        {_msg.sender !== user ?
                                        //  <Button className = {classes.optionBtn}> Sample Button </Button>
                                        <Grid container spacing={1}>
                                            <Grid container item xs={12} spacing={2}>
                                                <React.Fragment>
                                                    <Grid item xs={6}>
                                                        <Button className={classes.paper}> 옵션1 </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button className={classes.paper}> 옵션2 </Button>
                                                    </Grid>
                                                </React.Fragment>
                                            </Grid>
                                            <Grid container item xs={12} spacing={2}>
                                                <React.Fragment>
                                                    <Grid item xs={6}>
                                                        <Button className={classes.paper}> 옵션3 </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button className={classes.paper}> 옵션4 </Button>
                                                    </Grid>
                                                </React.Fragment>
                                            </Grid>
                                        </Grid>
                                        : null}
                                    </div> 
                                )
                            })
                        }
                    </main>
                </div>
            );
        }
        
    }

}

export default withStyles(styles)(ChatViewComponent);