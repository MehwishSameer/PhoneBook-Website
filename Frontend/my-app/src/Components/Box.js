import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Box extends Component {
    render(){
      let {name,code,numCode,amb,pol,fire,dispatch}=this.props;
      amb= amb.toString();
      pol= pol.toString();
      fire= fire.toString();
      dispatch= dispatch.toString();
      if(amb==='')
      amb='Not Available';
      if(pol==='')
      pol='Not Available';
      if(dispatch==='')
      dispatch='Not Available';
      if(fire==='')
      fire='Not Available';
    if((name==='Not Available'&&code==='Not Available'&&numCode==='Not Available')){
      
    }
    else{
    return (
      <div className='box'>
        <div className='e_body'>
                      <h5>{name}</h5>
            <p>ISO-Code: {code}<br/>ISO-Numeric: {numCode}</p>
            <span className='btn btn-warning' id='readMore'><Link to={{pathname:'./description', state:{name,code,numCode,amb,pol,fire,dispatch}}}>Read More </Link></span>
        </div>
      </div>
    )}
  }}
