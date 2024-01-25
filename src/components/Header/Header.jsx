import React from 'react';
import {Container , Logo , Logout, Button} from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header(){
    const authStatus=useSelector((state)=>{ console.log(state);console.log(state.status); return state.status})
    const navigate=useNavigate()
    const navItems=[
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus
        },
        {
            name:'Signup',
            slug:'/signup',
            active:!authStatus
        },
        {
            name:'All Posts',
            slug:'/all-post',
            active:authStatus
        },
        {
            name:'Add Post',
            slug:'/add-post',
            active:authStatus
        },
    ]
    return(
        <header className='py-3 shadow bg-blue-500 border border-blue-600 rounded-md'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                    <Link to='/'>
                        <Logo width='70px' />
                    </Link>
                    </div>
                    <ul className='ml-auto flex'>
                        {
                            navItems.map((item)=>(
                                (item.active)?(
                                    <li key={item.name} >
                                        <Button onClick={(e)=>{ console.log(e); navigate(item.slug)}} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                            {item.name}
                                        </Button>
                                    </li>
                                ): null
                            ))}
                            {authStatus && (
                                <li>
                                <Logout />
                                </li>
                            )}
                        
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
export default Header;