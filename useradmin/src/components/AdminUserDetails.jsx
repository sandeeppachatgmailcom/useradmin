import ImageBar from "./ImageBar"



const AdminUserDetails = (props)=>{
    return(
        <div className="container-flex d-flex  " style={{height:'100px'}}>
            <div className="container-flex text-start text-light p-5 col-3 bg-primary rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                <h6>Sandeep Pachat</h6>
                <small>Pachat House</small> <br />
                <small>Thekum Kai Meethal </small>
                <small>, Mangottu Vayal </small>
                <small>Kozhikode ,Kerala Pin 673016</small>
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary p-5 rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                <small>Email: sandeeppachat@gmail.com </small>
                <small>Mobile : 7907 441 232 </small> <br />
                <small>Web : sandeeppachat.in </small>
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary p-5 rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
            <h6>Active  </h6>

            
            </div>
            <div className="container-flex col-3 text-start text-light bg-primary  rounded-3 m-1 bg-gradient" style={{height:"200px"}}>
                
            </div>
        </div>
    )
}

export default  AdminUserDetails