"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SkillGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(SkillGrid, _React$Component);

  var _super = _createSuper(SkillGrid);

  function SkillGrid(props) {
    var _this;

    _classCallCheck(this, SkillGrid);

    _this = _super.call(this, props);
    _this.state = {
      gridWidth: 0,
      //gridHeight not responsive, but might be in future, so included in state
      gridHeight: 160,
      modal: {
        skill: {},
        active: false
      }
    }; // use ref to get width of grid

    _this.grid = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(SkillGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        gridWidth: this.grid.current.clientWidth
      });
    }
  }, {
    key: "openModal",
    value: function openModal(skill) {
      this.setState({
        modal: {
          active: true,
          skill: skill
        }
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        modal: _objectSpread(_objectSpread({}, this.state.modal), {}, {
          active: false
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // these variables are made for a two-row grid. may be changed if I add a ton of skills
      var skillsPerRow = Math.ceil(this.props.skills.length / 2);
      var dim = this.state.gridWidth / (skillsPerRow + 1);
      var margin = dim / skillsPerRow;
      var skillStyle = {
        width: dim,
        height: dim,
        marginRight: margin,
        marginBottom: margin,
        fontSize: dim / 6 + "px"
      }; // converting skill array into < Skill /> components

      var skillComponents = this.props.skills.map(function (s, index) {
        return /*#__PURE__*/_react["default"].createElement(Skill, {
          toggle: function toggle() {
            _this2.openModal(s);
          },
          hue: _this2.props.hue,
          name: s.name,
          icon: s.icon,
          style: skillStyle,
          key: index
        });
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "skillGrid",
        ref: this.grid
      }, skillComponents, /*#__PURE__*/_react["default"].createElement(SkillModal, {
        active: this.state.modal.active,
        skill: this.state.modal.skill,
        parent: this,
        hue: this.props.hue
      }));
    }
  }]);

  return SkillGrid;
}(_react["default"].Component);

var Skill = /*#__PURE__*/function (_React$Component2) {
  _inherits(Skill, _React$Component2);

  var _super2 = _createSuper(Skill);

  function Skill(props) {
    var _this3;

    _classCallCheck(this, Skill);

    _this3 = _super2.call(this, props);
    _this3.state = {
      hovering: false
    };
    return _this3;
  }

  _createClass(Skill, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var bgColor = "hsl(" + this.props.hue + ",10%,15%)";
      var hoverBgColor = "hsl(" + this.props.hue + ",20%,10%)";
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.props.toggle,
        className: "skill",
        style: _objectSpread(_objectSpread({}, this.props.style), {}, {
          backgroundColor: !this.state.hovering ? bgColor : hoverBgColor
        }),
        onMouseEnter: function onMouseEnter() {
          _this4.setState({
            hovering: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this4.setState({
            hovering: false
          });
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.icon
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.props.name));
    }
  }]);

  return Skill;
}(_react["default"].Component);

var SkillModal = /*#__PURE__*/function (_React$Component3) {
  _inherits(SkillModal, _React$Component3);

  var _super3 = _createSuper(SkillModal);

  function SkillModal(props) {
    var _this5;

    _classCallCheck(this, SkillModal);

    _this5 = _super3.call(this, props);
    _this5.experienceLabels = ["Familiar with the fundamentals", "Able to use for personal projects", "Able to use professionally", "Comfortable using professionally", "Comfortable enough to teach others"];
    return _this5;
  }

  _createClass(SkillModal, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var bgColor = "hsl(" + this.props.hue + ",10%,15%)";
      var logoBgColor = "hsl(" + this.props.hue + ",40%,25%)";
      return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
        "in": this.props.active,
        timeout: 300
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "skillModal",
        style: {
          display: this.props.skill ? "" : "none",
          backgroundColor: bgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "closeItem",
        onClick: function onClick() {
          _this6.props.parent.closeModal();
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, "\uD83D\uDDD9")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalHead"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalLogo",
        style: {
          backgroundColor: logoBgColor
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.skill.icon
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalInfo"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalTitle"
      }, this.props.skill.name), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalExperience"
      }, /*#__PURE__*/_react["default"].createElement(ExperienceBubble, {
        level: this.props.skill.experience
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.experienceLabels[this.props.skill.experience - 1])))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modalBody"
      }, this.props.skill.description)));
    }
  }]);

  return SkillModal;
}(_react["default"].Component);

var ExperienceBubble = /*#__PURE__*/function (_React$Component4) {
  _inherits(ExperienceBubble, _React$Component4);

  var _super4 = _createSuper(ExperienceBubble);

  function ExperienceBubble(props) {
    var _this7;

    _classCallCheck(this, ExperienceBubble);

    _this7 = _super4.call(this, props);
    _this7.bubbleColors = ["green", "orange", "red", "blue", "purple"];
    return _this7;
  }

  _createClass(ExperienceBubble, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "expBubble",
        style: {
          backgroundColor: this.bubbleColors[this.props.level - 1]
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, this.props.level));
    }
  }]);

  return ExperienceBubble;
}(_react["default"].Component);

var _default = SkillGrid;
exports["default"] = _default;