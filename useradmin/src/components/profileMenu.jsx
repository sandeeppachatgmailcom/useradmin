import { connect } from "react-redux"
import { decrement, increment } from "../utils/counterSlice"
import { About, about, friends, photos, post, reel , video } from "../utils/reduxProfileSubtagIndex"
import { useEffect, useState } from "react"
import FriendsList from "./FriendsList"
import { addTablet } from "../utils/tabletSlize"

const SubmenuBar = (props)=>{
    console.log(props)
    const {selectedMenu,key2,dispatch} = props
    console.log( selectedMenu,'selectedMenu',)
    const [activeTab,setActiveTab] = useState('')
    
    return(
        <div className="container">
             <button onClick={()=>{props.post()} } className={`col-1 h-100 btn rounded-top ${selectedMenu=='post'?'bg-info':'bg-light'}  text-secondary  rounded-3 m-1`}>
                    Posts
                </button>
                
                <button onClick={()=>{props.about()} }  className={`col-1 h-100 btn ${selectedMenu=='about'?'bg-info':'bg-light'}  text-secondary  rounded-3 m-1`}>
                    About  
                </button>
                <button onClick={()=>{props.friends()} }className={`col-1 h-100 btn ${selectedMenu=='friends'?'bg-info':'bg-light'}  text-secondary  rounded-3 m-1`}>
                    Friends
                </button>
                <button onClick={()=>{props.photos()}}  className={`col-1 h-100 btn ${selectedMenu=='photos'?'bg-info':'bg-light'}  text-secondary  rounded-3 m-1`}>
                    Photos
                </button>
                <button onClick={()=>{props.video()} } className="col-1 h-100 btn  text-secondary  bg-transition rounded-3">
                    Videos
                </button>
                <button onClick={()=>{props.reels()}} className="col-1 h-100 btn  text-secondary  bg-transition rounded-3">
                    Reels
                </button>
                <button className="col-1 h-100 btn  text-secondary  bg-transition rounded-3">
                    More
                </button>

        </div>
    )
}

const mapStateToProps =(state)=>{
return{
    selectedMenu:state.subMenu.currentTag,
    key2:'value2'
}}

const mapDispatchToProps  = (dispatch)=>{
    return {
        about: () => dispatch(about()),
        post: () => dispatch(post()) ,
        friends:()=>dispatch(friends()),
        photos:()=>dispatch(photos()),
        video:()=>dispatch(video()),
        reels:()=>dispatch(reel())

    }
}

export default connect(mapStateToProps,mapDispatchToProps )(SubmenuBar)