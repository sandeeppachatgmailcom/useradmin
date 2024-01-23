
import ImageBar from "./ImageBar"



const AdminUserDetails = (props)=>{

console.log(props.activeuser)

  
        const   handleButtonClick  = ()=>{
            // Assuming props.activeuser is an object
            const updatedUser = { ...props.activeuser, active: props.activeuser.active?false:true };
           
           console.log(updatedUser,'hello')
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
            <div className="container-flex col-3 text-start text-light bg-primary p-5 rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
            <h6>Active  </h6>
            <button className="btn btn-light text-danger"  onClick={handleButtonClick}>
                {props?.activeuser ? 'Disable' : 'Enable'}
            </button>

            
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary  rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                
            </div>
        </div>
    )
}

export default  AdminUserDetails