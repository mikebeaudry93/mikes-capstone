import React, { Component } from 'react'
import './DurationPage.scss'
import { Link } from 'react-router-dom'

import Clock from '../../../assets/15-minutes.svg'
import Clock2 from '../../../assets/30-minutes.svg'
import Clock3 from '../../../assets/45-minutes.svg'

export class DurationPage extends Component {
    render() {
        return (
            <div className="page content">
                <h2 className="page__title">How Long is Today's Workout?</h2>
                <div className="box content--inner">
                        <button className={`button1 button-quiz`} value="15" onClick={(e) => this.props.buttonClick1(e)}>
                        <img className="page__image" src={Clock} alt="15 minutes"></img>
                            15 Minutes
                        </button>
                        <button className={`button2 button-quiz`} value="30" onClick={(e) => this.props.buttonClick1(e)}>
                        <img className="page__image" src={Clock2} alt="30 minutes"></img>
                            30 Minutes
                        </button>
                        <button className={`button3 button-quiz`} value="45" onClick={(e) => this.props.buttonClick1(e)}>
                        <img className="page__image" src={Clock3} alt="45 minutes"></img>
                            45 Minutes
                        </button>
                        <Link className="link" to="/focus-page">
                            <button className={`button-next button-quiz`}>Next</button>
                        </Link>
                        <Link to="/">
                            <button className="go-back">Go Back</button>
                        </Link>
                </div>
            </div>
        )
    }
}

export default DurationPage
