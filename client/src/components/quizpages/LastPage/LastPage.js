import React, { Component } from 'react'
import './LastPage.scss'
import { Link } from 'react-router-dom'

// images
import Male from '../../../assets/men-silhouette.svg'
import Female from '../../../assets/female-silhouette.svg'

export class LastPage extends Component {
    render() {
        return (
            <div className="page content">
            <h2 className="last-page-title">Who is Your Preferred Instructor?</h2>
             <div className="box">
                <button className={`button1 button-quiz`} value="Male" name="Male" onClick={(e) => this.props.buttonClick3(e)}>
                <img className="page__image" src={Male} alt="Male"></img>
                    {/* <p className="text">Male</p>  */}
                    Male
                </button>
                <button className={`button2 button-quiz`} value="Female" name="Female" onClick={(e) => this.props.buttonClick3(e)}>
                <img className="page__image" src={Female} alt="Female"></img>
                    {/* <p className="text">Female</p> */}
                    Female
                </button>
                <button className={`button3 button-quiz`} value="Female" name="Doesn't Matter" onClick={(e) => this.props.buttonClick3(e)}>
                {/* <img className="page__image" src={Strength} alt="Don't"></img> */}
                    Doesn't Matter
                </button>
                <Link className="link" to="/result">
                    <button className={`button-next button-quiz`}>Get Your Workout!</button>
                </Link>
                <Link to="/focus-page">
                    <button className="go-back">Go Back</button>
                </Link>
        </div>
    </div>
        )
    }
}

export default LastPage
