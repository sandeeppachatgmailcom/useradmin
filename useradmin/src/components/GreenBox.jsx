import { useEffect, useState } from "react"
import { connect } from "react-redux"
import InputText from "./InputText"
import axios from "axios"
import { baseUrl } from "../utils/constants"

const GreenBox = (props)=>{

const user = props.user[0]
 
const [name,setName] = useState(user?.name)
const [lastName,setLastName] = useState(user?.lastName)
const [email,setEmail] = useState(user?.email)
const [contactNumber,setContactNumber] = useState(user?.contactNumber)
const [password,setPassword] = useState(user?.password)
useEffect(()=>{
    setName(user?.name)
    setLastName(user?.lastName)
    setEmail(user?.email)
    setContactNumber(user?.contactNumber)
    setPassword(user?.password)
},[user])

const saveUser =async ()=>{
    try {
        const Newuser={
            email:email,
            password:password,
            name:name,
            lastName:lastName,
            contactNumber:contactNumber
        }
        
        const result =await axios.post(baseUrl+ '/user/saveProfile',Newuser)
    } catch (error) {
        
    }
}
    return(
        <div className="h-100 container col-12  p-2">
            <InputText input={name} readOnly= {false} result={setName } name='First Name'/>
            <InputText input={lastName} readOnly= {false} result={setLastName} name='Last Name'/>
            <InputText input={email}readOnly= {true}  result={setEmail} name='Email'/>
            <InputText input={contactNumber} readOnly= {false} result={setContactNumber} name='Mobile'/>
            <InputText input={password} readOnly= {false} result={setPassword} type='password' name='Password'/>  
            <button onClick={()=>{window.location.reload()}} className="btn btn-danger text-light me-2   "> Cancel </button>
            <button  onClick={saveUser} className="btn btn-primary text-light me-2  "> Save </button>
        </div>
    )
}



const mapStateToProps =(state)=>{
    return{
        tag:state.subMenu.currentTag,
        user:state.user.user
    }}

export default connect(mapStateToProps)( GreenBox);