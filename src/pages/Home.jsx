import React, { useEffect, useState } from "react";
import dbservice from "../appwrite/db";
import { Container , PostCard } from "../components";



function Home()
{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        dbservice.getPosts([]).then((post)=>{if(post)setPosts(post.documents)}).catch((e)=>{throw e})
       
    },[])
    { if(posts.length===0){
        return (
            <div className="w-full py-8 mt-4 text-center"> 
            <Container >
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-blue-500"> Login to read Posts</h1>
                    </div>
                </div>
            </Container>
            </div>
        );

    }
    else{
        return(
        <div className="w-full py-8">
            <Container >
                <div className="flex flex-wrap">
                    {posts.map((post)=>(<div key={post.$id} className="p-2 w-1/4"> <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage}/></div>))}
                    </div>
                    </Container>
        </div>);
    }}
}
export default Home;