import React from "react"
import { connect } from "react-redux"
import { addEmployee, removeEmployee } from "../utils/employeeStore"

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, 'menulist')
    }
    render() {
        const list = this.props.employee
        console.log(list)
        return (
            <div className="container-flex flex-wrap  d-flex ">
                <div className="bg-warning " onClick={()=>{this.props.addEmployee('kailsa')}}> Add </div> 


                {list.map((item) => (
                    <div onClick={()=>{
                        this.props.removeEmployee()
                    }}  className="container-flex btn btn-warning d-flex justify-content-center align-items-center m-1 rounded-circle border-1" style={{ height: '80px', width: '80px', cursor: 'pointer' }}>
                        <small className="text-light">{item}</small>
                    </div> ))  
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.employee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeEmployee:()=>{dispatch(removeEmployee())} ,
        addEmployee:(employeeName)=>{dispatch(addEmployee(employeeName))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FriendsList) 