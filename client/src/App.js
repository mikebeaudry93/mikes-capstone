import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios"

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
    
  }

  buttonClick1 = (e) => {
    const value = e.target.value
    axios.get('http://localhost:8080/result')

    .then(response => {
      console.log('get request', response.data)
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
      todaysWorkout: this.state.todaysWorkout.filter(workout => workout.focus === value)
    })
    this.setState ({
      focus: value
    })
  }

  buttonClick3 = (e) => {
    const value = e.target.value
    // this.setState ({
    //   todaysWorkout: this.state.todaysWorkout.filter(workout => workout.{`${video}`} === value)
    //   workout.[]
    // })
    if (value === 'Male') {
      this.setState ({
        prefferedInstructor: 'videoLinkMale'
      })
    }
    else if (value === 'Female') {
      this.setState ({
        prefferedInstructor: 'videoLinkFemale'
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
    console.log(newData)
    this.setState ({
      todaysWorkout: newData
    })
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <Homepage {...props} buttonClick1={this.buttonClick1} buttonClick2={this.buttonClick2} buttonClick3={this.buttonClick3}/>} />
            <Route path="/duration-page" render={(props) => <DurationPage {...props} buttonClick1={this.buttonClick1}/>} />
            <Route path="/focus-page" render={(props) => <FocusPage {...props} buttonClick2={this.buttonClick2}/>} />
            <Route path="/last-page" render={(props) => <LastPage {...props} buttonClick3={this.buttonClick3}/>} />
            <Route path="/result" render={(props) => <Result {...props} todaysWorkout={this.state.todaysWorkout} prefferedInstructor={this.state.prefferedInstructor}/>} />
            <Route path="/video/:url" render={(props) => <Video {...props} todaysWorkout={this.state.todaysWorkout} prefferedInstructor={this.state.prefferedInstructor}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

