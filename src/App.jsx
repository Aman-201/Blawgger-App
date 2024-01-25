import { useEffect, useState } from 'react'
import {login , logout} from './store/authSlice'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { Header , Footer} from './components';
import './App.css'
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
const dispatch=useDispatch();
useEffect(()=>{
authservice.getCurrentUser()
.then((userData)=>{
  if(userData)
  {
    dispatch(login({userData}))
  }
  else
  {dispatch(logout())}
})
.finally(()=>{setLoading(false)})
},[])
  return !loading 
  ? (
  <div className='min-h-screen flex flex-wrap content-between bg-sky-200'>
    <div className='w-full block'>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  </div>
  )
  :(<>
  
  </>);
}

export default App
