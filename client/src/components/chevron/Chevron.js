import React, { Component } from 'react'
import chevron from "../../assets/next.svg"

export class Chevron extends Component {
    render() {
        return (
            <div>
                <img className={this.props.className} fill={this.props.fill} height={this.props.height} width={this.props.width} src={chevron} alt="tooeasy"></img>
            </div>
        )
    }
}

export default Chevron
