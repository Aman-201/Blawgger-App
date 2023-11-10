import React,{useEffect, useState} from "react";
import dbservice from "../appwrite/db";
import { Container, PostCard } from "../components";

function AllPost(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        dbservice.getPosts([]).then((posts)=>{if (posts)setPosts(posts.documents)}).catch((e)=>console.log(e));
    },[])
    
    return <div className="py-8 w-full">
        <Container>
            <div className="flex flex-wrap">
            {posts.map((post)=>(<div key={post.$id} className="p-2 w-1/4"><PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage}/></div>))}
            </div>
           
        </Container>
    </div>
}
export default AllPost;