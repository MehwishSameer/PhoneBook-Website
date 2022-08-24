import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/about';
import EmergencyContacts from './Components/emergency-contacts';
import Description from './Components/Description';
import Modify from './Components/modify';
import Comment from './Components/comment';

const rootElement= document.getElementById('root');
const root= createRoot(rootElement);
root.render((
  
    <BrowserRouter>
    <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/emergency-contacts" component={EmergencyContacts}/>
            <Route exact path="/description" component={Description}/>
            <Route exact path="/modify" component={Modify}/>
            <Route exact path="/comment" component={Comment}/>
            </Switch>
  </BrowserRouter>)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
