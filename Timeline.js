"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Timeline;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactSpring = require("react-spring");

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// I usually use classbased components because I like the OOP feel, but I needed to use hooks for the react-spring animations here, so I used a function based component
function Timeline(props) {
  // array of projects that's converted to components to be used in timeline
  var projects = [{
    name: "current",
    title: "What I'm Working On Now",
    description: "I'm currently polishing this portfolio site to make it as perfect as possible before using it for internship applications.",
    banner: false
  }, {
    name: "portfolio",
    title: "Portfolio",
    date: "February 2021",
    technologies: ["HTML/CSS", "Javascript", "React", "Threejs", "Figma", "react-spring"],
    description: "My portfolio, the site you're viewing now, is simple to use but has been complex to make. In this project, I tried to use a more production-esque project structure, and I also experimented with a few new technologies to make the site as pretty as possible. I forayed into 3D modeling with Threejs and Blender, and I tried my first React libraries with Material UI and react-spring. I will continue to polish this portfolio as I become more skilled.",
    github: "https://github.com/FudgeDaMuffin/portfolio"
  }, {
    name: "academicchallenge",
    title: "Academic Challenge",
    date: "January-February 2021",
    technologies: ["HTML/CSS", "Javascript", "Nodejs", "MongoDB", "React", "Socket.io", "Bash"],
    description: "This site, made to permit easier and more reliable scorekeeping for my school's academic challenge team, was an opportunity for me to learn and implement a variety of new technologies. I discarded jQuery in favor of React, and I tried out a variety of other new technologies. This ended up being very complex and time-consuming, but it led to me feeling confident in a variety of valuable skills.",
    github: "https://github.com/FudgeDaMuffin/academic-challenge",
    link: "https://academic-challenge.com"
  }, {
    name: "idsite",
    title: "Dartmouth ID Maker",
    date: "October 2020",
    technologies: ["HTML/CSS", "Javascript", "jQuery"],
    description: "This project allows users to customize a Dartmouth ID. As my first personal project of college, it refreshed me on web development skills. It was also a good exercise in implementing pre-made designs, as I used HTML and CSS to replicate a handheld Dartmouth ID almost perfectly.",
    github: "https://github.com/FudgeDaMuffin/dartmouth-id-creator",
    link: "idsite/index.html"
  }, {
    name: "highschool",
    title: "High School Projects",
    date: "2017-2020",
    technologies: ["HTML/CSS", "Javascript", "jQuery", "Nodejs", "MongoDB", "SQL", "Python"],
    description: "In high school, I worked on a variety of projects, from apps for my Computer Science Club, to sites for various school organizations, to random passion projects. My code was never very organized or efficient, and I only used HTML and jQuery, with some occasional Nodejs. Still, these projects let me develop my current skills, and although I may not be very proud of them today, I've learned from the mistakes I made then in order to become the dev I am now.",
    banner: false
  }].map(function (p, index) {
    return /*#__PURE__*/_react["default"].createElement(Project, {
      key: index,
      hue: props.hue,
      disp: props.timeline.bubbleDisp * index,
      project: p
    });
  }); // these two determine how much to move the timeline with each click, and the maximum amount of movement

  var moveAmount = props.timeline.bubbleSize + props.timeline.bubbleDisp;
  var maxDisp = -(moveAmount * (projects.length - 3) + props.timeline.bubbleSize + 40); // setting initial line displacement

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      lineDisplacement = _useState2[0],
      setDisp = _useState2[1]; // left and right active show that the left and right movement buttons are clickable; if theyre false that means that the buttons are greyed out and uninteractable


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      leftActive = _useState4[0],
      toggleLeft = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      rightActive = _useState6[0],
      toggleRight = _useState6[1]; // moves the timeline, changes the displacement, and toggles the buttons accordingly


  var move = function move(amount) {
    var newDisp = lineDisplacement + amount;

    if (newDisp > -20) {
      newDisp = 0;
      toggleLeft(false);
      toggleRight(true);
    } else if (newDisp < maxDisp + 20) {
      newDisp = maxDisp;
      toggleRight(false);
      toggleLeft(true);
    } else {
      toggleLeft(true);
      toggleRight(true);
    }

    setDisp(newDisp);
  };

  var activeHue = "hsl(" + props.hue + ",65%,45%)";
  var inactiveHue = "hsl(" + props.hue + ",30%,20%)"; // creating these components beforehand as svgs. used svgs so I could change the color

  var leftArrow = /*#__PURE__*/_react["default"].createElement("svg", {
    height: "60",
    width: "40"
  }, /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "40,0 5,30 40,60",
    style: {
      stroke: leftActive ? activeHue : inactiveHue
    },
    fill: "none",
    strokeWidth: "6"
  }));

  var rightArrow = /*#__PURE__*/_react["default"].createElement("svg", {
    height: "60",
    width: "40"
  }, /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "0,0 35,30 0,60",
    style: {
      stroke: rightActive ? activeHue : inactiveHue
    },
    fill: "none",
    strokeWidth: "6"
  })); // spring to animate the timeline as it moves


  var dispSpring = (0, _reactSpring.useSpring)({
    left: lineDisplacement
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "projectlist"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "navLeft",
    className: "timelineNav",
    style: {
      cursor: leftActive ? "pointer" : "auto"
    },
    onClick: function onClick() {
      move(moveAmount);
    }
  }, leftArrow), /*#__PURE__*/_react["default"].createElement("div", {
    id: "innerProjects"
  }, /*#__PURE__*/_react["default"].createElement(_reactSpring.animated.div, {
    id: "projectsContainer",
    style: dispSpring
  }, " ", projects, " "), /*#__PURE__*/_react["default"].createElement("div", {
    id: "timeline"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "navRight",
    className: "timelineNav",
    style: {
      cursor: rightActive ? "pointer" : "auto"
    },
    onClick: function onClick() {
      move(moveAmount * -1);
    }
  }, rightArrow));
} // individual project bubbles on the timeline


var Project = /*#__PURE__*/function (_React$Component) {
  _inherits(Project, _React$Component);

  var _super = _createSuper(Project);

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _super.call(this, props); // special variable for if the bubble is "what I'm working on now" since that behaves differently

    _this.isCurrent = _this.props.project.name == "current";
    _this.state = {
      hovering: false,
      infoActive: false
    };
    return _this;
  } // toggles if the project info popup is active by changing the state


  _createClass(Project, [{
    key: "toggleInfo",
    value: function toggleInfo() {
      if (this.state.infoActive) this.setState({
        infoActive: false
      });else this.setState({
        infoActive: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "project",
        style: {
          left: this.props.disp,
          backgroundColor: this.isCurrent ? this.state.hovering ? "hsl(" + this.props.hue + ",95%,25%)" : "hsl(" + this.props.hue + ",75%,40%)" : "white"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectHead",
        onMouseEnter: function onMouseEnter() {
          _this2.setState({
            hovering: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this2.setState({
            hovering: false
          });
        },
        onClick: function onClick() {
          _this2.toggleInfo();
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectTitle"
      }, this.props.project.title), /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectDate"
      }, this.props.project.hasOwnProperty("date") ? this.props.project.date : "")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectThumbnail",
        onMouseEnter: function onMouseEnter() {
          _this2.setState({
            hovering: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this2.setState({
            hovering: false
          });
        },
        onClick: function onClick() {
          _this2.toggleInfo();
        }
      }, !this.isCurrent ? /*#__PURE__*/_react["default"].createElement("img", {
        src: "screenshots/" + this.props.project.name + "thumbnail.png",
        style: {
          transform: "scale(1." + (this.state.hovering ? 2 : 0) + ")"
        }
      }) : ""), /*#__PURE__*/_react["default"].createElement(ProjectInfo, {
        project: this.props.project,
        hue: this.props.hue,
        active: this.state.infoActive,
        toggleFunc: this.props.toggleFunc
      }));
    }
  }]);

  return Project;
}(_react["default"].Component); //component for pop-up project info


var ProjectInfo = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProjectInfo, _React$Component2);

  var _super2 = _createSuper(ProjectInfo);

  function ProjectInfo(props) {
    _classCallCheck(this, ProjectInfo);

    return _super2.call(this, props);
  }

  _createClass(ProjectInfo, [{
    key: "render",
    value: function render() {
      // rendering the inherited project info
      return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
        "in": this.props.active
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfo",
        "data-content": "red"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfoHead"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfoTitle"
      }, this.props.project.hasOwnProperty("link") ? /*#__PURE__*/_react["default"].createElement("a", {
        href: this.props.project.link,
        target: "_blank"
      }, this.props.project.title) : this.props.project.title), /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfoIcons"
      }, this.props.project.hasOwnProperty("github") ? /*#__PURE__*/_react["default"].createElement("a", {
        href: this.props.project.github,
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        id: "projectGit",
        src: "logos/github-black.png"
      })) : "")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfoBody"
      }, this.props.project.description), /*#__PURE__*/_react["default"].createElement("div", {
        id: "projectInfoBanner"
      }, !this.props.project.hasOwnProperty("banner") ? /*#__PURE__*/_react["default"].createElement("img", {
        id: "projectBanner",
        src: "screenshots/" + this.props.project.name + "banner.png"
      }) : "")));
    }
  }]);

  return ProjectInfo;
}(_react["default"].Component);