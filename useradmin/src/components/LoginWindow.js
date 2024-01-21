import { useEffect, useState } from "react"
import InputText from "./InputText"
import { Link } from "react-router-dom"
import axios from "axios"






const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleEmail = (input)=>
     {setEmail(input) 
    console.log(email,'=>Email')
    }
    
    const handlePassword=(input)=>{
        setPassword(input)
        console.log(password,'=>Password')
    } 
    

    return(
        <div className="container-flex d-flex justify-content-center   " style={{height:'800px'}}>
            <div className="container-flex col-lg-3 bg-light col-md-6 col-sm-10 align-self-center rounded bg-gradient border  p-3" style={{height:'30vh',backgroundColor:'rgb(69,162,158,.8)'  }}>
            <br/> 
            <label htmlFor=""> Sign-in </label>
            <br />
            <br />
                <InputText result={handleEmail} name='Email' type='text'/>
                <InputText result={handlePassword} name='Password' type='password' />
                <button  className="btn btn-primary me-2">Sign in</button> 
                <Link to='/signup' > <button className="btn btn-outline-primary">Sign up</button> </Link>

            </div>
            
        </div>
    )
}

export default Login