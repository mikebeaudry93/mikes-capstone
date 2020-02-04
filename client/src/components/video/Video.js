import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Video.scss'

import ReactPlayer from "react-player"

export class Video extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="page videopage">
                <div className="player-wrapper">
                    <ReactPlayer className="video" url={`http://youtube.com/watch${this.props.location.search}`} width="100%" height="600px"/>
                </div>
                <Link to="/result">
                        <button className="go-back back-video">Go Back</button>
                </Link>
            </div>
        )
    }
}

export default Video
