import React, { Component } from 'react'
import './FocusPage.scss'
import { Link } from 'react-router-dom'

// images
import WeightLoss from "../../../assets/diet.svg"
import Endurance from "../../../assets/running-excersice.svg"
import Strength from "../../../assets/workout1.svg"

export class FocusPage extends Component {
    render() {
        return (
            <div className="page content">
                <h2 className="focus-title">What is Todays Focus?</h2>
            <div className="box">
                    <button className={`button1 button-quiz`} value="WeightLoss" onClick={(e) => this.props.buttonClick2(e)}>
                    <img className="page__image" src={WeightLoss} alt="Weight Loss"></img>
                        Weight Loss
                    </button>
                    <button className={`button2 button-quiz`} value="Endurance" onClick={(e) => this.props.buttonClick2(e)}>
                    <img className="page__image" src={Endurance} alt="Endurance"></img>
                        Endurance
                    </button>
                    <button className={`button3 button-quiz`} value="Strength" onClick={(e) => this.props.buttonClick2(e)}>
                    <img className="page__image" src={Strength} alt="Strength"></img>
                        Strength
                    </button>
                    <Link className="link" to="/last-page">
                        <button className={`button-next button-quiz`} onClick={(e) => this.props.buttonClick4(e)}>Next</button>
                    </Link>
                    <Link to="/duration-page">
                        <button className="go-back">Go Back</button>
                    </Link>
            </div>
        </div>
        )
    }
}

export default FocusPage
