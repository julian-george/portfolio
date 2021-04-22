"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _Timeline = _interopRequireDefault(require("./Timeline.js"));

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

// this component encompasses everything outside of the threejs animation
var Bio = /*#__PURE__*/function (_React$Component) {
  _inherits(Bio, _React$Component);

  var _super = _createSuper(Bio);

  function Bio(props) {
    var _this;

    _classCallCheck(this, Bio);

    _this = _super.call(this, props);
    _this.skills = ["HTML", "CSS", "Javascript", "Nodejs", "MongoDB", "React", "Java", "Figma"]; // attributes for the timeline bubbles, up at the top of the hierarchy to be edited easier

    _this.timeline = {
      bubbleSize: 160,
      width: 1050,
      bubbleDisp: (1050 - 160 * 3) / 2
    };
    return _this;
  }

  _createClass(Bio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // converting skill array into < Skill /> components
      var skillComponents = this.skills.map(function (s, index) {
        return /*#__PURE__*/_react["default"].createElement(Skill, {
          hue: _this2.props.hue,
          name: s,
          key: index
        });
      });
      var saturatedColor = "hsl(" + this.props.hue + ",80%,40%)";
      var avatarColor = "hsl(" + this.props.hue + ",85%,30%)"; // this contains pretty much everything, from bio info to skills to timeline, wrapped in a material UI fade component for the initial fade animation (may change later)

      return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
        "in": this.props.active,
        timeout: 500
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "bioContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "toprow"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "leftBio"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "bio-head"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "avatar",
        style: {
          backgroundColor: avatarColor
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "static/avatar.jpeg"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "personalinfo"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "julian@juliangeorge.net"), /*#__PURE__*/_react["default"].createElement("div", null, "Cherry Hill, NJ"), /*#__PURE__*/_react["default"].createElement("div", null, "Dartmouth '24"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "socialrow"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/julian-george-33b42a1b3/",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "static/logos/linkedin.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://twitter.com/JulianGeorgeDev",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "static/logos/twitter.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://github.com/FudgeDaMuffin",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "static/logos/github.png",
        href: "https://github.com/FudgeDaMuffin"
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        id: "bio-body"
      }, "I\u2019m a Dartmouth first-year with a passion for web development. I've been making websites since middle school, honing my skills continuously with countless personal projects, the best of which you can browse below. I plan to double major in computer science and music. I grew up in Haddonfield, New Jersey, and currently live just outside of it in Cherry Hill. When I'm not working, I love to hike, work out, make music, play video games, and bike.")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "skills"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "skillTitle"
      }, "Primary Skills"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "skillGrid"
      }, skillComponents))), /*#__PURE__*/_react["default"].createElement("div", {
        id: "timelineContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "timelinetitle"
      }, "My Projects"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "timelinebody"
      }, /*#__PURE__*/_react["default"].createElement(_Timeline["default"], {
        hue: this.props.hue,
        timeline: this.timeline
      })))));
    }
  }]);

  return Bio;
}(_react["default"].Component); // simple skill component, just the skill and a logo for it on a div


var Skill = /*#__PURE__*/function (_React$Component2) {
  _inherits(Skill, _React$Component2);

  var _super2 = _createSuper(Skill);

  function Skill(props) {
    _classCallCheck(this, Skill);

    return _super2.call(this, props);
  }

  _createClass(Skill, [{
    key: "render",
    value: function render() {
      var bgColor = "hsl(" + this.props.hue + ",10%,15%)";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "skill",
        style: {
          backgroundColor: bgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "static/logos/" + this.props.name.toLowerCase() + ".png"
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.props.name));
    }
  }]);

  return Skill;
}(_react["default"].Component);

var _default = Bio;
exports["default"] = _default;