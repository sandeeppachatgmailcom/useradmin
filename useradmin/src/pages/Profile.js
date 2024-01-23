import { useEffect,useState } from "react"
import ImageBar from "../components/ImageBar"
import InputText from "../components/InputText"
import MenuBar from "../components/MenuBar"
import { baseUrl } from "../utils/constants"
import { useAsyncError } from "react-router-dom"
import axios from "axios"
const imageUrl = 'https://e0.pxfuel.com/wallpapers/23/989/desktop-wallpaper-smoke-paint-colored-colors-209374.jpg'

const Profile = ()=>{
    const [myuser,setMyuser] = useState('')    
    const [name , setName] =   useState('')
    const [email,setEmail] =   useState('')
    const [lastName,setLastName] =   useState('')
    const [contactNumber,setContactNumber] =   useState('')
    const [password,setPassword] =   useState('')
    useEffect(()=>{
        fetchProfile();
        console.log(myuser,'=>user')
    },[])
    const fetchProfile =async ()=>{
    try {
         

       
        
        const result = await axios.get(baseUrl+'/user/Profile')
        .then((res)=>(res.data));
        setMyuser(result)
        setName(result?.name)
        setEmail(result?.email)
        setLastName(result?.lastName)
        setContactNumber(result?.contactNumber)
        setPassword(result?.password)
        

    } catch (error) {
        
    }
    }
    const saveUser =async ()=>{
        try {
            const Newuser={
                email:email,
                password:password,
                name:name,
                lastName:lastName,
                contactNumber:contactNumber
            }
            console.log(Newuser)
            const result =await axios.post(baseUrl+ '/user/saveProfile',Newuser)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        console.log(name,'=>name')
    },[name])

    return(
        <div>
            <div className="container-flex col-12" style={{height:'35vh'}}>
            <ImageBar imageUrl={imageUrl}/>
            </div>
            <div className="mt-2 container ">
                 <InputText input={name} readOnly= {false} result={setName } name='First Name'/>
                 <InputText input={lastName} readOnly= {false} result={setLastName} name='Last Name'/>
                 <InputText input={email}readOnly= {true}  result={setEmail} name='Email'/>
                 <InputText input={contactNumber} readOnly= {false} result={setContactNumber} name='Mobile'/>
                 <InputText input={password} readOnly= {false} result={setPassword} type='password' name='Password'/>
            </div>
            
            <button onClick={()=>{window.location.reload()}} className="btn btn-outline-secondary text-primary me-2 col-1"> Cancel </button>
            
            <button  onClick={saveUser} className="btn btn-outline-secondary text-primary me-2 col-1"> Save </button>
        </div>
    )
}

export default Profile