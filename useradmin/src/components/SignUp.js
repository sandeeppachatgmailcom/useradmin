import { useState } from "react"
import InputText from "./InputText"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../utils/constants"

const SignUp = ()=>{
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const handleEmail = (input)=>{
        setEmail(input)
        
    }
    const handlePassword=(input)=>{
        setPassword(input)
    }
    const registerEmail = async()=>{
        const data = {
            email:email,
            password:password 
        }
         
        const result =await axios.post(baseUrl+'/user/registerEmail',data)
        .then((res)=> (res.data))

         if(result.success) {navigate('/userHome')}
         else {
            setMessage(result.message)
        }

    }
    return(
        <div className="container-flex d-flex justify-content-center   " style={{height:'800px'}}> 
            <div className="container-flex col-lg-3 bg-light col-md-6 col-sm-10 align-self-center rounded bg-gradient border  p-3" style={{height:'30vh'}}>
            <br/>
            <h6 >Sign Up</h6>
            <small className="text-danger"  > {message }</small>
            <br/>
                <InputText result={handleEmail} name='Email' type='text'/>
                <InputText result={handlePassword} name='Password' type='password'/>
                <Link to='/' >  <button className="btn btn-outline-primary me-3">Sign in</button> </Link>
                <button onClick={registerEmail} className="btn btn-primary me-3">Register</button>
            </div>
        </div>
    )
}
export default SignUp