import React from "react";
import Fade from "@material-ui/core/Fade";

import Timeline from "./Timeline.js";
import SkillGrid from "./SkillGrid.js";

import "../static/css/biohead.css";

// this component encompasses everything outside of the threejs animation
class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.skills = loaded_data.skills;
    // attributes for the timeline bubbles, up at the top of the hierarchy to be edited easier
    this.timeline = {
      bubbleSize: 160,
      width: 1050,
      bubbleDisp: (1050 - 160 * 3) / 2,
    };
  }
  render() {
    let avatarColor = "hsl(" + this.props.hue + ",85%,30%)";

    // this contains pretty much everything, from bio info to skills to timeline, wrapped in a material UI fade component for the initial fade animation (may change later)
    return (
      <Fade in={this.props.active} timeout={500}>
        <div id="bioContainer">
          <div id="toprow">
            <div id="leftBio">
              <div id="bio-head">
                <div id="avatar" style={{ backgroundColor: avatarColor }}>
                  <img src="static/avatar.jpeg" />
                </div>
                <div id="personalinfo">
                  <div>julian@juliangeorge.net</div>
                  <div>Cherry Hill, NJ</div>
                  <div>Developer with DALI</div>
                  <div id="socialrow">
                    <a
                      href="https://www.linkedin.com/in/julian-george-33b42a1b3/"
                      target="_blank"
                    >
                      <img src="static/logos/linkedin.png" />
                    </a>
                    <a
                      href="https://twitter.com/JulianGeorgeDev"
                      target="_blank"
                    >
                      <img src="static/logos/twitter.png" />
                    </a>
                    <a href="https://github.com/julian-george" target="_blank">
                      <img
                        src="static/logos/github.png"
                        href="https://github.com/FudgeDaMuffin"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div id="bio-body">
                I’m a Dartmouth second-year with a passion for software
                engineering. I've been making websites since middle school,
                honing my skills continuously with countless personal projects,
                the best of which you can browse below. I plan to double major
                in computer science and music. I grew up in Haddonfield, New
                Jersey, and currently live just outside of it in Cherry Hill.
                When I'm not working, I love to hike, work out, make music, play
                video games, and take photos.
              </div>
            </div>
            <div id="skills">
              <div id="skillTitle">Primary Skills</div>
              <SkillGrid hue={this.props.hue} skills={this.skills} />
            </div>
          </div>
          <div id="timelineContainer">
            <div id="timelinetitle">My Projects</div>
            <div id="timelinebody">
              <Timeline hue={this.props.hue} timeline={this.timeline} />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
// simple skill component, just the skill and a logo for it on a div

export default Bio;
