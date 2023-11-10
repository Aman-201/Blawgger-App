import configs from "../config/configs";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    
    constructor(){
        
        console.log(configs)
        this.client.setEndpoint(configs.appwriteUrl) // Your API Endpoint
        .setProject(configs.appwriteProjectId);
        console.log(configs.appwriteUrl)
        console.log(typeof configs.appwriteUrl)
        this.account=new Account(this.client);    
        console.log(this.account) 
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount)
            {
                //login the user
                return this.login(email,password)
            }
            else
            {
                return userAccount;
            }
        }
        
        catch(error)
        {
            console.log("account creation error")
            throw error
        }
    }
    async login({email,password}){
        try{
            console.log(email,password)
            return await this.account.createEmailSession(email,password);
        }
        catch(error)
        {
            console.log("account login error")
            throw error;
        }
    }
    async getCurrentUser()
    {
        try{
            return await this.account.get();

        //   getUser.then((user)=>{console.log(user)},(error)=>{console.log("error inside get user",error)})  
        }
        catch(error)
        {
            console.log("get current user error")
            throw error;
        }
        return null;
    }
    async logout()
    {
     try{
        this.account.deleteSessions();
     }
     catch(error)
     {
        console.log("logout error")
        throw error;
     }
    }

}
const authservice=new AuthService();
export default authservice;