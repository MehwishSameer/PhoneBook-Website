import React,{useEffect,useState} from 'react';
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";


export default function Modify(){
    const [record,setrecord]=useState([]);
    let history=useHistory();
    let {id}=useParams("id");
    useEffect(() => {
        axios.get("http://localhost:3002/posts").then((res) => {
          setrecord(res.data);
        });
      }, []);
    
      const deleteContact = (id) => {
        axios.delete(`http://localhost:3002/posts/${id}`, {})
          .then(() => {
            console.log("deleted");
            setrecord(
              record.filter((val) => {
                return val.id != id;
              })
            )
          });
          setrecord(
            record.filter((val) => {
              return val.id != id;
            })
          )
      };

      let num=1;

    return(
    <div><h3 style={{padding:"70px", backgroundColor:"rgba(12, 130, 241, 0.596)",color:"white",fontFamily:"Impact, fantasy"}}>PhoneBook - Modify Contacts</h3>
        {record.map((value) => {
                    return (<div key={value.id}><div id='profile' onClick={()=>history.push(`/comment/${value.id}`)}> <br/>
                            <h3 style={{color:"darkolivegreen", display:"inline"}}>{num++}. {value.fname} {value.lname}</h3>
                      </div><button id='delete'
                            onClick={() => {deleteContact(value.id);}} >Delete Contact</button></div>);
                  })}</div>);
}