import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

// images 
import Men from './assets/men-silhouette.svg'
import Woman from './assets/female-silhouette.svg'
import Fifteen from './assets/15-minutes.svg'
import Thirty from './assets/30-minutes.svg'
import FortyFive from './assets/45-minutes.svg'
import Weight from './assets/diet.svg'
import Strength from './assets/workout1.svg'
import Endurance from './assets/running-excersice.svg'

// pages
import Homepage from '../src/components/homepage/Homepage'
import Result from '../src/components/result/Result'
import Video from '../src/components/video/Video'
import DurationPage from './components/quizpages/DurationPage/DurationPage';
import FocusPage from './components/quizpages/FocusPage/FocusPage'
import LastPage from './components/quizpages/LastPage/LastPage'


export class App extends Component {

  state = {

    duration: null,
    focus: null,
    prefferedInstructor: null,
    todaysWorkout: null,
    gender: null,
    focusImage: null,
    durationImage: null,
    
  }

  buttonClick1 = (e) => {
    const value = e.target.value
    console.log(value)

    if (value === '15') {
      this.setState ({
        durationImage: <img className="state-image" src={Fifteen} alt="15"></img>
      })
    }
    else if (value === '30') {
      this.setState ({
        durationImage: <img className="state-image" src={Thirty} alt="30"></img>
      })
    }
    else if (value === '45') {
      this.setState ({
        durationImage: <img className="state-image" src={FortyFive} alt="45"></img>
      })
    };

    axios.get('http://localhost:8080/result')

    .then(response => {
      // console.log('get request', response.data)
      this.setState ({
        todaysWorkout: response.data
        // .filter(workout => workout.duration.includes(value))
      })
      this.setState ({
        duration: value
      })
    });  
  };

  buttonClick2 = (e) => {
    const value = e.target.value
    this.setState ({
      focus: value
    })
    if (value === 'Strength') {
      this.setState ({
        focusImage: <img className="state-image" src={Strength} alt="strength"></img>
      })
    }
    else if (value === 'Endurance') {
      this.setState ({
        focusImage: <img className="state-image" src={Endurance} alt="Endurance"></img>
      })
    }
    else if (value === 'WeightLoss') {
      this.setState ({
        focusImage: <img className="state-image" src={Weight} alt="weight loss"></img>
      })
    }
  }

  buttonClick4 = (e) => {
    const value = e.target.value
    // e.preventdefault()
    this.setState ({
      todaysWorkout: this.state.todaysWorkout.filter(workout => workout.focus === this.state.focus)
    })
    }

  buttonClick3 = (e) => {
    const value = e.target.value
    // const name = e.target.name
    // this.setState ({
    //   todaysWorkout: this.state.todaysWorkout.filter(workout => workout.{`${video}`} === value)
    //   workout.[]
    // })
    // this.setState ({
    //   gender: name
    // })

    if (value === 'Male') {
      this.setState ({
        prefferedInstructor: 'videoLinkMale'
      })
      this.setState ({
        gender: <img className="state-image" src={Men} alt="tooeasy"></img>
      })
    }
    else if (value === 'Female') {
      this.setState ({
        prefferedInstructor: 'videoLinkFemale'
      })
      this.setState ({
        gender: <img className="state-image" src={Woman} alt="tooeasy1"></img>
      })
    }
    this.dataSetter(this.state.duration)
  }

  dataSetter = (duration) => {
    let counter = 0
    const newData = []
    this.state.todaysWorkout.map(item => {
      if (counter < duration) {
        counter = item.time + counter
        newData.push(item)
      }
    }) 
    // console.log(newData)
    this.setState ({
      todaysWorkout: newData
    })
  }

  
  render() {
    // console.log(this.state)
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/duration-page" render={(props) => <DurationPage {...props} buttonClick1={this.buttonClick1}/>} />
            <Route path="/focus-page" render={(props) => <FocusPage {...props} buttonClick2={this.buttonClick2} buttonClick4={this.buttonClick4}/>} />
            <Route path="/last-page" render={(props) => <LastPage {...props} buttonClick3={this.buttonClick3}/>} />
            <Route path="/result" render={(props) => <Result {...props} todaysWorkout={this.state.todaysWorkout} prefferedInstructor={this.state.prefferedInstructor} duration={this.state.durationImage} focus={this.state.focusImage} gender={this.state.gender}/>} />
            <Route path="/video/:url" render={(props) => <Video {...props} todaysWorkout={this.state.todaysWorkout} prefferedInstructor={this.state.prefferedInstructor}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

