import React from "react";
import { connect } from "react-redux";
import { removeUser } from "../utils/employee";

class Reel extends React.Component {
  constructor(props) {
    super(props);
    console.log(props,'emmployee');
  }

  render() {
    return (
      <div className="h-100 container-flex ">
        <h1 className="text-danger">hello</h1>
        <h1 className="text-danger">{this.props?.employee}</h1>
        <button onClick={()=>(this.props.removeUser()) } className="btn "> remove User </button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    employee :state.testEmployee.newUser 
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    removeUser:()=>dispatch(removeUser()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reel);
