import Login from "../components/LoginWindow"
import MenuBar from "../components/MenuBar"
import { Outlet } from "react-router-dom"

const LoginForm = ()=>{
    return(
        <div>
            <MenuBar/>
            <Outlet/> 
             
        </div>
    )
}

export default LoginForm