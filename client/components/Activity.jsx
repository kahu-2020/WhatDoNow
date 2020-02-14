import React from "react"
// import { combineReducers } from "redux"

class Activity extends React.Component {
    constructor(props) {
        super(props)

        this.state ={}
    }




render() {
    return(
<div>
    <h2 className='active'>{this.props.activity}</h2>
</div>
    )
}
 
}
export default Activity