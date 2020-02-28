import React from "react"

class HamMenu extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }
    
    render() { 
        return (
        <div className='divv'>
            <button className="divv" onClick = {this.getActivities}>A menu icon:</button>
            <div>Beginner</div>
            <div>Intermediate</div>
            <div>Advanced</div>
            <div>Expert</div>           
        </div>
        )
    }
}

export default HamMenu