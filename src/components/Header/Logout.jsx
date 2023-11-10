import { logout } from "../../store/authSlice";
// import authReducer from "../../store/authSlice"
import { useDispatch } from "react-redux";
// import authservice from "../../appwrite/auth"
import authservice from "../../appwrite/auth";

function Logout(){
    const dispatch=useDispatch();
    const logooutHandle=(e)=>{
       ( authservice.logout()).then((e)=>{
            dispatch(logout())
        }).catch((e)=>{});
       

    }
    return <button className="inline-block px-6 py-2duration-200 hover:bg-blue-100 round-full" onClick={logooutHandle}>Logout</button>
}
export default Logout;