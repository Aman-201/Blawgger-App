import { Link } from "react-router-dom";
import dbservice from "../appwrite/db";
function PostCard({$id,title,featuredImage}){
    return (
        <Link to={`/post/${$id}`}>
        <div className="rounded-xl w-full bg-gray-100 p-4 ">
            <div className="w-full justify-center mb-4">
                <img src={dbservice.getFilePreview(featuredImage)} alt=""/>
            </div>
            <h2 className="test-xl font-bold">{title}</h2>
        </div>
        </Link>
    )
}
export default PostCard;