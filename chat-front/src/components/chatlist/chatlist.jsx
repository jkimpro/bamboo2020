import React ,{Component} from 'react';
import {withStyles, List, ListItem, ListItemText, ListItemAvatar
    , Avatar, Typography, Divider, Button, ListItemIcon } from '@material-ui/core';
import {NotificationImportant} from '@material-ui/icons'; 
import styles from './styles';

class ChatListComponent extends Component{

    render(){

        const { classes } = this.props;

        if(this.props.chats.length >0 ){
          
            return(
                <main className={classes.root}>
                    <Button variant = 'contained'
                    fullWidth
                    color = 'primary'
                    className={classes.newChatBtn}
                    onClick = {this.newChat}>
                         New Message
                    </Button>
                    <List>
                        {
                            this.props.chats.map((_chat, _index) =>{
                                return(
                                    <div key ={_index}>
                                    <ListItem onClick ={()=> this.selectChat(_index)}
                                        className = {classes.listItem}
                                        selected = {this.props.selectedChatIndex === _index}
                                        alignItems = 'flex-start'>
                                        <ListItemAvatar>
                                            <Avatar alt= 'Remy Sharp'>
                                            {_chat.users.filter(_user => _user !==this.props.userEmail)[0].split('')[0]}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={_chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                                        secondary={
                                            <React.Fragment>
                                                <Typography component = 'span' color='textPrimary'>
                                                {
                                                    _chat.messages[_chat.messages.length -1].message.substring(0,30) + '...'
                                                }
                                                </Typography>
                                            </React.Fragment>
                                        }>

                                        </ListItemText>
                                        {
                                            _chat.receiverHasRead === false && !this.userIsSender(_chat) ?
                                            <ListItemIcon>
                                                <NotificationImportant className ={classes.unreadMessage}></NotificationImportant>
                                            </ListItemIcon> : null
                                        }
                                    </ListItem>
                                    <Divider/>
                                    </div>
                                )
    
                            })
                        }
    
                    </List>
                </main>
            );    
        }
        else{
            return (
                <main className= {classes.root}>
                    <Button variant = 'contained'
                    fullWidth
                    color = 'primary'
                    onClick = {this.newChat}
                    className = {classes.newChatBtn}>
                        New Message
                    </Button>
                    <List></List>
                </main>
            );
        }
        
    }

    newChat = () =>{
        this.props.newChatBtnFn();
    } 
    selectChat = (index) =>{ 
        this.props.selectChatFn(index);
    }

    userIsSender = (chat) =>  chat.messages[chat.messages.length-1].sender === this.props.userEmail;
    
    
}

export default withStyles(styles)(ChatListComponent);