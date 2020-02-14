import React from "react"

class Buttons extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    getActivities = () => {
        console.log("I am working")
    }

    render() { 
    return (
    <div>
        <button onClick = {this.getActivities}>I'M NOT FUCKING DOING THAT</button>
        
    </div>
    )
}


}
export default Buttons