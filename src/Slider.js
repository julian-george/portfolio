import React from "react";

export default class Slider extends React.Component {
    constructor(props){
        super(props)
        //function for the color slider, says that the slider is active when its clicked, setting base hue and position to be compared with later
        this.handleClick = (event)=>{
            this.setState({sliderActive:true,baseHue:this.state.hue,basePos:event.clientX})
        }
        this.state={
            hue:props.startingHue,
            baseHue:props.startingHue,
            basePos:0,
            sliderActive:false,
            bioActive:false
        }
        // adds an event listener for the color slider whenever the mouse moves
        document.addEventListener('mousemove',(e)=>{
            let startingHue=this.props.startingHue
            // if the slider is active, change the hue (and therefore the slider position) accordingly
            if (this.state.sliderActive){
                let futureHue = this.state.baseHue+(e.clientX-this.state.basePos)*2
                if (futureHue>360+startingHue) futureHue=360+startingHue
                else if (futureHue<startingHue) futureHue=startingHue
                this.setState({hue:futureHue})
                this.props.parent.setState({hue:futureHue})
            }
        })
        // event listener for ending the slider edits
        document.addEventListener('mouseup',(e)=>{
            if (this.state.sliderActive) this.setState({sliderActive:false,baseHue:this.state.hue})
        })
        
    }
    render() {
        let letterColor="hsl("+this.state.hue+",80%,40%)"

        return(
            <div id ="sliderContainer">
                <div id ="colorSlider" onMouseDown={this.handleClick}>
                    <div id="sliderDot" style={{left:(this.state.hue-this.props.startingHue)/2-20}}>
                        <div id="dotColor" style={{backgroundColor:letterColor}}></div>
                    </div>
                </div>
                <div id ="sliderLabel">change color</div>
            </div>
        )
        
    }
}