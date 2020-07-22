import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FormControl, InputLabel, Input, Paper,CssBaseline,
    Typography, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles';

const firebase = require('firebase');

class SignupComponent extends Component{

    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''
        };
    }


    render(){

        const {classes} = this.props; //styles에서 가져옴

        return( 
            <main className = {classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className = {classes.paper}> 
                    <Typography component='h1' variant='h5'> 
                        Sign Up
                    </Typography>
                    <form onSubmit={(e)=> this.submitSignUp(e)} className = {classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'>Enter your email</InputLabel>
                            <Input autoComplete='email' onChange={(e) =>this.userTyping('email', e)} autoFocus id='signup-email-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'> Create a password </InputLabel>
                            <Input type = 'password' onChange={(e) => this.userTyping('password', e)} id='signup-password-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'> Confirm your password </InputLabel>
                            <Input type = 'password' onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                        </FormControl>
                        <Button type = 'submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                    </form>

                    {
                        this.state.signupError ? 
                        <Typography className = {classes.errorText}  component='h5' variant='h6'>
                            {this.state.signupError}
                        </Typography> : null

                    }

                    <Typography component='h5' variant='h6' className = {classes.hasAccountHeader}> Already had it </Typography>
                    <Link className ={classes.logInLink} to ='/login'>Log In!</Link>
                </Paper>
            </main>

        )
    }

    formIsValid = ()=> this.state.password === this.state.passwordConfirmation;


    userTyping =(type, e) =>{
        console.log(type,e);
        switch(type){
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            case 'passwordConfirmation':
                this.setState({passwordConfirmation: e.target.value});
                break;
            default: 
                break;
       
        }
    }

    submitSignUp = (e) =>{
        
        e.preventDefault();
        if(!this.formIsValid()){
            this.setState({signupError: 'Passwords do not match!'});
        }

        //firebase 관련 작업 (firebase db 에 등록하는 작업)
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password) //실행하고 -> then 실행됨
            .then(authRes => {              //두가지를 사용함 authentication database 와 일반 database 를 사용
                const userObj = {
                    email: authRes.user.email

                };
                firebase.firestore()
                .collection('users')
                .doc(this.state.email)
                .set(userObj)
                .then(() =>{
                    this.props.history.push('/dashboard')
                }, dbError =>{
                    console.log(dbError);
                    this.setState({signupError:'Failed to add user'}); //db 쪽에서 일어나는 오류
        
                })
            }, authError =>{
                console.log(authError);
                this.setState({signupError:'Failed to add user'}); //auth 쪽에서 일어나는 오류

            })
    }

}

//style을 가미한 컴포넌트를 리턴함
export default withStyles(styles)(SignupComponent);