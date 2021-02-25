import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import { gsap} from "gsap";

import Bio from "./Bio.js"

let screen = {width:1200,height:900,aspect:1400/900};
//this variable defines what the hue at the left of the color slider is
const startingHue = 34
/* 
Goals:
1. Better Project Structuring (no CDN links)
2. Use code in new ways to improve aesthetic and design
3. Make good code so I can use this portfolio for a while
*/
/* TODO:
- Add links to visit project sites
- Add outline to J
- Divide up this file by component
- Fix timeline by restyling everything
- Finalize colors
- Create day mode?
*/
class App extends React.Component {
    constructor(props){
        super(props)
        //function for the color slider, says that the slider is active when its clicked, setting base hue and position to be compared with later
        this.handleClick = (event)=>{
            this.setState({sliderActive:true,baseHue:this.state.hue,basePos:event.clientX})
        }
        this.state={
            hue:startingHue,
            baseHue:startingHue,
            basePos:0,
            nameDisplacement:0,
            sliderActive:false,
            bioActive:false}
        // adds an event listener for the color slider whenever the mouse moves
        document.addEventListener('mousemove',(e)=>{
            // if the slider is active, change the hue (and therefore the slider position) accordingly
            if (this.state.sliderActive){
                let futureHue = this.state.baseHue+(e.clientX-this.state.basePos)*2
                if (futureHue>360+startingHue) futureHue=360+startingHue
                else if (futureHue<startingHue) futureHue=startingHue
                this.setState({hue:futureHue})
            }
        })
        // event listener for ending the slider edits
        document.addEventListener('mouseup',(e)=>{
            if (this.state.sliderActive) this.setState({sliderActive:false,baseHue:this.state.hue})
        })
        // event slider to trigger the bio fadein and to move the name and slider down (will change moving down animation to make more smooth)
        document.addEventListener('scroll',(e)=>{
            // screen.height/3 is a somewhat arbitrary number but it was a nice place to start the transition
             if (window.scrollY>screen.height/3) {
                 // this.state.nameDisplacement is vertical displacement of name, its 80 by default to put it in the threejs canvas
                 this.setState({nameDisplacement:Math.min(window.scrollY-screen.height/3,80)})
                 if (!this.state.bioActive&this.state.nameDisplacement==80) this.setState({bioActive:true})
             }
            else {
                this.setState({nameDisplacement:0})
            }
        })
    }
    //whenever the state changes, change the threejs J to the new hue
    componentDidUpdate(){
        letterJ.material.color = new THREE.Color("hsl("+this.state.hue+",65%,40%)")
    }
    render() {
        // various colors used that are dependent on the hue
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
                    <div>
                        <div>Fully Designed and Developed By Julian George</div>
                        <div>Copyright © 2021 Julian George. All rights reserved.</div>
                    </div>
                </div>
            </div>
        ) 
    }
}


const domContainer = document.getElementById('react-content');
ReactDOM.render(< App />, domContainer);

// threejs boilerplate code
const scene = new THREE.Scene();
scene.background= new THREE.Color(0x262422);
const camera = new THREE.PerspectiveCamera(75, screen.aspect, 0.1 , 10000);
camera.position.set(-300,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(screen.width,screen.height);


let cont = document.getElementById("canvasContainer");
// orbitControls gives ability to grab and move around
let controls = new THREE.OrbitControls( camera,cont );
// I don't want users to scroll out or move around
controls.enableZoom = false;
controls.enablePan = false;
cont.appendChild(renderer.domElement);

// this will be used to store imported J model
let letterJ; 

let objLoader = new THREE.OBJLoader();
objLoader.load('LetterJ.obj',(object)=>{
    object=object.children[0]
    
    // taking geometry out of object and giving it new material so that the hue can be altered
    let material = new THREE.MeshBasicMaterial( { color: ("hsl("+startingHue+",65%,40%)") } )
    let mesh = new THREE.Mesh(object.geometry,material)
    
    //initializing J and setting initial attributes
    letterJ=mesh
    letterJ.position.set(0,0,0)
    letterJ.scale.set(.25,.25,.25)
    letterJ.rotation.y=Math.PI
    scene.add(letterJ)
    //colorEdges()
    animate()
})

// function to add colored edges, I need to edit the model in the future to make sure this colors the right edges 
const colorEdges=()=>{
    let geometry = new THREE.EdgesGeometry( letterJ.geometry,30 )
    let material = new THREE.LineBasicMaterial( { color: 0x222222, linewidth: 2 } )
    let edges = new THREE.LineSegments( geometry, material )
    letterJ.add( edges )
}

// calls itself recursively to create the automatic rotation
const animate = ()=>{
    requestAnimationFrame(animate)
    letterJ.rotation.y+=0.005
    renderer.render(scene,camera)
    controls.update()
}





