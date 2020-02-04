import React, { Component } from 'react'
import './Quiz.scss'
import { Link } from 'react-router-dom'

// images
import Strength from '../../assets/workout.svg'

export class Quiz extends Component {

    render() {
     
        return (
            <>
                <div className="container">
                    <h3 className="container__title">How long is today's workout?</h3>
                    <div className="box">
                        <button className={`button1 button-quiz`} name="10" value="10" onClick={(e) => this.props.buttonClick1(e)}>10</button>
                        <button className={`button2 button-quiz`} value="20" onClick={(e) => this.props.buttonClick1(e)}>20</button>
                        <button className={`button3 button-quiz`} value="30" onClick={(e) => this.props.buttonClick1(e)}>30</button>
                    </div>
                </div>
                <div className="container">
                    <h3 className="container__title">What is today's focus?</h3>
                    <div className="box">
                        <button className={`button4 button-quiz`} value="WeightLoss" onClick={(e) => this.props.buttonClick2(e)}>Weight Loss</button>
                        <button className={`button5 button-quiz`} value="Endurance" onClick={(e) => this.props.buttonClick2(e)}>Endurance</button>
                        <button className={`button6 button-quiz`} value="Strength" onClick={(e) => this.props.buttonClick2(e)}>
                            <img className="icon__strength" src={Strength} alt="Big Man"></img>
                            Strength
                        </button>
                    </div>
                </div>
                <div className="container">
                    <h3 className="container__title">Who is your preffered instructor?</h3>
                    <div className="box">
                        <button className={`button7 button-quiz`} value="Male" onClick={(e) => this.props.buttonClick3(e)}>Male</button>    
                        <button className={`button8 button-quiz`} value="Female" onClick={(e) => this.props.buttonClick3(e)}>Female</button>
                    </div>    
                </div>
                <Link to="/result">
                    <button className="button button-result">View Workout</button>
                </Link>
            </>
        )
    }
}

export default Quiz
