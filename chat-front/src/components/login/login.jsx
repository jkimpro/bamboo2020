import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FormControl, InputLabel, Input, Paper,CssBaseline,
    Typography, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles';


const firebase = require('firebase');

class LoginComponent extends Component{

    constructor(){

        super();
        this.state = {
            email: null,
            password: null,
            loginError: ''
        };

    }
    render(){

        const {classes} = this.props;

        return( 
            <main className = {classes.main}>
                <CssBaseline>
                </CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        로그인 창
                    </Typography>
                    <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-email-input'> 이메일</InputLabel>
                            <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e)=>this.userTyping('email',e)}></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-password-input'> 비밀번호 </InputLabel>
                            <Input type = 'password' id='login-password-input' onChange={(e)=>this.userTyping('password',e)}></Input>
                        </FormControl>

                        <Button type = 'submit' fullWidth variant ='contained' color ='primary' className={classes.submit}> 로그인 </Button>
                    </form>
                    {

                        this.state.loginError ?
                        <Typography className={classes.errorText} component='h5' variant='h7'>
                            정확하지 않은 이메일 형식입니다!
                        </Typography>:
                        null
                    }
                    <Typography component='h5' variant='h7' className={classes.noAccoutHeader}> 로그인이 안되는 경우 회원가입을 요청드립니다.</Typography>
                    <Link className = {classes.signUpLink} to='/signup'> 회원가입 </Link>
                </Paper>

            </main>
        
        )
    }
    userTyping = (type,e) =>{
        switch(type){
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default: break;
        }
        console.log(type,e);
    }

    submitLogin = (e) =>{
        e.preventDefault(); //prevent the form page refreshing automatically (재 리프레시 할경우 form 이 지워지게 됨)
        //firebase
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                this.props.history.push('/dashboard');

            },err =>{
                this.setState({loginError: 'Server error'});
                console.log(err);
            });
    }

}

export default withStyles(styles)(LoginComponent);