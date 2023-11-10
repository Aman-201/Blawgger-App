import React, { useEffect, useState } from "react";
import dbservice from "../appwrite/db";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
function EditPost(){
    const [post,setPost]=useState([]);
    const slug=useParams();
    console.log(slug)
    const navigate=useNavigate();
    useEffect(()=>{
        console.log("inside useEffect editPost")
        if(slug){
            console.log(slug)
        dbservice.getPost({slug}).then((post)=>{if(post){setPost(post)} else{console.log("elso post")}})
        console.log(post);
    }
    else
    navigate('/');
    },[slug,navigate])
    console.log(post);
    return ( post?
       ( <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>

        </div>):null
    );
}
export default EditPost;