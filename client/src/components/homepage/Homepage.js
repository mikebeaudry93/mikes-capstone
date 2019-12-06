import React, { Component } from 'react';
import './Homepage.css';

import ReactPlayer from 'react-player'
import { CSSTransition } from "react-transition-group"
import { Link } from 'react-router-dom'

import Quiz from '../quiz/Quiz'



export class Homepage extends Component {

    state = {

        isClicked: false 

    }


    toggleQuiz = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
    

        return (
            <>  <div className="homepage">
                    <div className="player-wrapper">
                    {/* <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=KTZJdVfrIEk&t=210s" volume="0" playing="true" width="100%" height="100%"></ReactPlayer> */}
                    </div>
                    <div className="home__title-box">
                        <h1 className="home__title">uFitness</h1>
                        <Link to="/duration-page">
                            <button className="button1 button" value="start" name="start" 
                            // onClick={this.toggleQuiz}
                            >Start Quiz</button>
                        </Link>
                    </div>
                    <CSSTransition
                        in={this.state.isClicked}
                        timeout={1000}
                        classNames="fade"
                    >
                    <Quiz isClicked={this.state.isClicked} buttonClick1={this.props.buttonClick1} buttonClick2={this.props.buttonClick2} buttonClick3={this.props.buttonClick3}/>
                    </CSSTransition>
                    <div className="bottom-box">
                    </div>
                </div>
            </>
        )
    }
}

export default Homepage
