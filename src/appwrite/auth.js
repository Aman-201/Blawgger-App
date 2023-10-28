import configs from "../config/configs";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    
    constructor(){
        
        console.log(configs.appwriteProjectId)
        this.client.setEndpoint(configs.appwriteUrl) // Your API Endpoint
        .setProject(configs.appwriteProjectId);
        this.account=new Account(this.client);     
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
            throw error
        }
    }
    async login({email,password}){
        try{
            await this.account.createEmailSession(email,password);
        }
        catch(error)
        {
            throw error;
        }
    }
    async getCurrentUser()
    {
        try{
            return await this.account.get();
        }
        catch(error)
        {
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
        throw error;
     }
    }

}
const authservice=new AuthService();
export default authservice;