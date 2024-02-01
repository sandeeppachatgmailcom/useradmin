import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { baseUrl } from "../utils/constants";

const ProfilePic = (props) => {
   const inputfile = useRef();
    const [imageUrl, setImageUrl] = useState(props?.imageUrl);
    const [image, setImage] = useState(props?.imageUrl);
    
    const formData = new FormData()
    formData.append('file',imageUrl)
    formData.append("imageField",props.email)
    const uploadImage =async ()=>{

        const result =await axios.post(baseUrl+'/user/saveprofilePic  ',formData)
        .then((res)=>(res.data))
        inputfile.current.files=[];
        props.returnFunction(baseUrl+result)
    }
    const openInput = ()=>{
        if(!inputfile.current.files.length) inputfile.current.click();
        else uploadImage();
    }
    return (
        <div className="  circle col-2 position-relative bg-info ms-4" style={{ backgroundImage: `url(${props.imageUrl})`,backgroundPosition:'center', backgroundSize:'cover',border:'5px solid white' , borderRadius:'100px' ,height:'180px', width:'180px', marginTop:'-95px'  }}>
            <input ref={inputfile} className=" bi bi-camera-fill" hidden  type="file" onChange={(e)=>{setImageUrl(e.target.files[0]);}} name="" id="" />    
            <div onClick={openInput} hidden ={props.enableEdit}  className="rounded-circle border rounded bg-light text-dark position-absolute bottom-0 end-0 text-center  " style={{height:'50px',width:'50px',cursor:'pointer'}} ><button className="btn h-100 w-100 bi bi-camera-fill"   > </button> </div>
        </div>
    );
}

export default ProfilePic;
