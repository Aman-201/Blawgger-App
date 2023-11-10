import React, {useState}  from "react";
import { Link, useNavigate } from "react-router-dom";
import {login as authLogin} from "../store/authSlice"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import  authservice from "../appwrite/auth";
import {Button , Input , Logo} from './index'

function Login()
{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [error,setError]=useState("");
    const {register,handleSubmit}=useForm();

    const login=async(data)=>{
        setError("");
        try{
            console.log(data)
            const session=await authservice.login(data);
            if(session){
                const userData=await authservice.getCurrentUser();
                console.log(userData)
                if(userData)
                console.log(dispatch(authLogin({userData})))
            navigate('/');
            }
            else{
                //todo if not logged in
               // navigate()
            }
        } 
        catch(e){
            console.log("inside catch of login")
            setError(e.message);
        }
    }
    return (
        <div className="flex items-center justify-center w-full">
        <div className={`w-full max-w-lg bg-gray-10- rounded-xl p-10 border border-black/10 mx-auto `}>

            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]"> <Logo width="100" /></span>


            </div>

            <h2 className="text-center text-2xl font-bold leading-tight"> Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                Sign Up
            </Link>

            </p>
        {(error && <p className="text-red-600 mt-8 text-center">{error}</p>)}
        <form onSubmit={handleSubmit(login) } className="mt-8">
            <div className="space-y-5">
        <Input label="Email:" placeholder="Enter your Email" type="email" {...register("email",{
            required:true,
            validate:{
                matchPatern:(value)=>{
                    /^\w+([.-]?\w+)&@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Enter a valide Email address"
                }
            }
        })} />
        <Input label="password" placeholder="Enter your password" type="password" {...register("password",{
            required:true,
            min:8
        })}/>
       {/* <button>abc</button> */}
        <div> <Button type="submit" className="w-full" onSubmit={handleSubmit(login) }>"Submit"</Button></div>
       
        </div>
        </form>
        </div>
        </div>
    );
}
export default Login;