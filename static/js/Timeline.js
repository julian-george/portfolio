"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Timeline;

var _react = _interopRequireWildcard(require("react"));

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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// I usually use classbased components because I like the OOP feel, but I needed to use hooks for the react-spring animations here, so I used a function based component
function Timeline(props) {
  var currentProj = {
    name: "current",
    title: "What I'm Working On Now",
    summary: "I'm currently working with the Magnuson Center, adding features and refining the MCCV platform for the 2021-2022 year. I'm also making slight edits to this portfolio as I apply to internships. Then, I will relax this summer before getting back on the grind in the fall.",
    banner: false
  };
  var projects = [currentProj].concat(_toConsumableArray(loaded_data.projects));
  projects = projects.map(function (p, index) {
    return /*#__PURE__*/_react["default"].createElement(Project, {
      key: index,
      hue: props.hue,
      disp: props.timeline.bubbleDisp * index,
      project: p
    });
  }); // these two determine how much to move the timeline with each click, and the maximum amount of movement

  var moveAmount = props.timeline.bubbleSize + props.timeline.bubbleDisp;
  var maxDisp = -(moveAmount * (projects.length - 3) + props.timeline.bubbleSize + 60); // setting initial line displacement

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
      // makes it so shown projects don't clip outside of container
      if (lineDisplacement == 0) newDisp -= props.timeline.bubbleDisp;
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

      var project = this.props.project;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "project",
        style: {
          left: this.props.disp,
          backgroundColor: this.isCurrent ? this.state.hovering ? "hsl(" + this.props.hue + ",95%,25%)" : "hsl(" + this.props.hue + ",75%,40%)" : "white"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectHead",
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
        className: "projectTitle"
      }, project.title), /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectDate"
      }, project.hasOwnProperty("time") ? project.time : "")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectThumbnail",
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
        src: project.icon,
        style: {
          transform: "scale(1." + (this.state.hovering ? 2 : 0) + ")"
        }
      }) : ""), /*#__PURE__*/_react["default"].createElement(ProjectInfo, {
        project: project,
        hue: this.props.hue,
        active: this.state.infoActive,
        parent: this
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
      var _this3 = this;

      // rendering the inherited project info
      var project = this.props.project;

      if (project.name != "current") {
        return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
          "in": this.props.active
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfo"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "closeItem",
          onClick: function onClick() {
            _this3.props.parent.toggleInfo();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null, "\uD83D\uDDD9")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoHead"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoTitle"
        }, project.link != "" ? /*#__PURE__*/_react["default"].createElement("a", {
          href: project.link,
          target: "_blank"
        }, project.title) : project.title), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoIcons"
        }, project.github != "" ? /*#__PURE__*/_react["default"].createElement("a", {
          href: project.github,
          target: "_blank"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "projectGit",
          src: "static/logos/github-black.png"
        })) : "")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoSubtitle"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoTime"
        }, project.time + (project.duration != "" ? " | " + project.duration : "")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoRoles"
        }, project.collaboration + " | " + project.role.join(", "))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoBody"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoSummary"
        }, project.summary), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoSkills"
        }, project.skills.map(function (skill, index) {
          return /*#__PURE__*/_react["default"].createElement(SkillPill, {
            text: skill,
            key: index,
            hue: _this3.props.hue
          });
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoTakeaways"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoTakeawaysTitle"
        }, "Takeaways"), /*#__PURE__*/_react["default"].createElement("ul", null, project.takeaways.map(function (take, index) {
          return /*#__PURE__*/_react["default"].createElement("li", {
            key: index
          }, take);
        }))), project.link != "" ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "projectInfoLink"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: project.link
        }, " Visit Here ")) : "")));
      } else return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
        "in": this.props.active
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectInfo"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "closeItem",
        onClick: function onClick() {
          _this3.props.parent.toggleInfo();
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, "\uD83D\uDDD9")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectInfoHead"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectInfoTitle"
      }, project.title)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectInfoBody"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "projectInfoSummary"
      }, project.summary))));
    }
  }]);

  return ProjectInfo;
}(_react["default"].Component);

var SkillPill = /*#__PURE__*/function (_React$Component3) {
  _inherits(SkillPill, _React$Component3);

  var _super3 = _createSuper(SkillPill);

  function SkillPill(props) {
    _classCallCheck(this, SkillPill);

    return _super3.call(this, props);
  }

  _createClass(SkillPill, [{
    key: "render",
    value: function render() {
      var pillColor = "hsl(" + this.props.hue + ",70%,35%)";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "skillPill",
        style: {
          backgroundColor: pillColor
        }
      }, this.props.text);
    }
  }]);

  return SkillPill;
}(_react["default"].Component);