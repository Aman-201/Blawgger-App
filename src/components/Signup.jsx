import React, {useState} from "react";
import {Button , Logo , Input} from './'
import { useDispatch } from "react-redux";
import {Link , useNavigate} from 'react-router-dom'
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form"
import authservice from "../appwrite/auth"

const Signup=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [error,setError]=useState("");
    const {register,handleSubmit}=useForm();
    const signup=async(data)=>{
        setError("");
        try{
            const userData=await authservice.createAccount(data)
            if(userData)
            {
                const userData=await authservice.getCurrentUser();
                if(userData)
                dispatch(login(userData));
                navigate("/");
            }
        }
        catch(e)
        {
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
           Already have an account?&nbsp;
            <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
                Sign In
            </Link>

            </p>
        {(error && <p className="text-red-600 mt-8 text-center">{error}</p>)}
            
        <form onSubmit={handleSubmit(signup)}>

        <div className="space-y-5">

        <Input label="name" placeholder="Enter your full name" {...register("name",{
            required:true
        })}>
        
        </Input>

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

<Button type="submit" className="w-full">Submit</Button>

        </div>

        </form>

            </div>
            </div>
    );
}
export default Signup;