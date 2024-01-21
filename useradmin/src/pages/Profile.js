import ImageBar from "../components/ImageBar"
import InputText from "../components/InputText"
import MenuBar from "../components/MenuBar"
import { baseUrl } from "../utils/constants"
const imageUrl = 'https://e0.pxfuel.com/wallpapers/23/989/desktop-wallpaper-smoke-paint-colored-colors-209374.jpg'
const Profile = ()=>{
    return(
        <div>
            <div className="container-flex col-12" style={{height:'35vh'}}>
            <ImageBar imageUrl={imageUrl}/>
            </div>
            <div className="mt-2 container ">
                 <InputText result={()=>{ }} name='First Name'/>
                 <InputText result={()=>{ }} name='Last Name'/>
                 <InputText result={()=>{ }} name='Email'/>
                 <InputText result={()=>{ }} name='Mobile'/>
            </div>
        </div>
    )
}

export default Profile