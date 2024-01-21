import AdminUserDetails from "../components/AdminUserDetails"
import AdminUserList from "../components/AdminUserList"
import ImageBar from "../components/ImageBar"
import MenuBar from "../components/MenuBar"

const AdminDashBoard = ()=>{
    return(
        <div>
             
            <div className="container-flex d-flex justify-content-between w-100">
                <div className="container-flex m-1 col-2 rounded" style={{height:'85vh'}}>
                    <AdminUserList/>
                </div>
                <div className="container-flex m-1  col-8  rounded" style={{height:'85vh'}}>
                    <div className="container-flex " style={{height:'30vh'}}>
                      <ImageBar/>
                    </div>
                    <AdminUserDetails/>
                </div>
                <div className="container-flex m-1  col-2 bg-light rounded" style={{height:'85vh'}}>

                </div>
                
            </div>
        </div>
    )
}

export default AdminDashBoard