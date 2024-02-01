import { useEffect, useState } from "react"
import AdminUserDetails from "../components/AdminUserDetails"
import AdminUserList from "../components/AdminUserList"
import ImageBar from "../components/ImageBar"
import MenuBar from "../components/MenuBar"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import { logginuser } from "../utils/userStore"

const AdminDashBoard = ()=>{
    const dispatch= useDispatch( )
    const navigate = useNavigate() 
    const [user,setUser ] = useState(null)
    
    const employee = useSelector((state)=>state.employee.employee.length)
    
    const fetchUser = async ()=>{
        const result = await axios.get(baseUrl+'/user/Profile')
        .then((res)=> (res.data))
        console.log(result,'result.dataresult.dataresult.data')
         if(result.success===false  && !result.active   ) navigate('/login');
        dispatch(logginuser(result))
        
    }
    useEffect(()=>{
        fetchUser();
    },[])
    const euser = useSelector((state)=> state.user.user)
    console.log(euser,'eusereuser')
    
    return(
        <div>
            <div className="container-flex d-flex justify-content-between w-100">
                <div className="container-flex m-1 col-2 rounded" style={{height:'85vh'}}>
                    <AdminUserList setuser={setUser} />
                </div>
                <div className="container-flex m-1  col-8  rounded" style={{height:'85vh'}}>
                    <div className="container-flex " style={{height:'30vh'}}>
                      <ImageBar enableEdit ={true} imageUrl={baseUrl+ user?.image}/>
                    </div>
                    <AdminUserDetails update={setUser} activeuser ={user} />
                </div>
                <div className="container-flex m-1  col-2 bg-light rounded" style={{height:'85vh'}}>

                </div>
                
            </div>
        </div>
    )
}

export default AdminDashBoard