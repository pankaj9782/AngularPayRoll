(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-users-users-module~employee-wizard-employee-wizard-module"], {
    /***/
    "etMh":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/@rxweb/reactive-form-validators.js ***!
      \******************************************************************************************************/

    /*! exports provided: RxReactiveFormsModule, RxFormBuilder, FormBuilderConfiguration, alpha, alphaNumeric, compare, contains, creditCard, digit, email, hexColor, lowerCase, maxDate, maxLength, minDate, maxNumber, minLength, minNumber, password, pattern, propArray, propObject, prop, range, required, upperCase, time, url, json, greaterThan, greaterThanEqualTo, lessThanEqualTo, lessThan, choice, different, numeric, even, odd, factor, leapYear, allOf, oneOf, noneOf, mac, ascii, dataUri, port, latLong, extension, fileSize, endsWith, startsWith, primeNumber, latitude, longitude, rule, file, custom, unique, image, notEmpty, async, cusip, grid, date, disable, error, and, or, not, trim, ltrim, rtrim, blacklist, stripLow, toBoolean, toDouble, toFloat, toInt, toString, whitelist, toDate, escape, prefix, suffix, model, sanitize, elementClass, minTime, maxTime, compose, ReactiveFormConfig, NumericValueType, IpVersion, ErrorMessageBindingStrategy, ResetFormType, RxFormControl, RxFormGroup, RxwebValidators, IAbstractControl, RxFormArray, ɵb, ɵd, ɵc, ɵa, ɵf, ɵg, ɵi, ɵj, ɵe, ɵh, ɵk */

    /***/
    function etMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _CONFIG_REQUIRED_FIEL;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxReactiveFormsModule", function () {
        return RxReactiveFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxFormBuilder", function () {
        return RxFormBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormBuilderConfiguration", function () {
        return FormBuilderConfiguration;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "alpha", function () {
        return alpha;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "alphaNumeric", function () {
        return alphaNumeric;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compare", function () {
        return compare;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return contains;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "creditCard", function () {
        return creditCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "digit", function () {
        return digit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "email", function () {
        return email;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hexColor", function () {
        return hexColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lowerCase", function () {
        return lowerCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maxDate", function () {
        return maxDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maxLength", function () {
        return maxLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "minDate", function () {
        return minDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maxNumber", function () {
        return maxNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "minLength", function () {
        return minLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "minNumber", function () {
        return minNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "password", function () {
        return password;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pattern", function () {
        return pattern;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "propArray", function () {
        return propArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "propObject", function () {
        return propObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "prop", function () {
        return prop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "range", function () {
        return range;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "required", function () {
        return required;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "upperCase", function () {
        return upperCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "time", function () {
        return time;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "url", function () {
        return url;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "json", function () {
        return json;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "greaterThan", function () {
        return greaterThan;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "greaterThanEqualTo", function () {
        return greaterThanEqualTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lessThanEqualTo", function () {
        return lessThanEqualTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lessThan", function () {
        return lessThan;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "choice", function () {
        return choice;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "different", function () {
        return different;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numeric", function () {
        return numeric;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "even", function () {
        return even;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "odd", function () {
        return odd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "factor", function () {
        return factor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "leapYear", function () {
        return leapYear;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "allOf", function () {
        return allOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "oneOf", function () {
        return oneOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "noneOf", function () {
        return noneOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mac", function () {
        return mac;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ascii", function () {
        return ascii;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dataUri", function () {
        return dataUri;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "port", function () {
        return port;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "latLong", function () {
        return latLong;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extension", function () {
        return extension;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fileSize", function () {
        return fileSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "endsWith", function () {
        return endsWith;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startsWith", function () {
        return startsWith;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "primeNumber", function () {
        return primeNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "latitude", function () {
        return latitude;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "longitude", function () {
        return longitude;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rule", function () {
        return rule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "file", function () {
        return file;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "custom", function () {
        return custom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unique", function () {
        return unique;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "image", function () {
        return image;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notEmpty", function () {
        return notEmpty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "async", function () {
        return async;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cusip", function () {
        return cusip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "grid", function () {
        return grid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "date", function () {
        return date;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disable", function () {
        return disable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "error", function () {
        return error;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "and", function () {
        return and;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "or", function () {
        return or;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return not;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trim", function () {
        return trim$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ltrim", function () {
        return ltrim$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rtrim", function () {
        return rtrim$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blacklist", function () {
        return blacklist$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stripLow", function () {
        return stripLow$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return toBoolean$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toDouble", function () {
        return toDouble$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toFloat", function () {
        return toFloat$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toInt", function () {
        return toInt$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toString", function () {
        return toString$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "whitelist", function () {
        return whitelist$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toDate", function () {
        return toDate$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "escape", function () {
        return escape$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "prefix", function () {
        return prefix$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "suffix", function () {
        return suffix$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "model", function () {
        return model;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sanitize", function () {
        return sanitize$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elementClass", function () {
        return elementClass;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "minTime", function () {
        return minTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maxTime", function () {
        return maxTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compose", function () {
        return compose;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormConfig", function () {
        return ReactiveFormConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumericValueType", function () {
        return NumericValueType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IpVersion", function () {
        return IpVersion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessageBindingStrategy", function () {
        return ErrorMessageBindingStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetFormType", function () {
        return ResetFormType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxFormControl", function () {
        return RxFormControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxFormGroup", function () {
        return RxFormGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxwebValidators", function () {
        return RxwebValidators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IAbstractControl", function () {
        return IAbstractControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RxFormArray", function () {
        return RxFormArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return BaseDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return ControlHostDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return HtmlControlTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return RxwebFormDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return BaseValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return ControlExpressionProcess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return FileControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return ImageFileControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return RxFormControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return DecimalProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return BaseFormBuilder;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CONTROLS_ERROR = "controlsError";
      var VALUE_CHANGED_SYNC = "valueChangedSync";
      var FUNCTION_STRING = "function";
      var OBJECT_STRING = "object";
      var RX_WEB_VALIDATOR = "rxwebValidator";
      var NUMBER = "number";
      var BOOLEAN = "boolean";
      var TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
      var CONDITIONAL_VALIDATOR = "conditionalValidator";
      var VALIDATOR_CONFIG = "validatorConfig";
      var THIS = "this";
      var RXCODE = "-rxw-";
      var MODEL = "model";
      var MODEL_INSTANCE = "modelInstance";
      var PATCH = "patch";

      var Linq = /*#__PURE__*/function () {
        function Linq() {
          _classCallCheck(this, Linq);
        }

        _createClass(Linq, null, [{
          key: "functionCreator",

          /**
           * @param {?} expression
           * @return {?}
           */
          value: function functionCreator(expression) {
            var
            /** @type {?} */
            functionSetter = [];
            var
            /** @type {?} */
            match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
            var
            /** @type {?} */
            splitSelect = match[2].split(",");

            for (var
            /** @type {?} */
            i = 0; i < splitSelect.length; i++) {
              var
              /** @type {?} */
              equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);

              if (equalToOperator !== null) {
                functionSetter = new Function(match[1], "return " + equalToOperator.input);
              } else {
                equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);

                if (equalToOperator === null) {
                  functionSetter = new Function(match[1], "return " + splitSelect.input);
                } else {
                  functionSetter = new Function(match[1], "return " + equalToOperator.input);
                }
              }
            }

            if (splitSelect.length == 0) functionSetter = {
              accessFunction: new Function(match[1], "return " + match[2])
            };
            return functionSetter;
          }
          /**
           * @param {?} jObject
           * @param {?} config
           * @param {?} parentObject
           * @param {?} modelInstance
           * @param {?} isDynamicConfig
           * @return {?}
           */

        }, {
          key: "execute",
          value: function execute(jObject, config, parentObject, modelInstance, isDynamicConfig) {
            var
            /** @type {?} */
            expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
            var
            /** @type {?} */
            lastParam = isDynamicConfig ? config : modelInstance;
            if (parentObject && typeof expressionFunction == "string") expressionFunction = Linq.functionCreator(expressionFunction);
            if (parentObject && expressionFunction) return modelInstance && modelInstance.constructor !== Object ?
            /** @type {?} */
            expressionFunction.call(modelInstance, parentObject, jObject, lastParam) :
            /** @type {?} */
            expressionFunction(parentObject, jObject, lastParam);
            return true;
          }
          /**
           * @param {?} texts
           * @return {?}
           */

        }, {
          key: "getConditionPath",
          value: function getConditionPath(texts) {
            var
            /** @type {?} */
            path = "";

            for (var
            /** @type {?} */
            i = 1; i < texts.length; i++) {
              path += texts.length - 1 == i ? texts[i].trim() : "".concat(texts[i].trim(), ".");
            }

            return path;
          }
          /**
           * @param {?} expression
           * @param {?} isNonValidationExpression
           * @return {?}
           */

        }, {
          key: "expressionParser",
          value: function expressionParser(expression, isNonValidationExpression) {
            var _this = this;

            var
            /** @type {?} */
            columns = [];
            var
            /** @type {?} */
            expressionString = expression.toString();
            var
            /** @type {?} */
            expressionArguments = Linq.extractArguments(expressionString.match(/\(([^)]+)\)/g));

            if (expressionArguments.length > 0) {
              var
              /** @type {?} */
              splitTexts = [];
              expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(function (t) {
                var
                /** @type {?} */
                texts = t.replace(/\(|\)/g, "").split("||");

                var _iterator = _createForOfIteratorHelper(texts),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var text = _step.value;
                    splitTexts.push(text);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
              splitTexts.forEach(function (t) {
                expressionArguments.forEach(function (x, i) {
                  t = t.trim();

                  if (t.startsWith(x + '.')) {
                    var
                    /** @type {?} */
                    splitText = t.split('.');
                    if (splitText.length == 2 || splitText.length >= 2 && isNonValidationExpression) {
                      if (!isNonValidationExpression) columns.push({
                        propName: splitText[1].trim(),
                        argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
                      });else columns.push({
                        propName: _this.getConditionPath(splitText),
                        argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
                      });
                    } else {
                      var
                      /** @type {?} */
                      arrayProp = splitText[1].split('[');
                      var
                      /** @type {?} */
                      jObject = {
                        propName: splitText[splitText.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                        argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
                      };
                      columns.push(jObject);
                    }
                  }
                });
              });
            }

            return columns;
          }
          /**
           * @param {?} splitTexts
           * @return {?}
           */

        }, {
          key: "extractArguments",
          value: function extractArguments(splitTexts) {
            var
            /** @type {?} */
            expressionArguments = [THIS];
            if (splitTexts && splitTexts[0]) splitTexts[0].split(",").forEach(function (t) {
              return expressionArguments.push(t.trim().replace("(", "").replace(")", ""));
            });
            return expressionArguments;
          }
          /**
           * @param {?} expression
           * @param {?=} isNonValidationExpression
           * @return {?}
           */

        }, {
          key: "expressionColumns",
          value: function expressionColumns(expression) {
            var isNonValidationExpression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var
            /** @type {?} */
            columns = [];
            var
            /** @type {?} */
            splitExpressions = [];

            if (typeof expression == "string") {
              expression.split("=>")[1].split(" && ").forEach(function (t) {
                t.split(" || ").forEach(function (x) {
                  splitExpressions.push(x.trim().split(' ')[0]);
                });
              });
              splitExpressions.forEach(function (t) {
                var
                /** @type {?} */
                splitText = t.split('.');
                if (splitText.length == 2) columns.push({
                  propName: splitText[1].trim()
                });else {
                  var
                  /** @type {?} */
                  arrayProp = splitText[1].split('[');
                  var
                  /** @type {?} */
                  jObject = {
                    propName: splitText[splitText.length - 1].trim(),
                    objectPropName: arrayProp[0],
                    arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                  };
                  columns.push(jObject);
                }
              });
            } else {
              columns = Linq.expressionParser(expression, isNonValidationExpression);
            }

            return columns;
          }
          /**
           * @param {?} expression
           * @param {?} propName
           * @return {?}
           */

        }, {
          key: "dynamicConfigParser",
          value: function dynamicConfigParser(expression, propName) {
            var
            /** @type {?} */
            controlNames = [];
            var
            /** @type {?} */
            expressionString = expression.toString();
            var
            /** @type {?} */
            expressionArguments = Linq.extractArguments(expressionString.match(/\(([^)]+)\)/g));
            var
            /** @type {?} */
            splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\?�`'#<>|,;:+-]+/g, " ").split(/ /g);
            if (expressionArguments.length > 3) expressionArguments.splice(expressionArguments.length - 1, 1);
            expressionArguments.forEach(function (t) {
              splitString.filter(function (x) {
                return x != "".concat(t, ".").concat(propName) && x.startsWith("".concat(t, "."));
              }).forEach(function (x) {
                var
                /** @type {?} */
                split = x.split('.');
                if (split.length == 2) controlNames.push({
                  propName: x.replace("".concat(t, "."), '')
                });else {
                  var
                  /** @type {?} */
                  arrayProp = split[1].split('[');
                  var
                  /** @type {?} */
                  jObject = {
                    propName: split[split.length - 1].trim(),
                    objectPropName: arrayProp[0],
                    arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                  };
                  controlNames.push(jObject);
                }
              });
            });
            return controlNames;
          }
        }]);

        return Linq;
      }();

      var AnnotationTypes = {
        numeric: 'numeric',
        required: 'required',
        minLength: 'minLength',
        maxLength: 'maxLength',
        minNumber: 'minNumber',
        maxNumber: 'maxNumber',
        pattern: 'pattern',
        password: 'password',
        compare: 'compare',
        minDate: 'minDate',
        maxDate: 'maxDate',
        alpha: 'alpha',
        alphaNumeric: 'alphaNumeric',
        email: 'email',
        hexColor: 'hexColor',
        lowerCase: 'lowerCase',
        url: 'url',
        upperCase: 'upperCase',
        nested: 'nested',
        propArray: 'propArray',
        propObject: 'propObject',
        contains: 'contains',
        range: 'range',
        custom: 'custom',
        digit: "digit",
        creditCard: "creditCard",
        time: "time",
        json: "json",
        greaterThan: "greaterThan",
        greaterThanEqualTo: "greaterThanEqualTo",
        lessThan: "lessThan",
        lessThanEqualTo: "lessThanEqualTo",
        choice: "choice",
        different: "different",
        even: "even",
        odd: "odd",
        factor: "factor",
        leapYear: "leapYear",
        allOf: "allOf",
        oneOf: "oneOf",
        noneOf: "noneOf",
        mac: "mac",
        ascii: "ascii",
        dataUri: "dataUri",
        port: "port",
        latLong: "latLong",
        extension: "extension",
        fileSize: "fileSize",
        endsWith: "endsWith",
        startsWith: "startsWith",
        primeNumber: "primeNumber",
        latitude: "latitude",
        longitude: "longitude",
        compose: "compose",
        rule: "rule",
        file: "file",
        image: "image",
        unique: "unique",
        notEmpty: "notEmpty",
        ip: "ip",
        cusip: "cusip",
        grid: "grid",
        date: 'date',
        and: 'and',
        or: 'or',
        not: 'not',
        minTime: 'minTime',
        maxTime: 'maxTime'
      };
      var PROPERTY = "property";
      var OBJECT_PROPERTY = "objectProperty";
      var ARRAY_PROPERTY = "arrayProperty";
      var STRING = "string";
      var MESSAGE = "message";
      var BLANK = "";
      var ELEMENT_VALUE = "value";
      var BLUR = "blur";
      var FOCUS = "focus";
      var CHANGE = "change";
      var INPUT = "INPUT";
      var SELECT = "SELECT";
      var CHECKBOX = "checkbox";
      var RADIO = "radio";
      var FILE = "file";
      var TEXTAREA = "textarea";
      var DECORATORS = {
        disabled: 'disabled',
        error: 'error',
        trim: 'trim',
        ltrim: 'ltrim',
        rtrim: 'rtrim',
        blacklist: 'blacklist',
        stripLow: 'stripLow',
        toBoolean: 'toBoolean',
        toDate: 'toDate',
        toDouble: 'toDouble',
        toFloat: 'toFloat',
        toInt: 'toInt',
        string: 'toString',
        whitelist: 'whitelist',
        escape: 'escape',
        prefix: 'prefix',
        suffix: 'suffix',
        sanitize: 'sanitize',
        elementClass: 'elementClass'
      };
      var defaultContainer = new ( /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this.instances = [];
          this.modelIncrementCount = 0;
        }
        /**
         * @template T
         * @param {?} instanceFunc
         * @return {?}
         */


        _createClass(_class, [{
          key: "get",
          value: function get(instanceFunc) {
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];
            return instance;
          }
          /**
           * @param {?} target
           * @param {?} parameterIndex
           * @param {?} propertyKey
           * @param {?} decoratorType
           * @return {?}
           */

        }, {
          key: "getInstance",
          value: function getInstance(target, parameterIndex, propertyKey, decoratorType) {
            var
            /** @type {?} */
            isPropertyKey = propertyKey != undefined;
            var
            /** @type {?} */
            instanceFunc = !isPropertyKey ? target : target.constructor;
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];
            if (!instance) instance = this.addInstanceContainer(instanceFunc);
            return instance;
          }
          /**
           * @param {?} target
           * @param {?} configs
           * @return {?}
           */

        }, {
          key: "addPropsConfig",
          value: function addPropsConfig(target, configs) {
            var _this2 = this;

            var
            /** @type {?} */
            instanceContainer = this.instances.filter(function (instance) {
              return instance.instance == target;
            })[0];

            if (instanceContainer) {
              var _iterator2 = _createForOfIteratorHelper(configs),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var config = _step2.value;

                  var _iterator3 = _createForOfIteratorHelper(config.propNames),
                      _step3;

                  try {
                    var _loop = function _loop() {
                      var prop = _step3.value;
                      var
                      /** @type {?} */
                      propertyInfo = instanceContainer.properties.filter(function (t) {
                        return t.name == prop && t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY;
                      })[0];

                      if (propertyInfo) {
                        _this2.addPropConfig(target, [propertyInfo], config);
                      } else if (prop === ":all:") _this2.addPropConfig(target, instanceContainer.properties.filter(function (t) {
                        return t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY;
                      }), config);
                    };

                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else if (configs === undefined) this.addInstanceContainer(target);
          }
          /**
           * @param {?} target
           * @param {?} properties
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "addPropConfig",
          value: function addPropConfig(target, properties, config) {
            var _iterator4 = _createForOfIteratorHelper(properties),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var propertyInfo = _step4.value;
                var
                /** @type {?} */
                excludeProp = false;
                if (config.excludePropNames) excludeProp = config.excludePropNames.filter(function (t) {
                  return t == propertyInfo.name;
                })[0] !== undefined;

                if (!excludeProp) {
                  if (config.validationConfig) for (var
                  /** @type {?} */
                  typeName in config.validationConfig) {
                    this.init({
                      constructor: target
                    }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
                  }
                  if (config.error) this.addDecoratorConfig({
                    constructor: target
                  }, 0, propertyInfo.name, config.error, DECORATORS.error);
                  if (config.disable) this.addDecoratorConfig({
                    constructor: target
                  }, 0, propertyInfo.name, config.disable, DECORATORS.disable);
                  if (config.elementClass) this.addDecoratorConfig({
                    constructor: target
                  }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
                  if (config.ignore) propertyInfo.ignore = config.ignore;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          /**
           * @param {?} target
           * @param {?} parameterIndex
           * @param {?} propertyKey
           * @param {?} decoratorType
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "addSanitizer",
          value: function addSanitizer(target, parameterIndex, propertyKey, decoratorType, value) {
            var
            /** @type {?} */
            instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);

            if (instance) {
              if (!instance.sanitizers[propertyKey]) instance.sanitizers[propertyKey] = [];
              instance.sanitizers[propertyKey].push({
                name: decoratorType,
                config: value
              });
            }
          }
          /**
           * @param {?} target
           * @param {?} parameterIndex
           * @param {?} propertyKey
           * @param {?} config
           * @param {?} decoratorType
           * @return {?}
           */

        }, {
          key: "addDecoratorConfig",
          value: function addDecoratorConfig(target, parameterIndex, propertyKey, config, decoratorType) {
            var
            /** @type {?} */
            isPropertyKey = propertyKey != undefined;
            var
            /** @type {?} */
            instanceFunc = !isPropertyKey ? target : target.constructor;
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];
            if (!instance) instance = this.addInstanceContainer(instanceFunc);
            instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
            var
            /** @type {?} */
            columns = Linq.expressionColumns(config.conditionalExpression, true);
            columns.forEach(function (column) {
              if (column.argumentIndex !== -1) {
                var
                /** @type {?} */
                columnName = !column.objectPropName ? "".concat(column.propName).concat(RXCODE).concat(column.argumentIndex) : "".concat(column.objectPropName, ".").concat(column.propName).concat(RXCODE).concat(column.argumentIndex);
                if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName]) instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
                var
                /** @type {?} */
                disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
                if (disabledColumns.indexOf(columnName) === -1) disabledColumns.push(propertyKey);
              } else {
                if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey]) instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
                instance.nonValidationDecorators[decoratorType].controlProp[propertyKey][column.propName.replace(";", "")] = true;
              }
            });
          }
          /**
           * @param {?} target
           * @param {?} parameterIndex
           * @param {?} propertyKey
           * @param {?} annotationType
           * @param {?} config
           * @param {?} isAsync
           * @return {?}
           */

        }, {
          key: "init",
          value: function init(target, parameterIndex, propertyKey, annotationType, config, isAsync) {
            var
            /** @type {?} */
            decoratorConfiguration = {
              propertyIndex: parameterIndex,
              propertyName: propertyKey,
              annotationType: annotationType,
              config: config,
              isAsync: isAsync
            };
            var
            /** @type {?} */
            isPropertyKey = propertyKey != undefined;
            this.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
          }
          /**
           * @param {?} name
           * @param {?} propertyType
           * @param {?} entity
           * @param {?} target
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "initPropertyObject",
          value: function initPropertyObject(name, propertyType, entity, target, config) {
            var
            /** @type {?} */
            propertyInfo = {
              name: name,
              propertyType: propertyType,
              entity: entity,
              dataPropertyName: config ? config.name : undefined,
              entityProvider: config ? config.entityProvider : undefined
            };
            defaultContainer.addProperty(target.constructor, propertyInfo);
          }
          /**
           * @param {?} instanceFunc
           * @return {?}
           */

        }, {
          key: "addInstanceContainer",
          value: function addInstanceContainer(instanceFunc) {
            var
            /** @type {?} */
            instanceContainer = {
              instance: instanceFunc,
              propertyAnnotations: [],
              properties: [],
              nonValidationDecorators: {
                disabled: {
                  conditionalExpressions: {},
                  changeDetection: {},
                  controlProp: {}
                },
                error: {
                  conditionalExpressions: {},
                  changeDetection: {},
                  controlProp: {}
                },
                elementClass: {
                  conditionalExpressions: {},
                  changeDetection: {},
                  controlProp: {}
                }
              },
              sanitizers: {}
            };
            this.instances.push(instanceContainer);
            return instanceContainer;
          }
          /**
           * @param {?} instanceFunc
           * @param {?} propertyInfo
           * @param {?=} isFromAnnotation
           * @return {?}
           */

        }, {
          key: "addProperty",
          value: function addProperty(instanceFunc, propertyInfo) {
            var isFromAnnotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];

            if (instance) {
              this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
            } else {
              instance = this.addInstanceContainer(instanceFunc);
              this.addPropertyInfo(instance, propertyInfo);
            }
          }
          /**
           * @param {?} instance
           * @param {?} propertyInfo
           * @param {?=} isAddProperty
           * @return {?}
           */

        }, {
          key: "addPropertyInfo",
          value: function addPropertyInfo(instance, propertyInfo) {
            var isAddProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var
            /** @type {?} */
            property = this.getProperty(instance, propertyInfo);
            if (!property) instance.properties.push(propertyInfo);else if (isAddProperty) this.updateProperty(property, propertyInfo);
          }
          /**
           * @param {?} instanceFunc
           * @param {?} decoratorConfiguration
           * @return {?}
           */

        }, {
          key: "addAnnotation",
          value: function addAnnotation(instanceFunc, decoratorConfiguration) {
            this.addProperty(instanceFunc, {
              propertyType: PROPERTY,
              name: decoratorConfiguration.propertyName
            }, true);
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];
            if (instance) instance.propertyAnnotations.push(decoratorConfiguration);else {
              instance = this.addInstanceContainer(instanceFunc);
              instance.propertyAnnotations.push(decoratorConfiguration);
            }

            if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
              var
              /** @type {?} */
              columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
              this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
            }

            if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
              var
              /** @type {?} */
              _columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);

              this.addChangeValidation(instance, decoratorConfiguration.propertyName, _columns);
            }

            this.setConditionalColumns(instance, decoratorConfiguration);
          }
          /**
           * @param {?} instance
           * @param {?} decoratorConfiguration
           * @return {?}
           */

        }, {
          key: "setConditionalColumns",
          value: function setConditionalColumns(instance, decoratorConfiguration) {
            var _this3 = this;

            if (instance && decoratorConfiguration.config) {
              if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
                Object.keys(decoratorConfiguration.config.validation).forEach(function (t) {
                  if (typeof decoratorConfiguration.config.validation[t] !== "boolean") _this3.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
                });
              } else this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
            }
          }
          /**
           * @param {?} instance
           * @param {?} annotationType
           * @param {?} fieldName
           * @param {?} propertyName
           * @return {?}
           */

        }, {
          key: "setLogicalConditional",
          value: function setLogicalConditional(instance, annotationType, fieldName, propertyName) {
            if (instance && (annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime || annotationType == AnnotationTypes.creditCard && fieldName || (annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName)) {
              this.setConditionalValueProp(instance, fieldName, propertyName);
            }
          }
          /**
           * @param {?} instance
           * @param {?} propName
           * @param {?} refPropName
           * @return {?}
           */

        }, {
          key: "setConditionalValueProp",
          value: function setConditionalValueProp(instance, propName, refPropName) {
            if (propName) {
              var
              /** @type {?} */
              splitProps = propName.split ? propName.split('.') : '';

              if (splitProps.length < 2) {
                if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
                if (!instance.conditionalValidationProps[propName]) instance.conditionalValidationProps[propName] = [];
                if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1) instance.conditionalValidationProps[propName].push(refPropName);
              } else this.addChangeValidation(instance, refPropName, [{
                argumentIndex: 1,
                objectPropName: splitProps[0],
                propName: splitProps[1],
                referencePropName: refPropName
              }]);
            }
          }
          /**
           * @param {?} instance
           * @param {?} propertyName
           * @param {?} columns
           * @return {?}
           */

        }, {
          key: "addChangeValidation",
          value: function addChangeValidation(instance, propertyName, columns) {
            if (instance) {
              if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
              columns.forEach(function (t) {
                if (t.propName && !t.objectPropName) {
                  if (!instance.conditionalValidationProps[t.propName]) instance.conditionalValidationProps[t.propName] = [];
                  if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1) instance.conditionalValidationProps[t.propName].push(propertyName);
                } else {
                  if (t.propName && t.objectPropName) {
                    if (!instance.conditionalObjectProps) instance.conditionalObjectProps = [];
                    t.referencePropName = propertyName;
                    instance.conditionalObjectProps.push(t);
                  }
                }
              });
            }
          }
          /**
           * @param {?} instanceFunc
           * @return {?}
           */

        }, {
          key: "clearInstance",
          value: function clearInstance(instanceFunc) {
            var
            /** @type {?} */
            instance = this.instances.filter(function (instance) {
              return instance.instance === instanceFunc;
            })[0];

            if (instance) {
              var
              /** @type {?} */
              indexOf = this.instances.indexOf(instance);
              this.instances.splice(indexOf, 1);
            }
          }
          /**
           * @param {?} instance
           * @param {?} propertyInfo
           * @return {?}
           */

        }, {
          key: "getProperty",
          value: function getProperty(instance, propertyInfo) {
            return instance.properties.filter(function (t) {
              return t.name == propertyInfo.name;
            })[0];
          }
          /**
           * @param {?} property
           * @param {?} currentProperty
           * @return {?}
           */

        }, {
          key: "updateProperty",
          value: function updateProperty(property, currentProperty) {
            property.dataPropertyName = currentProperty.dataPropertyName;
            property.defaultValue = currentProperty.defaultValue;
          }
        }]);

        return _class;
      }())();
      var RegExRule = {
        alpha: /^[a-zA-Z]+$/,
        alphaExits: /[a-zA-Z]/,
        alphaWithSpace: /^[a-zA-Z\s]+$/,
        macId: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
        onlyDigit: /^[0-9]+$/,
        isDigitExits: /[0-9]/,
        lowerCase: /[a-z]/,
        upperCase: /[A-Z]/,
        specialCharacter: /[!@#$%^&*(),.?":{}|<>]/,
        advancedEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        basicEmail: /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        alphaNumeric: /^[0-9a-zA-Z]+$/,
        alphaNumericWithSpace: /^[0-9a-zA-Z\s]+$/,
        hexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
        strictHexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
        "float": /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
        decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
        hexaDecimal: /^[0-9A-F]+$/i,
        date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
        timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
        url: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
        ascii: /^[\x00-\x7F]+$/,
        dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
        lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
        "long": /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
        ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
        ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
        cidrV4: /^(3[0-2]|[12]?[0-9])$/,
        cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        cusip: /^[0-9A-Z]{9}$/,
        grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
      };
      var ALPHABET = "alphabet";
      var DIGIT = "digit";
      var CONTAINS = "contains";
      var LOWERCASE = "lowerCase";
      var UPPERCASE = "upperCase";
      var SPECIAL_CHARACTER = "specialCharacter";
      var MIN_LENGTH = "minLength";
      var MAX_LENGTH = "maxLength";

      var RegexValidator = /*#__PURE__*/function () {
        function RegexValidator() {
          _classCallCheck(this, RegexValidator);
        }

        _createClass(RegexValidator, null, [{
          key: "isExits",

          /**
           * @param {?} value
           * @param {?} regex
           * @return {?}
           */
          value: function isExits(value, regex) {
            return value.match(regex) != null;
          }
          /**
           * @param {?} value
           * @param {?} regex
           * @return {?}
           */

        }, {
          key: "isValid",
          value: function isValid(value, regex) {
            return regex.test(value);
          }
          /**
           * @param {?} value
           * @param {?=} isRemoveSpace
           * @return {?}
           */

        }, {
          key: "isNotBlank",
          value: function isNotBlank(value) {
            var isRemoveSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return !isRemoveSpace ? value === 0 || value !== undefined && value !== null && value !== "" : value === 0 || value !== undefined && value !== null && String(value).trim() !== "";
          }
          /**
           * @param {?} passwordValidation
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isValidPassword",
          value: function isValidPassword(passwordValidation, value) {
            var
            /** @type {?} */
            isValid = false;
            var
            /** @type {?} */
            keyName = "status";
            var
            /** @type {?} */
            objectProperties = Object.getOwnPropertyNames(passwordValidation);

            var _iterator5 = _createForOfIteratorHelper(objectProperties),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var propertyName = _step5.value;

                switch (propertyName) {
                  case ALPHABET:
                    isValid = RegexValidator.isExits(value, RegExRule.alphaExits);
                    keyName = ALPHABET;
                    break;

                  case DIGIT:
                    isValid = RegexValidator.isValid(value, RegExRule.isDigitExits);
                    keyName = DIGIT;
                    break;

                  case CONTAINS:
                    isValid = value.indexOf(passwordValidation[CONTAINS]) != -1;
                    keyName = CONTAINS;
                    break;

                  case LOWERCASE:
                    isValid = RegexValidator.isValid(value, RegExRule.lowerCase);
                    keyName = LOWERCASE;
                    break;

                  case UPPERCASE:
                    isValid = RegexValidator.isValid(value, RegExRule.upperCase);
                    keyName = UPPERCASE;
                    break;

                  case SPECIAL_CHARACTER:
                    isValid = RegexValidator.isExits(value, RegExRule.specialCharacter);
                    keyName = SPECIAL_CHARACTER;
                    break;

                  case MIN_LENGTH:
                    isValid = value.length >= passwordValidation[propertyName];
                    keyName = MIN_LENGTH;
                    break;

                  case MAX_LENGTH:
                    isValid = value.length <= passwordValidation[propertyName];
                    keyName = MAX_LENGTH;
                    break;
                }

                if (!isValid) break;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return {
              isValid: isValid,
              keyName: keyName
            };
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isZero",
          value: function isZero(value) {
            return value == 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "commaRegex",
          value: function commaRegex() {
            return new RegExp(",", "g");
          }
        }]);

        return RegexValidator;
      }();

      var ReactiveFormConfig = /*#__PURE__*/function () {
        function ReactiveFormConfig() {
          _classCallCheck(this, ReactiveFormConfig);
        }

        _createClass(ReactiveFormConfig, null, [{
          key: "set",

          /**
           * @param {?} jObject
           * @return {?}
           */
          value: function set(jObject) {
            if (jObject) ReactiveFormConfig.json = jObject;
          }
          /**
           * @param {?} path
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(path) {
            var
            /** @type {?} */
            jObject;

            if (ReactiveFormConfig.json) {
              var
              /** @type {?} */
              splitPath = path.split('.');

              var _iterator6 = _createForOfIteratorHelper(splitPath),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var columnName = _step6.value;
                  jObject = !jObject ? ReactiveFormConfig.json[columnName] : jObject[columnName];
                  if (!jObject) break;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            return jObject;
          }
        }]);

        return ReactiveFormConfig;
      }();

      ReactiveFormConfig.number = {};
      ReactiveFormConfig.json = {};
      /**
       * @param {?} value
       * @return {?}
       */

      function isObjectType(value) {
        return !(typeof value == "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date);
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
      }
      /**
       * @param {?} jsonObject
       * @return {?}
       */


      function clone(jsonObject) {
        var
        /** @type {?} */
        jObject = {};

        if (isObjectType(jsonObject)) {
          for (var
          /** @type {?} */
          columnName in jsonObject) {
            if (Array.isArray(jsonObject[columnName])) {
              jObject[columnName] = [];

              var _iterator7 = _createForOfIteratorHelper(jsonObject[columnName]),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var row = _step7.value;
                  if (isObject(row)) jObject[columnName].push(clone(row));else jObject[columnName].push(row);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            } else if (typeof jsonObject[columnName] == "object") jObject[columnName] = clone(jsonObject[columnName]);else jObject[columnName] = jsonObject[columnName];
          }

          return jObject;
        } else return jsonObject;
      }
      /**
       * @param {?} firstObject
       * @param {?} secondObject
       * @return {?}
       */


      function merge(firstObject, secondObject) {
        for (var
        /** @type {?} */
        columnName in secondObject) {
          if (Array.isArray(secondObject[columnName])) {
            if (!firstObject[columnName]) firstObject[columnName] = [];

            var _iterator8 = _createForOfIteratorHelper(secondObject[columnName]),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var row = _step8.value;
                firstObject[columnName].push(clone(row));
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          } else if (typeof firstObject[columnName] == "object") firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);else firstObject[columnName] = secondObject[columnName];
        }

        return firstObject;
      }
      /**
       * @param {?} jsonObject
       * @param {?} compareObject
       * @return {?}
       */


      function isMatched(jsonObject, compareObject) {
        var
        /** @type {?} */
        isModified = false;

        for (var
        /** @type {?} */
        columnName in compareObject) {
          if (Array.isArray(jsonObject[columnName])) {
            for (var
            /** @type {?} */
            i = 0; i < jsonObject[columnName].length; i++) {
              isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
            }
          } else if (typeof jsonObject[columnName] == "object") isModified = isMatched(jsonObject[columnName], compareObject[columnName]);else isModified = !(jsonObject[columnName] == compareObject[columnName]);

          if (isModified) break;
        }

        return isModified;
      }

      var ObjectMaker = /*#__PURE__*/function () {
        function ObjectMaker() {
          _classCallCheck(this, ObjectMaker);
        }

        _createClass(ObjectMaker, null, [{
          key: "toJson",

          /**
           * @param {?} key
           * @param {?} config
           * @param {?} values
           * @return {?}
           */
          value: function toJson(key, config, values) {
            var
            /** @type {?} */
            message = config ? config.message : null;
            var
            /** @type {?} */
            messageKey = undefined;
            if (!message && config && config.messageKey) messageKey = config.messageKey;
            var
            /** @type {?} */
            messageText = message ? message : ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key] ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
            values.forEach(function (t, index) {
              messageText = messageText.replace("{{".concat(index, "}}"), t);
            });
            var
            /** @type {?} */
            jObject = {};
            jObject[key] = {
              message: messageText,
              refValues: values
            };
            return jObject;
          }
          /**
           * @return {?}
           */

        }, {
          key: "null",
          value: function _null() {
            return null;
          }
        }]);

        return ObjectMaker;
      }();

      var PROP_ARRAY = "propArray";

      var RxFormArray = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(RxFormArray, _angular_forms__WEBPA);

        var _super = _createSuper(RxFormArray);

        /**
         * @param {?} arrayObject
         * @param {?} controls
         * @param {?=} validatorOrOpts
         * @param {?=} asyncValidator
         * @param {?=} arrayConfig
         */
        function RxFormArray(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
          var _this4;

          _classCallCheck(this, RxFormArray);

          _this4 = _super.call(this, controls, validatorOrOpts, asyncValidator);
          _this4.arrayObject = arrayObject;
          _this4.arrayConfig = arrayConfig;
          _this4._isModified = false;
          _this4._modified = [];

          _this4.cloneObject(arrayObject);

          return _this4;
        }
        /**
         * @return {?}
         */


        _createClass(RxFormArray, [{
          key: "push",

          /**
           * @param {?} control
           * @return {?}
           */
          value: function push(control) {
            var
            /** @type {?} */
            formGroup = this.root;
            if (this.arrayObject) if (control.modelInstance) this.arrayObject.push(control.modelInstance);

            _get(_getPrototypeOf(RxFormArray.prototype), "push", this).call(this, control);

            if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
            this.patch();
            this.checkValidation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "patch",
          value: function patch() {
            this.checkModification();
            if (this.parent) this.parent[PATCH]();
          }
          /**
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "resetForm",
          value: function resetForm(options) {
            if (options && options.index >= 0 && options.groupOption) {
              /** @type {?} */
              this.controls[options.index].resetForm(options.groupOption);
            } else {
              for (var
              /** @type {?} */
              i = 0; i < this._baseValue.length; i++) {
                if (this.controls[i] !== undefined)
                /** @type {?} */
                this.controls[i].resetForm({
                  value: this._baseValue[i]
                });else if (options && options.pushFunction) {
                  var
                  /** @type {?} */
                  formGroup = options.pushFunction(this._baseValue[i]);
                  this.push(formGroup);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "commit",
          value: function commit() {
            this._baseValue = [];

            var _iterator9 = _createForOfIteratorHelper(this.controls),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var formGroup = _step9.value;

                /** @type {?} */
                formGroup.commit();

                this._baseValue.push(clone(formGroup.value));
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            this.patch();
          }
          /**
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            var
            /** @type {?} */
            formGroup = this.root;
            this.arrayObject.splice(index, 1);

            _get(_getPrototypeOf(RxFormArray.prototype), "removeAt", this).call(this, index);

            if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
            this.patch();
            this.checkValidation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "checkValidation",
          value: function checkValidation() {
            var _this5 = this;

            setTimeout(function () {
              if (_this5.arrayConfig != undefined && _this5.arrayConfig.allowMaxIndex && _this5.length > _this5.arrayConfig.allowMaxIndex) _this5.setErrors(ObjectMaker.toJson(PROP_ARRAY, _this5.arrayConfig, [_this5.length, _this5.arrayConfig.allowMaxIndex]));else if (_this5.errors && _this5.errors[PROP_ARRAY]) delete _this5.errors[PROP_ARRAY];
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "checkModification",
          value: function checkModification() {
            this._isModified = !(this._baseValue.length == this.controls.length);
            if (!this._isModified) for (var
            /** @type {?} */
            i = 0; i < this.controls.length; i++) {
              this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
              if (this._isModified) break;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cloneObject",
          value: function cloneObject(value) {
            this._baseValue = [];

            var _iterator10 = _createForOfIteratorHelper(value),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var row = _step10.value;

                this._baseValue.push(clone(row));
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }, {
          key: "isModified",
          get: function get() {
            return this._isModified;
          }
        }]);

        return RxFormArray;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]);

      var NumericValueType = {};
      NumericValueType.PositiveNumber = 1;
      NumericValueType.NegativeNumber = 2;
      NumericValueType.Both = 3;
      NumericValueType[NumericValueType.PositiveNumber] = "PositiveNumber";
      NumericValueType[NumericValueType.NegativeNumber] = "NegativeNumber";
      NumericValueType[NumericValueType.Both] = "Both";
      var IpVersion = {};
      IpVersion.V4 = 1;
      IpVersion.V6 = 2;
      IpVersion.AnyOne = 3;
      IpVersion[IpVersion.V4] = "V4";
      IpVersion[IpVersion.V6] = "V6";
      IpVersion[IpVersion.AnyOne] = "AnyOne";
      var ErrorMessageBindingStrategy = {};
      ErrorMessageBindingStrategy.None = 0;
      ErrorMessageBindingStrategy.OnSubmit = 1;
      ErrorMessageBindingStrategy.OnDirty = 2;
      ErrorMessageBindingStrategy.OnTouched = 3;
      ErrorMessageBindingStrategy.OnDirtyOrTouched = 4;
      ErrorMessageBindingStrategy.OnDirtyOrSubmit = 5;
      ErrorMessageBindingStrategy.OnTouchedOrSubmit = 6;
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.None] = "None";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnSubmit] = "OnSubmit";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnDirty] = "OnDirty";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnTouched] = "OnTouched";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnDirtyOrTouched] = "OnDirtyOrTouched";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnDirtyOrSubmit] = "OnDirtyOrSubmit";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy.OnTouchedOrSubmit] = "OnTouchedOrSubmit";
      var ResetFormType = {};
      ResetFormType.ControlsOnly = 1;
      ResetFormType.FormGroupsOnly = 2;
      ResetFormType.FormArraysOnly = 3;
      ResetFormType.ControlsAndFormGroupsOnly = 4;
      ResetFormType.DefinedPropsOnly = 5;
      ResetFormType.All = 6;
      ResetFormType[ResetFormType.ControlsOnly] = "ControlsOnly";
      ResetFormType[ResetFormType.FormGroupsOnly] = "FormGroupsOnly";
      ResetFormType[ResetFormType.FormArraysOnly] = "FormArraysOnly";
      ResetFormType[ResetFormType.ControlsAndFormGroupsOnly] = "ControlsAndFormGroupsOnly";
      ResetFormType[ResetFormType.DefinedPropsOnly] = "DefinedPropsOnly";
      ResetFormType[ResetFormType.All] = "All";
      var MODEL_INSTANCE_VALUE = "modelInstanceValue";

      var ApplicationUtil = /*#__PURE__*/function () {
        function ApplicationUtil() {
          _classCallCheck(this, ApplicationUtil);
        }

        _createClass(ApplicationUtil, null, [{
          key: "getParentObjectValue",

          /**
           * @param {?} control
           * @return {?}
           */
          value: function getParentObjectValue(control) {
            if (control.parent) {
              var
              /** @type {?} */
              parent = this.parentObjectValue(control.parent);
              return parent.value;
            }

            return {};
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getParentModelInstanceValue",
          value: function getParentModelInstanceValue(control) {
            if (control.parent) {
              var
              /** @type {?} */
              parent = this.parentObjectValue(control.parent);
              return parent[MODEL_INSTANCE_VALUE];
            }

            return {};
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getRootFormGroup",
          value: function getRootFormGroup(control) {
            if (control.parent) {
              return this.getRootFormGroup(control.parent);
            }

            return (
              /** @type {?} */
              control
            );
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getParentControl",
          value: function getParentControl(control) {
            if (control.parent) {
              var
              /** @type {?} */
              parent = this.parentObjectValue(control.parent);
              return parent;
            }

            return control;
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getFormControlName",
          value: function getFormControlName(control) {
            var
            /** @type {?} */
            controlName = '';

            if (control.parent) {
              for (var
              /** @type {?} */
              formControlName in control.parent.controls) {
                if (control.parent.controls[formControlName] == control) {
                  controlName = formControlName;
                  break;
                }
              }
            }

            return controlName;
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getParentFormArray",
          value: function getParentFormArray(control) {
            if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || control.parent instanceof RxFormArray)) {
              var
              /** @type {?} */
              parent = this.getParentFormArray(control.parent);
              return parent;
            }

            return control.parent;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "toLower",
          value: function toLower(value) {
            if (value) return String(value).toLowerCase();
            return value;
          }
          /**
           * @param {?} fieldName
           * @param {?} formGroup
           * @return {?}
           */

        }, {
          key: "getControl",
          value: function getControl(fieldName, formGroup) {
            var
            /** @type {?} */
            splitText = fieldName.split('.');

            if (splitText.length > 1) {
              var
              /** @type {?} */
              formControl = formGroup;
              splitText.forEach(function (name, index) {
                formControl = formControl.controls[name];
              });
              return formControl;
            } else return formGroup.controls[fieldName];
          }
          /**
           * @param {?} fieldName
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getFormControl",
          value: function getFormControl(fieldName, control) {
            var
            /** @type {?} */
            splitText = fieldName.split('.');

            if (splitText.length > 1 && control.parent) {
              var
              /** @type {?} */
              formControl = this.getParentControl(control);
              splitText.forEach(function (name, index) {
                formControl = formControl.controls[name];
              });
              return formControl;
            }

            return control.parent ? control.parent.get([fieldName]) : undefined;
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "parentObjectValue",
          value: function parentObjectValue(control) {
            if (!control.parent) return control;else control = this.parentObjectValue(control.parent);
            return control;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isNumeric",
          value: function isNumeric(value) {
            return value - parseFloat(value) + 1 >= 0;
          }
          /**
           * @param {?} primaryValue
           * @param {?} secondaryValue
           * @return {?}
           */

        }, {
          key: "notEqualTo",
          value: function notEqualTo(primaryValue, secondaryValue) {
            var
            /** @type {?} */
            firstValue = primaryValue === undefined || primaryValue === null ? "" : primaryValue;
            var
            /** @type {?} */
            secondValue = secondaryValue === undefined || secondaryValue === null ? "" : secondaryValue;
            if (firstValue instanceof Date && secondValue instanceof Date) return +firstValue != +secondValue;
            return firstValue != secondValue;
          }
          /**
           * @param {?} allowDecimal
           * @param {?} acceptValue
           * @return {?}
           */

        }, {
          key: "numericValidation",
          value: function numericValidation(allowDecimal, acceptValue) {
            var
            /** @type {?} */
            decimalSymbol;

            if (ReactiveFormConfig && ReactiveFormConfig.number) {
              decimalSymbol = ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
            } else {
              decimalSymbol = ".";
            }

            acceptValue = acceptValue == undefined ? NumericValueType.PositiveNumber : acceptValue;
            var
            /** @type {?} */
            regex = /^[0-9]+$/;

            switch (acceptValue) {
              case NumericValueType.PositiveNumber:
                regex = !allowDecimal ? /^[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
                break;

              case NumericValueType.NegativeNumber:
                regex = !allowDecimal ? /^[-][0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
                break;

              case NumericValueType.Both:
                regex = !allowDecimal ? /^[-|+]?[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
                break;
            }

            return regex;
          }
          /**
           * @param {?} control
           * @param {?} config
           * @param {?} type
           * @return {?}
           */

        }, {
          key: "configureControl",
          value: function configureControl(control, config, type) {
            if (!control.validatorConfig) {
              var
              /** @type {?} */
              jObject = {};
              jObject[type] = config;
              Object.assign(control, {
                validatorConfig: jObject
              });
            } else control.validatorConfig[type] = config;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "lowerCaseWithTrim",
          value: function lowerCaseWithTrim(value) {
            return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
          }
          /**
           * Check if a value is an object
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isObject",
          value: function isObject(value) {
            return Object.prototype.toString.call(value) === '[object Object]';
          }
          /**
           * Check if a value is an object
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isArray",
          value: function isArray(value) {
            return Array.isArray(value);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cloneValue",
          value: function cloneValue(value) {
            return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? _toConsumableArray(value) : Object.assign({}, value) : value;
          }
        }]);

        return ApplicationUtil;
      }();

      var ISO_DATE_REGEX = /^(\d{4}-\d{1,2}-\d{1,2})$/;

      var DateProvider = /*#__PURE__*/function () {
        function DateProvider() {
          _classCallCheck(this, DateProvider);
        }

        _createClass(DateProvider, [{
          key: "isDate",

          /**
           * @param {?} value
           * @return {?}
           */
          value: function isDate(value) {
            return value instanceof Date && !isNaN(value.valueOf());
          }
          /**
           * @param {?} dateFormat
           * @return {?}
           */

        }, {
          key: "getRegex",
          value: function getRegex(dateFormat) {
            var
            /** @type {?} */
            regExp;

            switch (dateFormat) {
              case 'ymd':
                regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
                break;

              case 'dmy':
                regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;

              case 'mdy':
                regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
            }

            return new RegExp(regExp);
          }
          /**
           * @return {?}
           */

        }, {
          key: "regex",
          value: function regex() {
            var
            /** @type {?} */
            regExp;
            if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) regExp = this.getRegex(ReactiveFormConfig.json.internationalization.dateFormat);else regExp = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? this.getRegex(ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex("mdy");
            return regExp;
          }
          /**
           * @param {?} value
           * @param {?=} isBaseFormat
           * @return {?}
           */

        }, {
          key: "getDate",
          value: function getDate(value) {
            var isBaseFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var
            /** @type {?} */
            year,
            /** @type {?} */
            month,
            /** @type {?} */
            day;

            if (!this.isDate(value)) {
              var
              /** @type {?} */
              seperator;
              var
              /** @type {?} */
              dateFormat;

              if (ISO_DATE_REGEX.test(
              /** @type {?} */
              value)) {
                seperator = "-";
                dateFormat = "ymd";
              } else {
                seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
                dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
              }

              if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
                seperator = ReactiveFormConfig.json.internationalization.seperator;
                dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
              }

              switch (dateFormat) {
                case 'ymd':
                  var _value$split$map =
                  /** @type {?} */
                  value.split(seperator).map(function (val) {
                    return +val;
                  });

                  var _value$split$map2 = _slicedToArray(_value$split$map, 3);

                  year = _value$split$map2[0];
                  month = _value$split$map2[1];
                  day = _value$split$map2[2];
                  break;

                case 'dmy':
                  var _value$split$map3 =
                  /** @type {?} */
                  value.split(seperator).map(function (val) {
                    return +val;
                  });

                  var _value$split$map4 = _slicedToArray(_value$split$map3, 3);

                  day = _value$split$map4[0];
                  month = _value$split$map4[1];
                  year = _value$split$map4[2];
                  break;

                case 'mdy':
                  var _value$split$map5 =
                  /** @type {?} */
                  value.split(seperator).map(function (val) {
                    return +val;
                  });

                  var _value$split$map6 = _slicedToArray(_value$split$map5, 3);

                  month = _value$split$map6[0];
                  day = _value$split$map6[1];
                  year = _value$split$map6[2];
                  break;
              }

              return new Date(year, month - 1, day);
            } else return (
              /** @type {?} */
              value
            );
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isValid",
          value: function isValid(value) {
            if (typeof value == "string") {
              if (ISO_DATE_REGEX.test(
              /** @type {?} */
              value)) return true;
              var
              /** @type {?} */
              seperator = '/';
              if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator) seperator = ReactiveFormConfig.json.internationalization.seperator;
              value = value.replace(seperator, '-').replace(seperator, '-');
              return this.regex().test(value);
            } else return this.isDate(value);
          }
          /**
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "getConfigDateValue",
          value: function getConfigDateValue(config) {
            var
            /** @type {?} */
            date = config.value;

            if (config.value && typeof config.value == "string") {
              date = this.getDate(config.value, true);
            }

            return date;
          }
          /**
           * @param {?} config
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "getCompareDate",
          value: function getCompareDate(config, control) {
            var
            /** @type {?} */
            date = this.getConfigDateValue(config);

            if (config.fieldName) {
              var
              /** @type {?} */
              checkControl = ApplicationUtil.getFormControl(config.fieldName, control);

              if (checkControl && checkControl.value) {
                date = this.getDate(checkControl.value);
              }
            }

            return date;
          }
        }]);

        return DateProvider;
      }();
      /**
       * @param {?} value
       * @return {?}
       */


      function isNotBlank(value) {
        return value !== undefined && value !== null && value !== "";
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function trim(value) {
        if (isNotBlank(value)) if (typeof value === "string") return value.trim();
        return value;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function ltrim(value) {
        if (isNotBlank(value)) if (typeof value === "string") return value.replace(/^\s+/g, '');
        return value;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function rtrim(value) {
        if (isNotBlank(value)) if (typeof value === "string") return value.replace(/\s+$/g, '');
        return value;
      }
      /**
       * @param {?} value
       * @param {?} chars
       * @return {?}
       */


      function blacklist(value, chars) {
        if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
        return value;
      }
      /**
       * @param {?} value
       * @param {?} keepNewLines
       * @return {?}
       */


      function stripLow(value, keepNewLines) {
        var
        /** @type {?} */
        chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
        return blacklist(value, chars);
      }
      /**
       * @param {?} value
       * @param {?} strict
       * @return {?}
       */


      function toBoolean(value, strict) {
        if (isNotBlank(value)) {
          if (strict) {
            return value === '1' || value === 'true';
          }

          return value !== '0' && value !== 'false' && value !== '';
        }

        return value;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function toFloat(value) {
        if (isNotBlank(value)) if (ApplicationUtil.isNumeric(value)) return parseFloat(value);
        return null;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function toDouble(value) {
        return toFloat(value);
      }
      /**
       * @param {?} value
       * @param {?} radix
       * @return {?}
       */


      function toInt(value, radix) {
        if (isNotBlank(value)) if (ApplicationUtil.isNumeric(value)) return parseInt(value, radix || 10);
        return null;
      }
      /**
       * @param {?} value
       * @param {?} radix
       * @return {?}
       */


      function toString(value, radix) {
        if (isNotBlank(value)) return String(value);
        return value;
      }
      /**
       * @param {?} value
       * @param {?} chars
       * @return {?}
       */


      function whitelist(value, chars) {
        if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
        return value;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function toDate(value) {
        var
        /** @type {?} */
        dateProvider = new DateProvider();
        if (isNotBlank(value)) if (typeof value === "string" && dateProvider.isValid(value)) {
          value = dateProvider.getDate(value);
          return value;
        }
        return null;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function escape(value) {
        if (isNotBlank(value)) return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
        return value;
      }
      /**
       * @param {?} value
       * @param {?} text
       * @return {?}
       */


      function prefix(value, text) {
        if (isNotBlank(value)) return "".concat(text).concat(value);
        return value;
      }
      /**
       * @param {?} value
       * @param {?} text
       * @return {?}
       */


      function suffix(value, text) {
        if (isNotBlank(value)) return "".concat(value).concat(text);
        return value;
      }
      /**
       * @param {?} value
       * @param {?} config
       * @return {?}
       */


      function sanitize(value, config) {
        return config.custom(value);
      }

      var SANITIZERS = {
        trim: trim,
        ltrim: ltrim,
        rtrim: rtrim,
        blacklist: blacklist,
        stripLow: stripLow,
        toBoolean: toBoolean,
        toDouble: toDouble,
        toFloat: toFloat,
        toInt: toInt,
        'toString': toString,
        whitelist: whitelist,
        toDate: toDate,
        escape: escape,
        prefix: prefix,
        suffix: suffix,
        sanitize: sanitize
      };
      /**
       * @param {?} instanceFunc
       * @param {?=} entityObject
       * @return {?}
       */

      function instanceProvider(instanceFunc, entityObject) {
        var
        /** @type {?} */
        instance = defaultContainer.get(instanceFunc);
        var
        /** @type {?} */
        prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;

        if (prototype.__proto__) {
          var
          /** @type {?} */
          isLoop = false;

          do {
            isLoop = prototype.__proto__.constructor != Object;

            if (isLoop) {
              var
              /** @type {?} */
              extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
              instance = merge(clone(instance), clone(extendClassInstance));
              prototype = prototype.__proto__;
            }
          } while (isLoop);
        }

        return instance;
      }
      /**
       * @param {?} model
       * @param {?} objectArguments
       * @return {?}
       */


      function getInstance(model, objectArguments) {
        var
        /** @type {?} */
        classInstance = Object.create(model.prototype);

        try {
          model.apply(classInstance, objectArguments);
        } catch (
        /** @type {?} */
        ex) {
          ///resolution of issue https://github.com/rxweb/rxweb/issues/188
          classInstance = Reflect.construct(model, objectArguments);
        }

        return classInstance;
      }

      var BaseFormBuilder = /*#__PURE__*/function () {
        function BaseFormBuilder() {
          _classCallCheck(this, BaseFormBuilder);
        }
        /**
         * @return {?}
         */


        _createClass(BaseFormBuilder, [{
          key: "createInstance",
          value: function createInstance() {
            var
            /** @type {?} */
            instance = {};
            defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
            var
            /** @type {?} */
            modelName = "RxWebModel".concat(defaultContainer.modelIncrementCount);
            instance.constructor = Function("\"use strict\";return(function ".concat(modelName, "(){ })"))();
            return instance;
          }
          /**
           * @param {?} model
           * @param {?} formBuilderConfiguration
           * @param {?=} classInstance
           * @return {?}
           */

        }, {
          key: "createClassObject",
          value: function createClassObject(model, formBuilderConfiguration, classInstance) {
            var _this6 = this;

            var
            /** @type {?} */
            instanceContainer = defaultContainer.get(model);
            var
            /** @type {?} */
            autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;

            if (!autoInstanceConfig) {
              return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
            } else {
              classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);

              if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
                autoInstanceConfig.objectPropInstanceConfig.forEach(function (t) {
                  var
                  /** @type {?} */
                  objectProperty = instanceContainer.properties.filter(function (property) {
                    return property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY;
                  })[0];

                  if (objectProperty) {
                    var
                    /** @type {?} */
                    data = classInstance[t.propertyName];
                    classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
                    if (data) _this6.setObjectValue(data, classInstance[t.propertyName]);
                  }
                });
              }

              if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
                autoInstanceConfig.arrayPropInstanceConfig.forEach(function (t) {
                  var
                  /** @type {?} */
                  property = instanceContainer.properties.filter(function (property) {
                    return property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY;
                  })[0];

                  if (property) {
                    var
                    /** @type {?} */
                    data = classInstance[t.propertyName];
                    classInstance[t.propertyName] = [];

                    for (var
                    /** @type {?} */
                    i = 0; i < t.rowItems; i++) {
                      var
                      /** @type {?} */
                      instance = getInstance(property.entity, t.arguments || []);
                      if (data && data[i]) _this6.setObjectValue(data[i], instance);
                      classInstance[t.propertyName].push(instance);
                    }
                  }
                });
              }

              return classInstance;
            }
          }
          /**
           * @param {?} model
           * @param {?} entityObject
           * @param {?} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "updateObject",
          value: function updateObject(model, entityObject, formBuilderConfiguration) {
            var _this7 = this;

            var
            /** @type {?} */
            instanceContainer = instanceProvider(model);
            var
            /** @type {?} */
            classInstance = getInstance(model, []);

            if (instanceContainer) {
              instanceContainer.properties.forEach(function (t) {
                var
                /** @type {?} */
                entity = (t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity ? t.entity : formBuilderConfiguration && formBuilderConfiguration.genericEntities ? formBuilderConfiguration.genericEntities[t.name] : undefined;
                if (!entity && t.entityProvider) entity = t.entityProvider.call(entityObject);

                switch (t.propertyType) {
                  case PROPERTY:
                    classInstance[t.name] = _this7.getValue(entityObject, t, formBuilderConfiguration);
                    break;

                  case OBJECT_PROPERTY:
                    var
                    /** @type {?} */
                    objectValue = _this7.getValue(entityObject, t, formBuilderConfiguration);

                    if (objectValue) classInstance[t.name] = _this7.updateObject(entity, objectValue, formBuilderConfiguration);
                    break;

                  case ARRAY_PROPERTY:
                    var
                    /** @type {?} */
                    arrayObjectValue = _this7.getValue(entityObject, t, formBuilderConfiguration);

                    if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
                      classInstance[t.name] = [];

                      var _iterator11 = _createForOfIteratorHelper(arrayObjectValue),
                          _step11;

                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var row = _step11.value;

                          var
                          /** @type {?} */
                          instanceObject = _this7.updateObject(entity, row, formBuilderConfiguration);

                          classInstance[t.name].push(instanceObject);
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    }

                    break;
                }
              });
            }

            return classInstance;
          }
          /**
           * @param {?} instanceFunc
           * @param {?} entityObject
           * @return {?}
           */

        }, {
          key: "instaceProvider",
          value: function instaceProvider(instanceFunc, entityObject) {
            return instanceProvider(instanceFunc, entityObject);
          }
          /**
           * @param {?} propertyInfo
           * @param {?} value
           * @param {?} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "getDefaultValue",
          value: function getDefaultValue(propertyInfo, value, formBuilderConfiguration) {
            var
            /** @type {?} */
            defaultValue = formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value) ? propertyInfo.defaultValue : value;
            return defaultValue;
          }
          /**
           * @param {?} instanceContainer
           * @param {?} propertyName
           * @param {?} value
           * @param {?} entityObject
           * @param {?} baseObject
           * @return {?}
           */

        }, {
          key: "sanitizeValue",
          value: function sanitizeValue(instanceContainer, propertyName, value, entityObject, baseObject) {
            if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
              var _iterator12 = _createForOfIteratorHelper(instanceContainer.sanitizers[propertyName]),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var sanitizer = _step12.value;
                  value = SANITIZERS[sanitizer.name](value, sanitizer.config);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }

            if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value) entityObject[propertyName] = value;
            if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value) baseObject[propertyName] = value;
            return value;
          }
          /**
           * @param {?} entityObject
           * @param {?} propertyInfo
           * @param {?} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "getValue",
          value: function getValue(entityObject, propertyInfo, formBuilderConfiguration) {
            var
            /** @type {?} */
            propValue = propertyInfo.dataPropertyName ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
            return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
          }
          /**
           * @param {?} entityObject
           * @param {?} classInstance
           * @return {?}
           */

        }, {
          key: "setObjectValue",
          value: function setObjectValue(entityObject, classInstance) {
            for (var
            /** @type {?} */
            column in entityObject) {
              classInstance[column] = entityObject[column];
            }
          }
        }]);

        return BaseFormBuilder;
      }();

      var FormBuilderConfiguration =
      /**
       * @param {?=} formBuilderConfiguration
       */
      function FormBuilderConfiguration(formBuilderConfiguration) {
        _classCallCheck(this, FormBuilderConfiguration);

        if (formBuilderConfiguration) for (var column in formBuilderConfiguration) {
          this[column] = formBuilderConfiguration[column];
        }
      };
      /**
       * @param {?} conditionalValidationProps
       * @return {?}
       */


      function conditionalChangeValidator(conditionalValidationProps) {
        var
        /** @type {?} */
        oldValue = undefined;

        var
        /** @type {?} */
        setTimeOut = function setTimeOut(control) {
          var
          /** @type {?} */
          timeOut = setTimeout(function (t) {
            clearTimeout(timeOut);
            control.updateValueAndValidity();
          }, 100);
        };

        return function (control) {
          var
          /** @type {?} */
          value = control.value;

          if (control.parent && oldValue != value) {
            var
            /** @type {?} */
            rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            var
            /** @type {?} */
            parentFormGroup = control.parent;
            oldValue = value;
            conditionalValidationProps.forEach(function (t) {
              if (t.indexOf("[]") != -1) {
                var
                /** @type {?} */
                splitText = t.split("[]");
                var
                /** @type {?} */
                formArray =
                /** @type {?} */
                rootFormGroup.get([splitText[0]]);
                if (formArray) formArray.controls.forEach(function (formGroup) {
                  var
                  /** @type {?} */
                  abstractControl = formGroup.get(splitText[1]);

                  if (abstractControl) {
                    setTimeOut(abstractControl);
                  }
                });
              } else {
                var
                /** @type {?} */
                _splitText = t.split('.');

                if (_splitText.length > 1) {
                  var
                  /** @type {?} */
                  control = null;
                  t.split('.').forEach(function (name, index) {
                    control = index == 0 ? rootFormGroup.controls[name] : control.controls[name];
                  });
                } else {
                  control = parentFormGroup.controls[t];
                }

                if (control) {
                  setTimeOut(control);
                }
              }
            });
          }

          return ObjectMaker["null"]();
        };
      }

      var DisableProvider = /*#__PURE__*/function () {
        /**
         * @param {?} decoratorType
         * @param {?} entityObject
         */
        function DisableProvider(decoratorType, entityObject) {
          _classCallCheck(this, DisableProvider);

          this.decoratorType = decoratorType;
          this.entityObject = entityObject;
        }
        /**
         * @param {?} currentFormGroup
         * @return {?}
         */


        _createClass(DisableProvider, [{
          key: "getFormGroupName",
          value: function getFormGroupName(currentFormGroup) {
            var
            /** @type {?} */
            keyName = '';
            if (currentFormGroup.parent) for (var _i2 = 0, _Object$keys = Object.keys(currentFormGroup.parent.controls); _i2 < _Object$keys.length; _i2++) {
              var
              /** @type {?} */
              controlName = _Object$keys[_i2];

              if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
                keyName = controlName;
                break;
              }
            }
            return keyName;
          }
          /**
           * @param {?} control
           * @param {?} columnName
           * @return {?}
           */

        }, {
          key: "zeroArgumentProcess",
          value: function zeroArgumentProcess(control, columnName) {
            var
            /** @type {?} */
            disabledColumns = [];
            this.getDisabledColumns(
            /** @type {?} */
            control.parent, "".concat(columnName).concat(RXCODE, "0"), false).forEach(function (t) {
              return disabledColumns.push(t);
            });
            var
            /** @type {?} */
            path = this.topControlPath(control, columnName);
            var
            /** @type {?} */
            splitPath = path.split(".");

            if (splitPath.length > 1) {
              var
              /** @type {?} */
              rootFormGroup = ApplicationUtil.getRootFormGroup(control);
              this.getDisabledColumns(rootFormGroup, "".concat(path).concat(RXCODE, "0"), true).forEach(function (t) {
                return disabledColumns.push(t);
              });
              var
              /** @type {?} */
              controlPath = '';

              for (var
              /** @type {?} */
              i = 0; i < splitPath.length - 2; i++) {
                var
                /** @type {?} */
                controlName = splitPath[i];
                controlPath = "".concat(path.replace("".concat(controlName, "."), '')).concat(RXCODE, "-0");

                if (rootFormGroup.controls[controlName]) {
                  this.getDisabledColumns(
                  /** @type {?} */
                  rootFormGroup.controls[controlName], controlPath, true, controlName).forEach(function (t) {
                    return disabledColumns.push(t);
                  });
                  rootFormGroup =
                  /** @type {?} */
                  rootFormGroup.controls[controlName];
                }
              }
            }

            return disabledColumns;
          }
          /**
           * @param {?} formGroup
           * @param {?} columnName
           * @param {?} isRoot
           * @param {?=} pathName
           * @return {?}
           */

        }, {
          key: "getDisabledColumns",
          value: function getDisabledColumns(formGroup, columnName, isRoot) {
            var pathName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

            if (formGroup[MODEL_INSTANCE]) {
              var
              /** @type {?} */
              instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
              return this.getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName);
            }

            return [];
          }
          /**
           * @param {?} instanceContainer
           * @param {?} columnName
           * @param {?} isRoot
           * @param {?=} pathName
           * @return {?}
           */

        }, {
          key: "getChangeDetectionColumns",
          value: function getChangeDetectionColumns(instanceContainer, columnName, isRoot) {
            var _this8 = this;

            var pathName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var
            /** @type {?} */
            conditionalDisableControls = [];
            var
            /** @type {?} */
            columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];

            if (columns) {
              columns.forEach(function (t) {
                conditionalDisableControls.push({
                  controlPath: pathName ? "".concat(pathName, ".").concat(t) : t,
                  conditionalExpression: instanceContainer.nonValidationDecorators[_this8.decoratorType].conditionalExpressions[t],
                  isRoot: isRoot
                });
              });
            }

            return conditionalDisableControls;
          }
          /**
           * @param {?} control
           * @param {?} columnName
           * @return {?}
           */

        }, {
          key: "topControlPath",
          value: function topControlPath(control, columnName) {
            if (control.parent) {
              var
              /** @type {?} */
              name = this.getFormGroupName(
              /** @type {?} */
              control.parent);

              if (name) {
                columnName = "".concat(name, ".").concat(columnName);
                return this.topControlPath(control.parent, columnName);
              }
            }

            return columnName;
          }
          /**
           * @param {?} formGroup
           * @param {?} columnName
           * @param {?=} path
           * @return {?}
           */

        }, {
          key: "childControlDisabledExpression",
          value: function childControlDisabledExpression(formGroup, columnName) {
            var _this9 = this;

            var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var
            /** @type {?} */
            disabledColumns = [];

            if (formGroup[MODEL_INSTANCE]) {
              var
              /** @type {?} */
              instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);

              if (instanceContainer) {
                this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(function (t) {
                  return disabledColumns.push(t);
                });
                var
                /** @type {?} */
                props = instanceContainer.properties.filter(function (t) {
                  return t.propertyType == OBJECT_PROPERTY;
                });
                props.forEach(function (t) {
                  if (formGroup.controls[t.name]) {
                    var
                    /** @type {?} */
                    columns = _this9.getDisabledColumns(
                    /** @type {?} */
                    formGroup.controls[t.name], columnName, true, path ? "".concat(path, ".").concat(t.name) : "".concat(t.name));

                    columns.forEach(function (x) {
                      return disabledColumns.push(x);
                    });

                    _this9.childControlDisabledExpression(
                    /** @type {?} */
                    formGroup.controls[t.name], columnName, path ? "".concat(path, ".").concat(t.name) : "".concat(t.name)).forEach(function (y) {
                      return disabledColumns.push(y);
                    });
                  }
                });
              }
            }

            return disabledColumns;
          }
          /**
           * @param {?} control
           * @param {?} columnName
           * @return {?}
           */

        }, {
          key: "oneArgumentProcess",
          value: function oneArgumentProcess(control, columnName) {
            var
            /** @type {?} */
            path = this.topControlPath(control, columnName);
            var
            /** @type {?} */
            rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            var
            /** @type {?} */
            childColumns = this.childControlDisabledExpression(rootFormGroup, path);
            return childColumns;
          }
        }]);

        return DisableProvider;
      }();

      var DIRTY = "dirty";
      var TOUCHED = "touched";
      var UNTOUCHED = "untouched";
      var PRISTINE = "pristine";
      var PENDING = "pending";

      var RxFormControl = /*#__PURE__*/function (_angular_forms__WEBPA2) {
        _inherits(RxFormControl, _angular_forms__WEBPA2);

        var _super2 = _createSuper(RxFormControl);

        /**
         * @param {?} formState
         * @param {?} validator
         * @param {?} asyncValidator
         * @param {?} entityObject
         * @param {?} baseObject
         * @param {?} controlName
         * @param {?} _sanitizers
         */
        function RxFormControl(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
          var _this10;

          _classCallCheck(this, RxFormControl);

          _this10 = _super2.call(this, formState, validator, asyncValidator);
          _this10.entityObject = entityObject;
          _this10.baseObject = baseObject;
          _this10._sanitizers = _sanitizers;
          _this10._errorMessages = [];
          _this10._childColumns = [];
          _this10._refDisableControls = [];
          _this10._refMessageControls = [];
          _this10._refClassNameControls = [];
          _this10._isPassedExpression = false;
          _this10._baseValue = formState === undefined ? null : _this10.getFormState(formState);
          _this10._isModified = false;
          _this10.keyName = controlName;
          _this10._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");
          return _this10;
        }
        /**
         * @return {?}
         */


        _createClass(RxFormControl, [{
          key: "getFormState",

          /**
           * @param {?} value
           * @return {?}
           */
          value: function getFormState(value) {
            var
            /** @type {?} */
            baseValue = value;

            if (Array.isArray(value)) {
              baseValue = [];
              value.forEach(function (t) {
                return baseValue.push(t);
              });
            }

            return baseValue;
          }
          /**
           * @return {?}
           */

        }, {
          key: "setValue",

          /**
           * @param {?} value
           * @param {?=} options
           * @return {?}
           */
          value: function setValue(value, options) {
            var
            /** @type {?} */
            parsedValue = this.getSanitizedValue(value);
            if (options && options.dirty) this.baseObject[this.keyName] = value;
            this.entityObject[this.keyName] = parsedValue;

            _get(_getPrototypeOf(RxFormControl.prototype), "setValue", this).call(this, value, options);

            this.bindError();
            this.bindClassName();
            this.executeExpressions();
            this.callPatch();

            if (options && !options.updateChanged && this.root[VALUE_CHANGED_SYNC]) {
              this.root[VALUE_CHANGED_SYNC]();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getControlValue",
          value: function getControlValue() {
            return this.getSanitizedValue(this.value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "bindError",
          value: function bindError() {
            if (this._messageExpression) this._isPassedExpression = this.executeExpression(this._messageExpression, this);
            this.setControlErrorMessages();
            this.errors = this.errors;
          }
          /**
           * @return {?}
           */

        }, {
          key: "bindClassName",
          value: function bindClassName() {
            if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
              var
              /** @type {?} */
              className = this.executeExpression(this._classNameExpression, this);
              var
              /** @type {?} */
              updateElement =
              /** @type {?} */
              this.updateOnElementClass;
              updateElement(className);
            }
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched(opts) {
            var
            /** @type {?} */
            currentState = this.touched;

            _get(_getPrototypeOf(RxFormControl.prototype), "markAsTouched", this).call(this, opts);

            if (currentState != this.touched) this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched(opts) {
            var
            /** @type {?} */
            currentState = this.untouched;

            _get(_getPrototypeOf(RxFormControl.prototype), "markAsUntouched", this).call(this, opts);

            if (currentState != this.untouched) this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty(opts) {
            var
            /** @type {?} */
            currentState = this.dirty;

            _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

            if (currentState != this.dirty) this.runControlPropChangeExpression([DIRTY]);
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine(opts) {
            var
            /** @type {?} */
            currentState = this.pristine;

            _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

            if (currentState != this.pristine) this.runControlPropChangeExpression([PRISTINE]);
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "markAsPending",
          value: function markAsPending(opts) {
            var
            /** @type {?} */
            currentState = this.pending;

            _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

            if (currentState != this.pending) this.runControlPropChangeExpression([PENDING]);
          }
          /**
           * @param {?} propNames
           * @return {?}
           */

        }, {
          key: "runControlPropChangeExpression",
          value: function runControlPropChangeExpression(propNames) {
            var _this11 = this;

            propNames.forEach(function (name) {
              if (_this11._controlProp && _this11._messageExpression && _this11._controlProp[name] || !_this11._messageExpression && _this11.checkErrorMessageStrategy()) _this11.bindError();
              if (_this11._classNameControlProp && _this11._classNameControlProp[name]) _this11.bindClassName();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "refresh",
          value: function refresh() {
            this.getMessageExpression(
            /** @type {?} */
            this.parent, this.keyName);
            this.bindConditionalControls(DECORATORS.disabled, "_refDisableControls");
            this.bindConditionalControls(DECORATORS.error, "_refMessageControls");
            this.bindConditionalControls(DECORATORS.elementClass, "_refClassNameControls");
            this.executeExpressions();
            this.bindError();
          }
          /**
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "reset",
          value: function reset(value) {
            if (value !== undefined) this.setValue(value);else this.setValue(this.getFormState(this._baseValue));
          }
          /**
           * @return {?}
           */

        }, {
          key: "commit",
          value: function commit() {
            this._baseValue = this.value;
            this.callPatch();
          }
          /**
           * @return {?}
           */

        }, {
          key: "callPatch",
          value: function callPatch() {
            this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
            if (this.parent && this.parent[PATCH]) this.parent[PATCH](this.keyName);
          }
          /**
           * @return {?}
           */

        }, {
          key: "checkErrorMessageStrategy",
          value: function checkErrorMessageStrategy() {
            var
            /** @type {?} */
            isBind = true;

            switch (this._errorMessageBindingStrategy) {
              case ErrorMessageBindingStrategy.OnSubmit:
                isBind =
                /** @type {?} */
                this.parent.submitted;
                break;

              case ErrorMessageBindingStrategy.OnDirty:
                isBind = this.dirty;
                break;

              case ErrorMessageBindingStrategy.OnTouched:
                isBind = this.touched;
                break;

              case ErrorMessageBindingStrategy.OnDirtyOrTouched:
                isBind = this.dirty || this.touched;
                break;

              case ErrorMessageBindingStrategy.OnDirtyOrSubmit:
                isBind = this.dirty ||
                /** @type {?} */
                this.parent.submitted;
                break;

              case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
                isBind = this.touched ||
                /** @type {?} */
                this.parent.submitted;
                break;

              default:
                isBind = true;
            }

            return isBind;
          }
          /**
           * @return {?}
           */

        }, {
          key: "executeExpressions",
          value: function executeExpressions() {
            this.processExpression("_refDisableControls", "disabled");
            this.processExpression("_refMessageControls", "bindError");
            this.processExpression("_refClassNameControls", "bindClassName");
          }
          /**
           * @param {?} formGroup
           * @param {?} keyName
           * @return {?}
           */

        }, {
          key: "getMessageExpression",
          value: function getMessageExpression(formGroup, keyName) {
            if (formGroup[MODEL_INSTANCE]) {
              var
              /** @type {?} */
              instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);

              if (instanceContainer) {
                this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
                this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
                this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
                this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
                if (this._classNameExpression) this.updateOnElementClass = true;
              }
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getSanitizedValue",
          value: function getSanitizedValue(value) {
            if (this._sanitizers) {
              var _iterator13 = _createForOfIteratorHelper(this._sanitizers),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var sanitizer = _step13.value;
                  value = SANITIZERS[sanitizer.name](value, sanitizer.config);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            return value;
          }
          /**
           * @param {?} decoratorType
           * @param {?} refName
           * @return {?}
           */

        }, {
          key: "bindConditionalControls",
          value: function bindConditionalControls(decoratorType, refName) {
            var _this12 = this;

            this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
            this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);

            this._disableProvider.oneArgumentProcess(this, "".concat(this.keyName).concat(RXCODE, "1")).forEach(function (t) {
              return _this12[refName].push(t);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "setControlErrorMessages",
          value: function setControlErrorMessages() {
            var _this13 = this;

            if (!this._messageExpression && this.checkErrorMessageStrategy() || this._isPassedExpression) {
              this._errorMessages = [];

              if (this.errors) {
                Object.keys(this.errors).forEach(function (t) {
                  _this13.parent[CONTROLS_ERROR][_this13.keyName] = _this13._errorMessage = _this13.getErrorMessage(_this13.errors, t);

                  if (!_this13._errorMessage) {
                    var
                    /** @type {?} */
                    errorObject = ObjectMaker.toJson(t, undefined, [_this13.errors[t][t]]);
                    _this13.parent[CONTROLS_ERROR][_this13.keyName] = _this13._errorMessage = _this13.getErrorMessage(errorObject, t);
                  }

                  _this13._errorMessages.push(_this13._errorMessage);
                });
              } else {
                this._errorMessage = undefined;
                this.parent[CONTROLS_ERROR][this.keyName] = undefined;
                delete this.parent[CONTROLS_ERROR][this.keyName];
              }
            } else {
              this._errorMessages = [];
              this._errorMessage = undefined;
            }
          }
          /**
           * @param {?} errorObject
           * @param {?} keyName
           * @return {?}
           */

        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(errorObject, keyName) {
            if (errorObject[keyName][MESSAGE]) return errorObject[keyName][MESSAGE];
            return;
          }
          /**
           * @param {?} propName
           * @param {?} operationType
           * @return {?}
           */

        }, {
          key: "processExpression",
          value: function processExpression(propName, operationType) {
            if (this[propName]) {
              var _iterator14 = _createForOfIteratorHelper(this[propName]),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var controlInfo = _step14.value;
                  var
                  /** @type {?} */
                  control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);

                  if (control) {
                    if (operationType == "disabled") {
                      var
                      /** @type {?} */
                      result = this.executeExpression(controlInfo.conditionalExpression, control);
                      if (result) control.disable();else control.enable();
                    } else if (operationType == "bindError") control.bindError();else if (operationType == "bindClassName") control.bindClassName();
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }
          /**
           * @param {?} expression
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "executeExpression",
          value: function executeExpression(expression, control) {
            return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getValue",
          value: function getValue(value) {
            return value !== undefined && value !== null && value !== "" ? value : "";
          }
        }, {
          key: "errors",
          get: function get() {
            return this._errors;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._errors = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "errorMessages",
          get: function get() {
            if (!this._messageExpression) {
              if (this._errorMessages.length == 0 && this.errors) this.setControlErrorMessages();
            } else if (this._messageExpression && !this._isPassedExpression) return [];

            if (!this.errors && this._errorMessages.length > 0) this.setControlErrorMessages();
            return this._errorMessages;
          }
          /**
           * @return {?}
           */

        }, {
          key: "errorMessage",
          get: function get() {
            if (!this._messageExpression) {
              if (this._errorMessage == undefined && this.errors) this.setControlErrorMessages();
            } else if (this._messageExpression && !this._isPassedExpression) return undefined;

            if (!this.errors && this._errorMessage) this.setControlErrorMessages();
            return this._errorMessage;
          }
        }, {
          key: "isModified",
          get: function get() {
            return this._isModified;
          }
        }]);

        return RxFormControl;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]);

      var OBJECT = "object";
      var BOOLEAN$1 = "boolean";

      var FormDataProvider = /*#__PURE__*/function () {
        function FormDataProvider() {
          _classCallCheck(this, FormDataProvider);
        }

        _createClass(FormDataProvider, [{
          key: "convertToFormData",

          /**
           * @param {?} jObject
           * @return {?}
           */
          value: function convertToFormData(jObject) {
            return this.convertFormData(jObject);
          }
          /**
           * @param {?} jObject
           * @param {?=} currentFormData
           * @param {?=} parentKey
           * @return {?}
           */

        }, {
          key: "convertFormData",
          value: function convertFormData(jObject, currentFormData, parentKey) {
            var _this14 = this;

            var
            /** @type {?} */
            formData = currentFormData || new FormData();
            var
            /** @type {?} */
            propName = '';

            for (var
            /** @type {?} */
            columnName in jObject) {
              propName = !parentKey ? columnName : "".concat(parentKey, "[").concat(columnName, "]");

              if (Array.isArray(jObject[columnName])) {
                jObject[columnName].forEach(function (row, index) {
                  propName = "".concat(columnName, "[").concat(index, "]");
                  if (typeof row === OBJECT) _this14.convertFormData(row, formData, propName);else _this14.nonObjectValueBind(row, formData, propName);
                });
              } else if (jObject[columnName] !== null && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
                this.convertFormData(jObject[columnName], formData, propName);
              } else {
                this.nonObjectValueBind(jObject[columnName], formData, propName);
              }
            }

            return formData;
          }
          /**
           * @param {?} value
           * @param {?} formData
           * @param {?} propName
           * @return {?}
           */

        }, {
          key: "nonObjectValueBind",
          value: function nonObjectValueBind(value, formData, propName) {
            if (typeof value === BOOLEAN$1) {
              formData.append(propName, +value ? '1' : '0');
            } else if (value instanceof FileList) {
              for (var
              /** @type {?} */
              i = 0; i < value.length; i++) {
                formData.append("".concat(propName, "[").concat(i, "]"), value.item(i));
              }
            } else {
              if (RegexValidator.isNotBlank(value)) formData.append(propName, value);
            }
          }
        }]);

        return FormDataProvider;
      }();
      /**
       * @param {?} controlName
       * @param {?} control
       * @param {?=} options
       * @return {?}
       */


      function isResetControl(controlName, control, options) {
        var
        /** @type {?} */
        isReset = true;

        if (options) {
          isReset = false;
          if (options.resetType) switch (options.resetType) {
            case ResetFormType.ControlsOnly:
              isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
              break;

            case ResetFormType.ControlsAndFormGroupsOnly:
              isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
              break;

            case ResetFormType.FormGroupsOnly:
              isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
              break;

            case ResetFormType.FormArraysOnly:
              isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"];
              break;

            case ResetFormType.DefinedPropsOnly:
              isReset = options.value ? Object.keys(options.value).indexOf(controlName) != -1 : false;
              break;

            default:
              isReset = true;
              break;
          }
          if (!isReset && options["with"]) isReset = options["with"].filter(function (x) {
            return x.split('.')[0] == controlName.split('.')[0];
          })[0] !== undefined;
          if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly)) isReset = true;
        }

        return isReset;
      }
      /**
       * @param {?} controlName
       * @param {?=} options
       * @return {?}
       */


      function getNestedOptions(controlName, options) {
        if (options) {
          var
          /** @type {?} */
          jObjectOptions = {};
          if (options.resetType) jObjectOptions.resetType = options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly ? ResetFormType.ControlsOnly : options.resetType;

          if (options["with"]) {
            var
            /** @type {?} */
            nestedControls = options["with"].filter(function (t) {
              return t.split('.')[0] == controlName;
            });
            var
            /** @type {?} */
            controlNames = nestedControls.map(function (x) {
              var
              /** @type {?} */
              splitControls = x.split('.');
              splitControls.splice(0, 1);
              return splitControls.join('.');
            });
            jObjectOptions["with"] = controlNames;
          }

          if (options.value && options.value[controlName]) jObjectOptions.value = options.value[controlName];
          jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
          return jObjectOptions;
        }

        return undefined;
      }

      var RxFormGroup = /*#__PURE__*/function (_angular_forms__WEBPA3) {
        _inherits(RxFormGroup, _angular_forms__WEBPA3);

        var _super3 = _createSuper(RxFormGroup);

        /**
         * @param {?} model
         * @param {?} entityObject
         * @param {?} controls
         * @param {?=} validatorOrOpts
         * @param {?=} asyncValidator
         */
        function RxFormGroup(model, entityObject, controls, validatorOrOpts, asyncValidator) {
          var _this15;

          _classCallCheck(this, RxFormGroup);

          _this15 = _super3.call(this, controls, validatorOrOpts, asyncValidator);
          _this15.model = model;
          _this15.entityObject = entityObject;
          _this15._modified = {};
          _this15._isModified = false;
          _this15.baseObject = {};

          for (var column in _this15.entityObject) {
            _this15.baseObject[column] = _this15.entityObject[column];
          }

          _this15.formDataProvider = new FormDataProvider();
          return _this15;
        }
        /**
         * @param {?} modelInstance
         * @param {?} jObject
         * @return {?}
         */


        _createClass(RxFormGroup, [{
          key: "bindPrimaryKey",
          value: function bindPrimaryKey(modelInstance, jObject) {
            var
            /** @type {?} */
            instanceContainer = defaultContainer.get(modelInstance.constructor);

            if (instanceContainer) {
              var
              /** @type {?} */
              primaryKeyProp = instanceContainer.properties.filter(function (x) {
                return x.isPrimaryKey;
              })[0];
              if (primaryKeyProp && this.modelInstance[primaryKeyProp.name]) jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "patch",

          /**
           * @param {?=} controlName
           * @return {?}
           */
          value: function patch(controlName) {
            if (controlName) {
              var
              /** @type {?} */
              control =
              /** @type {?} */
              this.controls[controlName];
              this.processModified(controlName, control);
            } else {
              this.nestedFormsModification();
            }

            this._isModified = Object.keys(this._modified).length > 0;
            if (!this._isModified) this.nestedArrayIsModified();
            if (this.parent)
            /** @type {?} */
            this.parent.patch();
          }
          /**
           * @return {?}
           */

        }, {
          key: "isDirty",
          value: function isDirty() {
            var
            /** @type {?} */
            isDirty = false;

            for (var
            /** @type {?} */
            name in this.value) {
              var
              /** @type {?} */
              currentValue = this.modelInstance[name];

              if (!(this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])) {
                isDirty = ApplicationUtil.notEqualTo(this.baseObject[name], currentValue);
              } else if (this.controls[name] instanceof RxFormGroup) isDirty =
              /** @type {?} */
              this.controls[name].isDirty();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                var _iterator15 = _createForOfIteratorHelper(
                /** @type {?} */
                this.controls[name].controls),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var formGroup = _step15.value;
                    isDirty =
                    /** @type {?} */
                    formGroup.isDirty();
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }

              if (isDirty) break;
            }

            return isDirty;
          }
        }, {
          key: "resetForm",

          /**
           * @param {?=} options
           * @return {?}
           */
          value: function resetForm(options) {
            for (var
            /** @type {?} */
            name in this.controls) {
              if (isResetControl(name, this.controls[name], options)) {
                if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
                /** @type {?} */
                this.controls[name].resetForm(getNestedOptions(name, options));else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                  /** @type {?} */
                  this.controls[name].resetForm(options && options.value ? options.value[name] : undefined);
                } else {
                  if (options && options.value && RegexValidator.isNotBlank(options.value[name])) this.controls[name].reset(options.value[name]);else this.controls[name].reset();
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "commit",
          value: function commit() {
            for (var
            /** @type {?} */
            name in this.controls) {
              if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
              /** @type {?} */
              this.controls[name].commit();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                /** @type {?} */
                this.controls[name].commit();
              } else {
                /** @type {?} */
                this.controls[name].commit();
              }
            }
          }
          /**
           * @param {?} value
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "patchModelValue",
          value: function patchModelValue(value, options) {
            if (value) {
              for (var
              /** @type {?} */
              name in this.controls) {
                if (this.controls[name] instanceof RxFormGroup && value[name])
                /** @type {?} */
                this.controls[name].patchModelValue(value[name], options);else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] && Array.isArray(value[name])) {
                  var
                  /** @type {?} */
                  index = 0;

                  var _iterator16 = _createForOfIteratorHelper(
                  /** @type {?} */
                  this.controls[name].controls),
                      _step16;

                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var formGroup = _step16.value;
                      if (value[name][index])
                      /** @type {?} */
                      formGroup.patchModelValue(value[name][index], options);
                      index = index + 1;
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                } else if (value[name] !== undefined) this.controls[name].patchValue(value[name], options);
              }
            }
          }
          /**
           * @param {?} onlyMessage
           * @return {?}
           */

        }, {
          key: "getErrorSummary",
          value: function getErrorSummary(onlyMessage) {
            var _this16 = this;

            var
            /** @type {?} */
            jObject = {};
            Object.keys(this.controls).forEach(function (columnName) {
              if (_this16.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                var
                /** @type {?} */
                _error =
                /** @type {?} */
                _this16.controls[columnName].getErrorSummary(false);

                if (Object.keys(_error).length > 0) jObject[columnName] = _error;
              } else if (_this16.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                var
                /** @type {?} */
                index = 0;

                var _iterator17 = _createForOfIteratorHelper(
                /** @type {?} */
                _this16.controls[columnName].controls),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var formGroup = _step17.value;

                    var
                    /** @type {?} */
                    _error2 =
                    /** @type {?} */
                    formGroup.getErrorSummary(false);

                    if (Object.keys(_error2).length > 0) {
                      _error2.index = index;
                      if (!jObject[columnName]) jObject[columnName] = [];
                      jObject[columnName].push(_error2);
                    }

                    index++;
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              } else {
                if (_this16.controls[columnName].errors) {
                  var
                  /** @type {?} */
                  _error3 = _this16.controls[columnName].errors;
                  if (onlyMessage) for (var
                  /** @type {?} */
                  validationName in _error3) {
                    jObject[columnName] = _error3[validationName].message;
                  } else jObject[columnName] = _error3;
                }
              }
            });
            return jObject;
          }
          /**
           * @return {?}
           */

        }, {
          key: "valueChangedSync",
          value: function valueChangedSync() {
            var _this17 = this;

            Object.keys(this.controls).forEach(function (columnName) {
              if (!(_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || _this17.controls[columnName] instanceof RxFormArray) && !(_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || _this17.controls[columnName] instanceof RxFormGroup) && !(_this17.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || _this17.entityObject[columnName] instanceof RxFormControl) && ApplicationUtil.notEqualTo(
              /** @type {?} */
              _this17.controls[columnName].getControlValue(), _this17.entityObject[columnName])) {
                _this17.controls[columnName].setValue(_this17.entityObject[columnName], {
                  updateChanged: true
                });
              } else if (_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || _this17.controls[columnName] instanceof RxFormArray) {
                var _iterator18 = _createForOfIteratorHelper(
                /** @type {?} */
                _this17.controls[columnName].controls),
                    _step18;

                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                    var formGroup = _step18.value;

                    /** @type {?} */
                    formGroup.valueChangedSync();
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }
              } else if (_this17.controls[columnName] instanceof RxFormGroup) {
                /** @type {?} */
                _this17.controls[columnName].valueChangedSync();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "refreshDisable",
          value: function refreshDisable() {
            var _this18 = this;

            Object.keys(this.controls).forEach(function (columnName) {
              if (!(_this18.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || _this18.controls[columnName] instanceof RxFormArray) && !(_this18.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || _this18.controls[columnName] instanceof RxFormGroup)) {
                /** @type {?} */
                _this18.controls[columnName].refresh();
              } else if (_this18.controls[columnName] instanceof RxFormGroup) {
                /** @type {?} */
                _this18.controls[columnName].refreshDisable();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "bindErrorMessages",
          value: function bindErrorMessages() {
            var _this19 = this;

            Object.keys(this.controls).forEach(function (columnName) {
              if (!(_this19.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || _this19.controls[columnName] instanceof RxFormArray) && !(_this19.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || _this19.controls[columnName] instanceof RxFormGroup)) {
                /** @type {?} */
                _this19.controls[columnName].bindError();
              } else if (_this19.controls[columnName] instanceof RxFormGroup) {
                /** @type {?} */
                _this19.controls[columnName].bindErrorMessages();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "toFormData",

          /**
           * @return {?}
           */
          value: function toFormData() {
            return this.formDataProvider.convertToFormData(this.value);
          }
          /**
           * @param {?} controlName
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "processModified",
          value: function processModified(controlName, control) {
            if (control.isModified) this._modified[controlName] = control.value;else delete this._modified[controlName];
            this._isModified = Object.keys(this._modified).length > 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "nestedArrayIsModified",
          value: function nestedArrayIsModified() {
            for (var
            /** @type {?} */
            controlName in this.controls) {
              if (this.controls[controlName] instanceof RxFormArray) this._isModified =
              /** @type {?} */
              this.controls[controlName].isModified;
              if (this._isModified) break;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "nestedFormsModification",
          value: function nestedFormsModification() {
            for (var
            /** @type {?} */
            controlName in this.controls) {
              if (this.controls[controlName] instanceof RxFormGroup) this.processModified(controlName, this.controls[controlName]);else if (this.controls[controlName] instanceof RxFormArray) {
                if (
                /** @type {?} */
                this.controls[controlName].isModified) {
                  var
                  /** @type {?} */
                  formGroups =
                  /** @type {?} */
                  this.controls[controlName].controls;
                  this._modified[controlName] = [];

                  var _iterator19 = _createForOfIteratorHelper(formGroups),
                      _step19;

                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                      var formGroup = _step19.value;

                      if (
                      /** @type {?} */
                      formGroup.isModified) {
                        if (!this._modified[controlName]) this._modified[controlName] = [];

                        this._modified[controlName].push(
                        /** @type {?} */
                        formGroup.modifiedValue);
                      }
                    }
                  } catch (err) {
                    _iterator19.e(err);
                  } finally {
                    _iterator19.f();
                  }

                  if (this._modified[controlName].length == 0) delete this._modified[controlName];
                } else if (this._modified[controlName]) delete this._modified[controlName];
              }
            }
          }
        }, {
          key: "modifiedValue",
          get: function get() {
            var
            /** @type {?} */
            jObject = {};

            if (Object.keys(this._modified).length > 0) {
              this.bindPrimaryKey(this.modelInstance, jObject);

              for (var
              /** @type {?} */
              columnName in this._modified) {
                if (this.controls[columnName] instanceof RxFormGroup) jObject[columnName] =
                /** @type {?} */
                this.controls[columnName].modifiedValue;else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                  var
                  /** @type {?} */
                  formArray =
                  /** @type {?} */
                  this.controls[columnName];
                  jObject[columnName] = [];

                  for (var
                  /** @type {?} */
                  i = 0; i < this._modified[columnName].length; i++) {
                    var
                    /** @type {?} */
                    modifiedValue =
                    /** @type {?} */
                    formArray.controls[i].modifiedValue;
                    if (Object.keys(modifiedValue).length > 0) jObject[columnName].push(modifiedValue);
                  }

                  if (jObject[columnName].length == 0) delete jObject[columnName];
                } else jObject[columnName] = this._modified[columnName];
              }

              return jObject;
            }

            return this._modified;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isModified",
          get: function get() {
            return this._isModified;
          }
        }, {
          key: "submitted",
          get: function get() {
            return this._submitted;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            var _this20 = this;

            this._submitted = value;
            Object.keys(this.controls).forEach(function (columnName) {
              if (_this20.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                var
                /** @type {?} */
                formArray =
                /** @type {?} */
                _this20.controls[columnName];

                var _iterator20 = _createForOfIteratorHelper(formArray.controls),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var formGroup = _step20.value;

                    /** @type {?} */
                    formGroup.submitted = value;
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
              } else if (_this20.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                /** @type {?} */
                _this20.controls[columnName].submitted = value;
              } else
              /** @type {?} */
              _this20.controls[columnName].bindError();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "modelInstanceValue",
          get: function get() {
            return clone(this.entityObject);
          }
          /**
           * @return {?}
           */

        }, {
          key: "modelInstance",
          get: function get() {
            return this.entityObject;
          }
          /**
           * @return {?}
           */

        }, {
          key: "controlsError",
          get: function get() {
            return this.getErrorSummary(true);
          }
        }]);

        return RxFormGroup;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]);

      var FormProvider = /*#__PURE__*/function () {
        function FormProvider() {
          _classCallCheck(this, FormProvider);
        }

        _createClass(FormProvider, null, [{
          key: "ProcessRule",

          /**
           * @param {?} control
           * @param {?} config
           * @param {?=} isDynamicConfig
           * @return {?}
           */
          value: function ProcessRule(control, config) {
            var isDynamicConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var
            /** @type {?} */
            formGroupValue = ApplicationUtil.getParentObjectValue(control);
            var
            /** @type {?} */
            parentObject = control.parent ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
            var
            /** @type {?} */
            modelInstance = undefined;
            if (control.parent && control.parent instanceof RxFormGroup) modelInstance =
            /** @type {?} */
            control.parent.modelInstance;
            if (parentObject) this.updateFormControlValue(parentObject, control.parent.controls, control);else if (config.conditionalExpression) return false;
            return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
          }
          /**
           * @param {?} parentObject
           * @param {?} controls
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "updateFormControlValue",
          value: function updateFormControlValue(parentObject, controls, control) {
            for (var
            /** @type {?} */
            controlName in parentObject) {
              if (!(parentObject[controlName] instanceof Object)) if (controls[controlName] === control) {
                parentObject[controlName] = control.value;
                break;
              }
            }
          }
        }]);

        return FormProvider;
      }();

      var ValidatorValueChecker = /*#__PURE__*/function () {
        function ValidatorValueChecker() {
          _classCallCheck(this, ValidatorValueChecker);
        }

        _createClass(ValidatorValueChecker, null, [{
          key: "pass",

          /**
           * @param {?} control
           * @param {?} config
           * @return {?}
           */
          value: function pass(control, config) {
            if (FormProvider.ProcessRule(control, config)) return RegexValidator.isNotBlank(control.value);else return false;
          }
          /**
           * @param {?} control
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "passArrayValue",
          value: function passArrayValue(control, config) {
            if (FormProvider.ProcessRule(control, config)) return control.value instanceof Array;else return false;
          }
        }]);

        return ValidatorValueChecker;
      }();

      var ARRAY_CONFIG = "ArrayConfig";
      var FIELD_CONFIG = "FieldConfig";
      var IP_CONFIG = "IpConfig";
      var NUMBER_CONFIG = "NumberConfig";
      var PASSWORD_CONFIG = "PasswordConfig";
      var PATTERN_CONFIG = "PatternConfig";
      var RANGE_CONFIG = "RangeConfig";
      var CONFIG_REQUIRED_FIELDS = (_CONFIG_REQUIRED_FIEL = {}, _defineProperty(_CONFIG_REQUIRED_FIEL, ARRAY_CONFIG, ["matchValues"]), _defineProperty(_CONFIG_REQUIRED_FIEL, FIELD_CONFIG, ["fieldName"]), _defineProperty(_CONFIG_REQUIRED_FIEL, IP_CONFIG, ["version"]), _defineProperty(_CONFIG_REQUIRED_FIEL, PASSWORD_CONFIG, ["validation"]), _defineProperty(_CONFIG_REQUIRED_FIEL, NUMBER_CONFIG, ["value"]), _defineProperty(_CONFIG_REQUIRED_FIEL, PATTERN_CONFIG, ["expression"]), _defineProperty(_CONFIG_REQUIRED_FIEL, RANGE_CONFIG, ["minimumNumber", "maximumNumber"]), _CONFIG_REQUIRED_FIEL);
      /**
       * @param {?} config
       * @param {?} control
       * @param {?=} configName
       * @return {?}
       */

      function getConfigObject(config, control) {
        var configName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        return config != undefined && config != true ? configProvider(control, config, configName) : {};
      }
      /**
       * @param {?} control
       * @param {?} config
       * @param {?} configName
       * @return {?}
       */


      function configProvider(control, config, configName) {
        if (config.dynamicConfig) {
          var
          /** @type {?} */
          currentConfig = FormProvider.ProcessRule(control, clone(config), true);

          if (typeof currentConfig != "boolean") {
            currentConfig.conditionalExpression = config.conditionalExpression;
            currentConfig.dynamicConfig = config.dynamicConfig;
            Object.keys(config).forEach(function (t) {
              if (t != "conditionalExpression" && t != "dynamicConfig" || currentConfig[t] === undefined) {
                currentConfig[t] = config[t];
              }
            });
            return currentConfig;
          } else return config;
        }

        return checkRequiredProps(config, configName);
      }
      /**
       * @param {?} config
       * @param {?} configName
       * @return {?}
       */


      function checkRequiredProps(config, configName) {
        var
        /** @type {?} */
        props = CONFIG_REQUIRED_FIELDS[configName];

        if (configName) {
          props.forEach(function (prop) {
            if (config[prop] === undefined) throw new Error("Pass the property of '".concat(prop, "' with value in the ").concat(configName, ", otherwise it won't work."));
          });
        }

        return config;
      }
      /**
       * @param {?} configModel
       * @param {?} control
       * @param {?} regExps
       * @param {?} key
       * @return {?}
       */


      function alphaValidation(configModel, control, regExps, key) {
        var
        /** @type {?} */
        config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var
          /** @type {?} */
          isValid = !config || !config.allowWhiteSpace ? RegexValidator.isValid(control.value, regExps[0]) : RegexValidator.isValid(control.value, regExps[1]);
          if (!isValid) return ObjectMaker.toJson(key, config, [control.value]);
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function alphaValidator(configModel) {
        return function (control) {
          return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function alphaNumericValidator(configModel) {
        return function (control) {
          return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function compareValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, FIELD_CONFIG);
          var
          /** @type {?} */
          compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
          var
          /** @type {?} */
          controlValue = control.value;
          var
          /** @type {?} */
          compareControlValue = compareControl ? compareControl.value : '';

          if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
            if (!(compareControl && compareControl.value === controlValue)) return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function containsValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (control.value.indexOf(config.value) == -1) return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} length
       * @param {?} checks
       * @return {?}
       */


      function checkLength(length, checks) {
        var
        /** @type {?} */
        isPassed = false;

        var _iterator21 = _createForOfIteratorHelper(checks),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var check = _step21.value;
            isPassed = check == length;
            if (isPassed) break;
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return isPassed;
      }
      /**
       * @param {?} numbers
       * @return {?}
       */


      function calculate(numbers) {
        var
        /** @type {?} */
        numberSum = 0;

        for (var
        /** @type {?} */
        i = 0; i < numbers.length; i++) {
          numberSum += parseInt(numbers.substring(i, i + 1));
        }

        var
        /** @type {?} */
        deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);

        for (var
        /** @type {?} */
        i = numbers.length - 1; i >= 0; i -= 2) {
          numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
        }

        var
        /** @type {?} */
        mod = numberSum % 10;
        mod = 10 - mod;
        if (mod == 10) mod = 0;
        return mod;
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function creditCardValidator(configModel) {
        var
        /** @type {?} */
        cardDigits = {
          AmericanExpress: [15],
          DinersClub: [14, 16, 19],
          Discover: [16, 19],
          JCB: [16, 19],
          Maestro: [12, 16, 19],
          MasterCard: [16],
          Visa: [13, 16, 19]
        };
        /**
         * @param {?} creditCardNumber
         * @return {?}
         */

        function validate(creditCardNumber) {
          var
          /** @type {?} */
          digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
          return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
        }
        /**
         * @param {?} cardNumber
         * @return {?}
         */


        function getCardProviderName(cardNumber) {
          var
          /** @type {?} */
          cardProviderName = "";
          return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
        }

        return function (control) {
          var
          /** @type {?} */
          controlValue = control.value;
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          var
          /** @type {?} */
          parentObject = control.parent ? control.parent.value : undefined;

          if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(controlValue)) {
              var
              /** @type {?} */
              _isValid = false;
              var
              /** @type {?} */
              cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
              var
              /** @type {?} */
              cardType = '';

              var _iterator22 = _createForOfIteratorHelper(cardTypes),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var creditCardType = _step22.value;
                  _isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                  cardType = creditCardType;
                  if (_isValid) break;
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              if (!_isValid) return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @param {?} control
       * @param {?} regExp
       * @param {?} key
       * @return {?}
       */


      function regexValidation(configModel, control, regExp, key) {
        var
        /** @type {?} */
        config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!RegexValidator.isValid(control.value, regExp)) return ObjectMaker.toJson(key, config, [control.value]);
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function digitValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function emailValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function hexColorValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function lowercaseValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toLowerCase())) return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }

      var OPERATORS = {
        lessThan: "<",
        greaterThan: ">",
        lessThanEqualTo: "<=",
        greaterThanEqualTo: ">="
      };
      /**
       * @param {?} leftValue
       * @param {?} rightValue
       * @param {?} operator
       * @return {?}
       */

      function runCondition(leftValue, rightValue, operator) {
        var
        /** @type {?} */
        result = false;

        switch (operator) {
          case OPERATORS.lessThan:
          case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;

          case OPERATORS.lessThanEqualTo:
          case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
        }

        return result;
      }
      /**
       * @param {?} control
       * @param {?} config
       * @param {?} operationType
       * @return {?}
       */


      function dateChecker(control, config, operationType) {
        config = getConfigObject(config, control);
        var
        /** @type {?} */
        dateProvider = new DateProvider();

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value)) {
              var
              /** @type {?} */
              checkDate = dateProvider.getCompareDate(config, control);
              var
              /** @type {?} */
              currentControlValue = dateProvider.getDate(control.value);

              var
              /** @type {?} */
              _isValid2 = operationType == AnnotationTypes.minDate ? runCondition(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);

              if (!_isValid2) return ObjectMaker.toJson(operationType, config, [control.value]);
            } else return ObjectMaker.toJson(operationType, config, [control.value]);
          }
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} control
       * @param {?} config
       * @param {?} operationType
       * @return {?}
       */


      function validateDate(control, config, operationType) {
        config = getConfigObject(config, control);
        var
        /** @type {?} */
        dateProvider = new DateProvider();

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value)) {
              return ObjectMaker.toJson(operationType, config, [control.value]);
            }
          }
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function maxDateValidator(configModel) {
        return function (control) {
          return dateChecker(control, configModel, AnnotationTypes.maxDate);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function maxLengthValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, NUMBER_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value.length <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function maxNumberValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, NUMBER_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function minDateValidator(configModel) {
        return function (control) {
          return dateChecker(control, configModel, AnnotationTypes.minDate);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function minLengthValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, NUMBER_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).length >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function minNumberValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, NUMBER_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function passwordValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, PASSWORD_CONFIG);
          var
          /** @type {?} */
          controlValue = control.value;

          if (RegexValidator.isNotBlank(controlValue)) {
            var
            /** @type {?} */
            validation = RegexValidator.isValidPassword(config.validation, controlValue);
            if (!validation.isValid) return ObjectMaker.toJson(AnnotationTypes.password, config, [controlValue]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function rangeValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, RANGE_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).indexOf(".") == -1 && parseInt(control.value) >= config.minimumNumber && parseInt(control.value) <= config.maximumNumber)) return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?=} configModel
       * @return {?}
       */


      function uppercaseValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toUpperCase())) return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function requiredValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value)) {
              return ObjectMaker.toJson(AnnotationTypes.required, config, []);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function patternValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, PATTERN_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            for (var
            /** @type {?} */
            pattern in config.expression) {
              if (!RegexValidator.isValid(control.value, config.expression[pattern])) return ObjectMaker.toJson(pattern, config, [control.value]);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function timeValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            _isValid3 = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);

            if (!_isValid3) return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function urlValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.url, AnnotationTypes.url);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function jsonValidator(configModel) {
        /**
         * @param {?} value
         * @return {?}
         */
        function process(value) {
          var
          /** @type {?} */
          result = false;

          try {
            var
            /** @type {?} */
            json = JSON.parse(value);
            result = !!json && typeof json === 'object';
          } catch (
          /** @type {?} */
          ex) {
            result = false;
          }

          return result;
        }

        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (process(control.value)) return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} control
       * @param {?} config
       * @param {?} relationalOperatorName
       * @return {?}
       */


      function relationalCheck(control, config, relationalOperatorName) {
        config = getConfigObject(config, control);
        var
        /** @type {?} */
        matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        var
        /** @type {?} */
        matchControlValue = matchControl ? matchControl.value : config.value !== undefined ? config.value : '';

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
            var
            /** @type {?} */
            _isValid4 = false;

            switch (relationalOperatorName) {
              case AnnotationTypes.greaterThan:
                _isValid4 = parseFloat(control.value) > parseFloat(matchControlValue);
                break;

              case AnnotationTypes.lessThan:
                _isValid4 = parseFloat(control.value) < parseFloat(matchControlValue);
                break;

              case AnnotationTypes.greaterThanEqualTo:
                _isValid4 = parseFloat(control.value) >= parseFloat(matchControlValue);
                break;

              case AnnotationTypes.lessThanEqualTo:
                _isValid4 = parseFloat(control.value) <= parseFloat(matchControlValue);
                break;
            }

            if (!_isValid4) return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
          }
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function greaterThanValidator(configModel) {
        return function (control) {
          return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function greaterThanEqualToValidator(configModel) {
        return function (control) {
          return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function lessThanEqualToValidator(configModel) {
        return function (control) {
          return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function lessThanValidator(configModel) {
        return function (control) {
          return relationalCheck(control, configModel, AnnotationTypes.lessThan);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function choiceValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            if (control.value instanceof Array) {
              config.minLength = config.minLength == undefined ? 0 : config.minLength;
              config.maxLength = config.maxLength == undefined ? 0 : config.maxLength;
              if (control.value.length < config.minLength || config.maxLength !== 0 && control.value.length > config.maxLength) return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function differentValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, FIELD_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
            var
            /** @type {?} */
            differentControlValue = differentControl ? differentControl.value : '';
            if (!(differentControl && differentControl.value != control.value)) return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function numericValidator(configModel) {
        return function (control) {
          if (configModel && (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.numeric])) ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue))) return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function evenValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value % 2 == 0)) return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function oddValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!!(control.value % 2 == 0) || !ApplicationUtil.isNumeric(control.value)) return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function factorValidator(configModel) {
        /**
         * @param {?} dividend
         * @param {?} value
         * @return {?}
         */
        function positiveFactors(dividend, value) {
          var
          /** @type {?} */
          isPositive = false;

          for (var
          /** @type {?} */
          index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
            if (dividend % index === 0) {
              if (index == value) isPositive = true;
              if (dividend / index !== index) if (dividend / index == value) isPositive = true;
              if (isPositive) break;
            }
          }

          return isPositive;
        }

        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          var
          /** @type {?} */
          dividendField = control.parent && config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
          var
          /** @type {?} */
          dividend = config.fieldName && dividendField ? dividendField.value : config.dividend;

          if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
              if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value))) return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function leapYearValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            isValid = control.value % 100 === 0 ? control.value % 400 === 0 : control.value % 4 === 0;
            if (!isValid) return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function allOfValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, ARRAY_CONFIG);

          if (ValidatorValueChecker.passArrayValue(control, config)) {
            var
            /** @type {?} */
            testResult = false;

            var _iterator23 = _createForOfIteratorHelper(config.matchValues),
                _step23;

            try {
              var _loop2 = function _loop2() {
                var value = _step23.value;
                testResult = control.value.some(function (y) {
                  return y == value;
                });
                if (!testResult) return "break";
              };

              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var _ret = _loop2();

                if (_ret === "break") break;
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            if (!testResult) return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function oneOfValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, ARRAY_CONFIG);

          if (ValidatorValueChecker.passArrayValue(control, config)) {
            var
            /** @type {?} */
            testResult = false;

            var _iterator24 = _createForOfIteratorHelper(config.matchValues),
                _step24;

            try {
              var _loop3 = function _loop3() {
                var value = _step24.value;
                testResult = control.value.some(function (y) {
                  return y == value;
                });
                if (testResult) return "break";
              };

              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var _ret2 = _loop3();

                if (_ret2 === "break") break;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            if (!testResult) return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function noneOfValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, ARRAY_CONFIG);

          if (FormProvider.ProcessRule(control, config)) {
            var
            /** @type {?} */
            testResult = false;

            var _iterator25 = _createForOfIteratorHelper(config.matchValues),
                _step25;

            try {
              var _loop4 = function _loop4() {
                var value = _step25.value;
                var
                /** @type {?} */
                matchValue = ApplicationUtil.lowerCaseWithTrim(value);
                testResult = Array.isArray(control.value) ? control.value.some(function (y) {
                  return ApplicationUtil.lowerCaseWithTrim(y) === matchValue;
                }) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
                if (testResult) return "break";
              };

              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _ret3 = _loop4();

                if (_ret3 === "break") break;
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            if (testResult) return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function macValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function asciiValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function dataUriValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function portValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            _isValid5 = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && control.value >= 0 && control.value <= 65535;

            if (!_isValid5) return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function latLongValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            splitText = control.value.split(',');
            if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule["long"]))) return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function extensionValidator(configModel) {
        return function (control, files) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.extension]) ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);

          if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
              var i;

              var _ret4 = function () {
                var
                /** @type {?} */
                testResult = true;
                var
                /** @type {?} */
                extension = '';

                for (
                /** @type {?} */
                i = 0; i < files.length; i++) {
                  var
                  /** @type {?} */
                  _file = files.item(i);

                  var
                  /** @type {?} */
                  splitText = _file.name.split(".");

                  extension = splitText[splitText.length - 1];
                  var
                  /** @type {?} */
                  result = config.extensions.filter(function (t) {
                    return extension.toLowerCase() == t.toLowerCase();
                  })[0];

                  if (!result) {
                    testResult = false;
                    break;
                  }
                }

                if (!testResult) return {
                  v: ObjectMaker.toJson(AnnotationTypes.extension, config, [extension, config.extensions.join(",")])
                };
              }();

              if (typeof _ret4 === "object") return _ret4.v;
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function fileSizeValidator(configModel) {
        return function (control, files) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.fileSize]) ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);

          if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
              var
              /** @type {?} */
              minFileSize = config.minSize ? config.minSize : 0;
              var
              /** @type {?} */
              testResult = false;
              var
              /** @type {?} */
              _fileSize = 0;

              for (var
              /** @type {?} */
              i = 0; i < files.length; i++) {
                var
                /** @type {?} */
                _file2 = files.item(i);

                _fileSize = _file2.size;
                testResult = !(_fileSize >= minFileSize && _fileSize <= config.maxSize);
                if (testResult) break;
              }

              if (testResult) return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [_fileSize, config.maxSize]);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function endsWithValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
            if (endString != config.value) return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function startsWithValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            startString = String(control.value).substr(0, config.value.length);
            if (startString != config.value) return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function primeNumberValidator(configModel) {
        /**
         * @param {?} value
         * @return {?}
         */
        function isPrime(value) {
          var
          /** @type {?} */
          isPrimeNumber = value != 1;

          for (var
          /** @type {?} */
          i = 2; i < value; i++) {
            if (value % i == 0) {
              isPrimeNumber = false;
              break;
            }
          }

          return isPrimeNumber;
        }

        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value)) return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function latitudeValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function longitudeValidator(configModel) {
        return function (control) {
          return regexValidation(configModel, control, RegExRule["long"], AnnotationTypes.longitude);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function composeValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            if (config.validators) {
              var
              /** @type {?} */
              result = undefined;

              var _iterator26 = _createForOfIteratorHelper(config.validators),
                  _step26;

              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var validator = _step26.value;
                  result = validator(control);
                  if (result) break;
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }

              if (result) return config.messageKey || config.message ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @param {?} entity
       * @return {?}
       */


      function ruleValidator(configModel, entity) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            var
            /** @type {?} */
            result = null;

            var _iterator27 = _createForOfIteratorHelper(config.customRules),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var _rule = _step27.value;
                result = _rule(entity);
                if (result) break;
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }

            if (result) return result;
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function fileValidator(configModel) {
        return function (control, files) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.file]) ApplicationUtil.configureControl(control, config, AnnotationTypes.file);

          if (files) {
            if (FormProvider.ProcessRule(control, config)) {
              if (RegexValidator.isNotBlank(control.value)) {
                var
                /** @type {?} */
                minFiles = config.minFiles ? config.minFiles : 0;
                var
                /** @type {?} */
                maxFiles = config.maxFiles ? config.maxFiles : files.length;
                if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles)) return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
              }
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function customValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            var
            /** @type {?} */
            formGroupValue = ApplicationUtil.getParentObjectValue(control);
            var
            /** @type {?} */
            parentObject = control.parent ? control.parent.value : undefined;
            var
            /** @type {?} */
            result = null;

            var _iterator28 = _createForOfIteratorHelper(config.customRules),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _rule2 = _step28.value;
                result = _rule2(formGroupValue, parentObject, config.additionalValue);
                if (result) break;
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            if (result) return result;
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function uniqueValidator(configModel) {
        var
        /** @type {?} */
        setTimeoutFunc = function setTimeoutFunc(invalidateControls, controlValues) {
          var
          /** @type {?} */
          timeOut = setTimeout(function () {
            invalidateControls.forEach(function (t) {
              var
              /** @type {?} */
              isMatched = controlValues.filter(function (x) {
                return x == t.value;
              })[0];
              if (!isMatched) t.updateValueAndValidity();
            });
            clearTimeout(timeOut);
          }, 200);
        };

        var
        /** @type {?} */
        additionalValidation = function additionalValidation(config, fieldName, formGroup, formArray, currentValue) {
          var
          /** @type {?} */
          indexOf = formArray.controls.indexOf(formGroup);
          var
          /** @type {?} */
          formArrayValue = [];

          if (indexOf != -1) {
            formArray.value.forEach(function (t, i) {
              if (indexOf != i) formArrayValue.push(t);
            });
            return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
          }

          return false;
        };

        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
              var
              /** @type {?} */
              formArray = ApplicationUtil.getParentFormArray(control);
              var
              /** @type {?} */
              parentFormGroup = control.parent ? control.parent : undefined;
              var
              /** @type {?} */
              invalidateControls = [];
              var
              /** @type {?} */
              controlValues = [];

              if (formArray && parentFormGroup) {
                var matchedControl;

                var _ret5 = function () {
                  var
                  /** @type {?} */
                  currentValue = control.value;
                  var
                  /** @type {?} */
                  fieldName = ApplicationUtil.getFormControlName(control);
                  var
                  /** @type {?} */
                  isMatched = false;

                  var _iterator29 = _createForOfIteratorHelper(formArray.controls),
                      _step29;

                  try {
                    var _loop5 = function _loop5() {
                      var formGroup = _step29.value;

                      if (formGroup != parentFormGroup) {
                        isMatched = ApplicationUtil.toLower(formGroup.controls[fieldName].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]);

                        if (formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]) {
                          /** @type {?} */
                          matchedControl = formArray.controls.filter(function (t) {
                            return t.controls[fieldName] != formGroup.controls[fieldName] && ApplicationUtil.toLower(t.controls[fieldName].value) == ApplicationUtil.toLower(formGroup.controls[fieldName].value);
                          })[0];
                          if (!matchedControl) invalidateControls.push(formGroup.controls[fieldName]);
                        } else controlValues.push(formGroup.controls[fieldName].value);
                      }

                      if (isMatched) return "break";
                    };

                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                      var _ret6 = _loop5();

                      if (_ret6 === "break") break;
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }

                  if (invalidateControls.length > 0) setTimeoutFunc(invalidateControls, controlValues);
                  var
                  /** @type {?} */
                  validation = false;

                  if (config.additionalValidation) {
                    validation = additionalValidation(config, fieldName, parentFormGroup, formArray, currentValue);
                  }

                  if (isMatched && !validation) return {
                    v: ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value])
                  };
                }();

                if (typeof _ret5 === "object") return _ret5.v;
              }
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function imageValidator(configModel) {
        return function (control, files) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);
          if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.image]) ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
          if (!files) return ObjectMaker["null"]();
          return new Promise(function (resolve, reject) {
            if (FormProvider.ProcessRule(control, config)) {
              if (RegexValidator.isNotBlank(control.value)) {
                var i;

                (function () {
                  var
                  /** @type {?} */
                  testResult = false;

                  var _loop6 = function _loop6() {
                    var
                    /** @type {?} */
                    file = files.item(i);
                    var
                    /** @type {?} */
                    type = file.type ? file.type.split('/') : [];
                    testResult = type.length > 1 && type[0] == "image";
                    if (!testResult) return "break";
                    var
                    /** @type {?} */
                    image = new Image();
                    config.minWidth = config.minWidth ? config.minWidth : 0;
                    config.minHeight = config.minHeight ? config.minHeight : 0;

                    image.onload = function () {
                      testResult = image.width >= config.minWidth && image.height >= config.minHeight && image.width <= config.maxWidth && image.height <= config.maxHeight;
                      if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));else resolve(ObjectMaker["null"]());
                    };

                    image.onerror = function () {
                      resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                    };

                    image.src = URL.createObjectURL(file);
                  };

                  for (
                  /** @type {?} */
                  i = 0; i < files.length; i++) {
                    var _ret7 = _loop6();

                    if (_ret7 === "break") break;
                  }

                  if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                })();
              }
            }

            return ObjectMaker["null"]();
          });
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function notEmptyValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value, true)) {
              return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
            }
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function checkIpV4(value) {
        var
        /** @type {?} */
        isValid = RegexValidator.isValid(value, RegExRule.ipV4);

        if (isValid) {
          var
          /** @type {?} */
          splitDots = value.split('.');

          var _iterator30 = _createForOfIteratorHelper(splitDots),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var ipNum = _step30.value;
              isValid = ipNum <= 255;
              if (!isValid) break;
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }

        return isValid;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function checkIpV6(value) {
        return RegexValidator.isValid(value, RegExRule.ipV6);
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function ipValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control, IP_CONFIG);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            values = config.isCidr ? control.value.split('/') : [control.value];
            var
            /** @type {?} */
            isValid = config.version == IpVersion.V4 ? checkIpV4(values[0]) : config.version == IpVersion.V6 ? checkIpV6(values[0]) : checkIpV4(values[0]) || checkIpV6(values[0]);

            if (config.isCidr && isValid) {
              isValid = values.length > 1 ? config.version == IpVersion.V4 ? RegexValidator.isValid(values[1], RegExRule.cidrV4) : config.version == IpVersion.V6 ? RegexValidator.isValid(values[1], RegExRule.cidrV6) : RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6) : false;
            }

            if (!isValid) return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function cusipValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            controlValue = control.value.toUpperCase();

            var
            /** @type {?} */
            _isValid6 = RegexValidator.isValid(controlValue, RegExRule.cusip);

            if (_isValid6) {
              var
              /** @type {?} */
              numericValues = controlValue.split("").map(function (value) {
                var
                /** @type {?} */
                charCode = value.charCodeAt(0);
                return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
              });
              var
              /** @type {?} */
              totalCount = 0;

              for (var
              /** @type {?} */
              i = 0; i < numericValues.length - 1; i++) {
                var
                /** @type {?} */
                numericValue = parseInt(numericValues[i], 10);

                if (i % 2 !== 0) {
                  numericValue *= 2;
                }

                if (numericValue > 9) {
                  numericValue -= 9;
                }

                totalCount += numericValue;
              }

              totalCount = (10 - totalCount % 10) % 10;
              _isValid6 = totalCount == numericValues[numericValues.length - 1];
            }

            if (!_isValid6) return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function gridValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            controlValue = control.value.toUpperCase();
            var
            /** @type {?} */
            isValid = RegexValidator.isValid(controlValue, RegExRule.grid);

            if (isValid) {
              controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');

              if ('GRID:' === controlValue.substr(0, 5)) {
                controlValue = controlValue.substr(5);
              }

              var
              /** @type {?} */
              alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
              var
              /** @type {?} */
              alphaNumLength = alphaNums.length,

              /** @type {?} */
              length = controlValue.length,

              /** @type {?} */
              check = Math.floor(alphaNumLength / 2);

              for (var
              /** @type {?} */
              i = 0; i < length; i++) {
                check = ((check || alphaNumLength) * 2 % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
              }

              isValid = check === 1;
            }

            if (!isValid) return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function dateValidator(configModel) {
        return function (control) {
          return validateDate(control, configModel, AnnotationTypes.date);
        };
      }
      /**
       * @param {?} leftValue
       * @param {?} rightValue
       * @param {?} operator
       * @return {?}
       */


      function runCondition$1(leftValue, rightValue, operator) {
        var
        /** @type {?} */
        result = false;

        switch (operator) {
          case OPERATORS.lessThan:
          case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;

          case OPERATORS.lessThanEqualTo:
          case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
        }

        return result;
      }
      /**
       * @param {?} control
       * @param {?} config
       * @return {?}
       */


      function isValid(control, config) {
        return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
      }
      /**
       * @param {?} value
       * @return {?}
       */


      function getTime(value) {
        var
        /** @type {?} */
        splitTime = value ? value.split(':') : [];
        return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
      }
      /**
       * @param {?} control
       * @param {?} config
       * @param {?} operationType
       * @return {?}
       */


      function timeChecker(control, config, operationType) {
        config = getConfigObject(config, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            if (isValid(control, config)) {
              var
              /** @type {?} */
              crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
              var
              /** @type {?} */
              crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
              var
              /** @type {?} */
              currentControlValue = getTime(control.value);

              var
              /** @type {?} */
              _isValid7 = operationType == AnnotationTypes.minTime ? runCondition$1(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);

              if (!_isValid7) return ObjectMaker.toJson(operationType, config, [control.value]);
            } else return ObjectMaker.toJson(operationType, config, [control.value]);
          }
        }

        return ObjectMaker["null"]();
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function minTimeValidator(configModel) {
        return function (control) {
          return timeChecker(control, configModel, AnnotationTypes.minTime);
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function maxTimeValidator(configModel) {
        return function (control) {
          return timeChecker(control, configModel, AnnotationTypes.maxTime);
        };
      }

      var APP_VALIDATORS = {
        "alphaNumeric": alphaNumericValidator,
        "alpha": alphaValidator,
        "compare": compareValidator,
        "email": emailValidator,
        "hexColor": hexColorValidator,
        "lowerCase": lowercaseValidator,
        "maxDate": maxDateValidator,
        "maxNumber": maxNumberValidator,
        "minDate": minDateValidator,
        "minNumber": minNumberValidator,
        "contains": containsValidator,
        "upperCase": uppercaseValidator,
        "maxLength": maxLengthValidator,
        "minLength": minLengthValidator,
        "password": passwordValidator,
        "range": rangeValidator,
        "required": requiredValidator,
        "creditCard": creditCardValidator,
        "digit": digitValidator,
        "pattern": patternValidator,
        "time": timeValidator,
        "url": urlValidator,
        "json": jsonValidator,
        "greaterThan": greaterThanValidator,
        "greaterThanEqualTo": greaterThanEqualToValidator,
        "lessThan": lessThanValidator,
        "lessThanEqualTo": lessThanEqualToValidator,
        "choice": choiceValidator,
        "different": differentValidator,
        "numeric": numericValidator,
        "even": evenValidator,
        "odd": oddValidator,
        "factor": factorValidator,
        "leapYear": leapYearValidator,
        "allOf": allOfValidator,
        "oneOf": oneOfValidator,
        "noneOf": noneOfValidator,
        "mac": macValidator,
        "ascii": asciiValidator,
        "dataUri": dataUriValidator,
        "port": portValidator,
        "latLong": latLongValidator,
        "extension": extensionValidator,
        "fileSize": fileSizeValidator,
        "endsWith": endsWithValidator,
        "startsWith": startsWithValidator,
        "primeNumber": primeNumberValidator,
        "latitude": latitudeValidator,
        "longitude": longitudeValidator,
        "compose": composeValidator,
        "rule": ruleValidator,
        "file": fileValidator,
        "unique": uniqueValidator,
        "image": imageValidator,
        "notEmpty": notEmptyValidator,
        "ip": ipValidator,
        "cusip": cusipValidator,
        "grid": gridValidator,
        "date": dateValidator,
        "minTime": minTimeValidator,
        "maxTime": maxTimeValidator
      };
      /**
       * @param {?} configModel
       * @return {?}
       */

      function andValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            validatorNames = Object.keys(config.validation);
            var
            /** @type {?} */
            failed = false;

            for (var _i3 = 0, _validatorNames = validatorNames; _i3 < _validatorNames.length; _i3++) {
              var
              /** @type {?} */
              validatorName = _validatorNames[_i3];
              failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
              if (failed) break;
            }

            if (failed) return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function orValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            validatorNames = Object.keys(config.validation);
            var
            /** @type {?} */
            failed = false;

            for (var _i4 = 0, _validatorNames2 = validatorNames; _i4 < _validatorNames2.length; _i4++) {
              var
              /** @type {?} */
              validatorName = _validatorNames2[_i4];
              failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
              if (!failed) break;
            }

            if (failed) return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }
      /**
       * @param {?} configModel
       * @return {?}
       */


      function notValidator(configModel) {
        return function (control) {
          var
          /** @type {?} */
          config = getConfigObject(configModel, control);

          if (ValidatorValueChecker.pass(control, config)) {
            var
            /** @type {?} */
            validatorNames = Object.keys(config.validation);
            var
            /** @type {?} */
            failed = false;

            for (var _i5 = 0, _validatorNames3 = validatorNames; _i5 < _validatorNames3.length; _i5++) {
              var
              /** @type {?} */
              validatorName = _validatorNames3[_i5];
              failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
              if (!failed) break;
            }

            if (!failed) return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
          }

          return ObjectMaker["null"]();
        };
      }

      var LOGICAL_VALIDATORS = {
        and: andValidator,
        or: orValidator,
        not: notValidator
      };
      var ASYNC = "async";
      var ENTITY_OBJECT = "entityObject";

      var RxFormBuilder = /*#__PURE__*/function (_BaseFormBuilder) {
        _inherits(RxFormBuilder, _BaseFormBuilder);

        var _super4 = _createSuper(RxFormBuilder);

        function RxFormBuilder() {
          var _this21;

          _classCallCheck(this, RxFormBuilder);

          _this21 = _super4.call(this);
          _this21.conditionalObjectProps = [];
          _this21.conditionalValidationInstance = {};
          _this21.builderConfigurationConditionalObjectProps = [];
          _this21.formGroupPropOtherValidator = {};
          _this21.currentFormGroupPropOtherValidator = {};
          _this21.isNested = false;
          _this21.isGroupCalled = false;
          _this21.isNestedBinding = false;
          return _this21;
        }
        /**
         * @param {?} instanceFunc
         * @param {?} entityObject
         * @return {?}
         */


        _createClass(RxFormBuilder, [{
          key: "getInstanceContainer",
          value: function getInstanceContainer(instanceFunc, entityObject) {
            return this.instaceProvider(instanceFunc, entityObject);
          }
          /**
           * @param {?} formGroup
           * @param {?} object
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(formGroup, object) {
            for (var
            /** @type {?} */
            col in object) {
              var
              /** @type {?} */
              control = formGroup.get([col]);
              control.setValue(object[col]);
              control.updateValueAndValidity();
            }
          }
          /**
           * @param {?} fomrBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "extractExpressions",
          value: function extractExpressions(fomrBuilderConfiguration) {
            if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
              for (var
              /** @type {?} */
              property in fomrBuilderConfiguration.dynamicValidation) {
                for (var
                /** @type {?} */
                decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
                  if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
                    var
                    /** @type {?} */
                    columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
                    defaultContainer.addChangeValidation(this.conditionalValidationInstance, property, columns);
                  }
                }
              }
            }

            return null;
          }
          /**
           * @param {?} property
           * @param {?} propertyValidators
           * @param {?} propValidationConfig
           * @return {?}
           */

        }, {
          key: "addAsyncValidation",
          value: function addAsyncValidation(property, propertyValidators, propValidationConfig) {
            var
            /** @type {?} */
            asyncValidators = [];

            if (propertyValidators) {
              var _iterator31 = _createForOfIteratorHelper(propertyValidators),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var propertyValidator = _step31.value;
                  if (propertyValidator.isAsync) propertyValidator.config.forEach(function (t) {
                    asyncValidators.push(t);
                  });
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }

            if (propValidationConfig && propValidationConfig[ASYNC]) {
              propValidationConfig[ASYNC].forEach(function (t) {
                asyncValidators.push(t);
              });
            }

            return asyncValidators;
          }
          /**
           * @param {?} property
           * @param {?} propertyValidators
           * @param {?} propValidationConfig
           * @param {?} instance
           * @param {?} entity
           * @return {?}
           */

        }, {
          key: "addFormControl",
          value: function addFormControl(property, propertyValidators, propValidationConfig, instance, entity) {
            var
            /** @type {?} */
            validators = [];
            var
            /** @type {?} */
            columns = [];

            if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name] || this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) {
              var
              /** @type {?} */
              props = [];
              if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) instance.conditionalValidationProps[property.name].forEach(function (t) {
                return props.push(t);
              });
              if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(function (t) {
                return props.push(t);
              });
              validators.push(conditionalChangeValidator(props));
            }

            if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
              var
              /** @type {?} */
              propConditions = [];
              if (this.conditionalObjectProps) propConditions = this.conditionalObjectProps.filter(function (t) {
                return t.propName == property.name;
              });
              if (this.builderConfigurationConditionalObjectProps) this.builderConfigurationConditionalObjectProps.filter(function (t) {
                return t.propName == property.name;
              }).forEach(function (t) {
                return propConditions.push(t);
              });
              propConditions.forEach(function (t) {
                if (t.referencePropName && columns.indexOf(t.referencePropName) == -1) columns.push(t.referencePropName);
              });
              if (columns.length > 0) validators.push(conditionalChangeValidator(columns));
            }

            var _iterator32 = _createForOfIteratorHelper(propertyValidators),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var propertyValidator = _step32.value;
                if (!propertyValidator.isAsync) switch (propertyValidator.annotationType) {
                  case AnnotationTypes.rule:
                    validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config, entity));
                    break;

                  case AnnotationTypes.and:
                  case AnnotationTypes.or:
                  case AnnotationTypes.not:
                    validators.push(LOGICAL_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                    break;

                  default:
                    validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                    break;
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            if (propValidationConfig) this.additionalValidation(validators, propValidationConfig);
            if (this.currentFormGroupPropOtherValidator[property.name]) this.currentFormGroupPropOtherValidator[property.name].forEach(function (t) {
              validators.push(t);
            });
            return validators;
          }
          /**
           * @param {?} validations
           * @param {?} propValidationConfig
           * @return {?}
           */

        }, {
          key: "additionalValidation",
          value: function additionalValidation(validations, propValidationConfig) {
            for (var
            /** @type {?} */
            col in AnnotationTypes) {
              if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
                validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
              } else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]]) validations.push(propValidationConfig[col]);
            }
          }
          /**
           * @template T
           * @param {?} object
           * @param {?} formBuilderConfiguration
           * @param {?} propertyName
           * @param {?=} isSameObjectConstructor
           * @return {?}
           */

        }, {
          key: "getEntity",
          value: function getEntity(object, formBuilderConfiguration, propertyName) {
            var isSameObjectConstructor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName]) return formBuilderConfiguration.genericEntities[propertyName];
            return isSameObjectConstructor ? object.constructor : undefined;
          }
          /**
           * @param {?} object
           * @param {?} propertyInfo
           * @param {?} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "getObjectPropertyInstance",
          value: function getObjectPropertyInstance(object, propertyInfo, formBuilderConfiguration) {
            if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name]) return object[propertyInfo.name].constructor;else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0) return object[propertyInfo.name][0].constructor;
            return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
          }
          /**
           * @template T
           * @param {?} instanceContainer
           * @param {?} object
           * @param {?} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "checkObjectPropAdditionalValidation",
          value: function checkObjectPropAdditionalValidation(instanceContainer, object, formBuilderConfiguration) {
            var _this22 = this;

            var
            /** @type {?} */
            props = instanceContainer.properties.filter(function (t) {
              return t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY;
            });
            props.forEach(function (t) {
              var
              /** @type {?} */
              entity = t.entity;
              if (!t.entity) entity = _this22.getObjectPropertyInstance(object, t, formBuilderConfiguration);

              if (entity) {
                var
                /** @type {?} */
                instance = _this22.getInstanceContainer(entity, null);

                if (instance.conditionalValidationProps) {
                  for (var
                  /** @type {?} */
                  key in instance.conditionalValidationProps) {
                    var
                    /** @type {?} */
                    prop = instanceContainer.properties.filter(function (t) {
                      return t.name == key;
                    })[0];

                    if (prop) {
                      if (!instanceContainer.conditionalValidationProps) instanceContainer.conditionalValidationProps = {};
                      if (!instanceContainer.conditionalValidationProps[key]) instanceContainer.conditionalValidationProps[key] = [];
                      instance.conditionalValidationProps[key].forEach(function (x) {
                        if (t.propertyType != ARRAY_PROPERTY) instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));else instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
                      });
                    }
                  }
                }
              }
            });
          }
          /**
           * @param {?} model
           * @param {?=} entityObject
           * @param {?=} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "getObject",
          value: function getObject(model, entityObject, formBuilderConfiguration) {
            var
            /** @type {?} */
            json = {};
            if (typeof model == FUNCTION_STRING) json.model = model;

            if (typeof model == FUNCTION_STRING && entityObject instanceof FormBuilderConfiguration) {
              json.entityObject = this.createClassObject(json.model, entityObject);
            }

            if (entityObject && !(entityObject instanceof FormBuilderConfiguration)) json.entityObject = entityObject;
            if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration) json.formBuilderConfiguration = entityObject;else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
              json.formBuilderConfiguration = formBuilderConfiguration;
              json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
            }

            if (!entityObject) {
              if (typeof model == OBJECT_STRING) json.model = model.constructor;
              json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
            } else if (model && entityObject instanceof FormBuilderConfiguration && typeof model == OBJECT_STRING) {
              json[MODEL] = model.constructor;
              json[ENTITY_OBJECT] = this.createClassObject(json.model, json.formBuilderConfiguration, model);
            }

            return json;
          }
          /**
           * @param {?} groupObject
           * @param {?=} validatorConfig
           * @return {?}
           */

        }, {
          key: "group",
          value: function group(groupObject, validatorConfig) {
            var
            /** @type {?} */
            modelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

            var
            /** @type {?} */
            entityObject = {};
            this.formGroupPropOtherValidator = {};
            this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
            this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
            this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
            this.isGroupCalled = true;
            var
            /** @type {?} */
            formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
            this.isGroupCalled = false;
            this.formGroupPropOtherValidator = {};
            this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
            this.formGroupPropOtherValidator = {};
            return formGroup;
          }
          /**
           * @param {?} propName
           * @param {?} validatorConfig
           * @param {?} modelInstance
           * @return {?}
           */

        }, {
          key: "applyAllPropValidator",
          value: function applyAllPropValidator(propName, validatorConfig, modelInstance) {
            var _this23 = this;

            if (validatorConfig && validatorConfig.applyAllProps) {
              if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
                validatorConfig.applyAllProps.forEach(function (t) {
                  if (t.name == RX_WEB_VALIDATOR) {
                    t(propName, modelInstance);
                  } else {
                    if (!_this23.currentFormGroupPropOtherValidator[propName]) _this23.currentFormGroupPropOtherValidator[propName] = [];

                    _this23.currentFormGroupPropOtherValidator[propName].push(t);
                  }
                });
              }
            }
          }
          /**
           * @param {?} propName
           * @param {?} validatorConfig
           * @return {?}
           */

        }, {
          key: "dynamicValidationPropCheck",
          value: function dynamicValidationPropCheck(propName, validatorConfig) {
            return validatorConfig == undefined ? true : !validatorConfig.dynamicValidationConfigurationPropertyName ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
          }
          /**
           * @param {?} groupObject
           * @param {?} entityObject
           * @param {?} modelInstance
           * @param {?} validatorConfig
           * @return {?}
           */

        }, {
          key: "createValidatorFormGroup",
          value: function createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig) {
            for (var
            /** @type {?} */
            propName in groupObject) {
              var
              /** @type {?} */
              prop = groupObject[propName];

              if (prop instanceof Array && prop.length > 0 && typeof prop[0] != OBJECT_STRING) {
                var
                /** @type {?} */
                propValidators = prop.length > 1 && prop[1] instanceof Array ? prop[1] : prop.length == 2 ? [prop[1]] : [];
                var
                /** @type {?} */
                propertyAdded = false;

                for (var
                /** @type {?} */
                i = 0; i < propValidators.length; i++) {
                  if (propValidators[i].name == RX_WEB_VALIDATOR) {
                    propValidators[i](propName, modelInstance);
                    propertyAdded = true;
                  } else {
                    if (!this.currentFormGroupPropOtherValidator[propName]) this.currentFormGroupPropOtherValidator[propName] = [];
                    this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
                  }
                }

                if (!propertyAdded) defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
                  constructor: modelInstance
                });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
              } else if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
                  constructor: modelInstance
                });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
              } else if (prop instanceof Array) {
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                  entityObject[propName] = prop;
                } else {
                  var
                  /** @type {?} */
                  propModelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

                  if (typeof modelInstance == "function") modelInstance.constructor = modelInstance;
                  defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
                  entityObject[propName] = [];

                  var _iterator33 = _createForOfIteratorHelper(prop),
                      _step33;

                  try {
                    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                      var row = _step33.value;
                      var
                      /** @type {?} */
                      jObject = {};
                      entityObject[propName].push(jObject);
                      this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
                    }
                  } catch (err) {
                    _iterator33.e(err);
                  } finally {
                    _iterator33.f();
                  }
                }
              } else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl)) {
                var
                /** @type {?} */
                formGroup = prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] ? prop.controls[0] : prop;

                if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || prop instanceof RxFormGroup)) {
                  formGroup = this.group(formGroup.controls);
                }

                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || prop instanceof RxFormGroup) {
                  entityObject[propName] = prop;
                  defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
                } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                  entityObject[propName] = prop;
                  defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
                } else {
                  if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
                    this.formGroupPropOtherValidator[propName] = {};
                    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];

                    var
                    /** @type {?} */
                    _propModelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

                    entityObject[propName] = {};
                    entityObject[propName].constructor = _propModelInstance.constructor;
                    defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance);
                    var
                    /** @type {?} */
                    objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
                    this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
                  } else entityObject[propName] = groupObject[propName];
                }
              }

              if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                entityObject[propName] = prop;
              } else if (prop && prop.length > 0 && typeof prop[0] != OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])) {
                entityObject[propName] = prop[0];
              } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                entityObject[propName] = prop;
              } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : {
                  constructor: modelInstance
                });
              }
            }
          }
          /**
           * @param {?} validatorConfig
           * @param {?} entityObject
           * @param {?} rootPropertyName
           * @param {?=} arrayPropertyName
           * @return {?}
           */

        }, {
          key: "getValidatorConfig",
          value: function getValidatorConfig(validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
            var
            /** @type {?} */
            validationProps = {};
            var
            /** @type {?} */
            excludeProps = [];
            var
            /** @type {?} */
            includeProps = [];
            var
            /** @type {?} */
            ignoreUndefinedProps = [];

            if (validatorConfig) {
              for (var
              /** @type {?} */
              propName in validatorConfig.dynamicValidation) {
                if (propName.indexOf(rootPropertyName) != -1 || arrayPropertyName && propName.indexOf(arrayPropertyName) != -1) {
                  var
                  /** @type {?} */
                  splitProp = propName.split(".")[1];
                  if (splitProp) validationProps[splitProp] = validatorConfig.dynamicValidation[propName];
                }
              }

              if (validatorConfig.excludeProps) excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
              if (validatorConfig.includeProps) includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
              if (validatorConfig.ignoreUndefinedProps) ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
              return {
                ignoreUndefinedProps: ignoreUndefinedProps,
                includeProps: includeProps,
                dynamicValidation: validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps,
                excludeProps: excludeProps
              };
            }

            return {};
          }
          /**
           * @param {?} properties
           * @param {?} rootPropertyName
           * @param {?=} isIgnoreProp
           * @return {?}
           */

        }, {
          key: "getProps",
          value: function getProps(properties, rootPropertyName) {
            var isIgnoreProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var
            /** @type {?} */
            props = [];

            var _iterator34 = _createForOfIteratorHelper(properties),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _prop = _step34.value;

                if (_prop.indexOf(rootPropertyName) != -1) {
                  var
                  /** @type {?} */
                  splitProps = _prop.split(".");

                  if (splitProps.length == 2) {
                    props.push(splitProps[1]);
                  } else if (splitProps.length > 2) {
                    splitProps.splice(0, 1);
                    props.push(splitProps.join("."));
                  }
                }
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            if (isIgnoreProp && properties.filter(function (x) {
              return x == rootPropertyName.replace('.', '');
            }).length == 1) props.push(':self:');
            return props;
          }
          /**
           * @template T
           * @param {?} model
           * @param {?=} entityObject
           * @param {?=} formBuilderConfiguration
           * @return {?}
           */

        }, {
          key: "formGroup",
          value: function formGroup(model, entityObject, formBuilderConfiguration) {
            var _this24 = this;

            var
            /** @type {?} */
            json = this.getObject(model, entityObject, formBuilderConfiguration);
            model = json.model;
            entityObject = json.entityObject;

            if (entityObject.constructor != model && !this.isGroupCalled) {
              entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
            }

            formBuilderConfiguration = json.formBuilderConfiguration;
            if (formBuilderConfiguration) this.extractExpressions(formBuilderConfiguration);
            var
            /** @type {?} */
            instanceContainer = this.getInstanceContainer(model, entityObject);
            this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
            var
            /** @type {?} */
            formGroupObject = {};
            var
            /** @type {?} */
            additionalValidations = {};
            instanceContainer.properties.forEach(function (property) {
              var
              /** @type {?} */
              isIncludeProp = true;

              if (formBuilderConfiguration) {
                if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0) isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
                if (formBuilderConfiguration.dynamicValidation) additionalValidations = formBuilderConfiguration.dynamicValidation;
                if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0) isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;

                if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
                  isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
                }
              }

              if (property.ignore) isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);

              if (isIncludeProp) {
                switch (property.propertyType) {
                  case PROPERTY:
                    if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || entityObject[property.name] instanceof RxFormControl)) {
                      var
                      /** @type {?} */
                      propertyValidators = instanceContainer.propertyAnnotations.filter(function (t) {
                        return t.propertyName == property.name;
                      });
                      formGroupObject[property.name] = new RxFormControl(_get(_getPrototypeOf(RxFormBuilder.prototype), "sanitizeValue", _this24).call(_this24, instanceContainer, property.name, _get(_getPrototypeOf(RxFormBuilder.prototype), "getDefaultValue", _this24).call(_this24, property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject)), _this24.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject), _this24.addAsyncValidation(property, propertyValidators, additionalValidations[property.name]), json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
                      _this24.isNested = false;
                    } else formGroupObject[property.name] = _get(_getPrototypeOf(RxFormBuilder.prototype), "getDefaultValue", _this24).call(_this24, property, entityObject[property.name], formBuilderConfiguration);

                    break;

                  case OBJECT_PROPERTY:
                    var
                    /** @type {?} */
                    objectValue = entityObject[property.name];

                    if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || objectValue instanceof RxFormGroup)) {
                      _this24.isNestedBinding = _this24.isNested = true;
                      if (instanceContainer && instanceContainer.conditionalObjectProps) _this24.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) {
                        return t.objectPropName == property.name;
                      });
                      if (_this24.conditionalValidationInstance && _this24.conditionalValidationInstance.conditionalObjectProps) _this24.builderConfigurationConditionalObjectProps = _this24.conditionalValidationInstance.conditionalObjectProps.filter(function (t) {
                        return t.objectPropName == property.name;
                      });
                      if (_this24.formGroupPropOtherValidator[property.name]) _this24.currentFormGroupPropOtherValidator = _this24.formGroupPropOtherValidator[property.name];

                      var
                      /** @type {?} */
                      objectValidationConfig = _this24.getValidatorConfig(formBuilderConfiguration, objectValue, "".concat(property.name, "."));

                      var
                      /** @type {?} */
                      entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                      formGroupObject[property.name] = _this24.formGroup(entity || property.entity || _this24.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
                      _this24.conditionalObjectProps = [];
                      _this24.builderConfigurationConditionalObjectProps = [];
                      _this24.isNestedBinding = _this24.isNested = false;
                    } else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || objectValue instanceof RxFormGroup) formGroupObject[property.name] = objectValue;

                    break;

                  case ARRAY_PROPERTY:
                    var
                    /** @type {?} */
                    arrayObjectValue = entityObject[property.name];

                    if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])) {
                      var formArrayGroup;

                      (function () {
                        _this24.isNestedBinding = _this24.isNested = true;

                        /** @type {?} */
                        formArrayGroup = [];
                        var
                        /** @type {?} */
                        index = 0;
                        var
                        /** @type {?} */
                        entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;

                        var _iterator35 = _createForOfIteratorHelper(arrayObjectValue),
                            _step35;

                        try {
                          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                            var subObject = _step35.value;
                            if (instanceContainer && instanceContainer.conditionalObjectProps) _this24.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) {
                              return t.objectPropName == property.name && t.arrayIndex == index;
                            });
                            if (_this24.conditionalValidationInstance && _this24.conditionalValidationInstance.conditionalObjectProps) _this24.builderConfigurationConditionalObjectProps = _this24.conditionalValidationInstance.conditionalObjectProps.filter(function (t) {
                              return t.objectPropName == property.name && t.arrayIndex == index;
                            });
                            if (_this24.formGroupPropOtherValidator[property.name]) _this24.currentFormGroupPropOtherValidator = _this24.formGroupPropOtherValidator[property.name];

                            var
                            /** @type {?} */
                            _objectValidationConfig = _this24.getValidatorConfig(formBuilderConfiguration, subObject, "".concat(property.name, "."), "".concat(property.name, "[").concat(index, "]."));

                            formArrayGroup.push(_this24.formGroup(entity || property.entity || _this24.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, _objectValidationConfig));
                            index++;
                            _this24.conditionalObjectProps = [];
                            _this24.builderConfigurationConditionalObjectProps = [];
                          }
                        } catch (err) {
                          _iterator35.e(err);
                        } finally {
                          _iterator35.f();
                        }

                        formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, null, null, property.arrayConfig);
                        _this24.isNestedBinding = _this24.isNested = false;
                      })();
                    } else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) formGroupObject[property.name] = arrayObjectValue;

                    break;
                }
              }
            });

            if (!this.isNested) {
              this.conditionalValidationInstance = {};
              this.builderConfigurationConditionalObjectProps = [];
            }

            var
            /** @type {?} */
            formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, undefined);
            if (!this.isNestedBinding && !this.isGroupCalled) formGroup.refreshDisable();
            return formGroup;
          }
        }]);

        return RxFormBuilder;
      }(BaseFormBuilder);

      RxFormBuilder.ɵfac = function RxFormBuilder_Factory(t) {
        return new (t || RxFormBuilder)();
      };

      RxFormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RxFormBuilder,
        factory: RxFormBuilder.ɵfac
      });
      /**
       * @nocollapse
       */

      RxFormBuilder.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxFormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @abstract
       */


      var BaseDirective = /*#__PURE__*/function () {
        function BaseDirective() {
          _classCallCheck(this, BaseDirective);
        }

        _createClass(BaseDirective, [{
          key: "applyValidations",

          /**
           * @param {?} controls
           * @param {?=} model
           * @return {?}
           */
          value: function applyValidations(controls) {
            var _this25 = this;

            var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (this.model) {
              var
              /** @type {?} */
              modelConfig = defaultContainer.get(model || this.model.constructor);

              if (modelConfig) {
                modelConfig.properties.forEach(function (property) {
                  if (controls[property.name]) {
                    switch (property.propertyType) {
                      case PROPERTY:
                        _this25.setValidatorConfig(controls[property.name], modelConfig, property);

                        break;

                      case OBJECT_PROPERTY:
                        _this25.applyValidations(controls[property.name].controls, property.entity);

                        break;
                    }
                  }
                });
              }
            }
          }
          /**
           * @param {?} control
           * @param {?} modelConfig
           * @param {?} property
           * @return {?}
           */

        }, {
          key: "setValidatorConfig",
          value: function setValidatorConfig(control, modelConfig, property) {
            var
            /** @type {?} */
            annotations = modelConfig.propertyAnnotations.filter(function (t) {
              return t.propertyName == property.name;
            });
            annotations.forEach(function (annotation) {
              if (!control[TEMPLATE_VALIDATION_CONFIG]) control[TEMPLATE_VALIDATION_CONFIG] = {};
              ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
            });
          }
        }]);

        return BaseDirective;
      }();

      BaseDirective.ɵfac = function BaseDirective_Factory(t) {
        return new (t || BaseDirective)();
      };

      BaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseDirective,
        inputs: {
          model: "model"
        }
      });
      BaseDirective.propDecorators = {
        'model': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var RxwebFormDirective = /*#__PURE__*/function (_BaseDirective) {
        _inherits(RxwebFormDirective, _BaseDirective);

        var _super5 = _createSuper(RxwebFormDirective);

        function RxwebFormDirective() {
          var _this26;

          _classCallCheck(this, RxwebFormDirective);

          _this26 = _super5.apply(this, arguments);
          _this26.clearTimeoutNumber = 0;
          _this26.validationRule = {};
          return _this26;
        }
        /**
         * @return {?}
         */


        _createClass(RxwebFormDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
              this.expressionProcessor(this.formGroup.controls);
              this.setConditionalValidator(this.formGroup.controls);
            } else if (this.ngForm) {
              this.configureModelValidations();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "configureModelValidations",
          value: function configureModelValidations() {
            var _this27 = this;

            this.clearTimeoutNumber = setTimeout(function () {
              clearTimeout(_this27.clearTimeoutNumber);

              _this27.applyValidations(_this27.ngForm.form.controls);

              _this27.expressionProcessor(_this27.ngForm.form.controls);

              _this27.setConditionalValidator(_this27.ngForm.form.controls);

              _this27.updateValueAndValidity(_this27.ngForm.form.controls);
            }, 500);
          }
          /**
           * @param {?} controls
           * @return {?}
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity(controls) {
            var _this28 = this;

            Object.keys(controls).forEach(function (key) {
              if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) _this28.updateValueAndValidity(controls[key].controls);else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) _this28.updateValueAndValidity(controls[key].controls);else controls[key].updateValueAndValidity();
            });
          }
          /**
           * @param {?} controls
           * @param {?=} rootFieldName
           * @return {?}
           */

        }, {
          key: "expressionProcessor",
          value: function expressionProcessor(controls) {
            var _this29 = this;

            var rootFieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            Object.keys(controls).forEach(function (fieldName) {
              var
              /** @type {?} */
              formControl = controls[fieldName];

              if (formControl.validatorConfig) {
                Object.keys(AnnotationTypes).forEach(function (validatorName) {
                  if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
                    var
                    /** @type {?} */
                    columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);
                    defaultContainer.addChangeValidation(_this29.validationRule, rootFieldName + fieldName, columns);
                  }

                  if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
                    var
                    /** @type {?} */
                    _columns2 = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);

                    defaultContainer.addChangeValidation(_this29.validationRule, rootFieldName + fieldName, _columns2);
                  }

                  if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
                    Object.keys(formControl.validatorConfig[validatorName].validation).forEach(function (t) {
                      if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean") defaultContainer.setLogicalConditional(_this29.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
                    });
                  } else if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime || validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName || (validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName)) {
                    defaultContainer.setConditionalValueProp(_this29.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
                  }
                });
              } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this29.expressionProcessor(formControl.controls, "".concat(fieldName, "."));
              } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                if (formControl.controls) formControl.controls.forEach(function (t, i) {
                  if (t.controls) _this29.expressionProcessor(t.controls, "".concat(fieldName, "[]"));
                });
              }
            });
          }
          /**
           * @param {?} controls
           * @return {?}
           */

        }, {
          key: "setConditionalValidator",
          value: function setConditionalValidator(controls) {
            var _this30 = this;

            Object.keys(controls).forEach(function (fieldName) {
              if (_this30.validationRule.conditionalValidationProps && _this30.validationRule.conditionalValidationProps[fieldName]) {
                controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(_this30.validationRule.conditionalValidationProps[fieldName]);
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return RxwebFormDirective;
      }(BaseDirective);

      RxwebFormDirective.ɵfac = function RxwebFormDirective_Factory(t) {
        return ɵRxwebFormDirective_BaseFactory(t || RxwebFormDirective);
      };

      RxwebFormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RxwebFormDirective,
        selectors: [["", "formGroup", ""], ["", "rxwebForm", ""]],
        inputs: {
          formGroup: "formGroup",
          ngForm: ["rxwebForm", "ngForm"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /**
       * @nocollapse
       */

      RxwebFormDirective.ctorParameters = function () {
        return [];
      };

      RxwebFormDirective.propDecorators = {
        'formGroup': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'ngForm': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['rxwebForm']
        }]
      };

      var ɵRxwebFormDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RxwebFormDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxwebFormDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroup],[rxwebForm]'
          }]
        }], null, {
          formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ngForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxwebForm']
          }]
        });
      })();

      var DecimalProvider = /*#__PURE__*/function () {
        /**
         * @param {?} decimalPipe
         * @param {?} localeId
         */
        function DecimalProvider(decimalPipe, localeId) {
          _classCallCheck(this, DecimalProvider);

          this.decimalPipe = decimalPipe;
          this.localeId = localeId;
          this.decimalSeperator = ".";
          this.groupSeperator = ",";
          this.isSetConfig = false;
          this.decimalSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NumberSymbol"].Decimal);
          this.groupSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NumberSymbol"].Group);
          this.setSymbolInConfig();
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(DecimalProvider, [{
          key: "replacer",
          value: function replacer(value) {
            value = String(value);
            if (!this.isSetConfig) this.bindConfig();
            value = value.split(this.groupSeperator).join(BLANK);
            if (this.allowDecimalSymbol) value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
            var
            /** @type {?} */
            splitValue = value.split(this.decimalSeperator);
            value = splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1]) ? splitValue[0] : value;
            return value;
          }
          /**
           * @param {?} value
           * @param {?} digitsInfo
           * @return {?}
           */

        }, {
          key: "transFormDecimal",
          value: function transFormDecimal(value, digitsInfo) {
            value = String(value);
            return this.decimalPipe.transform(value.replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
          }
          /**
           * @return {?}
           */

        }, {
          key: "setSymbolInConfig",
          value: function setSymbolInConfig() {
            ReactiveFormConfig.number = {
              decimalSymbol: this.decimalSeperator,
              groupSymbol: this.groupSeperator
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "bindConfig",
          value: function bindConfig() {
            if (ReactiveFormConfig.json) {
              if (ReactiveFormConfig.json.localeId) this.localeId = ReactiveFormConfig.json.localeId;
              if (ReactiveFormConfig.json.allowDecimalSymbol) this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
            }

            this.isSetConfig = true;
          }
        }]);

        return DecimalProvider;
      }();

      DecimalProvider.ɵfac = function DecimalProvider_Factory(t) {
        return new (t || DecimalProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      };

      DecimalProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DecimalProvider,
        factory: DecimalProvider.ɵfac
      });
      /**
       * @nocollapse
       */

      DecimalProvider.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalProvider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();

      var HtmlControlTemplateDirective =
      /**
       * @param {?} templateRef
       */
      function HtmlControlTemplateDirective(templateRef) {
        _classCallCheck(this, HtmlControlTemplateDirective);

        this.templateRef = templateRef;
      };

      HtmlControlTemplateDirective.ɵfac = function HtmlControlTemplateDirective_Factory(t) {
        return new (t || HtmlControlTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      HtmlControlTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HtmlControlTemplateDirective,
        selectors: [["", "htmlControlTemplate", ""]],
        inputs: {
          type: ["htmlControlTemplate", "type"]
        }
      });
      /**
       * @nocollapse
       */

      HtmlControlTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      HtmlControlTemplateDirective.propDecorators = {
        'type': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['htmlControlTemplate']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlControlTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[htmlControlTemplate]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['htmlControlTemplate']
          }]
        });
      })();

      var ControlHostDirective = /*#__PURE__*/function () {
        /**
         * @param {?} viewContainerRef
         */
        function ControlHostDirective(viewContainerRef) {
          _classCallCheck(this, ControlHostDirective);

          this.viewContainerRef = viewContainerRef;
        }
        /**
         * @param {?} context
         * @return {?}
         */


        _createClass(ControlHostDirective, [{
          key: "ngOnDestroy",

          /**
           * @return {?}
           */
          value: function ngOnDestroy() {
            if (this.view) this.view.destroy();
            if (this.viewContainerRef) this.viewContainerRef.clear();
          }
        }, {
          key: "portal",
          set: function set(context) {
            if (context.templateRef) {
              if (this.view) {
                this.view.destroy();
                this.view = undefined;
              }

              this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
          }
        }]);

        return ControlHostDirective;
      }();

      ControlHostDirective.ɵfac = function ControlHostDirective_Factory(t) {
        return new (t || ControlHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      ControlHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlHostDirective,
        selectors: [["", "controlHost", ""]],
        inputs: {
          portal: ["controlHost", "portal"]
        }
      });
      /**
       * @nocollapse
       */

      ControlHostDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      ControlHostDirective.propDecorators = {
        'portal': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['controlHost']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[controlHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          portal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['controlHost']
          }]
        });
      })();
      /**
       * @abstract
       */


      var ControlExpressionProcess = /*#__PURE__*/function () {
        function ControlExpressionProcess() {
          _classCallCheck(this, ControlExpressionProcess);

          this.controlConfig = {};
          this.isProcessed = false;
        }
        /**
         * @param {?} control
         * @return {?}
         */


        _createClass(ControlExpressionProcess, [{
          key: "setModelConfig",
          value: function setModelConfig(control) {
            this.isProcessed = true;

            if (this.controlConfig && this.controlConfig.validatorConfig) {
              control[VALIDATOR_CONFIG] = this.controlConfig.validatorConfig;
              this.controlConfig = undefined;
            }
          }
        }]);

        return ControlExpressionProcess;
      }();

      ControlExpressionProcess.ɵfac = function ControlExpressionProcess_Factory(t) {
        return new (t || ControlExpressionProcess)();
      };

      ControlExpressionProcess.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlExpressionProcess,
        inputs: {
          name: "name",
          formControlName: "formControlName"
        }
      });
      ControlExpressionProcess.propDecorators = {
        'name': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'formControlName': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var BaseValidator = /*#__PURE__*/function (_ControlExpressionPro) {
        _inherits(BaseValidator, _ControlExpressionPro);

        var _super6 = _createSuper(BaseValidator);

        function BaseValidator() {
          _classCallCheck(this, BaseValidator);

          return _super6.apply(this, arguments);
        }

        _createClass(BaseValidator, [{
          key: "validation",

          /**
           * @param {?} control
           * @return {?}
           */
          value: function validation(control) {
            var
            /** @type {?} */
            result = null;

            var _iterator36 = _createForOfIteratorHelper(this.validators),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var validator = _step36.value;
                result = validator(control);
                if (result) break;
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "setEventName",
          value: function setEventName() {
            var
            /** @type {?} */
            eventName = '';

            switch (this.element.tagName) {
              case INPUT:
              case TEXTAREA:
                eventName = this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE ? CHANGE : INPUT;
                break;

              case SELECT:
                eventName = CHANGE;
                break;
            }

            this.eventName = eventName.toLowerCase();
          }
        }]);

        return BaseValidator;
      }(ControlExpressionProcess);

      BaseValidator.ɵfac = function BaseValidator_Factory(t) {
        return ɵBaseValidator_BaseFactory(t || BaseValidator);
      };

      BaseValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseValidator,
        inputs: {
          formControl: "formControl"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      BaseValidator.propDecorators = {
        'formControl': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var ɵBaseValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BaseValidator);

      var NGMODEL_BINDING = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RxFormControlDirective;
        }),
        multi: true
      };
      var ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
      var NUMERIC = "numeric";
      var IS_FORMAT = "isFormat";
      var DIGITS_INFO = "digitsInfo";

      var RxFormControlDirective = /*#__PURE__*/function (_BaseValidator) {
        _inherits(RxFormControlDirective, _BaseValidator);

        var _super7 = _createSuper(RxFormControlDirective);

        /**
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} decimalProvider
         */
        function RxFormControlDirective(elementRef, renderer, decimalProvider) {
          var _this31;

          _classCallCheck(this, RxFormControlDirective);

          _this31 = _super7.call(this);
          _this31.elementRef = elementRef;
          _this31.renderer = renderer;
          _this31.decimalProvider = decimalProvider;
          _this31.eventListeners = [];
          _this31.isNumericSubscribed = false;
          _this31.isFocusCalled = false;
          _this31.element = elementRef.nativeElement;

          _this31.setEventName();

          return _this31;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(RxFormControlDirective, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            var _this32 = this;

            var
            /** @type {?} */
            validators = [];
            Object.keys(APP_VALIDATORS).forEach(function (validatorName) {
              if (_this32[validatorName] || ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && _this32[validatorName] == BLANK) {
                validators.push(APP_VALIDATORS[validatorName](_this32[validatorName]));

                if (_this32.name && !(_this32.formControlName && _this32.formControl)) {
                  ApplicationUtil.configureControl(_this32.controlConfig, _this32[validatorName], validatorName);
                }
              }
            });
            if (validators.length > 0) this.validators = validators;

            if (this.numeric && (this.numeric.isFormat || this.numeric.digitsInfo)) {
              this.bindNumericElementEvent();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "blurEvent",
          value: function blurEvent() {
            if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
              var
              /** @type {?} */
              value = this.decimalProvider.transFormDecimal(this.formControl.value, this.numeric.digitsInfo);
              value = !this.numeric.isFormat ? this.decimalProvider.replacer(value) : value;
              this.setValueOnElement(value);
              this.isFocusCalled = false;
            }
          }
          /**
           * @param {?=} config
           * @return {?}
           */

        }, {
          key: "bindNumericElementEvent",
          value: function bindNumericElementEvent(config) {
            var _this33 = this;

            if (config) this.numeric = config;
            var
            /** @type {?} */
            listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
            this.eventListeners.push(listener);
            listener = this.renderer.listen(this.element, FOCUS, function (event) {
              if (!(_this33.formControl && _this33.formControl.errors && _this33.formControl.errors.numeric) && _this33.formControl.value != null) {
                var
                /** @type {?} */
                value = _this33.decimalProvider.replacer(_this33.element.value);

                _this33.setValueOnElement(value);

                _this33.isFocusCalled = true;
              }
            });
            this.eventListeners.push(listener);
          }
          /**
           * @return {?}
           */

        }, {
          key: "bindValueChangeEvent",
          value: function bindValueChangeEvent() {
            var _this34 = this;

            if (this.eventName != BLANK) {
              var
              /** @type {?} */
              listener = this.renderer.listen(this.element, this.eventName, function () {
                Object.keys(_this34.validationControls).forEach(function (fieldName) {
                  _this34.validationControls[fieldName].updateValueAndValidity();
                });
              });
              this.eventListeners.push(listener);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "subscribeNumericFormatter",
          value: function subscribeNumericFormatter() {
            if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG][NUMERIC] && (this.formControl[VALIDATOR_CONFIG][NUMERIC][IS_FORMAT] || this.formControl[VALIDATOR_CONFIG][NUMERIC][DIGITS_INFO])) {
              if (!this.isNumericSubscribed) {
                this.bindNumericElementEvent(this.formControl[VALIDATOR_CONFIG][NUMERIC]);
                this.isNumericSubscribed = true;
              }

              if (!this.isFocusCalled && RegexValidator.isNotBlank(this.formControl.value)) {
                this.blurEvent();
              }
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setValueOnElement",
          value: function setValueOnElement(value) {
            this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "setTemplateValidators",
          value: function setTemplateValidators(control) {
            for (var
            /** @type {?} */
            validatorName in control[VALIDATOR_CONFIG]) {
              this[validatorName] = control[VALIDATOR_CONFIG][validatorName];
            }

            delete control[TEMPLATE_VALIDATION_CONFIG];
            delete control[VALIDATOR_CONFIG];
            this.ngOnInit();
          }
          /**
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "updateOnElementClass",
          value: function updateOnElementClass(element) {
            var
            /** @type {?} */
            previousClassName = '';
            return function (className) {
              if (previousClassName) element.classList.remove(previousClassName);
              if (className) element.classList.add(className);
              previousClassName = className;
            };
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "setValidatorConfig",
          value: function setValidatorConfig(control) {
            if (!this.formControl) {
              this.formControl = control;
              var
              /** @type {?} */
              rxFormControl =
              /** @type {?} */
              this.formControl;
              if (rxFormControl.updateOnElementClass) rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
            }

            this.subscribeNumericFormatter();
            if (control[TEMPLATE_VALIDATION_CONFIG]) this.setTemplateValidators(control);

            if (control[CONDITIONAL_VALIDATOR]) {
              this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
              delete control[CONDITIONAL_VALIDATOR];
            }
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "validate",
          value: function validate(control) {
            this.setValidatorConfig(control);
            if (this.conditionalValidator) this.conditionalValidator(control);
            if (!this.isProcessed) this.setModelConfig(control);
            return this.validators && this.validators.length > 0 ? this.validation(control) : null;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.controls = undefined;
            var
            /** @type {?} */
            eventCount = this.eventListeners.length;

            for (var
            /** @type {?} */
            i = 0; i < eventCount; i++) {
              this.eventListeners[0]();
              this.eventListeners.splice(0, 1);
            }

            this.eventListeners = [];
          }
        }, {
          key: "validationControls",
          set: function set(value) {
            this.controls = value;
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.controls;
          }
        }]);

        return RxFormControlDirective;
      }(BaseValidator);

      RxFormControlDirective.ɵfac = function RxFormControlDirective_Factory(t) {
        return new (t || RxFormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DecimalProvider));
      };

      RxFormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RxFormControlDirective,
        selectors: [["", "ngModel", ""], ["", "formControlName", ""], ["", "formControl", ""]],
        inputs: {
          numeric: "numeric",
          alpha: "alpha",
          alphaNumeric: "alphaNumeric",
          ascii: "ascii",
          compare: "compare",
          compose: "compose",
          contains: "contains",
          creditCard: "creditCard",
          dataUri: "dataUri",
          different: "different",
          digit: "digit",
          email: "email",
          endsWith: "endsWith",
          even: "even",
          extension: "extension",
          factor: "factor",
          fileSize: "fileSize",
          greaterThanEqualTo: "greaterThanEqualTo",
          greaterThan: "greaterThan",
          hexColor: "hexColor",
          json: "json",
          latitude: "latitude",
          latLong: "latLong",
          leapYear: "leapYear",
          lessThan: "lessThan",
          lessThanEqualTo: "lessThanEqualTo",
          longitude: "longitude",
          lowerCase: "lowerCase",
          mac: "mac",
          maxDate: "maxDate",
          maxLength: "maxLength",
          maxNumber: "maxNumber",
          minDate: "minDate",
          minLength: "minLength",
          minNumber: "minNumber",
          odd: "odd",
          password: "password",
          port: "port",
          primeNumber: "primeNumber",
          required: "required",
          range: "range",
          rule: "rule",
          startsWith: "startsWith",
          time: "time",
          upperCase: "upperCase",
          url: "url",
          unique: "unique",
          notEmpty: "notEmpty",
          cusip: "cusip",
          grid: "grid",
          date: "date"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NGMODEL_BINDING]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /**
       * @nocollapse
       */

      RxFormControlDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: DecimalProvider
        }];
      };

      RxFormControlDirective.propDecorators = {
        'alpha': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'alphaNumeric': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'ascii': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'compare': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'compose': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'contains': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'creditCard': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'dataUri': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'different': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'digit': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'email': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'endsWith': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'even': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'extension': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'factor': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'fileSize': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'greaterThanEqualTo': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'greaterThan': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'hexColor': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'json': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'latitude': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'latLong': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'leapYear': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'lessThan': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'lessThanEqualTo': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'longitude': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'lowerCase': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'mac': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'maxDate': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'maxLength': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'maxNumber': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'minDate': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'minLength': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'minNumber': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'numeric': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'odd': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'password': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'port': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'primeNumber': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'required': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'range': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'rule': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'startsWith': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'time': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'upperCase': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'url': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'unique': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'notEmpty': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'cusip': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'grid': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'date': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxFormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModel],[formControlName],[formControl]',
            providers: [NGMODEL_BINDING]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: DecimalProvider
          }];
        }, {
          numeric: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          alpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          alphaNumeric: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ascii: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compare: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contains: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          creditCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataUri: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          different: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          digit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          endsWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          even: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          extension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          factor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          greaterThanEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          greaterThan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hexColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          json: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          latLong: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          leapYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lessThan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lessThanEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lowerCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mac: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          odd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          port: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          primeNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          startsWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          upperCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unique: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          notEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cusip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var VALIDATOR_CONFIG$1 = "validatorConfig";
      var FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];

      var FileControlDirective = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         */
        function FileControlDirective(elementRef) {
          _classCallCheck(this, FileControlDirective);

          this.elementRef = elementRef;
          this.isProcessed = false;
          this.validators = [];

          this.onChange = function (_) {};

          this.onTouched = function () {};

          this.element = elementRef.nativeElement;
        }
        /**
         * @param {?} element
         * @return {?}
         */


        _createClass(FileControlDirective, [{
          key: "onChangeCall",
          value: function onChangeCall(element) {
            var
            /** @type {?} */
            files = element.files;
            if (this.writeFile) this.onChange(files);else {
              if (files.length > 0) this.onChange(element.value);else this.onChange(undefined);
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {}
          /**
           * @param {?} invocation
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(invocation) {
            this.onChange = invocation;
          }
          /**
           * @param {?} invocation
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(invocation) {
            this.onTouched = invocation;
          }
          /**
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "setConfig",

          /**
           * @param {?} control
           * @return {?}
           */
          value: function setConfig(control) {
            var _this35 = this;

            FILE_VALIDATOR_NAMES.forEach(function (t) {
              if (!_this35[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t]) _this35[t] = control[VALIDATOR_CONFIG$1][t];
            });
            this.isProcessed = true;
          }
          /**
           * @param {?} validatorName
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "pushValidator",
          value: function pushValidator(validatorName, config) {
            if (config) this.validators.push(APP_VALIDATORS[validatorName](config));
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "validate",
          value: function validate(control) {
            if (!this.isProcessed) this.setConfig(control);
            var
            /** @type {?} */
            result = null;

            var _iterator37 = _createForOfIteratorHelper(this.validators),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var validator = _step37.value;
                result = validator(control, this.element.files);
                if (result) break;
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            return result;
          }
        }, {
          key: "extension",
          set: function set(config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
          }
          /**
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "fileSize",
          set: function set(config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
          }
          /**
           * @param {?} config
           * @return {?}
           */

        }, {
          key: "file",
          set: function set(config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
          }
        }]);

        return FileControlDirective;
      }();

      FileControlDirective.ɵfac = function FileControlDirective_Factory(t) {
        return new (t || FileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileControlDirective,
        selectors: [["input", "type", "file"]],
        hostBindings: function FileControlDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileControlDirective_change_HostBindingHandler($event) {
              return ctx.onChangeCall($event.target);
            })("blur", function FileControlDirective_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          extension: "extension",
          fileSize: "fileSize",
          file: "file",
          writeFile: "writeFile"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: FileControlDirective,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return FileControlDirective;
          }),
          multi: true
        }])]
      });
      /**
       * @nocollapse
       */

      FileControlDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileControlDirective.propDecorators = {
        'writeFile': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'extension': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'fileSize': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'file': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "input[type=file]",
            host: {
              "(change)": "onChangeCall($event.target)",
              "(blur)": "onTouched()"
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
              useExisting: FileControlDirective,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return FileControlDirective;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          extension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          writeFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var VALIDATOR_CONFIG$2 = "validatorConfig";

      var ImageFileControlDirective = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         */
        function ImageFileControlDirective(elementRef) {
          _classCallCheck(this, ImageFileControlDirective);

          this.elementRef = elementRef;
          this.isProcessed = false;
          this.element = elementRef.nativeElement;
        }
        /**
         * @param {?} config
         * @return {?}
         */


        _createClass(ImageFileControlDirective, [{
          key: "setConfig",

          /**
           * @param {?} control
           * @return {?}
           */
          value: function setConfig(control) {
            var
            /** @type {?} */
            image = "image";
            if (!this[image] && control[VALIDATOR_CONFIG$2] && control[VALIDATOR_CONFIG$2][image]) this[image] = control[VALIDATOR_CONFIG$2][image];
            this.isProcessed = true;
          }
          /**
           * @param {?} control
           * @return {?}
           */

        }, {
          key: "validate",
          value: function validate(control) {
            if (!this.isProcessed) this.setConfig(control);

            if (this.imageValidation) {
              return this.imageValidation(control, this.element.files);
            }

            return new Promise(function (resolve, reject) {
              resolve(null);
            });
          }
        }, {
          key: "image",
          set: function set(config) {
            this.imageValidation = APP_VALIDATORS.image(config);
          }
        }]);

        return ImageFileControlDirective;
      }();

      ImageFileControlDirective.ɵfac = function ImageFileControlDirective_Factory(t) {
        return new (t || ImageFileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ImageFileControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ImageFileControlDirective,
        selectors: [["input", "type", "file"]],
        inputs: {
          image: "image"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return ImageFileControlDirective;
          }),
          multi: true
        }])]
      });
      /**
       * @nocollapse
       */

      ImageFileControlDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      ImageFileControlDirective.propDecorators = {
        'image': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageFileControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "input[type=file]",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return ImageFileControlDirective;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var RxReactiveFormsModule = /*#__PURE__*/function () {
        function RxReactiveFormsModule() {
          _classCallCheck(this, RxReactiveFormsModule);
        }

        _createClass(RxReactiveFormsModule, null, [{
          key: "forRoot",

          /**
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: RxReactiveFormsModule,
              providers: []
            };
          }
        }]);

        return RxReactiveFormsModule;
      }();

      RxReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RxReactiveFormsModule
      });
      RxReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RxReactiveFormsModule_Factory(t) {
          return new (t || RxReactiveFormsModule)();
        },
        providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
      });
      /**
       * @nocollapse
       */

      RxReactiveFormsModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxReactiveFormsModule, {
          declarations: function declarations() {
            return [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
            exports: [RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
          }]
        }], null, null);
      })();
      /**
       * @param {?} annotationType
       * @param {?} config
       * @param {?=} isAsync
       * @return {?}
       */


      function baseDecoratorFunction(annotationType, config) {
        var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.init(target, parameterIndex, propertyKey, annotationType, config, isAsync);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function alpha(config) {
        return baseDecoratorFunction(AnnotationTypes.alpha, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function alphaNumeric(config) {
        return baseDecoratorFunction(AnnotationTypes.alphaNumeric, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function compare(config) {
        return baseDecoratorFunction(AnnotationTypes.compare, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function contains(config) {
        return baseDecoratorFunction(AnnotationTypes.contains, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function creditCard(config) {
        return baseDecoratorFunction(AnnotationTypes.creditCard, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function digit(config) {
        return baseDecoratorFunction(AnnotationTypes.digit, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function email(config) {
        return baseDecoratorFunction(AnnotationTypes.email, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function hexColor(config) {
        return baseDecoratorFunction(AnnotationTypes.hexColor, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function lowerCase(config) {
        return baseDecoratorFunction(AnnotationTypes.lowerCase, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function maxDate(config) {
        return baseDecoratorFunction(AnnotationTypes.maxDate, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function maxLength(config) {
        return baseDecoratorFunction(AnnotationTypes.maxLength, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function minDate(config) {
        return baseDecoratorFunction(AnnotationTypes.minDate, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function maxNumber(config) {
        return baseDecoratorFunction(AnnotationTypes.maxNumber, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function minLength(config) {
        return baseDecoratorFunction(AnnotationTypes.minLength, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function minNumber(config) {
        return baseDecoratorFunction(AnnotationTypes.minNumber, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function password(config) {
        return baseDecoratorFunction(AnnotationTypes.password, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function pattern(config) {
        return baseDecoratorFunction(AnnotationTypes.pattern, config);
      }
      /**
       * @template T
       * @param {?=} entity
       * @param {?=} config
       * @return {?}
       */


      function propArray(entity, config) {
        return function (target, propertyKey, parameterIndex) {
          var
          /** @type {?} */
          propertyInfo = {
            name: propertyKey,
            propertyType: ARRAY_PROPERTY,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined,
            arrayConfig: config ? {
              allowMaxIndex: config.allowMaxIndex,
              messageKey: config.messageKey
            } : undefined
          };
          defaultContainer.addProperty(target.constructor, propertyInfo);
        };
      }
      /**
       * @template T
       * @param {?=} entity
       * @param {?=} config
       * @return {?}
       */


      function propObject(entity, config) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.initPropertyObject(propertyKey, OBJECT_PROPERTY, entity, target, config);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function prop(config) {
        return function (target, propertyKey, parameterIndex) {
          var
          /** @type {?} */
          propertyInfo = {
            name: propertyKey,
            propertyType: PROPERTY,
            dataPropertyName: config ? config.name : undefined,
            defaultValue: config ? config.defaultValue : undefined,
            ignore: config ? config.ignore : undefined,
            isPrimaryKey: config ? config.isPrimaryKey : undefined
          };
          defaultContainer.addProperty(target.constructor, propertyInfo);
        };
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function range(config) {
        return baseDecoratorFunction(AnnotationTypes.range, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function required(config) {
        return baseDecoratorFunction(AnnotationTypes.required, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function upperCase(config) {
        return baseDecoratorFunction(AnnotationTypes.upperCase, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function time(config) {
        return baseDecoratorFunction(AnnotationTypes.time, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function url(config) {
        return baseDecoratorFunction(AnnotationTypes.url, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function json(config) {
        return baseDecoratorFunction(AnnotationTypes.json, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function greaterThan(config) {
        return baseDecoratorFunction(AnnotationTypes.greaterThan, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function greaterThanEqualTo(config) {
        return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function lessThanEqualTo(config) {
        return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function lessThan(config) {
        return baseDecoratorFunction(AnnotationTypes.lessThan, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function choice(config) {
        return baseDecoratorFunction(AnnotationTypes.choice, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function different(config) {
        return baseDecoratorFunction(AnnotationTypes.different, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function numeric(config) {
        return baseDecoratorFunction(AnnotationTypes.numeric, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function even(config) {
        return baseDecoratorFunction(AnnotationTypes.even, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function odd(config) {
        return baseDecoratorFunction(AnnotationTypes.odd, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function factor(config) {
        return baseDecoratorFunction(AnnotationTypes.factor, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function leapYear(config) {
        return baseDecoratorFunction(AnnotationTypes.leapYear, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function allOf(config) {
        return baseDecoratorFunction(AnnotationTypes.allOf, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function oneOf(config) {
        return baseDecoratorFunction(AnnotationTypes.oneOf, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function noneOf(config) {
        return baseDecoratorFunction(AnnotationTypes.noneOf, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function mac(config) {
        return baseDecoratorFunction(AnnotationTypes.mac, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function ascii(config) {
        return baseDecoratorFunction(AnnotationTypes.ascii, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function dataUri(config) {
        return baseDecoratorFunction(AnnotationTypes.dataUri, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function port(config) {
        return baseDecoratorFunction(AnnotationTypes.port, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function latLong(config) {
        return baseDecoratorFunction(AnnotationTypes.latLong, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function extension(config) {
        return baseDecoratorFunction(AnnotationTypes.extension, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function fileSize(config) {
        return baseDecoratorFunction(AnnotationTypes.fileSize, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function endsWith(config) {
        return baseDecoratorFunction(AnnotationTypes.endsWith, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function startsWith(config) {
        return baseDecoratorFunction(AnnotationTypes.startsWith, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function primeNumber(config) {
        return baseDecoratorFunction(AnnotationTypes.primeNumber, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function latitude(config) {
        return baseDecoratorFunction(AnnotationTypes.latitude, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function longitude(config) {
        return baseDecoratorFunction(AnnotationTypes.longitude, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function rule(config) {
        return baseDecoratorFunction(AnnotationTypes.rule, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function file(config) {
        return baseDecoratorFunction(AnnotationTypes.file, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function custom(config) {
        return baseDecoratorFunction(AnnotationTypes.custom, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function unique(config) {
        return baseDecoratorFunction(AnnotationTypes.unique, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function image(config) {
        return baseDecoratorFunction(AnnotationTypes.image, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function notEmpty(config) {
        return baseDecoratorFunction(AnnotationTypes.notEmpty, config);
      }
      /**
       * @param {?} validators
       * @return {?}
       */


      function async(validators) {
        return baseDecoratorFunction(AnnotationTypes.async, validators, true);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function cusip(config) {
        return baseDecoratorFunction(AnnotationTypes.cusip, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function grid(config) {
        return baseDecoratorFunction(AnnotationTypes.grid, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function date(config) {
        return baseDecoratorFunction(AnnotationTypes.date, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function disable(config) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.disabled);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function error(config) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.error);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function and(config) {
        return baseDecoratorFunction(AnnotationTypes.and, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function or(config) {
        return baseDecoratorFunction(AnnotationTypes.or, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function not(config) {
        return baseDecoratorFunction(AnnotationTypes.not, config);
      }
      /**
       * @return {?}
       */


      function trim$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.trim);
        };
      }
      /**
       * @return {?}
       */


      function ltrim$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.ltrim);
        };
      }
      /**
       * @return {?}
       */


      function rtrim$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.rtrim);
        };
      }
      /**
       * @param {?} chars
       * @return {?}
       */


      function blacklist$1(chars) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.blacklist, chars);
        };
      }
      /**
       * @param {?=} keepNewLines
       * @return {?}
       */


      function stripLow$1(keepNewLines) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.stripLow, keepNewLines);
        };
      }
      /**
       * @param {?=} strict
       * @return {?}
       */


      function toBoolean$1(strict) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toBoolean, strict);
        };
      }
      /**
       * @return {?}
       */


      function toDouble$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDouble);
        };
      }
      /**
       * @return {?}
       */


      function toFloat$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toFloat);
        };
      }
      /**
       * @param {?=} radix
       * @return {?}
       */


      function toInt$1(radix) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toInt, radix);
        };
      }
      /**
       * @return {?}
       */


      function toString$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.string);
        };
      }
      /**
       * @param {?} chars
       * @return {?}
       */


      function whitelist$1(chars) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.whitelist, chars);
        };
      }
      /**
       * @return {?}
       */


      function toDate$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDate);
        };
      }
      /**
       * @return {?}
       */


      function escape$1() {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.escape);
        };
      }
      /**
       * @param {?} text
       * @return {?}
       */


      function prefix$1(text) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.prefix, text);
        };
      }
      /**
       * @param {?} text
       * @return {?}
       */


      function suffix$1(text) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.suffix, text);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function model(config) {
        return function (target) {
          defaultContainer.addPropsConfig(target, config);
        };
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function sanitize$1(config) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.sanitize, config);
        };
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function elementClass(config) {
        return function (target, propertyKey, parameterIndex) {
          defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.elementClass);
        };
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function minTime(config) {
        return baseDecoratorFunction(AnnotationTypes.minTime, config);
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function maxTime(config) {
        return baseDecoratorFunction(AnnotationTypes.maxTime, config);
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function compose(config) {
        return baseDecoratorFunction(AnnotationTypes.compose, config);
      }
      /**
       * @param {?} config
       * @param {?} type
       * @param {?} validator
       * @return {?}
       */


      function baseValidator(config, type, validator) {
        var
        /** @type {?} */
        rxwebValidator = function rxwebValidator(control, target) {
          if (typeof control == STRING) defaultContainer.init(target, 0, control, type, config, false);else {
            if (config && (!control.validatorConfig || !control.validatorConfig[type])) ApplicationUtil.configureControl(control, config, type);
            return validator(control);
          }
          return null;
        };

        return rxwebValidator;
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function alphaValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.alpha, alphaValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function allOfValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.allOf, allOfValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function alphaNumericValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.alphaNumeric, alphaNumericValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function choiceValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.choice, choiceValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function compareValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.compare, compareValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function containsValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.contains, containsValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function creditCardValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.creditCard, creditCardValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function differentValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.different, differentValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function digitValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.digit, digitValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function emailValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.email, emailValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function evenValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.even, evenValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function factorValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.factor, factorValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function greaterThanEqualToValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.greaterThanEqualTo, greaterThanEqualToValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function greaterThanValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.greaterThan, greaterThanValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function hexColorValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.hexColor, hexColorValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function jsonValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.json, jsonValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function leapYearValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.leapYear, leapYearValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function lessThanEqualToValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.lessThanEqualTo, lessThanEqualToValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function lessThanValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.lessThan, lessThanValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function lowerCaseValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.lowerCase, lowercaseValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function macValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.mac, macValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function maxDateValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.maxDate, maxDateValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function maxLengthValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.maxLength, maxLengthValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function maxNumberValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.maxNumber, maxNumberValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function minDateValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.minDate, minDateValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function minLengthValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.minLength, minLengthValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function minNumberValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.minNumber, minNumberValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function noneOfValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.noneOf, noneOfValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function numericValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.numeric, numericValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function oddValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.odd, oddValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function oneOfValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.oneOf, oneOfValidator(config));
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function passwordcValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.password, passwordValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function patternValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.pattern, patternValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function rangeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.range, rangeValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function requiredValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.required, requiredValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function timeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.time, timeValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function upperCaseValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.upperCase, uppercaseValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function urlValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.url, urlValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function asciiValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.ascii, asciiValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function dataUriValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.dataUri, dataUriValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function portValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.port, portValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function latLongValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.latLong, latLongValidator(config));
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function extensionValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.extension, function (control) {
          return null;
        });
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function fileSizeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.fileSize, function (control) {
          return null;
        });
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function endsWithValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.endsWith, endsWithValidator(config));
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function startsWithValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function primeNumberValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.primeNumber, primeNumberValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function latitudeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.latitude, latitudeValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function longitudeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.longitude, longitudeValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function composeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.compose, composeValidator(config));
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function fileValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.file, function (control) {
          return null;
        });
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function customValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.custom, customValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function uniqueValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.unique, uniqueValidator(config));
      }
      /**
       * @param {?} config
       * @return {?}
       */


      function imageValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.image, function (control) {
          return null;
        });
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function notEmptyValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.notEmpty, notEmptyValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function ipValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.ip, ipValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function cusipValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.cusip, cusipValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function gridValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.grid, gridValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function dateValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.date, dateValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function andValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.and, andValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function orValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.or, orValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function notValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.not, notValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function minTimeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.minTime, minTimeValidator(config));
      }
      /**
       * @param {?=} config
       * @return {?}
       */


      function maxTimeValidatorExtension(config) {
        return baseValidator(config, AnnotationTypes.maxTime, maxTimeValidator(config));
      }

      var RxwebValidators = function RxwebValidators() {
        _classCallCheck(this, RxwebValidators);
      };

      RxwebValidators.alpha = alphaValidatorExtension;
      RxwebValidators.allOf = allOfValidatorExtension;
      RxwebValidators.alphaNumeric = alphaNumericValidatorExtension;
      RxwebValidators.choice = choiceValidatorExtension;
      RxwebValidators.compare = compareValidatorExtension;
      RxwebValidators.contains = containsValidatorExtension;
      RxwebValidators.creditCard = creditCardValidatorExtension;
      RxwebValidators.different = differentValidatorExtension;
      RxwebValidators.digit = digitValidatorExtension;
      RxwebValidators.email = emailValidatorExtension;
      RxwebValidators.even = evenValidatorExtension;
      RxwebValidators.factor = factorValidatorExtension;
      RxwebValidators.greaterThanEqualTo = greaterThanEqualToValidatorExtension;
      RxwebValidators.greaterThan = greaterThanValidatorExtension;
      RxwebValidators.hexColor = hexColorValidatorExtension;
      RxwebValidators.json = jsonValidatorExtension;
      RxwebValidators.leapYear = leapYearValidatorExtension;
      RxwebValidators.lessThanEqualTo = lessThanEqualToValidatorExtension;
      RxwebValidators.lessThan = lessThanValidatorExtension;
      RxwebValidators.lowerCase = lowerCaseValidatorExtension;
      RxwebValidators.mac = macValidatorExtension;
      RxwebValidators.maxDate = maxDateValidatorExtension;
      RxwebValidators.maxLength = maxLengthValidatorExtension;
      RxwebValidators.maxNumber = maxNumberValidatorExtension;
      RxwebValidators.minDate = minDateValidatorExtension;
      RxwebValidators.minLength = minLengthValidatorExtension;
      RxwebValidators.minNumber = minNumberValidatorExtension;
      RxwebValidators.noneOf = noneOfValidatorExtension;
      RxwebValidators.numeric = numericValidatorExtension;
      RxwebValidators.odd = oddValidatorExtension;
      RxwebValidators.oneOf = oneOfValidatorExtension;
      RxwebValidators.password = passwordcValidatorExtension;
      RxwebValidators.pattern = patternValidatorExtension;
      RxwebValidators.range = rangeValidatorExtension;
      RxwebValidators.required = requiredValidatorExtension;
      RxwebValidators.time = timeValidatorExtension;
      RxwebValidators.upperCase = upperCaseValidatorExtension;
      RxwebValidators.url = urlValidatorExtension;
      RxwebValidators.ascii = asciiValidatorExtension;
      RxwebValidators.dataUri = dataUriValidatorExtension;
      RxwebValidators.port = portValidatorExtension;
      RxwebValidators.latLong = latLongValidatorExtension;
      RxwebValidators.extension = extensionValidatorExtension;
      RxwebValidators.fileSize = fileSizeValidatorExtension;
      RxwebValidators.endsWith = endsWithValidatorExtension;
      RxwebValidators.startsWith = startsWithValidatorExtension;
      RxwebValidators.primeNumber = primeNumberValidatorExtension;
      RxwebValidators.latitude = latitudeValidatorExtension;
      RxwebValidators.longitude = longitudeValidatorExtension;
      RxwebValidators.compose = composeValidatorExtension;
      RxwebValidators.file = fileValidatorExtension;
      RxwebValidators.custom = customValidatorExtension;
      RxwebValidators.unique = uniqueValidatorExtension;
      RxwebValidators.image = imageValidatorExtension;
      RxwebValidators.notEmpty = notEmptyValidatorExtension;
      RxwebValidators.ip = ipValidatorExtension;
      RxwebValidators.cusip = cusipValidatorExtension;
      RxwebValidators.grid = gridValidatorExtension;
      RxwebValidators.date = dateValidatorExtension;
      RxwebValidators.and = andValidatorExtension;
      RxwebValidators.or = orValidatorExtension;
      RxwebValidators.not = notValidatorExtension;
      RxwebValidators.minTime = minTimeValidatorExtension;
      RxwebValidators.maxTime = maxTimeValidatorExtension;
      /**
       * @abstract
       */

      var IAbstractControl = /*#__PURE__*/function (_angular_forms__WEBPA4) {
        _inherits(IAbstractControl, _angular_forms__WEBPA4);

        var _super8 = _createSuper(IAbstractControl);

        function IAbstractControl() {
          _classCallCheck(this, IAbstractControl);

          return _super8.apply(this, arguments);
        }

        return IAbstractControl;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"]);
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=reactive-form-validators.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~app-users-users-module~employee-wizard-employee-wizard-module-es5.js.map