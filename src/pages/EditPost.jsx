import React, { useEffect, useState } from "react";
import dbservice from "../appwrite/db";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
function EditPost(){
    const [post,setPost]=useState();
    const {slug}=useParams();
    console.log(typeof slug)
    const navigate=useNavigate();
    useEffect(() => {
        console.log("inside effect")
        if (slug) {
            console.log(slug)
            dbservice.getPost(slug).then((post) => { console.log(post)
                if (post) { console.log("inside if");setPost(post);}
                else navigate("/");
            }).catch((e)=>{console.log(e)});
        } else navigate("/");
    }, [slug, navigate]);
console.log(post)
    // const a=dbservice.getPost(slug).then((post) => {
    //     if (post) {
    //         setPost(post)
    //     }
        
    // }).catch((e)=>{console.log(e)})
    // console.log(a);
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost;