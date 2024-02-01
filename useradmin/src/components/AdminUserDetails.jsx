
import axios from "axios";
import ImageBar from "./ImageBar"
import { baseUrl } from "../utils/constants";



const AdminUserDetails = (props)=>{

 

  
        const   handleButtonClick  =async ()=>{
           console.log(props.activeuser,'props.activeuser')
           props.activeuser.active =props.activeuser.active?false:true
           console.log(props.activeuser.active,'props.activeuser.active')
           const user = {
            user:props.activeuser
           }
           console.log(user,'useruseruseruser')
           const result = await axios.post(baseUrl+'/admin/edituser',user )
           .then((res)=>(res.data))
           props.update(result)
           console.log(result,'ressssssssssssssssssssss')
          };

          const SwitchAdmin = async ()=>{
            console.log(props.activeuser,'props.activeuser')
            props.activeuser.isAdmin =props.activeuser.isAdmin?false:true
            console.log(props.activeuser.active,'props.activeuser.active')
            const user = {
             user:props.activeuser
            }
            console.log(user,'useruseruseruser')
            const result = await axios.post(baseUrl+'/admin/edituser',user )
            .then((res)=>(res.data))
            props.update(result)
            console.log(result,'ressssssssssssssssssssss')
           };

    
     return(
        <div className="container-flex d-flex  " style={{height:'100px'}}>
            <div className="container-flex tex3-start text-light p-3 col-3 bg-primary rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
            <h6>{props?.activeuser?.email }</h6>
                <small>{props?.activeuser?.address}</small>
                <small>{props?.activeuser?.city }</small>
                <small>{props?.activeuser?.state   }</small>
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary p-3 rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                <small>Email: {props?.activeuser?.email }</small> <br />
                <small>Mobile :{props?.activeuser?.contactNumber }</small> <br />
                <small>Web :{props?.activeuser?.web }</small>
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary p-3 rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
            <h6>Status  </h6>
            <button className="btn btn-light text-danger"  onClick={handleButtonClick}>
                {props?.activeuser?.active? 'Disable' : 'Enable'}
            </button>
            <h6>Admin Status  </h6>
            <button className="btn btn-light text-danger"  onClick={SwitchAdmin}>
                {props?.activeuser?.isAdmin? 'Disable' : 'Enable'}
            </button>

            
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary  rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                
            </div>
        </div>
    )
}

export default  AdminUserDetails