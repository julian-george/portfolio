import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated} from 'react-spring'

export default function BioHeader(props) {
    const [bioFocus,toggleFocus] = useState(false)
    const [sliderState,updateSlider] = useState({
        hue:props.hue,
        baseHue:props.hue,
        basePos:0,
        nameDisplacement:0,
        sliderActive:false,
    })
    let letterColor="hsl("+sliderState.hue+",80%,40%)"
    let dispSpring = useSpring(
        {top:(bioFocus) ? "0": "-80px",},
        {duration:500}
    )
    const handleClick = (event)=>{
        let updatedVals={...sliderState,sliderActive:true,baseHue:sliderState.hue,basePos:event.clientX}
        updateSlider({updatedVals})
    }
    //adds event listener to move header upon scrolling past certain point, only on initialization
    useEffect(()=>{
        document.addEventListener('scroll',(e)=>{
            // screen.height/3 is a somewhat arbitrary number but it was a nice place to start the transition
            if (window.scrollY>screen.height/3) {
                toggleFocus(true)
                props.parent.setState({bioActive:true})
            }
            else toggleFocus(false)
        })
        document.addEventListener('mousemove',(e)=>{
            console.log(sliderState.hue)
            // if the slider is active, change the hue (and therefore the slider position) accordingly
            if (sliderState.sliderActive){
                console.log(sliderState)
                let futureHue = sliderState.baseHue+(e.clientX-sliderState.basePos)*2
                console.log("f " +futureHue)
                if (futureHue>360+props.startingHue) futureHue=360+props.startingHue
                else if (futureHue<props.startingHue) futureHue=props.startingHue
                console.log("f2 " +futureHue)
                let updatedVals={...sliderState,hue:futureHue}
                updateSlider(updatedVals)
            }
        })
        document.addEventListener('mouseup',(e)=>{
            console.log("mouseup")
            if (sliderState.sliderActive) {
                let updatedVals={...sliderState,sliderActive:false,baseHue:sliderState.hue}
                updateSlider(updatedVals)
            }
        })
    },[])
    console.log(sliderState.hue+" "+props.startingHue)
    return (
        <animated.div id ="hoverName" style={dispSpring}>
            <span>Julian George</span> 
            <div id ="sliderContainer">
                <div id ="colorSlider" onMouseDown={handleClick}>
                    <div id="sliderDot" style={{left:(sliderState.hue-props.startingHue)/2-20}}>
                        <div id="dotColor" style={{backgroundColor:letterColor}}></div>
                    </div>
                </div>
                <div id ="sliderLabel">change color</div>
            </div>
        </animated.div>
    )
}

