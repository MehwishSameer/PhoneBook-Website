import React, { useEffect, useState } from "react";
import S from './Search';
import axios from "axios";

export default function Index(props){
  let name1='';
  let contact='';
  let city1='';
  let country1='';
    const [name,setname]=useState([]);
    const [number,setnumber]=useState([]);
    const [city,setcity]=useState([]);
    const [country,setcountry]=useState([]);
    useEffect(()=>{
  axios.get("http://localhost:3002/posts").then((res) => {  
            {res.data.map((value, key) => {
                name1+=value.fname+' '+value.lname+'\n';
                contact+=value.contact+'\n';
                city1+=value.city+'\n';
                country1+= value.country+'\n';
            })
    }
    setname(name1);
    setnumber(contact);
    setcity(city1);
    setcountry(country1)});});
    return(
        <>
        <div className="parent">
        <div className='top'>
        <S></S>
        <br/></div>
    <div className='right'>
      <br/>
      <h2 id="mainR">Contact List</h2>
      <br/>
      <h3 id="head"><pre> Name       Phone Number      City         Country</pre></h3>
      <hr/>
      <div className="row">
  <div className="column"><pre>{name}</pre></div>
  <div className="column"><pre>{number}</pre></div>
  <div className="column"><pre>{city}</pre></div>
  <div className="column"><pre>{country}</pre></div>
</div>
      </div></div>
      <div className='login'>
      <h1>Login Form</h1>
      <button type="button" className="btn btn-outline-secondary btn-lg">Signup</button>
      <button type="button" className="btn btn-primary btn-lg">Login</button></div>
      </>
    );
}