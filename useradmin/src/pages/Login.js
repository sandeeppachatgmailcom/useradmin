import MenuBar from "../components/MenuBar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux" 
import appStore from "../utils/reduxStore"

const LoginForm = ()=>{
    return(
        <div>
            <Provider store={appStore}>
                
                <MenuBar/>
                <Outlet/> 
            </Provider> 
        </div>
    )
}

export default LoginForm