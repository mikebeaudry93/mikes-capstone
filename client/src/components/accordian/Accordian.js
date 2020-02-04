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
                <p className="accordian__sets">{props.itemContent.sets}</p>
                <p className="accordian__reps">{props.itemContent.reps}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </button>
            <div  ref={content} style={{ maxHeight: `${setHeight}`}} className="accordian__content">
                <div className="accordian__text"
                dangerouslySetInnerHTML = {{ __html: props.itemContent.description }} />
                    <div className="minutes-checkbox">
                        <p className="time">{props.itemContent.time} minutes</p>
                        <div class="pretty p-icon p-round p-jelly">
                            <input type="checkbox" />
                            <div class="state p-primary">
                                <i class="icon mdi mdi-check"></i>
                                <label>Done</label>
                            </div>
                    </div>
                </div>
                 <Link className="link" to={`/video/${props.itemContent[props.prefferedInstructor]}`}>
                    <p className="accordian__videolink">Video Link</p>
                </Link>
            </div>
        </div>
    )
}
