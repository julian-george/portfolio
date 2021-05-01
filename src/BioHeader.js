import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring'
import Slider from './Slider'
export default function BioHeader(props) {
    const [bioFocus,toggleFocus] = useState(false)
    let dispSpring = useSpring(
        {top:(bioFocus) ? "0": "-80px",},
        {duration:500}
    )
    const updateFocus = (e) =>{
        if (window.scrollY>120) {
            toggleFocus(true)
            props.parent.setState({bioActive:true})
        }
        else toggleFocus(false)
    }
    //adds event listener to move header upon scrolling past certain point, only on initialization
    useEffect(()=>{
        document.addEventListener('scroll', updateFocus)
    },[])
    return (
        <animated.div id ="hoverName" style={dispSpring}>
            <span>Julian George</span> 
            <Slider parent={props.parent} startingHue={props.startingHue}/>
        </animated.div>
    )
}

