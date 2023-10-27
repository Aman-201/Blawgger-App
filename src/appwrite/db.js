import configs from "../config/configs";
import { Client, Account, ID , Databases, Storage, Query} from "appwrite";

export class DbService{
client=new Client();
databases;
bucket;
constructor(){
    this.client.setEndpoint(configs.appwriteUrl).setProject(configs.appwriteProjectId);
    this.databases=new Databases(this.client);
    this.bucket=new Storage(this.client);
}
async createPost({title,slug,content,featuredImage,status,userId}){
    try{
        return await this.databases.createDocument(configs.appwriteDatabseId,configs.appwriteCollectionId,slug,{title,content,featuredImage,status,userId})
    }catch(error){
        throw error;
    }
}
async updatePost(slug,{title,content,featuredImage,status}){
    try{
        return await this.databases.updateDocument(configs.appwriteDatabseId,configs.appwriteCollectionId,slug,{title,content,featuredImage,status})
    }catch(error){
        throw error;
    }
}
async deletePost(slug){
    try{
         await this.databases.deleteDocument(configs.appwriteDatabseId,configs.appwriteCollectionId,slug)
         return 1;
    }catch(error){
        throw error;
    }
}
async getPost(slug){
    try{
         return await this.databases.getDocument(configs.appwriteDatabseId,configs.appwriteCollectionId,slug)
    }catch(error){
        throw error;
    }
}
async getPosts(queries=[Query.equal("status","active")]){
    try{
         return await this.databases.listDocuments(configs.appwriteDatabseId,configs.appwriteCollectionId,queries)
    }catch(error){
        throw error;
    }
}
async uploadFile(file){
    try{
         return await this.bucket.createFile(configs.appwriteBucketId,ID.unique(),file)
    }catch(error){
        throw error;
    }
}
async deleteFile(fileId){
    try{
         return await this.bucket.deleteFile(configs.appwriteBucketId,fileId)
    }catch(error){
        throw error;
    }
}

getFilePreview(fileId)
{
    return this.bucket.getFilePreview(configs.appwriteBucketId,fileId)
}

}
const dbservice=new DbService();
export default dbservice;