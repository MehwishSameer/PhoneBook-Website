import { Button } from "bootstrap";
import React, { useState } from "react";
import Alert from "./Alert";
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";

export default function S(props){
   
  let history=useHistory();
  const [contact,setcontact]=useState([]);
  let {id}=useParams("id");

const handleOnChange = (event)=>{
    setname1(event.target.value);
}  

const handleOnChange2 = (event)=>{
    setname2(event.target.value);
}  

const handleOnChange1 = (event)=>{
    setnumber(event.target.value);
}  

const handleOnChange3 = (event)=>{
    setcity(event.target.value);
}  

const handleOnChange4 = (event)=>{
    setcountry(event.target.value);
}  

const [name1,setname1]=useState('');
const [name2,setname2]=useState('');
const [number,setnumber]=useState('');
const [city,setcity]=useState('');
const [country,setcountry]=useState('');
const [alert,setalert]=useState(null);

  const showAlert = (msg, type)=>{
    setalert({message:msg,
              type:type});

  }

window.onload = function(){
    const navStyle=document.getElementById('title').style;
       setInterval(() => {
        navStyle.transform="rotate(180deg)";
      }, 500);
      setInterval(() => {
        navStyle.transform="rotate(0deg)";
      }, 1000);
    if (name1===''){};
};

function save(){
    if (name1===''||name2===''||number===''||city===''||country===''){

        return;}
    else{

        showAlert(" Contact Added Successfully","success");
        setTimeout(() => {
            setalert(null)
          }, 1500);
          axios.post("http://localhost:3002/posts",{
            fname:name1,
            city:city,
            country:country,
            contact:number,
            lname:name2,
            id:id}).then((response) => {
                location.reload();
            const addcontact = {fname:name1,city:city,country:country,contact:number,lname:name2};
            setcontact([...contact,addcontact]);
            })
    setname1('');
    setname2('');
    setnumber('');
    setcity('');
    setcountry('');
}};


    return (
        <>
        <div className="space" ><Alert alert={alert}></Alert></div>
        <div className="fform">
            <br/>
    <h2 id="main">Who's Calling From That Number? {props.name}</h2>
    <br></br>
    <Formik><form>
    <div id="formTitle">First Name:</div>
    <input type="text" value={name1} id="name1" onChange={handleOnChange} required/>
    <br/><br/>
    <div id="formTitle">Last Name:</div>
    <input type="text" value={name2} id="name2" onChange={handleOnChange2} required/><br/><br/>
    <div id="formTitle">Contact No:</div>
    <input type="number" value={number} id="number" onChange={handleOnChange1} required/>
    <br/><br/>
    <div id="formTitle">Country:</div>
    <input type="country" value={country} id="country" onChange={handleOnChange4} required/>
    <br/><br/>
    <div id="formTitle">City:</div>
    <input type="city" value={city} id="city" onChange={handleOnChange3} required/>
    <button onClick={save} id="sub" className="btn btn-outline-warning">Submit</button></form></Formik>
    <br/><br/>
  </div></>)
}

