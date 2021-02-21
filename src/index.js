import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import {useSpring, animated} from 'react-spring'
import { gsap} from "gsap";
let screen = {width:1200,height:900,aspect:1400/900};
//this variable defines what the hue at the left of the color slider is
const startingHue = 34
/*
Goals:
1. Better Project Structuring (no CDN links)
2. Use code in new ways to improve aesthetic and design
3. Make good code so I can use this portfolio for a while
*/
class App extends React.Component {
    constructor(props){
        super(props)
        this.moused=false
        this.handleClick = (event)=>{
            this.setState({sliderActive:true,baseHue:this.state.hue,basePos:event.clientX})
        }
        this.state={hue:startingHue,baseHue:startingHue,basePos:0,nameDisplacement:0,sliderActive:false,bioActive:false}
         
        document.addEventListener('mousemove',(e)=>{
            if (this.state.sliderActive){
                let futureHue = this.state.baseHue+(e.clientX-this.state.basePos)*2
                if (futureHue>360+startingHue) futureHue=360+startingHue
                else if (futureHue<startingHue) futureHue=startingHue
                this.setState({hue:futureHue})
            }
        })
        document.addEventListener('mouseup',(e)=>{
            if (this.state.sliderActive) this.setState({sliderActive:false,baseHue:this.state.hue})
        })
        document.addEventListener('scroll',(e)=>{
             if (window.scrollY>screen.height/3) {
                 this.setState({nameDisplacement:Math.min(window.scrollY-screen.height/3,80)})
                 if (!this.state.bioActive&this.state.nameDisplacement==80) this.setState({bioActive:true})
             }
            else {
                this.setState({nameDisplacement:0})
            }
        })
    }
    componentDidUpdate(){
        letterJ.material.color = new THREE.Color("hsl("+this.state.hue+",65%,40%)")
    }
    render() {
        let fullContainerColor="hsl("+this.state.hue+",55%,3%)"
        let canvasContainerColor="hsl("+this.state.hue+",5%,13%)"
        let tintedTextColor="hsl("+this.state.hue+",30%,79%)"
        let letterColor="hsl("+this.state.hue+",80%,40%)"
        let footerColor="hsl("+this.state.hue+",60%,50%)"
        return (
            <div id = "fullContainer" style={{backgroundColor:fullContainerColor}}> 
                <div id="canvasContainer">
                </div>
                <div id = "bio">
                    <div id ="hoverName" style={{top:this.state.nameDisplacement-80}}>
                        <span>Julian George</span> 
                        <div id ="sliderContainer">
                            <div id ="colorSlider" onMouseDown={this.handleClick}>
                                <div id="sliderDot" style={{left:(this.state.hue-startingHue)/2-20}}>
                                    <div id="dotColor" style={{backgroundColor:letterColor}}></div>
                                </div>
                            </div>
                            <div id ="sliderLabel">change color</div>
                        </div>
                    </div>
                    < Bio hue={this.state.hue} active={this.state.bioActive}/>
                </div>
                <div id="footer" style={{backgroundColor:footerColor}}>
                    <div>Fully Designed and Developed By Julian George</div>
                    <div>Copyright © 2021 Julian George. All rights reserved.</div>
                </div>
            </div>
        ) 
    }
}
class Bio extends React.Component {
    constructor(props){
        super(props)
        this.skills=["HTML","CSS","Javascript","Nodejs","MongoDB","React","Java","Figma"]
        
        this.timeline = {
            bubbleSize:160,
            width:1050,
            bubbleDisp:(1050-(160*3))/2,
        }
        
           
    }
    render(){
        let skillComponents=this.skills.map((s,index)=>(<Skill hue={this.props.hue} name={s} key={index}/>))
        let saturatedColor="hsl("+this.props.hue+",80%,40%)"
        return(
            <Fade in={this.props.active} timeout={500}>
                <div id ="bioContainer">
                    <div id="toprow">
                        <div id="leftBio">
                            <div id ="bio-head">
                                <div id="avatar" style={{backgroundColor:saturatedColor}}></div>
                                <div id="personalinfo">
                                    <div>julian@juliangeorge.net</div>
                                    <div>Cherry Hill, NJ</div>
                                    <div>Dartmouth '24</div>
                                    <div id="socialrow">
                                        <a href="https://www.linkedin.com/in/julian-george-33b42a1b3/" target="_blank"><img src="logos/linkedin.png" /></a>
                                        <a href="https://twitter.com/muffinner" target="_blank"><img src="logos/twitter.png" /></a>
                                        <a href="https://github.com/FudgeDaMuffin" target="_blank"><img src="logos/github.png" href="https://github.com/FudgeDaMuffin"/></a>
                                    </div>
                                </div>
                            </div>
                            <div id ="bio-body">
                                I’m a Dartmouth first-year with a passion for web development. I've been making websites since middle school, honing my skills continuously with countless personal projects, the best of which you can browse below. I plan to double major in computer science and music. I grew up in Haddonfield, New Jersey, and currently live just outside of it in Cherry Hill. When I'm not working, I love to hike, work out, make music, play video games, and bike.  
                            </div>
                        </div>
                        <div id="skills">
                            <div id = "skillTitle">Primary Skills</div>
                            <div id ="skillGrid">
                                {skillComponents}
                            </div>
                        </div>
                    </div>
                    <div id = "timelineContainer">
                        <div id ="timelinetitle">My Projects</div>
                        <div id ="timelinebody">
                            < Timeline hue={this.props.hue} timeline={this.timeline} /> 
                        </div>
                        
                    </div>
                </div>
            </Fade>
        )
        
    }
}
class Skill extends React.Component {
    constructor(props){ super(props) }
    render() {
        let bgColor="hsl("+this.props.hue+",10%,15%)"
        return (
            <div className="skill" style={{backgroundColor:bgColor}}>
                <img src={"logos/"+this.props.name.toLowerCase()+".png"}></img>
                <span>{this.props.name}</span>
            </div>
        )
    }
}
const Timeline = (props) =>{
    let projects=[{
            name:"current",
            title:"What I'm Working On Now",
            description:"I'm currently polishing this portfolio site to make it as perfect as possible before using it for internship applications.",
            banner:false,
        },{
            name:"portfolio",
            title:"Portfolio",
            date:"February 2021",
            technologies:["HTML/CSS","Javascript","React","Threejs","Figma","react-spring"],
            description:"My portfolio, the site you're viewing now, is simple to use but has been complex to make. In this project, I tried to use a more production-esque project structure, and I also experimented with a few new technologies to make the site as pretty as possible. I forayed into 3D modeling with Threejs and Blender, and I tried my first React libraries with Material UI and react-spring. I will continue to polish this portfolio as I become more skilled."
        }, {
            name:"academicchallenge",
            title:"Academic Challenge",
            date:"January-February 2021",
            technologies:["HTML/CSS","Javascript","Nodejs","MongoDB","React","Socket.io","Bash"],
            description:"This site, made to permit easier and more reliable scorekeeping for my school's academic challenge team, was an opportunity for me to learn and implement a variety of new technologies. I discarded jQuery in favor of React, and I tried out a variety of other new technologies. This ended up being very complex and time-consuming, but it led to me feeling confident in a variety of valuable skills."
        }, {
            name:"idsite",
            title:"Dartmouth ID Maker",
            date:"October 2020",
            technologies:["HTML/CSS","Javascript","jQuery"],
            description:"This project allows users to customize a Dartmouth ID. As my first personal project of college, it refreshed me on web development skills. It was also a good exercise in implementing pre-made designs, as I used HTML and CSS to replicate a handheld Dartmouth ID almost perfectly.",
            github:"https://github.com/FudgeDaMuffin/dartmouth-id-creator",
        }, {
            name:"highschool",
            title:"High School Projects",
            date:"2017-2020",
            technologies:["HTML/CSS","Javascript","jQuery","Nodejs","MongoDB","SQL","Python"],
            description: "In high school, I worked on a variety of projects, from apps for my Computer Science Club, to sites for various school organizations, to random passion projects. My code was never very organized or efficient, and I only used HTML and jQuery, with some occasional Nodejs. Still, these projects let me develop my current skills, and although I may not be very proud of them today, I've learned from the mistakes I made then in order to become the dev I am now.",
            banner:false,
        }].map((p,index)=>(<Project key={index} hue={props.hue} disp={props.timeline.bubbleDisp*index} project={p} ></Project>))
    console.log(this)
    const moveAmount = props.timeline.bubbleSize+props.timeline.bubbleDisp
    const maxDisp=-(moveAmount*(projects.length-3)+props.timeline.bubbleSize)
    const [lineDisplacement, setDisp] = useState(0)
    const [leftActive, toggleLeft] = useState(false)
    const [rightActive, toggleRight] = useState(true)
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
            toggleLeft(true)
            toggleRight(true)
        }
        setDisp(newDisp)
    }
    let activeHue="hsl("+props.hue+",65%,45%)"
    let inactiveHue="hsl("+props.hue+",30%,20%)"
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
    let dispSpring = useSpring({
        left:lineDisplacement,
        onStart:()=>{},
        onRest: ()=>{},
        
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

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.isCurrent=(this.props.project.name=="current")
        this.state=({hovering:false,infoActive:false})
    }
    toggleInfo() {
        if (this.state.infoActive) this.setState({infoActive:false})
        else this.setState({infoActive:true})
    }
    render() {
        return (
            <div id ="project"   style={
                    {
                        left:this.props.disp,
                        backgroundColor:((this.isCurrent) ? ((this.state.hovering) ? "hsl("+this.props.hue+",95%,25%)":"hsl("+this.props.hue+",75%,40%)") : "white")}
                }>
                <div id="projectHead" 
                    onMouseEnter={()=>{this.setState({hovering:true})}} 
                    onMouseLeave={()=>{this.setState({hovering:false})}}
                    onClick={()=>{this.toggleInfo()}}>
                    <div id="projectTitle">{this.props.project.title}</div>
                    <div id ="projectDate">{(this.props.project.hasOwnProperty("date")) ? this.props.project.date: ""}</div>
                </div>
                <div id="projectThumbnail" 
                    onMouseEnter={()=>{this.setState({hovering:true})}} 
                    onMouseLeave={()=>{this.setState({hovering:false})}}
                    onClick={()=>{this.toggleInfo()}} >
                    {(!this.isCurrent) ? <img src={"screenshots/"+this.props.project.name+"thumbnail.png"} style={{transform:"scale(1."+((this.state.hovering)? 2 : 0)+")"}} /> : ""}
                </div>
                <ProjectInfo project={this.props.project} hue={this.props.hue} active={this.state.infoActive} toggleFunc={this.props.toggleFunc}/>
            </div>
        )
    }
}
class ProjectInfo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fade in ={this.props.active}>

                    <div id="projectInfo" data-content={"red"}>
                        <div id="projectInfoHead">
                            <div id ="projectInfoTitle">{this.props.project.title}</div>
                            <div id ="projectInfoIcons">
                                {(this.props.project.hasOwnProperty("github")) ? <a href={this.props.project.github} target="_blank"><img id="projectGit" src="logos/github-black.png" ></img></a> : ""}
                            </div>
                        </div>
                        <div id="projectInfoBody">
                            {this.props.project.description}
                        </div>
                        <div id ="projectInfoBanner">
                            {(!this.props.project.hasOwnProperty("banner"))? <img id="projectBanner" src={"screenshots/"+this.props.project.name+"banner.png"} />:""}
                        </div>
                    </div>
                
            </Fade>
        )
    }
}
const domContainer = document.getElementById('react-content');
ReactDOM.render(< App />, domContainer);

const scene = new THREE.Scene();
scene.background= new THREE.Color(0x262422);
const camera = new THREE.PerspectiveCamera(75, screen.aspect, 0.1 , 10000);
camera.position.set(-300,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(screen.width,screen.height) ;

let cont = document.getElementById("canvasContainer");
let controls = new THREE.OrbitControls( camera,cont );
controls.enableZoom = false;
controls.enablePan = false;
cont.appendChild(renderer.domElement);
 
let letterJ; 

let objLoader = new THREE.OBJLoader();
objLoader.load('LetterJ.obj',(object)=>{
    object=object.children[0];

    let material = new THREE.MeshBasicMaterial( { color: ("hsl("+startingHue+",65%,40%)") } );
    let mesh = new THREE.Mesh(object.geometry,material);
    letterJ=mesh;
    letterJ.position.set(0,0,0);
    letterJ.scale.set(.25,.25,.25);
    letterJ.rotation.y=Math.PI;
    scene.add(letterJ);
    //colorEdges()
    animate();
})

const colorEdges=()=>{
    let geometry = new THREE.EdgesGeometry( letterJ.geometry,30 ); 
    console.log(geometry.attributes.position.array)
    let material = new THREE.LineBasicMaterial( { color: 0x222222, linewidth: 2 } );
    let edges = new THREE.LineSegments( geometry, material );
    letterJ.add( edges ); 
}

const animate = ()=>{
    requestAnimationFrame(animate);
    letterJ.rotation.y+=0.005;
    renderer.render(scene,camera);
    controls.update();
}





