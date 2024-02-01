import { useEffect, useState } from "react"
import { activeUsers, baseUrl } from "../utils/constants"
import axios from 'axios'
 

const AdminUserList = (props)=>{
    const [users,setUsers] = useState( activeUsers )
    const [style,setStyle] = useState()
    const [selector,setSelector] = useState(0)
    useEffect(()=>{
        loaduser();
    },[])

    const loaduser = async ()=>{
         
        const result =await  axios.get(baseUrl+'/admin')
        setUsers(result.data);
    }
    useEffect(()=>{

    })
     
   
    return(
        <div className="col-12   h-100">
            {users.map((item,index)=>{
                return <button
                id={index}
                onClick={() => {
                  props.setuser(item);
                  setSelector(index);
                }} className="border-none border border-light text-start rounded-start font-bold col-12 rounded-pill bg-gradiant text-secondary"
                   style={{
                    backgroundColor: selector === index ? 'rgb(232,240,254)' : 'transparent',
                    height: '50px',
                  }}
              >
                🧑‍🚀 {item.name?item.name:item.email}
              </button>
              
            })

            }
        </div>
    )
}

export default AdminUserList