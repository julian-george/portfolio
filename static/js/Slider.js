"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props); //function for the color slider, says that the slider is active when its clicked, setting base hue and position to be compared with later

    _this.handleClick = function (event) {
      _this.setState({
        sliderActive: true,
        baseHue: _this.state.hue,
        basePos: event.clientX
      });
    };

    _this.state = {
      hue: props.startingHue,
      baseHue: props.startingHue,
      basePos: 0,
      sliderActive: false,
      bioActive: false
    }; // adds an event listener for the color slider whenever the mouse moves

    document.addEventListener('mousemove', function (e) {
      var startingHue = _this.props.startingHue; // if the slider is active, change the hue (and therefore the slider position) accordingly

      if (_this.state.sliderActive) {
        var futureHue = _this.state.baseHue + (e.clientX - _this.state.basePos) * 2;
        if (futureHue > 360 + startingHue) futureHue = 360 + startingHue;else if (futureHue < startingHue) futureHue = startingHue;

        _this.setState({
          hue: futureHue
        });

        _this.props.parent.setState({
          hue: futureHue
        });
      }
    }); // event listener for ending the slider edits

    document.addEventListener('mouseup', function (e) {
      if (_this.state.sliderActive) _this.setState({
        sliderActive: false,
        baseHue: _this.state.hue
      });
    });
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var letterColor = "hsl(" + this.state.hue + ",80%,40%)";
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "colorSlider",
        onMouseDown: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderDot",
        style: {
          left: (this.state.hue - this.props.startingHue) / 2 - 20
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "dotColor",
        style: {
          backgroundColor: letterColor
        }
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        id: "sliderLabel"
      }, "change color"));
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;