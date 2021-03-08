"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _gsap = require("gsap");

var _Bio = _interopRequireDefault(require("./Bio.js"));

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

var screen = {
  width: 1200,
  height: 900,
  aspect: 1400 / 900
}; //this variable defines what the hue at the left of the color slider is

var startingHue = 34;
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

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props); //function for the color slider, says that the slider is active when its clicked, setting base hue and position to be compared with later

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
    }; // adds an event listener for the color slider whenever the mouse moves

    document.addEventListener('mousemove', function (e) {
      // if the slider is active, change the hue (and therefore the slider position) accordingly
      if (_this.state.sliderActive) {
        var futureHue = _this.state.baseHue + (e.clientX - _this.state.basePos) * 2;
        if (futureHue > 360 + startingHue) futureHue = 360 + startingHue;else if (futureHue < startingHue) futureHue = startingHue;

        _this.setState({
          hue: futureHue
        });
      }
    }); // event listener for ending the slider edits

    document.addEventListener('mouseup', function (e) {
      if (_this.state.sliderActive) _this.setState({
        sliderActive: false,
        baseHue: _this.state.hue
      });
    }); // event slider to trigger the bio fadein and to move the name and slider down (will change moving down animation to make more smooth)

    document.addEventListener('scroll', function (e) {
      // screen.height/3 is a somewhat arbitrary number but it was a nice place to start the transition
      if (window.scrollY > screen.height / 3) {
        // this.state.nameDisplacement is vertical displacement of name, its 80 by default to put it in the threejs canvas
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
  } //whenever the state changes, change the threejs J to the new hue


  _createClass(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      letterJ.material.color = new THREE.Color("hsl(" + this.state.hue + ",65%,40%)");
    }
  }, {
    key: "render",
    value: function render() {
      // various colors used that are dependent on the hue
      var fullContainerColor = "hsl(" + this.state.hue + ",55%,3%)";
      var canvasContainerColor = "hsl(" + this.state.hue + ",5%,13%)";
      var tintedTextColor = "hsl(" + this.state.hue + ",30%,79%)";
      var letterColor = "hsl(" + this.state.hue + ",80%,40%)";
      var footerColor1 = "hsla(" + this.state.hue + ",60%,50%,.6)";
      var footerColor2 = "hsla(" + this.state.hue + ",60%,50%,1)";
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
      }, "change color"))), /*#__PURE__*/_react["default"].createElement(_Bio["default"], {
        hue: this.state.hue,
        active: this.state.bioActive
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "footer",
        style: {
          background: "linear-gradient(315deg, " + footerColor1 + "0%, " + footerColor2 + "60%)",
          color: fullContainerColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "Fully Designed and Developed By Julian George"), /*#__PURE__*/_react["default"].createElement("div", null, "Copyright \xA9 2021 Julian George. All rights reserved."))));
    }
  }]);

  return App;
}(_react["default"].Component);

var domContainer = document.getElementById('react-content');

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), domContainer); // threejs boilerplate code


var scene = new THREE.Scene();
scene.background = new THREE.Color(0x262422);
var camera = new THREE.PerspectiveCamera(75, screen.aspect, 0.1, 10000);
camera.position.set(-300, 0, 0);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(screen.width, screen.height);
var cont = document.getElementById("canvasContainer"); // orbitControls gives ability to grab and move around

var controls = new THREE.OrbitControls(camera, cont); // I don't want users to scroll out or move around

controls.enableZoom = false;
controls.enablePan = false;
cont.appendChild(renderer.domElement); // this will be used to store imported J model

var letterJ;
var objLoader = new THREE.OBJLoader();
objLoader.load('LetterJ.obj', function (object) {
  object = object.children[0]; // taking geometry out of object and giving it new material so that the hue can be altered

  var material = new THREE.MeshBasicMaterial({
    color: "hsl(" + startingHue + ",65%,40%)"
  });
  var mesh = new THREE.Mesh(object.geometry, material); //initializing J and setting initial attributes

  letterJ = mesh;
  letterJ.position.set(0, 0, 0);
  letterJ.scale.set(.25, .25, .25);
  letterJ.rotation.y = Math.PI;
  scene.add(letterJ); //colorEdges()

  animate();
}); // function to add colored edges, I need to edit the model in the future to make sure this colors the right edges 

var colorEdges = function colorEdges() {
  var geometry = new THREE.EdgesGeometry(letterJ.geometry, 30);
  var material = new THREE.LineBasicMaterial({
    color: 0x222222,
    linewidth: 2
  });
  var edges = new THREE.LineSegments(geometry, material);
  letterJ.add(edges);
}; // calls itself recursively to create the automatic rotation


var animate = function animate() {
  requestAnimationFrame(animate);
  letterJ.rotation.y += 0.005;
  renderer.render(scene, camera);
  controls.update();
};