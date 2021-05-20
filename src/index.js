import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

import Bio from "./Bio.js"
import BioHeader from "./BioHeader.js"
import '../static/css/index.css'

let screen = {width:1200,height:window.innerHeight-88};
screen.aspect= screen.width/screen.height
//this variable defines what the hue at the left of the color slider is
const startingHue = 34;
/* 
Goals:
1. Better Project Structuring (no CDN links)
2. Use code in new ways to improve aesthetic and design
3. Make good code so I can use this portfolio for a while
*/
/* TODO:
- Add outline to J
- Use Redux to manage hue and to fix timeline
- Add day mode?
- Perfect design
- Use CSS variables to store colors to make syncing them easier
*/
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={ hue:startingHue, bioActive:false }
        this.changeHue= (component) => (newHue) => {
            component.setState({hue:newHue})
        }
    }
    //whenever the state changes, change the threejs J to the new hue
    componentDidUpdate(){
        if (letterJ) letterJ.material.color = new THREE.Color("hsl("+this.state.hue+",65%,40%)")
    }
    
    render() {
        // various colors used that are dependent on the hue
        let fullContainerColor="hsl("+this.state.hue+",55%,3%)"
        let canvasContainerColor="hsl("+this.state.hue+",5%,13%)"
        let tintedTextColor="hsl("+this.state.hue+",30%,79%)"
        let footerColor1="hsla("+this.state.hue+",60%,50%,.6)"
        let footerColor2="hsla("+this.state.hue+",60%,50%,1)"
        
        return (
            <div id = "fullContainer" style={{backgroundColor:fullContainerColor}}> 
                <div id="canvasContainer" style={{height:screen.height}}>
                </div>
                <div id = "bio">
                    < BioHeader parent = {this} hue = {this.state.hue} startingHue={startingHue}/>
                    < Bio hue={this.state.hue} active={this.state.bioActive}/>
                </div>
                <div id="footer" style={{background: "linear-gradient(315deg, "+footerColor1+"0%, "+footerColor2+"60%)",color:fullContainerColor }}>
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

// this will be used to store imported J model
let letterJ; 
let controls;

// threejs boilerplate code
const scene = new THREE.Scene();
scene.background= new THREE.Color(0x262422);
let camera = new THREE.PerspectiveCamera(75, screen.aspect, 0.1 , 10000);
camera.position.set(-300,0,0);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(screen.width,screen.height);

let cont = document.getElementById("canvasContainer");
// orbitControls gives ability to grab and move around
controls = new OrbitControls( camera,cont );
// I don't want users to scroll out or move around
controls.enableZoom = false;
controls.enablePan = false;
cont.appendChild(renderer.domElement);

let objLoader = new OBJLoader();
objLoader.load('static/3d/LetterJ.obj',(object)=>{
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
    if (controls) controls.update()
}

// window.addEventListener('resize', ()=>{
//     renderer.setSize(screen.width,screen.height);
//     camera.aspect=screen.aspect;
// });