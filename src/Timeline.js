import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import Fade from '@material-ui/core/Fade';

// I usually use classbased components because I like the OOP feel, but I needed to use hooks for the react-spring animations here, so I used a function based component
export default function Timeline (props) {
    let currentProj= {
            name:"current",
            title:"What I'm Working On Now",
            summary:"I'm currently polishing this portfolio site to make it as perfect as possible before using it for internship applications.",
            banner:false,
        }
    let projects = [currentProj,...loaded_data.projects]
    projects = projects.map((p,index)=>(<Project key={index} hue={props.hue} disp={props.timeline.bubbleDisp*index} project={p} ></Project>))
    // these two determine how much to move the timeline with each click, and the maximum amount of movement
    const moveAmount = props.timeline.bubbleSize+props.timeline.bubbleDisp
    const maxDisp=-(moveAmount*(projects.length-3)+props.timeline.bubbleSize+60)
    // setting initial line displacement
    const [lineDisplacement, setDisp] = useState(0)
    // left and right active show that the left and right movement buttons are clickable; if theyre false that means that the buttons are greyed out and uninteractable
    const [leftActive, toggleLeft] = useState(false)
    const [rightActive, toggleRight] = useState(true)
    // moves the timeline, changes the displacement, and toggles the buttons accordingly
    const move = (amount) => {
        let newDisp=lineDisplacement+amount
        if (newDisp > -20) {
            newDisp=0
            toggleLeft(false)
            toggleRight(true)
        }
        else if (newDisp <maxDisp+20) {
            newDisp=maxDisp
            toggleRight(false)
            toggleLeft(true)
        } 
        else { 
            // makes it so shown projects don't clip outside of container
            if (lineDisplacement==0) newDisp-=props.timeline.bubbleDisp
            toggleLeft(true)
            toggleRight(true)
        }
        setDisp(newDisp)
    }
    let activeHue="hsl("+props.hue+",65%,45%)"
    let inactiveHue="hsl("+props.hue+",30%,20%)"
    // creating these components beforehand as svgs. used svgs so I could change the color
    let leftArrow = (
        <svg height="60" width="40">
          <polyline points="40,0 5,30 40,60" style={{stroke:((leftActive) ? activeHue : inactiveHue)}} fill="none" strokeWidth="6" />
        </svg>
    )
    let rightArrow = (
        <svg height="60" width="40">
          <polyline points="0,0 35,30 0,60" style={{stroke:((rightActive) ? activeHue : inactiveHue)}}fill="none" strokeWidth="6"/>
        </svg>
    )
    // spring to animate the timeline as it moves
    let dispSpring = useSpring({
        left:lineDisplacement,
    })
    
    return(
        <div id="projectlist">
            <div id="navLeft" className="timelineNav"  style= {{cursor:((leftActive) ? "pointer" : "auto")}} onClick={()=>{move(moveAmount)}}>{leftArrow}</div>
            <div id="innerProjects">
                <animated.div id="projectsContainer" style={dispSpring}> {projects} </animated.div>
                <div id ="timeline"></div>
            </div>
            <div id="navRight" className="timelineNav" style= {{cursor:((rightActive) ? "pointer" : "auto")}} onClick={()=>{move(moveAmount*-1)}}>{rightArrow}</div>
        </div>
    )
}
// individual project bubbles on the timeline
class Project extends React.Component {
    constructor(props) {
        super(props)
        // special variable for if the bubble is "what I'm working on now" since that behaves differently
        this.isCurrent=(this.props.project.name=="current")
        this.state=({hovering:false,infoActive:false})
    }
    // toggles if the project info popup is active by changing the state
    toggleInfo() {
        if (this.state.infoActive) this.setState({infoActive:false})
        else this.setState({infoActive:true})
    }
    render() {
        return (
            <div id ="project"   style={{
                        left:this.props.disp,
                        backgroundColor:((this.isCurrent) ? ((this.state.hovering) ? "hsl("+this.props.hue+",95%,25%)":"hsl("+this.props.hue+",75%,40%)") : "white")}
                }>

                <div id="projectHead" 
                    onMouseEnter={()=>{this.setState({hovering:true})}} 
                    onMouseLeave={()=>{this.setState({hovering:false})}}
                    onClick={()=>{this.toggleInfo()}}>
                    <div id="projectTitle">{this.props.project.title}</div>
                    <div id ="projectDate">{(this.props.project.hasOwnProperty("time")) ? this.props.project.time: ""}</div>
                </div>
                <div id="projectThumbnail" 
                    onMouseEnter={()=>{this.setState({hovering:true})}} 
                    onMouseLeave={()=>{this.setState({hovering:false})}}
                    onClick={()=>{this.toggleInfo()}} >
                    {(!this.isCurrent) ? <img src={this.props.project.icon} style={{transform:"scale(1."+((this.state.hovering)? 2 : 0)+")"}} /> : ""}
                </div>
                <ProjectInfo project={this.props.project} hue={this.props.hue} active={this.state.infoActive} parent={this}/>
            </div>
        )
    }
}
//component for pop-up project info
class ProjectInfo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // rendering the inherited project info
        return(
            <Fade in ={this.props.active}>

                    <div id="projectInfo" data-content={"red"}>
                        <div id ="closeProject" onClick={()=>{this.props.parent.toggleInfo()}}>
                            <span>🗙</span>
                        </div>
                        <div id="projectInfoHead">
                            <div id ="projectInfoTitle">
                                {(this.props.project.hasOwnProperty("link")) ? <a href={this.props.project.link} target="_blank">{this.props.project.title}</a> : (this.props.project.title)}
                                
                            </div>
                            <div id ="projectInfoIcons">
                                {(this.props.project.hasOwnProperty("github")) ? <a href={this.props.project.github} target="_blank"><img id="projectGit" src="static/logos/github-black.png" ></img></a> : ""}
                            </div>
                        </div>
                        <div id="projectInfoBody">
                            {this.props.project.summary}
                        </div>
                        <div id ="projectInfoBanner">
                            {(this.props.project.banner!="") ? <img id="projectBanner" src={this.props.project.banner} />:""}
                        </div>
                    </div>
                
            </Fade>
        )
    }
}