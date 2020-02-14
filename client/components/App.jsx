import React from 'react'
import Weather from './Weather'
import Buttons from './Buttons'
import Activity from './Activity'
import { getActApi } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: {}
    }
  }

  handleClick = () => {
    getActApi()
      .then(whateverIsReturnedFromgetActApi => {
        let randomNumber = Math.floor(Math.random()*8)
        this.setState({
          activity: whateverIsReturnedFromgetActApi[randomNumber]
        })
      })
  }

  render() {
    return (

      <div>
      <h1 className='header'>I'M GOING TO BE <br />
      WHOLESOME AS FUCK, <br></br> AND DO SOME</h1>
      <Activity activity={this.state.activity.title}/>
      <Buttons clickThing={this.handleClick}/>
      <Weather />
    </div>

    )
  }
}
export default App