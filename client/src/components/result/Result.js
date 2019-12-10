import React, { Component } from 'react'
import "./Result.scss"
import { Link } from 'react-router-dom'

// images
import back from "../../assets/left.svg"
import ResultLogo from "../../assets/logo.svg"

// components 
import Accordian from "../accordian/Accordian"

export class Result extends Component {

    
    render() {

        return (
            <> 
            <div className="page">
            <div className="result">
                    <Link to="/">
                        <img className="result__back" src={back} alt="back"></img>
                    </Link>
                    <div className="result__title-box">
                        <h1 className="result__title">Today's Workout</h1>
                        <img className="result__image" src={ResultLogo} alt="focus"></img>
                    </div>
                    <div className="result__answers-box">
                        <div className="result__duration result__box">{this.props.duration}</div>
                        <div className="result__focus result__box">{this.props.focus}</div>
                        <div className="result__gender result__box">{this.props.gender}</div>
                    </div>
                    
                    {
                        // console.log(this.props.todaysWorkout)
                        this.props.todaysWorkout ?
                        this.props.todaysWorkout.map(item => {
                            return <Accordian itemContent={item} prefferedInstructor={this.props.prefferedInstructor}/>
                        }) : null 
                    }
                    
                </div>
                </div> 
            </>
        )
    }
}

export default Result
