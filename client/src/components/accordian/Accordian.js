import React, { useState, useRef } from 'react'
import "./Accordian.scss"

import Chevron from "../chevron/Chevron"
import {Link} from 'react-router-dom'


export default function Accordian(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordian__icon");

    const content = useRef(null);

    function toggleMenu () {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
            );
            setRotateState(setActive === "active" ? "accordian__icon" : "accordian__icon rotate");
    }

    console.log(props)

    return (
        
        <div className="accordian__section">
            <button className={`accordian ${setActive}`} onClick={toggleMenu}>
                <p className="accordian__title">{props.itemContent.excercise}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </button>
            <div  ref={content} style={{ maxHeight: `${setHeight}`}} className="accordian__content">
                <div className="accordian__text"
                dangerouslySetInnerHTML = {{ __html: props.itemContent.description }} />
                 <Link to={`/video/${props.itemContent[props.prefferedInstructor]}`}>
                    <p className="accordian__videolink">Video Link</p>
                    {/* <Video itemContent={props.itemContent} prefferedIntructor={props.prefferedIntructor}/> */}
                </Link>
            </div>
            {/* <video src={`${props.itemContent}.${props.prefferedIntructor}`}></video> */}
        </div>
    )
}
