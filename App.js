"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var startingHue = 34;

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.moused = false;

    _this.handleClick = function (event) {
      _this.setState({
        sliderActive: true,
        baseHue: _this.state.hue,
        basePos: event.clientX
      });
    };

    _this.state = {
      hue: startingHue,
      baseHue: startingHue,
      basePos: 0,
      nameDisplacement: 0,
      sliderActive: false,
      bioActive: false
    };
    document.addEventListener('mousemove', function (e) {
      if (_this.state.sliderActive) {
        var futureHue = _this.state.baseHue + (e.clientX - _this.state.basePos) * 2;
        if (futureHue > 360 + startingHue) futureHue = 360 + startingHue;else if (futureHue < startingHue) futureHue = startingHue;

        _this.setState({
          hue: futureHue
        });
      }
    });
    document.addEventListener('mouseup', function (e) {
      if (_this.state.sliderActive) _this.setState({
        sliderActive: false,
        baseHue: _this.state.hue
      });
    });
    document.addEventListener('scroll', function (e) {
      if (window.scrollY > screen.height / 3) {
        _this.setState({
          nameDisplacement: Math.min(window.scrollY - screen.height / 3, 80)
        });

        if (!_this.state.bioActive & _this.state.nameDisplacement == 80) _this.setState({
          bioActive: true
        });
      } else {
        _this.setState({
          nameDisplacement: 0
        });
      }
    });
    return _this;
  }

  _createClass(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      letterJ.material.color = new THREE.Color("hsl(" + this.state.hue + ",65%,40%)");
    }
  }, {
    key: "render",
    value: function render() {
      var fullContainerColor = "hsl(" + this.state.hue + ",55%,3%)";
      var canvasContainerColor = "hsl(" + this.state.hue + ",5%,13%)";
      var tintedTextColor = "hsl(" + this.state.hue + ",30%,79%)";
      var letterColor = "hsl(" + this.state.hue + ",80%,40%)";
      var footerColor = "hsl(" + this.state.hue + ",60%,50%)";
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "fullContainer",
        style: {
          backgroundColor: fullContainerColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "canvasContainer"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "bio"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "hoverName",
        style: {
          top: this.state.nameDisplacement - 80
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Julian George"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "colorSlider",
        onMouseDown: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderDot",
        style: {
          left: (this.state.hue - startingHue) / 2 - 20
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "dotColor",
        style: {
          backgroundColor: letterColor
        }
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderLabel"
      }, "change color"))), /*#__PURE__*/_react["default"].createElement(Bio, {
        hue: this.state.hue,
        active: this.state.bioActive
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "footer",
        style: {
          backgroundColor: footerColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, "Fully Designed and Developed By Julian George"), /*#__PURE__*/_react["default"].createElement("div", null, "Copyright \xA9 2021 Julian George. All rights reserved.")));
    }
  }]);

  return App;
}(_react["default"].Component);

var Bio = /*#__PURE__*/function (_React$Component2) {
  _inherits(Bio, _React$Component2);

  var _super2 = _createSuper(Bio);

  function Bio(props) {
    var _this2;

    _classCallCheck(this, Bio);

    _this2 = _super2.call(this, props);
    _this2.skills = ["HTML", "CSS", "Javascript", "Nodejs", "MongoDB", "React", "Java", "Figma"];
    _this2.timeline = {
      bubbleSize: 160,
      width: 1050,
      bubbleDisp: (1050 - 160 * 3) / 2
    };
    return _this2;
  }

  _createClass(Bio, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var skillComponents = this.skills.map(function (s, index) {
        return /*#__PURE__*/_react["default"].createElement(Skill, {
          hue: _this3.props.hue,
          name: s,
          key: index
        });
      });
      var saturatedColor = "hsl(" + this.props.hue + ",80%,40%)";
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
          backgroundColor: saturatedColor
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "personalinfo"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "julian@juliangeorge.net"), /*#__PURE__*/_react["default"].createElement("div", null, "Cherry Hill, NJ"), /*#__PURE__*/_react["default"].createElement("div", null, "Dartmouth '24"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "socialrow"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/julian-george-33b42a1b3/",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "logos/linkedin.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://twitter.com/muffinner",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "logos/twitter.png"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://github.com/FudgeDaMuffin",
        target: "_blank"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "logos/github.png",
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
}(_react["default"].Component);

var Skill = /*#__PURE__*/function (_React$Component3) {
  _inherits(Skill, _React$Component3);

  var _super3 = _createSuper(Skill);

  function Skill(props) {
    _classCallCheck(this, Skill);

    return _super3.call(this, props);
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
        src: "logos/" + this.props.name.toLowerCase() + ".png"
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.props.name));
    }
  }]);

  return Skill;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;