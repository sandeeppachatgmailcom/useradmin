import { useContext, useEffect, useState } from "react"
import ImageBar from "../components/ImageBar"
import InputText from "../components/InputText"
import MenuBar from "../components/MenuBar"
import { baseUrl } from "../utils/constants"
import { useAsyncError, useNavigate } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"

import axios from "axios"
import { logginuser } from "../utils/userStore"
import ProfilePic from "../components/ProfilePic"
import SubmenuBar from "../components/profileMenu"
import { About, Post } from "../utils/reduxProfileSubtagIndex"
import RedBox from "../components/RedBox"
import GreenBox from "../components/GreenBox"
import FriendsList from "../components/FriendsList"
import Photos from "../components/Photos"
import Videos from "../components/Videos"
import ComponentVideo from "../components/Videos"

import MycontextProvider from "../components/ContextProvider"
import Mycontext from "../components/ContextProvider"
import Reels from "../components/Reels"
import Reel from "../components/Reels"



const Profile = () => {
    
    const navigate = useNavigate();
    const [myuser, setMyuser] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [profile, setProfile] = useState('')
    const [password, setPassword] = useState('')
    const selector = useSelector((store) => (store.user.user))
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('')
    const [subMenu, setSubMenu] = useState('')
    const x = useSelector((state) => state.subMenu.currentTag)
     
    
    const val = useContext(Mycontext)
     
    const [context,setContext] = useState('');
     
    useEffect(() => {
        fetchProfile();
    }, [imageUrl])
    useEffect(() => {
        fetchProfile();

    }, [ImageBar])
    const fetchProfile = async () => {
        try {
            const res = await axios.get(baseUrl+'/user/Profile')
            const result = res.data
                // .then((res) => (res.data));
            console.log(result ,'my test result ')
            dispatch(logginuser(result))
            if (result.success === false && !result.active) navigate('/login');
            setMyuser(result)
            setName(result?.name)
            setEmail(result?.email)
            setLastName(result?.lastName)
            setContactNumber(result?.contactNumber)
            setPassword(result?.password)
            setImageUrl(baseUrl + result?.image)
            setProfile(baseUrl+result?.profileImage)
            console.log( baseUrl+result?.profileImage,imageUrl,'eree',baseUrl+result?.image,'IIIIMAGE URL')
        } catch (error) {

        }
    }

    
    return (
        <Mycontext.Provider value={{loginUser:context}}>
        <div>
            
            <div className="container align-item-center justify-content-center col-12" style={{ height: '37vh' }}>

                <ImageBar returnFunction={setImageUrl} email={email} imageUrl={imageUrl} />
                
                <div className="container d-flex border-bottom">
                    <ProfilePic returnFunction={setProfile} imageUrl={profile} email={email} />
                    <div className="container">
                        <h2 className="mt-3 ms-2">{name.length ? name : ''}</h2>
                        <small className="ms-2">{lastName.length ? lastName : ''}</small>
                    </div>

                </div>
            </div>
            <div className="container align-item-center justify-content-center col-12 rounded-3 col-5" style={{ height: '13vh' }} >

            </div>
            <div className="container-flex d-flex border  border-light align-item-center justify-content-start col-12 rounded-3  " style={{ height: '5vh' }} >
                <SubmenuBar />
               
            </div>
            <div className="container border rounded d-flex " style={{ height: '35vh' }}>
                <div className="container border bg-secondary rounded d-flex col-4 h-100 "  >
                 <h1> {context}</h1>

                </div>
                <div className="container border rounded d-flex col-8 h-100 flex-wrap" >
                    {x === 'about' ? (
                        <RedBox />
                    ) : x === 'post' ? (
                        <GreenBox />
                    ) : x==='friends'?(
                        <FriendsList/>
                    ): x==='photos'?(
                        <Photos/>
                    ): x=== 'video'?(
                        <ComponentVideo value={[1,2,3,4,5]}/>
                    ): x=== 'reel'?(
                        <Reel/>
                    ): null
                    }
                </div>
            </div>


            <div className="mt-2 container ">

            </div>


        </div>  
        </Mycontext.Provider>
         
    )
}


const mapStateToProps = (state) => {
    return {
        tag: state.subMenu.currentTag,
        user: state.user.user
    }
}



export default connect(mapStateToProps)(Profile);

