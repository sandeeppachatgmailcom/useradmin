import React from "react"
import { connect } from "react-redux"
import { addTablet, removeTablet } from "../utils/tabletSlize"
class Photos extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className="container-flex d-flex">
                {this.props.tablet}
                <button onClick={() => {
                    this.props.resetTablet()
                }} className="btn btn-warning"> Back</button>
                <button onClick={() => {
                    this.props.addTablet('--------->>')
                }}
                    className="btn btn-success"> Go </button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tablet: state.tablet.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTablet: (tablet) => dispatch(addTablet(tablet)),
        resetTablet: (() => dispatch(removeTablet()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)