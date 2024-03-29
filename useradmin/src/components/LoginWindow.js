import { useEffect, useState } from "react"
import InputText from "./InputText"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { logginuser } from "../utils/userStore"

  




const Login = ()=>{
    const dispatch = useDispatch()
    const tempCount = useSelector((state)=>(state.testCounter.item))
    console.log(tempCount,'tempCount')
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const[message,setMessage] = useState('')
    
    const handleEmail = (input)=>
     {setEmail(input) 
    
    }

    const handlePassword=(input)=>{
        setPassword(input)
    } 
    const signin = async () => {
        try {
            const user = {
                email: email,
                password: password
            };
            
            const response = await axios.post(baseUrl + '/user/login', user);
            const verify = response.data;
            
            document.cookie = `token=${verify.token}`; // 
            
            if (verify.success) {
                dispatch(logginuser(verify))
                navigate('/userHome');
            } else {
                setMessage(verify.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle the error, show a message, or perform any necessary actions.
            setMessage('An error occurred during login.');
        }
    };
    
    

    return(
        <div className="container-flex d-flex justify-content-center " style={{height:'800px'}}>
            <div className="container-flex col-lg-3 bg-light col-md-6 col-sm-10 align-self-center rounded bg-gradient border  p-3" style={{height:'30vh',backgroundColor:'rgb(69,162,158,.8)'  }}>
            <br/> 
            <label htmlFor=""> Sign-in </label> <br/>
            <small className="text-danger" > {message}</small>
            <br />
            <br />
                <InputText result={handleEmail} name='Username' type='email'/>
                <InputText result={handlePassword} name='Password' type='password' />
                <button onClick={signin} className="btn btn-primary me-2">Sign in</button> 
                <Link to='/signup' > <button className="btn btn-outline-primary">Sign up</button> </Link>
                <Link to='/admin' > <button className="btn btn-outline-primary position-relative bottom-0 end-0">Admin</button> </Link>
                 
               


            </div>
            
        </div>
    )
}

export default Login