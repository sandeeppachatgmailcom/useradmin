import { useState } from "react"
import InputText from "./InputText"
import { Link } from "react-router-dom"

const SignUp = ()=>{
    const [email,setEmail] = useState('')
    const [otp,setOtp] = useState('')
    const handleEmail = (input)=>{
        setEmail(input)
        console.log(input)
    }
    const handleOtp=(input)=>{
        setOtp(input)
    }
    return(
        <div className="container-flex d-flex justify-content-center   " style={{height:'800px'}}> 
            <div className="container-flex col-lg-3 bg-light col-md-6 col-sm-10 align-self-center rounded bg-gradient border  p-3" style={{height:'30vh'}}>
            <br/>
            <h6>Sign Up</h6>
            <br/>
            <InputText result={handleEmail} name='Email' type='text'/>
            <InputText result={handleOtp} name='Otp' type='password'/>
            <Link to='/' >  <button className="btn btn-outline-primary me-3">Sign in</button> </Link>
            <button className="btn btn-primary me-3">Sign up</button>
            </div>
        </div>
    )
}
export default SignUp