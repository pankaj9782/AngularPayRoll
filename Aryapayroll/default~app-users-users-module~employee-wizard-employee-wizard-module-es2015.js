(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-users-users-module~employee-wizard-employee-wizard-module"],{

/***/ "etMh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/@rxweb/reactive-form-validators.js ***!
  \******************************************************************************************************/
/*! exports provided: RxReactiveFormsModule, RxFormBuilder, FormBuilderConfiguration, alpha, alphaNumeric, compare, contains, creditCard, digit, email, hexColor, lowerCase, maxDate, maxLength, minDate, maxNumber, minLength, minNumber, password, pattern, propArray, propObject, prop, range, required, upperCase, time, url, json, greaterThan, greaterThanEqualTo, lessThanEqualTo, lessThan, choice, different, numeric, even, odd, factor, leapYear, allOf, oneOf, noneOf, mac, ascii, dataUri, port, latLong, extension, fileSize, endsWith, startsWith, primeNumber, latitude, longitude, rule, file, custom, unique, image, notEmpty, async, cusip, grid, date, disable, error, and, or, not, trim, ltrim, rtrim, blacklist, stripLow, toBoolean, toDouble, toFloat, toInt, toString, whitelist, toDate, escape, prefix, suffix, model, sanitize, elementClass, minTime, maxTime, compose, ReactiveFormConfig, NumericValueType, IpVersion, ErrorMessageBindingStrategy, ResetFormType, RxFormControl, RxFormGroup, RxwebValidators, IAbstractControl, RxFormArray, ɵb, ɵd, ɵc, ɵa, ɵf, ɵg, ɵi, ɵj, ɵe, ɵh, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxReactiveFormsModule", function() { return RxReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormBuilder", function() { return RxFormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderConfiguration", function() { return FormBuilderConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumeric", function() { return alphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCard", function() { return creditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexColor", function() { return hexColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDate", function() { return minDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxNumber", function() { return maxNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minNumber", function() { return minNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propArray", function() { return propArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propObject", function() { return propObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanEqualTo", function() { return greaterThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanEqualTo", function() { return lessThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "different", function() { return different; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "even", function() { return even; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odd", function() { return odd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factor", function() { return factor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leapYear", function() { return leapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOf", function() { return allOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneOf", function() { return noneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mac", function() { return mac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ascii", function() { return ascii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUri", function() { return dataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLong", function() { return latLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extension", function() { return extension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primeNumber", function() { return primeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latitude", function() { return latitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longitude", function() { return longitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rule", function() { return rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return custom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cusip", function() { return cusip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklist", function() { return blacklist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLow", function() { return stripLow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDouble", function() { return toDouble$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitelist", function() { return whitelist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffix", function() { return suffix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClass", function() { return elementClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minTime", function() { return minTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxTime", function() { return maxTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormConfig", function() { return ReactiveFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValueType", function() { return NumericValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpVersion", function() { return IpVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageBindingStrategy", function() { return ErrorMessageBindingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFormType", function() { return ResetFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormControl", function() { return RxFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormGroup", function() { return RxFormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxwebValidators", function() { return RxwebValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAbstractControl", function() { return IAbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormArray", function() { return RxFormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ControlHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return HtmlControlTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RxwebFormDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BaseValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ControlExpressionProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ImageFileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return RxFormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return DecimalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return BaseFormBuilder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const CONTROLS_ERROR = "controlsError";
const VALUE_CHANGED_SYNC = "valueChangedSync";
const FUNCTION_STRING = "function";
const OBJECT_STRING = "object";
const RX_WEB_VALIDATOR = "rxwebValidator";
const NUMBER = "number";
const BOOLEAN = "boolean";

const TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
const CONDITIONAL_VALIDATOR = "conditionalValidator";
const VALIDATOR_CONFIG = "validatorConfig";
const THIS = "this";
const RXCODE = "-rxw-";
const MODEL = "model";
const MODEL_INSTANCE = "modelInstance";
const PATCH = "patch";

class Linq {
    /**
     * @param {?} expression
     * @return {?}
     */
    static functionCreator(expression) {
        var /** @type {?} */ functionSetter = [];
        var /** @type {?} */ match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
        var /** @type {?} */ splitSelect = match[2].split(",");
        for (var /** @type {?} */ i = 0; i < splitSelect.length; i++) {
            var /** @type {?} */ equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);
            if (equalToOperator !== null) {
                functionSetter = new Function(match[1], "return " + equalToOperator.input);
            }
            else {
                equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);
                if (equalToOperator === null) {
                    functionSetter = new Function(match[1], "return " + splitSelect.input);
                }
                else {
                    functionSetter = new Function(match[1], "return " + equalToOperator.input);
                }
            }
        }
        if (splitSelect.length == 0)
            functionSetter = { accessFunction: new Function(match[1], "return " + match[2]) };
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
    static execute(jObject, config, parentObject, modelInstance, isDynamicConfig) {
        let /** @type {?} */ expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
        let /** @type {?} */ lastParam = isDynamicConfig ? config : modelInstance;
        if (parentObject && typeof expressionFunction == "string")
            expressionFunction = Linq.functionCreator(expressionFunction);
        if (parentObject && expressionFunction)
            return modelInstance && modelInstance.constructor !== Object ? ( /** @type {?} */(expressionFunction)).call(modelInstance, parentObject, jObject, lastParam) : ( /** @type {?} */(expressionFunction))(parentObject, jObject, lastParam);
        return true;
    }
    /**
     * @param {?} texts
     * @return {?}
     */
    static getConditionPath(texts) {
        let /** @type {?} */ path = "";
        for (var /** @type {?} */ i = 1; i < texts.length; i++)
            path += (texts.length - 1) == i ? texts[i].trim() : `${texts[i].trim()}.`;
        return path;
    }
    /**
     * @param {?} expression
     * @param {?} isNonValidationExpression
     * @return {?}
     */
    static expressionParser(expression, isNonValidationExpression) {
        let /** @type {?} */ columns = [];
        let /** @type {?} */ expressionString = expression.toString();
        let /** @type {?} */ expressionArguments = Linq.extractArguments(expressionString.match(/\(([^)]+)\)/g));
        if (expressionArguments.length > 0) {
            let /** @type {?} */ splitTexts = [];
            expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(t => {
                let /** @type {?} */ texts = t.replace(/\(|\)/g, "").split("||");
                for (let /** @type {?} */ text of texts)
                    splitTexts.push(text);
            });
            splitTexts.forEach(t => {
                expressionArguments.forEach((x, i) => {
                    t = t.trim();
                    if (t.startsWith(x + '.')) {
                        var /** @type {?} */ splitText = t.split('.');
                        if (splitText.length == 2 || (splitText.length >= 2 && isNonValidationExpression))
                            if (!isNonValidationExpression)
                                columns.push({ propName: splitText[1].trim(), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                            else
                                columns.push({ propName: this.getConditionPath(splitText), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                        else {
                            var /** @type {?} */ arrayProp = splitText[1].split('[');
                            let /** @type {?} */ jObject = {
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
    static extractArguments(splitTexts) {
        let /** @type {?} */ expressionArguments = [THIS];
        if (splitTexts && splitTexts[0])
            splitTexts[0].split(",").forEach(t => expressionArguments.push(t.trim().replace("(", "").replace(")", "")));
        return expressionArguments;
    }
    /**
     * @param {?} expression
     * @param {?=} isNonValidationExpression
     * @return {?}
     */
    static expressionColumns(expression, isNonValidationExpression = false) {
        var /** @type {?} */ columns = [];
        let /** @type {?} */ splitExpressions = [];
        if (typeof expression == "string") {
            expression.split("=>")[1].split(" && ").forEach(t => {
                t.split(" || ").forEach(x => {
                    splitExpressions.push(x.trim().split(' ')[0]);
                });
            });
            splitExpressions.forEach(t => {
                var /** @type {?} */ splitText = t.split('.');
                if (splitText.length == 2)
                    columns.push({ propName: splitText[1].trim() });
                else {
                    var /** @type {?} */ arrayProp = splitText[1].split('[');
                    let /** @type {?} */ jObject = {
                        propName: splitText[splitText.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                    };
                    columns.push(jObject);
                }
            });
        }
        else {
            columns = Linq.expressionParser(expression, isNonValidationExpression);
        }
        return columns;
    }
    /**
     * @param {?} expression
     * @param {?} propName
     * @return {?}
     */
    static dynamicConfigParser(expression, propName) {
        let /** @type {?} */ controlNames = [];
        let /** @type {?} */ expressionString = expression.toString();
        let /** @type {?} */ expressionArguments = Linq.extractArguments(expressionString.match(/\(([^)]+)\)/g));
        let /** @type {?} */ splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\?�`'#<>|,;:+-]+/g, " ").split(/ /g);
        if (expressionArguments.length > 3)
            expressionArguments.splice(expressionArguments.length - 1, 1);
        expressionArguments.forEach(t => {
            splitString.filter(x => x != `${t}.${propName}` && x.startsWith(`${t}.`)).forEach(x => {
                let /** @type {?} */ split = x.split('.');
                if (split.length == 2)
                    controlNames.push({ propName: x.replace(`${t}.`, '') });
                else {
                    var /** @type {?} */ arrayProp = split[1].split('[');
                    let /** @type {?} */ jObject = {
                        propName: split[split.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                    };
                    controlNames.push(jObject);
                }
            });
        });
        return controlNames;
    }
}

const AnnotationTypes = {
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

const PROPERTY = "property";
const OBJECT_PROPERTY = "objectProperty";
const ARRAY_PROPERTY = "arrayProperty";
const STRING = "string";
const MESSAGE = "message";
const BLANK = "";

const ELEMENT_VALUE = "value";
const BLUR = "blur";
const FOCUS = "focus";
const CHANGE = "change";

const INPUT = "INPUT";
const SELECT = "SELECT";
const CHECKBOX = "checkbox";
const RADIO = "radio";
const FILE = "file";
const TEXTAREA = "textarea";

const DECORATORS = {
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

const defaultContainer = new (class {
    constructor() {
        this.instances = [];
        this.modelIncrementCount = 0;
    }
    /**
     * @template T
     * @param {?} instanceFunc
     * @return {?}
     */
    get(instanceFunc) {
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        return instance;
    }
    /**
     * @param {?} target
     * @param {?} parameterIndex
     * @param {?} propertyKey
     * @param {?} decoratorType
     * @return {?}
     */
    getInstance(target, parameterIndex, propertyKey, decoratorType) {
        let /** @type {?} */ isPropertyKey = (propertyKey != undefined);
        let /** @type {?} */ instanceFunc = !isPropertyKey ? target : target.constructor;
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        return instance;
    }
    /**
     * @param {?} target
     * @param {?} configs
     * @return {?}
     */
    addPropsConfig(target, configs) {
        let /** @type {?} */ instanceContainer = this.instances.filter(instance => instance.instance == target)[0];
        if (instanceContainer) {
            for (let /** @type {?} */ config of configs) {
                for (let /** @type {?} */ prop of config.propNames) {
                    let /** @type {?} */ propertyInfo = instanceContainer.properties.filter(t => t.name == prop && (t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY))[0];
                    if (propertyInfo) {
                        this.addPropConfig(target, [propertyInfo], config);
                    }
                    else if (prop === ":all:")
                        this.addPropConfig(target, instanceContainer.properties.filter(t => t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY), config);
                }
            }
        }
        else if (configs === undefined)
            this.addInstanceContainer(target);
    }
    /**
     * @param {?} target
     * @param {?} properties
     * @param {?} config
     * @return {?}
     */
    addPropConfig(target, properties, config) {
        for (var /** @type {?} */ propertyInfo of properties) {
            let /** @type {?} */ excludeProp = false;
            if (config.excludePropNames)
                excludeProp = config.excludePropNames.filter(t => t == propertyInfo.name)[0] !== undefined;
            if (!excludeProp) {
                if (config.validationConfig)
                    for (let /** @type {?} */ typeName in config.validationConfig) {
                        this.init({ constructor: target }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
                    }
                if (config.error)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.error, DECORATORS.error);
                if (config.disable)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.disable, DECORATORS.disable);
                if (config.elementClass)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
                if (config.ignore)
                    propertyInfo.ignore = config.ignore;
            }
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
    addSanitizer(target, parameterIndex, propertyKey, decoratorType, value) {
        let /** @type {?} */ instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);
        if (instance) {
            if (!instance.sanitizers[propertyKey])
                instance.sanitizers[propertyKey] = [];
            instance.sanitizers[propertyKey].push({ name: decoratorType, config: value });
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
    addDecoratorConfig(target, parameterIndex, propertyKey, config, decoratorType) {
        let /** @type {?} */ isPropertyKey = (propertyKey != undefined);
        let /** @type {?} */ instanceFunc = !isPropertyKey ? target : target.constructor;
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
        let /** @type {?} */ columns = Linq.expressionColumns(config.conditionalExpression, true);
        columns.forEach(column => {
            if (column.argumentIndex !== -1) {
                let /** @type {?} */ columnName = (!column.objectPropName) ? `${column.propName}${RXCODE}${column.argumentIndex}` : `${column.objectPropName}.${column.propName}${RXCODE}${column.argumentIndex}`;
                if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName])
                    instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
                let /** @type {?} */ disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
                if (disabledColumns.indexOf(columnName) === -1)
                    disabledColumns.push(propertyKey);
            }
            else {
                if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey])
                    instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
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
    init(target, parameterIndex, propertyKey, annotationType, config, isAsync) {
        var /** @type {?} */ decoratorConfiguration = {
            propertyIndex: parameterIndex,
            propertyName: propertyKey,
            annotationType: annotationType,
            config: config,
            isAsync: isAsync
        };
        let /** @type {?} */ isPropertyKey = (propertyKey != undefined);
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
    initPropertyObject(name, propertyType, entity, target, config) {
        var /** @type {?} */ propertyInfo = {
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
    addInstanceContainer(instanceFunc) {
        let /** @type {?} */ instanceContainer = {
            instance: instanceFunc,
            propertyAnnotations: [],
            properties: [],
            nonValidationDecorators: {
                disabled: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, error: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, elementClass: {
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
    addProperty(instanceFunc, propertyInfo, isFromAnnotation = false) {
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance) {
            this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
        }
        else {
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
    addPropertyInfo(instance, propertyInfo, isAddProperty = false) {
        var /** @type {?} */ property = this.getProperty(instance, propertyInfo);
        if (!property)
            instance.properties.push(propertyInfo);
        else if (isAddProperty)
            this.updateProperty(property, propertyInfo);
    }
    /**
     * @param {?} instanceFunc
     * @param {?} decoratorConfiguration
     * @return {?}
     */
    addAnnotation(instanceFunc, decoratorConfiguration) {
        this.addProperty(instanceFunc, { propertyType: PROPERTY, name: decoratorConfiguration.propertyName }, true);
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance)
            instance.propertyAnnotations.push(decoratorConfiguration);
        else {
            instance = this.addInstanceContainer(instanceFunc);
            instance.propertyAnnotations.push(decoratorConfiguration);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
            let /** @type {?} */ columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
            let /** @type {?} */ columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        this.setConditionalColumns(instance, decoratorConfiguration);
    }
    /**
     * @param {?} instance
     * @param {?} decoratorConfiguration
     * @return {?}
     */
    setConditionalColumns(instance, decoratorConfiguration) {
        if (instance && decoratorConfiguration.config) {
            if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
                Object.keys(decoratorConfiguration.config.validation).forEach(t => {
                    if (typeof decoratorConfiguration.config.validation[t] !== "boolean")
                        this.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
                });
            }
            else
                this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
        }
    }
    /**
     * @param {?} instance
     * @param {?} annotationType
     * @param {?} fieldName
     * @param {?} propertyName
     * @return {?}
     */
    setLogicalConditional(instance, annotationType, fieldName, propertyName) {
        if (instance && ((annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime) || (annotationType == AnnotationTypes.creditCard && fieldName) || ((annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName))) {
            this.setConditionalValueProp(instance, fieldName, propertyName);
        }
    }
    /**
     * @param {?} instance
     * @param {?} propName
     * @param {?} refPropName
     * @return {?}
     */
    setConditionalValueProp(instance, propName, refPropName) {
        if (propName) {
            let /** @type {?} */ splitProps = propName.split ? propName.split('.') : '';
            if (splitProps.length < 2) {
                if (!instance.conditionalValidationProps)
                    instance.conditionalValidationProps = {};
                if (!instance.conditionalValidationProps[propName])
                    instance.conditionalValidationProps[propName] = [];
                if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1)
                    instance.conditionalValidationProps[propName].push(refPropName);
            }
            else
                this.addChangeValidation(instance, refPropName, [{ argumentIndex: 1, objectPropName: splitProps[0], propName: splitProps[1], referencePropName: refPropName }]);
        }
    }
    /**
     * @param {?} instance
     * @param {?} propertyName
     * @param {?} columns
     * @return {?}
     */
    addChangeValidation(instance, propertyName, columns) {
        if (instance) {
            if (!instance.conditionalValidationProps)
                instance.conditionalValidationProps = {};
            columns.forEach(t => {
                if (t.propName && !t.objectPropName) {
                    if (!instance.conditionalValidationProps[t.propName])
                        instance.conditionalValidationProps[t.propName] = [];
                    if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1)
                        instance.conditionalValidationProps[t.propName].push(propertyName);
                }
                else {
                    if (t.propName && t.objectPropName) {
                        if (!instance.conditionalObjectProps)
                            instance.conditionalObjectProps = [];
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
    clearInstance(instanceFunc) {
        let /** @type {?} */ instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance) {
            let /** @type {?} */ indexOf = this.instances.indexOf(instance);
            this.instances.splice(indexOf, 1);
        }
    }
    /**
     * @param {?} instance
     * @param {?} propertyInfo
     * @return {?}
     */
    getProperty(instance, propertyInfo) {
        return instance.properties.filter(t => t.name == propertyInfo.name)[0];
    }
    /**
     * @param {?} property
     * @param {?} currentProperty
     * @return {?}
     */
    updateProperty(property, currentProperty) {
        property.dataPropertyName = currentProperty.dataPropertyName;
        property.defaultValue = currentProperty.defaultValue;
    }
})();

const RegExRule = {
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
    float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
    decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
    hexaDecimal: /^[0-9A-F]+$/i,
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    url: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
    ascii: /^[\x00-\x7F]+$/,
    dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
    lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
    long: /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
    ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
    ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
    cidrV4: /^(3[0-2]|[12]?[0-9])$/,
    cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    cusip: /^[0-9A-Z]{9}$/,
    grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
};

const ALPHABET = "alphabet";
const DIGIT = "digit";
const CONTAINS = "contains";
const LOWERCASE = "lowerCase";
const UPPERCASE = "upperCase";
const SPECIAL_CHARACTER = "specialCharacter";
const MIN_LENGTH = "minLength";
const MAX_LENGTH = "maxLength";
class RegexValidator {
    /**
     * @param {?} value
     * @param {?} regex
     * @return {?}
     */
    static isExits(value, regex) {
        return value.match(regex) != null;
    }
    /**
     * @param {?} value
     * @param {?} regex
     * @return {?}
     */
    static isValid(value, regex) {
        return regex.test(value);
    }
    /**
     * @param {?} value
     * @param {?=} isRemoveSpace
     * @return {?}
     */
    static isNotBlank(value, isRemoveSpace = false) {
        return !isRemoveSpace ?
            (value === 0) || (value !== undefined && value !== null && value !== "") :
            (value === 0) || (value !== undefined && value !== null && String(value).trim() !== "");
    }
    /**
     * @param {?} passwordValidation
     * @param {?} value
     * @return {?}
     */
    static isValidPassword(passwordValidation, value) {
        let /** @type {?} */ isValid = false;
        let /** @type {?} */ keyName = "status";
        let /** @type {?} */ objectProperties = Object.getOwnPropertyNames(passwordValidation);
        for (let /** @type {?} */ propertyName of objectProperties) {
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
            if (!isValid)
                break;
        }
        return { isValid: isValid, keyName: keyName };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isZero(value) {
        return value == 0;
    }
    /**
     * @return {?}
     */
    static commaRegex() {
        return new RegExp(",", "g");
    }
}

class ReactiveFormConfig {
    /**
     * @param {?} jObject
     * @return {?}
     */
    static set(jObject) {
        if (jObject)
            ReactiveFormConfig.json = jObject;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    static get(path) {
        let /** @type {?} */ jObject;
        if (ReactiveFormConfig.json) {
            let /** @type {?} */ splitPath = path.split('.');
            for (let /** @type {?} */ columnName of splitPath) {
                jObject = (!jObject) ? ReactiveFormConfig.json[columnName] : jObject[columnName];
                if (!jObject)
                    break;
            }
        }
        return jObject;
    }
}
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
    let /** @type {?} */ jObject = {};
    if (isObjectType(jsonObject)) {
        for (var /** @type {?} */ columnName in jsonObject) {
            if (Array.isArray(jsonObject[columnName])) {
                jObject[columnName] = [];
                for (let /** @type {?} */ row of jsonObject[columnName]) {
                    if (isObject(row))
                        jObject[columnName].push(clone(row));
                    else
                        jObject[columnName].push(row);
                }
            }
            else if (typeof jsonObject[columnName] == "object")
                jObject[columnName] = clone(jsonObject[columnName]);
            else
                jObject[columnName] = jsonObject[columnName];
        }
        return jObject;
    }
    else
        return jsonObject;
}
/**
 * @param {?} firstObject
 * @param {?} secondObject
 * @return {?}
 */
function merge(firstObject, secondObject) {
    for (var /** @type {?} */ columnName in secondObject) {
        if (Array.isArray(secondObject[columnName])) {
            if (!firstObject[columnName])
                firstObject[columnName] = [];
            for (let /** @type {?} */ row of secondObject[columnName])
                firstObject[columnName].push(clone(row));
        }
        else if (typeof firstObject[columnName] == "object")
            firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);
        else
            firstObject[columnName] = secondObject[columnName];
    }
    return firstObject;
}
/**
 * @param {?} jsonObject
 * @param {?} compareObject
 * @return {?}
 */
function isMatched(jsonObject, compareObject) {
    let /** @type {?} */ isModified = false;
    for (var /** @type {?} */ columnName in compareObject) {
        if (Array.isArray(jsonObject[columnName])) {
            for (var /** @type {?} */ i = 0; i < jsonObject[columnName].length; i++) {
                isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
            }
        }
        else if (typeof jsonObject[columnName] == "object")
            isModified = isMatched(jsonObject[columnName], compareObject[columnName]);
        else
            isModified = !(jsonObject[columnName] == compareObject[columnName]);
        if (isModified)
            break;
    }
    return isModified;
}

class ObjectMaker {
    /**
     * @param {?} key
     * @param {?} config
     * @param {?} values
     * @return {?}
     */
    static toJson(key, config, values) {
        let /** @type {?} */ message = config ? config.message : null;
        let /** @type {?} */ messageKey = undefined;
        if (!message && config && config.messageKey)
            messageKey = config.messageKey;
        let /** @type {?} */ messageText = (message) ? message : (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key]) ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
        values.forEach((t, index) => {
            messageText = messageText.replace(`{{${index}}}`, t);
        });
        let /** @type {?} */ jObject = {};
        jObject[key] = {
            message: messageText, refValues: values
        };
        return jObject;
    }
    /**
     * @return {?}
     */
    static null() {
        return null;
    }
}

const PROP_ARRAY = "propArray";
class RxFormArray extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] {
    /**
     * @param {?} arrayObject
     * @param {?} controls
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     * @param {?=} arrayConfig
     */
    constructor(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
        super(controls, validatorOrOpts, asyncValidator);
        this.arrayObject = arrayObject;
        this.arrayConfig = arrayConfig;
        this._isModified = false;
        this._modified = [];
        this.cloneObject(arrayObject);
    }
    /**
     * @return {?}
     */
    get isModified() {
        return this._isModified;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    push(control) {
        let /** @type {?} */ formGroup = this.root;
        if (this.arrayObject)
            if (control.modelInstance)
                this.arrayObject.push(control.modelInstance);
        super.push(control);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    }
    /**
     * @return {?}
     */
    patch() {
        this.checkModification();
        if (this.parent)
            this.parent[PATCH]();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    resetForm(options) {
        if (options && options.index >= 0 && options.groupOption) {
            ( /** @type {?} */(this.controls[options.index])).resetForm(options.groupOption);
        }
        else {
            for (var /** @type {?} */ i = 0; i < this._baseValue.length; i++) {
                if (this.controls[i] !== undefined)
                    ( /** @type {?} */(this.controls[i])).resetForm({ value: this._baseValue[i] });
                else if (options && options.pushFunction) {
                    let /** @type {?} */ formGroup = options.pushFunction(this._baseValue[i]);
                    this.push(formGroup);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    commit() {
        this._baseValue = [];
        for (let /** @type {?} */ formGroup of this.controls) {
            ( /** @type {?} */(formGroup)).commit();
            this._baseValue.push(clone(formGroup.value));
        }
        this.patch();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        let /** @type {?} */ formGroup = this.root;
        this.arrayObject.splice(index, 1);
        super.removeAt(index);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    }
    /**
     * @return {?}
     */
    checkValidation() {
        setTimeout(() => {
            if (this.arrayConfig != undefined && this.arrayConfig.allowMaxIndex && this.length > this.arrayConfig.allowMaxIndex)
                this.setErrors(ObjectMaker.toJson(PROP_ARRAY, this.arrayConfig, [this.length, this.arrayConfig.allowMaxIndex]));
            else if (this.errors && this.errors[PROP_ARRAY])
                delete this.errors[PROP_ARRAY];
        });
    }
    /**
     * @return {?}
     */
    checkModification() {
        this._isModified = !(this._baseValue.length == this.controls.length);
        if (!this._isModified)
            for (var /** @type {?} */ i = 0; i < this.controls.length; i++) {
                this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
                if (this._isModified)
                    break;
            }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cloneObject(value) {
        this._baseValue = [];
        for (let /** @type {?} */ row of value) {
            this._baseValue.push(clone(row));
        }
    }
}

let NumericValueType = {};
NumericValueType.PositiveNumber = 1;
NumericValueType.NegativeNumber = 2;
NumericValueType.Both = 3;
NumericValueType[NumericValueType.PositiveNumber] = "PositiveNumber";
NumericValueType[NumericValueType.NegativeNumber] = "NegativeNumber";
NumericValueType[NumericValueType.Both] = "Both";

let IpVersion = {};
IpVersion.V4 = 1;
IpVersion.V6 = 2;
IpVersion.AnyOne = 3;
IpVersion[IpVersion.V4] = "V4";
IpVersion[IpVersion.V6] = "V6";
IpVersion[IpVersion.AnyOne] = "AnyOne";

let ErrorMessageBindingStrategy = {};
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

let ResetFormType = {};
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

const MODEL_INSTANCE_VALUE = "modelInstanceValue";
class ApplicationUtil {
    /**
     * @param {?} control
     * @return {?}
     */
    static getParentObjectValue(control) {
        if (control.parent) {
            let /** @type {?} */ parent = this.parentObjectValue(control.parent);
            return parent.value;
        }
        return {};
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getParentModelInstanceValue(control) {
        if (control.parent) {
            let /** @type {?} */ parent = this.parentObjectValue(control.parent);
            return parent[MODEL_INSTANCE_VALUE];
        }
        return {};
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getRootFormGroup(control) {
        if (control.parent) {
            return this.getRootFormGroup(control.parent);
        }
        return /** @type {?} */ (control);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getParentControl(control) {
        if (control.parent) {
            let /** @type {?} */ parent = this.parentObjectValue(control.parent);
            return parent;
        }
        return control;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getFormControlName(control) {
        let /** @type {?} */ controlName = '';
        if (control.parent) {
            for (var /** @type {?} */ formControlName in control.parent.controls) {
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
    static getParentFormArray(control) {
        if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || control.parent instanceof RxFormArray)) {
            let /** @type {?} */ parent = this.getParentFormArray(control.parent);
            return parent;
        }
        return control.parent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static toLower(value) {
        if (value)
            return String(value).toLowerCase();
        return value;
    }
    /**
     * @param {?} fieldName
     * @param {?} formGroup
     * @return {?}
     */
    static getControl(fieldName, formGroup) {
        let /** @type {?} */ splitText = fieldName.split('.');
        if (splitText.length > 1) {
            var /** @type {?} */ formControl = formGroup;
            splitText.forEach((name, index) => { formControl = formControl.controls[name]; });
            return formControl;
        }
        else
            return formGroup.controls[fieldName];
    }
    /**
     * @param {?} fieldName
     * @param {?} control
     * @return {?}
     */
    static getFormControl(fieldName, control) {
        let /** @type {?} */ splitText = fieldName.split('.');
        if (splitText.length > 1 && control.parent) {
            var /** @type {?} */ formControl = this.getParentControl(control);
            splitText.forEach((name, index) => { formControl = formControl.controls[name]; });
            return formControl;
        }
        return (control.parent) ? control.parent.get([fieldName]) : undefined;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static parentObjectValue(control) {
        if (!control.parent)
            return control;
        else
            control = this.parentObjectValue(control.parent);
        return control;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isNumeric(value) {
        return (value - parseFloat(value) + 1) >= 0;
    }
    /**
     * @param {?} primaryValue
     * @param {?} secondaryValue
     * @return {?}
     */
    static notEqualTo(primaryValue, secondaryValue) {
        let /** @type {?} */ firstValue = (primaryValue === undefined || primaryValue === null) ? "" : primaryValue;
        let /** @type {?} */ secondValue = (secondaryValue === undefined || secondaryValue === null) ? "" : secondaryValue;
        if (firstValue instanceof Date && secondValue instanceof Date)
            return +firstValue != +secondValue;
        return (firstValue != secondValue);
    }
    /**
     * @param {?} allowDecimal
     * @param {?} acceptValue
     * @return {?}
     */
    static numericValidation(allowDecimal, acceptValue) {
        let /** @type {?} */ decimalSymbol;
        if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = (ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol) ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }
        else {
            decimalSymbol = ".";
        }
        acceptValue = (acceptValue == undefined) ? NumericValueType.PositiveNumber : acceptValue;
        let /** @type {?} */ regex = /^[0-9]+$/;
        switch (acceptValue) {
            case NumericValueType.PositiveNumber:
                regex = (!allowDecimal) ? /^[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
                break;
            case NumericValueType.NegativeNumber:
                regex = (!allowDecimal) ? /^[-][0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
                break;
            case NumericValueType.Both:
                regex = (!allowDecimal) ? /^[-|+]?[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
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
    static configureControl(control, config, type) {
        if (!control.validatorConfig) {
            let /** @type {?} */ jObject = {};
            jObject[type] = config;
            Object.assign(control, { validatorConfig: jObject });
        }
        else
            control.validatorConfig[type] = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static lowerCaseWithTrim(value) {
        return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
    }
    /**
     * Check if a value is an object
     * @param {?} value
     * @return {?}
     */
    static isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    }
    /**
     * Check if a value is an object
     * @param {?} value
     * @return {?}
     */
    static isArray(value) {
        return Array.isArray(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static cloneValue(value) {
        return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? [...value] : Object.assign({}, value) : value;
    }
}

const ISO_DATE_REGEX = /^(\d{4}-\d{1,2}-\d{1,2})$/;
class DateProvider {
    /**
     * @param {?} value
     * @return {?}
     */
    isDate(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getRegex(dateFormat) {
        var /** @type {?} */ regExp;
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
    regex() {
        var /** @type {?} */ regExp;
        if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator)
            regExp = this.getRegex(ReactiveFormConfig.json.internationalization.dateFormat);
        else
            regExp = (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat) ? this.getRegex(ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex("mdy");
        return regExp;
    }
    /**
     * @param {?} value
     * @param {?=} isBaseFormat
     * @return {?}
     */
    getDate(value, isBaseFormat = false) {
        let /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day;
        if (!this.isDate(value)) {
            let /** @type {?} */ seperator;
            let /** @type {?} */ dateFormat;
            if (ISO_DATE_REGEX.test(/** @type {?} */ (value))) {
                seperator = "-";
                dateFormat = "ymd";
            }
            else {
                seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
                dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
            }
            if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
                seperator = ReactiveFormConfig.json.internationalization.seperator;
                dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
            }
            switch (dateFormat) {
                case 'ymd':
                    [year, month, day] = ( /** @type {?} */(value)).split(seperator).map((val) => +val);
                    break;
                case 'dmy':
                    [day, month, year] = ( /** @type {?} */(value)).split(seperator).map((val) => +val);
                    break;
                case 'mdy':
                    [month, day, year] = ( /** @type {?} */(value)).split(seperator).map((val) => +val);
                    break;
            }
            return new Date(year, month - 1, day);
        }
        else
            return /** @type {?} */ (value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isValid(value) {
        if (typeof value == "string") {
            if (ISO_DATE_REGEX.test(/** @type {?} */ (value)))
                return true;
            let /** @type {?} */ seperator = '/';
            if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator)
                seperator = ReactiveFormConfig.json.internationalization.seperator;
            value = value.replace(seperator, '-').replace(seperator, '-');
            return this.regex().test(value);
        }
        else
            return this.isDate(value);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    getConfigDateValue(config) {
        let /** @type {?} */ date = config.value;
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
    getCompareDate(config, control) {
        let /** @type {?} */ date = this.getConfigDateValue(config);
        if (config.fieldName) {
            let /** @type {?} */ checkControl = ApplicationUtil.getFormControl(config.fieldName, control);
            if (checkControl && checkControl.value) {
                date = this.getDate(checkControl.value);
            }
        }
        return date;
    }
}

/**
 * @param {?} value
 * @return {?}
 */
function isNotBlank(value) {
    return (value !== undefined && value !== null && value !== "");
}
/**
 * @param {?} value
 * @return {?}
 */
function trim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.trim();
    return value;
}

/**
 * @param {?} value
 * @return {?}
 */
function ltrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/^\s+/g, '');
    return value;
}
/**
 * @param {?} value
 * @return {?}
 */
function rtrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/\s+$/g, '');
    return value;
}
/**
 * @param {?} value
 * @param {?} chars
 * @return {?}
 */
function blacklist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
    return value;
}

/**
 * @param {?} value
 * @param {?} keepNewLines
 * @return {?}
 */
function stripLow(value, keepNewLines) {
    let /** @type {?} */ chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
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
    if (isNotBlank(value))
        if (ApplicationUtil.isNumeric(value))
            return parseFloat(value);
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
    if (isNotBlank(value))
        if (ApplicationUtil.isNumeric(value))
            return parseInt(value, radix || 10);
    return null;
}
/**
 * @param {?} value
 * @param {?} radix
 * @return {?}
 */
function toString(value, radix) {
    if (isNotBlank(value))
        return String(value);
    return value;
}
/**
 * @param {?} value
 * @param {?} chars
 * @return {?}
 */
function whitelist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp(`[^${chars}]+`, 'g'), '');
    return value;
}
/**
 * @param {?} value
 * @return {?}
 */
function toDate(value) {
    var /** @type {?} */ dateProvider = new DateProvider();
    if (isNotBlank(value))
        if (typeof value === "string" && dateProvider.isValid(value)) {
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
    if (isNotBlank(value))
        return (value.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\\/g, '&#x5C;')
            .replace(/`/g, '&#96;'));
    return value;
}
/**
 * @param {?} value
 * @param {?} text
 * @return {?}
 */
function prefix(value, text) {
    if (isNotBlank(value))
        return `${text}${value}`;
    return value;
}
/**
 * @param {?} value
 * @param {?} text
 * @return {?}
 */
function suffix(value, text) {
    if (isNotBlank(value))
        return `${value}${text}`;
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
const SANITIZERS = {
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
    let /** @type {?} */ instance = defaultContainer.get(instanceFunc);
    let /** @type {?} */ prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;
    if (prototype.__proto__) {
        let /** @type {?} */ isLoop = false;
        do {
            isLoop = prototype.__proto__.constructor != Object;
            if (isLoop) {
                let /** @type {?} */ extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
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
    let /** @type {?} */ classInstance = Object.create(model.prototype);
    try {
        model.apply(classInstance, objectArguments);
    }
    catch ( /** @type {?} */ex) {
        ///resolution of issue https://github.com/rxweb/rxweb/issues/188
        classInstance = Reflect.construct(model, objectArguments);
    }
    return classInstance;
}

class BaseFormBuilder {
    constructor() {
    }
    /**
     * @return {?}
     */
    createInstance() {
        let /** @type {?} */ instance = {};
        defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
        let /** @type {?} */ modelName = `RxWebModel${defaultContainer.modelIncrementCount}`;
        instance.constructor = Function(`"use strict";return(function ${modelName}(){ })`)();
        return instance;
    }
    /**
     * @param {?} model
     * @param {?} formBuilderConfiguration
     * @param {?=} classInstance
     * @return {?}
     */
    createClassObject(model, formBuilderConfiguration, classInstance) {
        let /** @type {?} */ instanceContainer = defaultContainer.get(model);
        let /** @type {?} */ autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;
        if (!autoInstanceConfig) {
            return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
        }
        else {
            classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);
            if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
                autoInstanceConfig.objectPropInstanceConfig.forEach(t => {
                    let /** @type {?} */ objectProperty = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY)[0];
                    if (objectProperty) {
                        let /** @type {?} */ data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
                        if (data)
                            this.setObjectValue(data, classInstance[t.propertyName]);
                    }
                });
            }
            if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
                autoInstanceConfig.arrayPropInstanceConfig.forEach(t => {
                    let /** @type {?} */ property = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY)[0];
                    if (property) {
                        let /** @type {?} */ data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = [];
                        for (var /** @type {?} */ i = 0; i < t.rowItems; i++) {
                            let /** @type {?} */ instance = getInstance(property.entity, t.arguments || []);
                            if (data && data[i])
                                this.setObjectValue(data[i], instance);
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
    updateObject(model, entityObject, formBuilderConfiguration) {
        let /** @type {?} */ instanceContainer = instanceProvider(model);
        let /** @type {?} */ classInstance = getInstance(model, []);
        if (instanceContainer) {
            instanceContainer.properties.forEach(t => {
                let /** @type {?} */ entity = ((t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity) ? t.entity : (formBuilderConfiguration && formBuilderConfiguration.genericEntities) ? formBuilderConfiguration.genericEntities[t.name] : undefined;
                if (!entity && t.entityProvider)
                    entity = t.entityProvider.call(entityObject);
                switch (t.propertyType) {
                    case PROPERTY:
                        classInstance[t.name] = this.getValue(entityObject, t, formBuilderConfiguration);
                        break;
                    case OBJECT_PROPERTY:
                        let /** @type {?} */ objectValue = this.getValue(entityObject, t, formBuilderConfiguration);
                        if (objectValue)
                            classInstance[t.name] = this.updateObject(entity, objectValue, formBuilderConfiguration);
                        break;
                    case ARRAY_PROPERTY:
                        let /** @type {?} */ arrayObjectValue = this.getValue(entityObject, t, formBuilderConfiguration);
                        if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
                            classInstance[t.name] = [];
                            for (let /** @type {?} */ row of arrayObjectValue) {
                                let /** @type {?} */ instanceObject = this.updateObject(entity, row, formBuilderConfiguration);
                                classInstance[t.name].push(instanceObject);
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
    instaceProvider(instanceFunc, entityObject) {
        return instanceProvider(instanceFunc, entityObject);
    }
    /**
     * @param {?} propertyInfo
     * @param {?} value
     * @param {?} formBuilderConfiguration
     * @return {?}
     */
    getDefaultValue(propertyInfo, value, formBuilderConfiguration) {
        let /** @type {?} */ defaultValue = (formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value)) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : (propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value)) ?
            propertyInfo.defaultValue :
            value;
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
    sanitizeValue(instanceContainer, propertyName, value, entityObject, baseObject) {
        if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
            for (let /** @type {?} */ sanitizer of instanceContainer.sanitizers[propertyName])
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
        }
        if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value)
            entityObject[propertyName] = value;
        if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value)
            baseObject[propertyName] = value;
        return value;
    }
    /**
     * @param {?} entityObject
     * @param {?} propertyInfo
     * @param {?} formBuilderConfiguration
     * @return {?}
     */
    getValue(entityObject, propertyInfo, formBuilderConfiguration) {
        let /** @type {?} */ propValue = (propertyInfo.dataPropertyName) ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
        return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
    }
    /**
     * @param {?} entityObject
     * @param {?} classInstance
     * @return {?}
     */
    setObjectValue(entityObject, classInstance) {
        for (var /** @type {?} */ column in entityObject) {
            classInstance[column] = entityObject[column];
        }
    }
}

class FormBuilderConfiguration {
    /**
     * @param {?=} formBuilderConfiguration
     */
    constructor(formBuilderConfiguration) {
        if (formBuilderConfiguration)
            for (var column in formBuilderConfiguration)
                this[column] = formBuilderConfiguration[column];
    }
}

/**
 * @param {?} conditionalValidationProps
 * @return {?}
 */
function conditionalChangeValidator(conditionalValidationProps) {
    var /** @type {?} */ oldValue = undefined;
    var /** @type {?} */ setTimeOut = (control) => {
        var /** @type {?} */ timeOut = setTimeout(t => {
            clearTimeout(timeOut);
            control.updateValueAndValidity();
        }, 100);
    };
    return (control) => {
        let /** @type {?} */ value = control.value;
        if (control.parent && oldValue != value) {
            const /** @type {?} */ rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            const /** @type {?} */ parentFormGroup = control.parent;
            oldValue = value;
            conditionalValidationProps.forEach(t => {
                if (t.indexOf("[]") != -1) {
                    var /** @type {?} */ splitText = t.split("[]");
                    var /** @type {?} */ formArray = /** @type {?} */ (rootFormGroup.get([splitText[0]]));
                    if (formArray)
                        formArray.controls.forEach(formGroup => {
                            var /** @type {?} */ abstractControl = formGroup.get(splitText[1]);
                            if (abstractControl) {
                                setTimeOut(abstractControl);
                            }
                        });
                }
                else {
                    let /** @type {?} */ splitText = t.split('.');
                    if (splitText.length > 1) {
                        var /** @type {?} */ control = null;
                        t.split('.').forEach((name, index) => { control = (index == 0) ? rootFormGroup.controls[name] : control.controls[name]; });
                    }
                    else {
                        control = parentFormGroup.controls[t];
                    }
                    if (control) {
                        setTimeOut(control);
                    }
                }
            });
        }
        return ObjectMaker.null();
    };
}

class DisableProvider {
    /**
     * @param {?} decoratorType
     * @param {?} entityObject
     */
    constructor(decoratorType, entityObject) {
        this.decoratorType = decoratorType;
        this.entityObject = entityObject;
    }
    /**
     * @param {?} currentFormGroup
     * @return {?}
     */
    getFormGroupName(currentFormGroup) {
        let /** @type {?} */ keyName = '';
        if (currentFormGroup.parent)
            for (var /** @type {?} */ controlName of Object.keys(currentFormGroup.parent.controls))
                if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
                    keyName = controlName;
                    break;
                }
        return keyName;
    }
    /**
     * @param {?} control
     * @param {?} columnName
     * @return {?}
     */
    zeroArgumentProcess(control, columnName) {
        let /** @type {?} */ disabledColumns = [];
        this.getDisabledColumns(/** @type {?} */ (control.parent), `${columnName}${RXCODE}0`, false).forEach(t => disabledColumns.push(t));
        let /** @type {?} */ path = this.topControlPath(control, columnName);
        let /** @type {?} */ splitPath = path.split(".");
        if (splitPath.length > 1) {
            let /** @type {?} */ rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            this.getDisabledColumns(rootFormGroup, `${path}${RXCODE}0`, true).forEach(t => disabledColumns.push(t));
            let /** @type {?} */ controlPath = '';
            for (var /** @type {?} */ i = 0; i < splitPath.length - 2; i++) {
                let /** @type {?} */ controlName = splitPath[i];
                controlPath = `${path.replace(`${controlName}.`, '')}${RXCODE}-0`;
                if (rootFormGroup.controls[controlName]) {
                    this.getDisabledColumns(/** @type {?} */ (rootFormGroup.controls[controlName]), controlPath, true, controlName).forEach(t => disabledColumns.push(t));
                    rootFormGroup = /** @type {?} */ (rootFormGroup.controls[controlName]);
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
    getDisabledColumns(formGroup, columnName, isRoot, pathName = "") {
        if (formGroup[MODEL_INSTANCE]) {
            let /** @type {?} */ instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
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
    getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName = "") {
        let /** @type {?} */ conditionalDisableControls = [];
        let /** @type {?} */ columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];
        if (columns) {
            columns.forEach(t => {
                conditionalDisableControls.push({ controlPath: pathName ? `${pathName}.${t}` : t, conditionalExpression: instanceContainer.nonValidationDecorators[this.decoratorType].conditionalExpressions[t], isRoot: isRoot });
            });
        }
        return conditionalDisableControls;
    }
    /**
     * @param {?} control
     * @param {?} columnName
     * @return {?}
     */
    topControlPath(control, columnName) {
        if (control.parent) {
            let /** @type {?} */ name = this.getFormGroupName(( /** @type {?} */(control.parent)));
            if (name) {
                columnName = `${name}.${columnName}`;
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
    childControlDisabledExpression(formGroup, columnName, path = "") {
        let /** @type {?} */ disabledColumns = [];
        if (formGroup[MODEL_INSTANCE]) {
            let /** @type {?} */ instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(t => disabledColumns.push(t));
                var /** @type {?} */ props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY);
                props.forEach(t => {
                    if (formGroup.controls[t.name]) {
                        let /** @type {?} */ columns = this.getDisabledColumns(/** @type {?} */ (formGroup.controls[t.name]), columnName, true, path ? `${path}.${t.name}` : `${t.name}`);
                        columns.forEach(x => disabledColumns.push(x));
                        this.childControlDisabledExpression(( /** @type {?} */(formGroup.controls[t.name])), columnName, path ? `${path}.${t.name}` : `${t.name}`).forEach(y => disabledColumns.push(y));
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
    oneArgumentProcess(control, columnName) {
        let /** @type {?} */ path = this.topControlPath(control, columnName);
        let /** @type {?} */ rootFormGroup = ApplicationUtil.getRootFormGroup(control);
        let /** @type {?} */ childColumns = this.childControlDisabledExpression(rootFormGroup, path);
        return childColumns;
    }
}

const DIRTY = "dirty";
const TOUCHED = "touched";
const UNTOUCHED = "untouched";
const PRISTINE = "pristine";
const PENDING = "pending";
class RxFormControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] {
    /**
     * @param {?} formState
     * @param {?} validator
     * @param {?} asyncValidator
     * @param {?} entityObject
     * @param {?} baseObject
     * @param {?} controlName
     * @param {?} _sanitizers
     */
    constructor(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
        super(formState, validator, asyncValidator);
        this.entityObject = entityObject;
        this.baseObject = baseObject;
        this._sanitizers = _sanitizers;
        this._errorMessages = [];
        this._childColumns = [];
        this._refDisableControls = [];
        this._refMessageControls = [];
        this._refClassNameControls = [];
        this._isPassedExpression = false;
        this._baseValue = formState === undefined ? null : this.getFormState(formState);
        this._isModified = false;
        this.keyName = controlName;
        this._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");
    }
    /**
     * @return {?}
     */
    get errors() {
        return this._errors;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set errors(value) {
        this._errors = value;
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        if (!this._messageExpression) {
            if (this._errorMessages.length == 0 && this.errors)
                this.setControlErrorMessages();
        }
        else if (this._messageExpression && !this._isPassedExpression)
            return [];
        if (!this.errors && this._errorMessages.length > 0)
            this.setControlErrorMessages();
        return this._errorMessages;
    }
    /**
     * @return {?}
     */
    get errorMessage() {
        if (!this._messageExpression) {
            if (this._errorMessage == undefined && this.errors)
                this.setControlErrorMessages();
        }
        else if (this._messageExpression && !this._isPassedExpression)
            return undefined;
        if (!this.errors && this._errorMessage)
            this.setControlErrorMessages();
        return this._errorMessage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormState(value) {
        let /** @type {?} */ baseValue = value;
        if (Array.isArray(value)) {
            baseValue = [];
            value.forEach(t => baseValue.push(t));
        }
        return baseValue;
    }
    /**
     * @return {?}
     */
    get isModified() {
        return this._isModified;
    }
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    setValue(value, options) {
        let /** @type {?} */ parsedValue = this.getSanitizedValue(value);
        if (options && options.dirty)
            this.baseObject[this.keyName] = value;
        this.entityObject[this.keyName] = parsedValue;
        super.setValue(value, options);
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
    getControlValue() {
        return this.getSanitizedValue(this.value);
    }
    /**
     * @return {?}
     */
    bindError() {
        if (this._messageExpression)
            this._isPassedExpression = this.executeExpression(this._messageExpression, this);
        this.setControlErrorMessages();
        this.errors = this.errors;
    }
    /**
     * @return {?}
     */
    bindClassName() {
        if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
            let /** @type {?} */ className = this.executeExpression(this._classNameExpression, this);
            let /** @type {?} */ updateElement = /** @type {?} */ (this.updateOnElementClass);
            updateElement(className);
        }
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    markAsTouched(opts) {
        let /** @type {?} */ currentState = this.touched;
        super.markAsTouched(opts);
        if (currentState != this.touched)
            this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    markAsUntouched(opts) {
        let /** @type {?} */ currentState = this.untouched;
        super.markAsUntouched(opts);
        if (currentState != this.untouched)
            this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    markAsDirty(opts) {
        let /** @type {?} */ currentState = this.dirty;
        super.markAsDirty(opts);
        if (currentState != this.dirty)
            this.runControlPropChangeExpression([DIRTY]);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    markAsPristine(opts) {
        let /** @type {?} */ currentState = this.pristine;
        super.markAsDirty(opts);
        if (currentState != this.pristine)
            this.runControlPropChangeExpression([PRISTINE]);
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    markAsPending(opts) {
        let /** @type {?} */ currentState = this.pending;
        super.markAsDirty(opts);
        if (currentState != this.pending)
            this.runControlPropChangeExpression([PENDING]);
    }
    /**
     * @param {?} propNames
     * @return {?}
     */
    runControlPropChangeExpression(propNames) {
        propNames.forEach(name => {
            if ((this._controlProp && this._messageExpression && this._controlProp[name]) || (!this._messageExpression && this.checkErrorMessageStrategy()))
                this.bindError();
            if (this._classNameControlProp && this._classNameControlProp[name])
                this.bindClassName();
        });
    }
    /**
     * @return {?}
     */
    refresh() {
        this.getMessageExpression(/** @type {?} */ (this.parent), this.keyName);
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
    reset(value) {
        if (value !== undefined)
            this.setValue(value);
        else
            this.setValue(this.getFormState(this._baseValue));
    }
    /**
     * @return {?}
     */
    commit() {
        this._baseValue = this.value;
        this.callPatch();
    }
    /**
     * @return {?}
     */
    callPatch() {
        this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
        if (this.parent && this.parent[PATCH])
            this.parent[PATCH](this.keyName);
    }
    /**
     * @return {?}
     */
    checkErrorMessageStrategy() {
        let /** @type {?} */ isBind = true;
        switch (this._errorMessageBindingStrategy) {
            case ErrorMessageBindingStrategy.OnSubmit:
                isBind = ( /** @type {?} */(this.parent)).submitted;
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
                isBind = this.dirty || ( /** @type {?} */(this.parent)).submitted;
                break;
            case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
                isBind = this.touched || ( /** @type {?} */(this.parent)).submitted;
                break;
            default:
                isBind = true;
        }
        return isBind;
    }
    /**
     * @return {?}
     */
    executeExpressions() {
        this.processExpression("_refDisableControls", "disabled");
        this.processExpression("_refMessageControls", "bindError");
        this.processExpression("_refClassNameControls", "bindClassName");
    }
    /**
     * @param {?} formGroup
     * @param {?} keyName
     * @return {?}
     */
    getMessageExpression(formGroup, keyName) {
        if (formGroup[MODEL_INSTANCE]) {
            let /** @type {?} */ instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
                this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
                this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
                this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
                if (this._classNameExpression)
                    this.updateOnElementClass = true;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSanitizedValue(value) {
        if (this._sanitizers) {
            for (let /** @type {?} */ sanitizer of this._sanitizers) {
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
            }
        }
        return value;
    }
    /**
     * @param {?} decoratorType
     * @param {?} refName
     * @return {?}
     */
    bindConditionalControls(decoratorType, refName) {
        this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
        this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);
        this._disableProvider.oneArgumentProcess(this, `${this.keyName}${RXCODE}1`).forEach(t => this[refName].push(t));
    }
    /**
     * @return {?}
     */
    setControlErrorMessages() {
        if ((!this._messageExpression && this.checkErrorMessageStrategy()) || this._isPassedExpression) {
            this._errorMessages = [];
            if (this.errors) {
                Object.keys(this.errors).forEach(t => {
                    this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(this.errors, t);
                    if (!this._errorMessage) {
                        let /** @type {?} */ errorObject = ObjectMaker.toJson(t, undefined, [this.errors[t][t]]);
                        this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(errorObject, t);
                    }
                    this._errorMessages.push(this._errorMessage);
                });
            }
            else {
                this._errorMessage = undefined;
                this.parent[CONTROLS_ERROR][this.keyName] = undefined;
                delete this.parent[CONTROLS_ERROR][this.keyName];
            }
        }
        else {
            this._errorMessages = [];
            this._errorMessage = undefined;
        }
    }
    /**
     * @param {?} errorObject
     * @param {?} keyName
     * @return {?}
     */
    getErrorMessage(errorObject, keyName) {
        if (errorObject[keyName][MESSAGE])
            return errorObject[keyName][MESSAGE];
        return;
    }
    /**
     * @param {?} propName
     * @param {?} operationType
     * @return {?}
     */
    processExpression(propName, operationType) {
        if (this[propName])
            for (var /** @type {?} */ controlInfo of this[propName]) {
                let /** @type {?} */ control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);
                if (control) {
                    if (operationType == "disabled") {
                        let /** @type {?} */ result = this.executeExpression(controlInfo.conditionalExpression, control);
                        if (result)
                            control.disable();
                        else
                            control.enable();
                    }
                    else if (operationType == "bindError")
                        control.bindError();
                    else if (operationType == "bindClassName")
                        control.bindClassName();
                }
            }
    }
    /**
     * @param {?} expression
     * @param {?} control
     * @return {?}
     */
    executeExpression(expression, control) {
        return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getValue(value) {
        return value !== undefined && value !== null && value !== "" ? value : "";
    }
}

const OBJECT = "object";
const BOOLEAN$1 = "boolean";
class FormDataProvider {
    /**
     * @param {?} jObject
     * @return {?}
     */
    convertToFormData(jObject) {
        return this.convertFormData(jObject);
    }
    /**
     * @param {?} jObject
     * @param {?=} currentFormData
     * @param {?=} parentKey
     * @return {?}
     */
    convertFormData(jObject, currentFormData, parentKey) {
        let /** @type {?} */ formData = currentFormData || new FormData();
        let /** @type {?} */ propName = '';
        for (var /** @type {?} */ columnName in jObject) {
            propName = !parentKey ? columnName : `${parentKey}[${columnName}]`;
            if (Array.isArray(jObject[columnName])) {
                jObject[columnName].forEach((row, index) => {
                    propName = `${columnName}[${index}]`;
                    if (typeof row === OBJECT)
                        this.convertFormData(row, formData, propName);
                    else
                        this.nonObjectValueBind(row, formData, propName);
                });
            }
            else if (jObject[columnName] !== null && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
                this.convertFormData(jObject[columnName], formData, propName);
            }
            else {
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
    nonObjectValueBind(value, formData, propName) {
        if (typeof value === BOOLEAN$1) {
            formData.append(propName, +value ? '1' : '0');
        }
        else if (value instanceof FileList) {
            for (var /** @type {?} */ i = 0; i < value.length; i++) {
                formData.append(`${propName}[${i}]`, value.item(i));
            }
        }
        else {
            if (RegexValidator.isNotBlank(value))
                formData.append(propName, value);
        }
    }
}

/**
 * @param {?} controlName
 * @param {?} control
 * @param {?=} options
 * @return {?}
 */
function isResetControl(controlName, control, options) {
    let /** @type {?} */ isReset = true;
    if (options) {
        isReset = false;
        if (options.resetType)
            switch (options.resetType) {
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
        if (!isReset && options.with)
            isReset = options.with.filter(x => x.split('.')[0] == controlName.split('.')[0])[0] !== undefined;
        if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly))
            isReset = true;
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
        let /** @type {?} */ jObjectOptions = {};
        if (options.resetType)
            jObjectOptions.resetType = (options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly) ? ResetFormType.ControlsOnly : options.resetType;
        if (options.with) {
            let /** @type {?} */ nestedControls = options.with.filter(t => t.split('.')[0] == controlName);
            let /** @type {?} */ controlNames = nestedControls.map(x => {
                let /** @type {?} */ splitControls = x.split('.');
                splitControls.splice(0, 1);
                return splitControls.join('.');
            });
            jObjectOptions.with = controlNames;
        }
        if (options.value && options.value[controlName])
            jObjectOptions.value = options.value[controlName];
        jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
        return jObjectOptions;
    }
    return undefined;
}

class RxFormGroup extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] {
    /**
     * @param {?} model
     * @param {?} entityObject
     * @param {?} controls
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     */
    constructor(model, entityObject, controls, validatorOrOpts, asyncValidator) {
        super(controls, validatorOrOpts, asyncValidator);
        this.model = model;
        this.entityObject = entityObject;
        this._modified = {};
        this._isModified = false;
        this.baseObject = {};
        for (var column in this.entityObject)
            this.baseObject[column] = this.entityObject[column];
        this.formDataProvider = new FormDataProvider();
    }
    /**
     * @param {?} modelInstance
     * @param {?} jObject
     * @return {?}
     */
    bindPrimaryKey(modelInstance, jObject) {
        let /** @type {?} */ instanceContainer = defaultContainer.get(modelInstance.constructor);
        if (instanceContainer) {
            let /** @type {?} */ primaryKeyProp = instanceContainer.properties.filter(x => x.isPrimaryKey)[0];
            if (primaryKeyProp && this.modelInstance[primaryKeyProp.name])
                jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
        }
    }
    /**
     * @return {?}
     */
    get modifiedValue() {
        let /** @type {?} */ jObject = {};
        if (Object.keys(this._modified).length > 0) {
            this.bindPrimaryKey(this.modelInstance, jObject);
            for (var /** @type {?} */ columnName in this._modified) {
                if (this.controls[columnName] instanceof RxFormGroup)
                    jObject[columnName] = ( /** @type {?} */(this.controls[columnName])).modifiedValue;
                else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                    let /** @type {?} */ formArray = /** @type {?} */ (this.controls[columnName]);
                    jObject[columnName] = [];
                    for (var /** @type {?} */ i = 0; i < this._modified[columnName].length; i++) {
                        let /** @type {?} */ modifiedValue = ( /** @type {?} */(formArray.controls[i])).modifiedValue;
                        if (Object.keys(modifiedValue).length > 0)
                            jObject[columnName].push(modifiedValue);
                    }
                    if (jObject[columnName].length == 0)
                        delete jObject[columnName];
                }
                else
                    jObject[columnName] = this._modified[columnName];
            }
            return jObject;
        }
        return this._modified;
    }
    /**
     * @return {?}
     */
    get isModified() {
        return this._isModified;
    }
    /**
     * @param {?=} controlName
     * @return {?}
     */
    patch(controlName) {
        if (controlName) {
            let /** @type {?} */ control = /** @type {?} */ (this.controls[controlName]);
            this.processModified(controlName, control);
        }
        else {
            this.nestedFormsModification();
        }
        this._isModified = Object.keys(this._modified).length > 0;
        if (!this._isModified)
            this.nestedArrayIsModified();
        if (this.parent)
            ( /** @type {?} */(this.parent)).patch();
    }
    /**
     * @return {?}
     */
    isDirty() {
        let /** @type {?} */ isDirty = false;
        for (let /** @type {?} */ name in this.value) {
            let /** @type {?} */ currentValue = this.modelInstance[name];
            if (!(this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])) {
                isDirty = ApplicationUtil.notEqualTo(this.baseObject[name], currentValue);
            }
            else if (this.controls[name] instanceof RxFormGroup)
                isDirty = ( /** @type {?} */(this.controls[name])).isDirty();
            else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                for (let /** @type {?} */ formGroup of ( /** @type {?} */(this.controls[name])).controls) {
                    isDirty = ( /** @type {?} */(formGroup)).isDirty();
                }
            }
            if (isDirty)
                break;
        }
        return isDirty;
    }
    ;
    /**
     * @param {?=} options
     * @return {?}
     */
    resetForm(options) {
        for (let /** @type {?} */ name in this.controls) {
            if (isResetControl(name, this.controls[name], options)) {
                if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
                    ( /** @type {?} */(this.controls[name])).resetForm(getNestedOptions(name, options));
                else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                    ( /** @type {?} */(this.controls[name])).resetForm(options && options.value ? options.value[name] : undefined);
                }
                else {
                    if (options && options.value && RegexValidator.isNotBlank(options.value[name]))
                        this.controls[name].reset(options.value[name]);
                    else
                        this.controls[name].reset();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    commit() {
        for (let /** @type {?} */ name in this.controls) {
            if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
                ( /** @type {?} */(this.controls[name])).commit();
            else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                ( /** @type {?} */(this.controls[name])).commit();
            }
            else {
                ( /** @type {?} */(this.controls[name])).commit();
            }
        }
    }
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    patchModelValue(value, options) {
        if (value) {
            for (let /** @type {?} */ name in this.controls) {
                if (this.controls[name] instanceof RxFormGroup && value[name])
                    ( /** @type {?} */(this.controls[name])).patchModelValue(value[name], options);
                else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] && Array.isArray(value[name])) {
                    let /** @type {?} */ index = 0;
                    for (let /** @type {?} */ formGroup of ( /** @type {?} */(this.controls[name])).controls) {
                        if (value[name][index])
                            ( /** @type {?} */(formGroup)).patchModelValue(value[name][index], options);
                        index = index + 1;
                    }
                }
                else if (value[name] !== undefined)
                    this.controls[name].patchValue(value[name], options);
            }
        }
    }
    /**
     * @param {?} onlyMessage
     * @return {?}
     */
    getErrorSummary(onlyMessage) {
        let /** @type {?} */ jObject = {};
        Object.keys(this.controls).forEach(columnName => {
            if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                let /** @type {?} */ error = ( /** @type {?} */(this.controls[columnName])).getErrorSummary(false);
                if (Object.keys(error).length > 0)
                    jObject[columnName] = error;
            }
            else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                let /** @type {?} */ index = 0;
                for (let /** @type {?} */ formGroup of ( /** @type {?} */(this.controls[columnName])).controls) {
                    let /** @type {?} */ error = ( /** @type {?} */(formGroup)).getErrorSummary(false);
                    if (Object.keys(error).length > 0) {
                        error.index = index;
                        if (!jObject[columnName])
                            jObject[columnName] = [];
                        jObject[columnName].push(error);
                    }
                    index++;
                }
            }
            else {
                if (this.controls[columnName].errors) {
                    let /** @type {?} */ error = this.controls[columnName].errors;
                    if (onlyMessage)
                        for (let /** @type {?} */ validationName in error)
                            jObject[columnName] = error[validationName].message;
                    else
                        jObject[columnName] = error;
                }
            }
        });
        return jObject;
    }
    /**
     * @return {?}
     */
    valueChangedSync() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup) && !(this.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || this.entityObject[columnName] instanceof RxFormControl) && ApplicationUtil.notEqualTo(( /** @type {?} */(this.controls[columnName])).getControlValue(), this.entityObject[columnName])) {
                this.controls[columnName].setValue(this.entityObject[columnName], { updateChanged: true });
            }
            else if ((this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || this.controls[columnName] instanceof RxFormArray)) {
                for (let /** @type {?} */ formGroup of ( /** @type {?} */(this.controls[columnName])).controls) {
                    ( /** @type {?} */(formGroup)).valueChangedSync();
                }
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                ( /** @type {?} */(this.controls[columnName])).valueChangedSync();
            }
        });
    }
    /**
     * @return {?}
     */
    refreshDisable() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup)) {
                ( /** @type {?} */(this.controls[columnName])).refresh();
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                ( /** @type {?} */(this.controls[columnName])).refreshDisable();
            }
        });
    }
    /**
     * @return {?}
     */
    bindErrorMessages() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup)) {
                ( /** @type {?} */(this.controls[columnName])).bindError();
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                ( /** @type {?} */(this.controls[columnName])).bindErrorMessages();
            }
        });
    }
    /**
     * @return {?}
     */
    get submitted() {
        return this._submitted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set submitted(value) {
        this._submitted = value;
        Object.keys(this.controls).forEach(columnName => {
            if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                let /** @type {?} */ formArray = /** @type {?} */ (this.controls[columnName]);
                for (let /** @type {?} */ formGroup of formArray.controls)
                    ( /** @type {?} */(formGroup)).submitted = value;
            }
            else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                ( /** @type {?} */(this.controls[columnName])).submitted = value;
            }
            else
                ( /** @type {?} */(this.controls[columnName])).bindError();
        });
    }
    /**
     * @return {?}
     */
    get modelInstanceValue() {
        return clone(this.entityObject);
    }
    /**
     * @return {?}
     */
    get modelInstance() {
        return this.entityObject;
    }
    /**
     * @return {?}
     */
    get controlsError() {
        return this.getErrorSummary(true);
    }
    /**
     * @return {?}
     */
    toFormData() {
        return this.formDataProvider.convertToFormData(this.value);
    }
    /**
     * @param {?} controlName
     * @param {?} control
     * @return {?}
     */
    processModified(controlName, control) {
        if (control.isModified)
            this._modified[controlName] = control.value;
        else
            delete this._modified[controlName];
        this._isModified = Object.keys(this._modified).length > 0;
    }
    /**
     * @return {?}
     */
    nestedArrayIsModified() {
        for (var /** @type {?} */ controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormArray)
                this._isModified = ( /** @type {?} */(this.controls[controlName])).isModified;
            if (this._isModified)
                break;
        }
    }
    /**
     * @return {?}
     */
    nestedFormsModification() {
        for (var /** @type {?} */ controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormGroup)
                this.processModified(controlName, this.controls[controlName]);
            else if (this.controls[controlName] instanceof RxFormArray) {
                if (( /** @type {?} */(this.controls[controlName])).isModified) {
                    let /** @type {?} */ formGroups = ( /** @type {?} */(this.controls[controlName])).controls;
                    this._modified[controlName] = [];
                    for (var /** @type {?} */ formGroup of formGroups) {
                        if (( /** @type {?} */(formGroup)).isModified) {
                            if (!this._modified[controlName])
                                this._modified[controlName] = [];
                            this._modified[controlName].push(( /** @type {?} */(formGroup)).modifiedValue);
                        }
                    }
                    if (this._modified[controlName].length == 0)
                        delete this._modified[controlName];
                }
                else if (this._modified[controlName])
                    delete this._modified[controlName];
            }
        }
    }
}

class FormProvider {
    /**
     * @param {?} control
     * @param {?} config
     * @param {?=} isDynamicConfig
     * @return {?}
     */
    static ProcessRule(control, config, isDynamicConfig = false) {
        const /** @type {?} */ formGroupValue = ApplicationUtil.getParentObjectValue(control);
        const /** @type {?} */ parentObject = (control.parent) ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
        let /** @type {?} */ modelInstance = undefined;
        if (control.parent && control.parent instanceof RxFormGroup)
            modelInstance = ( /** @type {?} */(control.parent)).modelInstance;
        if (parentObject)
            this.updateFormControlValue(parentObject, control.parent.controls, control);
        else if (config.conditionalExpression)
            return false;
        return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
    }
    /**
     * @param {?} parentObject
     * @param {?} controls
     * @param {?} control
     * @return {?}
     */
    static updateFormControlValue(parentObject, controls, control) {
        for (var /** @type {?} */ controlName in parentObject) {
            if (!(parentObject[controlName] instanceof Object))
                if (controls[controlName] === control) {
                    parentObject[controlName] = control.value;
                    break;
                }
        }
    }
}

class ValidatorValueChecker {
    /**
     * @param {?} control
     * @param {?} config
     * @return {?}
     */
    static pass(control, config) {
        if (FormProvider.ProcessRule(control, config))
            return RegexValidator.isNotBlank(control.value);
        else
            return false;
    }
    /**
     * @param {?} control
     * @param {?} config
     * @return {?}
     */
    static passArrayValue(control, config) {
        if (FormProvider.ProcessRule(control, config))
            return control.value instanceof Array;
        else
            return false;
    }
}

const ARRAY_CONFIG = "ArrayConfig";
const FIELD_CONFIG = "FieldConfig";
const IP_CONFIG = "IpConfig";
const NUMBER_CONFIG = "NumberConfig";
const PASSWORD_CONFIG = "PasswordConfig";
const PATTERN_CONFIG = "PatternConfig";
const RANGE_CONFIG = "RangeConfig";

const CONFIG_REQUIRED_FIELDS = {
    [ARRAY_CONFIG]: ["matchValues"],
    [FIELD_CONFIG]: ["fieldName"],
    [IP_CONFIG]: ["version"],
    [PASSWORD_CONFIG]: ["validation"],
    [NUMBER_CONFIG]: ["value"],
    [PATTERN_CONFIG]: ["expression"],
    [RANGE_CONFIG]: ["minimumNumber", "maximumNumber"],
};

/**
 * @param {?} config
 * @param {?} control
 * @param {?=} configName
 * @return {?}
 */
function getConfigObject(config, control, configName = '') {
    return (config != undefined && config != true) ? configProvider(control, config, configName) : {};
}
/**
 * @param {?} control
 * @param {?} config
 * @param {?} configName
 * @return {?}
 */
function configProvider(control, config, configName) {
    if (config.dynamicConfig) {
        let /** @type {?} */ currentConfig = FormProvider.ProcessRule(control, clone(config), true);
        if (typeof currentConfig != "boolean") {
            currentConfig.conditionalExpression = config.conditionalExpression;
            currentConfig.dynamicConfig = config.dynamicConfig;
            Object.keys(config).forEach(t => {
                if ((t != "conditionalExpression" && t != "dynamicConfig") || currentConfig[t] === undefined) {
                    currentConfig[t] = config[t];
                }
            });
            return currentConfig;
        }
        else
            return config;
    }
    return checkRequiredProps(config, configName);
}
/**
 * @param {?} config
 * @param {?} configName
 * @return {?}
 */
function checkRequiredProps(config, configName) {
    let /** @type {?} */ props = CONFIG_REQUIRED_FIELDS[configName];
    if (configName) {
        props.forEach(prop => {
            if (config[prop] === undefined)
                throw new Error(`Pass the property of '${prop}' with value in the ${configName}, otherwise it won't work.`);
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
    let /** @type {?} */ config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
        var /** @type {?} */ isValid = (!config || !config.allowWhiteSpace) ?
            RegexValidator.isValid(control.value, regExps[0]) :
            RegexValidator.isValid(control.value, regExps[1]);
        if (!isValid)
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}

/**
 * @param {?} configModel
 * @return {?}
 */
function alphaValidator(configModel) {
    return (control) => {
        return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function alphaNumericValidator(configModel) {
    return (control) => {
        return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function compareValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, FIELD_CONFIG);
        const /** @type {?} */ compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
        const /** @type {?} */ controlValue = control.value;
        const /** @type {?} */ compareControlValue = (compareControl) ? compareControl.value : '';
        if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
            if (!(compareControl && compareControl.value === controlValue))
                return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function containsValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (control.value.indexOf(config.value) == -1)
                return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} length
 * @param {?} checks
 * @return {?}
 */
function checkLength(length, checks) {
    let /** @type {?} */ isPassed = false;
    for (let /** @type {?} */ check of checks) {
        isPassed = (check == length);
        if (isPassed)
            break;
    }
    return isPassed;
}

/**
 * @param {?} numbers
 * @return {?}
 */
function calculate(numbers) {
    let /** @type {?} */ numberSum = 0;
    for (var /** @type {?} */ i = 0; i < numbers.length; i++)
        numberSum += parseInt(numbers.substring(i, i + 1));
    let /** @type {?} */ deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (var /** @type {?} */ i = numbers.length - 1; i >= 0; i -= 2) {
        numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
    }
    let /** @type {?} */ mod = numberSum % 10;
    mod = 10 - mod;
    if (mod == 10)
        mod = 0;
    return mod;
}

/**
 * @param {?} configModel
 * @return {?}
 */
function creditCardValidator(configModel) {
    let /** @type {?} */ cardDigits = {
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
        var /** @type {?} */ digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
        return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
    }
    /**
     * @param {?} cardNumber
     * @return {?}
     */
    function getCardProviderName(cardNumber) {
        var /** @type {?} */ cardProviderName = "";
        return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
    }
    return (control) => {
        const /** @type {?} */ controlValue = control.value;
        let /** @type {?} */ config = getConfigObject(configModel, control);
        const /** @type {?} */ parentObject = (control.parent) ? control.parent.value : undefined;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(controlValue)) {
                let /** @type {?} */ isValid = false;
                let /** @type {?} */ cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
                let /** @type {?} */ cardType = '';
                for (let /** @type {?} */ creditCardType of cardTypes) {
                    isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                    cardType = creditCardType;
                    if (isValid)
                        break;
                }
                if (!isValid)
                    return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
            }
        }
        return ObjectMaker.null();
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
    let /** @type {?} */ config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
        if (!RegexValidator.isValid(control.value, regExp))
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}

/**
 * @param {?} configModel
 * @return {?}
 */
function digitValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function emailValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function hexColorValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function lowercaseValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toLowerCase()))
                return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

const OPERATORS = {
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
    let /** @type {?} */ result = false;
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
    var /** @type {?} */ dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value)) {
                let /** @type {?} */ checkDate = dateProvider.getCompareDate(config, control);
                let /** @type {?} */ currentControlValue = dateProvider.getDate(control.value);
                let /** @type {?} */ isValid = operationType == AnnotationTypes.minDate ? runCondition(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}
/**
 * @param {?} control
 * @param {?} config
 * @param {?} operationType
 * @return {?}
 */
function validateDate(control, config, operationType) {
    config = getConfigObject(config, control);
    var /** @type {?} */ dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value)) {
                return ObjectMaker.toJson(operationType, config, [control.value]);
            }
        }
    }
    return ObjectMaker.null();
}

/**
 * @param {?} configModel
 * @return {?}
 */
function maxDateValidator(configModel) {
    return (control) => {
        return dateChecker(control, configModel, AnnotationTypes.maxDate);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function maxLengthValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value.length <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function maxNumberValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function minDateValidator(configModel) {
    return (control) => {
        return dateChecker(control, configModel, AnnotationTypes.minDate);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function minLengthValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).length >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function minNumberValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function passwordValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, PASSWORD_CONFIG);
        let /** @type {?} */ controlValue = control.value;
        if (RegexValidator.isNotBlank(controlValue)) {
            let /** @type {?} */ validation = RegexValidator.isValidPassword(config.validation, controlValue);
            if (!validation.isValid)
                return ObjectMaker.toJson(AnnotationTypes.password, config, [controlValue]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function rangeValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, RANGE_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).indexOf(".") == -1 && parseInt(control.value) >= config.minimumNumber && parseInt(control.value) <= config.maximumNumber))
                return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?=} configModel
 * @return {?}
 */
function uppercaseValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toUpperCase()))
                return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function requiredValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value)) {
                return ObjectMaker.toJson(AnnotationTypes.required, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function patternValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, PATTERN_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            for (var /** @type {?} */ pattern in config.expression)
                if (!(RegexValidator.isValid(control.value, config.expression[pattern])))
                    return ObjectMaker.toJson(pattern, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function timeValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ isValid = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function urlValidator(configModel) {
    return (control) => {
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
        var /** @type {?} */ result = false;
        try {
            var /** @type {?} */ json = JSON.parse(value);
            result = !!json && typeof json === 'object';
        }
        catch ( /** @type {?} */ex) {
            result = false;
        }
        return result;
    }
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (process(control.value))
                return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
        }
        return ObjectMaker.null();
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
    const /** @type {?} */ matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
    const /** @type {?} */ matchControlValue = (matchControl) ? matchControl.value : config.value !== undefined ? config.value : '';
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
            let /** @type {?} */ isValid = false;
            switch (relationalOperatorName) {
                case AnnotationTypes.greaterThan:
                    isValid = parseFloat(control.value) > parseFloat(matchControlValue);
                    break;
                case AnnotationTypes.lessThan:
                    isValid = parseFloat(control.value) < parseFloat(matchControlValue);
                    break;
                case AnnotationTypes.greaterThanEqualTo:
                    isValid = parseFloat(control.value) >= parseFloat(matchControlValue);
                    break;
                case AnnotationTypes.lessThanEqualTo:
                    isValid = parseFloat(control.value) <= parseFloat(matchControlValue);
                    break;
            }
            if (!isValid)
                return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
        }
    }
    return ObjectMaker.null();
}

/**
 * @param {?} configModel
 * @return {?}
 */
function greaterThanValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function greaterThanEqualToValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function lessThanEqualToValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function lessThanValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.lessThan);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function choiceValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (control.value instanceof Array) {
                config.minLength = (config.minLength == undefined) ? 0 : config.minLength;
                config.maxLength = (config.maxLength == undefined) ? 0 : config.maxLength;
                if ((((control.value.length) < config.minLength) || (config.maxLength !== 0 && control.value.length > config.maxLength)))
                    return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function differentValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, FIELD_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            const /** @type {?} */ differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
            const /** @type {?} */ differentControlValue = (differentControl) ? differentControl.value : '';
            if (!(differentControl && differentControl.value != control.value))
                return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function numericValidator(configModel) {
    return (control) => {
        if (configModel && (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.numeric]))
            ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue)))
                return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function evenValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value % 2 == 0))
                return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function oddValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(!(control.value % 2 == 0)) || !ApplicationUtil.isNumeric(control.value))
                return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
        }
        return ObjectMaker.null();
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
        let /** @type {?} */ isPositive = false;
        for (var /** @type {?} */ index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
            if (dividend % index === 0) {
                if (index == value)
                    isPositive = true;
                if (dividend / index !== index)
                    if ((dividend / index) == value)
                        isPositive = true;
                if (isPositive)
                    break;
            }
        }
        return isPositive;
    }
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        const /** @type {?} */ dividendField = (control.parent && config.fieldName) ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        const /** @type {?} */ dividend = (config.fieldName && dividendField) ? dividendField.value : config.dividend;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
                if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value)))
                    return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function leapYearValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var /** @type {?} */ isValid = (control.value % 100 === 0) ? (control.value % 400 === 0) : (control.value % 4 === 0);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function allOfValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var /** @type {?} */ testResult = false;
            for (let /** @type {?} */ value of config.matchValues) {
                testResult = control.value.some((y) => y == value);
                if (!testResult)
                    break;
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function oneOfValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var /** @type {?} */ testResult = false;
            for (let /** @type {?} */ value of config.matchValues) {
                testResult = control.value.some((y) => y == value);
                if (testResult)
                    break;
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function noneOfValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (FormProvider.ProcessRule(control, config)) {
            var /** @type {?} */ testResult = false;
            for (let /** @type {?} */ value of config.matchValues) {
                let /** @type {?} */ matchValue = ApplicationUtil.lowerCaseWithTrim(value);
                testResult = Array.isArray(control.value) ? control.value.some((y) => ApplicationUtil.lowerCaseWithTrim(y) === matchValue) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
                if (testResult)
                    break;
            }
            if (testResult)
                return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function macValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function asciiValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function dataUriValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function portValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ isValid = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && (control.value >= 0 && control.value <= 65535);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function latLongValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ splitText = control.value.split(',');
            if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule.long)))
                return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function extensionValidator(configModel) {
    return (control, files) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.extension])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let /** @type {?} */ testResult = true;
                let /** @type {?} */ extension = '';
                for (var /** @type {?} */ i = 0; i < files.length; i++) {
                    let /** @type {?} */ file = files.item(i);
                    let /** @type {?} */ splitText = file.name.split(".");
                    extension = splitText[splitText.length - 1];
                    let /** @type {?} */ result = config.extensions.filter(t => { return extension.toLowerCase() == t.toLowerCase(); })[0];
                    if (!result) {
                        testResult = false;
                        break;
                    }
                }
                if (!testResult)
                    return ObjectMaker.toJson(AnnotationTypes.extension, config, [extension, config.extensions.join(",")]);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function fileSizeValidator(configModel) {
    return (control, files) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.fileSize])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let /** @type {?} */ minFileSize = config.minSize ? config.minSize : 0;
                let /** @type {?} */ testResult = false;
                let /** @type {?} */ fileSize = 0;
                for (var /** @type {?} */ i = 0; i < files.length; i++) {
                    let /** @type {?} */ file = files.item(i);
                    fileSize = file.size;
                    testResult = (!(fileSize >= minFileSize && fileSize <= config.maxSize));
                    if (testResult)
                        break;
                }
                if (testResult)
                    return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [fileSize, config.maxSize]);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function endsWithValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var /** @type {?} */ endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
            if (endString != config.value)
                return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function startsWithValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var /** @type {?} */ startString = String(control.value).substr(0, config.value.length);
            if (startString != config.value)
                return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
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
        let /** @type {?} */ isPrimeNumber = value != 1;
        for (var /** @type {?} */ i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        return isPrimeNumber;
    }
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value))
                return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function latitudeValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function longitudeValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.long, AnnotationTypes.longitude);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function composeValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (config.validators) {
                let /** @type {?} */ result = undefined;
                for (let /** @type {?} */ validator of config.validators) {
                    result = validator(control);
                    if (result)
                        break;
                }
                if (result)
                    return (config.messageKey || config.message) ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @param {?} entity
 * @return {?}
 */
function ruleValidator(configModel, entity) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            let /** @type {?} */ result = null;
            for (let /** @type {?} */ rule of config.customRules) {
                result = rule(entity);
                if (result)
                    break;
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function fileValidator(configModel) {
    return (control, files) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.file])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.file);
        if (files) {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    let /** @type {?} */ minFiles = config.minFiles ? config.minFiles : 0;
                    let /** @type {?} */ maxFiles = config.maxFiles ? config.maxFiles : files.length;
                    if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles))
                        return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function customValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            const /** @type {?} */ formGroupValue = ApplicationUtil.getParentObjectValue(control);
            const /** @type {?} */ parentObject = (control.parent) ? control.parent.value : undefined;
            let /** @type {?} */ result = null;
            for (let /** @type {?} */ rule of config.customRules) {
                result = rule(formGroupValue, parentObject, config.additionalValue);
                if (result)
                    break;
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function uniqueValidator(configModel) {
    var /** @type {?} */ setTimeoutFunc = (invalidateControls, controlValues) => {
        let /** @type {?} */ timeOut = setTimeout(() => {
            invalidateControls.forEach(t => {
                let /** @type {?} */ isMatched = controlValues.filter(x => x == t.value)[0];
                if (!isMatched)
                    t.updateValueAndValidity();
            });
            clearTimeout(timeOut);
        }, 200);
    };
    var /** @type {?} */ additionalValidation = (config, fieldName, formGroup, formArray, currentValue) => {
        let /** @type {?} */ indexOf = formArray.controls.indexOf(formGroup);
        let /** @type {?} */ formArrayValue = [];
        if (indexOf != -1) {
            formArray.value.forEach((t, i) => {
                if (indexOf != i)
                    formArrayValue.push(t);
            });
            return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
        }
        return false;
    };
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let /** @type {?} */ formArray = ApplicationUtil.getParentFormArray(control);
                let /** @type {?} */ parentFormGroup = control.parent ? control.parent : undefined;
                let /** @type {?} */ invalidateControls = [];
                let /** @type {?} */ controlValues = [];
                if (formArray && parentFormGroup) {
                    let /** @type {?} */ currentValue = control.value;
                    let /** @type {?} */ fieldName = ApplicationUtil.getFormControlName(control);
                    let /** @type {?} */ isMatched = false;
                    for (let /** @type {?} */ formGroup of formArray.controls) {
                        if (formGroup != parentFormGroup) {
                            isMatched = (ApplicationUtil.toLower(formGroup.controls[fieldName].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]));
                            if (formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]) {
                                var /** @type {?} */ matchedControl = formArray.controls.filter(t => t.controls[fieldName] != formGroup.controls[fieldName] && ApplicationUtil.toLower(t.controls[fieldName].value) == ApplicationUtil.toLower(formGroup.controls[fieldName].value))[0];
                                if (!matchedControl)
                                    invalidateControls.push(formGroup.controls[fieldName]);
                            }
                            else
                                controlValues.push(formGroup.controls[fieldName].value);
                        }
                        if (isMatched)
                            break;
                    }
                    if (invalidateControls.length > 0)
                        setTimeoutFunc(invalidateControls, controlValues);
                    let /** @type {?} */ validation = false;
                    if (config.additionalValidation) {
                        validation = additionalValidation(config, fieldName, parentFormGroup, formArray, currentValue);
                    }
                    if (isMatched && !validation)
                        return ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function imageValidator(configModel) {
    return (control, files) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.image])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
        if (!files)
            return ObjectMaker.null();
        return new Promise((resolve, reject) => {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    let /** @type {?} */ testResult = false;
                    for (var /** @type {?} */ i = 0; i < files.length; i++) {
                        let /** @type {?} */ file = files.item(i);
                        let /** @type {?} */ type = file.type ? file.type.split('/') : [];
                        testResult = type.length > 1 && type[0] == "image";
                        if (!testResult)
                            break;
                        let /** @type {?} */ image = new Image();
                        config.minWidth = config.minWidth ? config.minWidth : 0;
                        config.minHeight = config.minHeight ? config.minHeight : 0;
                        image.onload = () => {
                            testResult = (image.width >= config.minWidth && image.height >= config.minHeight) && (image.width <= config.maxWidth && image.height <= config.maxHeight);
                            if (!testResult)
                                resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));
                            else
                                resolve(ObjectMaker.null());
                        };
                        image.onerror = () => {
                            resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                        };
                        image.src = URL.createObjectURL(file);
                    }
                    if (!testResult)
                        resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                }
            }
            return ObjectMaker.null();
        });
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function notEmptyValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value, true)) {
                return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} value
 * @return {?}
 */
function checkIpV4(value) {
    let /** @type {?} */ isValid = RegexValidator.isValid(value, RegExRule.ipV4);
    if (isValid) {
        const /** @type {?} */ splitDots = value.split('.');
        for (let /** @type {?} */ ipNum of splitDots) {
            isValid = ipNum <= 255;
            if (!isValid)
                break;
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
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control, IP_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ values = config.isCidr ? control.value.split('/') : [control.value];
            var /** @type {?} */ isValid = (config.version == IpVersion.V4) ?
                checkIpV4(values[0]) :
                (config.version == IpVersion.V6) ?
                    checkIpV6(values[0]) :
                    (checkIpV4(values[0]) || checkIpV6(values[0]));
            if (config.isCidr && isValid) {
                isValid = (values.length > 1) ?
                    config.version == IpVersion.V4 ?
                        RegexValidator.isValid(values[1], RegExRule.cidrV4) :
                        config.version == IpVersion.V6 ?
                            RegexValidator.isValid(values[1], RegExRule.cidrV6) :
                            (RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6)) :
                    false;
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function cusipValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var /** @type {?} */ controlValue = control.value.toUpperCase();
            let /** @type {?} */ isValid = RegexValidator.isValid(controlValue, RegExRule.cusip);
            if (isValid) {
                let /** @type {?} */ numericValues = controlValue.split("").map((value) => {
                    var /** @type {?} */ charCode = value.charCodeAt(0);
                    return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
                });
                let /** @type {?} */ totalCount = 0;
                for (var /** @type {?} */ i = 0; i < numericValues.length - 1; i++) {
                    var /** @type {?} */ numericValue = parseInt(numericValues[i], 10);
                    if (i % 2 !== 0) {
                        numericValue *= 2;
                    }
                    if (numericValue > 9) {
                        numericValue -= 9;
                    }
                    totalCount += numericValue;
                }
                totalCount = (10 - (totalCount % 10)) % 10;
                isValid = totalCount == numericValues[numericValues.length - 1];
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function gridValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ controlValue = control.value.toUpperCase();
            var /** @type {?} */ isValid = RegexValidator.isValid(controlValue, RegExRule.grid);
            if (isValid) {
                controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');
                if ('GRID:' === controlValue.substr(0, 5)) {
                    controlValue = controlValue.substr(5);
                }
                let /** @type {?} */ alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var /** @type {?} */ alphaNumLength = alphaNums.length, /** @type {?} */ length = controlValue.length, /** @type {?} */ check = Math.floor(alphaNumLength / 2);
                for (var /** @type {?} */ i = 0; i < length; i++) {
                    check = (((check || alphaNumLength) * 2) % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
                }
                isValid = (check === 1);
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function dateValidator(configModel) {
    return (control) => {
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
    let /** @type {?} */ result = false;
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
    let /** @type {?} */ splitTime = (value) ? value.split(':') : [];
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
                let /** @type {?} */ crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
                let /** @type {?} */ crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
                let /** @type {?} */ currentControlValue = getTime(control.value);
                let /** @type {?} */ isValid = operationType == AnnotationTypes.minTime ? runCondition$1(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}

/**
 * @param {?} configModel
 * @return {?}
 */
function minTimeValidator(configModel) {
    return (control) => {
        return timeChecker(control, configModel, AnnotationTypes.minTime);
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function maxTimeValidator(configModel) {
    return (control) => {
        return timeChecker(control, configModel, AnnotationTypes.maxTime);
    };
}

const APP_VALIDATORS = {
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
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ validatorNames = Object.keys(config.validation);
            let /** @type {?} */ failed = false;
            for (var /** @type {?} */ validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (failed)
                    break;
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function orValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ validatorNames = Object.keys(config.validation);
            let /** @type {?} */ failed = false;
            for (var /** @type {?} */ validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (!failed)
                    break;
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

/**
 * @param {?} configModel
 * @return {?}
 */
function notValidator(configModel) {
    return (control) => {
        let /** @type {?} */ config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let /** @type {?} */ validatorNames = Object.keys(config.validation);
            let /** @type {?} */ failed = false;
            for (var /** @type {?} */ validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (!failed)
                    break;
            }
            if (!failed)
                return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

const LOGICAL_VALIDATORS = { and: andValidator, or: orValidator, not: notValidator };
const ASYNC = "async";
const ENTITY_OBJECT = "entityObject";
class RxFormBuilder extends BaseFormBuilder {
    constructor() {
        super();
        this.conditionalObjectProps = [];
        this.conditionalValidationInstance = {};
        this.builderConfigurationConditionalObjectProps = [];
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = {};
        this.isNested = false;
        this.isGroupCalled = false;
        this.isNestedBinding = false;
    }
    /**
     * @param {?} instanceFunc
     * @param {?} entityObject
     * @return {?}
     */
    getInstanceContainer(instanceFunc, entityObject) {
        return this.instaceProvider(instanceFunc, entityObject);
    }
    /**
     * @param {?} formGroup
     * @param {?} object
     * @return {?}
     */
    setValue(formGroup, object) {
        for (var /** @type {?} */ col in object) {
            var /** @type {?} */ control = formGroup.get([col]);
            control.setValue(object[col]);
            control.updateValueAndValidity();
        }
    }
    /**
     * @param {?} fomrBuilderConfiguration
     * @return {?}
     */
    extractExpressions(fomrBuilderConfiguration) {
        if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
            for (var /** @type {?} */ property in fomrBuilderConfiguration.dynamicValidation) {
                for (var /** @type {?} */ decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
                    if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
                        let /** @type {?} */ columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
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
    addAsyncValidation(property, propertyValidators, propValidationConfig) {
        let /** @type {?} */ asyncValidators = [];
        if (propertyValidators) {
            for (let /** @type {?} */ propertyValidator of propertyValidators) {
                if (propertyValidator.isAsync)
                    propertyValidator.config.forEach(t => { asyncValidators.push(t); });
            }
        }
        if (propValidationConfig && propValidationConfig[ASYNC]) {
            propValidationConfig[ASYNC].forEach(t => { asyncValidators.push(t); });
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
    addFormControl(property, propertyValidators, propValidationConfig, instance, entity) {
        let /** @type {?} */ validators = [];
        let /** @type {?} */ columns = [];
        if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) || (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])) {
            let /** @type {?} */ props = [];
            if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]))
                instance.conditionalValidationProps[property.name].forEach(t => props.push(t));
            if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])
                this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(t => props.push(t));
            validators.push(conditionalChangeValidator(props));
        }
        if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
            let /** @type {?} */ propConditions = [];
            if (this.conditionalObjectProps)
                propConditions = this.conditionalObjectProps.filter(t => t.propName == property.name);
            if (this.builderConfigurationConditionalObjectProps)
                this.builderConfigurationConditionalObjectProps.filter(t => t.propName == property.name).forEach(t => propConditions.push(t));
            propConditions.forEach(t => {
                if (t.referencePropName && columns.indexOf(t.referencePropName) == -1)
                    columns.push(t.referencePropName);
            });
            if (columns.length > 0)
                validators.push(conditionalChangeValidator(columns));
        }
        for (let /** @type {?} */ propertyValidator of propertyValidators) {
            if (!propertyValidator.isAsync)
                switch (propertyValidator.annotationType) {
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
        if (propValidationConfig)
            this.additionalValidation(validators, propValidationConfig);
        if (this.currentFormGroupPropOtherValidator[property.name])
            this.currentFormGroupPropOtherValidator[property.name].forEach(t => { validators.push(t); });
        return validators;
    }
    /**
     * @param {?} validations
     * @param {?} propValidationConfig
     * @return {?}
     */
    additionalValidation(validations, propValidationConfig) {
        for (var /** @type {?} */ col in AnnotationTypes) {
            if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
                validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
            }
            else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]])
                validations.push(propValidationConfig[col]);
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
    getEntity(object, formBuilderConfiguration, propertyName, isSameObjectConstructor = false) {
        if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName])
            return formBuilderConfiguration.genericEntities[propertyName];
        return isSameObjectConstructor ? object.constructor : undefined;
    }
    /**
     * @param {?} object
     * @param {?} propertyInfo
     * @param {?} formBuilderConfiguration
     * @return {?}
     */
    getObjectPropertyInstance(object, propertyInfo, formBuilderConfiguration) {
        if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name])
            return object[propertyInfo.name].constructor;
        else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0)
            return object[propertyInfo.name][0].constructor;
        return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
    }
    /**
     * @template T
     * @param {?} instanceContainer
     * @param {?} object
     * @param {?} formBuilderConfiguration
     * @return {?}
     */
    checkObjectPropAdditionalValidation(instanceContainer, object, formBuilderConfiguration) {
        var /** @type {?} */ props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY);
        props.forEach(t => {
            let /** @type {?} */ entity = t.entity;
            if (!t.entity)
                entity = this.getObjectPropertyInstance(object, t, formBuilderConfiguration);
            if (entity) {
                let /** @type {?} */ instance = this.getInstanceContainer(entity, null);
                if (instance.conditionalValidationProps) {
                    for (var /** @type {?} */ key in instance.conditionalValidationProps) {
                        var /** @type {?} */ prop = instanceContainer.properties.filter(t => t.name == key)[0];
                        if (prop) {
                            if (!instanceContainer.conditionalValidationProps)
                                instanceContainer.conditionalValidationProps = {};
                            if (!instanceContainer.conditionalValidationProps[key])
                                instanceContainer.conditionalValidationProps[key] = [];
                            instance.conditionalValidationProps[key].forEach(x => {
                                if (t.propertyType != ARRAY_PROPERTY)
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));
                                else
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
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
    getObject(model, entityObject, formBuilderConfiguration) {
        let /** @type {?} */ json = {};
        if (typeof model == FUNCTION_STRING)
            json.model = model;
        if (typeof model == FUNCTION_STRING && (entityObject instanceof FormBuilderConfiguration)) {
            json.entityObject = this.createClassObject(json.model, entityObject);
        }
        if (entityObject && !(entityObject instanceof FormBuilderConfiguration))
            json.entityObject = entityObject;
        if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration)
            json.formBuilderConfiguration = entityObject;
        else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
            json.formBuilderConfiguration = formBuilderConfiguration;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
        }
        if (!entityObject) {
            if (typeof model == OBJECT_STRING)
                json.model = model.constructor;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
        }
        else if (model && (entityObject instanceof FormBuilderConfiguration) && (typeof model == OBJECT_STRING)) {
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
    group(groupObject, validatorConfig) {
        let /** @type {?} */ modelInstance = super.createInstance();
        let /** @type {?} */ entityObject = {};
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.isGroupCalled = true;
        let /** @type {?} */ formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
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
    applyAllPropValidator(propName, validatorConfig, modelInstance) {
        if (validatorConfig && validatorConfig.applyAllProps) {
            if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
                validatorConfig.applyAllProps.forEach((t) => {
                    if (t.name == RX_WEB_VALIDATOR) {
                        t(propName, modelInstance);
                    }
                    else {
                        if (!this.currentFormGroupPropOtherValidator[propName])
                            this.currentFormGroupPropOtherValidator[propName] = [];
                        this.currentFormGroupPropOtherValidator[propName].push(t);
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
    dynamicValidationPropCheck(propName, validatorConfig) {
        return (validatorConfig == undefined) ? true : (!validatorConfig.dynamicValidationConfigurationPropertyName) ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
    }
    /**
     * @param {?} groupObject
     * @param {?} entityObject
     * @param {?} modelInstance
     * @param {?} validatorConfig
     * @return {?}
     */
    createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig) {
        for (var /** @type {?} */ propName in groupObject) {
            var /** @type {?} */ prop = groupObject[propName];
            if (prop instanceof Array && prop.length > 0 && typeof prop[0] != OBJECT_STRING) {
                let /** @type {?} */ propValidators = (prop.length > 1 && prop[1] instanceof Array) ? prop[1] : (prop.length == 2) ? [prop[1]] : [];
                let /** @type {?} */ propertyAdded = false;
                for (var /** @type {?} */ i = 0; i < propValidators.length; i++) {
                    if (propValidators[i].name == RX_WEB_VALIDATOR) {
                        propValidators[i](propName, modelInstance);
                        propertyAdded = true;
                    }
                    else {
                        if (!this.currentFormGroupPropOtherValidator[propName])
                            this.currentFormGroupPropOtherValidator[propName] = [];
                        this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
                    }
                }
                if (!propertyAdded)
                    defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (prop instanceof Array) {
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                    entityObject[propName] = prop;
                }
                else {
                    let /** @type {?} */ propModelInstance = super.createInstance();
                    if (typeof modelInstance == "function")
                        modelInstance.constructor = modelInstance;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
                    entityObject[propName] = [];
                    for (let /** @type {?} */ row of prop) {
                        let /** @type {?} */ jObject = {};
                        entityObject[propName].push(jObject);
                        this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
                    }
                }
            }
            else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl)) {
                let /** @type {?} */ formGroup = (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) ? prop.controls[0] : prop;
                if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || prop instanceof RxFormGroup)) {
                    formGroup = this.group(formGroup.controls);
                }
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || prop instanceof RxFormGroup) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
                }
                else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
                }
                else {
                    if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
                        this.formGroupPropOtherValidator[propName] = {};
                        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];
                        let /** @type {?} */ propModelInstance = super.createInstance();
                        entityObject[propName] = {};
                        entityObject[propName].constructor = propModelInstance.constructor;
                        defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance);
                        let /** @type {?} */ objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
                        this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
                    }
                    else
                        entityObject[propName] = groupObject[propName];
                }
            }
            if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                entityObject[propName] = prop;
            }
            else if ((prop && prop.length > 0 && (typeof prop[0] != OBJECT_STRING) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]))) {
                entityObject[propName] = prop[0];
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                entityObject[propName] = prop;
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || prop instanceof RxFormControl) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : { constructor: modelInstance });
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
    getValidatorConfig(validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
        let /** @type {?} */ validationProps = {};
        let /** @type {?} */ excludeProps = [];
        let /** @type {?} */ includeProps = [];
        let /** @type {?} */ ignoreUndefinedProps = [];
        if (validatorConfig) {
            for (var /** @type {?} */ propName in validatorConfig.dynamicValidation) {
                if (propName.indexOf(rootPropertyName) != -1 || (arrayPropertyName && propName.indexOf(arrayPropertyName) != -1)) {
                    let /** @type {?} */ splitProp = propName.split(".")[1];
                    if (splitProp)
                        validationProps[splitProp] = validatorConfig.dynamicValidation[propName];
                }
            }
            if (validatorConfig.excludeProps)
                excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
            if (validatorConfig.includeProps)
                includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
            if (validatorConfig.ignoreUndefinedProps)
                ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
            return { ignoreUndefinedProps: ignoreUndefinedProps, includeProps: includeProps, dynamicValidation: (validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName]) ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps, excludeProps: excludeProps };
        }
        return {};
    }
    /**
     * @param {?} properties
     * @param {?} rootPropertyName
     * @param {?=} isIgnoreProp
     * @return {?}
     */
    getProps(properties, rootPropertyName, isIgnoreProp = false) {
        let /** @type {?} */ props = [];
        for (let /** @type {?} */ prop of properties) {
            if (prop.indexOf(rootPropertyName) != -1) {
                let /** @type {?} */ splitProps = prop.split(".");
                if (splitProps.length == 2) {
                    props.push(splitProps[1]);
                }
                else if (splitProps.length > 2) {
                    splitProps.splice(0, 1);
                    props.push(splitProps.join("."));
                }
            }
        }
        if (isIgnoreProp && properties.filter(x => x == rootPropertyName.replace('.', '')).length == 1)
            props.push(':self:');
        return props;
    }
    /**
     * @template T
     * @param {?} model
     * @param {?=} entityObject
     * @param {?=} formBuilderConfiguration
     * @return {?}
     */
    formGroup(model, entityObject, formBuilderConfiguration) {
        let /** @type {?} */ json = this.getObject(model, entityObject, formBuilderConfiguration);
        model = json.model;
        entityObject = json.entityObject;
        if (entityObject.constructor != model && !this.isGroupCalled) {
            entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
        }
        formBuilderConfiguration = json.formBuilderConfiguration;
        if (formBuilderConfiguration)
            this.extractExpressions(formBuilderConfiguration);
        let /** @type {?} */ instanceContainer = this.getInstanceContainer(model, entityObject);
        this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
        let /** @type {?} */ formGroupObject = {};
        var /** @type {?} */ additionalValidations = {};
        instanceContainer.properties.forEach(property => {
            let /** @type {?} */ isIncludeProp = true;
            if (formBuilderConfiguration) {
                if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
                if (formBuilderConfiguration.dynamicValidation)
                    additionalValidations = formBuilderConfiguration.dynamicValidation;
                if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;
                if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
                    isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
                }
            }
            if (property.ignore)
                isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);
            if (isIncludeProp) {
                switch (property.propertyType) {
                    case PROPERTY:
                        if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || entityObject[property.name] instanceof RxFormControl)) {
                            var /** @type {?} */ propertyValidators = instanceContainer.propertyAnnotations.filter(t => t.propertyName == property.name);
                            formGroupObject[property.name] = new RxFormControl(super.sanitizeValue(instanceContainer, property.name, super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject)), this.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject), this.addAsyncValidation(property, propertyValidators, additionalValidations[property.name]), json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
                            this.isNested = false;
                        }
                        else
                            formGroupObject[property.name] = super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration);
                        break;
                    case OBJECT_PROPERTY:
                        let /** @type {?} */ objectValue = entityObject[property.name];
                        if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || objectValue instanceof RxFormGroup)) {
                            this.isNestedBinding = this.isNested = true;
                            if (instanceContainer && instanceContainer.conditionalObjectProps)
                                this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name);
                            if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps)
                                this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name);
                            if (this.formGroupPropOtherValidator[property.name])
                                this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
                            let /** @type {?} */ objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, objectValue, `${property.name}.`);
                            let /** @type {?} */ entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            formGroupObject[property.name] = this.formGroup(entity || property.entity || this.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
                            this.conditionalObjectProps = [];
                            this.builderConfigurationConditionalObjectProps = [];
                            this.isNestedBinding = this.isNested = false;
                        }
                        else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || objectValue instanceof RxFormGroup)
                            formGroupObject[property.name] = objectValue;
                        break;
                    case ARRAY_PROPERTY:
                        let /** @type {?} */ arrayObjectValue = entityObject[property.name];
                        if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])) {
                            this.isNestedBinding = this.isNested = true;
                            var /** @type {?} */ formArrayGroup = [];
                            let /** @type {?} */ index = 0;
                            let /** @type {?} */ entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            for (let /** @type {?} */ subObject of arrayObjectValue) {
                                if (instanceContainer && instanceContainer.conditionalObjectProps)
                                    this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                                if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps)
                                    this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                                if (this.formGroupPropOtherValidator[property.name])
                                    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
                                let /** @type {?} */ objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, subObject, `${property.name}.`, `${property.name}[${index}].`);
                                formArrayGroup.push(this.formGroup(entity || property.entity || this.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, objectValidationConfig));
                                index++;
                                this.conditionalObjectProps = [];
                                this.builderConfigurationConditionalObjectProps = [];
                            }
                            formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, null, null, property.arrayConfig);
                            this.isNestedBinding = this.isNested = false;
                        }
                        else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])
                            formGroupObject[property.name] = arrayObjectValue;
                        break;
                }
            }
        });
        if (!this.isNested) {
            this.conditionalValidationInstance = {};
            this.builderConfigurationConditionalObjectProps = [];
        }
        let /** @type {?} */ formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, undefined);
        if (!this.isNestedBinding && !this.isGroupCalled)
            formGroup.refreshDisable();
        return formGroup;
    }
}
RxFormBuilder.ɵfac = function RxFormBuilder_Factory(t) { return new (t || RxFormBuilder)(); };
RxFormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RxFormBuilder, factory: RxFormBuilder.ɵfac });
/**
 * @nocollapse
 */
RxFormBuilder.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxFormBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @abstract
 */
class BaseDirective {
    /**
     * @param {?} controls
     * @param {?=} model
     * @return {?}
     */
    applyValidations(controls, model = null) {
        if (this.model) {
            let /** @type {?} */ modelConfig = defaultContainer.get(model || this.model.constructor);
            if (modelConfig) {
                modelConfig.properties.forEach(property => {
                    if (controls[property.name]) {
                        switch (property.propertyType) {
                            case PROPERTY:
                                this.setValidatorConfig(controls[property.name], modelConfig, property);
                                break;
                            case OBJECT_PROPERTY:
                                this.applyValidations(controls[property.name].controls, property.entity);
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
    setValidatorConfig(control, modelConfig, property) {
        let /** @type {?} */ annotations = modelConfig.propertyAnnotations.filter(t => t.propertyName == property.name);
        annotations.forEach(annotation => {
            if (!control[TEMPLATE_VALIDATION_CONFIG])
                control[TEMPLATE_VALIDATION_CONFIG] = {};
            ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
        });
    }
}
BaseDirective.ɵfac = function BaseDirective_Factory(t) { return new (t || BaseDirective)(); };
BaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseDirective, inputs: { model: "model" } });
BaseDirective.propDecorators = {
    'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};


class RxwebFormDirective extends BaseDirective {
    constructor() {
        super(...arguments);
        this.clearTimeoutNumber = 0;
        this.validationRule = {};
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
        }
        else if (this.ngForm) {
            this.configureModelValidations();
        }
    }
    /**
     * @return {?}
     */
    configureModelValidations() {
        this.clearTimeoutNumber = setTimeout(() => {
            clearTimeout(this.clearTimeoutNumber);
            this.applyValidations(this.ngForm.form.controls);
            this.expressionProcessor(this.ngForm.form.controls);
            this.setConditionalValidator(this.ngForm.form.controls);
            this.updateValueAndValidity(this.ngForm.form.controls);
        }, 500);
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    updateValueAndValidity(controls) {
        Object.keys(controls).forEach(key => {
            if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
                this.updateValueAndValidity(controls[key].controls);
            else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"])
                this.updateValueAndValidity(controls[key].controls);
            else
                controls[key].updateValueAndValidity();
        });
    }
    /**
     * @param {?} controls
     * @param {?=} rootFieldName
     * @return {?}
     */
    expressionProcessor(controls, rootFieldName = "") {
        Object.keys(controls).forEach(fieldName => {
            let /** @type {?} */ formControl = controls[fieldName];
            if (formControl.validatorConfig) {
                Object.keys(AnnotationTypes).forEach(validatorName => {
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
                        let /** @type {?} */ columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);
                        defaultContainer.addChangeValidation(this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
                        let /** @type {?} */ columns = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);
                        defaultContainer.addChangeValidation(this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
                        Object.keys(formControl.validatorConfig[validatorName].validation).forEach(t => {
                            if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean")
                                defaultContainer.setLogicalConditional(this.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
                        });
                    }
                    else if (formControl.validatorConfig[validatorName] && ((validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime) || (validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName) || ((validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName))) {
                        defaultContainer.setConditionalValueProp(this.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
                    }
                });
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.expressionProcessor(formControl.controls, `${fieldName}.`);
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                if (formControl.controls)
                    formControl.controls.forEach((t, i) => {
                        if (t.controls)
                            this.expressionProcessor(t.controls, `${fieldName}[]`);
                    });
            }
        });
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    setConditionalValidator(controls) {
        Object.keys(controls).forEach(fieldName => {
            if (this.validationRule.conditionalValidationProps && this.validationRule.conditionalValidationProps[fieldName]) {
                controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(this.validationRule.conditionalValidationProps[fieldName]);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
RxwebFormDirective.ɵfac = function RxwebFormDirective_Factory(t) { return ɵRxwebFormDirective_BaseFactory(t || RxwebFormDirective); };
RxwebFormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxwebFormDirective, selectors: [["", "formGroup", ""], ["", "rxwebForm", ""]], inputs: { formGroup: "formGroup", ngForm: ["rxwebForm", "ngForm"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/**
 * @nocollapse
 */
RxwebFormDirective.ctorParameters = () => [];
RxwebFormDirective.propDecorators = {
    'formGroup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'ngForm': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['rxwebForm',] },],
};
const ɵRxwebFormDirective_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RxwebFormDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxwebFormDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[formGroup],[rxwebForm]'
            }]
    }], null, { formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ngForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxwebForm']
        }] }); })();

class DecimalProvider {
    /**
     * @param {?} decimalPipe
     * @param {?} localeId
     */
    constructor(decimalPipe, localeId) {
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
    replacer(value) {
        value = String(value);
        if (!this.isSetConfig)
            this.bindConfig();
        value = value.split(this.groupSeperator).join(BLANK);
        if (this.allowDecimalSymbol)
            value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
        var /** @type {?} */ splitValue = value.split(this.decimalSeperator);
        value = (splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1])) ? splitValue[0] : value;
        return value;
    }
    /**
     * @param {?} value
     * @param {?} digitsInfo
     * @return {?}
     */
    transFormDecimal(value, digitsInfo) {
        value = String(value);
        return this.decimalPipe.transform(value.replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
    }
    /**
     * @return {?}
     */
    setSymbolInConfig() {
        ReactiveFormConfig.number = { decimalSymbol: this.decimalSeperator, groupSymbol: this.groupSeperator };
    }
    /**
     * @return {?}
     */
    bindConfig() {
        if (ReactiveFormConfig.json) {
            if (ReactiveFormConfig.json.localeId)
                this.localeId = ReactiveFormConfig.json.localeId;
            if (ReactiveFormConfig.json.allowDecimalSymbol)
                this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
        }
        this.isSetConfig = true;
    }
}
DecimalProvider.ɵfac = function DecimalProvider_Factory(t) { return new (t || DecimalProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
DecimalProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DecimalProvider, factory: DecimalProvider.ɵfac });
/**
 * @nocollapse
 */
DecimalProvider.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] },] },
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, null); })();

class HtmlControlTemplateDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    ;
}
HtmlControlTemplateDirective.ɵfac = function HtmlControlTemplateDirective_Factory(t) { return new (t || HtmlControlTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
HtmlControlTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HtmlControlTemplateDirective, selectors: [["", "htmlControlTemplate", ""]], inputs: { type: ["htmlControlTemplate", "type"] } });
/**
 * @nocollapse
 */
HtmlControlTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
];
HtmlControlTemplateDirective.propDecorators = {
    'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['htmlControlTemplate',] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlControlTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[htmlControlTemplate]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['htmlControlTemplate']
        }] }); })();

class ControlHostDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    set portal(context) {
        if (context.templateRef) {
            if (this.view) {
                this.view.destroy();
                this.view = undefined;
            }
            this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.view)
            this.view.destroy();
        if (this.viewContainerRef)
            this.viewContainerRef.clear();
    }
}
ControlHostDirective.ɵfac = function ControlHostDirective_Factory(t) { return new (t || ControlHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ControlHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlHostDirective, selectors: [["", "controlHost", ""]], inputs: { portal: ["controlHost", "portal"] } });
/**
 * @nocollapse
 */
ControlHostDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
];
ControlHostDirective.propDecorators = {
    'portal': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['controlHost',] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[controlHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { portal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['controlHost']
        }] }); })();

/**
 * @abstract
 */
class ControlExpressionProcess {
    constructor() {
        this.controlConfig = {};
        this.isProcessed = false;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setModelConfig(control) {
        this.isProcessed = true;
        if (this.controlConfig && this.controlConfig.validatorConfig) {
            control[VALIDATOR_CONFIG] = this.controlConfig.validatorConfig;
            this.controlConfig = undefined;
        }
    }
}
ControlExpressionProcess.ɵfac = function ControlExpressionProcess_Factory(t) { return new (t || ControlExpressionProcess)(); };
ControlExpressionProcess.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlExpressionProcess, inputs: { name: "name", formControlName: "formControlName" } });
ControlExpressionProcess.propDecorators = {
    'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'formControlName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};


class BaseValidator extends ControlExpressionProcess {
    /**
     * @param {?} control
     * @return {?}
     */
    validation(control) {
        let /** @type {?} */ result = null;
        for (let /** @type {?} */ validator of this.validators) {
            result = validator(control);
            if (result)
                break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    setEventName() {
        var /** @type {?} */ eventName = '';
        switch (this.element.tagName) {
            case INPUT:
            case TEXTAREA:
                eventName = (this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE) ? CHANGE : INPUT;
                break;
            case SELECT:
                eventName = CHANGE;
                break;
        }
        this.eventName = eventName.toLowerCase();
    }
}
BaseValidator.ɵfac = function BaseValidator_Factory(t) { return ɵBaseValidator_BaseFactory(t || BaseValidator); };
BaseValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseValidator, inputs: { formControl: "formControl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
BaseValidator.propDecorators = {
    'formControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
const ɵBaseValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BaseValidator);

const NGMODEL_BINDING = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RxFormControlDirective),
    multi: true
};
const ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
const NUMERIC = "numeric";
const IS_FORMAT = "isFormat";
const DIGITS_INFO = "digitsInfo";
class RxFormControlDirective extends BaseValidator {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} decimalProvider
     */
    constructor(elementRef, renderer, decimalProvider) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.decimalProvider = decimalProvider;
        this.eventListeners = [];
        this.isNumericSubscribed = false;
        this.isFocusCalled = false;
        this.element = elementRef.nativeElement;
        this.setEventName();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validationControls(value) {
        this.controls = value;
    }
    /**
     * @return {?}
     */
    get validationControls() {
        return this.controls;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ validators = [];
        Object.keys(APP_VALIDATORS).forEach(validatorName => {
            if ((this[validatorName]) || (ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && this[validatorName] == BLANK)) {
                validators.push(APP_VALIDATORS[validatorName](this[validatorName]));
                if (this.name && !(this.formControlName && this.formControl)) {
                    ApplicationUtil.configureControl(this.controlConfig, this[validatorName], validatorName);
                }
            }
        });
        if (validators.length > 0)
            this.validators = validators;
        if (this.numeric && (this.numeric.isFormat || this.numeric.digitsInfo)) {
            this.bindNumericElementEvent();
        }
    }
    /**
     * @return {?}
     */
    blurEvent() {
        if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
            let /** @type {?} */ value = this.decimalProvider.transFormDecimal(this.formControl.value, this.numeric.digitsInfo);
            value = (!this.numeric.isFormat) ? this.decimalProvider.replacer(value) : value;
            this.setValueOnElement(value);
            this.isFocusCalled = false;
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    bindNumericElementEvent(config) {
        if (config)
            this.numeric = config;
        let /** @type {?} */ listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
        this.eventListeners.push(listener);
        listener = this.renderer.listen(this.element, FOCUS, (event) => {
            if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric) && this.formControl.value != null) {
                let /** @type {?} */ value = this.decimalProvider.replacer(this.element.value);
                this.setValueOnElement(value);
                this.isFocusCalled = true;
            }
        });
        this.eventListeners.push(listener);
    }
    /**
     * @return {?}
     */
    bindValueChangeEvent() {
        if (this.eventName != BLANK) {
            let /** @type {?} */ listener = this.renderer.listen(this.element, this.eventName, () => {
                Object.keys(this.validationControls).forEach(fieldName => {
                    this.validationControls[fieldName].updateValueAndValidity();
                });
            });
            this.eventListeners.push(listener);
        }
    }
    /**
     * @return {?}
     */
    subscribeNumericFormatter() {
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
    setValueOnElement(value) {
        this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setTemplateValidators(control) {
        for (let /** @type {?} */ validatorName in control[VALIDATOR_CONFIG]) {
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
    updateOnElementClass(element) {
        var /** @type {?} */ previousClassName = '';
        return function (className) {
            if (previousClassName)
                element.classList.remove(previousClassName);
            if (className)
                element.classList.add(className);
            previousClassName = className;
        };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setValidatorConfig(control) {
        if (!this.formControl) {
            this.formControl = control;
            let /** @type {?} */ rxFormControl = /** @type {?} */ (this.formControl);
            if (rxFormControl.updateOnElementClass)
                rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
        }
        this.subscribeNumericFormatter();
        if (control[TEMPLATE_VALIDATION_CONFIG])
            this.setTemplateValidators(control);
        if (control[CONDITIONAL_VALIDATOR]) {
            this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
            delete control[CONDITIONAL_VALIDATOR];
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        this.setValidatorConfig(control);
        if (this.conditionalValidator)
            this.conditionalValidator(control);
        if (!this.isProcessed)
            this.setModelConfig(control);
        return this.validators && this.validators.length > 0 ? this.validation(control) : null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.controls = undefined;
        let /** @type {?} */ eventCount = this.eventListeners.length;
        for (var /** @type {?} */ i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
        }
        this.eventListeners = [];
    }
}
RxFormControlDirective.ɵfac = function RxFormControlDirective_Factory(t) { return new (t || RxFormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DecimalProvider)); };
RxFormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxFormControlDirective, selectors: [["", "ngModel", ""], ["", "formControlName", ""], ["", "formControl", ""]], inputs: { numeric: "numeric", alpha: "alpha", alphaNumeric: "alphaNumeric", ascii: "ascii", compare: "compare", compose: "compose", contains: "contains", creditCard: "creditCard", dataUri: "dataUri", different: "different", digit: "digit", email: "email", endsWith: "endsWith", even: "even", extension: "extension", factor: "factor", fileSize: "fileSize", greaterThanEqualTo: "greaterThanEqualTo", greaterThan: "greaterThan", hexColor: "hexColor", json: "json", latitude: "latitude", latLong: "latLong", leapYear: "leapYear", lessThan: "lessThan", lessThanEqualTo: "lessThanEqualTo", longitude: "longitude", lowerCase: "lowerCase", mac: "mac", maxDate: "maxDate", maxLength: "maxLength", maxNumber: "maxNumber", minDate: "minDate", minLength: "minLength", minNumber: "minNumber", odd: "odd", password: "password", port: "port", primeNumber: "primeNumber", required: "required", range: "range", rule: "rule", startsWith: "startsWith", time: "time", upperCase: "upperCase", url: "url", unique: "unique", notEmpty: "notEmpty", cusip: "cusip", grid: "grid", date: "date" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NGMODEL_BINDING]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/**
 * @nocollapse
 */
RxFormControlDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: DecimalProvider, },
];
RxFormControlDirective.propDecorators = {
    'alpha': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'alphaNumeric': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'ascii': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'compare': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'compose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'contains': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'creditCard': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'dataUri': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'different': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'digit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'email': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'endsWith': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'even': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'extension': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'factor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fileSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'greaterThanEqualTo': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'greaterThan': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hexColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'json': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'latLong': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'leapYear': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lessThan': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lessThanEqualTo': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lowerCase': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'mac': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxDate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxLength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxNumber': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minDate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minLength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minNumber': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'numeric': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'odd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'password': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'port': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'primeNumber': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'required': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'range': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'rule': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'startsWith': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'time': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'upperCase': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'url': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'unique': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'notEmpty': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'cusip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'grid': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'date': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxFormControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngModel],[formControlName],[formControl]',
                providers: [NGMODEL_BINDING]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: DecimalProvider }]; }, { numeric: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alphaNumeric: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ascii: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compare: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contains: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creditCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataUri: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], different: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], digit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endsWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], even: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], extension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], factor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], greaterThanEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], greaterThan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hexColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], json: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], latLong: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leapYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lessThan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lessThanEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lowerCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mac: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], odd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], port: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], primeNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startsWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], upperCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unique: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cusip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const VALIDATOR_CONFIG$1 = "validatorConfig";
const FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];
class FileControlDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.validators = [];
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.element = elementRef.nativeElement;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    onChangeCall(element) {
        let /** @type {?} */ files = element.files;
        if (this.writeFile)
            this.onChange(files);
        else {
            if (files.length > 0)
                this.onChange(element.value);
            else
                this.onChange(undefined);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { }
    /**
     * @param {?} invocation
     * @return {?}
     */
    registerOnChange(invocation) { this.onChange = invocation; }
    /**
     * @param {?} invocation
     * @return {?}
     */
    registerOnTouched(invocation) { this.onTouched = invocation; }
    /**
     * @param {?} config
     * @return {?}
     */
    set extension(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set fileSize(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set file(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setConfig(control) {
        FILE_VALIDATOR_NAMES.forEach(t => {
            if (!this[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t])
                this[t] = control[VALIDATOR_CONFIG$1][t];
        });
        this.isProcessed = true;
    }
    /**
     * @param {?} validatorName
     * @param {?} config
     * @return {?}
     */
    pushValidator(validatorName, config) {
        if (config)
            this.validators.push(APP_VALIDATORS[validatorName](config));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (!this.isProcessed)
            this.setConfig(control);
        var /** @type {?} */ result = null;
        for (var /** @type {?} */ validator of this.validators) {
            result = validator(control, this.element.files);
            if (result)
                break;
        }
        return result;
    }
}
FileControlDirective.ɵfac = function FileControlDirective_Factory(t) { return new (t || FileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FileControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileControlDirective, selectors: [["input", "type", "file"]], hostBindings: function FileControlDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileControlDirective_change_HostBindingHandler($event) { return ctx.onChangeCall($event.target); })("blur", function FileControlDirective_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, inputs: { extension: "extension", fileSize: "fileSize", file: "file", writeFile: "writeFile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: FileControlDirective, multi: true }, {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FileControlDirective),
                multi: true
            }])] });
/**
 * @nocollapse
 */
FileControlDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
];
FileControlDirective.propDecorators = {
    'writeFile': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'extension': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fileSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'file': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "input[type=file]",
                host: {
                    "(change)": "onChangeCall($event.target)",
                    "(blur)": "onTouched()"
                },
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: FileControlDirective, multi: true }, {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FileControlDirective),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { extension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], writeFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const VALIDATOR_CONFIG$2 = "validatorConfig";
class ImageFileControlDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.element = elementRef.nativeElement;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set image(config) {
        this.imageValidation = APP_VALIDATORS.image(config);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setConfig(control) {
        let /** @type {?} */ image = "image";
        if (!this[image] && control[VALIDATOR_CONFIG$2] && control[VALIDATOR_CONFIG$2][image])
            this[image] = control[VALIDATOR_CONFIG$2][image];
        this.isProcessed = true;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (!this.isProcessed)
            this.setConfig(control);
        if (this.imageValidation) {
            return this.imageValidation(control, this.element.files);
        }
        return new Promise((resolve, reject) => { resolve(null); });
    }
}
ImageFileControlDirective.ɵfac = function ImageFileControlDirective_Factory(t) { return new (t || ImageFileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ImageFileControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImageFileControlDirective, selectors: [["input", "type", "file"]], inputs: { image: "image" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ImageFileControlDirective),
                multi: true
            }])] });
/**
 * @nocollapse
 */
ImageFileControlDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
];
ImageFileControlDirective.propDecorators = {
    'image': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageFileControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "input[type=file]",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ImageFileControlDirective),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class RxReactiveFormsModule {
    /**
     * @return {?}
     */
    static forRoot() { return { ngModule: RxReactiveFormsModule, providers: [] }; }
}
RxReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxReactiveFormsModule });
RxReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxReactiveFormsModule_Factory(t) { return new (t || RxReactiveFormsModule)(); }, providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
/**
 * @nocollapse
 */
RxReactiveFormsModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxReactiveFormsModule, { declarations: function () { return [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]; }, exports: function () { return [RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxReactiveFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
                exports: [RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
            }]
    }], null, null); })();

/**
 * @param {?} annotationType
 * @param {?} config
 * @param {?=} isAsync
 * @return {?}
 */
function baseDecoratorFunction(annotationType, config, isAsync = false) {
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
        var /** @type {?} */ propertyInfo = {
            name: propertyKey,
            propertyType: ARRAY_PROPERTY,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined,
            arrayConfig: config ? {
                allowMaxIndex: config.allowMaxIndex, messageKey: config.messageKey
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
        var /** @type {?} */ propertyInfo = {
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
    var /** @type {?} */ rxwebValidator = (control, target) => {
        if (typeof control == STRING)
            defaultContainer.init(target, 0, control, type, config, false);
        else {
            if (config && (!control.validatorConfig || !control.validatorConfig[type]))
                ApplicationUtil.configureControl(control, config, type);
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
    return baseValidator(config, AnnotationTypes.extension, (control) => { return null; });
}

/**
 * @param {?} config
 * @return {?}
 */
function fileSizeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.fileSize, (control) => { return null; });
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
    return baseValidator(config, AnnotationTypes.file, (control) => { return null; });
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
    return baseValidator(config, AnnotationTypes.image, (control) => { return null; });
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

class RxwebValidators {
}
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
class IAbstractControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"] {
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=reactive-form-validators.js.map

/***/ })

}]);
//# sourceMappingURL=default~app-users-users-module~employee-wizard-employee-wizard-module-es2015.js.map