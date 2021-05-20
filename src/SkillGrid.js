import React from 'react';
import Fade from '@material-ui/core/Fade';

import '../static/css/skills.css'

class SkillGrid extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            gridWidth:0,
            //gridHeight not responsive, but might be in future, so included in state
            gridHeight:160,
            modal: {
                skill: {},
                active:false
            }
        };
        // use ref to get width of grid
        this.grid = React.createRef();
    }
    componentDidMount() {
        this.setState({gridWidth:this.grid.current.clientWidth});
    }
    openModal(skill) {
        this.setState({modal:{active:true, skill:skill}})
    }
    closeModal() {
        this.setState({modal:{...this.state.modal,active:false}})
    }
    render() {
        // these variables are made for a two-row grid. may be changed if I add a ton of skills
        let skillsPerRow=Math.ceil(this.props.skills.length/2)
        let dim = this.state.gridWidth/(skillsPerRow+1);
        let margin = dim/skillsPerRow
        let skillStyle={
            width: dim, 
            height: dim,
            marginRight: margin,
            marginBottom: margin,
            fontSize: dim/6+"px",
        }
        // converting skill array into < Skill /> components
        let skillComponents=this.props.skills.map((s,index)=>(<Skill toggle={()=>{this.openModal(s)}} hue={this.props.hue} name={s.name} icon={s.icon} style={skillStyle} key={index}/>));
        return(
            <div id ="skillGrid" ref={this.grid}>
                {skillComponents}
                < SkillModal active={this.state.modal.active} skill={this.state.modal.skill} parent={this} hue={this.props.hue}/>
            </div>
        )
    }
}

class Skill extends React.Component {
    constructor(props){ 
        super(props)
        this.state={
            hovering:false
        }
     }
    render() {
        let bgColor="hsl("+this.props.hue+",10%,15%)"
        let hoverBgColor="hsl("+this.props.hue+",20%,10%)";
        return (
            <div onClick={this.props.toggle} className="skill" 
            style={{...this.props.style, backgroundColor:(!this.state.hovering) ? bgColor : hoverBgColor}}
            onMouseEnter={()=>{this.setState({hovering:true})}} 
            onMouseLeave={()=>{this.setState({hovering:false})}}>
                <img src={this.props.icon}></img>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

class SkillModal extends React.Component {
    constructor(props){
        super(props)
        this.experienceLabels=[
            "Familiar with the fundamentals",
            "Able to use for personal projects",
            "Able to use professionally",
            "Comfortable using professionally",
            "Comfortable enough to teach others"
        ]
    }
    render() {
        let bgColor="hsl("+this.props.hue+",10%,15%)";
        let logoBgColor="hsl("+this.props.hue+",40%,25%)"
        return (
            <Fade in={this.props.active} timeout={300}>
                <div id="skillModal" style={{
                    display:(this.props.skill) ? "" : "none",
                    backgroundColor:bgColor
                    }}>
                    <div className ="closeItem" onClick={()=>{this.props.parent.closeModal()}}>
                        <span>×</span>
                    </div>
                    <div id ="modalHead">
                        <div id="modalLogo" style={{backgroundColor:logoBgColor}}>
                            <img src={this.props.skill.icon} />
                        </div>
                        <div id="modalInfo">
                            <div id="modalTitle">{this.props.skill.name}</div>
                            <div id="modalExperience">
                                < ExperienceBubble level={this.props.skill.experience} />
                                <span>{this.experienceLabels[this.props.skill.experience-1]}</span>
                                </div>
                        </div>
                    </div>
                    <hr />
                    <div id ="modalBody">
                        {this.props.skill.description}
                    </div>
                </div>
            </Fade>
        ) 
    }
}

class ExperienceBubble extends React.Component {
    constructor(props) {
        super(props)
        this.bubbleColors=[
            "green",
            "orange",
            "red",
            "blue",
            "purple"
        ]
    }
    render() {
        return (
            <div className="expBubble" style={{backgroundColor:this.bubbleColors[this.props.level-1]}}>
                <span>{this.props.level}</span>
            </div>
        )
    }
}

export default SkillGrid