import React  from "react"
import { connect } from "react-redux"
import MyComponent, { FinalComponent } from "./Mycomponent"


class ComponentVideo extends React.Component{
constructor(props){
    super(props)
    console.log(props,'props')
}
    render(){
        const NewComponent =  FinalComponent(MyComponent)
        return(
            <div className="containerr-flex d-flex border border-secondary ">
               {this.props.value.map((item)=>{ 
                return item%2?<MyComponent/>:<NewComponent/>
               })}
            </div>
        )
    }
}

 

export default   ComponentVideo 