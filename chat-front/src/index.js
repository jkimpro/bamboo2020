import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './components/login/login';
import DashboardComponent from './components/dashboard/dashboard';
import SignupComponent from './components/signup/signup';

const firebase = require('firebase');
require("firebase/firestore");

// firebase.initializeApp({
//   apiKey: "AIzaSyBDJIbUm1J0GqVgyNbopinpG2fX9WvHZP", // apiKey value에서 마지막에 A붙이기
//   authDomain: "chat-front-68a45.firebaseapp.com",
//   databaseURL: "https://chat-front-68a45.firebaseio.com",
//   projectId: "chat-front-68a45",
//   storageBucket: "chat-front-68a45.appspot.com",
//   messagingSenderId: "618671476249",
//   appId: "1:618671476249:web:576ff8a4e44db9948ba488",
//   measurementId: "G-NKKVMR5T39"
// });

const routing = (
  <Router>
    <div id = 'routing-container'>
        <Route path='/login' component = {LoginComponent}></Route>
        <Route path='/signup' component = {SignupComponent}></Route>
        <Route path='/dashboard' component = {DashboardComponent}></Route>

    
    </div>
  </Router>


);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
