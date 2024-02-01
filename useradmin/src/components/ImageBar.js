import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { baseUrl } from "../utils/constants";

const ImageBar = (props) => {
    const inputfile = useRef()
    const [imageUrl, setImageUrl] = useState(props?.imageUrl);
    const [image, setImage] = useState(props?.imageUrl);
    
    const formData = new FormData()
    formData.append('file',imageUrl)
    formData.append("imageField",props.email)
    const uploadImage =async ()=>{
        if(!inputfile.current.files.length){
            inputfile.current.click()
        }
        const result =await axios.post(baseUrl+'/user/saveImage  ',formData)
        .then((res)=>(res.data))
        
        props.returnFunction(baseUrl+result)
    }
    return (
        <div className="m-2 rounded-3 container  col-12 bg-light position-relative h-100 " style={{ backgroundImage: `url(${props.imageUrl})`,backgroundPosition:'center', backgroundSize:'cover' }}>
            <input ref={inputfile} hidden  type="file" onChange={(e)=>{setImageUrl(e.target.files[0])}} name="" id="" />    
             
            <button onClick={uploadImage} hidden ={props.enableEdit}  className="btn me-5 mb-5 btn-light text-danger position-absolute bottom-0 end-0 bi bi-camera"> {(inputfile?.current?.files?.length)?'Save':'Upload'}</button>
        </div>
    );
}

export default ImageBar;
