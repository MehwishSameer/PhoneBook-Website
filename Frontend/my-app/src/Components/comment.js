import React from "react";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Comment() {  
    const [record,setrecord]=useState([]);
    const [comment,setcomment]=useState([]);
    const [addC,setaddC]=useState("");
    let {id}=useParams("id");
    useEffect(() => {
        axios.get(`http://localhost:3002/posts/comment/${id}`).then((res) => {
          setrecord(res.data);
        });
        axios.get(`http://localhost:3002/comments/${id}`).then((res) => {
          setcomment(res.data);
        });
      }, []);

      const deleteComment = (id) => {
        axios.delete(`http://localhost:3002/comments/${id}`, {})
          .then(() => {
            setcomment(
              comment.filter((val) => {
                return val.id != id;
              })
            );
          });
      };

      function addComment(){
         axios.post("http://localhost:3002/comments/",{
          commentText:addC, 
          PostId:id})
          .then((res) => {
            const additionalComment = {commentText:addC};
            setcomment([...comment,additionalComment]);
            setaddC("");
      })}
      return(<>
        <div><h3 style={{padding:"70px", backgroundColor:"rgba(12, 130, 241, 0.596)",color:"white",fontFamily:"Impact, fantasy"}}>PhoneBook - Comment</h3></div>
        <div id="whole"><div className="box" id="comment"><div className="e_body" id="comment1">
        <h3 style={{color:"darkolivegreen"}}> {record.fname} {record.lname}</h3>
        <br/>
        <h5> {record.contact} <br/>{record.city}, {record.country}</h5>
          <input
          id="addComment"
            type="text"
            placeholder="Comment..."
            value={addC}
            onChange={(event) => {
              setaddC(event.target.value);
            }}/>
        <button id="addC_btn" onClick={addComment}> Add Comment</button></div></div>
        <div className="box" id="comment">
        <div className="e_body" id="comment1">
          {comment.map((comment)=>{
            return (<div key={comment.id}><div id='delete_C'>{comment.commentText} 
                   </div> <button id="cancel" onClick={() => {deleteComment(comment.id);}}>X</button><span id="space"/></div>);
        })}</div>
        </div>
        </div></>
      );
}
