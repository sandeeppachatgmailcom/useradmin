import { useState } from "react"
import { activeUsers } from "../utils/constants"

const AdminUserList = ()=>{
    const [users,setUsers] = useState( activeUsers )
    console.log(users)
    return(
        <div className="col-12   h-100">
            {users.map((item)=>{
                return <button className="border-none border border-light text-start  rounded-start font-bold  col-12 rounded-pill bg-gradiant text-secondary " style={{backgroundColor:'rgb(232,240,254)' , height:'50px'}}>
                        🧑‍🚀 {item.name}     
                </button> 
            })

            }
        </div>
    )
}

export default AdminUserList