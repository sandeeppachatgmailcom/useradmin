import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import { logginuser, loggoutUser } from "../utils/userStore"
import Cookies from 'js-cookie';



const MenuBar = () => {
    const user = useSelector((state) => state.user.user)
    const [name,setName] = useState(user[0])
    console.log(name,'Name ID')
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        Cookies.remove('token');
        dispatch(loggoutUser())
        setName(name)
    };
    useEffect(()=>{
        setName(user[0])
    },[user])

    
    return (
        <div className='menuBar d-flex  justify-content-between bg-light container-flex bg-gradient' style={{ height: '50px' }}>
            <div>

            </div>
            <div className='container-flex d-flex justify-content-between me-5 '>
                <Link to='/userHome'> <button className='h-100 btn text-primary' > HOME </button></Link>
               
                <Link to='/aboutus'> <button className='h-100 btn text-primary' >  ABOUT  </button></Link>
                <Link to='/contactus'> <button className='h-100 btn text-primary ' > CONTACT </button> </Link>
                <Link to='/adminHome'> <button className='h-100 btn text-primary ' > Admin </button> </Link>
                <Link to='/admin' > <button className='h-100 btn text-primary bi bi-power circle 'onClick={ handleLogout}  >{name? name?.name: name?.email} </button> </Link>
            </div>

        </div>

    )
}

export default MenuBar