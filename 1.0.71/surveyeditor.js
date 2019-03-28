/*!
 * surveyjs Builder(Editor) v1.0.71
 * (c) Devsoft Baltic O� - http://surveyjs.io/
 * Github: https://github.com/surveyjs/editor
 * License: https://surveyjs.io/Licenses#BuildSurvey
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_english__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultStrings; });


var editorLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        var loc = this.getLocale(locale);
        var defaultLocale = this.getLocale("en");
        var path = strName.split(".");
        var obj = loc;
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (!obj) {
                if (loc === defaultLocale)
                    return path[i];
                return this.getString(strName, "en");
            }
        }
        return obj;
    },
    hasString: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        var loc = this.getLocale(locale);
        var path = strName.split(".");
        var obj = loc;
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (!obj)
                return false;
        }
        return true;
    },
    getLocaleName: function (loc, defaultLocale) {
        if (defaultLocale === void 0) { defaultLocale = null; }
        var localeNames = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["surveyLocalization"]["localeNames"];
        if (!defaultLocale) {
            defaultLocale = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["surveyLocalization"].defaultLocale;
        }
        return !!loc
            ? localeNames[loc]
            : editorLocalization
                .getString("ed.defaultLocale")["format"](localeNames[defaultLocale]);
    },
    getPropertyName: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        var obj = this.getProperty(strName, locale);
        if (obj["name"])
            return obj["name"];
        return obj;
    },
    getPropertyTitle: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        var obj = this.getProperty(strName, locale);
        if (obj["title"])
            return obj["title"];
        return "";
    },
    getProperty: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        var obj = this.getString("p." + strName, locale);
        if (obj !== strName)
            return obj;
        var pos = strName.indexOf("_");
        if (pos < -1)
            return obj;
        strName = strName.substr(pos + 1);
        return this.getString("p." + strName, locale);
    },
    getPropertyValue: function (value, locale) {
        if (locale === void 0) { locale = null; }
        return this.getValueInternal(value, "pv", locale);
    },
    getValidatorName: function (name, locale) {
        if (locale === void 0) { locale = null; }
        return this.getValueInternal(name, "validators", locale);
    },
    getTriggerName: function (name, locale) {
        if (locale === void 0) { locale = null; }
        return this.getValueInternal(name, "triggers", locale);
    },
    getLocale: function (locale) {
        if (!locale)
            locale = this.currentLocale;
        var loc = locale ? this.locales[locale] : defaultStrings;
        if (!loc)
            loc = defaultStrings;
        return loc;
    },
    getValueInternal: function (value, prefix, locale) {
        if (locale === void 0) { locale = null; }
        if (value === "" || value === null || value === undefined)
            return "";
        value = value.toString();
        var loc = this.getLocale(locale);
        var res = loc[prefix] ? loc[prefix][value] : null;
        if (!res)
            res = defaultStrings[prefix][value];
        return res ? res : value;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        return res;
    }
};
var defaultStrings = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* enStrings */];


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyCustomEditor__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyStringPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyDropdownPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyBooleanPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyNumberPropertyEditor; });






var SurveyPropertyEditorFactory = /** @class */ (function () {
    function SurveyPropertyEditorFactory() {
    }
    SurveyPropertyEditorFactory.getOperators = function () {
        var operators = [
            "empty",
            "notempty",
            "equal",
            "notequal",
            "contains",
            "notcontains",
            "greater",
            "less",
            "greaterorequal",
            "lessorequal"
        ];
        var result = [];
        for (var i = 0; i < operators.length; i++) {
            var name = operators[i];
            result.push({
                name: name,
                text: __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("op." + name)
            });
        }
        return result;
    };
    SurveyPropertyEditorFactory.registerEditor = function (name, creator, editableClassName) {
        if (editableClassName === void 0) { editableClassName = null; }
        SurveyPropertyEditorFactory.creatorList[name] = creator;
        var className = editableClassName ? editableClassName : name;
        SurveyPropertyEditorFactory.creatorByClassList[className] = creator;
    };
    SurveyPropertyEditorFactory.registerCustomEditor = function (name, widgetJSON) {
        SurveyPropertyEditorFactory.widgetRegisterList[name] = widgetJSON;
    };
    SurveyPropertyEditorFactory.createEditor = function (property, func) {
        var editorType = property.type;
        if (SurveyPropertyEditorFactory.isDropdownEditor(property) &&
            (!editorType || editorType == SurveyPropertyEditorFactory.defaultEditor)) {
            editorType = "dropdown";
        }
        var propertyEditor = SurveyPropertyEditorFactory.createCustomEditor(editorType, property);
        if (!propertyEditor) {
            var creator = SurveyPropertyEditorFactory.creatorList[editorType];
            if (creator)
                propertyEditor = creator(property);
        }
        if (!propertyEditor) {
            if (property.isArray &&
                __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.isDescendantOf(property.className, "itemvalue")) {
                var creator = SurveyPropertyEditorFactory.creatorList["itemvalue[]"];
                if (creator)
                    propertyEditor = creator(property);
            }
        }
        if (!propertyEditor) {
            creator = SurveyPropertyEditorFactory.findParentCreator(editorType);
            propertyEditor = creator(property);
        }
        propertyEditor.onChanged = func;
        return propertyEditor;
    };
    SurveyPropertyEditorFactory.isDropdownEditor = function (property) {
        if (property["hasChoices"] !== undefined)
            return property["hasChoices"] === true;
        return property.choices != null;
    };
    SurveyPropertyEditorFactory.createCustomEditor = function (name, property) {
        var widgetJSON = SurveyPropertyEditorFactory.widgetRegisterList[name];
        if (!widgetJSON)
            return null;
        return new __WEBPACK_IMPORTED_MODULE_4__propertyCustomEditor__["a" /* SurveyPropertyCustomEditor */](property, widgetJSON);
    };
    SurveyPropertyEditorFactory.findParentCreator = function (name) {
        var jsonClass = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findClass(name);
        while (jsonClass && jsonClass.parentName) {
            var creator = SurveyPropertyEditorFactory.creatorByClassList[jsonClass.parentName];
            if (creator)
                return creator;
            jsonClass = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findClass(jsonClass.parentName);
        }
        return SurveyPropertyEditorFactory.creatorList[SurveyPropertyEditorFactory.defaultEditor];
    };
    SurveyPropertyEditorFactory.defaultEditor = "string";
    SurveyPropertyEditorFactory.creatorList = {};
    SurveyPropertyEditorFactory.creatorByClassList = {};
    SurveyPropertyEditorFactory.widgetRegisterList = {};
    return SurveyPropertyEditorFactory;
}());

var SurveyStringPropertyEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyStringPropertyEditor, _super);
    function SurveyStringPropertyEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyStringPropertyEditor.prototype, "editorType", {
        get: function () {
            return "string";
        },
        enumerable: true,
        configurable: true
    });
    return SurveyStringPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyDropdownPropertyEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyDropdownPropertyEditor, _super);
    function SurveyDropdownPropertyEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.koChoices = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]([]);
        _this.koHasFocus = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        var self = _this;
        _this.koHasFocus.subscribe(function (newValue) {
            if (newValue && self.property["isDynamicChoices"]) {
                //TODO
                self.koChoices(self.getLocalizableChoices());
            }
        });
        return _this;
    }
    Object.defineProperty(SurveyDropdownPropertyEditor.prototype, "editorType", {
        get: function () {
            return "dropdown";
        },
        enumerable: true,
        configurable: true
    });
    SurveyDropdownPropertyEditor.prototype.getValueText = function (value) {
        if (this.property.name === "locale") {
            var text = __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getLocaleName(value);
            if (text)
                return text;
        }
        if (this.property.name === "cellType") {
            var text = __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("qt." + value);
            if (text)
                return text;
        }
        return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getPropertyValue(value);
    };
    SurveyDropdownPropertyEditor.prototype.setObject = function (value) {
        _super.prototype.setObject.call(this, value);
        this.beginValueUpdating();
        if (this.koChoices().length == 0) {
            this.updateChoices();
        }
        this.endValueUpdating();
    };
    SurveyDropdownPropertyEditor.prototype.updateChoices = function () {
        this.koChoices(this.getLocalizableChoices());
    };
    SurveyDropdownPropertyEditor.prototype.getLocalizableChoices = function () {
        var choices = this.getPropertyChoices();
        if (!choices || choices.length == 0)
            return [];
        var res = new Array();
        __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"].setData(res, choices);
        for (var i = 0; i < res.length; i++) {
            var value = res[i].value;
            var text = this.getValueText(value);
            if (text != value) {
                res[i].text = text;
            }
        }
        return res;
    };
    SurveyDropdownPropertyEditor.prototype.getPropertyChoices = function () {
        if (!this.property)
            return null;
        if (!!this.object) {
            var obj = this.object;
            this.object["getEditingPropertyValue"] = function (name) {
                if (!!obj.editingProperties && obj.editingProperties[name] != undefined)
                    return obj.editingProperties[name];
                return obj[name];
            };
        }
        return this.property.getChoices(this.object);
    };
    return SurveyDropdownPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyBooleanPropertyEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyBooleanPropertyEditor, _super);
    function SurveyBooleanPropertyEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "editorType", {
        get: function () {
            return "boolean";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "alwaysShowEditor", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "canShowDisplayNameOnTop", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SurveyBooleanPropertyEditor.prototype.getValueText = function (value) {
        return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getPropertyValue(value);
    };
    return SurveyBooleanPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyNumberPropertyEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNumberPropertyEditor, _super);
    function SurveyNumberPropertyEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyNumberPropertyEditor.prototype, "editorType", {
        get: function () {
            return "number";
        },
        enumerable: true,
        configurable: true
    });
    SurveyNumberPropertyEditor.prototype.getCorrectedValue = function (value) {
        if (!value)
            return value;
        if (typeof value === "string" || value instanceof String) {
            value = Number(value);
            if (!value)
                value = 0;
        }
        return value;
    };
    return SurveyNumberPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

SurveyPropertyEditorFactory.registerEditor("string", function (property) {
    return new SurveyStringPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("dropdown", function (property) {
    return new SurveyDropdownPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("boolean", function (property) {
    return new SurveyBooleanPropertyEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("number", function (property) {
    return new SurveyNumberPropertyEditor(property);
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyHelper; });

var ObjType;
(function (ObjType) {
    ObjType[ObjType["Unknown"] = 0] = "Unknown";
    ObjType[ObjType["Survey"] = 1] = "Survey";
    ObjType[ObjType["Page"] = 2] = "Page";
    ObjType[ObjType["Panel"] = 3] = "Panel";
    ObjType[ObjType["Question"] = 4] = "Question";
})(ObjType || (ObjType = {}));
var SurveyHelper = /** @class */ (function () {
    function SurveyHelper() {
    }
    SurveyHelper.getNewPageName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPageName"));
    };
    SurveyHelper.getNewQuestionName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newQuestionName"));
    };
    SurveyHelper.getNewPanelName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPanelName"));
    };
    SurveyHelper.generateNewName = function (name) {
        var pos = name.length;
        while (pos > 0 && name[pos - 1] >= "0" && name[pos - 1] <= "9") {
            pos--;
        }
        var base = name.substr(0, pos);
        var num = 0;
        if (pos < name.length) {
            num = parseInt(name.substr(pos));
        }
        num++;
        return base + num;
    };
    SurveyHelper.getNewName = function (objs, baseName) {
        var hash = {};
        for (var i = 0; i < objs.length; i++) {
            hash[objs[i].name] = true;
        }
        var num = 1;
        while (true) {
            if (!hash[baseName + num.toString()])
                break;
            num++;
        }
        return baseName + num.toString();
    };
    SurveyHelper.getObjectType = function (obj) {
        if (!obj || !obj["getType"])
            return ObjType.Unknown;
        if (obj.getType() == "page")
            return ObjType.Page;
        if (obj.getType() == "panel")
            return ObjType.Panel;
        if (obj.getType() == "survey")
            return ObjType.Survey;
        if (obj["name"])
            return ObjType.Question;
        return ObjType.Unknown;
    };
    SurveyHelper.getObjectTypeStr = function (obj) {
        var objType = SurveyHelper.getObjectType(obj);
        if (objType === ObjType.Survey)
            return "survey";
        if (objType === ObjType.Page)
            return "page";
        if (objType === ObjType.Panel)
            return "panel";
        if (objType === ObjType.Question)
            return "question";
        return "unknown";
    };
    SurveyHelper.getObjectName = function (obj, showObjectTitle) {
        if (showObjectTitle === void 0) { showObjectTitle = false; }
        if (showObjectTitle && obj["title"])
            return obj["title"];
        if (obj["name"])
            return obj["name"];
        var objType = SurveyHelper.getObjectType(obj);
        if (objType != ObjType.Page)
            return "";
        var data = obj["data"];
        if (!data)
            data = obj["survey"]; //TODO
        var index = data.pages.indexOf(obj);
        return "[Page " + (index + 1) + "]";
    };
    SurveyHelper.getElements = function (element, includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        if (!element)
            return [];
        if (element.getElementsInDesign)
            return element.getElementsInDesign(includeHidden);
        if (element.elements)
            return element.elements;
        return [];
    };
    SurveyHelper.isPropertyVisible = function (obj, property, onCanShowPropertyCallback) {
        if (onCanShowPropertyCallback === void 0) { onCanShowPropertyCallback = null; }
        if (!property || !property.visible)
            return false;
        if (onCanShowPropertyCallback && !onCanShowPropertyCallback(obj, property))
            return false;
        return true;
    };
    SurveyHelper.scrollIntoViewIfNeeded = function (el, pageEl) {
        if (!el || !el.scrollIntoView || !pageEl)
            return;
        var rect = el.getBoundingClientRect();
        var height = pageEl.offsetParent
            ? pageEl.offsetParent.clientHeight
            : pageEl.clientHeight;
        if (rect.top < pageEl.offsetTop) {
            el.scrollIntoView();
        }
        else {
            if (rect.bottom > height &&
                (rect.top > pageEl.offsetTop + height || rect.height < height)) {
                el.scrollIntoView(false);
            }
        }
    };
    return SurveyHelper;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stylesmanager__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyForDesigner; });
/* harmony export (immutable) */ __webpack_exports__["b"] = registerAdorner;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeAdorners;
/* unused harmony export applyAdornerClass */






var SurveyForDesigner = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyForDesigner, _super);
    function SurveyForDesigner(jsonObj, renderedElement, css) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (css === void 0) { css = null; }
        var _this = _super.call(this, jsonObj, renderedElement, css) || this;
        _this.onSelectedElementChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onEditButtonClick = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onGetMenuItems = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onElementDoubleClick = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        var self = _this;
        _this.setDesignMode(true);
        _this.onAfterRenderPage.add(function (sender, options) {
            options.page["onAfterRenderPage"](options.htmlElement);
        });
        _this.onAfterRenderQuestion.add(function (sender, options) {
            options.question["onAfterRenderQuestion"](options.htmlElement);
        });
        _this.onAfterRenderPanel.add(function (sender, options) {
            options.panel["onAfterRenderPanel"](options.htmlElement);
        });
        _this.editQuestionClick = function () {
            self.onEditButtonClick.fire(self, null);
        };
        _this.onUpdateQuestionCssClasses.add(onUpdateQuestionCssClasses);
        _this.onUpdatePanelCssClasses.add(onUpdateQuestionCssClasses);
        return _this;
    }
    SurveyForDesigner.prototype.updateElementAllowingOptions = function (obj) {
        if (this.onUpdateElementAllowingOptions && obj["allowingOptions"]) {
            obj["allowingOptions"].obj = obj;
            this.onUpdateElementAllowingOptions(obj["allowingOptions"]);
        }
    };
    SurveyForDesigner.prototype.getMenuItems = function (obj) {
        var items = [];
        var options = { obj: obj, items: items };
        this.onGetMenuItems.fire(this, options);
        return options.items;
    };
    Object.defineProperty(SurveyForDesigner.prototype, "selectedElement", {
        get: function () {
            return this.selectedElementValue;
        },
        set: function (value) {
            if (value && value.selectedElementInDesign)
                value = value.selectedElementInDesign;
            if (value == this.selectedElementValue)
                return;
            var oldValue = this.selectedElementValue;
            this.selectedElementValue = value;
            if (oldValue != null && oldValue["onSelectedElementChanged"]) {
                oldValue["onSelectedElementChanged"]();
            }
            if (this.selectedElementValue != null &&
                this.selectedElementValue["onSelectedElementChanged"]) {
                this.selectedElementValue["onSelectedElementChanged"]();
            }
            this.onSelectedElementChanged.fire(this, {
                oldElement: oldValue,
                newElement: value
            });
        },
        enumerable: true,
        configurable: true
    });
    SurveyForDesigner.prototype.doElementDoubleClick = function (obj) {
        this.onElementDoubleClick.fire(this, { element: obj });
    };
    SurveyForDesigner.prototype.getEditorLocString = function (value) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(value);
    };
    return SurveyForDesigner;
}(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"]));

function getSurvey(el) {
    if (!el)
        return null;
    var res = el["survey"];
    if (res)
        return res;
    return el["data"];
}
function panelBaseOnCreating(self) {
    self.dragEnterCounter = 0;
    self.emptyElement = null;
    self.rowCount = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
        var rows = !!self["koRow"] ? self["koRows"]() : self.rows;
        return rows.length;
    }, self);
    self.rowCount.subscribe(function (value) {
        if (self.emptyElement) {
            self.emptyElement.style.display = value > 0 ? "none" : "";
        }
    });
}
function elementOnCreating(surveyElement) {
    surveyElement.allowingOptions = {
        allowDelete: true,
        allowEdit: true,
        allowCopy: true,
        allowAddToToolbox: true,
        allowDragging: true,
        allowChangeType: true,
        allowShowHideTitle: true,
        allowChangeRequired: true
    };
    surveyElement.dragDropHelperValue = null;
    surveyElement.dragDropHelper = function () {
        if (surveyElement.dragDropHelperValue == null) {
            surveyElement.dragDropHelperValue = getSurvey(surveyElement)["dragDropHelper"];
        }
        return surveyElement.dragDropHelperValue;
    };
    surveyElement.renderedElement = null;
    surveyElement.koIsDragging = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    surveyElement.koIsSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    surveyElement.koIsDragging.subscribe(function (newValue) {
        if (surveyElement.renderedElement) {
            surveyElement.renderedElement.style.opacity = newValue ? 0.4 : 1;
        }
    });
    surveyElement.koIsSelected.subscribe(function (newValue) {
        if (surveyElement.renderedElement) {
            if (newValue) {
                surveyElement.renderedElement.classList.add("svd_q_selected", "svd-main-border-color");
            }
            else {
                surveyElement.renderedElement.classList.remove("svd_q_selected", "svd-main-border-color");
            }
        }
    });
}
function addEmptyPanelElement(root, dragDropHelper, self) {
    var eDiv = document.createElement("div");
    eDiv.className = "well card card-block";
    eDiv.ondragover = function (e) {
        dragDropHelper.doDragDropOver(e, self);
    };
    var eSpan = document.createElement("span");
    eSpan.textContent = getSurvey(self).getEditorLocString("survey.dropQuestion");
    eDiv.appendChild(eSpan);
    root.appendChild(eDiv);
    return eDiv;
}
function createQuestionDesignItem(obj, item) {
    var res = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerText = item.text;
    var onClick = item.onClick;
    btn.onclick = function () {
        onClick(obj, item);
    };
    btn.className = "btn btn-primary btn-sm btn-xs";
    res.appendChild(btn);
    return res;
}
function elementOnAfterRendering(domElement, surveyElement, isPanel, disable) {
    surveyElement.renderedElement = domElement;
    surveyElement.renderedElement.classList.add("svd_question");
    if (__WEBPACK_IMPORTED_MODULE_5__stylesmanager__["a" /* StylesManager */].currentTheme() === "bootstrap") {
        surveyElement.renderedElement.classList.add("svd-dark-bg-color");
    }
    surveyElement.renderedElement.classList.add("svd_q_design_border");
    var isRowLayout = !surveyElement.getLayoutType || surveyElement.getLayoutType() == "row";
    var opt = surveyElement.allowingOptions;
    opt.allowCopy = opt.allowCopy && isRowLayout;
    opt.allowAddToToolbox = opt.allowAddToToolbox && isRowLayout;
    opt.allowChangeType = opt.allowChangeType && isRowLayout;
    opt.allowShowHideTitle = opt.allowShowHideTitle && isRowLayout;
    opt.allowChangeRequired = opt.allowChangeRequired && isRowLayout;
    getSurvey(surveyElement).updateElementAllowingOptions(surveyElement);
    if (surveyElement.koIsSelected())
        surveyElement.renderedElement.classList.add("svd_q_selected", "svd-main-border-color");
    surveyElement.dragDropHelper().attachToElement(domElement, surveyElement);
    domElement.tabindex = "0";
    domElement.onclick = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            if (surveyElement.parent) {
                getSurvey(surveyElement)["selectedElement"] = surveyElement;
            }
        }
    };
    domElement.onkeyup = function (e) {
        var char = e.which || e.keyCode;
        if (char === 0x13 || char === 0x20) {
            domElement.click();
        }
    };
    // el.onkeydown = function(e) {
    //   if (e.witch == 46) getSurvey(surveyElement).deleteCurrentObjectClick();
    //   return true;
    // };
    domElement.ondblclick = function (e) {
        getSurvey(surveyElement).doElementDoubleClick(surveyElement);
    };
    disable = disable && !(surveyElement.getType() == "paneldynamic"); //TODO
    if (disable) {
        var childs = domElement.childNodes;
        for (var i = 0; i < childs.length; i++) {
            if (childs[i].style)
                childs[i].style.pointerEvents = "none";
        }
    }
    var setTabIndex = function (element) {
        element.tabIndex = -1;
    };
    ["input", "select", "textarea"].forEach(function (sel) {
        var elements = domElement.querySelectorAll(sel);
        for (var i = 0; i < elements.length; i++) {
            setTabIndex(elements[i]);
        }
    });
    addAdorner(domElement, surveyElement);
}
var adornersConfig = {};
function registerAdorner(name, adorner) {
    if (!adornersConfig[name]) {
        adornersConfig[name] = [];
    }
    adornersConfig[name].push(adorner);
}
function removeAdorners(names) {
    if (names === void 0) { names = undefined; }
    if (names !== undefined) {
        (names || []).forEach(function (name) { return delete adornersConfig[name]; });
    }
    else {
        adornersConfig = {};
    }
}
function onUpdateQuestionCssClasses(survey, options) {
    var classes = options.panel ? options.cssClasses.panel : options.cssClasses;
    Object.keys(adornersConfig).forEach(function (element) {
        adornersConfig[element].forEach(function (adorner) {
            var classesElementName = adorner.getElementName(options.question || options.panel);
            var adornerMarkerClass = adorner.getMarkerClass(options.question || options.panel);
            classes[classesElementName] = applyAdornerClass(classes[classesElementName], adornerMarkerClass);
        });
    });
}
function applyAdornerClass(classes, adornerClass) {
    var result = classes;
    if (!!adornerClass) {
        result = !!result ? result + " " + adornerClass : adornerClass;
    }
    return result;
}
function filterNestedQuestions(rootQuestionNode, elements) {
    var targetElements = [];
    for (var i = 0; i < elements.length; i++) {
        var questionElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["b" /* findParentNode */])("svd_question", elements[i]);
        if (questionElement === rootQuestionNode) {
            targetElements.push(elements[i]);
        }
    }
    return targetElements;
}
function addAdorner(node, model) {
    Object.keys(adornersConfig).forEach(function (element) {
        adornersConfig[element].forEach(function (adorner) {
            var elementClass = adorner.getMarkerClass(model);
            if (!!elementClass) {
                var elements = node.querySelectorAll("." + elementClass.replace(/\s/g, "."));
                var temp = [];
                for (var i = 0; i < elements.length; i++) {
                    temp.push(elements[i]);
                }
                elements = temp;
                if (node.className.split(" ").indexOf(elementClass) !== -1) {
                    elements.unshift(node);
                }
                elements = filterNestedQuestions(node, elements);
                if (elements.length === 0 &&
                    node.className.indexOf(elementClass) !== -1) {
                    elements = [node];
                }
                if (elements.length > 0) {
                    adorner.afterRender(elements, model, getSurvey(model).getEditor());
                }
            }
        });
    });
}
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onAfterRenderPage"] = function (el) {
    if (!getSurvey(this).isDesignMode)
        return;
    var self = this;
    var dragDropHelper = getSurvey(this)["dragDropHelper"];
    this.dragEnterCounter = 0;
    el.ondragenter = function (e) {
        e.preventDefault();
        self.dragEnterCounter++;
    };
    el.ondragleave = function (e) {
        self.dragEnterCounter--;
        if (self.dragEnterCounter === 0)
            dragDropHelper.doLeavePage(e);
    };
    el.ondragover = function (e) {
        return false;
    };
    el.ondrop = function (e) {
        dragDropHelper.doDrop(e);
    };
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
    elementOnCreating(this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onAfterRenderPanel"] = function (el) {
    if (!getSurvey(this).isDesignMode)
        return;
    var self = this;
    if (this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
    }
    elementOnAfterRendering(el, this, true, this.koIsDragging());
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onSelectedElementChanged"] = function () {
    if (getSurvey(this) == null)
        return;
    this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};
if (!!__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["FlowPanel"]) {
    __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["FlowPanel"].prototype["onCreating"] = function () {
        //TODO
        this.placeHolder = "Enter here text or drop a question";
        elementOnCreating(this);
    };
    __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["FlowPanel"].prototype["onAfterRenderPanel"] = function (el) {
        if (!getSurvey(this).isDesignMode)
            return;
        elementOnAfterRendering(el, this, true, this.koIsDragging());
        var pnlEl = el.querySelector("f-panel");
        if (!!pnlEl) {
            if (!!pnlEl.className) {
                pnlEl.className += " svd_flowpanel";
            }
            else {
                pnlEl.className = "svd_flowpanel";
            }
        }
    };
    __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["FlowPanel"].prototype["onSelectedElementChanged"] = function () {
        if (getSurvey(this) == null)
            return;
        this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
    };
}
var questionPrototype = !!__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"]
    ? __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype
    : __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Question"].prototype;
questionPrototype["onCreating"] = function () {
    elementOnCreating(this);
};
questionPrototype["onAfterRenderQuestion"] = function (el) {
    if (!getSurvey(this).isDesignMode)
        return;
    elementOnAfterRendering(el, this, false, true);
};
questionPrototype["onSelectedElementChanged"] = function () {
    if (getSurvey(this) == null)
        return;
    this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionSelectBaseImplementor"].prototype["onCreated"] = function () {
    var q = this.question;
    this.question.registerFunctionOnPropertyValueChanged("choices", function () {
        q["koElementType"].notifySubscribers();
    });
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorFactory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rmodal__ = __webpack_require__(35);
/* unused harmony export SurveyPropertyModalEditorCustomWidget */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyModalEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyTextEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyPropertyHtmlEditor; });







var SurveyPropertyModalEditorCustomWidget = /** @class */ (function () {
    function SurveyPropertyModalEditorCustomWidget(json) {
        this.json = json;
    }
    SurveyPropertyModalEditorCustomWidget.prototype.afterRender = function (editor, el) {
        if (this.json && this.json.afterRender) {
            if (!el.id) {
                el.id =
                    SurveyPropertyModalEditorCustomWidget.customWidgetName +
                        SurveyPropertyModalEditorCustomWidget.customWidgetId;
                SurveyPropertyModalEditorCustomWidget.customWidgetId++;
            }
            this.json.afterRender(editor, el);
            if (this.json.destroy) {
                var self = this;
                __WEBPACK_IMPORTED_MODULE_1_knockout__["utils"].domNodeDisposal.addDisposeCallback(el, function () {
                    self.destroy(editor, el);
                });
            }
        }
    };
    SurveyPropertyModalEditorCustomWidget.prototype.destroy = function (editor, el) {
        if (this.json && this.json.destroy) {
            this.json.destroy(editor, el);
        }
    };
    SurveyPropertyModalEditorCustomWidget.customWidgetId = 1;
    SurveyPropertyModalEditorCustomWidget.customWidgetName = "modalEditorCustomWidget";
    return SurveyPropertyModalEditorCustomWidget;
}());

var SurveyPropertyModalEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyModalEditor, _super);
    function SurveyPropertyModalEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.isShowingModalValue = false;
        _this.koTitleCaption = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koHtmlTop = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koHtmlBottom = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        if (_this.property) {
            _this.koTitleCaption(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */]
                .getString("pe.editProperty")["format"](_this.property.name));
        }
        var name = property ? property.name : "";
        _this.modalName =
            "modelEditor" + _this.editorType + SurveyPropertyModalEditor.idCounter;
        SurveyPropertyModalEditor.idCounter++;
        _this.modalNameTarget = "#" + _this.modalName;
        var self = _this;
        _this.koShowApplyButton = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        self.onHideModal = function () { };
        self.onApplyClick = function () {
            self.apply();
        };
        self.onOkClick = function () {
            self.apply();
            if (!self.koHasError())
                self.onHideModal();
        };
        self.onResetClick = function () {
            self.updateValue();
            self.onHideModal();
        };
        self.onShowModal = function () {
            self.beforeShow();
            var modal = new __WEBPACK_IMPORTED_MODULE_6_rmodal__["a" /* default */](document.querySelector(self.modalNameTarget), {
                bodyClass: "",
                closeTimeout: 100,
                dialogOpenClass: "animated fadeInDown",
                focus: false
            });
            modal.open();
            document.addEventListener("keydown", function (ev) {
                modal.keydown(ev);
            }, false);
            self.onHideModal = function () {
                self.beforeCloseModal();
                modal.close();
            };
            if (!!this.elements) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["c" /* focusFirstControl */])(this.elements);
            }
        };
        self.koAfterRender = function (el, con) {
            return self.afterRender(el, con);
        };
        return _this;
    }
    SurveyPropertyModalEditor.registerCustomWidget = function (editorType, json) {
        if (!SurveyPropertyModalEditor.customWidgets)
            SurveyPropertyModalEditor.customWidgets = {};
        SurveyPropertyModalEditor.customWidgets[editorType] = new SurveyPropertyModalEditorCustomWidget(json);
    };
    SurveyPropertyModalEditor.getCustomWidget = function (editorType) {
        if (!SurveyPropertyModalEditor.customWidgets)
            return null;
        return SurveyPropertyModalEditor.customWidgets[editorType];
    };
    SurveyPropertyModalEditor.prototype.setup = function () {
        _super.prototype.setup.call(this);
        this.beforeShow();
    };
    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isModal", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isShowingModal", {
        get: function () {
            return this.isShowingModalValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyModalEditor.prototype.beforeShow = function () {
        this.isShowingModalValue = true;
        this.updateValue();
    };
    SurveyPropertyModalEditor.prototype.beforeCloseModal = function () {
        this.isShowingModalValue = false;
    };
    SurveyPropertyModalEditor.prototype.onOptionsChanged = function () {
        this.koShowApplyButton = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](!this.options || this.options.showApplyButtonInEditors);
    };
    SurveyPropertyModalEditor.prototype.setObject = function (value) {
        this.editingObject = value;
        _super.prototype.setObject.call(this, value);
        if (this.options && this.property) {
            var html = this.options.onPropertyEditorModalShowDescriptionCallback(this.property.name, value);
            if (html) {
                if (html.top)
                    this.koHtmlTop(html.top);
                if (html.bottom)
                    this.koHtmlBottom(html.bottom);
            }
        }
    };
    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isEditable", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyModalEditor.prototype.afterRender = function (elements, con) {
        this.elements = elements;
        var customWidget = SurveyPropertyModalEditor.getCustomWidget(this.editorType);
        if (!!customWidget) {
            var el = this.GetFirstNonTextElement(elements);
            var tEl = elements[0];
            if (tEl.nodeName == "#text")
                tEl.data = "";
            tEl = elements[elements.length - 1];
            if (tEl.nodeName == "#text")
                tEl.data = "";
            customWidget.afterRender(this, el);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["c" /* focusFirstControl */])(elements);
    };
    SurveyPropertyModalEditor.prototype.GetFirstNonTextElement = function (elements) {
        if (!elements || !elements.length)
            return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
                return elements[i];
        }
        return null;
    };
    SurveyPropertyModalEditor.idCounter = 1;
    return SurveyPropertyModalEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyPropertyTextEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextEditor, _super);
    function SurveyPropertyTextEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.koTextValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var self = _this;
        _this.koTextValue.subscribe(function (newValue) {
            self.onkoTextValueChanged(newValue);
        });
        return _this;
    }
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "editorType", {
        get: function () {
            return "text";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "isEditable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextEditor.prototype.getValueText = function (value) {
        if (!value)
            return null;
        var str = value;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyTextEditor.prototype.onkoTextValueChanged = function (newValue) { };
    SurveyPropertyTextEditor.prototype.onValueChanged = function () {
        this.koTextValue(this.editingValue);
    };
    SurveyPropertyTextEditor.prototype.onBeforeApply = function () {
        this.setValueCore(this.koTextValue());
    };
    return SurveyPropertyTextEditor;
}(SurveyPropertyModalEditor));

var SurveyPropertyHtmlEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyHtmlEditor, _super);
    function SurveyPropertyHtmlEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyPropertyHtmlEditor.prototype, "editorType", {
        get: function () {
            return "html";
        },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyHtmlEditor;
}(SurveyPropertyTextEditor));

__WEBPACK_IMPORTED_MODULE_3__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("text", function (property) {
    return new SurveyPropertyTextEditor(property);
});
__WEBPACK_IMPORTED_MODULE_3__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("html", function (property) {
    return new SurveyPropertyHtmlEditor(property);
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getNextValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = findParentNode;
/* harmony export (immutable) */ __webpack_exports__["c"] = focusFirstControl;

function getNextValue(prefix, values) {
    var index = values.reduce(function (res, val) {
        if (typeof val === "string" && val.indexOf(prefix) === 0) {
            try {
                var candidate = parseInt(val.substring(prefix.length));
                if (candidate >= res) {
                    return candidate + 1;
                }
            }
            catch (e) { }
        }
        return res;
    }, 1);
    return prefix + index;
}
function findParentNode(className, sourceNode) {
    var parent = sourceNode;
    while (!!parent && !parent.classList.contains(className)) {
        parent = parent.parentElement;
    }
    return parent;
}
function focusFirstControl(renderedElements) {
    for (var i = 0; i < renderedElements.length; i++) {
        if (typeof renderedElements[i].getElementsByClassName === "function") {
            var elements = (renderedElements[i].getElementsByClassName("form-control"));
            if (elements.length === 0 &&
                renderedElements[i].className.indexOf("form-control") !== -1) {
                elements = [renderedElements[i]];
            }
            if (elements.length > 0) {
                var element = elements[0];
                if (element.tagName.toLowerCase() !== "a") {
                    setTimeout(function () { return element.focus({ preventScroll: true }); }, 10);
                    break;
                }
            }
        }
    }
}
__WEBPACK_IMPORTED_MODULE_0_knockout__["bindingHandlers"]["trueclick"] = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        element.onclick = function () { return true; };
    }
};
__WEBPACK_IMPORTED_MODULE_0_knockout__["bindingHandlers"]["key2click"] = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        element.onkeyup = function (ev) {
            var char = ev.which || ev.keyCode;
            if (char === 13 || char === 32) {
                element.click();
            }
            else if (char === 27) {
                element.blur();
            }
        };
    }
};
__WEBPACK_IMPORTED_MODULE_0_knockout__["bindingHandlers"]["clickNoFocus"] = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        element.onclick = function (ev) {
            valueAccessor().call(viewModel, viewModel, ev);
            setTimeout(function () {
                element.blur();
            }, 1);
            return true;
        };
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window == "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/Trident.*rv[ :]?11\./)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;


	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0}
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		_on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}


			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'transform';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'pointercancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					_on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					setTimeout(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.checkPull(this, this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, this.options.chosenClass, false);

				rootEl.insertBefore(cloneEl, dragEl);
				_dispatchEvent(this, rootEl, 'clone', dragEl);
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
					_on(document, 'pointermove', this._onTouchMove);
					_on(document, 'pointerup', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		return $
			? $(el).clone(true)[0]
			: (Polymer && Polymer.dom
				? Polymer.dom(el).cloneNode(true)
				: el.cloneNode(true)
			);
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	// Fixed #973: 
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				captureMode = {
					capture: false,
					passive: false
				};
			}
		}));
	} catch (err) {}

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.6.1';
	return Sortable;
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionEditorProperties__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionEditorDefinition__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmodal__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorShowWindow; });
/* unused harmony export SurveyQuestionProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorTab; });








var SurveyPropertyEditorShowWindow = /** @class */ (function () {
    function SurveyPropertyEditorShowWindow() {
        this.koVisible = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koEditor = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](null);
    }
    SurveyPropertyEditorShowWindow.prototype.show = function (question, elWindow, onChanged, options, onClosed) {
        if (options === void 0) { options = null; }
        if (onClosed === void 0) { onClosed = null; }
        var editor = new SurveyQuestionEditor(question, this.onCanShowPropertyCallback, null, options);
        editor.onChanged = onChanged;
        this.koEditor(editor);
        this.koVisible(true);
        var modal = new __WEBPACK_IMPORTED_MODULE_5_rmodal__["a" /* default */](elWindow, {
            bodyClass: "",
            closeTimeout: 100,
            dialogOpenClass: "animated fadeIn",
            focus: false,
            afterClose: function () {
                if (onClosed)
                    onClosed();
            }
        });
        modal.open();
        document.addEventListener("keydown", function (ev) {
            modal.keydown(ev);
        }, false);
        editor.onHideWindow = function () {
            modal.close();
        };
    };
    return SurveyPropertyEditorShowWindow;
}());

var SurveyQuestionProperties = /** @class */ (function () {
    function SurveyQuestionProperties(obj, onCanShowPropertyCallback) {
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"]
            ? __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"](this.obj)
            : __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
        this.editorDefinition = __WEBPACK_IMPORTED_MODULE_3__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getAllDefinitionsByClass(this.obj.getType());
    }
    SurveyQuestionProperties.prototype.getProperty = function (propertyName) {
        var property = this.getPropertyCore(propertyName);
        if (!property)
            return null;
        return __WEBPACK_IMPORTED_MODULE_6__surveyHelper__["b" /* SurveyHelper */].isPropertyVisible(this.obj, property, this.onCanShowPropertyCallback)
            ? property
            : null;
    };
    SurveyQuestionProperties.prototype.getPropertyCore = function (propertyName) {
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName)
                return this.properties[i];
        }
        return null;
    };
    SurveyQuestionProperties.prototype.getProperties = function (tab) {
        var _this = this;
        return this.editorDefinition
            .reduce(function (a, b) { return a.concat(b.properties); }, [
            { name: tab.name, tab: tab.name }
        ])
            .filter(function (prop) {
            return prop !== undefined &&
                typeof prop !== "string" &&
                prop.tab === tab.name;
        })
            .map(function (prop) { return typeof prop !== "string" && _this.getPropertyCore(prop.name); })
            .filter(function (prop) {
            return !!prop &&
                ((prop.name == tab.name && tab.visible === true) ||
                    __WEBPACK_IMPORTED_MODULE_6__surveyHelper__["b" /* SurveyHelper */].isPropertyVisible(_this.obj, prop, _this.onCanShowPropertyCallback));
        });
    };
    return SurveyQuestionProperties;
}());

var SurveyQuestionEditor = /** @class */ (function () {
    function SurveyQuestionEditor(obj, onCanShowPropertyCallback, className, options) {
        if (className === void 0) { className = null; }
        if (options === void 0) { options = null; }
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.className = className;
        this.options = options;
        this.koActiveTab = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koTitle = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        var self = this;
        if (!this.className && this.obj.getType) {
            this.className = this.obj.getType();
        }
        this.properties = new SurveyQuestionProperties(obj, onCanShowPropertyCallback);
        self.onApplyClick = function () {
            self.apply();
        };
        self.onOkClick = function () {
            self.doCloseWindow(false);
        };
        self.onResetClick = function () {
            self.doCloseWindow(true);
        };
        this.onTabClick = function (tab) {
            self.koActiveTab(tab.name);
        };
        var tabs = this.buildTabs();
        tabs.forEach(function (tab) { return tab.beforeShow(); });
        this.koTabs = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"](tabs);
        if (tabs.length > 0) {
            this.koActiveTab(tabs[0].name);
        }
        this.koShowApplyButton = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](!this.options || this.options.showApplyButtonInEditors);
        this.koTitle(this.getTitle());
    }
    SurveyQuestionEditor.prototype.getTitle = function () {
        var res;
        if (this.obj["name"]) {
            res = __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */]
                .getString("pe.qEditorTitle")["format"](this.obj["name"]);
        }
        else {
            res = __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe.surveyEditorTitle");
        }
        if (this.options && this.options.onGetElementEditorTitleCallback) {
            res = this.options.onGetElementEditorTitleCallback(this.obj, res);
        }
        return res;
    };
    SurveyQuestionEditor.prototype.doCloseWindow = function (isCancel) {
        var appliedSuccesfull = false;
        if (isCancel) {
            this.reset();
        }
        else {
            appliedSuccesfull = this.apply();
        }
        if (isCancel || appliedSuccesfull) {
            var tabs = this.koTabs();
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].doCloseWindow();
            }
            if (this.onHideWindow)
                this.onHideWindow();
        }
    };
    SurveyQuestionEditor.prototype.hasError = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].hasError()) {
                this.koActiveTab(tabs[i].name);
                return true;
            }
        }
        return false;
    };
    SurveyQuestionEditor.prototype.reset = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].reset();
        }
    };
    SurveyQuestionEditor.prototype.apply = function () {
        var res = true;
        var isFirstError = false;
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            var tabRes = tabs[i].apply();
            if (!tabRes) {
                tabs[i].expand();
                if (!isFirstError) {
                    this.koActiveTab(tabs[i].name);
                    isFirstError = true;
                }
            }
            res = tabRes && res;
        }
        if (res && this.onChanged) {
            this.onChanged(this.obj);
        }
        return res;
    };
    SurveyQuestionEditor.prototype.buildTabs = function () {
        var tabs = [];
        var properties = new __WEBPACK_IMPORTED_MODULE_2__questionEditorProperties__["a" /* SurveyQuestionEditorProperties */](this.obj, __WEBPACK_IMPORTED_MODULE_3__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(this.className), this.onCanShowPropertyCallback, this.options);
        if (__WEBPACK_IMPORTED_MODULE_3__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].isGeneralTabVisible(this.className)) {
            tabs.push(new SurveyQuestionEditorTab(this.obj, properties, "general"));
        }
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        return tabs;
    };
    SurveyQuestionEditor.prototype.addPropertiesTabs = function (tabs) {
        var tabNames = __WEBPACK_IMPORTED_MODULE_3__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getTabs(this.className);
        for (var i = 0; i < tabNames.length; i++) {
            var tabItem = tabNames[i];
            var properties = this.properties.getProperties(tabItem);
            if (properties.length > 0) {
                var propertyTab = new SurveyQuestionEditorTab(this.obj, new __WEBPACK_IMPORTED_MODULE_2__questionEditorProperties__["a" /* SurveyQuestionEditorProperties */](this.obj, properties, this.onCanShowPropertyCallback, this.options, tabItem), tabItem.name);
                propertyTab.title = tabItem.title;
                tabs.push(propertyTab);
            }
        }
    };
    Object.defineProperty(SurveyQuestionEditor.prototype, "useTabsInElementEditor", {
        get: function () {
            return this.options.useTabsInElementEditor;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyQuestionEditor;
}());

var SurveyQuestionEditorTab = /** @class */ (function () {
    function SurveyQuestionEditorTab(obj, properties, _name) {
        if (properties === void 0) { properties = null; }
        this.obj = obj;
        this.properties = properties;
        this._name = _name;
    }
    SurveyQuestionEditorTab.prototype.expand = function () {
        if (!!this.onExpand)
            this.onExpand();
    };
    SurveyQuestionEditorTab.prototype.koAfterRender = function (elements, context) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["c" /* focusFirstControl */])(elements);
    };
    Object.defineProperty(SurveyQuestionEditorTab.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTab.prototype, "title", {
        get: function () {
            if (this.titleValue)
                return this.titleValue;
            var str = __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe.tabs." + this.name);
            return str ? str : this.name;
        },
        set: function (value) {
            this.titleValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTab.prototype, "htmlTemplate", {
        get: function () {
            return "questioneditortab";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTab.prototype, "templateObject", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTab.prototype.hasError = function () {
        return this.properties.hasError();
    };
    SurveyQuestionEditorTab.prototype.beforeShow = function () {
        this.properties.beforeShow();
    };
    SurveyQuestionEditorTab.prototype.reset = function () {
        this.properties.reset();
    };
    SurveyQuestionEditorTab.prototype.apply = function () {
        return this.properties.apply();
    };
    SurveyQuestionEditorTab.prototype.doCloseWindow = function () { };
    SurveyQuestionEditorTab.prototype.getValue = function (property) {
        return property.getPropertyValue(this.obj);
    };
    return SurveyQuestionEditorTab;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sortablejs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__title_editor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_editor_scss__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__item_editor_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemAdorner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAddItemHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAddItemElement; });
/* unused harmony export itemDraggableAdorner */









var templateHtml = __webpack_require__(122);
var ItemInplaceEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ItemInplaceEditor, _super);
    function ItemInplaceEditor(name, question, item, rootElement, editor) {
        var _this = _super.call(this, name, rootElement) || this;
        _this.question = question;
        _this.item = item;
        _this.editor = editor;
        return _this;
    }
    ItemInplaceEditor.prototype.deleteItem = function (model, event) {
        if (this.question.otherItem === this.item) {
            this.question.hasOther = false;
        }
        else if (this.question["selectAllItem"] === this.item) {
            this.question["hasSelectAll"] = false;
        }
        else if (this.question["noneItem"] === this.item) {
            this.question["hasNone"] = false;
        }
        else {
            var index = model.question.choices.indexOf(model.item);
            model.question.choices.splice(index, 1);
        }
        this.editor.onQuestionEditorChanged(this.question);
    };
    Object.defineProperty(ItemInplaceEditor.prototype, "isDraggable", {
        get: function () {
            return (this.question.otherItem !== this.item &&
                this.question["selectAllItem"] !== this.item &&
                this.question["noneItem"] !== this.item);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemInplaceEditor.prototype, "isLastItem", {
        get: function () {
            return this.question.choices.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    return ItemInplaceEditor;
}(__WEBPACK_IMPORTED_MODULE_6__title_editor__["b" /* TitleInplaceEditor */]));
__WEBPACK_IMPORTED_MODULE_1_knockout__["components"].register("item-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new ItemInplaceEditor(params.target[params.name], params.question, params.item, componentInfo.element, params.editor);
            var property = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findProperty(params.target.getType(), params.name);
            model.valueChanged = function (newValue) {
                var options = {
                    propertyName: property.name,
                    obj: params.model,
                    value: newValue,
                    newValue: null,
                    doValidation: false
                };
                params.editor.onValueChangingCallback(options);
                newValue = options.newValue === null ? options.value : options.newValue;
                params.target[params.name] = newValue;
                params.editor.onPropertyValueChanged(property, params.target, newValue);
                !!params.valueChanged &&
                    params.valueChanged(params.target, property.name, newValue);
            };
            return model;
        }
    },
    template: templateHtml
});
var itemAdorner = {
    inplaceEditForValues: false,
    getMarkerClass: function (model) {
        return !!model.parent &&
            !!model.choices &&
            typeof model.getType === "function" &&
            model.getType() !== "imagepicker"
            ? "item_editable"
            : "";
    },
    getElementName: function (model) { return "controlLabel"; },
    afterRender: function (elements, model, editor) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function (e) { return e.preventDefault(); };
            var decoration = document.createElement("span");
            decoration.className = "svda-adorner-root";
            var itemValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["dataFor"](elements[i]);
            var propertyName = itemAdorner.inplaceEditForValues ? "value" : "text";
            var target = itemValue;
            if (itemValue === model["selectAllItem"]) {
                target = model;
                propertyName = "selectAllText";
            }
            if (itemValue === model["noneItemValue"]) {
                target = model;
                propertyName = "noneText";
            }
            if (itemValue === model["otherItemValue"]) {
                target = model;
                propertyName = "otherText";
            }
            decoration.innerHTML =
                "<item-editor params='name: \"" +
                    propertyName +
                    "\", target: target, item: item, question: question, editor: editor'></item-editor>";
            elements[i].appendChild(decoration);
            __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"]({
                item: itemValue,
                question: model,
                target: target,
                editor: editor
            }, decoration);
            __WEBPACK_IMPORTED_MODULE_1_knockout__["tasks"].runEarly();
            editor.onAdornerRenderedCallback(model, "choices-label", decoration, itemValue);
        }
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__surveyjsObjects__["b" /* registerAdorner */])("choices-label", itemAdorner);
var createAddItemHandler = function (question, onItemAdded, onItemAdding) {
    if (onItemAdding === void 0) { onItemAdding = null; }
    return function () {
        var nextValue = null;
        var values = question.choices.map(function (item) {
            return item.itemValue;
        });
        var itemText = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["surveyLocalization"].getString("choices_Item");
        nextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* getNextValue */])(itemText, values);
        var itemValue = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"](nextValue);
        itemValue.locOwner = {
            getLocale: function () {
                if (!!question["getLocale"])
                    return question.getLocale();
                return "";
            },
            getMarkdownHtml: function (text) {
                return text;
            },
            getProcessedText: function (text) {
                return text;
            }
        };
        !!onItemAdding && onItemAdding(itemValue);
        question.choices = question.choices.concat([itemValue]);
        itemValue = question.choices.filter(function (choiceItem) { return choiceItem.value === itemValue.value; })[0];
        !!onItemAdded && onItemAdded(itemValue);
    };
};
var createAddItemElement = function (handler) {
    var addNew = document.createElement("div");
    addNew.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.addItem");
    addNew.className = "svda-add-new-item svd-primary-icon";
    addNew.onclick = handler;
    var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute("class", "svd-svg-icon");
    svgElem.style.width = "12px";
    svgElem.style.height = "12px";
    var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useElem.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#icon-inplaceplus");
    svgElem.appendChild(useElem);
    addNew.appendChild(svgElem);
    return addNew;
};
var itemDraggableAdorner = {
    getMarkerClass: function (model) {
        return !!model.parent &&
            !!model.choices &&
            typeof model.getType === "function" &&
            model.getType() !== "imagepicker"
            ? "item_draggable"
            : "";
    },
    getElementName: function (model) { return "item"; },
    afterRender: function (elements, model, editor) {
        var itemsRoot = elements[0].parentElement;
        for (var i = 0; i < elements.length; i++) {
            var itemValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["dataFor"](elements[i]);
            if (itemValue === model["selectAllItemValue"] ||
                itemValue === model["noneItemValue"] ||
                itemValue === model["otherItemValue"]) {
                elements[i].classList.remove("item_draggable");
            }
        }
        var sortable = __WEBPACK_IMPORTED_MODULE_5_sortablejs___default.a.create(itemsRoot, {
            handle: ".svda-drag-handle",
            draggable: ".item_draggable",
            animation: 150,
            onEnd: function (evt) {
                var choices = model.choices;
                var choice = choices[evt.oldIndex];
                choices.splice(evt.oldIndex, 1);
                choices.splice(evt.newIndex, 0, choice);
                editor.onQuestionEditorChanged(model);
            }
        });
        var addNew = createAddItemElement(createAddItemHandler(model, function (itemValue) {
            editor.onQuestionEditorChanged(model);
        }, function (itemValue) {
            editor.onItemValueAddedCallback("choices", itemValue, model.choices);
        }));
        itemsRoot.appendChild(addNew);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__surveyjsObjects__["b" /* registerAdorner */])("choices-draggable", itemDraggableAdorner);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectProperty; });


var SurveyObjectProperty = /** @class */ (function () {
    function SurveyObjectProperty(property, onPropertyChanged, propertyEditorOptions) {
        if (onPropertyChanged === void 0) { onPropertyChanged = null; }
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        this.property = property;
        this.koIsShowEditor = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.onPropertyChanged = onPropertyChanged;
        this.name = this.property.name;
        this.disabled = property["readOnly"];
        var self = this;
        var onItemChanged = function (newValue) {
            self.onEditorValueChanged(newValue);
        };
        this.editor = __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].createEditor(property, onItemChanged);
        this.editor.onGetLocale = this.doOnGetLocale;
        this.editor.options = propertyEditorOptions;
        this.editorType = this.editor.editorType;
        this.editorTypeTemplate = this.editor.editorTypeTemplate;
        this.isActive = false;
    }
    Object.defineProperty(SurveyObjectProperty.prototype, "displayName", {
        get: function () {
            return this.editor.displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyObjectProperty.prototype, "title", {
        get: function () {
            return this.editor.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyObjectProperty.prototype, "isActive", {
        get: function () {
            return this.isActiveValue;
        },
        set: function (val) {
            if (this.isActive == val)
                return;
            this.isActiveValue = val;
            this.koIsShowEditor(!this.disabled && (this.editor.alwaysShowEditor || this.isActive));
            this.editor.activate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyObjectProperty.prototype, "koValue", {
        get: function () {
            return this.editor.koValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyObjectProperty.prototype, "koText", {
        get: function () {
            return this.editor.koText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyObjectProperty.prototype, "koIsDefault", {
        get: function () {
            return this.editor.koIsDefault;
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectProperty.prototype.doOnGetLocale = function () {
        if (this.object && this.object["getLocale"])
            return this.object.getLocale();
        return "";
    };
    Object.defineProperty(SurveyObjectProperty.prototype, "object", {
        get: function () {
            return this.objectValue;
        },
        set: function (value) {
            this.objectValue = value;
            this.editor.object = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectProperty.prototype.onEditorValueChanged = function (newValue) {
        if (this.onPropertyChanged && this.object)
            this.onPropertyChanged(this, newValue);
    };
    return SurveyObjectProperty;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorBase; });



var SurveyPropertyEditorBase = /** @class */ (function () {
    function SurveyPropertyEditorBase(property) {
        this.editingValue_ = null;
        this.isApplyinNewValue = false;
        this.valueUpdatingCounter = 0;
        this.optionsValue = null;
        this.isRequriedValue = false;
        this.isCustomDisplayName = false;
        this.isTabProperty = false;
        this.isInplaceProperty = false;
        this.iskoValueChanging = false;
        this.property_ = property;
        var self = this;
        this.koValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koValue.subscribe(function (newValue) {
            self.onkoValueChanged(newValue);
        });
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return self.getValueText(self.koValue());
        });
        this.koIsDefault = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return self.property
                ? self.property.isDefaultValue(self.koValue())
                : false;
        });
        this.koHasError = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koErrorText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koDisplayError = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return self.koHasError() && !!self.koErrorText();
        });
        this.setIsRequired();
        this.setTitleAndDisplayName();
        this.readOnly = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.getReadOnly());
    }
    SurveyPropertyEditorBase.prototype.setup = function () { };
    SurveyPropertyEditorBase.prototype.beforeShow = function () { };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editorType", {
        get: function () {
            throw "editorType is not defined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editorTypeTemplate", {
        get: function () {
            return this.editorType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "property", {
        get: function () {
            return this.property_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "defaultValue", {
        get: function () {
            return this.property.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editablePropertyName", {
        get: function () {
            return this.property ? this.property.name : "";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.getReadOnly = function () {
        var res = this.property ? this.property.readOnly : false;
        if (!!this.options && !!this.property && !!this.object) {
            res = this.options.onIsEditorReadOnlyCallback(this.object, this, res);
        }
        return res;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "alwaysShowEditor", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "title", {
        get: function () {
            return this.titleValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "isDiplayNameVisible", {
        get: function () {
            return ((!this.isTabProperty || !this.isModal) &&
                !this.isInplaceProperty &&
                this.displayName !== ".");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "displayName", {
        get: function () {
            return this.displayNameValue;
        },
        set: function (val) {
            this.isCustomDisplayName = true;
            this.displayNameValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "showDisplayNameOnTop", {
        get: function () {
            return this.isDiplayNameVisible && this.canShowDisplayNameOnTop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "canShowDisplayNameOnTop", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "contentTemplateName", {
        get: function () {
            var res = "propertyeditor";
            if (this.isModal) {
                res += "-modalcontent";
            }
            else {
                res += "-" + this.editorTypeTemplate;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "isModal", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "object", {
        get: function () {
            return this.objectValue;
        },
        set: function (value) {
            var _this = this;
            this.objectValue = value;
            if (typeof value.registerFunctionOnPropertyValueChanged === "function") {
                value.registerFunctionOnPropertyValueChanged(this.property.name, function () { return _this.updateValue(); }, this.property.name);
            }
            this.setIsRequired();
            this.setTitleAndDisplayName();
            this.setObject(this.object);
            this.updateValue();
            if (this.options && this.property) {
                this.options.onPropertyEditorObjectSetCallback(this.property.name, this.object, this);
                this.readOnly(this.getReadOnly());
            }
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.getValueText = function (value) {
        return value;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editingValue", {
        get: function () {
            return this.editingValue_;
        },
        set: function (value) {
            value = this.getCorrectedValue(value);
            this.setValueCore(value);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.hasError = function () {
        this.koHasError(this.checkForErrors());
        return this.koHasError();
    };
    SurveyPropertyEditorBase.prototype.getLocString = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(name);
    };
    SurveyPropertyEditorBase.prototype.hasLocString = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].hasString(name);
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "isCurrentValueEmpty", {
        get: function () {
            return this.isValueEmpty(this.koValue());
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.checkForErrors = function () {
        var errorText = "";
        if (this.isRequired || this.checkForItemValue()) {
            var er = this.isCurrentValueEmpty;
            if (er) {
                errorText = this.getLocString("pe.propertyIsEmpty");
            }
        }
        if (!errorText &&
            this.property &&
            this.options &&
            this.options.onGetErrorTextOnValidationCallback) {
            errorText = this.options.onGetErrorTextOnValidationCallback(this.property.name, this.object, this.editingValue);
        }
        this.koErrorText(errorText);
        return errorText !== "";
    };
    SurveyPropertyEditorBase.prototype.checkForItemValue = function () {
        //TODO Problem is in 882ca3ac commit. ItemValue without value should be invalid. Need to better fix for the problem.
        return (this.property &&
            this.property.name === "value" &&
            this.objectValue &&
            typeof this.objectValue.getType === "function" &&
            this.objectValue.getType() === "itemvalue");
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "isRequired", {
        get: function () {
            return this.isRequriedValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.setIsRequired = function () {
        this.isRequriedValue = !!this.property ? this.property.isRequired : false;
    };
    SurveyPropertyEditorBase.prototype.setTitleAndDisplayName = function () {
        if (this.isCustomDisplayName)
            return;
        this.displayNameValue = this.property ? this.property.name : "";
        this.titleValue = "";
        if (!this.property)
            return;
        var locName = this.property.name;
        this.displayNameValue = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyName(locName);
        var title = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyTitle(locName);
        this.titleValue = title;
    };
    SurveyPropertyEditorBase.prototype.onBeforeApply = function () { };
    SurveyPropertyEditorBase.prototype.apply = function () {
        this.onBeforeApply();
        if (this.hasError())
            return false;
        this.isApplyinNewValue = true;
        this.koValue(this.editingValue);
        this.isApplyinNewValue = false;
        return true;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "locale", {
        get: function () {
            if (this.onGetLocale)
                return this.onGetLocale();
            return "";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.getLocale = function () {
        return this.locale;
    };
    SurveyPropertyEditorBase.prototype.getMarkdownHtml = function (text) {
        return text;
    };
    SurveyPropertyEditorBase.prototype.getProcessedText = function (text) {
        return text;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "options", {
        get: function () {
            return this.optionsValue;
        },
        set: function (value) {
            this.optionsValue = value;
            this.onOptionsChanged();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.onOptionsChanged = function () { };
    SurveyPropertyEditorBase.prototype.setValueCore = function (value) {
        this.editingValue_ = value;
    };
    SurveyPropertyEditorBase.prototype.setObject = function (value) {
        if (this.options) {
            var editorOptions = this.createEditorOptions();
            this.options.onSetPropertyEditorOptionsCallback(this.editablePropertyName, value, editorOptions);
            this.onSetEditorOptions(editorOptions);
        }
    };
    SurveyPropertyEditorBase.prototype.activate = function () { };
    SurveyPropertyEditorBase.prototype.createEditorOptions = function () {
        return {};
    };
    SurveyPropertyEditorBase.prototype.onSetEditorOptions = function (editorOptions) { };
    SurveyPropertyEditorBase.prototype.onValueChanged = function () { };
    SurveyPropertyEditorBase.prototype.getCorrectedValue = function (value) {
        return value;
    };
    SurveyPropertyEditorBase.prototype.beginValueUpdating = function () {
        this.valueUpdatingCounter++;
    };
    SurveyPropertyEditorBase.prototype.endValueUpdating = function () {
        if (this.valueUpdatingCounter > 0) {
            this.valueUpdatingCounter--;
        }
    };
    SurveyPropertyEditorBase.prototype.updateValue = function () {
        this.beginValueUpdating();
        this.koValue(this.getValue());
        this.editingValue = this.koValue();
        if (this.onValueUpdated)
            this.onValueUpdated(this.editingValue);
        this.endValueUpdating();
    };
    SurveyPropertyEditorBase.prototype.getValue = function () {
        return this.property && this.object
            ? this.property.getPropertyValue(this.object)
            : null;
    };
    SurveyPropertyEditorBase.prototype.onkoValueChanged = function (newValue) {
        if (this.valueUpdatingCounter > 0 || this.iskoValueChanging)
            return;
        this.iskoValueChanging = true;
        newValue = this.getCorrectedValue(newValue);
        if (this.options && this.property && this.object) {
            var options = {
                propertyName: this.property.name,
                obj: this.object,
                value: newValue,
                newValue: null,
                doValidation: false
            };
            this.updateEditingProperties(newValue);
            this.options.onValueChangingCallback(options);
            if (!this.isValueEmpty(options.newValue)) {
                newValue = options.newValue;
                this.koValue(newValue);
            }
            if (options.doValidation) {
                this.hasError();
            }
        }
        this.updateEditingProperties(newValue);
        if (!this.isApplyinNewValue) {
            this.editingValue = newValue;
        }
        this.iskoValueChanging = false;
        if (this.property && this.object && this.getValue() == newValue)
            return;
        if (this.onChanged != null)
            this.onChanged(newValue);
    };
    SurveyPropertyEditorBase.prototype.updateEditingProperties = function (newValue) {
        if (!this.isModal && !!this.object) {
            if (!this.object.editingProperties) {
                this.object.editingProperties = {};
            }
            this.object.editingProperties[this.property.name] = newValue;
        }
    };
    SurveyPropertyEditorBase.prototype.isValueEmpty = function (val) {
        return __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Helpers"].isValueEmpty(val);
    };
    SurveyPropertyEditorBase.prototype.keyDownHandler = function (property, event) {
        var surveyEditor = property.editor.options;
        if (!!surveyEditor) {
            surveyEditor.onPropertyEditorKeyDownCallback(property.property.name, property.obj, property.editor, event);
        }
        return true;
    };
    return SurveyPropertyEditorBase;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemsEditor; });




var SurveyPropertyItemsEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemsEditor, _super);
    function SurveyPropertyItemsEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.sortableOptions = {
            handle: ".svd-drag-handle",
            animation: 150
        };
        _this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.editingValue = [];
        _this.koAllowAddRemoveItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        var self = _this;
        self.onDeleteClick = function (item) {
            self.koItems.remove(item);
        };
        self.onClearClick = function (item) {
            self.koItems.removeAll();
        };
        self.onAddClick = function () {
            self.AddItem();
        };
        return _this;
    }
    SurveyPropertyItemsEditor.prototype.getValueText = function (value) {
        var len = value ? value.length : 0;
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.items")["format"](len);
    };
    SurveyPropertyItemsEditor.prototype.getCorrectedValue = function (value) {
        if (value == null || !Array.isArray(value))
            value = [];
        return value;
    };
    SurveyPropertyItemsEditor.prototype.createEditorOptions = function () {
        return { allowAddRemoveItems: true };
    };
    SurveyPropertyItemsEditor.prototype.onSetEditorOptions = function (editorOptions) {
        this.koAllowAddRemoveItems(editorOptions.allowAddRemoveItems);
    };
    SurveyPropertyItemsEditor.prototype.AddItem = function () {
        this.koItems.push(this.createNewEditorItem());
    };
    SurveyPropertyItemsEditor.prototype.setupItems = function () {
        this.koItems(this.getItemsFromValue(this.editingValue));
    };
    SurveyPropertyItemsEditor.prototype.onValueChanged = function () {
        if (this.isShowingModal) {
            this.setupItems();
        }
    };
    SurveyPropertyItemsEditor.prototype.setup = function () {
        _super.prototype.setup.call(this);
        this.updateValue();
    };
    SurveyPropertyItemsEditor.prototype.getItemsFromValue = function (value) {
        if (value === void 0) { value = null; }
        var items = [];
        if (!value)
            value = this.editingValue;
        for (var i = 0; i < value.length; i++) {
            items.push(this.createEditorItem(value[i]));
        }
        return items;
    };
    Object.defineProperty(SurveyPropertyItemsEditor.prototype, "isCurrentValueEmpty", {
        get: function () {
            return this.koItems().length == 0;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyItemsEditor.prototype.onBeforeApply = function () {
        var items = [];
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            items.push(this.createItemFromEditorItem(internalItems[i]));
        }
        this.setValueCore(items);
    };
    SurveyPropertyItemsEditor.prototype.createNewEditorItem = function () {
        throw "Override 'createNewEditorItem' method";
    };
    SurveyPropertyItemsEditor.prototype.createEditorItem = function (item) {
        return item;
    };
    SurveyPropertyItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        return editorItem;
    };
    return SurveyPropertyItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objectProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionEditors_questionEditorDefinition__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNestedPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyNestedPropertyEditorItem; });
/* unused harmony export SurveyNestedPropertyEditorColumn */
/* unused harmony export SurveyNestedPropertyEditorEditorCell */







var SurveyNestedPropertyEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNestedPropertyEditor, _super);
    function SurveyNestedPropertyEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.koColumnsValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]([]);
        _this.createColumns();
        var self = _this;
        _this.koEditItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koIsList = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        _this.koActiveView = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("form");
        _this.koEditItem.subscribe(function (newValue) {
            self.koIsList(self.koEditItem() == null);
            self.onListDetailViewChanged();
        });
        _this.onEditItemClick = function (item) {
            self.koEditItem(item);
        };
        _this.onCancelEditItemClick = function () {
            var editItem = self.koEditItem();
            if (editItem.itemEditor && editItem.itemEditor.hasError())
                return;
            self.koEditItem(null);
        };
        _this.koEditorName = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            return self.getEditorName();
        });
        return _this;
    }
    Object.defineProperty(SurveyNestedPropertyEditor.prototype, "canShowDisplayNameOnTop", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditor.prototype, "columns", {
        get: function () {
            return this.koColumnsValue();
        },
        enumerable: true,
        configurable: true
    });
    SurveyNestedPropertyEditor.prototype.beforeShow = function () {
        _super.prototype.beforeShow.call(this);
        this.koEditItem(null);
    };
    SurveyNestedPropertyEditor.prototype.createColumns = function () {
        var result = [];
        var properties = this.getProperties();
        for (var i = 0; i < properties.length; i++) {
            result.push(new SurveyNestedPropertyEditorColumn(properties[i]));
        }
        this.koColumnsValue(result);
    };
    SurveyNestedPropertyEditor.prototype.getProperties = function () {
        return [];
    };
    SurveyNestedPropertyEditor.prototype.getPropertiesNames = function (definitionName, defaultNames) {
        var res = [];
        var properties = __WEBPACK_IMPORTED_MODULE_6__questionEditors_questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(definitionName);
        if (properties) {
            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i];
                res.push(prop.name ? prop.name : prop);
            }
        }
        if (res.length == 0) {
            res = defaultNames;
        }
        return res;
    };
    SurveyNestedPropertyEditor.prototype.getPropertiesByNames = function (className, names) {
        var res = [];
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            name.name ? name.name : name;
            var prop = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findProperty(className, name);
            if (prop && prop.visible) {
                res.push(prop);
            }
        }
        return res;
    };
    SurveyNestedPropertyEditor.prototype.getEditorName = function () {
        return "";
    };
    SurveyNestedPropertyEditor.prototype.onListDetailViewChanged = function () { };
    SurveyNestedPropertyEditor.prototype.checkForErrors = function () {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return _super.prototype.checkForErrors.call(this) || result;
    };
    SurveyNestedPropertyEditor.prototype.onBeforeApply = function () {
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            internalItems[i].apply();
        }
        _super.prototype.onBeforeApply.call(this);
    };
    return SurveyNestedPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyNestedPropertyEditorItem = /** @class */ (function () {
    function SurveyNestedPropertyEditorItem(obj, getColumns, options) {
        var _this = this;
        this.obj = obj;
        this.getColumns = getColumns;
        this.koCellsValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.options = options;
        __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            var columns = _this.getColumns();
            _this.koCellsValue([]);
            for (var i = 0; i < columns.length; i++) {
                _this.koCellsValue.push(new SurveyNestedPropertyEditorEditorCell(obj, columns[i].property, _this.options));
            }
        });
    }
    Object.defineProperty(SurveyNestedPropertyEditorItem.prototype, "columns", {
        get: function () {
            return this.getColumns();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorItem.prototype, "itemEditor", {
        get: function () {
            if (!this.itemEditorValue)
                this.itemEditorValue = this.createSurveyQuestionEditor();
            return this.itemEditorValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorItem.prototype, "cells", {
        get: function () {
            return this.koCellsValue();
        },
        enumerable: true,
        configurable: true
    });
    SurveyNestedPropertyEditorItem.prototype.hasError = function () {
        if (this.itemEditorValue && this.itemEditorValue.hasError())
            return true;
        var res = false;
        for (var i = 0; i < this.cells.length; i++) {
            res = this.cells[i].hasError || res;
        }
        return res;
    };
    SurveyNestedPropertyEditorItem.prototype.resetSurveyQuestionEditor = function () {
        this.itemEditorValue = null;
    };
    SurveyNestedPropertyEditorItem.prototype.createSurveyQuestionEditor = function () {
        return null;
    };
    SurveyNestedPropertyEditorItem.prototype.apply = function () {
        if (this.itemEditorValue)
            this.itemEditorValue.apply();
    };
    return SurveyNestedPropertyEditorItem;
}());

var SurveyNestedPropertyEditorColumn = /** @class */ (function () {
    function SurveyNestedPropertyEditorColumn(property) {
        this.property = property;
    }
    Object.defineProperty(SurveyNestedPropertyEditorColumn.prototype, "text", {
        get: function () {
            var text = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].hasString("pel." + this.property.name)
                ? this.getLocText("pel.")
                : this.getLocText("pe.");
            return text ? text : this.property.name;
        },
        enumerable: true,
        configurable: true
    });
    SurveyNestedPropertyEditorColumn.prototype.getLocText = function (prefix) {
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString(prefix + this.property.name);
    };
    return SurveyNestedPropertyEditorColumn;
}());

var SurveyNestedPropertyEditorEditorCell = /** @class */ (function () {
    function SurveyNestedPropertyEditorEditorCell(obj, property, options) {
        if (options === void 0) { options = null; }
        this.obj = obj;
        this.property = property;
        this.options = options;
        var self = this;
        var propEvent = function (property, newValue) {
            self.value = newValue;
        };
        this.objectPropertyValue = new __WEBPACK_IMPORTED_MODULE_5__objectProperty__["a" /* SurveyObjectProperty */](this.property, propEvent, this.options);
        this.objectPropertyValue.editor.isInplaceProperty = true;
        this.objectProperty.object = obj;
    }
    Object.defineProperty(SurveyNestedPropertyEditorEditorCell.prototype, "objectProperty", {
        get: function () {
            return this.objectPropertyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorEditorCell.prototype, "editor", {
        get: function () {
            return this.objectProperty.editor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorEditorCell.prototype, "koValue", {
        get: function () {
            return this.objectProperty.editor.koValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorEditorCell.prototype, "value", {
        get: function () {
            return this.property.getValue(this.obj);
        },
        set: function (val) {
            this.obj[this.property.name] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyNestedPropertyEditorEditorCell.prototype, "hasError", {
        get: function () {
            return this.editor.hasError();
        },
        enumerable: true,
        configurable: true
    });
    return SurveyNestedPropertyEditorEditorCell;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorDefinition; });

var SurveyQuestionEditorDefinition = /** @class */ (function () {
    function SurveyQuestionEditorDefinition() {
    }
    SurveyQuestionEditorDefinition.getProperties = function (className) {
        var properties = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.properties) {
                for (var j = 0; j < def.properties.length; j++) {
                    if (!def.properties[j]["tab"] ||
                        def.properties[j]["tab"] === "general") {
                        properties.push(def.properties[j]);
                    }
                }
            }
        }
        return properties;
    };
    SurveyQuestionEditorDefinition.isGeneralTabVisible = function (className) {
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.tabs) {
                for (var j = 0; j < def.tabs.length; j++) {
                    var tab = def.tabs[j];
                    if (tab.name == "general")
                        return tab.visible !== false;
                }
            }
        }
        return true;
    };
    SurveyQuestionEditorDefinition.getTabs = function (className) {
        var tabs = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        var tabsNamesHash = {};
        for (var i = 0; i < allDefinitions.length; i++) {
            var def = allDefinitions[i];
            if (def.tabs) {
                for (var j = 0; j < def.tabs.length; j++) {
                    var tab = def.tabs[j];
                    if (tabsNamesHash[tab.name])
                        continue;
                    tabsNamesHash[tab.name] = true;
                    if (tab.visible !== false) {
                        tabs.push(tab);
                    }
                }
            }
        }
        tabs.sort(function (a, b) {
            return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
        });
        return tabs;
    };
    SurveyQuestionEditorDefinition.getAllDefinitionsByClass = function (className) {
        var result = [];
        if (className.indexOf("@") > -1 &&
            SurveyQuestionEditorDefinition.definition[className]) {
            result.push(SurveyQuestionEditorDefinition.definition[className]);
            return result;
        }
        while (className) {
            var metaClass = (__WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData["findClass"](className));
            if (!metaClass)
                break;
            if (SurveyQuestionEditorDefinition.definition[metaClass.name]) {
                result.push(SurveyQuestionEditorDefinition.definition[metaClass.name]);
            }
            className = metaClass.parentName;
        }
        return result;
    };
    SurveyQuestionEditorDefinition.definition = {
        question: {
            properties: [
                "name",
                "title",
                { name: "visible", category: "checks" },
                { name: "isRequired", category: "checks" },
                { name: "startWithNewLine", category: "checks" }
            ],
            tabs: [
                { name: "visibleIf", index: 100 },
                { name: "enableIf", index: 110 }
            ]
        },
        comment: {
            properties: ["rows", "placeHolder"]
        },
        file: {
            properties: [
                { name: "showPreview", category: "imageChecks" },
                { name: "storeDataAsText", category: "imageChecks" },
                "maxSize",
                "imageHeight",
                "imageWidth"
            ]
        },
        html: {
            tabs: [{ name: "html", index: 10 }]
        },
        matrixdropdownbase: {
            properties: ["cellType", "columnsLocation"],
            tabs: [
                { name: "columns", index: 10 },
                { name: "rows", index: 11 },
                { name: "choices", index: 12 }
            ]
        },
        matrixdynamic: {
            properties: ["rowCount", "addRowLocation", "addRowText", "removeRowText"]
        },
        matrix: {
            tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }]
        },
        multipletext: {
            properties: ["colCount"],
            tabs: [{ name: "items", index: 10 }]
        },
        rating: {
            properties: ["minRateDescription", "maxRateDescription"],
            tabs: [{ name: "rateValues", index: 10 }]
        },
        selectbase: {
            properties: [
                { name: "hasOther", tab: "choices" },
                { name: "otherText", tab: "choices" },
                "choicesOrder",
                "colCount"
            ],
            tabs: [
                { name: "choices", index: 10 },
                { name: "choicesByUrl", index: 11 }
            ]
        },
        "itemvalue[]@choices": {
            title: "Rules",
            tabs: [
                { name: "general", visible: false },
                { name: "visibleIf", visible: true },
                { name: "enableIf", visible: true }
            ]
        },
        "itemvalue[]@rows": {
            title: "Rules",
            tabs: [
                { name: "general", visible: false },
                { name: "visibleIf", visible: true }
            ]
        },
        "itemvalue[]@columns": {
            title: "Rules",
            tabs: [
                { name: "general", visible: false },
                { name: "visibleIf", visible: true }
            ]
        },
        checkbox: {},
        radiogroup: {},
        dropdown: {
            properties: ["optionsCaption"]
        },
        text: {
            properties: ["inputType", "placeHolder"]
        },
        boolean: {
            properties: ["label"]
        },
        expression: {
            properties: ["currency", "displayStyle"],
            tabs: [{ name: "expression", index: 10 }]
        },
        matrixdropdowncolumn: {
            properties: ["isRequired", "cellType", "name", "title"]
        },
        "matrixdropdowncolumn@default": {
            tabs: [
                { name: "general", visible: false },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@checkbox": {
            properties: ["hasOther", "otherText", "choicesOrder", "colCount"],
            tabs: [
                { name: "choices", index: 10 },
                { name: "choicesByUrl", index: 11 },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@radiogroup": {
            properties: ["hasOther", "otherText", "choicesOrder", "colCount"],
            tabs: [
                { name: "choices", index: 10 },
                { name: "choicesByUrl", index: 11 },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@dropdown": {
            properties: ["hasOther", "otherText", "choicesOrder", "optionsCaption"],
            tabs: [
                { name: "choices", index: 10 },
                { name: "choicesByUrl", index: 11 },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@text": {
            properties: ["inputType", "placeHolder", "maxLength"],
            tabs: [
                { name: "validators", index: 10 },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@comment": {
            properties: ["rows", "placeHolder", "maxLength"],
            tabs: [
                { name: "validators", index: 10 },
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@boolean": {
            properties: ["defaultValue"],
            tabs: [
                { name: "visibleIf", index: 12 },
                { name: "enableIf", index: 20 },
                { name: "requiredIf", index: 30 }
            ]
        },
        "matrixdropdowncolumn@expression": {
            properties: ["name", "displayStyle", "currency"],
            tabs: [{ name: "expression", index: 10 }]
        },
        multipletextitem: {
            properties: ["inputType", "maxLength", "placeHolder"],
            tabs: [{ name: "validators", index: 10 }]
        },
        paneldynamic: {
            properties: [
                { name: "renderMode", category: "render" },
                { name: "allowAddPanel", category: "render" },
                { name: "allowRemovePanel", category: "render" },
                "panelAddText",
                "panelRemoveText"
            ],
            tabs: [{ name: "templateTitle", index: 10 }]
        },
        panel: {
            properties: ["name", "title", { name: "visible", category: "checks" }],
            tabs: [{ name: "visibleIf", index: 100 }]
        },
        page: {
            properties: [
                "name",
                "title",
                { name: "visible", category: "checks" },
                "questionsOrder"
            ],
            tabs: [{ name: "visibleIf", index: 100 }]
        },
        survey: {
            properties: [
                "title",
                "showTitle",
                "locale",
                "mode",
                "clearInvisibleValues",
                "cookieName",
                { name: "sendResultOnPageNext", category: "data" },
                { name: "storeOthersAsComment", category: "data" },
                { name: "showPageTitles", category: "page" },
                { name: "showPageNumbers", category: "page" },
                { name: "pagePrevText", tab: "navigation" },
                { name: "pageNextText", tab: "navigation" },
                { name: "completeText", tab: "navigation" },
                { name: "startSurveyText", tab: "navigation" },
                {
                    name: "showNavigationButtons",
                    tab: "navigation",
                    category: "navbuttons"
                },
                { name: "showPrevButton", tab: "navigation", category: "navbuttons" },
                { name: "firstPageIsStarted", tab: "navigation", category: "navpages" },
                { name: "showCompletedPage", tab: "navigation", category: "navpages" },
                { name: "goNextPageAutomatic", tab: "navigation", category: "navopt" },
                { name: "showProgressBar", tab: "navigation", category: "navopt" },
                { name: "isSinglePage", tab: "navigation" },
                { name: "questionTitleLocation", tab: "question" },
                { name: "requiredText", tab: "question" },
                { name: "questionStartIndex", tab: "question" },
                { name: "showQuestionNumbers", tab: "question" },
                { name: "questionTitleTemplate", tab: "question" },
                { name: "questionErrorLocation", tab: "question" },
                {
                    name: "focusFirstQuestionAutomatic",
                    tab: "question"
                },
                { name: "questionsOrder", tab: "question" },
                { name: "maxTimeToFinish", tab: "timer" },
                { name: "maxTimeToFinishPage", tab: "timer" },
                { name: "showTimerPanel", tab: "timer", category: "check" },
                { name: "showTimerPanelMode", tab: "timer", category: "check" }
            ],
            tabs: [
                { name: "navigation", index: 10 },
                { name: "question", index: 20 },
                { name: "completedHtml", index: 70 },
                { name: "loadingHtml", index: 80 },
                { name: "timer", index: 90 },
                { name: "triggers", index: 100 }
            ]
        }
    };
    return SurveyQuestionEditorDefinition;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_editor_scss__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__title_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TitleInplaceEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return titleAdorner; });
/* unused harmony export itemTitleAdorner */





var templateHtml = __webpack_require__(126);
var FRIENDLY_PADDING = 36;
function resizeInput(target) {
    var computedStyle = window.getComputedStyle(target);
    target.style.width =
        getTextWidth(target.value, computedStyle.font) + FRIENDLY_PADDING + "px";
}
/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
var cachedCanvas;
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = cachedCanvas || (cachedCanvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
var TitleInplaceEditor = /** @class */ (function () {
    function TitleInplaceEditor(name, rootElement) {
        var _this = this;
        this.rootElement = rootElement;
        this.editingName = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.prevName = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.isEditing = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.hideEditor = function () {
            _this.isEditing(false);
            _this.forNeibours(function (element) {
                element.style.display = element.dataset["sjsOldDisplay"];
            });
        };
        this.startEdit = function (model, event) {
            _this.editingName(_this.prevName());
            _this.isEditing(true);
            _this.forNeibours(function (element) {
                element.dataset["sjsOldDisplay"] = element.style.display;
                element.style.display = "none";
            });
            var inputElem = _this.rootElement.getElementsByTagName("input")[0];
            inputElem.focus();
            resizeInput(inputElem);
        };
        this.postEdit = function () {
            if (_this.prevName() !== _this.editingName()) {
                _this.prevName(_this.editingName());
                !!_this.valueChanged && _this.valueChanged(_this.editingName());
            }
            _this.hideEditor();
        };
        this.cancelEdit = function () {
            _this.editingName(_this.prevName());
            _this.hideEditor();
        };
        this.nameEditorKeypress = function (model, event) {
            resizeInput(event.target);
            if (event.keyCode === 13) {
                _this.postEdit();
            }
            else if (event.keyCode === 27) {
                _this.cancelEdit();
            }
        };
        this.editingName(name);
        this.prevName(name);
        this.forNeibours(function (element) {
            return (element.onclick = function (e) {
                _this.startEdit(_this, e);
                e.preventDefault();
            });
        });
    }
    TitleInplaceEditor.prototype.forNeibours = function (func) {
        if (!this.rootElement.parentElement ||
            !this.rootElement.parentElement.parentElement)
            return;
        var holder = this.rootElement.parentElement.parentElement;
        for (var i = 0; i < holder.children.length - 1; i++) {
            var element = holder.children[i];
            if (element.className.indexOf("svda-custom-content") === -1) {
                func(element);
            }
        }
    };
    TitleInplaceEditor.prototype.getLocString = function (str) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(str);
    };
    return TitleInplaceEditor;
}());

__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("title-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new TitleInplaceEditor(params.model[params.name], componentInfo.element);
            var property = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.findProperty(params.model.getType(), params.name);
            model.valueChanged = function (newValue) {
                var options = {
                    propertyName: property.name,
                    obj: params.model,
                    value: newValue,
                    newValue: null,
                    doValidation: false
                };
                params.editor.onValueChangingCallback(options);
                newValue = options.newValue === null ? options.value : options.newValue;
                params.model[params.name] = newValue;
                params.editor.onPropertyValueChanged(property, params.model, newValue);
            };
            return model;
        }
    },
    template: templateHtml
});
var titleAdorner = {
    getMarkerClass: function (model) {
        return "title_editable";
    },
    getElementName: function (model) { return "title"; },
    afterRender: function (elements, model, editor) {
        var decoration = document.createElement("span");
        decoration.innerHTML =
            "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
        elements[0].appendChild(decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({ model: model, editor: editor }, decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
        editor.onAdornerRenderedCallback(model, "title", decoration);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__["b" /* registerAdorner */])("title", titleAdorner);
var itemTitleAdorner = {
    getMarkerClass: function (model) {
        return !!model.items ? "item_title_editable title_editable" : "";
    },
    getElementName: function (model) { return "itemTitle"; },
    afterRender: function (elements, model, editor) {
        for (var i = 0; i < elements.length; i++) {
            var decoration = document.createElement("span");
            decoration.innerHTML =
                "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
            elements[i].appendChild(decoration);
            __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({ model: model.items[i], editor: editor }, decoration);
            __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
            editor.onAdornerRenderedCallback(model, "item-title", decoration, model.items[i]);
        }
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__["b" /* registerAdorner */])("item-title", itemTitleAdorner);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectEditor; });




var SurveyObjectEditor = /** @class */ (function () {
    function SurveyObjectEditor(propertyEditorOptions) {
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        var _this = this;
        this.propertyEditorOptions = propertyEditorOptions;
        this.oldActiveProperty = null;
        this.koProperties = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koActiveProperty = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koHasObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.onPropertyValueChanged = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Event"]();
        this.koActiveProperty.subscribe(function (newValue) {
            if (_this.oldActiveProperty === newValue)
                return;
            if (_this.oldActiveProperty)
                _this.oldActiveProperty.isActive = false;
            _this.oldActiveProperty = newValue;
            if (newValue)
                newValue.isActive = true;
        });
        var self = this;
        this.koAfterRender = function (el, con) {
            self.afterRender(el, con);
        };
    }
    Object.defineProperty(SurveyObjectEditor.prototype, "selectedObject", {
        get: function () {
            return this.selectedObjectValue;
        },
        set: function (value) {
            if (this.selectedObjectValue == value)
                return;
            this.koHasObject(value != null);
            this.selectedObjectValue = value;
            this.updateProperties();
            this.updatePropertiesObject();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectEditor.prototype.getPropertyEditor = function (name) {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == name)
                return properties[i];
        }
        return null;
    };
    SurveyObjectEditor.prototype.changeActiveProperty = function (property) {
        this.koActiveProperty(property);
    };
    SurveyObjectEditor.prototype.objectChanged = function () {
        this.updatePropertiesObject();
    };
    SurveyObjectEditor.prototype.afterRender = function (elements, prop) {
        if (!__WEBPACK_IMPORTED_MODULE_1_survey_knockout__["SurveyElement"] ||
            !__WEBPACK_IMPORTED_MODULE_1_survey_knockout__["SurveyElement"].GetFirstNonTextElement ||
            !this.onAfterRenderCallback)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["SurveyElement"].GetFirstNonTextElement(elements);
        var tEl = elements[0];
        if (tEl.nodeName === "#text")
            tEl.data = "";
        tEl = elements[elements.length - 1];
        if (tEl.nodeName === "#text")
            tEl.data = "";
        this.onAfterRenderCallback(this.selectedObject, el, prop);
    };
    SurveyObjectEditor.prototype.updateProperties = function () {
        var _this = this;
        if (!this.selectedObject || !this.selectedObject.getType) {
            this.koProperties([]);
            this.koActiveProperty(null);
            return;
        }
        var properties = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"]
            ? __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"](this.selectedObject)
            : __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.getProperties(this.selectedObject.getType());
        var objectProperties = [];
        var self = this;
        var propEvent = function (property, newValue) {
            var options = {
                property: property.property,
                object: property.object,
                newValue: newValue,
                updatedValue: null
            };
            self.onPropertyValueChanged.fire(_this, options);
            if (!!options.updatedValue && options.updatedValue != options.newValue) {
                property.koValue(options.updatedValue);
            }
        };
        var visibleProperties = [];
        for (var i = 0; i < properties.length; i++) {
            if (!this.canShowProperty(properties[i]))
                continue;
            visibleProperties.push(properties[i]);
        }
        var sortEvent = function (a, b) {
            var res = 0;
            if (self.onSortPropertyCallback) {
                res = self.onSortPropertyCallback(self.selectedObject, a.property, b.property);
            }
            if (res)
                return res;
            if (a.displayName == b.displayName)
                return 0;
            if (a.displayName > b.displayName)
                return 1;
            return -1;
        };
        for (var i = 0; i < visibleProperties.length; i++) {
            var objectProperty = new __WEBPACK_IMPORTED_MODULE_2__objectProperty__["a" /* SurveyObjectProperty */](visibleProperties[i], propEvent, this.propertyEditorOptions);
            objectProperty.editor.isInplaceProperty = true;
            objectProperties.push(objectProperty);
        }
        objectProperties.sort(sortEvent);
        this.koProperties(objectProperties);
        var propEditor = this.getPropertyEditor("name");
        if (!propEditor && objectProperties.length > 0) {
            propEditor = this.getPropertyEditor(objectProperties[0].name);
        }
        if (propEditor) {
            this.koActiveProperty(propEditor);
        }
    };
    SurveyObjectEditor.prototype.canShowProperty = function (property) {
        return __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].isPropertyVisible(this.selectedObject, property, this.onCanShowPropertyCallback);
    };
    SurveyObjectEditor.prototype.updatePropertiesObject = function () {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            properties[i].object = this.selectedObject;
        }
    };
    return SurveyObjectEditor;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylesManager; });


var StylesManager = /** @class */ (function () {
    function StylesManager() {
        this.sheet = null;
        this.sheet = StylesManager.findSheet(StylesManager.SurveyJSStylesSheetId);
        if (!this.sheet) {
            this.sheet = StylesManager.createSheet(StylesManager.SurveyJSStylesSheetId);
            this.initializeStyles(this.sheet);
        }
    }
    StylesManager.findSheet = function (styleSheetId) {
        for (var i = 0; i < document.styleSheets.length; i++) {
            if (!!document.styleSheets[i].ownerNode &&
                document.styleSheets[i].ownerNode["id"] === styleSheetId) {
                return document.styleSheets[i];
            }
        }
        return null;
    };
    StylesManager.createSheet = function (styleSheetId) {
        var style = document.createElement("style");
        style.id = styleSheetId;
        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    };
    StylesManager.applyTheme = function (themeName, themeSelector) {
        if (themeName === void 0) { themeName = "default"; }
        if (themeSelector === void 0) { themeSelector = ".svd_container"; }
        StylesManager.currentTheme(themeName);
        StylesManager.applySurveyTheme(themeName);
        var sheet = StylesManager.findSheet(themeName + themeSelector);
        if (!sheet) {
            sheet = StylesManager.createSheet(themeName + themeSelector);
            var theme_1 = StylesManager.ThemeColors[themeName] ||
                StylesManager.ThemeColors["default"];
            var ThemeCss_1;
            if (["bootstrap", "bootstrapmaterial"].indexOf(themeName) !== -1) {
                ThemeCss_1 = StylesManager[themeName + "ThemeCss"];
            }
            else {
                ThemeCss_1 = StylesManager.ThemeCss;
            }
            Object.keys(ThemeCss_1).forEach(function (selector) {
                var cssRuleText = ThemeCss_1[selector];
                Object.keys(theme_1).forEach(function (colorVariableName) {
                    return (cssRuleText = cssRuleText.replace(new RegExp("\\" + colorVariableName, "g"), theme_1[colorVariableName]));
                });
                sheet.insertRule(themeSelector + selector + " { " + cssRuleText + " }", 0);
            });
        }
    };
    StylesManager.applySurveyTheme = function (themeName) {
        if (["bootstrap", "bootstrapmaterial"].indexOf(themeName) !== -1) {
            __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["Survey"].cssType = themeName;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["Survey"].cssType = "default";
        }
        __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["StylesManager"].applyTheme(themeName);
    };
    StylesManager.prototype.initializeStyles = function (sheet) {
        Object.keys(StylesManager.Styles).forEach(function (selector) {
            return sheet.insertRule(selector + " { " + StylesManager.Styles[selector] + " }", 0);
        });
    };
    StylesManager.SurveyJSStylesSheetId = "surveyjs";
    StylesManager.Styles = {};
    StylesManager.ThemeColors = {
        default: {
            "$primary-color": "#1ab394",
            "$secondary-color": "#1ab394",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#18a689",
            "$selection-border-color": "#1ab394",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        orange: {
            "$primary-color": "#f78119",
            "$secondary-color": "#4a4a4a",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#e77109",
            "$selection-border-color": "#4a4a4a",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        darkblue: {
            "$primary-color": "#3c4f6d",
            "$secondary-color": "#3c4f6d",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#2c3f5d",
            "$selection-border-color": "#4a4a4a",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        darkrose: {
            "$primary-color": "#68656e",
            "$secondary-color": "#68656e",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#57545e",
            "$selection-border-color": "#4a4a4a",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        stone: {
            "$primary-color": "#0f0f33",
            "$secondary-color": "#0f0f33",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#000023",
            "$selection-border-color": "#cdccd2",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        winter: {
            "$primary-color": "#5ac8fa",
            "$secondary-color": "#5ac8fa",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#4ad8ea",
            "$selection-border-color": "#82b8da",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        },
        winterstone: {
            "$primary-color": "#3c3b40",
            "$secondary-color": "#3c3b40",
            "$primary-text-color": "#676a6c",
            "$secondary-text-color": "#a7a7a7",
            "$inverted-text-color": "#ffffff",
            "$primary-hover-color": "#1c1b20",
            "$selection-border-color": "#b8b8b8",
            "$primary-icon-color": "#3d4d5d",
            "$primary-bg-color": "#fff",
            "$secondary-bg-color": "#f4f4f4",
            "$primary-border-color": "#e7eaec",
            "$secondary-border-color": "#ddd"
        }
    };
    StylesManager.ThemeCss = {
        ".svd_container": "color: $primary-text-color;",
        ".svd_container a:focus, .svd_container select:focus, .svd_container span:focus, .svd_container div:focus, .svd_container tr:focus, .svd_container input[type='checkbox']:focus + span.checkmark": "outline-color: $primary-color;",
        ".svd_container .svd_toolbar button:focus": "outline-color: $primary-text-color;",
        ".svd_container a": "color: $primary-color;",
        ".svd_container a:hover": "color: $primary-hover-color;",
        ".svd_container .svd-main-color": "color: $primary-color;",
        ".svd_container .svd-main-border-color": "border-color: $selection-border-color;",
        ".svd_container .svd-main-background-color": "background-color: $primary-color;",
        ".svd_container .svd-light-background-color": "background-color: $primary-border-color;",
        ".svd_container .btn-primary": "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
        ".svd_container .btn-link": "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",
        ".svd_container .svd-svg-icon": "fill: $primary-icon-color;",
        ".svd_container .svd-primary-icon .svd-svg-icon": "fill: $primary-color;",
        ".svd_container .svd-secondary-icon .svd-svg-icon": "fill: $secondary-color;",
        ".svd_container .icon-gearactive .svd-svg-icon": "fill: $primary-color;",
        ".svd_container .nav-tabs a": "color: $primary-text-color",
        ".svd_container .nav-tabs > li.active > a": "color: $primary-color",
        ".svd_container .nav-item.active .nav-link": "background-color: $primary-bg-color;",
        ".svd_container .sjs-cb-container:hover input ~ .checkmark": "background-color: $dd-menu-border",
        ".svd_container .sjs-cb-container:hover input:checked ~ .checkmark": "background-color: $primary-hover-color",
        ".svd_container .svd_custom_select:before": "background-color: $primary-color;",
        ".svd_container .form-control:focus": "border-color: $primary-color;",
        ".svd_container .svd-light-text-color": "color: $secondary-text-color;",
        ".svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container .svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container .svd_toolbar li.active a": "background-color: $primary-color; color: $primary-bg-color;",
        ".svd_container .svd_selected_page": "border-bottom: 1px solid $primary-bg-color;",
        ".svd_container .editor-tabs > li > a:hover": "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
        ".svd_container .editor-tabs > li > a:focus": "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
        ".svd_container .editor-tabs > li.active > a": "color: $primary-color; background-color: $secondary-bg-color; border: 1px solid $primary-border-color; border-bottom-color: $secondary-bg-color;",
        ".svd_container .svd-light-border-color": "border-color: $primary-border-color",
        ".svd_container .svd-dark-border-color": "border-color: $secondary-border-color",
        ".svd_container .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow": "background:  $primary-color;",
        ".svd_container .select2-container .select2-selection--single .select2-selection__arrow": "background:  $primary-color;"
    };
    StylesManager.bootstrapThemeCss = {
        ".svd_container.sv_bootstrap_css": "color: $primary-text-color;",
        ".svd_container.sv_bootstrap_css a:focus, .svd_container.sv_bootstrap_css select:focus, .svd_container.sv_bootstrap_css span:focus, .svd_container.sv_bootstrap_css div:focus, .svd_container.sv_bootstrap_css tr:focus, .svd_container.sv_bootstrap_css input[type='checkbox']:focus + span.checkmark": "outline-color: $primary-color;",
        ".svd_container.sv_bootstrap_css .svd_toolbar button:focus": "outline-color: $primary-text-color;",
        ".svd_container.sv_bootstrap_css a": "color: $primary-color;",
        ".svd_container.sv_bootstrap_css a:hover": "color: $primary-hover-color;",
        ".svd_container.sv_bootstrap_css .svd-main-color": "color: $primary-color;",
        ".svd_container.sv_bootstrap_css .svd-main-border-color": "border-color: $selection-border-color;",
        ".svd_container.sv_bootstrap_css .svd-main-background-color": "background-color: $primary-color;",
        ".svd_container.sv_bootstrap_css .svd-light-background-color": "background-color: $primary-border-color;",
        ".svd_container.sv_bootstrap_css .btn-primary": "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
        ".svd_container.sv_bootstrap_css .btn-link": "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",
        ".svd_container.sv_bootstrap_css .svd-svg-icon": "fill: $primary-icon-color;",
        ".svd_container.sv_bootstrap_css .svd-primary-icon .svd-svg-icon": "fill: $primary-color;",
        ".svd_container.sv_bootstrap_css .svd-secondary-icon .svd-svg-icon": "fill: $secondary-color;",
        ".svd_container.sv_bootstrap_css .icon-gearactive .svd-svg-icon": "fill: $primary-color;",
        ".svd_container.sv_bootstrap_css .nav-tabs a": "color: $primary-text-color;",
        ".svd_container.sv_bootstrap_css .nav-tabs > li.active > a": "color: $primary-color;",
        ".svd_container.sv_bootstrap_css .nav-item.active .nav-link": "background-color: $primary-bg-color;",
        ".svd_container.sv_bootstrap_css .sjs-cb-container:hover input ~ .checkmark": "background-color: $dd-menu-border",
        ".svd_container.sv_bootstrap_css .sjs-cb-container:hover input:checked ~ .checkmark": "background-color: $primary-hover-color",
        ".svd_container.sv_bootstrap_css .svd_custom_select:before": "background-color: $primary-color;",
        ".svd_container.sv_bootstrap_css .form-control:focus": "border-color: $primary-color;",
        ".svd_container.sv_bootstrap_css .svd-light-text-color": "color: $secondary-text-color;",
        ".svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container.sv_bootstrap_css .svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container.sv_bootstrap_css .svd_toolbar li.active a": "background-color: $primary-color; color: $primary-bg-color;",
        ".svd_container.sv_bootstrap_css .svd_selected_page": "border-bottom: 1px solid $primary-bg-color;",
        ".svd_container.sv_bootstrap_css .editor-tabs > li > a:hover": "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
        ".svd_container.sv_bootstrap_css .editor-tabs > li > a:focus": "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color",
        ".svd_container.sv_bootstrap_css .editor-tabs > li.active > a": "color: $primary-color; background-color: $secondary-bg-color; border: 1px solid $primary-border-color; border-bottom-color: $secondary-bg-color;",
        ".svd_container.sv_bootstrap_css .svd-light-border-color": "border-color: $primary-border-color",
        ".svd_container.sv_bootstrap_css .svd-dark-border-color": "border-color: $secondary-border-color",
        ".svd_container.sv_bootstrap_css .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow": "background:  $primary-color;",
        ".svd_container.sv_bootstrap_css .select2-container .select2-selection--single .select2-selection__arrow": "background:  $primary-color;",
        ".svd_container.sv_bootstrap_css .modal-tabs": "background: transparent; padding-bottom: 10px;",
        ".svd_container.sv_bootstrap_css .modal-tabs > li > a": "color: $primary-text-color; border: 1px solid transparent;",
        ".svd_container.sv_bootstrap_css .modal-tabs > li > a:hover": "color: $primary-color; border-bottom: 1px solid $inverted-text-color;",
        ".svd_container.sv_bootstrap_css .modal-tabs > li > a:focus": "$primary-color; border-bottom: 1px solid $inverted-text-color;",
        ".svd_container.sv_bootstrap_css .modal-tabs > li.active > a": "color: $primary-color; border: 1px solid $primary-border-color; border-bottom-color: $inverted-text-color;",
        ".svd_container.sv_bootstrap_css .form-group.is-focused .form-control": "background-image: linear-gradient($primary-color, $primary-color), linear-gradient(#D2D2D2, #D2D2D2);",
        ".svd_container.sv_bootstrap_css .form-group.is-focused label": "color:$primary-color;"
    };
    StylesManager.bootstrapmaterialThemeCss = {
        ".svd_container.sv_bootstrapmaterial_css": "color: $primary-text-color;",
        ".svd_container.sv_bootstrapmaterial_css a": "color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css a:hover": "color: $primary-hover-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-main-color": "color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-main-border-color": "border-color: $selection-border-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-main-background-color": "background-color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-light-background-color": "background-color: $primary-border-color;",
        ".svd_container.sv_bootstrapmaterial_css .btn-primary": "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
        ".svd_container.sv_bootstrapmaterial_css .btn-secondary": "background-color: $primary-border-color;",
        ".svd_container.sv_bootstrapmaterial_css .btn-secondary:hover": "opacity: 0.8;",
        ".svd_container.sv_bootstrapmaterial_css .btn-link": "color: $primary-text-color; background-color: $secondary-bg-color; border-color: $secondary-bg-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-svg-icon": "fill: $primary-icon-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-primary-icon .svd-svg-icon": "fill: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-secondary-icon .svd-svg-icon": "fill: $secondary-color;",
        ".svd_container.sv_bootstrapmaterial_css .icon-gearactive .svd-svg-icon": "fill: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .nav-tabs a": "color: $primary-text-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .nav-tabs > li.active > a": "color: $primary-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .nav-item.active .nav-link": "background-color: $primary-bg-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .sjs-cb-container:hover input ~ .checkmark": "background-color: $dd-menu-border",
        ".svd_container.sv_bootstrapmaterial_css .sjs-cb-container:hover input:checked ~ .checkmark": "background-color: $primary-hover-color",
        ".svd_container.sv_bootstrapmaterial_css .svd_custom_select:before": "background-color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .form-control:focus": "border-color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-light-text-color": "color: $secondary-text-color;",
        ".svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd-light-bg-color": "background-color: $primary-bg-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd_toolbar li.active a": "background-color: $primary-color; color: $primary-bg-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd_selected_page": "border-bottom: 1px solid $primary-bg-color;",
        ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li > a:hover": "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li > a:focus": "background-color: $secondary-bg-color !important; border-bottom: 1px solid $secondary-bg-color !important",
        ".svd_container.sv_bootstrapmaterial_css .editor-tabs > li.active > a": "color: $primary-color !important; background-color: $secondary-bg-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $secondary-bg-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .svd-light-border-color": "border-color: $primary-border-color",
        ".svd_container.sv_bootstrapmaterial_css .svd-dark-border-color": "border-color: $secondary-border-color",
        ".svd_container.sv_bootstrapmaterial_css .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow": "background:  $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .select2-container .select2-selection--single .select2-selection__arrow": "background:  $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd_properties_grid  .glyphicon-edit": "background-color: $primary-color;",
        ".svd_container.sv_bootstrapmaterial_css .svd_properties_grid  .glyphicon-edit:hover": "background-color:  $primary-hover-color;",
        ".svd_container.sv_bootstrapmaterial_css .modal-tabs": "background: transparent; padding-bottom: 10px;",
        ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a": "color: $primary-text-color !important; border: 1px solid transparent !important;",
        ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a:hover": "color: $primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li > a:focus": "$primary-color !important; border-bottom: 1px solid $inverted-text-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .modal-tabs > li.active > a": "color: $primary-color !important; border: 1px solid $primary-border-color !important; border-bottom-color: $inverted-text-color !important;",
        ".svd_container.sv_bootstrapmaterial_css .form-group.is-focused .form-control": "background-image: linear-gradient($primary-color, $primary-color), linear-gradient(#D2D2D2, #D2D2D2);",
        ".svd_container.sv_bootstrapmaterial_css .form-group.is-focused label": "color:$primary-color;"
    };
    StylesManager.currentTheme = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("bootstrap");
    return StylesManager;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json5__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTextWorker; });



var TextParserPropery = /** @class */ (function () {
    function TextParserPropery() {
    }
    return TextParserPropery;
}());
var SurveyForTextWorker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyForTextWorker, _super);
    function SurveyForTextWorker(jsonObj) {
        return _super.call(this, jsonObj) || this;
    }
    Object.defineProperty(SurveyForTextWorker.prototype, "isDesignMode", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyForTextWorker;
}(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"]));
var SurveyTextWorker = /** @class */ (function () {
    function SurveyTextWorker(text) {
        this.text = text;
        if (!this.text || this.text.trim() == "") {
            this.text = "{}";
        }
        this.errors = [];
        this.process();
    }
    Object.defineProperty(SurveyTextWorker.prototype, "survey", {
        get: function () {
            return this.surveyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyTextWorker.prototype, "isJsonCorrect", {
        get: function () {
            return this.surveyValue != null;
        },
        enumerable: true,
        configurable: true
    });
    SurveyTextWorker.prototype.process = function () {
        try {
            this.jsonValue = new __WEBPACK_IMPORTED_MODULE_1__json5__["a" /* SurveyJSON5 */](1).parse(this.text);
        }
        catch (error) {
            this.errors.push({
                pos: { start: error.at, end: -1 },
                text: error.message
            });
        }
        if (this.jsonValue != null) {
            this.updateJsonPositions(this.jsonValue);
            var pureJsonValue = new __WEBPACK_IMPORTED_MODULE_1__json5__["a" /* SurveyJSON5 */]().parse(this.text);
            this.surveyValue = new SurveyForTextWorker(pureJsonValue);
            if (this.surveyValue.jsonErrors != null) {
                for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                    var error = this.surveyValue.jsonErrors[i];
                    this.errors.push({
                        pos: { start: error.at, end: -1 },
                        text: error.getFullDescription()
                    });
                }
            }
        }
        this.surveyObjects = this.createSurveyObjects();
        this.setEditorPositionByChartAt(this.surveyObjects);
        this.setEditorPositionByChartAt(this.errors);
    };
    SurveyTextWorker.prototype.updateJsonPositions = function (jsonObj) {
        jsonObj["pos"]["self"] = jsonObj;
        for (var key in jsonObj) {
            var obj = jsonObj[key];
            if (obj && obj["pos"]) {
                jsonObj["pos"][key] = obj["pos"];
                this.updateJsonPositions(obj);
            }
        }
    };
    SurveyTextWorker.prototype.createSurveyObjects = function () {
        var result = [];
        if (this.surveyValue == null)
            return result;
        this.isSurveyAsPage = false;
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            if (i == 0 && !page["pos"]) {
                page["pos"] = this.surveyValue["pos"];
                this.isSurveyAsPage = true;
            }
            result.push(page);
            for (var j = 0; j < page.questions.length; j++) {
                result.push(page.questions[j]);
            }
        }
        return result;
    };
    SurveyTextWorker.prototype.setEditorPositionByChartAt = function (objects) {
        if (objects == null || objects.length == 0)
            return;
        var position = { row: 0, column: 0 };
        var atObjectsArray = this.getAtArray(objects);
        var startAt = 0;
        for (var i = 0; i < atObjectsArray.length; i++) {
            var at = atObjectsArray[i].at;
            position = this.getPostionByChartAt(position, startAt, at);
            var obj = atObjectsArray[i].obj;
            if (!obj.position)
                obj.position = {};
            if (at == obj.pos.start) {
                obj.position.start = position;
            }
            else {
                if (at == obj.pos.end) {
                    obj.position.end = position;
                }
            }
            startAt = at;
        }
    };
    SurveyTextWorker.prototype.getPostionByChartAt = function (startPosition, startAt, at) {
        var result = { row: startPosition.row, column: startPosition.column };
        var curChar = startAt;
        while (curChar < at) {
            if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
                result.row++;
                result.column = 0;
            }
            else {
                result.column++;
            }
            curChar++;
        }
        return result;
    };
    SurveyTextWorker.prototype.getAtArray = function (objects) {
        var result = [];
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var pos = obj.pos;
            if (!pos)
                continue;
            result.push({ at: pos.start, obj: obj });
            if (pos.end > 0) {
                result.push({ at: pos.end, obj: obj });
            }
        }
        return result.sort(function (el1, el2) {
            if (el1.at > el2.at)
                return 1;
            if (el1.at < el2.at)
                return -1;
            return 0;
        });
    };
    return SurveyTextWorker;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSON5; });
// This file is based on JSON5, http://json5.org/
// The modification for getting object and properties location 'at' were maden.
var SurveyJSON5 = /** @class */ (function () {
    function SurveyJSON5(parseType) {
        if (parseType === void 0) { parseType = 0; }
        this.parseType = parseType;
    }
    SurveyJSON5.prototype.parse = function (source, reviver, startFrom, endAt) {
        if (reviver === void 0) { reviver = null; }
        if (startFrom === void 0) { startFrom = 0; }
        if (endAt === void 0) { endAt = -1; }
        var result;
        this.text = String(source);
        this.at = startFrom;
        this.endAt = endAt;
        this.ch = " ";
        result = this.value();
        this.white();
        if (this.ch) {
            this.error("Syntax error");
        }
        // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the result
        // in an empty key. If there is not a reviver function, we simply return the
        // result.
        return typeof reviver === "function"
            ? (function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            }
                            else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            })({ "": result }, "")
            : result;
    };
    SurveyJSON5.prototype.error = function (m) {
        // Call error when something is wrong.
        var error = new SyntaxError();
        error.message = m;
        error["at"] = this.at;
        throw error;
    };
    SurveyJSON5.prototype.next = function (c) {
        if (c === void 0) { c = null; }
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== this.ch) {
            this.error("Expected '" + c + "' instead of '" + this.ch + "'");
        }
        // Get the this.next character. When there are no more characters,
        // return the empty string.
        this.ch = this.chartAt();
        this.at += 1;
        return this.ch;
    };
    SurveyJSON5.prototype.peek = function () {
        // Get the this.next character without consuming it or
        // assigning it to the this.ch varaible.
        return this.chartAt();
    };
    SurveyJSON5.prototype.chartAt = function () {
        if (this.endAt > -1 && this.at >= this.endAt)
            return "";
        return this.text.charAt(this.at);
    };
    SurveyJSON5.prototype.identifier = function () {
        // Parse an identifier. Normally, reserved words are disallowed here, but we
        // only use this for unquoted object keys, where reserved words are allowed,
        // so we don't check for those here. References:
        // - http://es5.github.com/#x7.6
        // - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
        // - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
        // TODO Identifiers can have Unicode "letters" in them; add support for those.
        var key = this.ch;
        // Identifiers must start with a letter, _ or $.
        if (this.ch !== "_" &&
            this.ch !== "$" &&
            (this.ch < "a" || this.ch > "z") &&
            (this.ch < "A" || this.ch > "Z")) {
            this.error("Bad identifier");
        }
        // Subsequent characters can contain digits.
        while (this.next() &&
            (this.ch === "_" ||
                this.ch === "$" ||
                (this.ch >= "a" && this.ch <= "z") ||
                (this.ch >= "A" && this.ch <= "Z") ||
                (this.ch >= "0" && this.ch <= "9"))) {
            key += this.ch;
        }
        return key;
    };
    SurveyJSON5.prototype.number = function () {
        // Parse a number value.
        var number, sign = "", string = "", base = 10;
        if (this.ch === "-" || this.ch === "+") {
            sign = this.ch;
            this.next(this.ch);
        }
        // support for Infinity (could tweak to allow other words):
        if (this.ch === "I") {
            number = this.word();
            if (typeof number !== "number" || isNaN(number)) {
                this.error("Unexpected word for number");
            }
            return sign === "-" ? -number : number;
        }
        // support for NaN
        if (this.ch === "N") {
            number = this.word();
            if (!isNaN(number)) {
                this.error("expected word to be NaN");
            }
            // ignore sign as -NaN also is NaN
            return number;
        }
        if (this.ch === "0") {
            string += this.ch;
            this.next();
            if (this.ch === "x" || this.ch === "X") {
                string += this.ch;
                this.next();
                base = 16;
            }
            else if (this.ch >= "0" && this.ch <= "9") {
                this.error("Octal literal");
            }
        }
        switch (base) {
            case 10:
                while (this.ch >= "0" && this.ch <= "9") {
                    string += this.ch;
                    this.next();
                }
                if (this.ch === ".") {
                    string += ".";
                    while (this.next() && this.ch >= "0" && this.ch <= "9") {
                        string += this.ch;
                    }
                }
                if (this.ch === "e" || this.ch === "E") {
                    string += this.ch;
                    this.next();
                    if (this.ch === "-" || this.ch === "+") {
                        string += this.ch;
                        this.next();
                    }
                    while (this.ch >= "0" && this.ch <= "9") {
                        string += this.ch;
                        this.next();
                    }
                }
                break;
            case 16:
                while ((this.ch >= "0" && this.ch <= "9") ||
                    (this.ch >= "A" && this.ch <= "F") ||
                    (this.ch >= "a" && this.ch <= "f")) {
                    string += this.ch;
                    this.next();
                }
                break;
        }
        if (sign === "-") {
            number = -string;
        }
        else {
            number = +string;
        }
        if (!isFinite(number)) {
            this.error("Bad number");
        }
        else {
            return number;
        }
    };
    SurveyJSON5.prototype.string = function () {
        // Parse a string value.
        var hex, i, string = "", delim, // double quote or single quote
        uffff;
        // When parsing for string values, we must look for ' or " and \ characters.
        if (this.ch === '"' || this.ch === "'") {
            delim = this.ch;
            while (this.next()) {
                if (this.ch === delim) {
                    this.next();
                    return string;
                }
                else if (this.ch === "\\") {
                    this.next();
                    if (this.ch === "u") {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(this.next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    }
                    else if (this.ch === "\r") {
                        if (this.peek() === "\n") {
                            this.next();
                        }
                    }
                    else if (typeof SurveyJSON5.escapee[this.ch] === "string") {
                        string += SurveyJSON5.escapee[this.ch];
                    }
                    else {
                        break;
                    }
                }
                else if (this.ch === "\n") {
                    // unescaped newlines are invalid; see:
                    // https://github.com/aseemk/json5/issues/24
                    // TODO this feels special-cased; are there other
                    // invalid unescaped chars?
                    break;
                }
                else {
                    string += this.ch;
                }
            }
        }
        this.error("Bad string");
    };
    SurveyJSON5.prototype.inlineComment = function () {
        // Skip an inline comment, assuming this is one. The current character should
        // be the second / character in the // pair that begins this inline comment.
        // To finish the inline comment, we look for a newline or the end of the text.
        if (this.ch !== "/") {
            this.error("Not an inline comment");
        }
        do {
            this.next();
            if (this.ch === "\n" || this.ch === "\r") {
                this.next();
                return;
            }
        } while (this.ch);
    };
    SurveyJSON5.prototype.blockComment = function () {
        // Skip a block comment, assuming this is one. The current character should be
        // the * character in the /* pair that begins this block comment.
        // To finish the block comment, we look for an ending */ pair of characters,
        // but we also watch for the end of text before the comment is terminated.
        if (this.ch !== "*") {
            this.error("Not a block comment");
        }
        do {
            this.next();
            while (this.ch === "*") {
                this.next("*");
                if (this.ch === "/") {
                    this.next("/");
                    return;
                }
            }
        } while (this.ch);
        this.error("Unterminated block comment");
    };
    SurveyJSON5.prototype.comment = function () {
        // Skip a comment, whether inline or block-level, assuming this is one.
        // Comments always begin with a / character.
        if (this.ch !== "/") {
            this.error("Not a comment");
        }
        this.next("/");
        if (this.ch === "/") {
            this.inlineComment();
        }
        else if (this.ch === "*") {
            this.blockComment();
        }
        else {
            this.error("Unrecognized comment");
        }
    };
    SurveyJSON5.prototype.white = function () {
        // Skip whitespace and comments.
        // Note that we're detecting comments by only a single / character.
        // This works since regular expressions are not valid JSON(5), but this will
        // break if there are other valid values that begin with a / character!
        while (this.ch) {
            if (this.ch === "/") {
                this.comment();
            }
            else if (SurveyJSON5.ws.indexOf(this.ch) >= 0) {
                this.next();
            }
            else {
                return;
            }
        }
    };
    SurveyJSON5.prototype.word = function () {
        // true, false, or null.
        switch (this.ch) {
            case "t":
                this.next("t");
                this.next("r");
                this.next("u");
                this.next("e");
                return true;
            case "f":
                this.next("f");
                this.next("a");
                this.next("l");
                this.next("s");
                this.next("e");
                return false;
            case "n":
                this.next("n");
                this.next("u");
                this.next("l");
                this.next("l");
                return null;
            case "I":
                this.next("I");
                this.next("n");
                this.next("f");
                this.next("i");
                this.next("n");
                this.next("i");
                this.next("t");
                this.next("y");
                return Infinity;
            case "N":
                this.next("N");
                this.next("a");
                this.next("N");
                return NaN;
        }
        this.error("Unexpected '" + this.ch + "'");
    };
    SurveyJSON5.prototype.array = function () {
        // Parse an array value.
        var array = [];
        if (this.ch === "[") {
            this.next("[");
            this.white();
            while (this.ch) {
                if (this.ch === "]") {
                    this.next("]");
                    return array; // Potentially empty array
                }
                // ES5 allows omitting elements in arrays, e.g. [,] and
                // [,null]. We don't allow this in JSON5.
                if (this.ch === ",") {
                    this.error("Missing array element");
                }
                else {
                    array.push(this.value());
                }
                this.white();
                // If there's no comma after this value, this needs to
                // be the end of the array.
                if (this.ch !== ",") {
                    this.next("]");
                    return array;
                }
                this.next(",");
                this.white();
            }
        }
        this.error("Bad array");
    };
    SurveyJSON5.prototype.object = function () {
        // Parse an object value.
        var key, start, isFirstProperty = true, object = {};
        if (this.parseType > 0) {
            object[SurveyJSON5.positionName] = { start: this.at - 1 };
        }
        if (this.ch === "{") {
            this.next("{");
            this.white();
            start = this.at - 1;
            while (this.ch) {
                if (this.ch === "}") {
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = start;
                    }
                    this.next("}");
                    return object; // Potentially empty object
                }
                // Keys can be unquoted. If they are, they need to be
                // valid JS identifiers.
                if (this.ch === '"' || this.ch === "'") {
                    key = this.string();
                }
                else {
                    key = this.identifier();
                }
                this.white();
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key] = {
                        start: start,
                        valueStart: this.at
                    };
                }
                this.next(":");
                object[key] = this.value();
                if (this.parseType > 1) {
                    start = this.at - 1;
                    object[SurveyJSON5.positionName][key].valueEnd = start;
                    object[SurveyJSON5.positionName][key].end = start;
                }
                this.white();
                // If there's no comma after this pair, this needs to be
                // the end of the object.
                if (this.ch !== ",") {
                    if (this.parseType > 1) {
                        object[SurveyJSON5.positionName][key].valueEnd--;
                        object[SurveyJSON5.positionName][key].end--;
                    }
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = this.at - 1;
                    }
                    this.next("}");
                    return object;
                }
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key].valueEnd--;
                    if (!isFirstProperty) {
                        object[SurveyJSON5.positionName][key].end--;
                    }
                }
                this.next(",");
                this.white();
                isFirstProperty = false;
            }
        }
        this.error("Bad object");
    };
    SurveyJSON5.prototype.value = function () {
        // Parse a JSON value. It could be an object, an array, a string, a number,
        // or a word.
        this.white();
        switch (this.ch) {
            case "{":
                return this.object();
            case "[":
                return this.array();
            case '"':
            case "'":
                return this.string();
            case "-":
            case "+":
            case ".":
                return this.number();
            default:
                return this.ch >= "0" && this.ch <= "9" ? this.number() : this.word();
        }
    };
    SurveyJSON5.prototype.stringify = function (obj, replacer, space) {
        if (replacer === void 0) { replacer = null; }
        if (space === void 0) { space = null; }
        if (replacer &&
            (typeof replacer !== "function" && !this.isArray(replacer))) {
            throw new Error("Replacer must be a function or an array");
        }
        this.replacer = replacer;
        this.indentStr = this.getIndent(space);
        this.objStack = [];
        // special case...when undefined is used inside of
        // a compound object/array, return null.
        // but when top-level, return undefined
        var topLevelHolder = { "": obj };
        if (obj === undefined) {
            return this.getReplacedValueOrUndefined(topLevelHolder, "", true);
        }
        return this.internalStringify(topLevelHolder, "", true);
    };
    SurveyJSON5.prototype.getIndent = function (space) {
        if (space) {
            if (typeof space === "string") {
                return space;
            }
            else if (typeof space === "number" && space >= 0) {
                return this.makeIndent(" ", space, true);
            }
        }
        return "";
    };
    SurveyJSON5.prototype.getReplacedValueOrUndefined = function (holder, key, isTopLevel) {
        var value = holder[key];
        // Replace the value with its toJSON value first, if possible
        if (value && value.toJSON && typeof value.toJSON === "function") {
            value = value.toJSON();
        }
        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
        if (typeof this.replacer === "function") {
            return this.replacer.call(holder, key, value);
        }
        else if (this.replacer) {
            if (isTopLevel ||
                this.isArray(holder) ||
                this.replacer.indexOf(key) >= 0) {
                return value;
            }
            else {
                return undefined;
            }
        }
        else {
            return value;
        }
    };
    SurveyJSON5.prototype.isWordChar = function (char) {
        return ((char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9") ||
            char === "_" ||
            char === "$");
    };
    SurveyJSON5.prototype.isWordStart = function (char) {
        return ((char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === "_" ||
            char === "$");
    };
    SurveyJSON5.prototype.isWord = function (key) {
        if (typeof key !== "string") {
            return false;
        }
        if (!this.isWordStart(key[0])) {
            return false;
        }
        var i = 1, length = key.length;
        while (i < length) {
            if (!this.isWordChar(key[i])) {
                return false;
            }
            i++;
        }
        return true;
    };
    // polyfills
    SurveyJSON5.prototype.isArray = function (obj) {
        if (Array.isArray) {
            return Array.isArray(obj);
        }
        else {
            return Object.prototype.toString.call(obj) === "[object Array]";
        }
    };
    SurveyJSON5.prototype.isDate = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Date]";
    };
    SurveyJSON5.prototype.isNaN = function (val) {
        return typeof val === "number" && val !== val;
    };
    SurveyJSON5.prototype.checkForCircular = function (obj) {
        for (var i = 0; i < this.objStack.length; i++) {
            if (this.objStack[i] === obj) {
                throw new TypeError("Converting circular structure to JSON");
            }
        }
    };
    SurveyJSON5.prototype.makeIndent = function (str, num, noNewLine) {
        if (noNewLine === void 0) { noNewLine = false; }
        if (!str) {
            return "";
        }
        // indentation no more than 10 chars
        if (str.length > 10) {
            str = str.substring(0, 10);
        }
        var indent = noNewLine ? "" : "\n";
        for (var i = 0; i < num; i++) {
            indent += str;
        }
        return indent;
    };
    SurveyJSON5.prototype.escapeString = function (str) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        SurveyJSON5.escapable.lastIndex = 0;
        return SurveyJSON5.escapable.test(str)
            ? '"' +
                str.replace(SurveyJSON5.escapable, function (a) {
                    var c = SurveyJSON5.meta[a];
                    return typeof c === "string"
                        ? c
                        : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
            : '"' + str + '"';
    };
    // End
    SurveyJSON5.prototype.internalStringify = function (holder, key, isTopLevel) {
        var buffer, res;
        // Replace the value, if necessary
        var obj_part = this.getReplacedValueOrUndefined(holder, key, isTopLevel);
        if (obj_part && !this.isDate(obj_part)) {
            // unbox objects
            // don't unbox dates, since will turn it into number
            obj_part = obj_part.valueOf();
        }
        switch (typeof obj_part) {
            case "boolean":
                return obj_part.toString();
            case "number":
                if (isNaN(obj_part) || !isFinite(obj_part)) {
                    return "null";
                }
                return obj_part.toString();
            case "string":
                return this.escapeString(obj_part.toString());
            case "object":
                if (obj_part === null) {
                    return "null";
                }
                else if (this.isArray(obj_part)) {
                    this.checkForCircular(obj_part);
                    buffer = "[";
                    this.objStack.push(obj_part);
                    for (var i = 0; i < obj_part.length; i++) {
                        res = this.internalStringify(obj_part, i, false);
                        buffer += this.makeIndent(this.indentStr, this.objStack.length);
                        if (res === null || typeof res === "undefined") {
                            buffer += "null";
                        }
                        else {
                            buffer += res;
                        }
                        if (i < obj_part.length - 1) {
                            buffer += ",";
                        }
                        else if (this.indentStr) {
                            buffer += "\n";
                        }
                    }
                    this.objStack.pop();
                    buffer +=
                        this.makeIndent(this.indentStr, this.objStack.length, true) + "]";
                }
                else {
                    this.checkForCircular(obj_part);
                    buffer = "{";
                    var nonEmpty = false;
                    this.objStack.push(obj_part);
                    for (var prop in obj_part) {
                        if (obj_part.hasOwnProperty(prop)) {
                            var value = this.internalStringify(obj_part, prop, false);
                            isTopLevel = false;
                            if (typeof value !== "undefined" && value !== null) {
                                buffer += this.makeIndent(this.indentStr, this.objStack.length);
                                nonEmpty = true;
                                var propKey = this.isWord(prop)
                                    ? prop
                                    : this.escapeString(prop);
                                buffer +=
                                    propKey + ":" + (this.indentStr ? " " : "") + value + ",";
                            }
                        }
                    }
                    this.objStack.pop();
                    if (nonEmpty) {
                        buffer =
                            buffer.substring(0, buffer.length - 1) +
                                this.makeIndent(this.indentStr, this.objStack.length) +
                                "}";
                    }
                    else {
                        buffer = "{}";
                    }
                }
                return buffer;
            default:
                // functions and undefined should be ignored
                return undefined;
        }
    };
    SurveyJSON5.positionName = "pos";
    SurveyJSON5.escapee = {
        "'": "'",
        '"': '"',
        "\\": "\\",
        "/": "/",
        "\n": "",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
    };
    SurveyJSON5.ws = [" ", "\t", "\r", "\n", "\v", "\f", "\xA0", "\uFEFF"];
    // Copied from Crokford's implementation of JSON
    // See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
    // Begin
    SurveyJSON5.cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    SurveyJSON5.escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    SurveyJSON5.meta = {
        // table of character substitutions
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return SurveyJSON5;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* unused harmony export DragDropTargetElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropHelper; });


if (!!__WEBPACK_IMPORTED_MODULE_0_knockout__["options"]) {
    __WEBPACK_IMPORTED_MODULE_0_knockout__["options"].useOnlyNativeEvents = true;
}
var DragDropTargetElement = /** @class */ (function () {
    function DragDropTargetElement(page, target, source) {
        this.page = page;
        this.target = target;
        this.source = source;
        this.nestedPanelDepth = -1;
        page.dragDropStart(source, target); //, DragDropTargetElement.nestedPanelPath);
    }
    DragDropTargetElement.prototype.moveTo = function (destination, isBottom, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        //console.log(!!destination ? destination.name : "null");
        return this.page.dragDropMoveTo(destination, isBottom, isEdge);
    };
    DragDropTargetElement.prototype.doDrop = function () {
        this.clearCore();
        return this.page.dragDropFinish();
    };
    DragDropTargetElement.prototype.clear = function () {
        this.clearCore();
        this.page.dragDropFinish(true);
    };
    DragDropTargetElement.prototype.clearCore = function () {
        if (!!this.target) {
            this.target["koIsDragging"](false);
        }
    };
    return DragDropTargetElement;
}());

var DragDropHelper = /** @class */ (function () {
    function DragDropHelper(data, onModifiedCallback, parent) {
        if (parent === void 0) { parent = null; }
        this.data = data;
        this.scrollableElement = null;
        this.ddTarget = null;
        this.id = DragDropHelper.counter++;
        this.isScrollStop = true;
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement =
            parent && parent.querySelector("#scrollableDiv");
        this.prevCoordinates = { x: -1, y: -1 };
    }
    DragDropHelper.prototype.attachToElement = function (domElement, surveyElement) {
        var isFlowPanel = surveyElement.isPanel &&
            typeof surveyElement.getChildrenLayoutType === "function" &&
            surveyElement.getChildrenLayoutType() === "flow";
        var isFlowPanelInChrome = isFlowPanel && !!window["chrome"];
        domElement.style.opacity = surveyElement.koIsDragging() ? 0.4 : 1;
        domElement.draggable =
            surveyElement.allowingOptions.allowDragging && !isFlowPanel;
        if (isFlowPanelInChrome) {
            domElement.onpaste = function doPaste(e, el) {
                e.preventDefault();
                var clipData = window["clipboardData"];
                if (!!clipData) {
                    var content = clipData.getData("text");
                    if (window.getSelection) {
                        var selObj = window.getSelection();
                        var selRange = selObj.getRangeAt(0);
                        selRange.deleteContents();
                        selRange.insertNode(document.createTextNode(content));
                    }
                }
                else if ((e.originalEvent || e).clipboardData) {
                    content = (e.originalEvent || e).clipboardData.getData("text/plain");
                    document.execCommand("insertText", false, content);
                }
                return true;
            };
        }
        domElement.ondragover = function (e) {
            if (!surveyElement.allowingOptions.allowDragging)
                return false;
            if (isFlowPanel)
                return surveyElement
                    .dragDropHelper()
                    .doDragDropOverFlow(e, surveyElement);
            if (!e["markEvent"]) {
                e["markEvent"] = true;
                surveyElement.dragDropHelper().doDragDropOver(e, surveyElement, true);
                return false;
            }
        };
        domElement.ondrop = function (e) {
            var helper = surveyElement.dragDropHelper();
            var preventDefault = !(isFlowPanel &&
                !!helper.ddTarget &&
                !!helper.ddTarget.source &&
                helper.ddTarget.source.parent == surveyElement);
            //Fix the bug for chrome in contenteditable
            if (isFlowPanelInChrome &&
                (!helper.ddTarget ||
                    !helper.ddTarget.destination ||
                    helper.ddTarget.destination.isLayoutTypeSupported("flow"))) {
                var content = e.dataTransfer.getData("text");
                var dropRange = null;
                if (!!document.caretRangeFromPoint) {
                    dropRange = document.caretRangeFromPoint(e.clientX, e.clientY);
                }
                else {
                    if (!!document.caretPositionFromPoint) {
                        dropRange = document.caretPositionFromPoint(e.clientX, e.clientY);
                    }
                }
                if (!!dropRange) {
                    preventDefault = true;
                    e.preventDefault();
                    if (surveyElement["isDragStarted"]) {
                        var selObj = window.getSelection();
                        if (!!selObj && selObj.rangeCount > 0) {
                            var selRange = selObj.getRangeAt(0);
                            if (!!selRange) {
                                selRange.deleteContents();
                            }
                        }
                    }
                    dropRange.insertNode(document.createTextNode(content));
                    var selection = window.getSelection();
                    if (!!selection) {
                        selection.removeAllRanges();
                        selection.addRange(dropRange);
                    }
                }
            }
            if (!e["markEvent"]) {
                e["markEvent"] = true;
                helper.doDrop(e, preventDefault);
            }
        };
        if (!isFlowPanel) {
            domElement.ondragstart = function (e) {
                var target = e.target || e.srcElement;
                if (!!target &&
                    !!target.contains &&
                    target.contains(document.activeElement)) {
                    e.preventDefault();
                    return false;
                }
                if (!surveyElement.allowingOptions.allowDragging)
                    return false;
                if (!e["markEvent"]) {
                    e["markEvent"] = true;
                    surveyElement.dragDropHelper().startDragQuestion(e, surveyElement);
                }
                e.cancelBubble = true;
            };
        }
        else {
            domElement.ondragstart = function (e) {
                surveyElement.isDragStarted = true;
                if (!e["markEvent"]) {
                    e["markEvent"] = true;
                    if (!surveyElement.dragDropHelper().getData(e).text) {
                        surveyElement.dragDropHelper().startDragQuestion(e, surveyElement);
                    }
                }
            };
        }
        domElement.ondragend = function (e) {
            delete surveyElement["isDragStarted"];
            surveyElement.dragDropHelper().end();
        };
    };
    Object.defineProperty(DragDropHelper.prototype, "survey", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    DragDropHelper.prototype.startDragQuestion = function (event, element) {
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(element);
        json["type"] = element.getType();
        this.prepareData(event, element.name, json, element);
    };
    DragDropHelper.prototype.startDragToolboxItem = function (event, elementName, elementJson) {
        this.prepareData(event, elementName, elementJson, null);
        event.cancelBubble = true;
    };
    DragDropHelper.prototype.isSurveyDragging = function (event) {
        if (!event)
            return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    };
    DragDropHelper.prototype.doDragDropOver = function (event, element, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        event = this.isCanDragContinue(event, element);
        if (!event)
            return;
        var bottomInfo = this.isBottom(event);
        if (element.isPage && element.elements.length > 0) {
            var lastEl = element.elements[element.elements.length - 1];
            if (!this.isBottomThanElement(event, lastEl))
                return;
            element = lastEl;
            bottomInfo.isEdge = true;
            bottomInfo.isBottom = true;
        }
        isEdge = element.isPanel ? isEdge && bottomInfo.isEdge : true;
        if (element.isPanel && !isEdge && element.elements.length > 0)
            return;
        this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
    };
    DragDropHelper.prototype.doDragDropOverFlow = function (event, element) {
        if (!!this.ddTarget) {
            event = this.isCanDragContinue(event, element);
            if (!event)
                return true;
            var bottomInfo = this.isBottom(event);
            return this.ddTarget.moveTo(element, bottomInfo.isBottom, false);
        }
        return true;
    };
    DragDropHelper.prototype.isCanDragContinue = function (event, element) {
        event = this.getEvent(event);
        if (this.isSameCoordinates(event))
            return null;
        this.checkScrollY(event);
        if (!element ||
            !this.isSurveyDragging(event) ||
            this.isSamePlace(event, element))
            return null;
        return event;
    };
    DragDropHelper.prototype.end = function () {
        if (this.ddTarget) {
            this.ddTarget.clear();
        }
        this.isScrollStop = true;
        this.clearData();
    };
    Object.defineProperty(DragDropHelper.prototype, "isMoving", {
        get: function () {
            return this.ddTarget && this.ddTarget.source;
        },
        enumerable: true,
        configurable: true
    });
    DragDropHelper.prototype.doDrop = function (event, prevedDefault) {
        if (prevedDefault === void 0) { prevedDefault = true; }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            if (prevedDefault) {
                event.preventDefault();
            }
            var newElement = this.ddTarget.doDrop();
            if (this.onModifiedCallback)
                this.onModifiedCallback({
                    type: "DO_DROP",
                    page: this.ddTarget.page,
                    source: this.ddTarget.source,
                    target: this.ddTarget.target,
                    newElement: this.ddTarget.source ? null : newElement,
                    moveToParent: newElement.parent,
                    moveToIndex: !!newElement.parent
                        ? newElement.parent.elements.indexOf(newElement)
                        : -1
                });
        }
        this.end();
    };
    DragDropHelper.prototype.doLeavePage = function (event) {
        if (!!this.ddTarget) {
            this.ddTarget.moveTo(null, false);
        }
    };
    DragDropHelper.prototype.scrollToElement = function (el) {
        if (!this.scrollableElement || !el)
            return;
        el.scrollIntoView(false);
    };
    DragDropHelper.prototype.createTargetElement = function (elementName, json) {
        if (!elementName || !json)
            return null;
        var targetElement = null;
        targetElement = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toObject(json, targetElement);
        targetElement.name = elementName;
        if (targetElement["setSurveyImpl"]) {
            targetElement["setSurveyImpl"](this.survey);
        }
        else {
            targetElement["setData"](this.survey);
        }
        targetElement.renderWidth = "100%";
        targetElement["koIsDragging"](true);
        return targetElement;
    };
    DragDropHelper.prototype.isBottom = function (event) {
        event = this.getEvent(event);
        var height = event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty("layerX")) {
            y = event.layerY - event.currentTarget["offsetTop"];
        }
        return {
            isBottom: y > height / 2,
            isEdge: y <= DragDropHelper.edgeHeight ||
                height - y <= DragDropHelper.edgeHeight
        };
    };
    DragDropHelper.prototype.isBottomThanElement = function (event, lastEl) {
        var el = lastEl.renderedElement;
        if (!el)
            return false;
        event = this.getEvent(event);
        var elY = el.offsetTop + el.clientHeight;
        var y = event.offsetY;
        if (event.hasOwnProperty("layerX")) {
            y = event.layerY - event.currentTarget["offsetTop"];
        }
        return y > elY;
    };
    DragDropHelper.prototype.isSameCoordinates = function (event) {
        var res = Math.abs(event.pageX - this.prevCoordinates.x) > 5 ||
            Math.abs(event.pageY - this.prevCoordinates.y) > 5;
        if (res) {
            this.prevCoordinates.x = event.pageX;
            this.prevCoordinates.y = event.pageY;
        }
        return !res;
    };
    DragDropHelper.prototype.isSamePlace = function (event, element) {
        var prev = DragDropHelper.prevEvent;
        if (prev.element != element ||
            Math.abs(event.clientX - prev.x) > 5 ||
            Math.abs(event.clientY - prev.y) > 5) {
            prev.element = element;
            prev.x = event.clientX;
            prev.y = event.clientY;
            return false;
        }
        return true;
    };
    DragDropHelper.prototype.checkScrollY = function (e) {
        if (!this.scrollableElement)
            return;
        var y = this.getScrollableElementPosY(e);
        if (y < 0)
            return;
        this.isScrollStop = true;
        var height = this.scrollableElement["clientHeight"];
        if (y < DragDropHelper.ScrollOffset && y >= 0) {
            this.isScrollStop = false;
            this.doScrollY(-1);
        }
        if (height - y < DragDropHelper.ScrollOffset && height >= y) {
            this.isScrollStop = false;
            this.doScrollY(1);
        }
    };
    DragDropHelper.prototype.doScrollY = function (step) {
        var el = this.scrollableElement;
        var scrollY = el.scrollTop + step;
        if (scrollY < 0) {
            this.isScrollStop = true;
            return;
        }
        el.scrollTop = scrollY;
        var self = this;
        if (!this.isScrollStop) {
            setTimeout(function () {
                self.doScrollY(step);
            }, DragDropHelper.ScrollDelay);
        }
    };
    DragDropHelper.prototype.getScrollableElementPosY = function (e) {
        if (!this.scrollableElement || !e.currentTarget)
            return -1;
        var el = e.currentTarget;
        var offsetTop = 0;
        while (el && el != this.scrollableElement) {
            offsetTop += el["offsetTop"];
            el = el["offsetParent"];
        }
        return (e.offsetY +
            e.currentTarget["offsetTop"] -
            this.scrollableElement.offsetTop -
            this.scrollableElement.scrollTop);
    };
    DragDropHelper.prototype.getEvent = function (event) {
        return event["originalEvent"] ? event["originalEvent"] : event;
    };
    DragDropHelper.prototype.getY = function (element) {
        var result = 0;
        while (element) {
            result += element.offsetTop - element.scrollTop + element.clientTop;
            element = element.offsetParent;
        }
        return result;
    };
    DragDropHelper.prototype.prepareData = function (event, elementName, json, source) {
        var str = DragDropHelper.dataStart + elementName + "}";
        this.setData(event, str);
        var targetElement = this.createTargetElement(elementName, json);
        this.ddTarget = new DragDropTargetElement(this.survey.currentPage, targetElement, source);
        this.ddTarget.nestedPanelDepth = DragDropHelper.nestedPanelDepth;
    };
    DragDropHelper.prototype.setData = function (event, text) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text };
    };
    DragDropHelper.prototype.getData = function (event) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            var text = event.dataTransfer.getData("Text");
            if (text) {
                DragDropHelper.dragData.text = text;
            }
        }
        return DragDropHelper.dragData;
    };
    DragDropHelper.prototype.clearData = function () {
        this.ddTarget = null; // We should reset ddTarget to null due to the https://surveyjs.answerdesk.io/ticket/details/T1003 - onQuestionAdded not fired after D&D
        DragDropHelper.dragData = { text: "", json: null };
        var prev = DragDropHelper.prevEvent;
        prev.element = null;
        prev.x = -1;
        prev.y = -1;
        this.prevCoordinates.x = -1;
        this.prevCoordinates.y = -1;
    };
    DragDropHelper.edgeHeight = 20;
    DragDropHelper.nestedPanelDepth = -1;
    DragDropHelper.dataStart = "{element:";
    DragDropHelper.dragData = { text: "", json: null };
    DragDropHelper.prevEvent = { element: null, x: -1, y: -1 };
    DragDropHelper.counter = 1;
    DragDropHelper.ScrollDelay = 30;
    DragDropHelper.ScrollOffset = 100;
    return DragDropHelper;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enStrings; });
//Uncomment this line on creating a translation file
//import { editorLocalization, defaultStrings } from "../editorLocalization";
var enStrings = {
    //survey templates
    survey: {
        edit: "Edit",
        dropQuestion: "Please drop a question here from the Toolbox on the left.",
        copy: "Copy",
        addToToolbox: "Add to toolbox",
        deletePanel: "Delete Panel",
        deleteQuestion: "Delete Question",
        convertTo: "Convert to",
        drag: "Drag element"
    },
    //questionTypes
    qt: {
        default: "Default",
        checkbox: "Checkbox",
        comment: "Comment",
        imagepicker: "Image picker",
        dropdown: "Dropdown",
        file: "File",
        html: "Html",
        matrix: "Matrix (single choice)",
        matrixdropdown: "Matrix (multiple choice)",
        matrixdynamic: "Matrix (dynamic rows)",
        multipletext: "Multiple Text",
        panel: "Panel",
        paneldynamic: "Panel (dynamic panels)",
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Single Input",
        boolean: "Boolean",
        expression: "Expression"
    },
    //Strings in Editor
    ed: {
        defaultLocale: "Default ({0})",
        survey: "Survey",
        settings: "Survey Settings",
        editSurvey: "Edit Survey",
        addNewPage: "Add New Page",
        moveRight: "Scroll to the Right",
        moveLeft: "Scroll to the Left",
        deletePage: "Delete Page",
        editPage: "Edit Page",
        edit: "Edit",
        newPageName: "page",
        newQuestionName: "question",
        newPanelName: "panel",
        testSurvey: "Test Survey",
        testSurveyAgain: "Test Survey Again",
        testSurveyWidth: "Survey width: ",
        embedSurvey: "Embed Survey",
        translation: "Translation",
        saveSurvey: "Save Survey",
        designer: "Survey Designer",
        jsonEditor: "JSON Editor",
        undo: "Undo",
        redo: "Redo",
        options: "Options",
        generateValidJSON: "Generate Valid JSON",
        generateReadableJSON: "Generate Readable JSON",
        toolbox: "Toolbox",
        toolboxGeneralCategory: "General",
        delSelObject: "Delete selected object",
        editSelObject: "Edit selected object",
        correctJSON: "Please correct JSON.",
        surveyResults: "Survey Result: ",
        surveyResultsTable: "As Table",
        surveyResultsJson: "As JSON",
        resultsTitle: "Question Title",
        resultsName: "Question Name",
        resultsValue: "Answer Value",
        resultsDisplayValue: "Display Value",
        modified: "Modified",
        saving: "Saving",
        saved: "Saved",
        saveError: "Error! Editor content is not saved.",
        translationAddLanguage: "Select language to translate",
        translationShowAllStrings: "Show all strings",
        translationShowAllPages: "Show all pages",
        translationNoStrings: "No strings to translate. Please, change the filter.",
        translationExportToSCVButton: "Export to CSV",
        translationImportFromSCVButton: "Import from CSV",
        translationMergeLocaleWithDefault: "Merge {0} with default locale"
    },
    //Property names in table headers
    pel: {
        isRequired: "Required?"
    },
    //Property Editors
    pe: {
        apply: "Apply",
        ok: "OK",
        cancel: "Cancel",
        reset: "Reset",
        close: "Close",
        delete: "Delete",
        addNew: "Add New",
        addItem: "Click to add an item...",
        removeAll: "Remove All",
        edit: "Edit",
        itemValueEdit: "Visible If",
        editChoices: "Edit Choices",
        move: "Move",
        empty: "<empty>",
        notEmpty: "<edit value>",
        fastEntry: "Fast Entry",
        formEntry: "Form Entry",
        testService: "Test the service",
        conditionSelectQuestion: "Select question...",
        conditionValueQuestionTitle: "Please enter/select the value",
        conditionButtonAdd: "Add",
        conditionButtonReplace: "Replace",
        conditionHelp: "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
        aceEditorHelp: "Press ctrl+space to get expression completion hint",
        aceEditorRowTitle: "Current row",
        aceEditorPanelTitle: "Current panel",
        showMore: "For more details please check the documentation",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "Available questions:",
        cellsEmptyRowsColumns: "There is should be at least one column or row",
        propertyIsEmpty: "Please enter a value",
        value: "Value",
        text: "Text",
        rowid: "Row ID",
        imageLink: "Image Link",
        columnEdit: "Edit column: {0}",
        itemEdit: "Edit item: {0}",
        url: "URL",
        path: "Path",
        valueName: "Value name",
        titleName: "Title name",
        hasOther: "Has other item",
        otherText: "Other item text",
        name: "Name",
        title: "Title",
        cellType: "Cell type",
        colCount: "Column count",
        choicesOrder: "Select choices order",
        visible: "Is visible?",
        isRequired: "Is required?",
        startWithNewLine: "Is start with new line?",
        rows: "Row count",
        placeHolder: "Input place holder",
        showPreview: "Is image preview shown?",
        storeDataAsText: "Store file content in JSON result as text",
        maxSize: "Maximum file size in bytes",
        imageHeight: "Image height",
        imageWidth: "Image width",
        rowCount: "Row count",
        columnLayout: "Columns layout",
        addRowLocation: "Add row button location",
        addRowText: "Add row button text",
        removeRowText: "Remove row button text",
        minRateDescription: "Minimum rate description",
        maxRateDescription: "Maximum rate description",
        inputType: "Input type",
        optionsCaption: "Options caption",
        defaultValue: "Default value",
        cellsDefaultRow: "Default cells texts",
        surveyEditorTitle: "Edit survey settings",
        qEditorTitle: "Edit: {0}",
        maxLength: "Maximum length",
        //survey
        showTitle: "Show/hide title",
        locale: "Default language",
        mode: "Mode (edit/read only)",
        clearInvisibleValues: "Clear invisible values",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "Show page titles",
        showPageNumbers: "Show page numbers",
        pagePrevText: "Page previous button text",
        pageNextText: "Page next button text",
        completeText: "Complete button text",
        startSurveyText: "Start button text",
        showNavigationButtons: "Show navigation buttons (default navigation)",
        showPrevButton: "Show previous button (user may return on previous page)",
        firstPageIsStarted: "The first page in the survey is a started page.",
        showCompletedPage: "Show the completed page at the end (completedHtml)",
        goNextPageAutomatic: "On answering all questions, go to the next page automatically",
        showProgressBar: "Show progress bar",
        questionTitleLocation: "Question title location",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
        showQuestionNumbers: "Show question numbers",
        questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
        questionErrorLocation: "Question error location",
        focusFirstQuestionAutomatic: "Focus first question on changing the page",
        questionsOrder: "Elements order on the page",
        maxTimeToFinish: "Maximum time to finish the survey",
        maxTimeToFinishPage: "Maximum time to finish a page in the survey",
        showTimerPanel: "Show timer panel",
        showTimerPanelMode: "Show timer panel mode",
        renderMode: "Render mode",
        allowAddPanel: "Allow adding a panel",
        allowRemovePanel: "Allow removing the panel",
        panelAddText: "Adding panel text",
        panelRemoveText: "Removing panel text",
        isSinglePage: "Show all elements on one page",
        tabs: {
            general: "General",
            fileOptions: "Options",
            html: "Html Editor",
            columns: "Columns",
            rows: "Rows",
            choices: "Choices",
            items: "Items",
            visibleIf: "Visible If",
            enableIf: "Enable If",
            requiredIf: "Required If",
            rateValues: "Rate Values",
            choicesByUrl: "Choices from Web",
            matrixChoices: "Default Choices",
            multipleTextItems: "Text Inputs",
            validators: "Validators",
            navigation: "Navigation",
            question: "Question",
            completedHtml: "Completed Html",
            loadingHtml: "Loading Html",
            timer: "Timer/Quiz",
            triggers: "Triggers",
            templateTitle: "Template title"
        },
        editProperty: "Edit property '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Please, enter the value.",
        noquestions: "There is no any question in the survey.",
        createtrigger: "Please create a trigger",
        triggerOn: "On ",
        triggerMakePagesVisible: "Make pages visible:",
        triggerMakeQuestionsVisible: "Make elements visible:",
        triggerCompleteText: "Complete the survey if succeed.",
        triggerNotSet: "The trigger is not set",
        triggerRunIf: "Run if",
        triggerSetToName: "Change value of: ",
        triggerFromName: "Copy value from: ",
        triggerRunExpression: "Run this Expression:",
        triggerSetValue: "to: ",
        triggerIsVariable: "Do not put the variable into the survey result."
    },
    //Property values
    pv: {
        true: "true",
        false: "false",
        inherit: "inherit",
        show: "show",
        hide: "hide",
        default: "default",
        initial: "initial",
        random: "random",
        collapsed: "collapsed",
        expanded: "expanded",
        none: "none",
        asc: "ascending",
        desc: "descending",
        indeterminate: "indeterminate",
        decimal: "decimal",
        currency: "currency",
        percent: "percent",
        firstExpanded: "firstExpanded",
        off: "off",
        onPanel: "onPanel",
        onSurvey: "onSurvey",
        list: "list",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        horizontal: "horizontal",
        vertical: "vertical",
        top: "top",
        bottom: "bottom",
        topBottom: "top and bottom",
        left: "left",
        color: "color",
        date: "date",
        datetime: "datetime",
        "datetime-local": "datetime-local",
        email: "email",
        month: "month",
        number: "number",
        password: "password",
        range: "range",
        tel: "tel",
        text: "text",
        time: "time",
        url: "url",
        week: "week",
        hidden: "hidden",
        on: "on",
        onPage: "onPage",
        edit: "edit",
        display: "display",
        onComplete: "onComplete",
        onHidden: "onHidden",
        all: "all",
        page: "page",
        survey: "survey",
        onNextPage: "onNextPage",
        onValueChanged: "onValueChanged"
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "less or equals"
    },
    //Embed window
    ew: {
        angular: "Use Angular version",
        jquery: "Use jQuery version",
        knockout: "Use Knockout version",
        react: "Use React version",
        vue: "Use Vue version",
        bootstrap: "For bootstrap framework",
        standard: "No bootstrap",
        showOnPage: "Show survey on a page",
        showInWindow: "Show survey in a window",
        loadFromServer: "Load Survey JSON from server",
        titleScript: "Scripts and styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Select the page to test it:",
        showInvisibleElements: "Show invisible elements"
    },
    validators: {
        answercountvalidator: "answer count",
        emailvalidator: "e-mail",
        expressionvalidator: "expression",
        numericvalidator: "numeric",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "complete survey",
        setvaluetrigger: "set value",
        copyvaluetrigger: "copy value",
        runexpressiontrigger: "run expression",
        visibletrigger: "change visibility"
    },
    //Properties
    p: {
        name: "name",
        title: {
            name: "title",
            title: "Leave it empty, if it is the same as 'Name'"
        },
        navigationButtonsVisibility: "navigationButtonsVisibility",
        questionsOrder: "questionsOrder",
        maxTimeToFinish: "maxTimeToFinish",
        visible: "visible",
        visibleIf: "visibleIf",
        questionTitleLocation: "questionTitleLocation",
        description: "description",
        state: "state",
        isRequired: "isRequired",
        requiredIf: "requiredIf",
        indent: "indent",
        requiredErrorText: "requiredErrorText",
        startWithNewLine: "startWithNewLine",
        innerIndent: "innerIndent",
        page: "page",
        width: "width",
        commentText: "commentText",
        valueName: "valueName",
        enableIf: "enableIf",
        defaultValue: "defaultValue",
        correctAnswer: "correctAnswer",
        readOnly: "readOnly",
        validators: "validators",
        titleLocation: "titleLocation",
        hasComment: "hasComment",
        hasOther: "hasOther",
        choices: "choices",
        choicesOrder: "choicesOrder",
        choicesByUrl: "choicesByUrl",
        otherText: "otherText",
        otherErrorText: "otherErrorText",
        storeOthersAsComment: "storeOthersAsComment",
        label: "label",
        showTitle: "showTitle",
        valueTrue: "valueTrue",
        valueFalse: "valueFalse",
        cols: "cols",
        rows: "rows",
        placeHolder: "placeHolder",
        optionsCaption: "optionsCaption",
        expression: "expression",
        format: "format",
        displayStyle: "displayStyle",
        currency: "currency",
        useGrouping: "useGrouping",
        showPreview: "showPreview",
        allowMultiple: "allowMultiple",
        imageHeight: "imageHeight",
        imageWidth: "imageWidth",
        storeDataAsText: "storeDataAsText",
        maxSize: "maxSize",
        html: "html",
        columns: "columns",
        cells: "cells",
        isAllRowRequired: "isAllRowRequired",
        horizontalScroll: "horizontalScroll",
        cellType: "cellType",
        columnsLayout: "columnsLayout",
        columnColCount: "columnColCount",
        columnMinWidth: "columnMinWidth",
        rowCount: "rowCount",
        minRowCount: "minRowCount",
        maxRowCount: "maxRowCount",
        keyName: "keyName",
        keyDuplicationError: "keyDuplicationError",
        confirmDelete: "confirmDelete",
        confirmDeleteText: "confirmDeleteText",
        addRowLocation: "addRowLocation",
        addRowText: "addRowText",
        removeRowText: "removeRowText",
        items: "items",
        itemSize: "itemSize",
        colCount: "colCount",
        templateTitle: "templateTitle",
        templateDescription: "templateDescription",
        allowAddPanel: "allowAddPanel",
        allowRemovePanel: "allowRemovePanel",
        panelCount: "panelCount",
        minPanelCount: "minPanelCount",
        maxPanelCount: "maxPanelCount",
        panelsState: "panelsState",
        panelAddText: "panelAddText",
        panelRemoveText: "panelRemoveText",
        panelPrevText: "panelPrevText",
        panelNextText: "panelNextText",
        showQuestionNumbers: "showQuestionNumbers",
        showRangeInProgress: "showRangeInProgress",
        renderMode: "renderMode",
        templateTitleLocation: "templateTitleLocation",
        rateValues: "rateValues",
        rateMin: "rateMin",
        rateMax: "rateMax",
        rateStep: "rateStep",
        minRateDescription: "minRateDescription",
        maxRateDescription: "maxRateDescription",
        inputType: "inputType",
        size: "size",
        locale: "locale",
        focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
        completedHtml: "completedHtml",
        completedBeforeHtml: "completedBeforeHtml",
        loadingHtml: "loadingHtml",
        triggers: "triggers",
        cookieName: "cookieName",
        sendResultOnPageNext: "sendResultOnPageNext",
        showNavigationButtons: "showNavigationButtons",
        showPrevButton: "showPrevButton",
        showPageTitles: "showPageTitles",
        showCompletedPage: "showCompletedPage",
        showPageNumbers: "showPageNumbers",
        questionErrorLocation: "questionErrorLocation",
        showProgressBar: "showProgressBar",
        mode: "mode",
        goNextPageAutomatic: "goNextPageAutomatic",
        checkErrorsMode: "checkErrorsMode",
        clearInvisibleValues: "clearInvisibleValues",
        startSurveyText: "startSurveyText",
        pagePrevText: "pagePrevText",
        pageNextText: "pageNextText",
        completeText: "completeText",
        requiredText: "requiredText",
        questionStartIndex: "questionStartIndex",
        questionTitleTemplate: "questionTitleTemplate",
        firstPageIsStarted: "firstPageIsStarted",
        isSinglePage: "isSinglePage",
        maxTimeToFinishPage: "maxTimeToFinishPage",
        showTimerPanel: "showTimerPanel",
        showTimerPanelMode: "showTimerPanelMode",
        defaultPanelValue: "defaultPanelValue",
        defaultRowValue: "defaultRowValue",
        hasNone: "hasNone",
        noneText: "noneText",
        text: "text",
        minValue: "minimum value",
        maxValue: "maximum value",
        minLength: "minimum length",
        maxLength: "maximum length",
        allowDigits: "allow digits",
        minCount: "minimum count",
        maxCount: "maximum count",
        regex: "regular expression"
    }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//editorLocalization.locales["en"] = enStrings;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyConditionEditor; });
/* unused harmony export doGetCompletions */
/* unused harmony export insertMatch */






var SurveyPropertyConditionEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyConditionEditor, _super);
    function SurveyPropertyConditionEditor(property, _type, syntaxCheckMethodName) {
        if (_type === void 0) { _type = "condition"; }
        if (syntaxCheckMethodName === void 0) { syntaxCheckMethodName = "createCondition"; }
        var _this = _super.call(this, property) || this;
        _this._type = _type;
        _this.syntaxCheckMethodName = syntaxCheckMethodName;
        _this.availableOperators = [];
        _this.showHelpText = true;
        _this.isValueChanging = false;
        _this.addConditionQuestionsHash = {};
        _this.availableOperators = __WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].getOperators();
        _this.koIsValid = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        _this.koAddConditionQuestions = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koAddConditionQuestion = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koAddConditionOperator = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koAddConditionValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koAddConditionType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("and");
        _this.koHasValueSurvey = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.koValueSurvey = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](SurveyPropertyConditionEditor.emptySurvey);
        var self = _this;
        _this.koAddConditionQuestion.subscribe(function (newValue) {
            self.onValueSurveyChanged(newValue, self.koAddConditionOperator());
        });
        _this.koAddConditionOperator.subscribe(function (newValue) {
            self.onValueSurveyChanged(self.koAddConditionQuestion(), newValue);
        });
        _this.koAddConditionValue.subscribe(function (newValue) {
            if (self.koHasValueSurvey()) {
                var newParsedValue = !newValue ? {} : JSON.parse(newValue);
                self.isValueChanging = true;
                self.koValueSurvey().setValue("question", newParsedValue);
                self.isValueChanging = false;
            }
        });
        _this.koCanAddCondition = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            return (this.koAddConditionQuestion() != "" &&
                this.koAddConditionQuestion() != undefined &&
                this.koAddConditionOperator() != "" &&
                (!this.koAddContionValueEnabled() || this.koAddConditionValue() != ""));
        }, _this);
        _this.koShowAddConditionType = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            if (!this.koIsValid())
                return false;
            var text = this.koTextValue();
            if (text)
                text = text.trim();
            return text;
        }, _this);
        _this.koAddConditionButtonText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            var name = this.koIsValid()
                ? "conditionButtonAdd"
                : "conditionButtonReplace";
            return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("pe." + name);
        }, _this);
        _this.koAddContionValueEnabled = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            return self.canShowValueByOperator(self.koAddConditionOperator());
        }, _this);
        _this.onConditionAddClick = function () {
            self.addCondition();
        };
        _this.resetAddConditionValues();
        return _this;
    }
    SurveyPropertyConditionEditor.prototype.beforeShow = function () {
        _super.prototype.beforeShow.call(this);
        this.addConditionQuestionsHash = {};
        this.koAddConditionQuestions(this.allConditionQuestions);
    };
    Object.defineProperty(SurveyPropertyConditionEditor.prototype, "editorType", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyConditionEditor.prototype, "availableQuestions", {
        get: function () {
            if (this.object instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["MatrixDropdownColumn"]) {
                return this.object.colOwner["survey"].getAllQuestions();
            }
            return ((this.object &&
                this.object.survey &&
                this.object.survey.getAllQuestions()) ||
                []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyConditionEditor.prototype, "allConditionQuestions", {
        get: function () {
            var res = this.getConditionQuetions();
            res.sort(function (a, b) {
                return a.text.localeCompare(b.text);
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyConditionEditor.prototype.getConditionQuetions = function () {
        if (!this.object)
            return [];
        var res = [];
        var questions = this.availableQuestions;
        if (questions.length > 0 && questions[0]["addConditionObjectsByContext"]) {
            for (var i = 0; i < questions.length; i++) {
                if (this.object == questions[i])
                    continue;
                questions[i].addConditionObjectsByContext(res, this.object);
            }
            this.addConditionQuestionsHash = {};
            for (var i = 0; i < res.length; i++) {
                if (!this.options || !this.options.showTitlesInExpressions) {
                    res[i].text = res[i].name;
                }
                this.addConditionQuestionsHash[res[i].name] = res[i].question;
            }
        }
        else {
            //TODO remove old code
            var names = [];
            for (var i = 0; i < questions.length; i++) {
                this.addConditionQuestionNames(questions[i], names);
            }
            this.addMatrixColumnsToCondition(names);
            this.addPanelDynamicQuestionsToCondition(names);
            for (var i = 0; i < names.length; i++) {
                res.push({ name: names[i], text: names[i] });
            }
        }
        !!this.options &&
            this.options.onConditionQuestionsGetListCallback(this.editablePropertyName, this.object, this, res);
        return res;
    };
    SurveyPropertyConditionEditor.prototype.addQuestionNames = function (question, questionNames, names) {
        for (var i = 0; i < questionNames.length; i++) {
            this.addConditionQuestionsHash[questionNames[i]] = question;
            names.push(questionNames[i]);
        }
    };
    SurveyPropertyConditionEditor.prototype.addConditionQuestionNames = function (question, names) {
        if (question == this.object)
            return;
        var questionNames = [];
        question.addConditionNames(questionNames);
        this.addQuestionNames(question, questionNames, names);
    };
    SurveyPropertyConditionEditor.prototype.addMatrixColumnsToCondition = function (names) {
        if (!(this.object instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["MatrixDropdownColumn"]) ||
            !this.object ||
            !this.object.colOwner ||
            !this.object.colOwner["columns"])
            return;
        var columns = this.object.colOwner["columns"];
        for (var i = 0; i < columns.length; i++) {
            if (columns[i] == this.object)
                continue;
            var colName = "row." + columns[i].name;
            names.push(colName);
            this.addConditionQuestionsHash[colName] = this.object.colOwner;
        }
    };
    SurveyPropertyConditionEditor.prototype.addPanelDynamicQuestionsToCondition = function (names) {
        if (!(this.object.data instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["QuestionPanelDynamicItem"]))
            return;
        var panel = this.object.data.panel;
        for (var i = 0; i < panel.questions.length; i++) {
            var q = panel.questions[i];
            var questionNames = [];
            this.addConditionQuestionNames(q, questionNames);
            for (var j = 0; j < questionNames.length; j++) {
                var questionName = "panel." + questionNames[j];
                if (q.name != this.object.name) {
                    names.push(questionName);
                }
                this.addConditionQuestionsHash[questionName] = q;
            }
        }
    };
    SurveyPropertyConditionEditor.prototype.onValueSurveyChanged = function (questionName, operator) {
        if (!this.canShowValueByOperator(operator) ||
            !questionName ||
            !this.object ||
            !this.object.survey) {
            this.koHasValueSurvey(false);
            return;
        }
        var json = this.getQuestionConditionJson(questionName, operator);
        this.koHasValueSurvey(!!json && !!json.type);
        if (this.koHasValueSurvey()) {
            this.koValueSurvey(this.createValueSurvey(json, questionName));
        }
    };
    SurveyPropertyConditionEditor.prototype.createValueSurvey = function (qjson, questionName) {
        qjson.name = "question";
        qjson.title = __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("pe.conditionValueQuestionTitle");
        delete qjson["visible"];
        delete qjson["visibleIf"];
        delete qjson["enable"];
        delete qjson["enableIf"];
        var json = {
            questions: [],
            showNavigationButtons: false,
            showQuestionNumbers: "off"
        };
        json.questions.push(qjson);
        var survey = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"](json);
        var self = this;
        survey.onValueChanged.add(function (survey, options) {
            if (!self.isValueChanging) {
                self.koAddConditionValue(JSON.stringify(options.value));
            }
        });
        if (this.options) {
            var propName = !!this.property ? this.property.name : "";
            this.options.onConditionValueSurveyCreatedCallBack(questionName, propName, this.object, this, survey);
        }
        return survey;
    };
    SurveyPropertyConditionEditor.prototype.getQuestionByName = function (questionName) {
        if (!this.object || !this.object.survey)
            return null;
        return this.addConditionQuestionsHash[questionName];
    };
    SurveyPropertyConditionEditor.prototype.getQuestionValueByName = function (questionName) {
        var question = this.getQuestionByName(questionName);
        if (question && question.name != question.getValueName())
            return questionName.replace(question.name, question.getValueName());
        return questionName;
    };
    SurveyPropertyConditionEditor.prototype.getQuestionConditionJson = function (questionName, operator) {
        var path = "";
        var question = this.getQuestionByName(questionName);
        if (!question)
            return null;
        var path = questionName.substr(question.name.length);
        if (!!path && path[0] == ".") {
            path = path.substr(1);
        }
        var json = question && question.getConditionJson
            ? question.getConditionJson(operator, path)
            : null;
        return json && (json.type !== "text" || json.inputType) ? json : null;
    };
    SurveyPropertyConditionEditor.prototype.canShowValueByOperator = function (operator) {
        return operator != "empty" && operator != "notempty";
    };
    Object.defineProperty(SurveyPropertyConditionEditor.prototype, "hasAceEditor", {
        get: function () {
            return (typeof ace !== "undefined" &&
                typeof ace.require("ace/ext/language_tools") !== "undefined");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyConditionEditor.prototype, "addConditionQuestionOptions", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString("pe.conditionSelectQuestion");
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyConditionEditor.prototype.addCondition = function () {
        if (!this.koCanAddCondition())
            return;
        var text = "";
        if (this.koShowAddConditionType()) {
            text = this.koTextValue() + " " + this.koAddConditionType() + " ";
        }
        text +=
            "{" +
                this.getQuestionValueByName(this.koAddConditionQuestion()) +
                "} " +
                this.getAddConditionOperator();
        if (this.koAddContionValueEnabled()) {
            text += " " + this.getAddConditionValue();
        }
        this.koTextValue(text);
        this.resetAddConditionValues();
    };
    SurveyPropertyConditionEditor.prototype.onBeforeApply = function () {
        if (!this.koTextValue() && this.koCanAddCondition()) {
            this.addCondition();
        }
        _super.prototype.onBeforeApply.call(this);
    };
    SurveyPropertyConditionEditor.prototype.getAddConditionOperator = function () {
        var op = this.koAddConditionOperator();
        if (op == "equal")
            return "=";
        if (op == "notequal")
            return "<>";
        if (op == "greater")
            return ">";
        if (op == "less")
            return "<";
        if (op == "greaterorequal")
            return ">=";
        if (op == "lessorequal")
            return "<=";
        return op;
    };
    SurveyPropertyConditionEditor.prototype.getAddConditionValue = function () {
        var val = this.koAddConditionValue();
        if (!val)
            return val;
        if (val == "true" || val == "false")
            return val;
        if (!isNaN(val))
            return val;
        if (val[0] == "[")
            return val;
        if (!this.isQuote(val[0]))
            val = "'" + val;
        if (!this.isQuote(val[val.length - 1]))
            val = val + "'";
        return val;
    };
    SurveyPropertyConditionEditor.prototype.isQuote = function (ch) {
        return ch == "'" || ch == '"';
    };
    SurveyPropertyConditionEditor.prototype.onkoTextValueChanged = function (newValue) {
        if (!newValue) {
            this.koIsValid(true);
        }
        else {
            var conditionParser = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ConditionsParser"]();
            conditionParser[this.syntaxCheckMethodName](newValue);
            this.koIsValid(!conditionParser.error);
        }
    };
    SurveyPropertyConditionEditor.prototype.resetAddConditionValues = function () {
        this.koAddConditionQuestion("");
        this.koAddConditionOperator("equal");
        this.koAddConditionValue("");
    };
    SurveyPropertyConditionEditor.emptySurvey = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"]();
    return SurveyPropertyConditionEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__["b" /* SurveyPropertyTextEditor */]));

__WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("condition", function (property) {
    return new SurveyPropertyConditionEditor(property, "condition", "createCondition");
});
__WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("expression", function (property) {
    return new SurveyPropertyConditionEditor(property, "expression", "parseExpression");
});
var operations = [
    {
        value: "and",
        title: "logical 'and' operator"
    },
    {
        value: "&&",
        title: "logical 'and' operator"
    },
    {
        value: "or",
        title: "logical 'or' operator"
    },
    {
        value: "||",
        title: "logical 'or' operator"
    },
    {
        value: "empty",
        title: "returns true if the left operand is empty	{questionName} empty"
    },
    {
        value: "notempty",
        title: "returns true if the left operand is not empty	{questionName} notempty"
    },
    {
        value: "=",
        title: "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
    },
    {
        value: "==",
        title: "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
    },
    {
        value: "equal",
        title: "returns true if two values are equal	{questionName} = 5, {questionName} == 'abc', {questionName} equal 124"
    },
    {
        value: "<>",
        title: "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
    },
    {
        value: "!=",
        title: "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
    },
    {
        value: "notequal",
        title: "returns true if two values are not equal	{questionName} <> 5, {questionName} != 'abc', {questionName} notequal 124"
    },
    {
        value: ">",
        title: "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
    },
    {
        value: "greater",
        title: "returns true if the left operand greater then the second operand	{questionName} > 2, {questionName} greater 'a'"
    },
    {
        value: "<",
        title: "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
    },
    {
        value: "less",
        title: "returns true if the left operand less then the second operand	{questionName} < 2, {questionName} less 'a'"
    },
    {
        value: ">=",
        title: "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
    },
    {
        value: "greaterorequal",
        title: "returns true if the left operand equal or greater then the second operand	{questionName} >= 2, {questionName} greaterorequal 'a'"
    },
    {
        value: "<=",
        title: "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
    },
    {
        value: "lessorequal",
        title: "returns true if the left operand equal or less then the second operand	{questionName} <= 2, {questionName} lessorequal 'a'"
    },
    {
        value: "contains",
        title: "return true if the left operand is an array and it contains a value of the second operand	{questionName} contains 'a'"
    },
    {
        value: "notcontains",
        title: "return true if the left operand is an array and it does not contain a value of the second operand"
    }
];
var createAnnotations = function (condition, syntaxCheckMethodName) {
    condition = condition || "";
    var annotations = new Array();
    var conditionParser = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ConditionsParser"]();
    conditionParser[syntaxCheckMethodName](condition);
    if (!!condition && conditionParser.error) {
        var toErrorSubstring = condition.substring(0, conditionParser.error.at);
        var column = toErrorSubstring.length - toErrorSubstring.lastIndexOf("\n");
        var annotation = {
            row: condition.match(/\n/g) ? condition.match(/\n/g).length : 0,
            column: column,
            text: conditionParser.error.code + " (" + column + ")",
            type: "error"
        };
        annotations.push(annotation);
    }
    return annotations;
};
var ID_REGEXP = /[a-zA-Z_0-9{\*\/\<\>\=\!\$\.\-\u00A2-\uFFFF]/;
function doGetCompletions(prevIdentifier, prefix, config, completer) {
    if (completer === void 0) { completer = null; }
    var completions = [];
    var currentQuestion = config.question;
    var usableQuestions = (config.questions || []).filter(function (q) { return q !== currentQuestion; });
    if (!!usableQuestions ||
        currentQuestion instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["MatrixDropdownColumn"] ||
        currentQuestion.data instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["QuestionPanelDynamicItem"]) {
        if (prevIdentifier === "row" &&
            currentQuestion instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["MatrixDropdownColumn"]) {
            completions = currentQuestion.colOwner["columns"]
                .filter(function (e) { return e.name !== currentQuestion.name; })
                .map(function (column) {
                return {
                    name: "",
                    value: "{row." + column.name + "}",
                    some: "",
                    meta: column.title,
                    identifierRegex: ID_REGEXP
                };
            });
        }
        else if (prevIdentifier === "panel" &&
            currentQuestion.data instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["QuestionPanelDynamicItem"]) {
            var panel = currentQuestion.data.panel;
            completions = panel.elements
                .filter(function (e) { return e.name !== currentQuestion.name; })
                .map(function (element) {
                return {
                    name: "",
                    value: "{panel." + element.name + "}",
                    some: "",
                    meta: element.name,
                    identifierRegex: ID_REGEXP
                };
            });
        }
        else {
            var operationsFiltered = operations.filter(function (op) { return !prefix || op.value.indexOf(prefix) !== -1; });
            var questionsFiltered = usableQuestions.filter(function (op) { return !prefix || op.name.indexOf(prefix) !== -1; });
            if (currentQuestion instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["MatrixDropdownColumn"]) {
                completions.push({
                    name: "",
                    value: "{row.",
                    some: "",
                    meta: __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString(__WEBPACK_IMPORTED_MODULE_5__editorLocalization__["b" /* defaultStrings */].pe.aceEditorRowTitle),
                    identifierRegex: ID_REGEXP
                });
            }
            else if (currentQuestion.data instanceof __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["QuestionPanelDynamicItem"]) {
                completions.push({
                    name: "",
                    value: "{panel.",
                    some: "",
                    meta: __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getString(__WEBPACK_IMPORTED_MODULE_5__editorLocalization__["b" /* defaultStrings */].pe.aceEditorPanelTitle),
                    identifierRegex: ID_REGEXP
                });
            }
            completions = completions
                .concat(questionsFiltered.map(function (q) {
                return {
                    completer: completer,
                    name: "",
                    value: "{" + q.name + "}",
                    some: "",
                    meta: q.title,
                    identifierRegex: ID_REGEXP
                };
            }))
                .concat(operationsFiltered.map(function (op) {
                return {
                    name: "",
                    value: op.value,
                    some: "",
                    meta: op.title,
                    identifierRegex: ID_REGEXP
                };
            }));
        }
    }
    return completions;
}
function insertMatch(editor, data) {
    if (editor.completer.completions.filterText) {
        var allRanges = editor.selection.getAllRanges();
        for (var rangeIndex = 0, range; (range = allRanges[rangeIndex]); rangeIndex++) {
            range.start.column -= editor.completer.completions.filterText.length;
            var rangeText = editor.session.getTextRange(range);
            if (rangeText.indexOf("{") !== 0) {
                var extRange = range.clone();
                extRange.start.column--;
                if (editor.session.getTextRange(extRange).indexOf("{") === 0) {
                    range = extRange;
                }
            }
            editor.session.remove(range);
        }
    }
    editor.execCommand("insertstring", data.value || data);
}
__WEBPACK_IMPORTED_MODULE_1_knockout__["bindingHandlers"].aceEditor = {
    init: function (element, options) {
        var configs = options();
        var langTools = ace.require("ace/ext/language_tools");
        var langUtils = ace.require("ace/autocomplete/util");
        var editor = ace.edit(element);
        var objectEditor = configs.editor;
        var isUpdating = false;
        editor.setOption("useWorker", false);
        editor.getSession().on("change", function () {
            var errors = createAnnotations(editor.getValue(), objectEditor.syntaxCheckMethodName);
            isUpdating = true;
            objectEditor.koTextValue(editor.getValue());
            isUpdating = false;
            //   objectEditor.koHasError(errors.length > 0);
            //   if (errors.length > 0) {
            //     objectEditor.koErrorText(errors[0].text);
            //   }
            editor.getSession().setAnnotations(errors);
        });
        var updateCallback = function () {
            if (!isUpdating) {
                editor.setValue(objectEditor.koTextValue() || "");
            }
        };
        var valueSubscription = objectEditor.koTextValue.subscribe(updateCallback);
        updateCallback();
        var completer = {
            identifierRegexps: [ID_REGEXP],
            insertMatch: insertMatch,
            getCompletions: function (editor, session, pos, prefix, callback) {
                var prevIdentifier = langUtils.retrievePrecedingIdentifier(session.getLine(pos.row), pos.column - 1);
                var completions = doGetCompletions(prevIdentifier, prefix, configs, completer);
                callback(null, completions);
            },
            getDocTooltip: function (item) {
                item.docHTML =
                    "<div style='max-width: 300px; white-space: normal;'>" +
                        item.meta +
                        "</div>";
            }
        };
        langTools.setCompleters([completer]);
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });
        __WEBPACK_IMPORTED_MODULE_1_knockout__["utils"].domNodeDisposal.addDisposeCallback(element, function () {
            editor.destroy();
            valueSubscription.dispose();
        });
        editor.focus();
    }
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyCustomEditor; });


var SurveyPropertyCustomEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyCustomEditor, _super);
    function SurveyPropertyCustomEditor(property, widgetJSON) {
        if (widgetJSON === void 0) { widgetJSON = null; }
        var _this = _super.call(this, property) || this;
        _this.isValueChanging = false;
        _this.widgetJSONValue = widgetJSON;
        var self = _this;
        _this["koAfterRender"] = function (el, con) {
            self.doAfterRender(el, con);
        };
        return _this;
    }
    Object.defineProperty(SurveyPropertyCustomEditor.prototype, "editorType", {
        get: function () {
            return "custom";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyCustomEditor.prototype, "widgetJSON", {
        get: function () {
            return this.widgetJSONValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyCustomEditor.prototype.onValueChanged = function () {
        if (this.isValueChanging)
            return;
        this.isValueChanging = true;
        _super.prototype.onValueChanged.call(this);
        if (this.onValueChangedCallback)
            this.onValueChangedCallback(this.editingValue);
        this.isValueChanging = false;
    };
    Object.defineProperty(SurveyPropertyCustomEditor.prototype, "widgetRender", {
        get: function () {
            return this.widgetJSON ? this.widgetJSON.render : null;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyCustomEditor.prototype.doAfterRender = function (elements, con) {
        var el = elements[0];
        if (el && this.widgetRender)
            this.widgetRender(this, el);
    };
    return SurveyPropertyCustomEditor;
}(__WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyDefaultValueEditor; });
/* unused harmony export SurveyPropertyDefaultRowValueEditorBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyDefaultRowValueEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyPropertyDefaultPanelValueEditor; });






var SurveyPropertyDefaultValueEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDefaultValueEditor, _super);
    function SurveyPropertyDefaultValueEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.koSurvey = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"]());
        return _this;
    }
    SurveyPropertyDefaultValueEditor.createJsonFromQuestion = function (obj) {
        var qjson = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"]().toJsonObject(obj);
        qjson.name = SurveyPropertyDefaultValueEditor.defaultQuestionName;
        qjson.type = obj.getType();
        if (qjson.type == "expression") {
            qjson.type = "text";
        }
        qjson.titleLocation = "hidden";
        qjson.showClearButton = true;
        qjson.storeOthersAsComment = false;
        delete qjson["visible"];
        delete qjson["visibleIf"];
        delete qjson["enable"];
        delete qjson["enableIf"];
        return qjson;
    };
    SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion = function (questionJson) {
        var json = {
            questions: [],
            showNavigationButtons: false,
            showQuestionNumbers: "off"
        };
        json.questions.push(questionJson);
        return new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"](json);
    };
    SurveyPropertyDefaultValueEditor.prototype.getValueText = function (value) {
        if (!value)
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.empty");
        return JSON.stringify(value);
    };
    SurveyPropertyDefaultValueEditor.prototype.beforeShow = function () {
        _super.prototype.beforeShow.call(this);
        this.createSurvey();
    };
    SurveyPropertyDefaultValueEditor.prototype.onBeforeApply = function () {
        if (!this.survey)
            return;
        this.setValueCore(this.getSurveyResult());
    };
    Object.defineProperty(SurveyPropertyDefaultValueEditor.prototype, "editorType", {
        get: function () {
            return "value";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDefaultValueEditor.prototype.createSurvey = function () {
        this.survey = SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion(this.buildQuestionJson());
        this.survey.setValue(SurveyPropertyDefaultValueEditor.defaultQuestionName, this.getSurveyInitialValue());
        this.koSurvey(this.survey);
    };
    SurveyPropertyDefaultValueEditor.prototype.buildQuestionJson = function () {
        return SurveyPropertyDefaultValueEditor.createJsonFromQuestion(this.object);
    };
    SurveyPropertyDefaultValueEditor.prototype.getSurveyInitialValue = function () {
        return this.editingValue;
    };
    SurveyPropertyDefaultValueEditor.prototype.getSurveyResult = function () {
        return this.survey.getValue(SurveyPropertyDefaultValueEditor.defaultQuestionName);
    };
    SurveyPropertyDefaultValueEditor.prototype.getJsonType = function (type) {
        return type != "expression" ? type : "text";
    };
    SurveyPropertyDefaultValueEditor.defaultQuestionName = "question";
    return SurveyPropertyDefaultValueEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

var SurveyPropertyDefaultRowValueEditorBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDefaultRowValueEditorBase, _super);
    function SurveyPropertyDefaultRowValueEditorBase(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyPropertyDefaultRowValueEditorBase.prototype, "editorTypeTemplate", {
        get: function () {
            return "value";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDefaultRowValueEditorBase.prototype.getSurveyInitialValue = function () {
        var res = this.editingValue;
        if (!res)
            return res;
        if (!Array.isArray(res)) {
            res = [res];
        }
        return res;
    };
    SurveyPropertyDefaultRowValueEditorBase.prototype.getSurveyResult = function () {
        var res = _super.prototype.getSurveyResult.call(this);
        if (res && Array.isArray(res)) {
            if (res.length == 0)
                return null;
            return res[0];
        }
        return res;
    };
    return SurveyPropertyDefaultRowValueEditorBase;
}(SurveyPropertyDefaultValueEditor));

var SurveyPropertyDefaultRowValueEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDefaultRowValueEditor, _super);
    function SurveyPropertyDefaultRowValueEditor(property) {
        return _super.call(this, property) || this;
    }
    SurveyPropertyDefaultRowValueEditor.prototype.buildQuestionJson = function () {
        var qjson = _super.prototype.buildQuestionJson.call(this);
        qjson.rowCount = 1;
        qjson.minRowCount = 1;
        qjson.maxRowCount = 1;
        qjson.columnsLocation = "vertical";
        return qjson;
    };
    Object.defineProperty(SurveyPropertyDefaultRowValueEditor.prototype, "editorType", {
        get: function () {
            return "rowvalue";
        },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyDefaultRowValueEditor;
}(SurveyPropertyDefaultRowValueEditorBase));

var SurveyPropertyDefaultPanelValueEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDefaultPanelValueEditor, _super);
    function SurveyPropertyDefaultPanelValueEditor(property) {
        return _super.call(this, property) || this;
    }
    SurveyPropertyDefaultPanelValueEditor.prototype.buildQuestionJson = function () {
        var qjson = _super.prototype.buildQuestionJson.call(this);
        qjson.panelCount = 1;
        qjson.minPanelCount = 1;
        qjson.maxPanelCount = 1;
        return qjson;
    };
    Object.defineProperty(SurveyPropertyDefaultPanelValueEditor.prototype, "editorType", {
        get: function () {
            return "panelvalue";
        },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyDefaultPanelValueEditor;
}(SurveyPropertyDefaultRowValueEditorBase));

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("value", function (property) {
    return new SurveyPropertyDefaultValueEditor(property);
});
__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("rowvalue", function (property) {
    return new SurveyPropertyDefaultRowValueEditor(property);
});
__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("panelvalue", function (property) {
    return new SurveyPropertyDefaultPanelValueEditor(property);
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditorRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorProperties; });




var SurveyQuestionEditorProperty = /** @class */ (function () {
    function SurveyQuestionEditorProperty(obj, property, displayName, options, isTabProperty) {
        if (options === void 0) { options = null; }
        if (isTabProperty === void 0) { isTabProperty = false; }
        this.obj = obj;
        this.property = property;
        var self = this;
        this.objectPropertyValue = new __WEBPACK_IMPORTED_MODULE_2__objectProperty__["a" /* SurveyObjectProperty */](this.property, null);
        this.editor.isTabProperty = isTabProperty;
        this.editor.options = options;
        if (!displayName) {
            displayName = __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("pe." + this.property.name);
        }
        if (displayName)
            this.editor.displayName = displayName;
        this.objectProperty.object = obj;
        this.editor.setup();
    }
    Object.defineProperty(SurveyQuestionEditorProperty.prototype, "objectProperty", {
        get: function () {
            return this.objectPropertyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorProperty.prototype, "editor", {
        get: function () {
            return this.objectProperty.editor;
        },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorProperty.prototype.hasError = function () {
        return this.editor.hasError();
    };
    SurveyQuestionEditorProperty.prototype.apply = function () {
        if (this.editor.apply()) {
            this.obj[this.property.name] = this.editor.koValue();
            return true;
        }
        return false;
    };
    SurveyQuestionEditorProperty.prototype.reset = function () {
        this.editor.koValue(this.property.getPropertyValue(this.obj));
    };
    SurveyQuestionEditorProperty.prototype.beforeShow = function () {
        this.editor.beforeShow();
    };
    return SurveyQuestionEditorProperty;
}());

var SurveyQuestionEditorRow = /** @class */ (function () {
    function SurveyQuestionEditorRow(obj) {
        this.obj = obj;
        this.properties = [];
    }
    SurveyQuestionEditorRow.prototype.addProperty = function (property, displayName, options, isTabProperty) {
        this.properties.push(new SurveyQuestionEditorProperty(this.obj, property, displayName, options, isTabProperty));
    };
    SurveyQuestionEditorRow.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.properties.length; i++) {
            isError = this.properties[i].hasError() || isError;
        }
        return isError;
    };
    return SurveyQuestionEditorRow;
}());

var SurveyQuestionEditorProperties = /** @class */ (function () {
    function SurveyQuestionEditorProperties(obj, properties, onCanShowPropertyCallback, options, tab) {
        if (onCanShowPropertyCallback === void 0) { onCanShowPropertyCallback = null; }
        if (options === void 0) { options = null; }
        if (tab === void 0) { tab = null; }
        this.obj = obj;
        this.options = options;
        this.tab = tab;
        this.isTabProperty = false;
        this.rows = [];
        this.isTabProperty = !!tab;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"]
            ? __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData["getPropertiesByObj"](this.obj)
            : __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
        this.buildRows(properties);
    }
    SurveyQuestionEditorProperties.prototype.apply = function () {
        var res = true;
        this.performForAllProperties(function (p) { return (res = p.apply() && res); });
        return res;
    };
    SurveyQuestionEditorProperties.prototype.reset = function () {
        this.performForAllProperties(function (p) { return p.reset(); });
    };
    SurveyQuestionEditorProperties.prototype.beforeShow = function () {
        this.performForAllProperties(function (p) { return p.beforeShow(); });
    };
    SurveyQuestionEditorProperties.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.rows.length; i++) {
            isError = this.rows[i].hasError() || isError;
        }
        return isError;
    };
    SurveyQuestionEditorProperties.prototype.performForAllProperties = function (func) {
        for (var i = 0; i < this.rows.length; i++) {
            for (var j = 0; j < this.rows[i].properties.length; j++) {
                var property = this.rows[i].properties[j];
                func(property);
            }
        }
    };
    SurveyQuestionEditorProperties.prototype.buildRows = function (properties) {
        for (var i = 0; i < properties.length; i++) {
            var name = this.getName(properties[i]);
            var jsonProperty = this.getProperty(name);
            if (!jsonProperty)
                continue;
            var row = this.getRowByCategory(properties[i].category);
            if (!row) {
                row = new SurveyQuestionEditorRow(this.obj);
                if (properties[i].category)
                    row.category = properties[i].category;
                this.rows.push(row);
            }
            row.addProperty(jsonProperty, properties[i].title, this.options, properties.length === 1 && this.isTabProperty);
        }
    };
    SurveyQuestionEditorProperties.prototype.getName = function (prop) {
        if (!prop)
            return null;
        if (typeof prop === "string")
            return prop;
        if (prop.name)
            return prop.name;
        return null;
    };
    SurveyQuestionEditorProperties.prototype.getRowByCategory = function (category) {
        if (!category)
            return null;
        for (var i = 0; i < this.rows.length; i++) {
            if (this.rows[i].category == category)
                return this.rows[i];
        }
        return null;
    };
    SurveyQuestionEditorProperties.prototype.getProperty = function (propertyName) {
        if (!propertyName)
            return null;
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        if (!property)
            return null;
        if (!!this.tab &&
            property.name == this.tab.name &&
            this.tab.visible === true)
            return property;
        return __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].isPropertyVisible(this.obj, property, this.onCanShowPropertyCallback)
            ? property
            : null;
    };
    return SurveyQuestionEditorProperties;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionToolbox; });



/**
 * The list of Toolbox items.
 */
var QuestionToolbox = /** @class */ (function () {
    function QuestionToolbox(supportedQuestions) {
        if (supportedQuestions === void 0) { supportedQuestions = null; }
        this.supportedQuestions = supportedQuestions;
        this._orderedQuestions = [
            "text",
            "checkbox",
            "radiogroup",
            "dropdown",
            "comment",
            "rating",
            "imagepicker",
            "boolean",
            "html"
        ];
        this._questionDefaultSettings = {
            imagepicker: function () {
                return {
                    choices: [
                        {
                            value: "lion",
                            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                        },
                        {
                            value: "giraffe",
                            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                        },
                        {
                            value: "panda",
                            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                        },
                        {
                            value: "camel",
                            imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                        }
                    ]
                };
            }
        };
        /**
         * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
         */
        this.copiedItemMaxCount = 3;
        this.allowExpandMultipleCategoriesValue = false;
        this.itemsValue = [];
        this.koItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koCategories = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koActiveCategory = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koHasCategories = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.createDefaultItems(supportedQuestions);
        var self = this;
        this.koActiveCategory.subscribe(function (newValue) {
            for (var i = 0; i < self.koCategories().length; i++) {
                var category = self.koCategories()[i];
                category.koCollapsed(category.name !== newValue);
            }
        });
    }
    Object.defineProperty(QuestionToolbox.prototype, "orderedQuestions", {
        /**
         * Modify this array to change the toolbox items order.
         */
        get: function () {
            return this._orderedQuestions;
        },
        set: function (questions) {
            this._orderedQuestions = questions;
            this.reorderItems();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "jsonText", {
        /**
         * The Array of Toolbox items as Text JSON.
         */
        get: function () {
            return JSON.stringify(this.itemsValue);
        },
        set: function (value) {
            this.itemsValue = value ? JSON.parse(value) : [];
            this.onItemsChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedJsonText", {
        /**
         * The Array of copied Toolbox items as Text JSON.
         */
        get: function () {
            return JSON.stringify(this.copiedItems);
        },
        set: function (value) {
            var newItems = value ? JSON.parse(value) : [];
            this.clearCopiedItems();
            for (var i = 0; i < newItems.length; i++) {
                newItems[i].isCopied = true;
                this.addItem(newItems[i]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "items", {
        /**
         * The Array of Toolbox items
         */
        get: function () {
            return this.itemsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedItems", {
        /**
         * The Array of copied Toolbox items
         */
        get: function () {
            var result = [];
            for (var i = 0; i < this.itemsValue.length; i++) {
                if (this.itemsValue[i].isCopied)
                    result.push(this.itemsValue[i]);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add toolbox items into the Toolbox
     * @param items the list of new items
     * @param clearAll set it to true to clear all previous items.
     */
    QuestionToolbox.prototype.addItems = function (items, clearAll) {
        if (clearAll === void 0) { clearAll = false; }
        if (clearAll) {
            this.clearItems();
        }
        for (var i = 0; i < items.length; i++) {
            this.itemsValue.push(items[i]);
        }
        this.onItemsChanged();
    };
    /**
     * Add a copied Question into Toolbox
     * @param question a copied Survey.Question
     * @param options a json object that allows you to override question properties. Attributes are: name, title, isCopied, iconName, json and category.
     */
    QuestionToolbox.prototype.addCopiedItem = function (question, options) {
        if (options === void 0) { options = null; }
        if (!options)
            options = {};
        var name = !!options.name ? options.name : question.name;
        var title = !!options.title ? options.title : name;
        var item = {
            name: name,
            title: title,
            isCopied: options.isCopied !== false,
            iconName: !!options.iconName ? options.iconName : "icon-default",
            json: !!options.json ? options.json : this.getQuestionJSON(question),
            category: !!options.category ? options.category : ""
        };
        if (this.replaceItem(item))
            return;
        var copied = this.copiedItems;
        if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount)
            this.removeItem(copied[this.copiedItemMaxCount - 1].name);
        this.addItem(item);
    };
    /**
     * Add a toolbox item
     * @param item the toolbox item description
     * @see IQuestionToolboxItem
     */
    QuestionToolbox.prototype.addItem = function (item) {
        this.itemsValue.push(item);
        this.onItemsChanged();
    };
    /**
     * Add a new toolbox item, add delete the old item with the same name
     * @param item the toolbox item description
     * @see IQuestionToolboxItem
     */
    QuestionToolbox.prototype.replaceItem = function (item) {
        var index = this.indexOf(item.name);
        if (index < 0)
            return;
        this.itemsValue[index] = item;
        this.onItemsChanged();
        return true;
    };
    /**
     * Remove a toolbox item by it's name
     * @param name toolbox item name
     * @see IQuestionToolboxItem
     */
    QuestionToolbox.prototype.removeItem = function (name) {
        var index = this.indexOf(name);
        if (index < 0)
            return false;
        this.itemsValue.splice(index, 1);
        this.onItemsChanged();
        return true;
    };
    /**
     * Remove all toolbox items.
     */
    QuestionToolbox.prototype.clearItems = function () {
        this.itemsValue = [];
        this.onItemsChanged();
    };
    /**
     * Remove all copied toolbox items.
     */
    QuestionToolbox.prototype.clearCopiedItems = function () {
        var removedItems = this.copiedItems;
        for (var i = 0; i < removedItems.length; i++) {
            this.removeItem(removedItems[i].name);
        }
    };
    /**
     * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
     * @param name
     */
    QuestionToolbox.prototype.getItemByName = function (name) {
        var index = this.indexOf(name);
        return index > -1 ? this.itemsValue[index] : null;
    };
    Object.defineProperty(QuestionToolbox.prototype, "allowExpandMultipleCategories", {
        /**
         * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
         * @see activeCategory
         */
        get: function () {
            return this.allowExpandMultipleCategoriesValue;
        },
        set: function (val) {
            this.allowExpandMultipleCategoriesValue = val;
            if (val) {
                this.activeCategory = "";
            }
            else {
                if (this.koCategories().length > 0) {
                    this.activeCategory = this.koCategories()[0].name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Change the category of the toolbox item
     * @param name the toolbox item name
     * @param category new category name
     */
    QuestionToolbox.prototype.changeCategory = function (name, category) {
        this.changeCategories([{ name: name, category: category }]);
    };
    /**
     * Change categories for several toolbox items.
     * @param changedItems the array of objects {name: "your toolbox item name", category: "new category name"}
     */
    QuestionToolbox.prototype.changeCategories = function (changedItems) {
        for (var i = 0; i < changedItems.length; i++) {
            var item = changedItems[i];
            var toolboxItem = this.getItemByName(item.name);
            if (toolboxItem) {
                toolboxItem.category = item.category;
            }
        }
        this.onItemsChanged();
    };
    Object.defineProperty(QuestionToolbox.prototype, "activeCategory", {
        /**
         * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
         * @see allowExpandMultipleCategories
         * @see expandCategory
         * @see collapseCategory
         */
        get: function () {
            return this.koActiveCategory();
        },
        set: function (val) {
            this.koActiveCategory(val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionToolbox.prototype.doCategoryClick = function (categoryName) {
        if (this.allowExpandMultipleCategories) {
            var category = this.getCategoryByName(categoryName);
            if (category) {
                category.koCollapsed(!category.koCollapsed());
            }
        }
        else {
            this.activeCategory = categoryName;
        }
    };
    /**
     * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
     * @param categoryName the category name
     * @see allowExpandMultipleCategories
     * @see collapseCategory
     */
    QuestionToolbox.prototype.expandCategory = function (categoryName) {
        if (this.allowExpandMultipleCategories) {
            var category = this.getCategoryByName(categoryName);
            if (category) {
                category.koCollapsed(false);
            }
        }
        else {
            this.activeCategory = categoryName;
        }
    };
    /**
     * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @param categoryName the category name
     * @see allowExpandMultipleCategories
     */
    QuestionToolbox.prototype.collapseCategory = function (categoryName) {
        if (!this.allowExpandMultipleCategories)
            return;
        var category = this.getCategoryByName(categoryName);
        if (category) {
            category.koCollapsed(true);
        }
    };
    /**
     * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @see allowExpandMultipleCategories
     */
    QuestionToolbox.prototype.expandAllCategories = function () {
        this.expandCollapseAllCategories(false);
    };
    /**
     * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
     * @see allowExpandMultipleCategories
     */
    QuestionToolbox.prototype.collapseAllCategories = function () {
        this.expandCollapseAllCategories(true);
    };
    QuestionToolbox.prototype.expandCollapseAllCategories = function (isCollapsed) {
        var categories = this.koCategories();
        for (var i = 0; i < categories.length; i++) {
            categories[i].koCollapsed(isCollapsed);
        }
    };
    QuestionToolbox.prototype.getCategoryByName = function (categoryName) {
        var categories = this.koCategories();
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            if (category.name === categoryName)
                return category;
        }
        return null;
    };
    QuestionToolbox.prototype.onItemsChanged = function () {
        this.koItems([]);
        this.koItems(this.itemsValue);
        var categories = [];
        var categoriesHash = {};
        var prevActiveCategory = this.koActiveCategory();
        var self = this;
        for (var i = 0; i < this.itemsValue.length; i++) {
            var item = this.itemsValue[i];
            var categoryName = item.category
                ? item.category
                : __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.toolboxGeneralCategory"); //TODO
            if (!categoriesHash[categoryName]) {
                var category = {
                    name: categoryName,
                    items: [],
                    koCollapsed: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](categoryName !== prevActiveCategory),
                    expand: function () {
                        self.doCategoryClick(this.name);
                    }
                };
                categoriesHash[categoryName] = category;
                categories.push(category);
            }
            categoriesHash[categoryName].items.push(item);
        }
        this.koCategories(categories);
        if (!this.allowExpandMultipleCategories) {
            if (prevActiveCategory && categoriesHash[prevActiveCategory]) {
                this.koActiveCategory(prevActiveCategory);
            }
            else {
                this.koActiveCategory(categories.length > 0 ? categories[0].name : "");
            }
        }
        else {
            if (categories.length > 0) {
                categories[0].koCollapsed(false);
            }
        }
        this.koHasCategories(categories.length > 1);
    };
    QuestionToolbox.prototype.indexOf = function (name) {
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].name == name)
                return i;
        }
        return -1;
    };
    QuestionToolbox.prototype.reorderItems = function () {
        var _this = this;
        this.itemsValue.sort(function (i1, i2) {
            var index1 = _this._orderedQuestions.indexOf(i1.name);
            if (index1 === -1)
                index1 = Number.MAX_VALUE;
            var index2 = _this._orderedQuestions.indexOf(i2.name);
            if (index2 === -1)
                index2 = Number.MAX_VALUE;
            return index1 - index2;
        });
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.createDefaultItems = function (supportedQuestions) {
        this.clearItems();
        var questions = this.getQuestionTypes(supportedQuestions);
        for (var i = 0; i < questions.length; i++) {
            var name = questions[i];
            var question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.createElement(name, "q1");
            if (!question) {
                question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.createClass(name);
            }
            var json = this.getQuestionJSON(question);
            var item = {
                name: name,
                iconName: "icon-" + name,
                title: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("qt." + name),
                json: json,
                isCopied: false,
                category: ""
            };
            this.itemsValue.push(item);
        }
        this.registerCustomWidgets();
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.registerCustomWidgets = function () {
        var inst = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["CustomWidgetCollection"].Instance;
        if (!inst.getActivatedBy)
            return;
        var widgets = inst.widgets;
        for (var i = 0; i < widgets.length; i++) {
            if (inst.getActivatedBy(widgets[i].name) != "customtype")
                continue;
            var widgetJson = widgets[i].widgetJson;
            if (!widgetJson.widgetIsLoaded || !widgetJson.widgetIsLoaded())
                continue;
            var iconName = widgetJson.iconName ? widgetJson.iconName : "icon-default";
            var title = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("qt." + widgetJson.name);
            if (!title || title == widgetJson.name)
                title = widgetJson.title;
            if (!title)
                title = widgetJson.name;
            var json = widgetJson.defaultJSON ? widgetJson.defaultJSON : {};
            if (!json.type) {
                json.type = widgetJson.name;
            }
            var item = {
                name: widgetJson.name,
                iconName: iconName,
                title: title,
                json: json,
                isCopied: false,
                category: ""
            };
            this.itemsValue.push(item);
        }
    };
    QuestionToolbox.prototype.getQuestionJSON = function (question) {
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(question);
        json.type = question.getType();
        if (!!this._questionDefaultSettings[json.type]) {
            var defaultSettings = this._questionDefaultSettings[json.type]();
            for (var key in defaultSettings) {
                json[key] = defaultSettings[key];
            }
        }
        return json;
    };
    QuestionToolbox.prototype.getQuestionTypes = function (supportedQuestions) {
        var allTypes = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.getAllTypes();
        if (!supportedQuestions || supportedQuestions.length == 0)
            supportedQuestions = allTypes;
        var questions = [];
        for (var i = 0; i < this.orderedQuestions.length; i++) {
            var name = this.orderedQuestions[i];
            if (supportedQuestions.indexOf(name) > -1 && allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        for (var i = 0; i < supportedQuestions.length; i++) {
            var name = supportedQuestions[i];
            if (questions.indexOf(supportedQuestions[i]) < 0 &&
                allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        return questions;
    };
    return QuestionToolbox;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionConverter; });

var QuestionConverter = /** @class */ (function () {
    function QuestionConverter() {
    }
    QuestionConverter.addConvertInfo = function (className, convertToClassName) {
        if (!QuestionConverter.convertInfo[className]) {
            QuestionConverter.convertInfo[className] = [];
        }
        QuestionConverter.convertInfo[className].push(convertToClassName);
    };
    QuestionConverter.getConvertToClasses = function (className) {
        var res = QuestionConverter.convertInfo[className];
        return res ? res : [];
    };
    QuestionConverter.convertObject = function (obj, convertToClass) {
        if (!obj || !obj.parent || convertToClass == obj.getType())
            return null;
        var newQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["QuestionFactory"].Instance.createQuestion(convertToClass, obj.name);
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]();
        var json = jsonObj.toJsonObject(obj);
        jsonObj.toObject(json, newQuestion);
        var panel = obj.parent;
        var index = panel.elements.indexOf(obj);
        panel.removeElement(obj);
        panel.addElement(newQuestion, index);
        return newQuestion;
    };
    QuestionConverter.convertInfo = {};
    return QuestionConverter;
}());

function createDefaultQuestionConverterItems() {
    var classes = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData.getChildrenClasses("selectbase", true);
    for (var i = 0; i < classes.length; i++) {
        for (var j = 0; j < classes.length; j++) {
            if (i == j)
                continue;
            QuestionConverter.addConvertInfo(classes[i].name, classes[j].name);
        }
    }
    QuestionConverter.addConvertInfo("text", "comment");
    QuestionConverter.addConvertInfo("comment", "text");
}
createDefaultQuestionConverterItems();


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json5__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEmbedingWindow; });



var SurveyEmbedingWindow = /** @class */ (function () {
    function SurveyEmbedingWindow() {
        this.surveyId = null;
        this.surveyPostId = null;
        this.generateValidJSON = false;
        this.surveyJSVersion = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Version"];
        this.surveyCDNPath = "https://surveyjs.azureedge.net/";
        this.platformSurveyJSPrefix = {
            angular: "angular",
            jquery: "jquery",
            knockout: "ko",
            react: "react",
            vue: "vue"
        };
        this.platformJSonPage = {
            angular: "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            jquery: 'var survey = new Survey.Model(surveyJSON);\n$("#surveyContainer").Survey({\n    model: survey,\n    onComplete: sendDataToServer\n});',
            knockout: 'var survey = new Survey.Model(surveyJSON, "surveyContainer");\nsurvey.onComplete.add(sendDataToServer);',
            react: 'ReactDOM.render(\n    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));',
            vue: "var survey = new Survey.Model(surveyJSON);\nnew Vue({ el: '#surveyContainer', data: { survey: survey } });"
        };
        this.platformJSonWindow = {
            angular: "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyWindowNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            jquery: 'var survey = new Survey.Model(surveyJSON);\n$("#surveyContainer").SurveyWindow({\n    model: survey,\n    onComplete: sendDataToServer\n});',
            knockout: "var survey = new Survey.Model(surveyJSON);\nsurveyWindow.show();\nsurvey.onComplete.add(sendDataToServer);",
            react: 'ReactDOM.render(\n    <Survey.SurveyWindow json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));',
            vue: ""
        };
        this.platformHtmlonPage = {
            angular: "<ng-app></ng-app>",
            jquery: '<div id="surveyContainer"></div>',
            knockout: '<div id="surveyContainer"></div>',
            react: '<div id="surveyContainer"></div>',
            vue: '<div id="surveyContainer"><survey :survey="survey"></survey></div>'
        };
        this.platformHtmlonWindow = {
            angular: "<ng-app></ng-app>",
            jquery: '<div id="surveyContainer"></div>',
            knockout: "",
            react: '<div id="surveyContainer"></div>',
            vue: "<div id='surveyContainer'><survey-window :survey='survey'></survey-window></div>"
        };
        var self = this;
        this.koLibraryVersion = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("jquery");
        this.koShowAsWindow = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("page");
        this.koScriptUsing = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("bootstrap");
        this.koHasIds = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koLoadSurvey = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koHeadText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koJavaText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koBodyText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koVisibleHtml = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return (self.koShowAsWindow() == "page" ||
                self.platformHtmlonWindow[self.koLibraryVersion()] != "");
        });
        this.koLibraryVersion.subscribe(function (newValue) {
            self.setHeadText();
            self.setJavaTest();
            self.setBodyText();
        });
        this.koShowAsWindow.subscribe(function (newValue) {
            self.setJavaTest();
            self.setBodyText();
        });
        this.koScriptUsing.subscribe(function (newValue) {
            self.setHeadText();
            self.setJavaTest();
        });
        this.koLoadSurvey.subscribe(function (newValue) {
            self.setJavaTest();
        });
        this.surveyEmbedingHead = null;
    }
    Object.defineProperty(SurveyEmbedingWindow.prototype, "json", {
        get: function () {
            return this.jsonValue;
        },
        set: function (value) {
            this.jsonValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEmbedingWindow.prototype, "hasAceEditor", {
        get: function () {
            return typeof ace !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.show = function () {
        if (this.hasAceEditor && this.surveyEmbedingHead == null) {
            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
            this.surveyEmbedingBody = this.createEditor("surveyEmbedingBody");
            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
        }
        this.koHasIds(this.surveyId && this.surveyPostId);
        this.setBodyText();
        this.setHeadText();
        this.setJavaTest();
    };
    SurveyEmbedingWindow.prototype.setBodyText = function () {
        this.setTextToEditor(this.surveyEmbedingBody, this.koBodyText, this.platformHtmlonPage[this.koLibraryVersion()]);
    };
    Object.defineProperty(SurveyEmbedingWindow.prototype, "getCDNPath", {
        get: function () {
            return this.surveyCDNPath + this.surveyJSVersion + "/";
        },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.setHeadText = function () {
        var str = "<!-- Your platform (" + this.koLibraryVersion() + ") scripts. -->\n";
        if (this.koScriptUsing() != "bootstrap") {
            str +=
                '\n<link href="' +
                    this.getCDNPath +
                    'survey.css" type="text/css" rel="stylesheet" />';
        }
        str +=
            '\n<script src="' +
                this.getCDNPath +
                "survey." +
                this.platformSurveyJSPrefix[this.koLibraryVersion()] +
                '.min.js"></script>';
        this.setTextToEditor(this.surveyEmbedingHead, this.koHeadText, str);
    };
    SurveyEmbedingWindow.prototype.setJavaTest = function () {
        this.setTextToEditor(this.surveyEmbedingJava, this.koJavaText, this.getJavaText());
    };
    SurveyEmbedingWindow.prototype.createEditor = function (elementName) {
        var editor = ace.edit(elementName);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/json");
        editor.setShowPrintMargin(false);
        editor.renderer.setShowGutter(false);
        editor.setReadOnly(true);
        return editor;
    };
    SurveyEmbedingWindow.prototype.getJavaText = function () {
        var isOnPage = this.koShowAsWindow() == "page";
        var str = this.getSaveFunc() + "\n\n";
        str += isOnPage
            ? this.platformJSonPage[this.koLibraryVersion()]
            : this.platformJSonWindow[this.koLibraryVersion()];
        var jsonText = "var surveyJSON = " + this.getJsonText() + "\n\n";
        return this.getSetCss() + "\n" + jsonText + str;
    };
    SurveyEmbedingWindow.prototype.getSetCss = function () {
        if (this.koScriptUsing() != "bootstrap")
            return "";
        return "Survey.Survey.cssType = \"bootstrap\";\n";
    };
    SurveyEmbedingWindow.prototype.getSaveFunc = function () {
        return ("function sendDataToServer(survey) {\n" + this.getSaveFuncCode() + "\n}");
    };
    SurveyEmbedingWindow.prototype.getSaveFuncCode = function () {
        if (this.koHasIds())
            return "    survey.sendResult('" + this.surveyPostId + "');";
        return "    //send Ajax request to your web server.\n    alert(\"The results are:\" + JSON.stringify(survey.data));";
    };
    SurveyEmbedingWindow.prototype.getJsonText = function () {
        if (this.koHasIds() && this.koLoadSurvey()) {
            return "{ surveyId: '" + this.surveyId + "'}";
        }
        if (this.generateValidJSON)
            return JSON.stringify(this.json);
        return new __WEBPACK_IMPORTED_MODULE_2__json5__["a" /* SurveyJSON5 */]().stringify(this.json);
    };
    SurveyEmbedingWindow.prototype.setTextToEditor = function (editor, koText, text) {
        if (editor)
            editor.setValue(text);
        if (koText)
            koText(text);
    };
    return SurveyEmbedingWindow;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* unused harmony export SurveyObjectItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjects; });



var SurveyObjectItem = /** @class */ (function () {
    function SurveyObjectItem() {
        this.level = 0;
    }
    return SurveyObjectItem;
}());

var SurveyObjects = /** @class */ (function () {
    function SurveyObjects(koObjects, koSelected, showObjectTitles) {
        if (showObjectTitles === void 0) { showObjectTitles = false; }
        this.koObjects = koObjects;
        this.koSelected = koSelected;
        this.showObjectTitles = showObjectTitles;
    }
    Object.defineProperty(SurveyObjects.prototype, "survey", {
        get: function () {
            return this.surveyValue;
        },
        set: function (value) {
            if (this.survey == value)
                return;
            this.surveyValue = value;
            this.rebuild();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjects.prototype.addPage = function (page) {
        this.addElement(page, null);
    };
    SurveyObjects.prototype.addElement = function (element, parent) {
        var parentIndex = parent != null ? this.getItemIndex(parent) : 0;
        if (parentIndex < 0)
            return;
        var elements = parent != null ? this.getElements(parent) : this.survey.pages;
        var elementIndex = elements.indexOf(element);
        var newIndex = elementIndex + 1 + parentIndex;
        if (elementIndex > 0) {
            var prevElement = elements[elementIndex - 1];
            newIndex =
                this.getItemIndex(prevElement) +
                    this.getAllElementCount(prevElement) +
                    1;
        }
        var item = this.createItem(element, this.koObjects()[parentIndex]);
        this.addItem(item, newIndex);
        var objs = [];
        this.buildElements(objs, this.getElements(element), item);
        for (var i = 0; i < objs.length; i++) {
            this.koObjects.splice(newIndex + 1 + i, 0, objs[i]);
        }
        this.koSelected(item);
    };
    SurveyObjects.prototype.selectObject = function (obj) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == obj) {
                this.koSelected(objs[i]);
                return;
            }
        }
    };
    SurveyObjects.prototype.getSelectedObjectPage = function (obj) {
        if (obj === void 0) { obj = null; }
        if (!this.survey)
            return null;
        if (!obj) {
            if (!this.koSelected())
                return;
            obj = this.koSelected().value;
        }
        var objs = this.koObjects();
        var index = this.getItemIndex(obj);
        while (index > 0) {
            var item = objs[index];
            if (item.level == 1)
                return item.value;
            index--;
        }
        return null;
    };
    SurveyObjects.prototype.removeObject = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        var countToRemove = 1 + this.getAllElementCount(obj);
        this.koObjects.splice(index, countToRemove);
    };
    SurveyObjects.prototype.nameChanged = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        this.koObjects()[index].text(this.getText(this.koObjects()[index]));
    };
    SurveyObjects.prototype.selectNextQuestion = function (isUp) {
        var question = this.getSelectedQuestion();
        var itemIndex = this.getItemIndex(question);
        if (itemIndex < 0)
            return question;
        var objs = this.koObjects();
        var newItemIndex = itemIndex + (isUp ? -1 : 1);
        if (newItemIndex < objs.length &&
            __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
            itemIndex = newItemIndex;
        }
        else {
            newItemIndex = itemIndex;
            while (newItemIndex < objs.length &&
                __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
                itemIndex = newItemIndex;
                newItemIndex += isUp ? 1 : -1;
            }
        }
        this.koSelected(objs[itemIndex]);
    };
    SurveyObjects.prototype.getAllElementCount = function (element) {
        var elements = this.getElements(element);
        var res = 0;
        for (var i = 0; i < elements.length; i++) {
            res += 1 + this.getAllElementCount(elements[i]);
        }
        return res;
    };
    SurveyObjects.prototype.getSelectedQuestion = function () {
        if (!this.koSelected())
            return null;
        var obj = this.koSelected().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question
            ? obj
            : null;
    };
    SurveyObjects.prototype.addItem = function (item, index) {
        if (index > this.koObjects().length) {
            this.koObjects.push(item);
        }
        else {
            this.koObjects.splice(index, 0, item);
        }
    };
    SurveyObjects.prototype.rebuild = function () {
        var objs = [];
        if (this.survey == null) {
            this.koObjects(objs);
            this.selectObject(null);
            return;
        }
        var root = this.createItem(this.survey, null);
        objs.push(root);
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            var pageItem = this.createItem(page, root);
            objs.push(pageItem);
            this.buildElements(objs, this.getElements(page), pageItem);
        }
        this.koObjects(objs);
        this.selectObject(this.survey);
    };
    SurveyObjects.prototype.getElements = function (element) {
        return __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getElements(element);
    };
    SurveyObjects.prototype.buildElements = function (objs, elements, parentItem) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var item = this.createItem(el, parentItem);
            objs.push(item);
            this.buildElements(objs, this.getElements(el), item);
        }
    };
    SurveyObjects.prototype.createItem = function (value, parent) {
        var item = new SurveyObjectItem();
        item.value = value;
        item.level = parent != null ? parent.level + 1 : 0;
        item.text = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.getText(item));
        return item;
    };
    SurveyObjects.prototype.getItemIndex = function (value) {
        if (!value)
            return -1;
        if (value["selectedElementInDesign"])
            value = value["selectedElementInDesign"];
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == value)
                return i;
        }
        return -1;
    };
    SurveyObjects.prototype.getText = function (item) {
        if (item.level == 0)
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.survey");
        var intend = SurveyObjects.intend;
        for (var i = 1; i < item.level; i++) {
            intend += SurveyObjects.intend;
        }
        var text = __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(item.value, this.showObjectTitles);
        if (this.getItemTextCallback) {
            text = this.getItemTextCallback(item.value, text);
        }
        return intend + text;
    };
    SurveyObjects.intend = ".";
    return SurveyObjects;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyLiveTester; });




var SurveyLiveTester = /** @class */ (function () {
    function SurveyLiveTester() {
        this.koIsRunning = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.koResultText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koResultData = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koResultViewType = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("table");
        this.koPages = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([]);
        this.koActivePage = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](null);
        this.showObjectTitles = false;
        var self = this;
        this.selectTestClick = function () {
            self.testAgain();
        };
        this.selectPageClick = function (pageItem) {
            if (self.survey) {
                if (self.survey.state == "starting") {
                    self.survey.start();
                }
                self.survey.currentPage = pageItem.page;
            }
        };
        this.koActivePage.subscribe(function (newValue) {
            if (!!newValue) {
                self.survey.currentPage = newValue;
            }
        });
        this.setPageDisable = function (option, item) {
            __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindingsToNode"](option, { disable: item.koDisabled }, item);
        };
        this.koLanguages = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.getLanguages());
        this.koActiveLanguage = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koActiveLanguage.subscribe(function (newValue) {
            if (self.survey.locale == newValue)
                return;
            self.survey.locale = newValue;
            self.koSurvey(self.survey);
        });
        this.survey = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"]();
        this.koSurvey = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.survey);
    }
    SurveyLiveTester.prototype.setJSON = function (json) {
        this.json = json;
        if (json != null) {
            if (json.cookieName) {
                delete json.cookieName;
            }
        }
        this.survey = json ? new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"](json) : new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"]();
        if (this.onSurveyCreatedCallback)
            this.onSurveyCreatedCallback(this.survey);
        var self = this;
        this.survey.onComplete.add(function (sender) {
            self.koIsRunning(false);
            self.koResultText(JSON.stringify(self.survey.data, null, 4));
            self.koResultData(self.survey.getPlainData().map(function (dataItem) {
                if (dataItem.isNode) {
                    dataItem.collapsed = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
                }
                return dataItem;
            }));
        });
        this.survey.onStarted.add(function (sender) {
            self.setActivePageItem(self.survey.currentPage, true);
        });
        this.survey.onCurrentPageChanged.add(function (sender, options) {
            self.koActivePage(options.newCurrentPage);
            self.setActivePageItem(options.oldCurrentPage, false);
            self.setActivePageItem(options.newCurrentPage, true);
        });
        this.survey.onPageVisibleChanged.add(function (sender, options) {
            self.updatePageItem(options.page);
        });
    };
    SurveyLiveTester.prototype.updatePageItem = function (page) {
        var item = this.getPageItemByPage(page);
        if (item) {
            item.koVisible(page.isVisible);
            item.koDisabled(!page.isVisible);
        }
    };
    SurveyLiveTester.prototype.show = function () {
        var pages = [];
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            pages.push({
                page: page,
                title: __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(page, this.showObjectTitles),
                koVisible: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](page.isVisible),
                koDisabled: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](!page.isVisible),
                koActive: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.survey.state == "running" && page === this.survey.currentPage)
            });
        }
        this.koPages(pages);
        this.koSurvey(this.survey);
        this.koActivePage(this.survey.currentPage);
        this.koActiveLanguage(this.survey.locale);
        this.koIsRunning(true);
    };
    Object.defineProperty(SurveyLiveTester.prototype, "testSurveyAgainText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.testSurveyAgain");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "surveyResultsText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.surveyResults");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "resultsTitle", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.resultsTitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "resultsName", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.resultsName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "resultsValue", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.resultsValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "resultsDisplayValue", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ed.resultsDisplayValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "selectPageText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ts.selectPage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyLiveTester.prototype, "showInvisibleElementsText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("ts.showInvisibleElements");
        },
        enumerable: true,
        configurable: true
    });
    SurveyLiveTester.prototype.selectTableClick = function (model) {
        model.koResultViewType("table");
    };
    SurveyLiveTester.prototype.selectJsonClick = function (model) {
        model.koResultViewType("text");
    };
    Object.defineProperty(SurveyLiveTester.prototype, "localeText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.locale");
        },
        enumerable: true,
        configurable: true
    });
    SurveyLiveTester.prototype.testAgain = function () {
        this.setJSON(this.json);
        this.show();
    };
    SurveyLiveTester.prototype.setActivePageItem = function (page, val) {
        var item = this.getPageItemByPage(page);
        if (item) {
            item.koActive(val);
        }
    };
    SurveyLiveTester.prototype.getPageItemByPage = function (page) {
        var items = this.koPages();
        for (var i = 0; i < items.length; i++) {
            if (items[i].page === page)
                return items[i];
        }
        return null;
    };
    SurveyLiveTester.prototype.getLanguages = function () {
        var res = [];
        var locales = __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["surveyLocalization"].getLocales();
        for (var i = 0; i < locales.length; i++) {
            var loc = locales[i];
            res.push({ value: loc, text: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getLocaleName(loc) });
        }
        return res;
    };
    SurveyLiveTester.prototype.koEventAfterRender = function (element, survey) {
        survey.onRendered.fire(self, {});
        survey["afterRenderSurvey"](element);
    };
    return SurveyLiveTester;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TranslationItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TranslationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslationGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translation; });




var TranslationItemBase = /** @class */ (function () {
    function TranslationItemBase(name) {
        this.name = name;
    }
    Object.defineProperty(TranslationItemBase.prototype, "isGroup", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TranslationItemBase.prototype.fillLocales = function (locales) { };
    TranslationItemBase.prototype.mergeLocaleWithDefault = function (loc) { };
    return TranslationItemBase;
}());

var TranslationItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TranslationItem, _super);
    function TranslationItem(name, locString, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.locString = locString;
        _this.defaultValue = defaultValue;
        _this.values = {};
        return _this;
    }
    Object.defineProperty(TranslationItem.prototype, "text", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getPropertyName(this.name);
        },
        enumerable: true,
        configurable: true
    });
    TranslationItem.prototype.koValue = function (loc) {
        if (!!this.values[loc])
            return this.values[loc];
        var val = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.locString.getLocaleText(loc));
        var self = this;
        val.subscribe(function (newValue) {
            self.locString.setLocaleText(loc, newValue);
        });
        this.values[loc] = val;
        return val;
    };
    TranslationItem.prototype.fillLocales = function (locales) {
        var json = this.locString.getJson();
        if (!json || typeof json === "string")
            return;
        for (var key in json) {
            if (!!key &&
                locales.indexOf(key) < 0 &&
                key !== __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["LocalizableString"].defaultLocale) {
                locales.push(key);
            }
        }
    };
    TranslationItem.prototype.mergeLocaleWithDefault = function (loc) {
        var locText = this.locString.getLocaleText(loc);
        if (!locText)
            return;
        this.locString.setLocaleText("", locText);
        this.locString.setLocaleText(loc, null);
    };
    return TranslationItem;
}(TranslationItemBase));

var TranslationGroup = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](TranslationGroup, _super);
    function TranslationGroup(name, obj, translation) {
        if (translation === void 0) { translation = null; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.obj = obj;
        _this.translation = translation;
        _this.koExpanded = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.reset();
        return _this;
    }
    Object.defineProperty(TranslationGroup.prototype, "items", {
        get: function () {
            return this.itemValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "locItems", {
        get: function () {
            var res = [];
            for (var i = 0; i < this.items.length; i++) {
                if (!this.items[i].isGroup) {
                    res.push(this.items[i]);
                }
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "groups", {
        get: function () {
            var res = [];
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].isGroup) {
                    res.push(this.items[i]);
                }
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "isGroup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "koLocales", {
        get: function () {
            return !!this.translation ? this.translation.koLocales : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "localeCount", {
        get: function () {
            if (!this.koLocales())
                return 0;
            var locales = this.koLocales();
            var res = 0;
            for (var i = 0; i < locales.length; i++) {
                if (locales[i].koVisible())
                    res++;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "locWidth", {
        get: function () {
            var count = this.localeCount;
            if (count < 2)
                return "100%";
            return Math.floor(100 / count).toString() + "%";
        },
        enumerable: true,
        configurable: true
    });
    TranslationGroup.prototype.getLocaleName = function (loc) {
        return this.translation
            ? this.translation.getLocaleName(loc)
            : __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getLocaleName(loc);
    };
    TranslationGroup.prototype.reset = function () {
        this.itemValues = [];
        this.fillItems();
    };
    TranslationGroup.prototype.fillLocales = function (locales) {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].fillLocales(locales);
        }
    };
    Object.defineProperty(TranslationGroup.prototype, "showAllStrings", {
        get: function () {
            return !!this.translation ? this.translation.showAllStrings : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationGroup.prototype, "hasItems", {
        get: function () {
            if (this.locItems.length > 0)
                return true;
            var groups = this.groups;
            for (var i = 0; i < groups.length; i++) {
                if (groups[i].hasItems)
                    return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TranslationGroup.prototype.mergeLocaleWithDefault = function (loc) {
        for (var i = 0; i < this.itemValues.length; i++) {
            this.itemValues[i].mergeLocaleWithDefault(loc);
        }
    };
    TranslationGroup.prototype.fillItems = function () {
        if (this.isItemValueArray(this.obj)) {
            this.createItemValues();
            return;
        }
        if (!this.obj || !this.obj.getType)
            return;
        var properties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getPropertiesByObj(this.obj);
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (!property.isSerializable && !property.isLocalizable)
                continue;
            if (property.isLocalizable) {
                if (!property.readOnly && property.visible) {
                    var defaultValue = this.getDefaultValue(property);
                    var locStr = (this.obj[property.serializationProperty]);
                    if (!locStr)
                        continue;
                    if (!this.showAllStrings && !defaultValue && locStr.isEmpty)
                        continue;
                    this.itemValues.push(new TranslationItem(property.name, locStr, defaultValue));
                }
            }
            else {
                var value = this.obj[property.name];
                if (!!value && Array.isArray(value) && value.length > 0) {
                    //If ItemValue array?
                    if (this.isItemValueArray(value)) {
                        var group = new TranslationGroup(property.name, value, this.translation);
                        if (group.hasItems) {
                            this.itemValues.push(group);
                        }
                    }
                    else {
                        this.createGroups(value, property);
                    }
                }
            }
        }
        this.itemValues.sort(function (a, b) {
            if (!a.name)
                return -1;
            if (!b.name)
                return 1;
            return a.name.localeCompare(b.name);
        });
    };
    TranslationGroup.prototype.getDefaultValue = function (property) {
        if (property.name == "title" &&
            property.isLocalizable &&
            !!property.serializationProperty) {
            var locStr = (this.obj[property.serializationProperty]);
            if (!!locStr &&
                this.obj.getType() != "page" &&
                (!!locStr.onGetTextCallback || locStr.onRenderedHtmlCallback))
                return this.obj["name"];
        }
        return "";
    };
    TranslationGroup.prototype.isItemValueArray = function (val) {
        return (!!val &&
            Array.isArray(val) &&
            val.length > 0 &&
            !!val[0] &&
            !!val[0]["getType"] &&
            !!val[0]["setData"] &&
            !!val[0]["setLocText"]);
    };
    TranslationGroup.prototype.createGroups = function (value, property) {
        for (var i = 0; i < value.length; i++) {
            var obj = value[i];
            if (!!obj && obj.getType) {
                var name = obj["name"];
                if (!name) {
                    name = property.name + "[" + i.toString() + "]";
                }
                var group = new TranslationGroup(name, obj, this.translation);
                if (group.hasItems) {
                    this.itemValues.push(group);
                }
            }
        }
    };
    TranslationGroup.prototype.createItemValues = function () {
        for (var i = 0; i < this.obj.length; i++) {
            var val = this.obj[i];
            var canAdd = this.showAllStrings || !val.locText.isEmpty || isNaN(val.value);
            if (canAdd) {
                this.itemValues.push(new TranslationItem(val.value, val.locText, val.value));
            }
        }
    };
    return TranslationGroup;
}(TranslationItemBase));

var Translation = /** @class */ (function () {
    function Translation(survey, showAllStrings) {
        if (showAllStrings === void 0) { showAllStrings = false; }
        this.koLocales = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]([
            { locale: "", koVisible: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true) }
        ]);
        this.koRoot = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        this.koShowAllStrings = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](showAllStrings);
        this.koIsEmpty = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        this.koAvailableLanguages = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koSelectedLanguageToAdd = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        this.koFilteredPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        this.koCanMergeLocaleWithDefault = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        this.koMergeLocaleWithDefaultText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            if (!this.koCanMergeLocaleWithDefault())
                return "";
            var locText = this.getLocaleName(this.defaultLocale);
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */]
                .getString("ed.translationMergeLocaleWithDefault")["format"](locText);
        }, this);
        this.koFilteredPages = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]([
            {
                value: null,
                text: this.showAllPagesText
            }
        ]);
        var self = this;
        this.koSelectedLanguageToAdd.subscribe(function (newValue) {
            if (!!newValue) {
                self.addLocale(newValue.value);
            }
        });
        this.koShowAllStrings.subscribe(function (newValue) {
            self.reset();
        });
        this.koFilteredPage.subscribe(function (newValue) {
            self.reset();
        });
        this.koExportToSCVFile = function () {
            self.exportToSCVFile("survey_translation.csv");
        };
        this.koImportFromSCVFile = function (el) {
            if (el.files.length < 1)
                return;
            self.importFromSCVFile(el.files[0]);
            el.value = "";
        };
        this.koMergeLocaleWithDefault = function () {
            self.mergeLocaleWithDefault();
        };
        this.survey = survey;
    }
    Object.defineProperty(Translation.prototype, "survey", {
        get: function () {
            return this.surveyValue;
        },
        set: function (val) {
            this.surveyValue = val;
            this.updateFilteredPages();
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "root", {
        get: function () {
            return this.rootValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "filteredPage", {
        get: function () {
            return this.koFilteredPage();
        },
        set: function (val) {
            this.koFilteredPage(val);
        },
        enumerable: true,
        configurable: true
    });
    Translation.prototype.reset = function () {
        var rootObj = !!this.filteredPage ? this.filteredPage : this.survey;
        var rootName = !!this.filteredPage ? rootObj["name"] : "survey";
        this.rootValue = new TranslationGroup(rootName, rootObj, this);
        this.root.reset();
        this.resetLocales();
        this.koIsEmpty(!this.root.hasItems);
        this.koRoot(this.root);
    };
    Object.defineProperty(Translation.prototype, "locales", {
        get: function () {
            var res = [];
            var locales = this.koLocales();
            for (var i = 0; i < locales.length; i++) {
                res.push(locales[i].locale);
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "defaultLocale", {
        get: function () {
            return !!this.survey.locale
                ? this.survey.locale
                : __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["surveyLocalization"].defaultLocale;
        },
        enumerable: true,
        configurable: true
    });
    Translation.prototype.getLocaleName = function (loc) {
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getLocaleName(loc, this.defaultLocale);
    };
    Translation.prototype.hasLocale = function (locale) {
        var locales = this.koLocales();
        for (var i = 0; i < locales.length; i++) {
            if (locales[i].locale == locale)
                return true;
        }
        return false;
    };
    Translation.prototype.addLocale = function (locale) {
        if (!this.hasLocale(locale)) {
            var locs = this.locales;
            locs.push(locale);
            this.setLocales(locs);
        }
    };
    Translation.prototype.resetLocales = function () {
        var locales = [""];
        this.root.fillLocales(locales);
        this.setLocales(locales);
    };
    Object.defineProperty(Translation.prototype, "selectLanguageOptionsCaption", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationAddLanguage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "showAllStrings", {
        get: function () {
            return this.koShowAllStrings();
        },
        set: function (val) {
            this.koShowAllStrings(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "showAllStringsText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationShowAllStrings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "showAllPagesText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationShowAllPages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "noStringsText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationNoStrings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "exportToCSVText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationExportToSCVButton");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Translation.prototype, "importFromCSVText", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("ed.translationImportFromSCVButton");
        },
        enumerable: true,
        configurable: true
    });
    Translation.prototype.exportToCSV = function () {
        var res = [];
        var title = "";
        var visLocales = this.getVisibleLocales();
        for (var i = 0; i < visLocales.length; i++) {
            title +=
                Translation.csvDelimiter +
                    (!!visLocales[i] ? visLocales[i] : "default");
        }
        res.push(title);
        var itemsHash = {};
        this.fillItemsHash("", this.root, itemsHash);
        for (var key in itemsHash) {
            var line = key;
            var item = itemsHash[key];
            for (var i = 0; i < visLocales.length; i++) {
                var val = item.locString.getLocaleText(visLocales[i]);
                if (!val && i == 0) {
                    val = item.defaultValue;
                }
                line += Translation.csvDelimiter + val;
            }
            res.push(line);
        }
        return res.join("\n");
    };
    Translation.prototype.importFromCSV = function (str) {
        if (!str)
            return;
        var lines = str.split("\n");
        if (lines.length < 2)
            return;
        var locales = this.readLocales(lines[0]);
        var translation = new Translation(this.survey, true);
        var itemsHash = [];
        this.fillItemsHash("", translation.root, itemsHash);
        for (var i = 1; i < lines.length; i++) {
            if (!lines[i])
                continue;
            var vals = lines[i].split(Translation.csvDelimiter);
            var name = vals[0].trim();
            if (!name)
                continue;
            var item = itemsHash[name];
            if (!item)
                continue;
            this.updateItemWithStrings(item, vals, locales);
        }
        this.reset();
        if (this.importFinishedCallback)
            this.importFinishedCallback();
    };
    Translation.prototype.exportToSCVFile = function (fileName) {
        var data = this.exportToCSV();
        var blob = new Blob([data], { type: "text/csv" });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        }
        else {
            var elem = window.document.createElement("a");
            elem.href = window.URL.createObjectURL(blob);
            elem.download = fileName;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    };
    Translation.prototype.importFromSCVFile = function (file) {
        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function (e) {
            self.importFromCSV(fileReader.result);
        };
        fileReader.readAsText(file);
    };
    Translation.prototype.mergeLocaleWithDefault = function () {
        if (!this.hasLocale(this.defaultLocale))
            return;
        this.root.mergeLocaleWithDefault(this.defaultLocale);
        this.koLocales([{ locale: "", koVisible: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true) }]);
        this.reset();
    };
    Translation.prototype.updateItemWithStrings = function (item, values, locales) {
        for (var i = 0; i < values.length - 1 && i < locales.length; i++) {
            var val = values[i + 1].trim();
            if (!val)
                continue;
            item.koValue(locales[i])(val);
        }
    };
    Translation.prototype.getVisibleLocales = function () {
        var res = [];
        var locales = this.koLocales();
        for (var i = 0; i < locales.length; i++) {
            if (locales[i].koVisible()) {
                res.push(locales[i].locale);
            }
        }
        return res;
    };
    Translation.prototype.readLocales = function (str) {
        var res = [];
        if (!str)
            return res;
        var locs = str.split(Translation.csvDelimiter);
        for (var i = 1; i < locs.length; i++) {
            var loc = locs[i].trim();
            if (loc == "default")
                loc = "";
            res.push(loc);
        }
        return res;
    };
    Translation.prototype.fillItemsHash = function (parentName, group, itemsHash) {
        var name = parentName;
        if (!!name)
            name += ".";
        name += group.name;
        var items = group.locItems;
        for (var i = 0; i < items.length; i++) {
            itemsHash[name + "." + items[i].name] = items[i];
        }
        var groups = group.groups;
        for (var i = 0; i < groups.length; i++) {
            this.fillItemsHash(name, groups[i], itemsHash);
        }
    };
    Translation.prototype.setLocales = function (locs) {
        var locales = this.koLocales();
        for (var i = 0; i < locs.length; i++) {
            var loc = locs[i];
            if (this.hasLocale(loc))
                continue;
            locales.push({ locale: loc, koVisible: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true) });
        }
        this.koLocales(locales);
        this.koCanMergeLocaleWithDefault(this.hasLocale(this.defaultLocale));
        this.updateAvailableTranlations();
    };
    Translation.prototype.updateAvailableTranlations = function () {
        var res = [];
        var locales = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["surveyLocalization"].getLocales();
        for (var i = 0; i < locales.length; i++) {
            var loc = locales[i];
            if (!loc)
                continue;
            if (this.hasLocale(loc))
                continue;
            if (loc == this.defaultLocale)
                continue;
            res.push({ value: loc, text: __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getLocaleName(loc) });
        }
        this.koSelectedLanguageToAdd(null);
        this.koAvailableLanguages(res);
        !!this.availableTranlationsChangedCallback &&
            this.availableTranlationsChangedCallback();
    };
    Translation.prototype.updateFilteredPages = function () {
        var res = [{ value: null, text: this.showAllPagesText }];
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            res.push({ value: page, text: page.name });
        }
        this.koFilteredPages(res);
    };
    Translation.csvDelimiter = "|";
    return Translation;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyUndoRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UndoRedoItem; });


var SurveyUndoRedo = /** @class */ (function () {
    function SurveyUndoRedo() {
        this.index = -1;
        this.maximumCount = 10;
        this.items = [];
        this.koCanUndo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koCanRedo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    }
    SurveyUndoRedo.prototype.clear = function () {
        this.items = [];
        this.koCanUndo(false);
        this.koCanRedo(false);
    };
    SurveyUndoRedo.prototype.setCurrent = function (survey, selectedObjName) {
        var item = new UndoRedoItem();
        item.surveyJSON = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(survey);
        item.selectedObjName = selectedObjName;
        if (this.index < this.items.length - 1) {
            this.items.splice(this.index + 1);
        }
        this.items.push(item);
        this.removeOldData();
        this.index = this.items.length - 1;
        this.updateCanUndoRedo();
    };
    SurveyUndoRedo.prototype.undo = function () {
        if (!this.canUndo)
            return null;
        return this.doUndoRedo(-1);
    };
    SurveyUndoRedo.prototype.redo = function () {
        if (!this.canRedo)
            return null;
        return this.doUndoRedo(1);
    };
    SurveyUndoRedo.prototype.updateCanUndoRedo = function () {
        this.koCanUndo(this.canUndo);
        this.koCanRedo(this.canRedo);
    };
    SurveyUndoRedo.prototype.doUndoRedo = function (dIndex) {
        this.index += dIndex;
        this.updateCanUndoRedo();
        return this.index >= 0 && this.index < this.items.length
            ? this.items[this.index]
            : null;
    };
    Object.defineProperty(SurveyUndoRedo.prototype, "canUndo", {
        get: function () {
            return this.index >= 1 && this.index < this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyUndoRedo.prototype, "canRedo", {
        get: function () {
            return this.items.length > 1 && this.index < this.items.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyUndoRedo.prototype.removeOldData = function () {
        if (this.items.length - 1 < this.maximumCount)
            return;
        this.items.splice(0, this.items.length - this.maximumCount - 1);
    };
    return SurveyUndoRedo;
}());

var UndoRedoItem = /** @class */ (function () {
    function UndoRedoItem() {
    }
    return UndoRedoItem;
}());



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var is = function (obj, type) { return Object.prototype.toString.call(obj).toLowerCase() === ("[object " + type + "]"); };

var addClass = function (el, cls) {
    var arr = el.className
    .split(/\s+/)
    .filter(function (c) { return !!c && c == cls; });

    if (!arr.length) {
        el.className += " " + cls;
    }
};

var removeClass = function (el, cls) {
    el.className = el.className
    .split(/\s+/)
    .filter(function (c) { return !!c && c != cls; })
    .join(' ');
};

var RModal = function RModal(el, opts) {
    var this$1 = this;

    this.opened = false;

    this.opts = {
        bodyClass: 'modal-open'
        , dialogClass: 'modal-dialog'
        , dialogOpenClass: 'bounceInDown'
        , dialogCloseClass: 'bounceOutUp'

        , focus: true
        , focusElements: [
            'a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])'
            , 'button:not([disabled])', 'select:not([disabled])'
            , 'textarea:not([disabled])', 'iframe', 'object', 'embed'
            , '*[tabindex]', '*[contenteditable]'
        ]

        , escapeClose: true
        , content: null
        , closeTimeout: 500
    };

    Object.keys(opts || {})
    .forEach(function (key) {
        /* istanbul ignore else */
        if (opts[key] !== undefined) {
            this$1.opts[key] = opts[key];
        }
    });

    this.overlay = el;
    this.dialog = el.querySelector(("." + (this.opts.dialogClass)));

    if (this.opts.content) {
        this.content(this.opts.content);
    }
};

RModal.prototype.open = function open (content) {
        var this$1 = this;

    this.content(content);

    if (!is(this.opts.beforeOpen, 'function')) {
        return this._doOpen();
    }

    this.opts.beforeOpen(function () {
        this$1._doOpen();
    });
};

RModal.prototype._doOpen = function _doOpen () {
    addClass(document.body, this.opts.bodyClass);

    removeClass(this.dialog, this.opts.dialogCloseClass);
    addClass(this.dialog, this.opts.dialogOpenClass);

    this.overlay.style.display = 'block';

    if (this.opts.focus) {
        this.focusOutElement = document.activeElement;
        this.focus();
    }

    if (is(this.opts.afterOpen, 'function')) {
        this.opts.afterOpen();
    }
    this.opened = true;
};

RModal.prototype.close = function close () {
        var this$1 = this;

    if (!is(this.opts.beforeClose, 'function')) {
        return this._doClose();
    }

    this.opts.beforeClose(function () {
        this$1._doClose();
    });
};

RModal.prototype._doClose = function _doClose () {
        var this$1 = this;

    removeClass(this.dialog, this.opts.dialogOpenClass);
    addClass(this.dialog, this.opts.dialogCloseClass);

    removeClass(document.body, this.opts.bodyClass);

    if (this.opts.focus) {
        this.focus(this.focusOutElement);
    }

    if (is(this.opts.afterClose, 'function')) {
        this.opts.afterClose();
    }

    this.opened = false;
    setTimeout(function () {
        this$1.overlay.style.display = 'none';
    }, this.opts.closeTimeout);
};

RModal.prototype.content = function content (html) {
    if (html === undefined) {
        return this.dialog.innerHTML;
    }

    this.dialog.innerHTML = html;
};

RModal.prototype.elements = function elements (selector, fallback) {
    fallback = fallback || window.navigator.appVersion.indexOf('MSIE 9.0') > -1;
    selector = is(selector, 'array') ? selector.join(',') : selector;

    return [].filter.call(
        this.dialog.querySelectorAll(selector)
        , function (element) {
            if (fallback) {
                var style = window.getComputedStyle(element);
                return style.display !== 'none' && style.visibility !== 'hidden';
            }

            return element.offsetParent !== null;
        }
    );
};

RModal.prototype.focus = function focus (el) {
    el = el || this.elements(this.opts.focusElements)[0] || this.dialog.firstChild;

    if (el && is(el.focus, 'function')) {
        el.focus();
    }
};

RModal.prototype.keydown = function keydown (ev) {
    if (this.opts.escapeClose && ev.which == 27) {
        this.close();
    }

    function stopEvent() {
        ev.preventDefault();
        ev.stopPropagation();
    }

    if (this.opened && ev.which == 9 && this.dialog.contains(ev.target)) {
        var elements = this.elements(this.opts.focusElements)
            , first = elements[0]
            , last = elements[elements.length - 1];

        if (first == last) {
            stopEvent();
        }
        else if (ev.target == first && ev.shiftKey) {
            stopEvent();
            last.focus();
        }
        else if (ev.target == last && !ev.shiftKey) {
            stopEvent();
            first.focus();
        }
    }
};

RModal.prototype.version = '1.0.31';
RModal.version = '1.0.31';

/* harmony default export */ __webpack_exports__["a"] = RModal;
//# sourceMappingURL=index.es.js.map


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sortablejs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_editor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_items_scss__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_items_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__image_items_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return imageItemsAdorner; });








var templateHtml = __webpack_require__(121);
var ImageItemInplaceEditor = /** @class */ (function () {
    function ImageItemInplaceEditor(name, question, item, rootElement, editor, itemsRoot) {
        var _this = this;
        this.name = name;
        this.question = question;
        this.item = item;
        this.rootElement = rootElement;
        this.editor = editor;
        this.itemsRoot = itemsRoot;
        this.imageChoosen = function (event) {
            var input = _this.itemsRoot.getElementsByClassName("svda-choose-file")[0];
            if (!window["FileReader"])
                return;
            if (!input || !input.files || input.files.length < 1)
                return;
            var files = [];
            for (var i = 0; i < input.files.length; i++) {
                files.push(input.files[i]);
            }
            _this.valueChanged && _this.valueChanged(files);
        };
    }
    ImageItemInplaceEditor.prototype.deleteItem = function (model, event) {
        if (model.question.choices.length > 1) {
            var index = model.question.choices.indexOf(model.item);
            model.question.choices.splice(index, 1);
            this.editor.onQuestionEditorChanged(this.question);
        }
    };
    Object.defineProperty(ImageItemInplaceEditor.prototype, "isLastItem", {
        get: function () {
            return this.question.choices.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    ImageItemInplaceEditor.prototype.chooseImage = function (model, event) {
        var fileInput = this.itemsRoot.getElementsByClassName("svda-choose-file")[0];
        fileInput.value = "";
        fileInput.onchange = this.imageChoosen;
        fileInput.click();
    };
    ImageItemInplaceEditor.prototype.getLocString = function (str) {
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString(str);
    };
    return ImageItemInplaceEditor;
}());
__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("image-item-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new ImageItemInplaceEditor(params.target[params.name], params.question, params.item, componentInfo.element, params.editor, params.itemsRoot);
            var property = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.findProperty("imageitemvalue", //params.target.getType(),
            params.name);
            model.valueChanged = function (files) {
                if (!files[0])
                    return;
                params.editor.uploadFiles(files, function (_, link) {
                    var options = {
                        propertyName: property.name,
                        obj: params.model,
                        value: link,
                        newValue: null,
                        doValidation: false
                    };
                    params.editor.onValueChangingCallback(options);
                    link = options.newValue === null ? options.value : options.newValue;
                    params.target[params.name] = link;
                    params.editor.onPropertyValueChanged(property, params.target, link);
                });
            };
            return model;
        }
    },
    template: templateHtml
});
var imageItemsAdorner = {
    getMarkerClass: function (model) {
        return typeof model.getType === "function" &&
            model.getType() === "imagepicker"
            ? "image_item_editable"
            : "";
    },
    getElementName: function (model) { return "item"; },
    afterRender: function (elements, model, editor) {
        var itemsRoot = elements[0].parentElement;
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function (e) { return e.preventDefault(); };
            var decoration = document.createElement("span");
            decoration.className = "svda-adorner-root";
            decoration.innerHTML =
                "<image-item-editor params='name: \"imageLink\", target: target, item: item, question: question, editor: editor, itemsRoot: itemsRoot'></image-item-editor>";
            elements[i].appendChild(decoration);
            __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({
                item: model.choices[i],
                question: model,
                target: model.choices[i],
                editor: editor,
                itemsRoot: itemsRoot
            }, decoration);
            __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
            editor.onAdornerRenderedCallback(model, "image-items", decoration, model.choices[i]);
        }
        var sortable = __WEBPACK_IMPORTED_MODULE_4_sortablejs___default.a.create(itemsRoot, {
            handle: ".svda-drag-handle",
            draggable: ".image_item_editable",
            animation: 150,
            onEnd: function (evt) {
                var choices = model.choices;
                var choice = choices[evt.oldIndex];
                choices.splice(evt.oldIndex, 1);
                choices.splice(evt.newIndex, 0, choice);
                editor.onQuestionEditorChanged(model);
            }
        });
        var addItemElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__item_editor__["b" /* createAddItemElement */])(function () {
            var fileInput = (itemsRoot.getElementsByClassName("svda-choose-file")[0]);
            fileInput.value = "";
            fileInput.onchange = function (event) {
                if (!fileInput || !fileInput.files || fileInput.files.length < 1)
                    return;
                var files = [];
                for (var i_1 = 0; i_1 < fileInput.files.length; i_1++) {
                    files.push(fileInput.files[i_1]);
                }
                var itemText = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["surveyLocalization"].getString("choices_Item");
                var nextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* getNextValue */])(itemText, (model.choices || []).map(function (c) { return c.value; }));
                var itemValue = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ItemValue"](nextValue, undefined, "imageitemvalue");
                itemValue.locOwner = {
                    getLocale: function () {
                        if (!!model["getLocale"])
                            return model.getLocale();
                        return "";
                    },
                    getMarkdownHtml: function (text) {
                        return text;
                    },
                    getProcessedText: function (text) {
                        return text;
                    }
                };
                model.choices = model.choices.concat([itemValue]);
                itemValue = model.choices[model.choices.length - 1];
                editor.onQuestionEditorChanged(model);
                editor.onItemValueAddedCallback("choices", itemValue);
                var property = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.findProperty("imageitemvalue", "imageLink");
                editor.uploadFiles(files, function (_, link) {
                    var options = {
                        propertyName: property.name,
                        obj: itemValue,
                        value: link,
                        newValue: null,
                        doValidation: false
                    };
                    editor.onValueChangingCallback(options);
                    link = options.newValue === null ? options.value : options.newValue;
                    itemValue["imageLink"] = link;
                    editor.onPropertyValueChanged(property, itemValue, link);
                });
            };
            fileInput.click();
        });
        addItemElement.style.width = (model["imageWidth"] || 200) + 10 + "px";
        addItemElement.style.height = (model["imageHeight"] || 150) + 10 + "px";
        addItemElement.style.lineHeight = addItemElement.style.height;
        itemsRoot.appendChild(addItemElement);
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.className = "svda-choose-file";
        input.style.position = "absolute";
        input.style.opacity = "0";
        itemsRoot.appendChild(input);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__surveyjsObjects__["b" /* registerAdorner */])("image-items", imageItemsAdorner);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_editor_scss__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__label_editor_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return labelAdorner; });



var labelAdorner = {
    getMarkerClass: function (model) {
        if (model.getType() === "boolean") {
            return "label_editable";
        }
        return "";
    },
    getElementName: function (model) { return "label"; },
    afterRender: function (elements, model, editor) {
        var decoration = document.createElement("span");
        decoration.innerHTML =
            "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
        elements[0].onclick = function (e) { return e.preventDefault(); };
        elements[0].appendChild(decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({ model: model, editor: editor }, decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
        editor.onAdornerRenderedCallback(model, "label", decoration);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__["b" /* registerAdorner */])("label", labelAdorner);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_actions_scss__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_actions_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__question_actions_scss__);
/* unused harmony export QuestionActionsAdorner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questionActionsAdorner; });
/* unused harmony export panelActionsAdorner */




var templateHtml = __webpack_require__(123);
var QuestionActionsAdorner = /** @class */ (function () {
    function QuestionActionsAdorner(question, editor) {
        this.question = question;
        this.editor = editor;
        this.actions = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        var surveyForDesigner = editor.survey;
        this.actions(surveyForDesigner.getMenuItems(question));
    }
    QuestionActionsAdorner.prototype.getStyle = function (model) {
        if (!!model.icon) {
            return __WEBPACK_IMPORTED_MODULE_0_knockout__["unwrap"](model.icon);
        }
        return "icon-action" + model.name;
    };
    QuestionActionsAdorner.prototype.localize = function (entryString) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(entryString);
    };
    return QuestionActionsAdorner;
}());

__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("question-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new QuestionActionsAdorner(params.question, params.editor);
            return model;
        }
    },
    template: templateHtml
});
var questionActionsAdorner = {
    getMarkerClass: function (model) {
        return !model.isPanel ? "question_actions" : "";
    },
    getElementName: function (model) { return "mainRoot"; },
    afterRender: function (elements, model, editor) {
        var decoration = document.createElement("div");
        decoration.className = "svda-question-actions";
        decoration.innerHTML =
            "<question-actions params='question: model, editor: editor'></question-actions>";
        elements[0].appendChild(decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({ model: model, editor: editor }, decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
        editor.onAdornerRenderedCallback(model, "question-actions", decoration);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__["b" /* registerAdorner */])("question-actions", questionActionsAdorner);
var panelActionsAdorner = {
    getMarkerClass: function (model) {
        return !!model.isPanel ? "panel_actions" : "";
    },
    getElementName: function (model) { return "container"; },
    afterRender: questionActionsAdorner.afterRender
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__surveyjsObjects__["b" /* registerAdorner */])("panel-actions", panelActionsAdorner);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title_editor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_item_editor_scss__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_item_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rating_item_editor_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ratingItemAdorner; });








var templateHtml = __webpack_require__(124);
var RatingItemEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](RatingItemEditor, _super);
    function RatingItemEditor(name, question, item, rootElement, editor) {
        var _this = _super.call(this, name, rootElement) || this;
        _this.question = question;
        _this.item = item;
        _this.editor = editor;
        return _this;
    }
    RatingItemEditor.prototype.deleteItem = function (model, event) {
        var question = model.question;
        var index = question.visibleRateValues
            .map(function (item) { return item.value; })
            .indexOf(model.item.value);
        if (question.rateValues.length === 0 &&
            index === question.visibleRateValues.length - 1) {
            question.rateMax -= question.rateStep;
        }
        else {
            if (question.rateValues.length === 0) {
                question.rateValues = question.visibleRateValues;
            }
            question.rateValues.splice(index, 1);
        }
        model.editor.onQuestionEditorChanged(question);
    };
    Object.defineProperty(RatingItemEditor.prototype, "isLastItem", {
        get: function () {
            return this.question.visibleRateValues.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    return RatingItemEditor;
}(__WEBPACK_IMPORTED_MODULE_5__title_editor__["b" /* TitleInplaceEditor */]));
__WEBPACK_IMPORTED_MODULE_1_knockout__["components"].register("rating-item-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new RatingItemEditor(params.target[params.name], params.question, params.item, componentInfo.element, params.editor);
            var question = params.question;
            var property = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findProperty(params.target.getType(), params.name);
            model.valueChanged = function (newValue) {
                if (question.rateValues.length === 0) {
                    question.rateValues = question.visibleRateValues;
                    var index = question.rateValues
                        .map(function (item) { return item.value; })
                        .indexOf(params.item.value);
                    question.rateValues[index] = params.target;
                }
                params.target[params.name] = newValue;
                params.editor.onQuestionEditorChanged(question);
            };
            return model;
        }
    },
    template: templateHtml
});
var createAddItemHandler = function (question, onItemAdded, onItemAdding) {
    if (onItemAdding === void 0) { onItemAdding = null; }
    return function () {
        if (question.rateValues.length === 0) {
            question.rateMax += question.rateStep;
        }
        else {
            var nextValue = null;
            var values = question.rateValues.map(function (item) {
                return item.itemValue;
            });
            var itemText = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["surveyLocalization"].getString("choices_Item");
            nextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* getNextValue */])(itemText, values);
            var itemValue = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"](nextValue);
            !!onItemAdding && onItemAdding(itemValue);
            itemValue.locOwner = {
                getLocale: function () {
                    if (!!question["getLocale"])
                        return question.getLocale();
                    return "";
                },
                getMarkdownHtml: function (text) {
                    return text;
                },
                getProcessedText: function (text) {
                    return text;
                }
            };
            question.rateValues = question.rateValues.concat([itemValue]);
        }
        !!onItemAdded && onItemAdded(itemValue);
    };
};
var ratingItemAdorner = {
    getMarkerClass: function (model) {
        return !!model.visibleRateValues ? "item_editable" : "";
    },
    getElementName: function (model) { return "itemText"; },
    afterRender: function (elements, model, editor) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function (e) { return e.preventDefault(); };
            var decoration = document.createElement("span");
            decoration.innerHTML =
                "<rating-item-editor params='name: \"text\", target: target, item: item, question: question, editor: editor'></rating-item-editor>";
            elements[i].appendChild(decoration);
            var item = model.visibleRateValues[i];
            __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"]({
                item: item,
                question: model,
                target: item,
                editor: editor
            }, decoration);
            __WEBPACK_IMPORTED_MODULE_1_knockout__["tasks"].runEarly();
            editor.onAdornerRenderedCallback(model, "rating-item", decoration, item);
        }
        var addNew = document.createElement("span");
        addNew.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.addItem");
        addNew.className =
            "svda-add-new-rating-item icon-inplace-add-item svd-primary-icon";
        addNew.onclick = createAddItemHandler(model, function (itemValue) {
            editor.onQuestionEditorChanged(model);
            editor.onItemValueAddedCallback("rateValues", itemValue, model.visibleRateValues);
        }, function (itemValue) {
            editor.onItemValueAddedCallback("rateValues", itemValue, model.visibleRateValues);
        });
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElem.setAttribute("class", "svd-svg-icon");
        svgElem.style.width = "12px";
        svgElem.style.height = "12px";
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#icon-inplaceplus");
        svgElem.appendChild(useElem);
        addNew.appendChild(svgElem);
        var parent = elements[0].parentElement.parentElement;
        parent.appendChild(addNew);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__surveyjsObjects__["b" /* registerAdorner */])("rating-item", ratingItemAdorner);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sortablejs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_editor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_items_editor_scss__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_items_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__select_items_editor_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectItemsEditorAdorner; });






var templateHtml = __webpack_require__(125);
__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("select-items-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isExpanded = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
            var choices = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"](params.question.choices);
            var otherText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](params.question.otherText);
            var sortableElement = componentInfo.element.parentElement.getElementsByClassName("svda-select-items-collection")[0];
            var sortable = null;
            return {
                choices: choices,
                valueName: params.valueName,
                question: params.question,
                editor: params.editor,
                isExpanded: isExpanded,
                toggle: function () { return isExpanded(!isExpanded()); },
                addItem: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__item_editor__["c" /* createAddItemHandler */])(params.question, function (itemValue) {
                    choices(params.question.choices);
                }, function (itemValue) {
                    params.editor.onItemValueAddedCallback("choices", itemValue, params.question.choices);
                }),
                getLocString: function (str) { return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString(str); },
                choicesRendered: function () {
                    if (sortable) {
                        sortable.destroy();
                    }
                    sortable = __WEBPACK_IMPORTED_MODULE_1_sortablejs___default.a.create(sortableElement, {
                        handle: ".svda-drag-handle",
                        draggable: ".item_draggable",
                        animation: 150,
                        onEnd: function (evt) {
                            var newChoices = [].concat(params.question.choices);
                            var choice = newChoices[evt.oldIndex];
                            newChoices.splice(evt.oldIndex, 1);
                            newChoices.splice(evt.newIndex, 0, choice);
                            params.question.choices = newChoices;
                            choices(newChoices);
                        }
                    });
                },
                valueChanged: function (itemValue, propertyName, newValue) {
                    var newChoices = [].concat(params.question.choices);
                    choices([]);
                    choices(newChoices);
                    __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
                    params.editor.onAdornerRenderedCallback(params.question, "select-choices", componentInfo.element);
                },
                otherText: otherText,
                otherValueChanged: function (itemValue, propertyName, newValue) {
                    otherText(params.question.otherText);
                }
            };
        }
    },
    template: templateHtml
});
var selectItemsEditorAdorner = {
    getMarkerClass: function (model) {
        return !!model.parent && !!model.choices ? "select_items_editor" : "";
    },
    getElementName: function (model) { return "selectWrapper"; },
    afterRender: function (elements, model, editor) {
        elements[0].onclick = function (e) { return e.preventDefault(); };
        var decoration = document.createElement("div");
        decoration.innerHTML =
            "<select-items-editor params='question: question, editor: editor, valueName: \"" +
                (__WEBPACK_IMPORTED_MODULE_4__item_editor__["a" /* itemAdorner */].inplaceEditForValues ? "value" : "text") +
                "\"'></select-items-editor>";
        elements[0].appendChild(decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"]({
            question: model,
            editor: editor
        }, decoration);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["tasks"].runEarly();
        editor.onAdornerRenderedCallback(model, "select-choices", decoration);
    }
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__surveyjsObjects__["b" /* registerAdorner */])("select-choices", selectItemsEditorAdorner);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectEditor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveylive__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyObjects__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionconverter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stylesmanager__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__adorners_item_editor__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__translation__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(127);





/**
 * Survey Editor is WYSIWYG editor.
 */
var SurveyEditor = /** @class */ (function () {
    /**
     * The Survey Editor constructor.
     * @param renderedElement HtmlElement or html element id where Survey Editor will be rendered
     * @param options Survey Editor options. The following options are available: showJSONEditorTab,
     * showTestSurveyTab, showEmbededSurveyTab, showTranslationTab, inplaceEditForValues, useTabsInElementEditor, showPropertyGrid,
     * questionTypes, showOptions, generateValidJSON, isAutoSave, designerHeight, showErrorOnFailedSave, showObjectTitles, showTitlesInExpressions
     */
    function SurveyEditor(renderedElement, options) {
        if (renderedElement === void 0) { renderedElement = null; }
        if (options === void 0) { options = null; }
        var _this = this;
        this._haveCommercialLicense = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.surveyValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.stateValue = "";
        this.dragDropHelper = null;
        this.showJSONEditorTabValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.showTestSurveyTabValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.showEmbededSurveyTabValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.showTranslationTabValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.select2 = null;
        this.alwaySaveTextInPropertyEditorsValue = false;
        this.showApplyButtonValue = true;
        this.isRTLValue = false;
        /**
         * If set to true (default value) the Editor scrolls to a new element. A new element can be added from Toolbox or by copying.
         */
        this.scrollToNewElement = true;
        /**
         * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
         * @see useTabsInElementEditor
         */
        this.useTabsInElementEditor = false;
        /**
         * You need to set this property to true if you want to show titles instead of names in pages editor and object selector.
         */
        this.showObjectTitles = false;
        /**
         * You need to set this property to true if you want to show titles instead of names in expression editor.
         */
        this.showTitlesInExpressions = false;
        /**
         * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
         * @see showEmbededSurveyTab
         */
        this.surveyId = null;
        /**
         * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
         * @see showEmbededSurveyTab
         */
        this.surveyPostId = null;
        /**
         * The event is called before showing a property in the Property Grid or in Question Editor.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj the survey object, Survey, Page, Panel or Question
         * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
         * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid and in Question Editor.
         */
        this.onShowingProperty = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Obsolete, please use onShowingProperty event.
         * The event is called before showing a property in the Property Grid or in Question Editor.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj the survey object, Survey, Page, Panel or Question
         * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
         * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
         * @see onShowingProperty
         */
        this.onCanShowProperty = this.onShowingProperty;
        /**
         * The event is called when editor tab has been rendered.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.tabName the name of the rendered tab
         * <br/> options.elements the rendered elements
         * <br/> options.model current context model
         * <br/> options.tabData the data of the rendered tab
         */
        this.onEditorTabRendered = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
         * You may changed it and make the property editor read only or enabled for a particular object.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj the survey object, Survey, Page, Panel or Question
         * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
         * <br/> options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
         */
        this.onGetPropertyReadOnly = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj the survey object, Survey, Page, Panel or Question
         * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
         * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
         * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
         */
        this.onCustomSortProperty = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event allows you modify DOM element for a property in the Property Grid. For example, you may change it's styles.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj the survey object, Survey, Page, Panel or Question
         * <br/> options.htmlElement the html element (html table row in our case) that renders the property display name and it's editor.
         * <br/> options.property object property (Survey.JsonObjectProperty object).
         * <br/> options.propertyEditor the property Editor.
         */
        this.onPropertyAfterRender = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.element an instance of the deleting element
         * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
         * <br/> options.allowing set it to false to cancel the element deleting
         */
        this.onElementDeleting = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.question a new added survey question. Survey.Question object
         * <br/> options.page the survey Page object where question has been added.
         */
        this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called when an end-user double click on an element (question/panel).
         * <br/> sender the survey editor object that fires the event
         * <br/> options.element an instance of the element
         */
        this.onElementDoubleClick = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
         * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.property  the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
         * <br/> options.newItem a new created Survey.ItemValue object.
         * <br/> options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
         */
        this.onItemValueAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.matrix a matrix question where column is located, matrix.columns.
         * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
         * <br/> options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
         */
        this.onMatrixColumnAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.panel a new added survey panel. Survey.Panel object
         * <br/> options.page the survey Page object where question has been added.
         */
        this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called on adding a new page into the survey.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.page the new survey Page object.
         */
        this.onPageAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
         * <br/> sender the survey editor object that fires the event
         * <br/> options object contains the information about certain modifications
         * <br/> options.type contains string constant describing certain modification
         * <br/> Available values:
         * <br/>
         * <br/> options.type: "ADDED_FROM_TOOLBOX"
         * <br/> options.question: newly added question
         * <br/>
         * <br/> options.type: "PAGE_ADDED"
         * <br/> options.newValue: newly created page
         * <br/>
         * <br/> options.type: "PAGE_MOVED"
         * <br/> options.page: page has been moved
         * <br/> options.indexFrom: pevious index
         * <br/> options.indexTo: new index
         * <br/>
         * <br/> options.type: "QUESTION_CONVERTED"
         * <br/> options.className: the converted class name
         * <br/> options.oldValue: pevious object
         * <br/> options.newValue: the new object, converted from oldVale to the given class name
         * <br/>
         * <br/> options.type: "QUESTION_CHANGED_BY_EDITOR"
         * <br/> options.question: question has been edited in the popup question editor
         * <br/>
         * <br/> options.type: "PROPERTY_CHANGED"
         * <br/> options.name: the name of the property has been changed
         * <br/> options.target: the object containing the changed property
         * <br/> options.oldValue: the previous value of the changed property
         * <br/> options.newValue: the new value of the changed property
         * <br/>
         * <br/> options.type: "OBJECT_DELETED"
         * <br/> options.target: deleted object
         * <br/>
         * <br/> options.type: "VIEW_TYPE_CHANGED"
         * <br/> options.newType: new type of the editor view: editor or designer
         * <br/>
         * <br/> options.type: "DO_DROP"
         * <br/> options.page: the page of the drap/drop operation
         * <br/> options.source: the source dragged object
         * <br/> options.target: the drop target
         * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
         * <br/>
         * <br/> options.type: "TRANSLATIONS_CHANGED"
         */
        this.onModified = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is fired when the Survey Editor is initialized and a survey object (Survey.Survey) is created.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.survey  the survey object showing in the editor.
         */
        this.onDesignerSurveyCreated = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is fired when the Survey Editor runs the survey in the test mode.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.survey  the survey object showing in the "Test survey" tab.
         */
        this.onTestSurveyCreated = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to control Property Editors UI.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.editorOptions  options that can be changed.
         * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
         * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
         * <br/> options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Fast Entry" tab for "choices" property by default.
         */
        this.onSetPropertyEditorOptions = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.value the property value.
         * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
         * @see onPropertyValueChanging
         */
        this.onPropertyValidationCustomError = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.value the property value.
         * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
         * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
         * @see onPropertyValidationCustomError
         */
        this.onPropertyValueChanging = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.editor the instance of Property Editor.
         * @see onPropertyValueChanging
         */
        this.onPropertyEditorObjectAssign = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to modify the survey that used on setting value for condition/expression properties, like visibleIf, enableIf and so on.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.editor the instance of Property Editor.
         * <br/> options.valueQuestionName the name of the question that shows in the survey for choosing the value
         * <br/> options.survey the instance of the survey that allows to choose the value. You may modify it before it shows to the end-user
         */
        this.onConditionValueSurveyCreated = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to modify the list (name and titles) od the questions available in a condition editor.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.editor the instance of Property Editor.
         * <br/> options.list the the list of the questions available for condition
         */
        this.onConditionQuestionsGetList = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to process key down event in a property editor
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName  the name of the edited property.
         * <br/> options.editor the instance of Property Editor.
         * <br/> options.event the instance of mouse event.
         */
        this.onPropertyEditorKeyDown = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to disable some operations for an element (question/panel).
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object question/panel
         * <br/> options.allowDelete set it to false to disable deleting the object
         * <br/> options.allowEdit set it to false to disable calling the modal Editor
         * <br/> options.allowCopy set it to false to disable copying the object
         * <br/> options.allowAddToToolbox set it to false to disable adding element to Toolbox
         * <br/> options.allowDragging set it to false to disable adding element to Toolbox
         * <br/> options.allowChangeType set it to false to disable changing element type
         */
        this.onElementAllowOperations = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to add/remove/modify the element (question/panel) menu items.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.items the list of menu items. It has two requried fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
         * @see onElementAllowOperations
         */
        this.onDefineElementMenuItems = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to show the description on the top or/and bottom of the property modal editor.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object which property is edited in the Property Editor.
         * <br/> options.propertyName the property name
         * <br/> options.htmlTop the html  that you want to see on the top of the modal window
         * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
         */
        this.onShowPropertyModalEditorDescription = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to change the text showing in the dropdown of the property grid.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.obj  the survey object.
         * <br/> options.text the current object text, commonly it is a name. You must change this attribute
         */
        this.onGetObjectTextInPropertyGrid = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.koAutoSave = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        /**
         * The event is called when end-user addes new element (question or panel) into the survey toolbox.
         * It calls before adding the element into toolbox and it allows to change the toolbox item attributes using options.itemOptions parameter
         * <br/> sender the survey editor object that fires the event
         * <br/> options.element is a new added element
         * <br/> options.itemOptions a json object that allows you to override question properties. Attributes are: name, title, isCopied, iconName, json and category.
         * @see onCustomElementAddedIntoToolbox
         */
        this.onCustomElementAddingIntoToolbox = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is called when end-user addes new element (question or panel) into the survey toolbox.
         * <br/> sender the survey editor object that fires the event
         * <br/> options.element is a new added element
         * @see onCustomElementAddingIntoToolbox
         */
        this.onCustomElementAddedIntoToolbox = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The event is fired on uploading the file. There are two properties in options: options.name options.callback.
         * <br/> sender the survey editor object that fires the event
         * <br/>  name: name, file: file, accept: accept
         * <br/> file the Javascript File object
         * <br/> callback called on upload complete
         * @see uploadFile
         */
        this.onUploadFile = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * The method is called when the translation from csv file is imported.
         * @see translation
         * @see showTranslationTab
         */
        this.onTranslationImported = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to control drag&drop operations.
         * <br/> sender the survey editor object that fires the event.
         * <br/> options.survey the editing survey object.
         * <br/> options.allow set it to false to disable dragging.
         * <br/> options.target a target element that is dragging.
         * <br/> options.source a source element. It can be null, if it is a new element, dragging from toolbox.
         * <br/> options.parent a page or panel where target element is dragging.
         * <br/> options.insertBefore an element before the target element is dragging. It can be null if parent container (page or panel) is empty or dragging an element under the last element of the container.
         * <br/> options.insertAfter an element after the target element is dragging. It can be null if parent container (page or panel) is empty or dragging element to the top of the parent container.
         */
        this.onDragDropAllow = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Use this event to get access rendered adorder.
         * <br/> sender the survey editor object that fires the event.
         * <br/> options.survey the editing survey object.
         * <br/> options.question the survey element of the adorner.
         * <br/> options.adorner the adorner id.
         * <br/> options.element a root adorner element.
         * <br/> options.context a context for adorner element, e.g. current item of a select base question.
         */
        this.onAdornerRendered = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        /**
         * Set it to false to suppress an alert message about error on saving the survey into database.
         */
        this.showErrorOnFailedSave = true;
        this.koShowState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.isPageUpdating = false;
        this.koState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.tabs = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.themeCss = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return ["bootstrap", "bootstrapmaterial"].indexOf(__WEBPACK_IMPORTED_MODULE_17__stylesmanager__["a" /* StylesManager */].currentTheme()) === -1
                ? "sv_default_css"
                : "sv_" + __WEBPACK_IMPORTED_MODULE_17__stylesmanager__["a" /* StylesManager */].currentTheme() + "_css";
        });
        /**
         * The list of toolbar items. You may add/remove/replace them.
         * @see IToolbarItem
         */
        this.toolbarItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.saveNo = 0;
        /**
         * Add a new page into the editing survey.
         */
        this.addPage = function () {
            var name = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPageName(_this.pages());
            var page = _this.survey.addNewPage(name);
            _this.pages.valueHasMutated(); //TODO why this is need ? (ko problem)
            _this.addPageToUI(page);
            _this.setModified({ type: "PAGE_ADDED", newValue: page });
        };
        this.deletePage = function () {
            _this.deleteCurrentObject();
            _this.pages.valueHasMutated(); //TODO why this is need ? (ko problem)
        };
        this.movePage = function (indexFrom, indexTo) {
            var page = _this.pages()[indexTo];
            _this.surveyObjects.survey = null; // TODO may be we don't need this hack
            _this.surveyObjects.survey = _this.survey;
            _this.surveyObjects.selectObject(page);
            _this.setModified({
                type: "PAGE_MOVED",
                page: page,
                indexFrom: indexFrom,
                indexTo: indexTo
            });
        };
        this.newQuestions = [];
        this.newPanels = [];
        this.isCurrentPageEmpty = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return !!_this.surveyValue() &&
                !!_this.surveyValue().koCurrentPage() &&
                _this.getRows(_this.surveyValue().koCurrentPage()).length === 0;
        });
        this.showQuestionEditor = function (element, onClose) {
            if (onClose === void 0) { onClose = null; }
            var self = _this;
            var elWindow = _this.renderedElement
                ? (_this.renderedElement.querySelector("#surveyquestioneditorwindow"))
                : null;
            var isCanceled = true;
            _this.questionEditorWindow.show(element, elWindow, function (question) {
                self.onQuestionEditorChanged(question);
                isCanceled = false;
            }, _this, function () {
                if (onClose)
                    onClose(isCanceled);
            });
        };
        //TODO why this is need ? (ko problem)
        this.dirtyPageUpdate = function () {
            _this.isPageUpdating = true;
            try {
                var selectedObject = _this.koSelectedObject().value;
                if (__WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(selectedObject) !== __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
                    if (__WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(selectedObject) === __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question &&
                        !!selectedObject["koElementType"]) {
                        selectedObject["koElementType"].notifySubscribers();
                    }
                    return;
                }
                var index = _this.pages.indexOf(selectedObject);
                _this.pages.splice(index, 1);
                _this.pages.splice(index, 0, selectedObject);
                _this.surveyObjects.selectObject(selectedObject);
            }
            finally {
                _this.isPageUpdating = false;
            }
        };
        /**
         * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
         * @param page A copied Survey.Page
         */
        this.copyPage = function (page) {
            var newPage = _this.copyElement(page);
            var index = _this.pages.indexOf(page);
            if (index > -1) {
                _this.pages.splice(index + 1, 0, newPage);
            }
            else {
                _this.pages.push(newPage);
            }
            _this.addPageToUI(newPage);
            _this.setModified({ type: "PAGE_ADDED", newValue: newPage });
            return newPage;
        };
        this.onEditorTabRenderedCallback = function (tabName, elements, model, tabData) {
            _this.onEditorTabRendered.fire(_this, {
                tabName: tabName,
                elements: elements,
                model: model,
                tabData: tabData
            });
        };
        this.koShowOptions = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koGenerateValidJSON = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.koShowPropertyGrid = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.koDesignerHeight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koShowPagesToolbox = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.setOptions(options);
        this.koCanDeleteObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_17__stylesmanager__["a" /* StylesManager */].applyTheme(__WEBPACK_IMPORTED_MODULE_17__stylesmanager__["a" /* StylesManager */].currentTheme());
        this.pages = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koShowSaveButton = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koTestSurveyWidth = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("100%");
        this.saveButtonClick = function () {
            self.doSave();
        };
        this.koObjects = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        window["sel"] = this.koSelectedObject;
        this.koSelectedObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koSelectedObject.subscribe(function (newValue) {
            self.selectedObjectChanged(newValue != null ? newValue.value : null);
        });
        this.koGenerateValidJSON.subscribe(function (newValue) {
            if (!self.options)
                self.options = {};
            self.options.generateValidJSON = newValue;
            if (self.generateValidJSONChangedCallback)
                self.generateValidJSONChangedCallback(newValue);
        });
        this.surveyObjects = new __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */](this.koObjects, this.koSelectedObject, this.showObjectTitles);
        this.surveyObjects.getItemTextCallback = function (obj, text) {
            var options = { obj: obj, text: text };
            self.onGetObjectTextInPropertyGrid.fire(self, options);
            return options.text;
        };
        this.selectPage = function (page) {
            _this.surveyObjects.selectObject(page);
        };
        this.undoRedo = new __WEBPACK_IMPORTED_MODULE_10__undoredo__["a" /* SurveyUndoRedo */]();
        this.selectedObjectEditorValue = new __WEBPACK_IMPORTED_MODULE_2__objectEditor__["a" /* SurveyObjectEditor */](this);
        this.selectedObjectEditorValue.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.selectedObjectEditorValue.onSortPropertyCallback = function (obj, property1, property2) {
            return self.onCustomSortPropertyObjectProperty(obj, property1, property2);
        };
        this.selectedObjectEditorValue.onPropertyValueChanged.add(function (sender, options) {
            options.updatedValue = self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        this.selectedObjectEditorValue.onAfterRenderCallback = function (obj, htmlElement, prop) {
            if (self.onPropertyAfterRender.isEmpty)
                return;
            var options = {
                obj: obj,
                htmlElement: htmlElement,
                property: prop.property,
                propertyEditor: prop.editor
            };
            self.onPropertyAfterRender.fire(self, options);
        };
        this.questionEditorWindow = new __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__["a" /* SurveyPropertyEditorShowWindow */]();
        this.questionEditorWindow.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.surveyLive = new __WEBPACK_IMPORTED_MODULE_3__surveylive__["a" /* SurveyLiveTester */]();
        this.surveyLive.showObjectTitles = this.showObjectTitles;
        this.surveyEmbeding = new __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__["a" /* SurveyEmbedingWindow */]();
        this.translationValue = new __WEBPACK_IMPORTED_MODULE_19__translation__["a" /* Translation */](new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"]());
        this.translation.importFinishedCallback = function () {
            self.onTranslationImported.fire(self, {});
        };
        this.translation.availableTranlationsChangedCallback = function () {
            _this.setModified({ type: "TRANSLATIONS_CHANGED" });
        };
        this.toolboxValue = new __WEBPACK_IMPORTED_MODULE_13__questionToolbox__["a" /* QuestionToolbox */](this.options && this.options.questionTypes
            ? this.options.questionTypes
            : null);
        this.koViewType = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("designer");
        this.koIsShowDesigner = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return self.koViewType() == "designer";
        });
        this.generateValidJSONClick = function () {
            self.koGenerateValidJSON(true);
        };
        this.generateReadableJSONClick = function () {
            self.koGenerateValidJSON(false);
        };
        this.runSurveyClick = function () {
            self.showLiveSurvey();
        };
        this.deleteObjectClick = function () {
            self.deleteCurrentObject();
        };
        this.draggingToolboxItem = function (item, e) {
            self.doDraggingToolboxItem(item.json, e);
        };
        this.clickToolboxItem = function (item) {
            self.doClickToolboxItem(item.json);
        };
        this.dragEnd = function (item, e) {
            self.dragDropHelper.end();
        };
        this.doUndoClick = function () {
            self.doUndoRedo(self.undoRedo.undo());
        };
        this.doRedoClick = function () {
            self.doUndoRedo(self.undoRedo.redo());
        };
        this.jsonEditor = new __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__["a" /* SurveyJSONEditor */]();
        __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            _this.tabs([]);
            _this.tabs.push({
                name: "designer",
                title: _this.getLocString("ed.designer"),
                template: "se-tab-designer",
                data: _this,
                action: function () { return _this.showDesigner(); }
            });
            if (_this.showJSONEditorTab) {
                _this.tabs.push({
                    name: "editor",
                    title: _this.getLocString("ed.jsonEditor"),
                    template: "jsoneditor",
                    data: _this.jsonEditor,
                    action: function () { return _this.showJsonEditor(); }
                });
            }
            if (_this.showTestSurveyTab) {
                _this.tabs.push({
                    name: "test",
                    title: _this.getLocString("ed.testSurvey"),
                    template: "se-tab-test",
                    data: _this,
                    action: function () { return _this.showTestSurvey(); }
                });
            }
            if (_this.showEmbededSurveyTab) {
                _this.tabs.push({
                    name: "embed",
                    title: _this.getLocString("ed.embedSurvey"),
                    template: "surveyembeding",
                    data: _this.surveyEmbeding,
                    action: function () { return _this.showEmbedEditor(); }
                });
            }
            if (_this.showTranslationTab) {
                _this.tabs.push({
                    name: "translation",
                    title: _this.getLocString("ed.translation"),
                    template: "translation",
                    data: _this.translation,
                    action: function () { return _this.showTranslationEditor(); }
                });
            }
        });
        if (renderedElement) {
            this.render(renderedElement);
        }
        this.text = "";
        this.addToolbarItems();
    }
    Object.defineProperty(SurveyEditor.prototype, "haveCommercialLicense", {
        /**
         * You have right to set this property to true if you have bought the commercial licence only.
         * It will remove the text about non-commerical usage on the top of the widget.
         * Setting this property true without having a commercial licence is illegal.
         * @see haveCommercialLicense
         */
        get: function () {
            return this._haveCommercialLicense();
        },
        set: function (val) {
            this._haveCommercialLicense(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "inplaceEditForValues", {
        /**
         * You need to set this property to true if you want to inplace edit item values instead of texts.
         * @see inplaceEditForValues
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_18__adorners_item_editor__["a" /* itemAdorner */].inplaceEditForValues;
        },
        set: function (val) {
            __WEBPACK_IMPORTED_MODULE_18__adorners_item_editor__["a" /* itemAdorner */].inplaceEditForValues = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "isAutoSave", {
        /**
         * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
         */
        get: function () {
            return this.koAutoSave();
        },
        set: function (newVal) {
            this.koAutoSave(newVal);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showState", {
        /**
         * A boolean property, false by default. Set it to true to show the state in the toolbar (saving/saved).
         */
        get: function () {
            return this.koShowState();
        },
        set: function (newVal) {
            this.koShowState(newVal);
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.addToolbarItems = function () {
        var _this = this;
        this.toolbarItems.push({
            id: "svd-undo",
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanUndo,
            action: this.doUndoClick,
            title: this.getLocString("ed.undo")
        });
        this.toolbarItems.push({
            id: "svd-redo",
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanRedo,
            action: this.doRedoClick,
            title: this.getLocString("ed.redo")
        });
        this.toolbarItems.push({
            id: "svd-survey-settings",
            visible: this.koIsShowDesigner,
            enabled: false,
            action: function () {
                _this.surveyObjects.selectObject(_this.survey);
                _this.showQuestionEditor(_this.survey);
            },
            title: this.getLocString("ed.settings")
        });
        this.toolbarItems.push({
            id: "svd-options",
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koIsShowDesigner() && _this.koShowOptions(); }),
            title: this.getLocString("ed.options"),
            template: "svd-toolbar-options",
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                {
                    id: "svd-valid-json",
                    visible: true,
                    css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (_this.koGenerateValidJSON() ? "active" : ""); }),
                    action: this.generateValidJSONClick,
                    title: this.getLocString("ed.generateValidJSON")
                },
                {
                    id: "svd-readable-json",
                    visible: true,
                    css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (!_this.koGenerateValidJSON() ? "active" : ""); }),
                    action: this.generateReadableJSONClick,
                    title: this.getLocString("ed.generateReadableJSON")
                }
            ])
        });
        this.toolbarItems.push({
            id: "svd-test",
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koViewType() === "test"; }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
                return _this.getLocString("ed.testSurveyWidth") +
                    " " +
                    _this.koTestSurveyWidth();
            }),
            template: "svd-toolbar-options",
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                {
                    id: "svd-100-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("100%"); },
                    title: "100%"
                },
                {
                    id: "svd-1200px-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("1200px"); },
                    title: "1200px"
                },
                {
                    id: "svd-1000px-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("1000px"); },
                    title: "1000px"
                },
                {
                    id: "svd-800px-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("800px"); },
                    title: "800px"
                },
                {
                    id: "svd-600px-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("600px"); },
                    title: "600px"
                },
                {
                    id: "svd-400px-json",
                    visible: true,
                    action: function () { return _this.koTestSurveyWidth("400px"); },
                    title: "400px"
                }
            ])
        });
        this.toolbarItems.push({
            id: "svd-save",
            visible: this.koShowSaveButton,
            action: this.saveButtonClick,
            innerCss: "svd_save_btn",
            title: this.getLocString("ed.saveSurvey")
        });
        this.toolbarItems.push({
            id: "svd-state",
            visible: this.koShowState,
            css: "svd_state",
            innerCss: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return "icon-" + _this.koState(); }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.getLocString("ed." + _this.koState()); }),
            template: "svd-toolbar-state"
        });
    };
    SurveyEditor.prototype.setOptions = function (options) {
        if (!options)
            options = {};
        if (!options.hasOwnProperty("generateValidJSON"))
            options.generateValidJSON = true;
        this.options = options;
        this.showJSONEditorTabValue(typeof options.showJSONEditorTab !== "undefined"
            ? options.showJSONEditorTab
            : true);
        this.showTestSurveyTabValue(typeof options.showTestSurveyTab !== "undefined"
            ? options.showTestSurveyTab
            : true);
        this.showEmbededSurveyTabValue(typeof options.showEmbededSurveyTab !== "undefined"
            ? options.showEmbededSurveyTab
            : false);
        this.showTranslationTabValue(typeof options.showTranslationTab !== "undefined"
            ? options.showTranslationTab
            : false);
        this.haveCommercialLicense =
            typeof options.haveCommercialLicense !== "undefined"
                ? options.haveCommercialLicense
                : false;
        this.inplaceEditForValues =
            typeof options.inplaceEditForValues !== "undefined"
                ? options.inplaceEditForValues
                : false;
        this.showObjectTitles =
            typeof options.showObjectTitles !== "undefined"
                ? options.showObjectTitles
                : false;
        this.showTitlesInExpressions =
            typeof options.showTitlesInExpressions !== "undefined"
                ? options.showTitlesInExpressions
                : false;
        this.useTabsInElementEditor =
            typeof options.useTabsInElementEditor !== "undefined"
                ? options.useTabsInElementEditor
                : false;
        this.showState =
            typeof options.showState !== "undefined" ? options.showState : false;
        this.koShowOptions(typeof options.showOptions !== "undefined" ? options.showOptions : false);
        this.koShowPropertyGrid(typeof options.showPropertyGrid !== "undefined"
            ? options.showPropertyGrid
            : true);
        this.koGenerateValidJSON(this.options.generateValidJSON);
        this.isAutoSave =
            typeof options.isAutoSave !== "undefined" ? options.isAutoSave : false;
        this.showErrorOnFailedSave =
            typeof options.showErrorOnFailedSave !== "undefined"
                ? options.showErrorOnFailedSave
                : true;
        this.isRTLValue =
            typeof options.isRTL !== "undefined" ? options.isRTL : false;
        this.scrollToNewElement =
            typeof options.scrollToNewElement !== "undefined"
                ? options.scrollToNewElement
                : true;
        if (options.designerHeight) {
            this.koDesignerHeight(options.designerHeight);
        }
        if (options.objectsIntend) {
            __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */].intend = options.objectsIntend;
        }
        if (typeof options.showPagesToolbox !== "undefined") {
            this.koShowPagesToolbox(options.showPagesToolbox);
        }
    };
    Object.defineProperty(SurveyEditor.prototype, "survey", {
        /**
         * The editing survey object (Survey.Survey)
         */
        get: function () {
            return this.surveyValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "selectedObjectEditor", {
        get: function () {
            return this.selectedObjectEditorValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call this method to render the survey editor.
     * @param element HtmlElement or html element id where Survey Editor will be rendered
     * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showTranslationTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
     */
    SurveyEditor.prototype.render = function (element, options) {
        if (element === void 0) { element = null; }
        if (options === void 0) { options = null; }
        if (options)
            this.setOptions(options);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element)
            return;
        element.innerHTML = templateEditorHtml;
        self.applyBinding();
    };
    SurveyEditor.prototype.loadSurvey = function (surveyId) {
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["dxSurveyService"]().loadSurvey(surveyId, function (success, result, response) {
            if (success && result) {
                self.text = JSON.stringify(result);
            }
        });
    };
    Object.defineProperty(SurveyEditor.prototype, "text", {
        /**
         * The Survey JSON as a text. Use it to get Survey JSON or change it.
         */
        get: function () {
            if (this.koViewType() == "editor")
                return this.jsonEditor.text;
            return this.getSurveyTextFromDesigner();
        },
        set: function (value) {
            this.changeText(value, true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set JSON as text  into survey. Clear undo/redo states optionally.
     * @param value JSON as text
     * @param clearState default false. Set this parameter to true to clear undo/redo states.
     */
    SurveyEditor.prototype.changeText = function (value, clearState) {
        if (clearState === void 0) { clearState = false; }
        var textWorker = new __WEBPACK_IMPORTED_MODULE_9__textWorker__["a" /* SurveyTextWorker */](value);
        if (textWorker.isJsonCorrect) {
            this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(textWorker.survey));
            this.showDesigner();
            this.setUndoRedoCurrentState(clearState);
        }
        else {
            this.setTextValue(value);
            this.koViewType("editor");
        }
    };
    Object.defineProperty(SurveyEditor.prototype, "toolbox", {
        /**
         * Toolbox object. Contains information about Question toolbox items.
         * @see QuestionToolbox
         */
        get: function () {
            return this.toolboxValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "translation", {
        /**
         * Return the translation mode object.
         * @see showTranslationTab
         */
        get: function () {
            return this.translationValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "customToolboxQuestionMaxCount", {
        /**
         * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
         */
        get: function () {
            return this.toolbox.copiedItemMaxCount;
        },
        set: function (value) {
            this.toolbox.copiedItemMaxCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "state", {
        /**
         * Returns the Editor state. It may return empty string or "saving" and "saved".
         */
        get: function () {
            return this.stateValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.setState = function (value) {
        this.stateValue = value;
        this.koState(this.state);
    };
    SurveyEditor.prototype.doSave = function () {
        this.setState("saving");
        if (this.saveSurveyFunc) {
            this.saveNo++;
            var self = this;
            this.saveSurveyFunc(this.saveNo, function doSaveCallback(no, isSuccess) {
                if (self.saveNo === no) {
                    if (isSuccess) {
                        self.setState("saved");
                    }
                    else {
                        if (self.showErrorOnFailedSave) {
                            alert(self.getLocString("ed.saveError"));
                        }
                        self.setState("modified");
                    }
                }
            });
        }
    };
    SurveyEditor.prototype.setModified = function (options) {
        if (options === void 0) { options = null; }
        this.setState("modified");
        this.setUndoRedoCurrentState();
        this.onModified.fire(this, options);
        this.isAutoSave && this.doSave();
    };
    SurveyEditor.prototype.setUndoRedoCurrentState = function (clearState) {
        if (clearState === void 0) { clearState = false; }
        if (clearState) {
            this.undoRedo.clear();
        }
        var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
        this.undoRedo.setCurrent(this.surveyValue(), selObj ? selObj.name : null);
    };
    Object.defineProperty(SurveyEditor.prototype, "saveSurveyFunc", {
        /**
         * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
         * @see isAutoSave
         */
        get: function () {
            return this.saveSurveyFuncValue;
        },
        set: function (value) {
            this.saveSurveyFuncValue = value;
            this.koShowSaveButton(value != null && !this.isAutoSave);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showOptions", {
        /**
         * Set it to true to show "Options" menu and to false to hide the menu
         */
        get: function () {
            return this.koShowOptions();
        },
        set: function (value) {
            this.koShowOptions(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showPropertyGrid", {
        /**
         * Set it to false to hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
         */
        get: function () {
            return this.koShowPropertyGrid();
        },
        set: function (value) {
            this.koShowPropertyGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showJSONEditorTab", {
        /**
         * Set it to true to show "JSON Editor" tab and to false to hide the tab
         */
        get: function () {
            return this.showJSONEditorTabValue();
        },
        set: function (value) {
            this.showJSONEditorTabValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showTestSurveyTab", {
        /**
         * Set it to true to show "Test Survey" tab and to false to hide the tab
         */
        get: function () {
            return this.showTestSurveyTabValue();
        },
        set: function (value) {
            this.showTestSurveyTabValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showEmbededSurveyTab", {
        /**
         * Set it to true to show "Embed Survey" tab and to false to hide the tab
         */
        get: function () {
            return this.showEmbededSurveyTabValue();
        },
        set: function (value) {
            this.showEmbededSurveyTabValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showTranslationTab", {
        /**
         * Set it to true to show "Translation" tab and to false to hide the tab
         */
        get: function () {
            return this.showTranslationTabValue();
        },
        set: function (value) {
            this.showTranslationTabValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "isRTL", {
        /**
         * Set it to true to activate RTL support
         */
        get: function () {
            return this.isRTLValue;
        },
        set: function (value) {
            this.isRTLValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.onCanShowObjectProperty = function (object, property) {
        var options = { obj: object, property: property, canShow: true };
        this.onCanShowProperty.fire(this, options);
        return options.canShow;
    };
    SurveyEditor.prototype.onCustomSortPropertyObjectProperty = function (object, property1, property2) {
        if (this.onCustomSortProperty.isEmpty)
            return 0;
        var options = {
            obj: object,
            property1: property1,
            property2: property2,
            result: 0
        };
        this.onCustomSortProperty.fire(this, options);
        return options.result;
    };
    SurveyEditor.prototype.setTextValue = function (value) {
        this.jsonEditor.text = value;
    };
    /**
     * Returns the localized string by it's id
     * @param str the string id.
     */
    SurveyEditor.prototype.getLocString = function (str) {
        return __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString(str);
    };
    SurveyEditor.prototype.addPageToUI = function (page) {
        this.surveyObjects.addPage(page);
    };
    SurveyEditor.prototype.doOnQuestionAdded = function (question, parentPanel) {
        if (!this.dragDropHelper.isMoving) {
            var page = this.getPageByElement(question);
            var options = { question: question, page: page };
            this.onQuestionAdded.fire(this, options);
        }
        if (parentPanel.elements.indexOf(question) !== -1) {
            this.surveyObjects.addElement(question, parentPanel);
        }
    };
    SurveyEditor.prototype.doOnElementRemoved = function (question) {
        this.surveyObjects.removeObject(question);
    };
    SurveyEditor.prototype.doOnPanelAdded = function (panel, parentPanel) {
        if (!this.dragDropHelper.isMoving) {
            var page = this.getPageByElement(panel);
            var options = { panel: panel, page: page };
            this.onPanelAdded.fire(this, options);
        }
        if (parentPanel.elements.indexOf(panel) !== -1) {
            this.surveyObjects.addElement(panel, parentPanel);
        }
    };
    SurveyEditor.prototype.doOnPageAdded = function (page) {
        if (this.isPageUpdating)
            return;
        var options = { page: page };
        this.onPageAdded.fire(this, options);
    };
    SurveyEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        var oldValue = obj[property.name];
        if (property.name === "page" && typeof newValue === "string") {
            obj[property.name] = obj.survey.getPageByName(newValue);
        }
        else {
            obj[property.name] = newValue;
        }
        if (property.name == "name") {
            var newName = this.generateUniqueName(obj, newValue);
            if (newName != newValue) {
                return newName;
            }
        }
        if (property.name == "name" || property.name == "title") {
            this.surveyObjects.nameChanged(obj);
        }
        if (property.name === "name") {
            this.dirtyPageUpdate(); //TODO why this is need ? (ko problem)
        }
        else if (property.name === "page") {
            this.selectPage(newValue);
            this.surveyObjects.selectObject(obj);
        }
        this.setModified({
            type: "PROPERTY_CHANGED",
            name: property.name,
            target: obj,
            oldValue: oldValue,
            newValue: newValue
        });
        //TODO add a flag to a property, may change other properties
        if (property.name == "locale" ||
            property.name == "hasComment" ||
            property.name == "hasOther") {
            this.selectedObjectEditorValue.objectChanged();
        }
        return null;
    };
    SurveyEditor.prototype.doUndoRedo = function (item) {
        this.initSurvey(item.surveyJSON);
        if (item.selectedObjName) {
            var selObj = this.findObjByName(item.selectedObjName);
            if (selObj) {
                this.surveyObjects.selectObject(selObj);
            }
        }
        this.setState("modified");
        this.isAutoSave && this.doSave();
    };
    SurveyEditor.prototype.findObjByName = function (name) {
        var page = this.survey.getPageByName(name);
        if (page)
            return page;
        var question = this.survey.getQuestionByName(name);
        if (question)
            return question;
        return null;
    };
    SurveyEditor.prototype.canSwitchViewType = function (newType) {
        if (newType && this.koViewType() == newType)
            return false;
        if (this.koViewType() == "designer") {
            this.jsonEditor.text = this.getSurveyTextFromDesigner();
        }
        if (this.koViewType() == "translation" && newType == "designer") {
            this.survey.render();
        }
        if (this.koViewType() != "editor")
            return true;
        if (!this.jsonEditor.isJsonCorrect) {
            alert(this.getLocString("ed.correctJSON"));
            return false;
        }
        this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey));
        this.setModified({ type: "VIEW_TYPE_CHANGED", newType: newType });
        return true;
    };
    /**
     * Make a "Survey Designer" tab active.
     */
    SurveyEditor.prototype.showDesigner = function () {
        if (!this.canSwitchViewType("designer"))
            return;
        this.koViewType("designer");
    };
    /**
     * Make a "JSON Editor" tab active.
     */
    SurveyEditor.prototype.showJsonEditor = function () {
        if (this.koViewType() == "editor")
            return;
        this.jsonEditor.show(this.getSurveyTextFromDesigner());
        this.koViewType("editor");
    };
    /**
     * Make a "Test Survey" tab active.
     */
    SurveyEditor.prototype.showTestSurvey = function () {
        if (!this.canSwitchViewType(null))
            return;
        this.showLiveSurvey();
        this.koViewType("test");
    };
    /**
     * Make a "Embed Survey" tab active.
     */
    SurveyEditor.prototype.showEmbedEditor = function () {
        if (!this.canSwitchViewType("embed"))
            return;
        this.showSurveyEmbeding();
        this.koViewType("embed");
    };
    /**
     * Make a "Translation"" tab active.
     */
    SurveyEditor.prototype.showTranslationEditor = function () {
        if (!this.canSwitchViewType("translation"))
            return;
        this.showSurveyTranslation();
        this.koViewType("translation");
    };
    SurveyEditor.prototype.getSurveyTextFromDesigner = function () {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.options && this.options.generateValidJSON)
            return JSON.stringify(json, null, 1);
        return new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().stringify(json, null, 1);
    };
    SurveyEditor.prototype.getPageByElement = function (obj) {
        var page = this.survey.getPageByElement(obj);
        if (page)
            return page;
        return this.surveyObjects.getSelectedObjectPage(obj);
    };
    SurveyEditor.prototype.selectedObjectChanged = function (obj) {
        var canDeleteObject = false;
        this.selectedObjectEditorValue.selectedObject = obj;
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.currentPage = obj;
            canDeleteObject = this.pages().length > 1;
        }
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question || objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Panel) {
            this.survey.selectedElement = obj;
            canDeleteObject = true;
            this.survey.currentPage = this.getPageByElement(obj);
            var id = obj["id"];
            if (this.renderedElement && id && this.survey.currentPage) {
                var el_1 = this.renderedElement.querySelector("#" + id);
                var pageEl = (this.renderedElement.querySelector("#" + this.survey.currentPage.id));
                __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].scrollIntoViewIfNeeded(el_1, pageEl);
            }
        }
        else {
            this.survey.selectedElement = null;
        }
        this.koCanDeleteObject(canDeleteObject);
        //Select2 work-around
        if (this.renderedElement && this.select2) {
            var el = (this.renderedElement.querySelector("#select2-objectSelector-container")); //TODO
            if (el) {
                var item = this.surveyObjects.koSelected();
                if (item && item.text) {
                    el.innerText = item.text();
                }
            }
        }
    };
    SurveyEditor.prototype.applyBinding = function () {
        var _this = this;
        if (this.renderedElement == null)
            return;
        __WEBPACK_IMPORTED_MODULE_0_knockout__["cleanNode"](this.renderedElement);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"](this, this.renderedElement);
        this.surveyjs = (this.renderedElement.querySelector("#surveyjs"));
        if (this.surveyjs) {
            var self = this;
            this.surveyjs.onkeydown = function (e) {
                if (!e)
                    return;
                // if (e.keyCode == 46) self.deleteQuestion();
                if (e.keyCode == 38 || e.keyCode == 40) {
                    self.selectQuestion(e.keyCode == 38);
                }
            };
        }
        this.initSurvey(this.getDefaultSurveyJson());
        this.setUndoRedoCurrentState(true);
        this.jsonEditor.init((this.renderedElement.querySelector("#surveyjsJSONEditor")));
        if (typeof jQuery !== "undefined" && jQuery()["select2"]) {
            var options = {
                width: "100%"
            };
            if (this.isRTLValue) {
                options.dir = "rtl";
            }
            var $objectSelector = jQuery("#objectSelector");
            this.select2 = $objectSelector["select2"](options);
            $objectSelector.on("select2:select", function (sel_evt) {
                _this.koSelectedObject(sel_evt.target.value);
            });
        }
    };
    SurveyEditor.prototype.getDefaultSurveyJson = function () {
        var json = new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText);
        if (json["pages"] &&
            json["pages"]["length"] > 0 &&
            json["pages"][0]["name"]) {
            json["pages"][0]["name"] =
                __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("ed.newPageName") + "1";
        }
        return json;
    };
    SurveyEditor.prototype.initSurvey = function (json) {
        var _this = this;
        var self = this;
        this.surveyValue(new __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__["a" /* SurveyForDesigner */]());
        this.dragDropHelper = new __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__["a" /* DragDropHelper */](this.survey, function (options) {
            self.setModified(options);
        }, this.renderedElement);
        this.surveyValue().getEditor = function () { return self; };
        this.surveyValue().setJsonObject(json);
        if (this.surveyValue().isEmpty) {
            this.surveyValue().setJsonObject(this.getDefaultSurveyJson());
        }
        __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["surveyLocalization"].currentLocale = this.surveyValue()["locale"];
        this.surveyValue().dragDropHelper = this.dragDropHelper;
        this.surveyValue().onUpdateElementAllowingOptions = function (options) {
            self.onElementAllowOperations.fire(self, options);
        };
        this.surveyValue().onDragDropAllow.add(function (sender, options) {
            options.survey = sender;
            self.onDragDropAllow.fire(self, options);
        });
        this.surveyValue().onGetMenuItems.add(function (sender, options) {
            var opts = options.obj.allowingOptions;
            if (!opts)
                opts = {};
            if (opts.allowEdit) {
                options.items.push({
                    name: "editelement",
                    text: _this.getLocString("survey.edit"),
                    hasTitle: true,
                    onClick: function (question) { return _this.showQuestionEditor(question); }
                });
            }
            if (opts.allowDelete) {
                var deleteLocaleName = options.obj.isPanel
                    ? "survey.deletePanel"
                    : "survey.deleteQuestion";
                options.items.push({
                    name: "delete",
                    text: self.getLocString(deleteLocaleName),
                    onClick: function (selObj) {
                        self.deleteCurrentObject();
                    }
                });
            }
            if (opts.allowShowHideTitle &&
                typeof options.obj.titleLocation !== "undefined") {
                var isShowTitle = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](options.obj.titleLocation !== "hidden");
                options.items.push({
                    name: "showtitle",
                    text: _this.getLocString("pe.showTitle"),
                    icon: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
                        if (isShowTitle()) {
                            return "icon-actionshowtitle";
                        }
                        return "icon-actionhidetitle";
                    }),
                    onClick: function (question) {
                        if (question.titleLocation !== "hidden") {
                            question.titleLocation = "hidden";
                            if (question.getType() === "boolean") {
                                question["showTitle"] = false;
                            }
                        }
                        else {
                            question.titleLocation = "default";
                            if (question.getType() === "boolean") {
                                question["showTitle"] = true;
                            }
                        }
                        isShowTitle(question.titleLocation !== "hidden");
                        _this.onQuestionEditorChanged(question);
                    }
                });
            }
            if (opts.allowChangeRequired &&
                typeof options.obj.isRequired !== "undefined") {
                var isRequired = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return options.obj.isRequired; });
                options.items.push({
                    name: "isrequired",
                    text: _this.getLocString("pe.isRequired"),
                    icon: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
                        if (isRequired()) {
                            return "icon-actionisrequired";
                        }
                        return "icon-actionnotrequired";
                    }),
                    onClick: function (question) {
                        question.isRequired = !question.isRequired;
                        _this.onQuestionEditorChanged(question);
                    }
                });
            }
            if (options.items.length > 0) {
                options.items.push({ template: "action-separator" });
            }
            if (opts.allowCopy) {
                options.items.push({
                    name: "copy",
                    text: self.getLocString("survey.copy"),
                    onClick: function (selObj) {
                        self.fastCopyQuestion(selObj);
                    }
                });
            }
            if (opts.allowAddToToolbox) {
                options.items.push({
                    name: "addtotoolbox",
                    text: self.getLocString("survey.addToToolbox"),
                    onClick: function (selObj) {
                        self.addCustomToolboxQuestion(selObj);
                    }
                });
            }
            if (opts.allowChangeType) {
                if (options.items.length > 0) {
                    options.items.push({ template: "action-separator" });
                }
                var currentType = options.obj.getType();
                var convertClasses = __WEBPACK_IMPORTED_MODULE_6__questionconverter__["a" /* QuestionConverter */].getConvertToClasses(currentType);
                var allowChangeType = convertClasses.length > 0;
                var createTypeByClass = function (className) {
                    return {
                        name: _this.getLocString("qt." + className),
                        value: className
                    };
                };
                var availableTypes = [createTypeByClass(currentType)];
                for (var i = 0; i < convertClasses.length; i++) {
                    var className = convertClasses[i];
                    availableTypes.push(createTypeByClass(className));
                }
                options.items.push({
                    text: _this.getLocString("qt." + currentType),
                    title: _this.getLocString("survey.convertTo"),
                    type: currentType,
                    allowChangeType: allowChangeType,
                    template: "convert-action",
                    availableTypes: availableTypes,
                    onConvertType: function (data, event) {
                        var newType = event.target.value;
                        _this.convertCurrentObject(options.obj, newType);
                    }
                });
            }
            if (opts.allowDragging) {
                options.items.push({
                    name: "dragelement",
                    needFocus: false,
                    text: self.getLocString("survey.drag"),
                    onClick: function (selObj) { }
                });
            }
            self.onDefineElementMenuItems.fire(self, options);
        });
        this.onDesignerSurveyCreated.fire(this, { survey: this.surveyValue() });
        this.survey.render(this.surveyjs);
        this.surveyObjects.survey = this.survey;
        this.pages(this.survey.pages);
        this.surveyValue().onSelectedElementChanged.add(function (sender, options) {
            self.surveyObjects.selectObject(sender["selectedElement"]);
        });
        this.surveyValue().onEditButtonClick.add(function (sender) {
            self.showQuestionEditor(self.koSelectedObject().value);
        });
        this.surveyValue().onElementDoubleClick.add(function (sender, options) {
            self.onElementDoubleClick.fire(self, options);
        });
        this.surveyValue().onProcessHtml.add(function (sender, options) {
            options.html = self.processHtml(options.html);
        });
        this.surveyValue().onQuestionAdded.add(function (sender, options) {
            self.doOnQuestionAdded(options.question, options.parentPanel);
        });
        this.surveyValue().onQuestionRemoved.add(function (sender, options) {
            self.doOnElementRemoved(options.question);
        });
        this.surveyValue().onPanelAdded.add(function (sender, options) {
            self.doOnPanelAdded(options.panel, options.parentPanel);
        });
        this.surveyValue().onPanelRemoved.add(function (sender, options) {
            self.doOnElementRemoved(options.panel);
        });
        var pAdded = this.surveyValue()["onPageAdded"];
        if (pAdded && pAdded.add) {
            pAdded.add(function (sender, options) {
                self.doOnPageAdded(options.page);
            });
        }
    };
    SurveyEditor.prototype.processHtml = function (html) {
        if (!html)
            return html;
        var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (scriptRegEx.test(html)) {
            html = html.replace(scriptRegEx, "");
        }
        return html;
    };
    SurveyEditor.prototype.doDraggingToolboxItem = function (json, e) {
        this.dragDropHelper.startDragToolboxItem(e, this.getNewName(json["type"]), json);
    };
    SurveyEditor.prototype.doClickToolboxItem = function (json) {
        var newElement = this.createNewElement(json);
        this.doClickQuestionCore(newElement);
    };
    SurveyEditor.prototype.copyElement = function (element) {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(element);
        json.type = element.getType();
        return this.createNewElement(json);
    };
    SurveyEditor.prototype.getRows = function (pnl) {
        return !!pnl["koRows"] ? pnl["koRows"]() : pnl.rows;
    };
    SurveyEditor.prototype.dragOverQuestionsEditor = function (data, e) {
        data.survey.dragDropHelper.doDragDropOver(e, data.survey.currentPage);
        return false;
    };
    SurveyEditor.prototype.dropOnQuestionsEditor = function (data, e) {
        data.survey.dragDropHelper.doDrop(e);
    };
    SurveyEditor.prototype.createNewElement = function (json) {
        var newElement = __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toObject(json, newElement);
        this.setNewNames(newElement);
        return newElement;
    };
    SurveyEditor.prototype.setNewNames = function (element) {
        this.newQuestions = [];
        this.newPanels = [];
        this.setNewNamesCore(element);
    };
    SurveyEditor.prototype.setNewNamesCore = function (element) {
        var elType = element["getType"]();
        element.name = this.getNewName(elType);
        if (element.isPanel || elType == "page") {
            if (element.isPanel) {
                this.newPanels.push(element);
            }
            var panel = element;
            for (var i = 0; i < panel.elements.length; i++) {
                this.setNewNamesCore(panel.elements[i]);
            }
        }
        else {
            this.newQuestions.push(element);
        }
    };
    SurveyEditor.prototype.generateUniqueName = function (el, newName) {
        while (!this.isNameUnique(el, newName)) {
            newName = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].generateNewName(newName);
        }
        return newName;
    };
    SurveyEditor.prototype.isNameUnique = function (el, newName) {
        if (!this.isNameUniqueInArray(this.survey.pages, el, newName))
            return false;
        if (!this.isNameUniqueInArray(this.survey.getAllPanels(), el, newName))
            return false;
        return this.isNameUniqueInArray(this.survey.getAllQuestions(), el, newName);
    };
    SurveyEditor.prototype.isNameUniqueInArray = function (elements, el, newName) {
        newName = newName.toLowerCase();
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] != el && elements[i].name.toLowerCase() == newName)
                return false;
        }
        return true;
    };
    SurveyEditor.prototype.getNewName = function (type) {
        if (type == "page")
            return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPageName(this.pages());
        return type == "panel" || type == "flowpanel"
            ? this.getNewPanelName()
            : this.getNewQuestionName();
    };
    SurveyEditor.prototype.getNewQuestionName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewQuestionName(this.getAllQuestions());
    };
    SurveyEditor.prototype.getNewPanelName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPanelName(this.getAllPanels());
    };
    SurveyEditor.prototype.getAllQuestions = function () {
        var result = [];
        for (var i = 0; i < this.pages().length; i++) {
            this.addElements(this.pages()[i].elements, false, result);
        }
        this.addElements(this.newPanels, false, result);
        this.addElements(this.newQuestions, false, result);
        return result;
    };
    SurveyEditor.prototype.getAllPanels = function () {
        var result = [];
        for (var i = 0; i < this.pages().length; i++) {
            this.addElements(this.pages()[i].elements, true, result);
        }
        this.addElements(this.newPanels, true, result);
        this.addElements(this.newQuestions, true, result);
        return result;
    };
    SurveyEditor.prototype.addElements = function (elements, isPanel, result) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].isPanel === isPanel) {
                result.push(elements[i]);
            }
            this.addElements(__WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getElements(elements[i]), isPanel, result);
        }
    };
    SurveyEditor.prototype.doClickQuestionCore = function (element, modifiedType) {
        if (modifiedType === void 0) { modifiedType = "ADDED_FROM_TOOLBOX"; }
        var parent = this.survey.currentPage;
        var index = -1;
        var elElement = this.survey.selectedElement;
        if (elElement && elElement.parent) {
            parent = elElement.parent;
            index = parent.elements.indexOf(this.survey.selectedElement);
            if (index > -1)
                index++;
        }
        parent.addElement(element, index);
        if (this.renderedElement && this.scrollToNewElement) {
            this.dragDropHelper.scrollToElement((this.renderedElement.querySelector("#" + element["id"])));
        }
        this.setModified({ type: modifiedType, question: element });
    };
    SurveyEditor.prototype.deleteQuestion = function () {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.deleteCurrentObject();
        }
    };
    SurveyEditor.prototype.selectQuestion = function (isUp) {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.surveyObjects.selectNextQuestion(isUp);
        }
    };
    SurveyEditor.prototype.getSelectedObjAsQuestion = function () {
        var obj = this.koSelectedObject().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question
            ? obj
            : null;
    };
    SurveyEditor.prototype.deleteCurrentObject = function () {
        this.deleteObject(this.koSelectedObject().value);
    };
    SurveyEditor.prototype.editCurrentObject = function () {
        this.showQuestionEditor(this.koSelectedObject().value);
    };
    SurveyEditor.prototype.convertCurrentObject = function (obj, className) {
        var newQuestion = __WEBPACK_IMPORTED_MODULE_6__questionconverter__["a" /* QuestionConverter */].convertObject(obj, className);
        this.setModified({
            type: "QUESTION_CONVERTED",
            className: className,
            oldValue: obj,
            newValue: newQuestion
        });
    };
    /**
     * Show the Editor dialog. The element can be a question, panel, page or survey
     * @param element The survey element
     */
    SurveyEditor.prototype.showElementEditor = function (element, onClose) {
        this.showQuestionEditor(element, onClose);
    };
    SurveyEditor.prototype.onQuestionEditorChanged = function (question) {
        if (!!question.name && !this.isNameUnique(question, question.name)) {
            question.name = this.generateUniqueName(question, question.name);
        }
        this.surveyObjects.nameChanged(question);
        this.selectedObjectEditorValue.objectChanged();
        this.dirtyPageUpdate(); //TODO why this is need ? (ko problem)
        this.setModified({
            type: "QUESTION_CHANGED_BY_EDITOR",
            question: question
        });
        //question.endLoadingFromJson();
        //this.survey.endLoadingFromJson();
    };
    /**
     * Add a question into Toolbox object
     * @param question an added Survey.Question
     * @see toolbox
     */
    SurveyEditor.prototype.addCustomToolboxQuestion = function (question) {
        var options = {};
        this.onCustomElementAddingIntoToolbox.fire(this, {
            element: question,
            itemOptions: options
        });
        this.toolbox.addCopiedItem(question, options);
        this.onCustomElementAddedIntoToolbox.fire(this, { element: question });
    };
    /**
     * Copy a question to the active page
     * @param question A copied Survey.Question
     */
    SurveyEditor.prototype.fastCopyQuestion = function (question) {
        var newElement = this.copyElement(question);
        this.doClickQuestionCore(newElement, "ELEMENT_COPIED");
    };
    /**
     * Delete an element in the survey. It can be a question, a panel or a page.
     * @param element a survey element.
     */
    SurveyEditor.prototype.deleteElement = function (element) {
        this.deleteObject(element);
    };
    SurveyEditor.prototype.deleteObject = function (obj) {
        var options = {
            element: obj,
            elementType: __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj),
            allowing: true
        };
        this.onElementDeleting.fire(this, options);
        if (!options.allowing)
            return;
        this.surveyObjects.removeObject(obj);
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.removePage(obj);
        }
        else {
            this.survey.currentPage.removeElement(obj);
            this.survey.selectedElement = null;
            this.surveyObjects.selectObject(this.survey.currentPage);
        }
        this.setModified({
            type: "OBJECT_DELETED",
            target: obj
        });
    };
    SurveyEditor.prototype.showLiveSurvey = function () {
        var self = this;
        this.surveyLive.onSurveyCreatedCallback = function (survey) {
            self.onTestSurveyCreated.fire(self, { survey: survey });
        };
        this.surveyLive.setJSON(this.getSurveyJSON());
        this.surveyLive.show();
    };
    SurveyEditor.prototype.showSurveyEmbeding = function () {
        var json = this.getSurveyJSON();
        this.surveyEmbeding.json = json;
        this.surveyEmbeding.surveyId = this.surveyId;
        this.surveyEmbeding.surveyPostId = this.surveyPostId;
        this.surveyEmbeding.generateValidJSON =
            this.options && this.options.generateValidJSON;
        this.surveyEmbeding.show();
    };
    SurveyEditor.prototype.showSurveyTranslation = function () {
        this.translation.survey = this.survey;
    };
    SurveyEditor.prototype.getSurveyJSON = function () {
        if (this.koIsShowDesigner() || this.koViewType() == "translation")
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.jsonEditor.isJsonCorrect)
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey);
        return null;
    };
    SurveyEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = {
                row: error.position.start.row,
                column: error.position.start.column,
                text: error.text,
                type: "error"
            };
            annotations.push(annotation);
        }
        return annotations;
    };
    Object.defineProperty(SurveyEditor.prototype, "alwaySaveTextInPropertyEditors", {
        //implements ISurveyObjectEditorOptions
        get: function () {
            return this.alwaySaveTextInPropertyEditorsValue;
        },
        set: function (value) {
            this.alwaySaveTextInPropertyEditorsValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showApplyButtonInEditors", {
        get: function () {
            return this.showApplyButtonValue;
        },
        set: function (value) {
            this.showApplyButtonValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.onIsEditorReadOnlyCallback = function (obj, editor, readOnly) {
        if (this.onGetPropertyReadOnly.isEmpty)
            return readOnly;
        var options = {
            obj: obj,
            property: editor.property,
            readOnly: readOnly,
            propertyName: editor.property.name
        };
        this.onGetPropertyReadOnly.fire(this, options);
        return options.readOnly;
    };
    SurveyEditor.prototype.onItemValueAddedCallback = function (propertyName, itemValue, itemValues) {
        var options = {
            propertyName: propertyName,
            newItem: itemValue,
            itemValues: itemValues
        };
        this.onItemValueAdded.fire(this, options);
    };
    SurveyEditor.prototype.onMatrixDropdownColumnAddedCallback = function (matrix, column, columns) {
        var options = { newColumn: column, matrix: matrix, columns: columns };
        this.onMatrixColumnAdded.fire(this, options);
    };
    SurveyEditor.prototype.onSetPropertyEditorOptionsCallback = function (propertyName, obj, editorOptions) {
        var options = {
            propertyName: propertyName,
            obj: obj,
            editorOptions: editorOptions
        };
        this.onSetPropertyEditorOptions.fire(this, options);
    };
    SurveyEditor.prototype.onGetErrorTextOnValidationCallback = function (propertyName, obj, value) {
        var options = {
            propertyName: propertyName,
            obj: obj,
            value: value,
            error: ""
        };
        this.onPropertyValidationCustomError.fire(this, options);
        return options.error;
    };
    SurveyEditor.prototype.onValueChangingCallback = function (options) {
        this.onPropertyValueChanging.fire(this, options);
    };
    SurveyEditor.prototype.onPropertyEditorKeyDownCallback = function (propertyName, obj, editor, event) {
        var options = {
            propertyName: propertyName,
            obj: obj,
            editor: editor,
            event: event
        };
        this.onPropertyEditorKeyDown.fire(this, options);
    };
    SurveyEditor.prototype.onPropertyEditorObjectSetCallback = function (propertyName, obj, editor) {
        var options = { propertyName: propertyName, obj: obj, editor: editor };
        this.onPropertyEditorObjectAssign.fire(this, options);
    };
    SurveyEditor.prototype.onPropertyEditorModalShowDescriptionCallback = function (propertyName, obj) {
        var options = {
            obj: obj,
            propertyName: propertyName,
            htmlTop: "",
            htmlBottom: ""
        };
        this.onShowPropertyModalEditorDescription.fire(this, options);
        var res = { top: options.htmlTop, bottom: options.htmlBottom };
        return res;
    };
    SurveyEditor.prototype.onGetElementEditorTitleCallback = function (obj, title) {
        return title;
    };
    SurveyEditor.prototype.onConditionValueSurveyCreatedCallBack = function (valueQuestionName, propertyName, obj, editor, survey) {
        var options = {
            valueQuestionName: valueQuestionName,
            propertyName: propertyName,
            obj: obj,
            editor: editor,
            survey: survey
        };
        this.onConditionValueSurveyCreated.fire(this, options);
    };
    SurveyEditor.prototype.onConditionQuestionsGetListCallback = function (propertyName, obj, editor, list) {
        var options = {
            propertyName: propertyName,
            obj: obj,
            editor: editor,
            list: list
        };
        this.onConditionQuestionsGetList.fire(this, options);
    };
    SurveyEditor.prototype.onAdornerRenderedCallback = function (question, adorner, element, context) {
        var options = {
            survey: this.survey,
            question: question,
            adorner: adorner,
            element: element,
            context: context
        };
        this.onAdornerRendered.fire(this, options);
    };
    /**
     * Upload the files on a server
     * @param files files to upload
     * @param uploadingCallback a call back function to get the status on uploading the file and operation result - URI of the uploaded file
     */
    SurveyEditor.prototype.uploadFiles = function (files, uploadingCallback) {
        if (this.onUploadFile.isEmpty) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function (e) {
                uploadingCallback("success", fileReader_1.result);
            };
            fileReader_1.readAsDataURL(files[0]);
        }
        else {
            this.onUploadFile.fire(this, {
                files: files || [],
                callback: uploadingCallback
            });
        }
    };
    SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1'}] }";
    return SurveyEditor;
}());

var koSurveyTemplate = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["SurveyTemplateText"]()["text"];
koSurveyTemplate = koSurveyTemplate.replace("name: 'survey-content', afterRender: koEventAfterRender", "name: 'survey-content', data: survey, afterRender: $parent.koEventAfterRender");
//koSurveyTemplate = "<div data-bind='data: survey'>" + koSurveyTemplate + "</div>";
__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("survey-widget", {
    viewModel: function (params) {
        this.survey = params.survey;
    },
    template: koSurveyTemplate
});
__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("svg-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
                var size = (__WEBPACK_IMPORTED_MODULE_0_knockout__["unwrap"](params.size) || 16) + "px";
                var svgElem = componentInfo.element.childNodes[0];
                svgElem.style.width = size;
                svgElem.style.height = size;
                var node = svgElem.childNodes[0];
                node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + __WEBPACK_IMPORTED_MODULE_0_knockout__["unwrap"](params.iconName));
            });
        }
    },
    template: "<svg class='svd-svg-icon'><use></use></svg>"
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_custom_checkbox_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_custom_checkbox_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_custom_checkbox_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_custom_select_scss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_custom_select_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_custom_select_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ddmenu_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ddmenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_ddmenu_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_scss__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_english__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "enStrings", function() { return __WEBPACK_IMPORTED_MODULE_4__localization_english__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editorLocalization__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStrings", function() { return __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dragdrophelper__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_6__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyEditorBase__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyEditorBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyCustomEditor__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyCustomEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyCustomEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorFactory", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyEditorFactory__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyItemsEditor__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyMultipleValuesEditor__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMultipleValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyMultipleValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__propertyEditors_propertyNestedPropertyEditor__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_14__propertyEditors_propertyNestedPropertyEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditorItem", function() { return __WEBPACK_IMPORTED_MODULE_14__propertyEditors_propertyNestedPropertyEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_15__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_15__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__propertyEditors_propertyModalEditor__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_16__propertyEditors_propertyModalEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextEditor", function() { return __WEBPACK_IMPORTED_MODULE_16__propertyEditors_propertyModalEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyHtmlEditor", function() { return __WEBPACK_IMPORTED_MODULE_16__propertyEditors_propertyModalEditor__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__propertyEditors_propertyConditionEditor__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyConditionEditor", function() { return __WEBPACK_IMPORTED_MODULE_17__propertyEditors_propertyConditionEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__propertyEditors_propertyRestfullEditor__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_18__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__propertyEditors_propertyDefaultValueEditor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDefaultValueEditor", function() { return __WEBPACK_IMPORTED_MODULE_19__propertyEditors_propertyDefaultValueEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDefaultRowValueEditor", function() { return __WEBPACK_IMPORTED_MODULE_19__propertyEditors_propertyDefaultValueEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDefaultPanelValueEditor", function() { return __WEBPACK_IMPORTED_MODULE_19__propertyEditors_propertyDefaultValueEditor__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__propertyEditors_propertyTriggersEditor__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTriggersEditor", function() { return __WEBPACK_IMPORTED_MODULE_20__propertyEditors_propertyTriggersEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__propertyEditors_propertyValidatorsEditor__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyValidatorsEditor", function() { return __WEBPACK_IMPORTED_MODULE_21__propertyEditors_propertyValidatorsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__propertyEditors_propertyCellsEditor__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyCellsEditor", function() { return __WEBPACK_IMPORTED_MODULE_22__propertyEditors_propertyCellsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__surveyObjects__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjects", function() { return __WEBPACK_IMPORTED_MODULE_23__surveyObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__questionEditors_questionEditorProperties__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorProperties", function() { return __WEBPACK_IMPORTED_MODULE_24__questionEditors_questionEditorProperties__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorRow", function() { return __WEBPACK_IMPORTED_MODULE_24__questionEditors_questionEditorProperties__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorProperty", function() { return __WEBPACK_IMPORTED_MODULE_24__questionEditors_questionEditorProperties__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__questionEditors_questionEditorDefinition__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return __WEBPACK_IMPORTED_MODULE_25__questionEditors_questionEditorDefinition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__questionEditors_questionEditor__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorShowWindow", function() { return __WEBPACK_IMPORTED_MODULE_26__questionEditors_questionEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditor", function() { return __WEBPACK_IMPORTED_MODULE_26__questionEditors_questionEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTab", function() { return __WEBPACK_IMPORTED_MODULE_26__questionEditors_questionEditor__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__questionToolbox__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionToolbox", function() { return __WEBPACK_IMPORTED_MODULE_27__questionToolbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__objectProperty__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_28__objectProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__objectEditor__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectEditor", function() { return __WEBPACK_IMPORTED_MODULE_29__objectEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pagesEditor__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PagesEditor", function() { return __WEBPACK_IMPORTED_MODULE_30__pagesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__textWorker__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTextWorker", function() { return __WEBPACK_IMPORTED_MODULE_31__textWorker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__surveyHelper__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjType", function() { return __WEBPACK_IMPORTED_MODULE_32__surveyHelper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_32__surveyHelper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__surveylive__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyLiveTester", function() { return __WEBPACK_IMPORTED_MODULE_33__surveylive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__surveyEmbedingWindow__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEmbedingWindow", function() { return __WEBPACK_IMPORTED_MODULE_34__surveyEmbedingWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__questionconverter__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionConverter", function() { return __WEBPACK_IMPORTED_MODULE_35__questionconverter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__undoredo__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_36__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_36__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__surveyjsObjects__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyForDesigner", function() { return __WEBPACK_IMPORTED_MODULE_37__surveyjsObjects__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdorner", function() { return __WEBPACK_IMPORTED_MODULE_37__surveyjsObjects__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "removeAdorners", function() { return __WEBPACK_IMPORTED_MODULE_37__surveyjsObjects__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__extentions__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Extentions", function() { return __WEBPACK_IMPORTED_MODULE_38__extentions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__editor__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_39__editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__manage__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysManager", function() { return __WEBPACK_IMPORTED_MODULE_40__manage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__stylesmanager__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StylesManager", function() { return __WEBPACK_IMPORTED_MODULE_41__stylesmanager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__localization_danish__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__localization_french__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__localization_german__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__localization_italian__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__localization_korean__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__localization_persian__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__localization_polish__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__localization_portuguese__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__localization_simplified_chinese__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__localization_spanish__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__localization_traditional_chinese__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__localization_norwegian__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__translation__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return __WEBPACK_IMPORTED_MODULE_54__translation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationGroup", function() { return __WEBPACK_IMPORTED_MODULE_54__translation__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationItem", function() { return __WEBPACK_IMPORTED_MODULE_54__translation__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationItemBase", function() { return __WEBPACK_IMPORTED_MODULE_54__translation__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__adorners_title_editor__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "titleAdorner", function() { return __WEBPACK_IMPORTED_MODULE_55__adorners_title_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__adorners_item_editor__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "itemAdorner", function() { return __WEBPACK_IMPORTED_MODULE_56__adorners_item_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__adorners_label_editor__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "labelAdorner", function() { return __WEBPACK_IMPORTED_MODULE_57__adorners_label_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__adorners_question_actions__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "questionActionsAdorner", function() { return __WEBPACK_IMPORTED_MODULE_58__adorners_question_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__adorners_select_items_editor__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemsEditorAdorner", function() { return __WEBPACK_IMPORTED_MODULE_59__adorners_select_items_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__adorners_rating_item_editor__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ratingItemAdorner", function() { return __WEBPACK_IMPORTED_MODULE_60__adorners_rating_item_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__adorners_image_items__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "imageItemsAdorner", function() { return __WEBPACK_IMPORTED_MODULE_61__adorners_image_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__utils_accordion__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemModel", function() { return __WEBPACK_IMPORTED_MODULE_62__utils_accordion__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return __WEBPACK_IMPORTED_MODULE_62__utils_accordion__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__utils_splitter__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterComponentViewModel", function() { return __WEBPACK_IMPORTED_MODULE_63__utils_splitter__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
// styles




var Version;
Version = "" + "1.0.71";








































//editorLocalization













//adorners











/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__propertyEditors_propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Extentions; });

var Extentions = /** @class */ (function () {
    function Extentions() {
    }
    Extentions.registerCustomPropertyEditor = function (name, widgetJSON) {
        __WEBPACK_IMPORTED_MODULE_0__propertyEditors_propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerCustomEditor(name, widgetJSON);
    };
    Extentions.registerPropertyEditor = function (name, creator) {
        __WEBPACK_IMPORTED_MODULE_0__propertyEditors_propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor(name, creator);
    };
    return Extentions;
}());



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);
/* unused harmony export danishStrings */

var danishStrings = {
    //survey templates
    survey: {
        edit: "Rediger",
        dropQuestion: "Træk et spørgsmål hertil fra paletten til venstre.",
        copy: "Kopier",
        addToToolbox: "Tilføj til paletten",
        deletePanel: "Slet panel",
        deleteQuestion: "Slet spørgsmål",
        convertTo: "Konverter til",
        drag: "Træk element"
    },
    //questionTypes
    qt: {
        default: "Standard",
        checkbox: "Afkrydsningsfelt",
        comment: "Kommentar",
        imagepicker: "Billedvælger",
        dropdown: "Dropdown",
        file: "Fil",
        html: "Html",
        matrix: "Matrice (ét valg)",
        matrixdropdown: "Matrice (flere valg)",
        matrixdynamic: "Matrice (dynamiske rækker)",
        multipletext: "Flere tekstfelter",
        panel: "Panel",
        paneldynamic: "Panel (dynamiske paneler)",
        radiogroup: "Alternativknap",
        rating: "Vurdering",
        text: "Tekstfelt",
        boolean: "Sandt/falsk",
        expression: "Udtryk"
    },
    //Strings in Editor
    ed: {
        defaultLocale: "Standard ({0})",
        survey: "Undersøgelse",
        settings: "Indstillinger for undersøgelse",
        editSurvey: "Rediger undersøgelse",
        addNewPage: "Tilføj ny side",
        moveRight: "Gå til højre",
        moveLeft: "Gå til venstre",
        deletePage: "Slet side",
        editPage: "Rediger side",
        edit: "Rediger",
        newPageName: "side",
        newQuestionName: "spørgsmål",
        newPanelName: "panel",
        testSurvey: "Afprøv undersøgelse",
        testSurveyAgain: "Afprøv undersøgelse igen",
        testSurveyWidth: "Bredde af undersøgelse: ",
        embedSurvey: "Indlejr undersøgelse",
        translation: "Oversættelse",
        saveSurvey: "Gem undersøgelse",
        designer: "Undersøgelsesdesigner",
        jsonEditor: "JSON Editor",
        undo: "Fortryd",
        redo: "Annuller fortryd",
        options: "Indstillinger",
        generateValidJSON: "Generer gylding JSON",
        generateReadableJSON: "Generer læsbar JSON",
        toolbox: "Værktøjskasse",
        toolboxGeneralCategory: "Generelt",
        delSelObject: "Slet valgt objekt",
        editSelObject: "Rediger valgt objekt",
        correctJSON: "Ret venligst JSON.",
        surveyResults: "Undersøgelsesresultat: ",
        modified: "Ændret",
        saving: "Gemmer",
        saved: "Gemt",
        saveError: "Fejl! Undersøgelsen er ikke blevet gemt.",
        translationAddLanguage: "Vælg et sprog at oversætte",
        translationShowAllStrings: "Vis alle tekststrenge",
        translationShowAllPages: "Vis alle sider",
        translationNoStrings: "Ingen tekststrenge at oversætte. Ret filteret.",
        translationExportToSCVButton: "Eksporter til CSV",
        translationImportFromSCVButton: "Importer fra CSV",
        translationMergeLocaleWithDefault: "Flet {0} med standardsprog"
    },
    //Property names in table headers
    pel: {
        isRequired: "Påkrævet?"
    },
    //Property Editors
    pe: {
        apply: "Anvend",
        ok: "OK",
        cancel: "Annuller",
        reset: "Nulstil",
        close: "Luk",
        delete: "Slet",
        addNew: "Tilføj ny",
        addItem: "Klik for at tilføje...",
        removeAll: "Fjern alle",
        edit: "Rediger",
        itemValueEdit: "Synlig hvis",
        editChoices: "Rediger valgmuligheder",
        move: "Flyt",
        empty: "<tom>",
        notEmpty: "<redigér værdi>",
        fastEntry: "Fast Entry",
        formEntry: "Form Entry",
        testService: "Test the service",
        conditionSelectQuestion: "Vælg spørgsmål...",
        conditionValueQuestionTitle: "Indtast/vælg værdi",
        conditionButtonAdd: "Tilføj",
        conditionButtonReplace: "Erstat",
        conditionHelp: "Indtast et boolsk udtryk. Det skal returnere true for at holde spørgsmålet/siden synlig. For eksempel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "Indtast et udtryk. Du kan bruge krølle-parenteser for at få adgang til svarene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
        aceEditorHelp: "Tast ctrl+space for hjælp til at afslutte udtrykket",
        aceEditorRowTitle: "Aktuel række",
        aceEditorPanelTitle: "Aktuelt panel",
        showMore: "Se dokumentationen for flere informationer",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "Tilgængelige spørgsmål:",
        cellsEmptyRowsColumns: "Der skal være mindst én kolonne eller række",
        propertyIsEmpty: "Indtast en værdi",
        value: "Værdi",
        text: "Tekst",
        rowid: "Række ID",
        imageLink: "Billedlink",
        columnEdit: "Rediger kolonne: {0}",
        itemEdit: "Redigér: {0}",
        url: "URL",
        path: "Sti",
        valueName: "Værdiens navn",
        titleName: "Titelnavn",
        hasOther: "Har andet element",
        otherText: "Andet element tekst",
        name: "Navn",
        title: "Titel",
        cellType: "Celletype",
        colCount: "Antal kolonner",
        choicesOrder: "Vælg rækkefølge på valg",
        visible: "Er synlig?",
        isRequired: "Er påkrævet?",
        startWithNewLine: "Skal starte med ny linie?",
        rows: "Antal rækker",
        placeHolder: "Hint-tekst",
        showPreview: "Vises forhåndsvisning af billeder?",
        storeDataAsText: "Gem filindhold i JSON-resultat som tekst",
        maxSize: "Maksimal filstørrelse i bytes",
        imageHeight: "Billedhøjde",
        imageWidth: "Billedbredde",
        rowCount: "Antal rækker",
        columnLayout: "Kolonnelayout",
        addRowLocation: "Tilføj række knapplacering",
        addRowText: "Tilføj række knaptekst",
        removeRowText: "Fjern række knaptekst",
        minRateDescription: "Beskriv laveste vurdering",
        maxRateDescription: "Beskriv højeste vurdering",
        inputType: "Inputtype",
        optionsCaption: "Muligheder tekst",
        defaultValue: "Standardværdi",
        cellsDefaultRow: "Standard celletekst",
        surveyEditorTitle: "Rediger undersøgelsesindstillinger",
        qEditorTitle: "Redigér: {0}",
        maxLength: "Maximal længde",
        //survey
        showTitle: "Vis/skjul titel",
        locale: "Standardsprog",
        mode: "Mode (rediger/skrivebeskyttet)",
        clearInvisibleValues: "Fjern usynlige værdier",
        cookieName: "Cookienavn (for at undgå at afvikle undersøgelsen to gange lokalt)",
        sendResultOnPageNext: "Send undersøgelsesresultatet ved næste side",
        storeOthersAsComment: "Gem 'others' værdien i et seperat felt",
        showPageTitles: "Vis sidetitler",
        showPageNumbers: "Vis sidenumre",
        pagePrevText: "Forrige side knaptekst",
        pageNextText: "Næste side knaptekst",
        completeText: "Færdig knaptekst",
        startSurveyText: "Start knaptekst",
        showNavigationButtons: "Vis navigationsknapper (standard navigation)",
        showPrevButton: "Vis forrige knap (brugeren må gå tilbage til forrige side)",
        firstPageIsStarted: "Den første side in undersøgelsen er starten på undersøgelsen.",
        showCompletedPage: "Vis afslutningssiden til slut (completedHtml)",
        goNextPageAutomatic: "Gå til næste side automatisk når alle spørgsmål er besvaret",
        showProgressBar: "Vis fremdriftslinje",
        questionTitleLocation: "Spørgsmålstitel placering",
        requiredText: "Påkrævet spørgsmålssymbol(er)",
        questionStartIndex: "Spørgsmål startindex (1, 2 eller 'A', 'a')",
        showQuestionNumbers: "Vis spørgsmålsnumre",
        questionTitleTemplate: "Spørgsmålstitel template, standard er: '{no}. {require} {title}'",
        questionErrorLocation: "Spørgsmålsfejl placering",
        focusFirstQuestionAutomatic: "Fokusér første spørgsmål ved sideskift",
        questionsOrder: "Rækkefølge af spørgsmål på siden",
        maxTimeToFinish: "Maximal tid til at gennemføre undersøgelsen",
        maxTimeToFinishPage: "Maximal tid til at gennemføre en side i undersøgelsen",
        showTimerPanel: "Vis tidspanel",
        showTimerPanelMode: "Vis tidspanel tilstand",
        renderMode: "Renderingstilstand",
        allowAddPanel: "Tillad at tilføje et panel",
        allowRemovePanel: "Tillad at fjerne et panel",
        panelAddText: "Tilføj panel tekst",
        panelRemoveText: "Fjern panel tekst",
        isSinglePage: "Vis alle elementer på én side",
        tabs: {
            general: "Generelt",
            fileOptions: "Indstillinger",
            html: "Html-editor",
            columns: "Kolonner",
            rows: "Rækker",
            choices: "Valgmuligheder",
            items: "Elementer",
            visibleIf: "Synlig hvis",
            enableIf: "Aktiv hvis",
            rateValues: "Bedøm-værdier",
            choicesByUrl: "Valgmuligheder fra Web",
            matrixChoices: "Standard valgmuligheder",
            multipleTextItems: "Tekst inputmuligheder",
            validators: "Valideringer",
            navigation: "Navigation",
            question: "Spørgsmål",
            completedHtml: "Færdig Html",
            loadingHtml: "Indlæser Html",
            timer: "Tid/Quiz",
            triggers: "Triggere",
            templateTitle: "Skabelon titel"
        },
        editProperty: "Rediger egenskab '{0}'",
        items: "[ Element: {0} ]",
        enterNewValue: "Indtast værdien.",
        noquestions: "Der er ingen spørgsmål i undersøgelsen.",
        createtrigger: "Opret en trigger",
        triggerOn: "På ",
        triggerMakePagesVisible: "Gør sider synlige:",
        triggerMakeQuestionsVisible: "Gør spørgsmål synlige:",
        triggerCompleteText: "Aflslut spørgeskema ved at fortsætte.",
        triggerNotSet: "Triggerer er ikke sat",
        triggerRunIf: "Afvikl hvis",
        triggerSetToName: "Ændr værdien af: ",
        triggerFromName: "Kopier værdi fra: ",
        triggerRunExpression: "Afvikl dette udtryk:",
        triggerSetValue: "til: ",
        triggerIsVariable: "Gem ikke variablen i undersøgelsesresultatet."
    },
    //Property values
    pv: {
        true: "true",
        false: "false",
        inherit: "inherit",
        show: "show",
        hide: "hide",
        default: "default",
        initial: "initial",
        random: "random",
        collapsed: "collapsed",
        expanded: "expanded",
        none: "none",
        asc: "ascending",
        desc: "descending",
        indeterminate: "indeterminate",
        decimal: "decimal",
        currency: "currency",
        percent: "percent",
        firstExpanded: "firstExpanded",
        off: "off",
        onPanel: "onPanel",
        onSurvey: "onSurvey",
        list: "list",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        horizontal: "horizontal",
        vertical: "vertical",
        top: "top",
        bottom: "bottom",
        topBottom: "top and bottom",
        left: "left",
        color: "color",
        date: "date",
        datetime: "datetime",
        "datetime-local": "datetime-local",
        email: "email",
        month: "month",
        number: "number",
        password: "password",
        range: "range",
        tel: "tel",
        text: "text",
        time: "time",
        url: "url",
        week: "week",
        hidden: "hidden",
        on: "on",
        onPage: "onPage",
        edit: "edit",
        display: "display",
        onComplete: "onComplete",
        onHidden: "onHidden",
        all: "all",
        page: "page",
        survey: "survey",
        onNextPage: "onNextPage",
        onValueChanged: "onValueChanged"
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "less or equals"
    },
    //Embed window
    ew: {
        angular: "Benyt Angular version",
        jquery: "Benyt jQuery version",
        knockout: "Benyt Knockout version",
        react: "Benyt React version",
        vue: "Benyt Vue version",
        bootstrap: "For bootstrap framework",
        standard: "Ingen bootstrap",
        showOnPage: "Vis undersøgelsen på en side",
        showInWindow: "Vis undersøgelsen i et vindue",
        loadFromServer: "Hent undersøgelsen som JSON fra serveren",
        titleScript: "Scripts og styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Vælg siden for at teste den:"
    },
    validators: {
        answercountvalidator: "answer count",
        emailvalidator: "e-mail",
        expressionvalidator: "expression",
        numericvalidator: "numeric",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "undersøgelse gennemført",
        setvaluetrigger: "sæt værdi",
        copyvaluetrigger: "kopiér værdi",
        runexpressiontrigger: "afvikl udtry",
        visibletrigger: "skift synlighed"
    },
    //Properties
    p: {
        name: "navn",
        title: {
            name: "titel",
            title: "Lad den være tom hvis det er det samme som 'Navn'"
        },
        navigationButtonsVisibility: "navigationButtonsVisibility",
        questionsOrder: "questionsOrder",
        maxTimeToFinish: "maxTimeToFinish",
        visible: "visible",
        visibleIf: "visibleIf",
        questionTitleLocation: "questionTitleLocation",
        description: "description",
        state: "state",
        isRequired: "isRequired",
        indent: "indent",
        requiredErrorText: "requiredErrorText",
        startWithNewLine: "startWithNewLine",
        innerIndent: "innerIndent",
        page: "page",
        width: "width",
        commentText: "commentText",
        valueName: "valueName",
        enableIf: "enableIf",
        defaultValue: "defaultValue",
        correctAnswer: "correctAnswer",
        readOnly: "readOnly",
        validators: "validators",
        titleLocation: "titleLocation",
        hasComment: "hasComment",
        hasOther: "hasOther",
        choices: "choices",
        choicesOrder: "choicesOrder",
        choicesByUrl: "choicesByUrl",
        otherText: "otherText",
        otherErrorText: "otherErrorText",
        storeOthersAsComment: "storeOthersAsComment",
        label: "label",
        showTitle: "showTitle",
        valueTrue: "valueTrue",
        valueFalse: "valueFalse",
        cols: "cols",
        rows: "rows",
        placeHolder: "placeHolder",
        optionsCaption: "optionsCaption",
        expression: "expression",
        format: "format",
        displayStyle: "displayStyle",
        currency: "currency",
        useGrouping: "useGrouping",
        showPreview: "showPreview",
        allowMultiple: "allowMultiple",
        imageHeight: "imageHeight",
        imageWidth: "imageWidth",
        storeDataAsText: "storeDataAsText",
        maxSize: "maxSize",
        html: "html",
        columns: "columns",
        cells: "cells",
        isAllRowRequired: "isAllRowRequired",
        horizontalScroll: "horizontalScroll",
        cellType: "cellType",
        columnsLayout: "columnsLayout",
        columnColCount: "columnColCount",
        columnMinWidth: "columnMinWidth",
        rowCount: "rowCount",
        minRowCount: "minRowCount",
        maxRowCount: "maxRowCount",
        keyName: "keyName",
        keyDuplicationError: "keyDuplicationError",
        confirmDelete: "confirmDelete",
        confirmDeleteText: "confirmDeleteText",
        addRowLocation: "addRowLocation",
        addRowText: "addRowText",
        removeRowText: "removeRowText",
        items: "items",
        itemSize: "itemSize",
        colCount: "colCount",
        templateTitle: "templateTitle",
        templateDescription: "templateDescription",
        allowAddPanel: "allowAddPanel",
        allowRemovePanel: "allowRemovePanel",
        panelCount: "panelCount",
        minPanelCount: "minPanelCount",
        maxPanelCount: "maxPanelCount",
        panelsState: "panelsState",
        panelAddText: "panelAddText",
        panelRemoveText: "panelRemoveText",
        panelPrevText: "panelPrevText",
        panelNextText: "panelNextText",
        showQuestionNumbers: "showQuestionNumbers",
        showRangeInProgress: "showRangeInProgress",
        renderMode: "renderMode",
        templateTitleLocation: "templateTitleLocation",
        rateValues: "rateValues",
        rateMin: "rateMin",
        rateMax: "rateMax",
        rateStep: "rateStep",
        minRateDescription: "minRateDescription",
        maxRateDescription: "maxRateDescription",
        inputType: "inputType",
        size: "size",
        locale: "locale",
        focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
        completedHtml: "completedHtml",
        completedBeforeHtml: "completedBeforeHtml",
        loadingHtml: "loadingHtml",
        triggers: "triggers",
        cookieName: "cookieName",
        sendResultOnPageNext: "sendResultOnPageNext",
        showNavigationButtons: "showNavigationButtons",
        showPrevButton: "showPrevButton",
        showPageTitles: "showPageTitles",
        showCompletedPage: "showCompletedPage",
        showPageNumbers: "showPageNumbers",
        questionErrorLocation: "questionErrorLocation",
        showProgressBar: "showProgressBar",
        mode: "mode",
        goNextPageAutomatic: "goNextPageAutomatic",
        checkErrorsMode: "checkErrorsMode",
        clearInvisibleValues: "clearInvisibleValues",
        startSurveyText: "startSurveyText",
        pagePrevText: "pagePrevText",
        pageNextText: "pageNextText",
        completeText: "completeText",
        requiredText: "requiredText",
        questionStartIndex: "questionStartIndex",
        questionTitleTemplate: "questionTitleTemplate",
        firstPageIsStarted: "firstPageIsStarted",
        isSinglePage: "isSinglePage",
        maxTimeToFinishPage: "maxTimeToFinishPage",
        showTimerPanel: "showTimerPanel",
        showTimerPanelMode: "showTimerPanelMode",
        defaultPanelValue: "defaultPanelValue",
        defaultRowValue: "defaultRowValue",
        hasNone: "hasNone",
        noneText: "noneText",
        text: "text",
        minValue: "minimum value",
        maxValue: "maximum value",
        minLength: "minumum length",
        maxLength: "maximum length",
        allowDigits: "allow digits",
        minCount: "minumum count",
        maxCount: "maximum count",
        regex: "regular expression"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["da"] = danishStrings;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var frenchTranslation = {
    //Survey templates
    survey: {
        edit: "Éditer",
        dropQuestion: "Déposer votre question ici.",
        copy: "Copier",
        addToToolbox: "Ajouter à la boîte à outils",
        deletePanel: "Supprimer le panneau",
        deleteQuestion: "Supprimer la question",
        convertTo: "Convertir en"
    },
    //questionTypes
    qt: {
        checkbox: "Cases à cocher",
        comment: "Commentaire",
        dropdown: "Liste déroulante",
        file: "Fichier",
        html: "HTML",
        matrix: "Matrice (choix unique)",
        matrixdropdown: "Matrice (choix multiples)",
        matrixdynamic: "Matrice (lignes dynamiques)",
        multipletext: "Champ multilignes",
        panel: "Panneau",
        paneldynamic: "Panneau (panneaux dynamiques)",
        radiogroup: "Boutons radio",
        rating: "Évaluation",
        text: "Champ texte",
        boolean: "Booléen",
        expression: "Expression"
    },
    //Strings in Editor
    ed: {
        survey: "Questionnaire",
        editSurvey: "Éditer le questionnaire",
        addNewPage: "Ajouter une page",
        deletePage: "Supprimer une page",
        editPage: "Éditer une page",
        newPageName: "page",
        newQuestionName: "question",
        newPanelName: "panneau",
        testSurvey: "Tester le questionnaire",
        testSurveyAgain: "Tester à nouveau le questionnaire",
        testSurveyWidth: "Largeur du questionnaire : ",
        embedSurvey: "Intégrer le questionnaire",
        saveSurvey: "Sauvegarder le questionnaire",
        designer: "Éditeur de questionnaire",
        jsonEditor: "Éditer JSON",
        undo: "Annuler",
        redo: "Rétablir",
        options: "Options",
        generateValidJSON: "Générer un JSON valide",
        generateReadableJSON: "Générer un JSON lisible",
        toolbox: "Boîte à outils",
        toolboxGeneralCategory: "Général",
        delSelObject: "Supprimer l'objet sélectionné",
        editSelObject: "Éditer l'objet sélectionné",
        correctJSON: "SVP corrigez le JSON",
        surveyResults: "Résultat du questionnaire : ",
        modified: "Modifié",
        saving: "Sauvegarde en cours",
        saved: "Sauvegardé"
    },
    //Property names in table headers
    pel: {
        isRequired: "Obligatoire ?"
    },
    //Property Editors
    pe: {
        apply: "Appliquer",
        ok: "OK",
        cancel: "Annuler",
        reset: "Réinitialiser",
        close: "Fermer",
        delete: "Supprimer",
        addNew: "Ajouter un nouveau",
        addItem: "Cliquer pour ajouter un item...",
        removeAll: "Tout supprimer",
        edit: "Éditer",
        move: "Déplacer",
        empty: "<vide>",
        notEmpty: "<éditer la valeur>",
        fastEntry: "Ajout rapide",
        formEntry: "Ajout via formulaire",
        testService: "Tester le service",
        conditionSelectQuestion: "Sélectionner une question...",
        conditionButtonAdd: "Ajouter",
        conditionButtonReplace: "Remplacer",
        conditionHelp: 'Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = "valeur1" or ({question2} = 3 and {question3} < 5)',
        expressionHelp: "Veuillez entrer une expression. Vous pouvez utiliser des accolades pour accéder aux valeurs des questions '{question1} + {question2}', '({prix}*{quantite}) * (100 - {remise})'",
        aceEditorHelp: "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
        aceEditorRowTitle: "Ligne courante",
        aceEditorPanelTitle: "Panneau courant",
        showMore: "Pour plus d'informations, veuillez vous référer à la documentation",
        assistantTitle: "Questions disponibles :",
        cellsEmptyRowsColumns: "Il faut au minimum une ligne ou une colonne",
        propertyIsEmpty: "Veuillez entrer une valeur pour la propriété",
        value: "Valeur",
        text: "Texte",
        columnEdit: "Éditer la colonne: {0}",
        itemEdit: "Éditer l'item: {0}",
        url: "URL",
        path: "Chemin",
        valueName: "Nom de la valeur",
        titleName: "Nom du titre",
        hasOther: "Contient un autre item",
        otherText: "Autre item texte",
        name: "Nom",
        title: "Titre",
        cellType: "Type de cellule",
        colCount: "Nombre de colonnes",
        choicesOrder: "Sélectionner l'ordre des choix",
        visible: "Est visible ?",
        isRequired: "Est obligatoire ?",
        startWithNewLine: "Commencer avec une nouvelle ligne ?",
        rows: "Nombre de lignes",
        placeHolder: "Placeholder (indice dans le champ)",
        showPreview: "L'aperçu d'image est-il affiché ?",
        storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
        maxSize: "Taille maximum du fichier en octets",
        imageHeight: "Hauteur de l'image",
        imageWidth: "Largeur de l'image",
        rowCount: "Nombre de lignes",
        addRowText: 'Texte bouton "Ajouter une ligne"',
        removeRowText: 'Texte bouton "Supprimer une ligne"',
        minRateDescription: "Description note minimum",
        maxRateDescription: "Description note maximum",
        inputType: "Type de champ",
        optionsCaption: "Texte par défaut",
        defaultValue: "Valeur par défaut",
        cellsDefaultRow: "Texte de cellule par défaut",
        surveyEditorTitle: "Éditer les préférences du questionnaire",
        qEditorTitle: "Éditer la question: {0}",
        //survey
        showTitle: "Afficher/cacher le titre",
        locale: "Langue par défaut",
        mode: "Mode (édition/lecture seule)",
        clearInvisibleValues: "Effacer les valeurs invisibles",
        cookieName: "Nom du cookie (pour empêcher de compléter 2 fois le questionnaire localement)",
        sendResultOnPageNext: "Envoyer les résultats au changement de page",
        storeOthersAsComment: 'Sauvegarder la valeur "Autres" dans un champ séparé',
        showPageTitles: "Afficher les titres de pages",
        showPageNumbers: "Afficher les numéros de pages",
        pagePrevText: "Texte bouton page précédente",
        pageNextText: "Texte bouton page suivante",
        completeText: "Texte bouton terminer",
        startSurveyText: "Texte bouton commencer",
        showNavigationButtons: "Afficher les boutons de navigation (navigation par défaut)",
        showPrevButton: "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
        firstPageIsStarted: "La première page du questionnaire est une page de démarrage.",
        showCompletedPage: 'Afficher la page "terminé" à la fin (completedHtml)',
        goNextPageAutomatic: "Aller à la page suivante automatiquement pour toutes les questions",
        showProgressBar: "Afficher la barre de progression",
        questionTitleLocation: "Emplacement du titre de la question",
        requiredText: "La question requiert un/des symbole(s)",
        questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
        showQuestionNumbers: "Afficher les numéros de questions",
        questionTitleTemplate: "Gabarit du titre de question, par défaut : '{no}. {require} {title}'",
        questionErrorLocation: "Emplacement de l'erreur",
        focusFirstQuestionAutomatic: "Focus sur la première question au changement de page",
        questionsOrder: "Ordre des éléments sur la page",
        maxTimeToFinish: "Temps maximum pour terminer le questionnaire",
        maxTimeToFinishPage: "Temps maximum pour terminer une page",
        showTimerPanel: "Afficher le panneau chronomètre",
        showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
        renderMode: "Mode de rendu",
        allowAddPanel: "Autoriser l'ajout du panneau",
        allowRemovePanel: "Autoriser la suppression du panneau",
        panelAddText: "Ajouter un panneau texte",
        panelRemoveText: "Supprimer le panneau texte",
        isSinglePage: "Afficher tous les éléments sur une seule page",
        tabs: {
            general: "Général",
            fileOptions: "Options",
            html: "Éditeur HTML",
            columns: "Colonnes",
            rows: "Lignes",
            choices: "Choix",
            visibleIf: "Visible si",
            enableIf: "Actif si",
            rateValues: "Barème",
            choicesByUrl: "Choix depuis API web",
            matrixChoices: "Choix par défaut",
            multipleTextItems: "Champs texte multiples",
            validators: "Validateurs",
            navigation: "Navigation",
            question: "Question",
            completedHtml: "HTML de fin",
            loadingHtml: "HTML de chargement",
            timer: "Chronomètre/Quiz",
            triggers: "Déclencheurs",
            templateTitle: "Titre de gabarit"
        },
        editProperty: 'Éditer la propriété "{0}"',
        items: "[ Éléments: {0} ]",
        enterNewValue: "Veuillez saisir la valeur.",
        noquestions: "Il n'y a aucune question dans le questionnaire.",
        createtrigger: "Veuillez créer un déclencheur",
        triggerOn: "Quand ",
        triggerMakePagesVisible: "Rendre les pages visibles :",
        triggerMakeQuestionsVisible: "Rendre les questions visibles :",
        triggerCompleteText: "Terminer le questionnaire en cas de succès.",
        triggerNotSet: "Le déclencheur n'est pas défini",
        triggerRunIf: "Exécuter si",
        triggerSetToName: "Changer la valeur de: ",
        triggerSetValue: "à: ",
        triggerIsVariable: "Ne placez pas la variable dans le résultat du questionnaire."
    },
    //Property values
    pv: {
        true: "vrai",
        false: "faux",
        inherit: "hérité",
        show: "afficher",
        hide: "masquer",
        default: "par défaut",
        initial: "initial",
        random: "aléatoire",
        collapsed: "replié",
        expanded: "déployé",
        none: "aucun",
        asc: "ascendant",
        desc: "descendant",
        indeterminate: "indeterminé",
        decimal: "décimal",
        currency: "monnaie",
        percent: "pourcentage",
        firstExpanded: "déployé en premier",
        off: "désactivé",
        onPanel: "panneau",
        onSurvey: "questionnaire",
        list: "liste",
        progressTop: "Progression en haut",
        progressBottom: "Progression en bas",
        progressTopBottom: "Progression en haut et en bas",
        top: "haut",
        bottom: "bas",
        left: "gauche",
        color: "couleur",
        date: "date",
        datetime: "heure",
        "datetime-local": "heure locale",
        email: "email",
        month: "mois",
        number: "nombre",
        password: "mot de passe",
        range: "jauge",
        tel: "tél.",
        text: "texte",
        time: "heure",
        url: "URL",
        week: "semaine",
        hidden: "masqué",
        on: "activé",
        onPage: "page",
        edit: "éditer",
        display: "affichage",
        onComplete: "onComplete",
        onHidden: "onHidden",
        all: "tous",
        page: "page",
        survey: "questionnaire"
    },
    //Operators
    op: {
        empty: "est vide",
        notempty: "n'est pas vide",
        equal: "égal",
        notequal: "n'est pas égal",
        contains: "contient",
        notcontains: "ne contient pas",
        greater: "supérieur",
        less: "inférieur",
        greaterorequal: "supérieur ou égal",
        lessorequal: "inférieur ou égal"
    },
    //Embed window
    ew: {
        angular: "Utiliser la version Angular",
        jquery: "Utiliser la version jQuery",
        knockout: "Utiliser la version Knockout",
        react: "Utiliser la version React",
        vue: "Utiliser la version Vue",
        bootstrap: "Pour le framework Bootstrap",
        standard: "Sans Bootstrap",
        showOnPage: "Afficher le questionnaire dans une page",
        showInWindow: "Afficher le questionnaire dans une fenêtre",
        loadFromServer: "Charger le JSON du questionnaire depuis un serveur",
        titleScript: "Scripts et styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Sélectionner une page pour la tester"
    },
    //Validators
    validators: {
        answercountvalidator: "total de réponses",
        emailvalidator: "e-mail",
        numericvalidator: "numérique",
        regexvalidator: "regex",
        textvalidator: "texte"
    },
    //Triggers
    triggers: {
        completetrigger: "terminer le questionnaire",
        setvaluetrigger: "définir la valeur",
        visibletrigger: "modifier la visibilité"
    },
    //Properties
    p: {
        name: "Nom",
        title: {
            name: "Titre",
            title: 'Laissez vide, si même texte que le "Nom"'
        },
        navigationButtonsVisibility: "Visibilité des boutons de navigation",
        questionsOrder: "Ordre des questions",
        maxTimeToFinish: "Temps maximum pour terminer",
        visible: "Visible",
        visibleIf: "Visible si ",
        questionTitleLocation: "Emplacement titre question",
        description: "Description",
        state: "État",
        isRequired: "Obligatoire ?",
        requiredErrorText: "Message d'erreur text obligatoire",
        startWithNewLine: "Commencer avec une nouvelle ligne",
        innerIndent: "Indentation",
        page: "page",
        width: "largeur",
        commentText: "Description champ commentaire",
        valueName: "Nom de la valeur",
        enableIf: "Activer si",
        defaultValue: "Valeur par défaut",
        correctAnswer: "Bonne réponse",
        readOnly: "Lecture seule",
        validators: "Validateurs",
        titleLocation: "Emplacement du titre",
        hasComment: "Champ commentaire ?",
        hasOther: "Choix autre ?",
        choices: "Choix",
        choicesOrder: "Ordre des choix",
        choicesByUrl: "Choix par API",
        otherText: "Autre texte",
        otherErrorText: 'Texte d\'erreur champ "Autre"',
        storeOthersAsComment: "Sauvegarder choix autre comme commentaire",
        label: "Intitulé",
        showTitle: "Afficher le titre",
        valueTrue: "Valeur vrai",
        valueFalse: "Valeur faux",
        cols: "Colonnes",
        rows: "Nombre de lignes",
        placeHolder: "PlaceHolder (indice dans le champ)",
        optionsCaption: "Texte par défaut",
        expression: "Expression",
        format: "Format",
        displayStyle: "Style d'affichage",
        currency: "Monnaie",
        useGrouping: "Utiliser les groupes",
        showPreview: "Voir la prévisualisation",
        allowMultiple: "Autoriser multiples",
        imageHeight: "Hauteur de l'image",
        imageWidth: "Largeur de l'image",
        storeDataAsText: "Stocker les données comme du texte",
        maxSize: "Taille maximum",
        html: "HTML",
        columns: "Colonnes",
        cells: "Cellules",
        horizontalScroll: "Scroll horizontal",
        cellType: "Type de cellule",
        columnColCount: "Nombre de colonnes",
        columnMinWidth: "Largeur minimale des colonnes",
        rowCount: "Nombre de lignes",
        minRowCount: "Nombre de lignes minimum",
        maxRowCount: "Nombre de lignes maximum",
        keyName: "Nom de la clé",
        keyDuplicationError: "Erreur de clés multiples",
        confirmDelete: "Confirmation de suppression",
        confirmDeleteText: "Texte de confirmation de suppression",
        addRowText: "Bouton ajouter une ligne",
        removeRowText: "Bouton supprimer une ligne",
        items: "Items",
        itemSize: "Nombre maximum de caractères",
        colCount: "Nombre de colonnes",
        templateTitle: "Titre de gabarit",
        templateDescription: "Description du gabarit",
        allowAddPanel: "Autoriser l'ajout de panneau",
        allowRemovePanel: "Autoriser la suppression de panneau",
        panelCount: "Nombre de panneaux",
        minPanelCount: "Nombre minimum de panneaux",
        maxPanelCount: "Nombre maximum de panneaux",
        panelsState: "État des panneaux",
        panelAddText: "Texte d'ajout des panneaux",
        panelRemoveText: "Texte de suppression des panneaux",
        panelPrevText: "Texte panneau précédent",
        panelNextText: "Texte panneau suivant",
        showQuestionNumbers: "Numérotation des questions",
        showRangeInProgress: "Afficher la progression",
        renderMode: "Mode de rendu",
        templateTitleLocation: "Emplacement du titre de gabarit",
        rateValues: "Barème",
        rateMin: "Valeur minimum",
        rateMax: "Valeur maximum",
        rateStep: "Pas",
        minRateDescription: "Description note minimum",
        maxRateDescription: "Description note maximum",
        inputType: "Type de champ",
        size: "Nombre maximum de caractères",
        focusFirstQuestionAutomatic: "Focus automatique sur la première question",
        completedHtml: "HTML questionnaire finalisé",
        completedBeforeHtml: "HTML avant complétion du questionnaire",
        loadingHtml: "HTML de chargement",
        triggers: "Déclencheurs",
        cookieName: "Nom du cookie",
        sendResultOnPageNext: "Envoyer les résultats au changement de page",
        showNavigationButtons: "Boutons de navigation",
        showPrevButton: "Afficher le bouton précédent",
        showPageTitles: "Titre des pages",
        showCompletedPage: "Voir la page formulaire complété ?",
        showPageNumbers: "Numérotation des pages",
        questionErrorLocation: "Emplacement des erreurs",
        showProgressBar: "Barre de progression",
        mode: "Mode d'affichage",
        goNextPageAutomatic: "Aller à la page suivante automatiquement",
        clearInvisibleValues: "Cacher les valeurs invisibles",
        startSurveyText: "Texte de démarrage du questionnaire",
        pagePrevText: "Bouton page précédente",
        pageNextText: "Bouton page suivante",
        completeText: "Texte questionnaire finalisé",
        requiredText: "Texte pour les champs obligatoires",
        questionStartIndex: "Index de numérotation des questions",
        questionTitleTemplate: "Template d'affichage des questions",
        firstPageIsStarted: "Commence à la première page",
        isSinglePage: "Affiché sur une page",
        maxTimeToFinishPage: "Temps maximum pour finir la page",
        showTimerPanel: "Afficher le panneau chronomètre",
        showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
        indent: "Indentation",
        isAllRowRequired: "Toutes les lignes sont-elle obligatoires ?",
        locale: "Langue"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["fr"] = frenchTranslation;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var germanTranslation = {
    //survey templates
    survey: {
        edit: "Bearbeiten",
        dropQuestion: "Frage bitte hier platzieren.",
        copy: "Kopieren",
        addToToolbox: "Zur Werkzeugleiste hinzufügen",
        deletePanel: "Panel löschen",
        deleteQuestion: "Frage löschen"
    },
    //questionTypes
    qt: {
        checkbox: "Checkbox",
        comment: "Kommentar",
        dropdown: "Aufklappmenü",
        file: "Datei",
        html: "Html",
        matrix: "Matrix (einfache Auswahl)",
        matrixdropdown: "Matrix (mehrfache Auswahl)",
        matrixdynamic: "Matrix (dynamische Zeilen)",
        multipletext: "Mehrzeiliger Text",
        panel: "Panel",
        paneldynamic: "Panel (dynamische Panels)",
        radiogroup: "Radiogruppe",
        rating: "Bewertung",
        text: "Einfache	Eingabe",
        boolean: "Boolean"
    },
    //Strings in Editor
    ed: {
        survey: "Umfrage",
        addNewPage: "Neue Seite hinzufügen",
        newPageName: "Seite",
        newQuestionName: "Frage",
        newPanelName: "Panel",
        testSurvey: "Testumfrage",
        testSurveyAgain: "Testumfrage wiederholen",
        testSurveyWidth: "Umfragebreite: ",
        embedSurvey: "Umfrage einfügen",
        saveSurvey: " Umfrage speichern",
        designer: "Umfrage Designer",
        jsonEditor: "JSON Editor",
        undo: "Rückgängig",
        redo: "Wiederherstellen",
        options: "Optionen",
        generateValidJSON: "Generiere gültiges JSON",
        generateReadableJSON: "Generiere lesbares JSON",
        toolbox: "Werkzeugleiste",
        delSelObject: "Lösche markiertes Objekt",
        correctJSON: "Bitte JSON korrigieren.",
        surveyResults: "Umfrageergebnis: "
    },
    //Property names in table headers
    pel: {
        isRequired: "Erforderlich?"
    },
    //Property Editors
    pe: {
        apply: "Anwenden",
        ok: "OK",
        cancel: "Abbrechen",
        reset: "Zurücksetzen",
        close: "Schliessen",
        delete: "Löschen",
        addNew: "Neu hinzufügen",
        removeAll: "Alles löschen",
        edit: "Bearbeiten",
        empty: "<leer>",
        fastEntry: "Schnell-Eintrag",
        formEntry: "Formular-Eintrag",
        testService: "Service testen",
        expressionHelp: "Bitte geben Sie eine booleschen Ausdruck ein. Es muss 'true' retournieren um die Frage/Seite anzuzeigen. zum Beispiel: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        propertyIsEmpty: "Bitte geben Sie einen Wert ein",
        value: "Wert",
        text: "Text",
        columnEdit: "Spalte bearbeiten: {0}",
        itemEdit: "Element bearbeiten: {0}",
        hasOther: "Hat ein anderes Element",
        name: "Name",
        title: "Titel",
        cellType: "Zellentyp",
        colCount: "Spaltenanzahl",
        choicesOrder: "Wähle Auswahlreihenfolge",
        visible: "Ist es sichtbar?",
        isRequired: "Ist es erforderlich?",
        startWithNewLine: "In neuer Zeile beginnen?",
        rows: "Zeilenanzahl",
        placeHolder: "Platzhalter eingeben",
        showPreview: "Wird eine Bildvorschau angezeigt?",
        storeDataAsText: "Speicher Dateininhalt des JSON-Resultats als Text",
        maxSize: "Maximale Dateigrösse in Bytes",
        imageHeight: "Bildhöhe",
        imageWidth: "Bildbreite",
        rowCount: "Zeilenanzahl",
        addRowText: "Zeilenknopftext hinzufügen",
        removeRowText: "Zeilenknopftext löschen",
        minRateDescription: "Bewertungsbeschreibung minimieren",
        maxRateDescription: "Bewertungsbeschreibung maximieren",
        inputType: "Eingabetyp",
        optionsCaption: "Auswahlbeschriftung",
        qEditorTitle: "Frage bearbeiten: {0}",
        tabs: {
            general: "Allgemein",
            fileOptions: "Optionen",
            html: "Html Editor",
            columns: "Spalten",
            rows: "Zeilen",
            choices: "Auswahlmöglichkeiten",
            visibleIf: "Sichtbar wenn",
            rateValues: "Bewertungswerte",
            choicesByUrl: "Auswahlmöglichkeiten vom Internet",
            matrixChoices: "Standardauswahl",
            multipleTextItems: "Texteingabe",
            validators: "Überprüfung"
        },
        editProperty: "Eigenschaft bearbeiten '{0}'",
        items: "[ Gegenstand: {0} ]",
        enterNewValue: "Bitte einen Wert eingeben.",
        noquestions: "Die Umfrage enthält keine Frage.",
        createtrigger: "Bitte einen Trigger eingeben.",
        triggerOn: "Ein ",
        triggerMakePagesVisible: "Seiten sichtbar machen:",
        triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
        triggerCompleteText: "Bei Erfolg die Umfrage abschliessen.",
        triggerNotSet: "Kein Trigger eingerichtet",
        triggerRunIf: "Ausführen wenn",
        triggerSetToName: "Ändere Wert von: ",
        triggerSetValue: "auf: ",
        triggerIsVariable: "Variable nicht im Umfrageergebnis einbinden."
    },
    //Property values
    pv: {
        true: "true",
        false: "false"
    },
    //Operators
    op: {
        empty: "ist leer",
        notempty: "ist nicht leer",
        equal: "ist gleich",
        notequal: "ist ungleich",
        contains: "enthält",
        notcontains: "enthält nicht",
        greater: "grösser als",
        less: "kleiner als",
        greaterorequal: "grösser oder kleiner als",
        lessorequal: "kleiner oder ist gleich"
    },
    //Embed window
    ew: {
        angular: "Angular-Version benutzen",
        jquery: "jQuery-Version benutzen",
        knockout: "Knockout-Version benutzen",
        react: "React-Version benutzen",
        vue: "Vue-Version benutzen",
        bootstrap: "Als Bootstrap Framework",
        standard: "Kein Bootstrap",
        showOnPage: "Zeige Umfrage auf Seite",
        showInWindow: "Zeige Umfrage als Fenster",
        loadFromServer: "Lade Umfrage als JSON vom Server",
        titleScript: "Skripte und Styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    validators: {
        answercountvalidator: "Anzahl Antworten",
        emailvalidator: "E-Mail",
        numericvalidator: "numerisch",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "Umfrage abschliessen",
        setvaluetrigger: "Wert setzen",
        visibletrigger: "Sichtbarkeit ändern"
    },
    //Properties
    p: {
        name: "Name",
        title: {
            name: "Titel",
            title: "Bitte leer lassen, falls gleich wie 'Name'"
        },
        survey_title: { name: "Titel", title: "Wird auf jeder Seite angezeigt." },
        page_title: { name: "title", title: "Seitentitel" }
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["de"] = germanTranslation;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var italianTranslation = {
    // strings for survey templates
    survey: {
        edit: "Modifica",
        dropQuestion: "Aggiungi una domanda qui",
        copy: "Copia",
        addToToolbox: "Aggiungi alla toolbox",
        deletePanel: "Elimina pannello",
        deleteQuestion: "Elimina domanda",
        convertTo: "Converti a"
    },
    // strings for question types
    qt: {
        checkbox: "Casella di controllo ",
        comment: "Commento",
        dropdown: "Combo",
        file: "Archivio",
        html: "Html",
        matrix: "Matrice (unica opzione)",
        matrixdropdown: "Matrice (opzioni multiple)",
        matrixdynamic: "Matrice (dinamica)",
        multipletext: "Testo multiplo",
        panel: "Pannello",
        paneldynamic: "Pannello (dinamico)",
        radiogroup: "Opzione multipla",
        rating: "Valutazione",
        text: "Testo semplice",
        expression: "Espressione"
    },
    // strings for editor
    ed: {
        survey: "Questionario",
        editSurvey: "Modifica Questionario",
        addNewPage: "Aggiungi Nuova Pagina",
        deletePage: "Elimina Pagina",
        editPage: "Modifica Pagina",
        newPageName: "pagina",
        newQuestionName: "domanda",
        newPanelName: "pannello",
        testSurvey: "Testa questionario",
        testSurveyAgain: "Testa questionario di nuovo",
        testSurveyWidth: "Larghezza questionario:",
        embedSurvey: "Includi questionario",
        saveSurvey: "Salva questionario",
        designer: "Disegna",
        jsonEditor: "Modifica JSON",
        undo: "Annulla",
        redo: "Ripeti",
        options: "Opzioni",
        generateValidJSON: "Genera JSON valido",
        generateReadableJSON: "Genera JSON leggibile",
        toolbox: "Strumenti",
        delSelObject: "Elimina oggetto selezionato",
        editSelObject: "Modifica oggetto selezionato",
        correctJSON: "Per favore, correggi il tuo JSON",
        surveyResults: "Risultati del questionario: ",
        modified: "Modificato",
        saving: "Salvataggio",
        saved: "Salvato"
    },
    //Property names in table headers
    pel: {
        isRequired: "Richiesto"
    },
    // strings for property editors
    pe: {
        apply: "Applica",
        ok: "Accetta",
        cancel: "Annulla",
        reset: "Reimposta",
        close: "Chiudi",
        delete: "Elimina",
        addNew: "Nuovo",
        removeAll: "Elimina tutto",
        edit: "Modifica",
        empty: "<vuoto>",
        notEmpty: "<modifica valore>",
        fastEntry: "Inserimento rapido",
        formEntry: "Inserimento con dati ",
        testService: "Test del servizio",
        conditionSelectQuestion: "Seleziona domanda...",
        conditionButtonAdd: "Aggiungi",
        conditionButtonReplace: "Sostituisci",
        conditionHelp: "Per favore, inserire una espressione booleana. Dovrebbe restituire true per mantenere la domanda/pagina visibile. Ad esempio: {domanda1} = 'valore1' or ({domanda2} * {domanda4}  > 20 and {domanda3} < 5)",
        expressionHelp: "Per favore inserire una espressione. Puoi usare parentesi graffe per ottenere l'accesso ai valori delle domande: '{domanda1} + {domanda2}', '({prezzo}*{qta}) * (100 - {sconto})'",
        aceEditorHelp: "Premi ctrl+space per ottenere un suggerimento sul completamento dell'espressione",
        aceEditorRowTitle: "Riga corrente",
        aceEditorPanelTitle: "Pannello Corrente",
        showMore: "Per favore, per maggiori dettagli guardare la documentazione",
        assistantTitle: "Domande disponibili:",
        cellsEmptyRowsColumns: "Dovrebbe esserci almeno una colonna o riga",
        propertyIsEmpty: "Per favore, inserire un valore per la propietà",
        value: "Valore",
        text: "Testo",
        columnEdit: "Modifica colonna: {0}",
        itemEdit: "Modifica elemento: {0}",
        url: "URL",
        path: "Percorso",
        valueName: "Nome Valore",
        titleName: "Nome Titolo",
        hasOther: "Altri elementi",
        otherText: "Testo altri elementi",
        name: "Nome",
        title: "Titolo",
        cellType: "Tipo di cella",
        colCount: "Numero di colonne",
        choicesOrder: "Seleziona altre opzioni",
        visible: "Visibile",
        isRequired: "Richiesto",
        startWithNewLine: "Nuova linea",
        rows: "Numero di righe",
        placeHolder: "Testo di riferimento",
        showPreview: "Mostra anteprima",
        storeDataAsText: "Vedi il contenuto JSON come testo",
        maxSize: "Dimensione massima in bytes",
        imageHeight: "Altezza immagine",
        imageWidth: "Larghezza immagine",
        rowCount: "Numero delle righe",
        addRowText: "Testo del pulsante per aggiungere una nuova righa",
        removeRowText: "Testo del pulsante per eliminare una righa",
        minRateDescription: "Descrizione del valore minimo",
        maxRateDescription: "Descrizione del valore massimo",
        inputType: "Tipo di inserimento",
        optionsCaption: "Titolo dell'opzione",
        defaultValue: "Valore default",
        cellsDefaultRow: "Valore default celle",
        surveyEditorTitle: "Edit survey settings",
        qEditorTitle: "Modifica domanda: {0}",
        //survey
        showTitle: "Mostra/nascondi titolo",
        locale: "Lingua Default",
        mode: "Modalità (modifica/sola lettura)",
        clearInvisibleValues: "Pulischi valori non visibili",
        cookieName: "Nome cookie (per disabilitare esegui il questionario due volte in locale)",
        sendResultOnPageNext: "Invia i risultati del sondaggio alla pagina successiva",
        storeOthersAsComment: "Memorizza il valore 'altri' in campi separati",
        showPageTitles: "Visualizza titoli pagina",
        showPageNumbers: "Visualizza numeri pagina",
        pagePrevText: "Testo bottone pagina precedente",
        pageNextText: "Testo bottone pagina successiva",
        completeText: "Testo bottone Completato",
        startSurveyText: "Testo bottone Inizia",
        showNavigationButtons: "Visualizza bottoni di navigazione (navigazione di default)",
        showPrevButton: "Visualizza bottone precedente(l'utente può tornare alla pagina precedente)",
        firstPageIsStarted: "La prima pagina nel questionario è la pagina iniziale.",
        showCompletedPage: "Visualizza la pagina completata alla fine del questionario (completedHtml)",
        goNextPageAutomatic: "Rispondendo a tutte le domande, vai alla pagina successiva in automatico.",
        showProgressBar: "Visualizza barra di avanzamento",
        questionTitleLocation: "Posizione titolo domanda",
        requiredText: "Simbolo domanda obbligatoria, esempio (*)",
        questionStartIndex: "La domanda inizia con l'indice (1, 2 oppure 'A', 'a')",
        showQuestionNumbers: "Visualizza i numeri di domanda",
        questionTitleTemplate: "Template titolo della domanda, il default è: '{no}. {require} {title}'",
        questionErrorLocation: "Posizione notifica errore sulla domanda",
        focusFirstQuestionAutomatic: "Sul cambio pagina, posiziona il cursore sulla prima domanda",
        questionsOrder: "Ordine di elementi sulla pagina",
        maxTimeToFinish: "Tempo massimo per terminare il sondaggio",
        maxTimeToFinishPage: "Tempo massimo per terminare una pagina del sondaggio",
        showTimerPanel: "Visualizza pannello timer",
        showTimerPanelMode: "Visualizza modalità timer pannello",
        renderMode: "Modalità di rendering",
        allowAddPanel: "Consenti l'aggiunta di un pannello",
        allowRemovePanel: "Consenti la rimozione di un pannello",
        panelAddText: "Aggiungi testo pannello",
        panelRemoveText: "Remuovi testo pannello",
        isSinglePage: "Visualizza tutti gli elementi su una pagina",
        tabs: {
            general: "Generale",
            fileOptions: "Opzioni",
            html: "Modifica Html",
            columns: "Colonne",
            rows: "Righe",
            choices: "Scelte",
            visibleIf: "Visibile se",
            rateValues: "Volori della classifica",
            choicesByUrl: "Opzioni dal Web",
            matrixChoices: "Opzioni predefinite",
            multipleTextItems: "Voci di testo",
            validators: "Validazioni",
            navigation: "Navigazione",
            question: "Domanda",
            completedHtml: "Html questionario completato",
            loadingHtml: "Html caricamento questionario",
            timer: "Timer/Quiz",
            triggers: "Triggers",
            templateTitle: "Template titolo"
        },
        editProperty: "Modifca propietà '{0}'",
        items: "[ Elemento: {0} ]",
        enterNewValue: "Si prega di inserire il valore.",
        noquestions: "Non c'è alcun dubbio nel questionario.",
        createtrigger: "Si prega di creare un trigger",
        triggerOn: "Attivazione ",
        triggerMakePagesVisible: "Rendere visibili le pagine:",
        triggerMakeQuestionsVisible: "Rendere visibili le domande:",
        triggerCompleteText: "Completare il questionario, in caso di successo.",
        triggerNotSet: "Non impostato",
        triggerRunIf: "Esegui se",
        triggerSetToName: "Cambia il valore a: ",
        triggerSetValue: "a: ",
        triggerIsVariable: "Non posizionare la variabile del risultato del questionario"
    },
    // strings for operators
    op: {
        empty: "è vuoto",
        notempty: "non è vuoto ",
        equal: "è uguale a",
        notequal: "non è uguale a",
        contains: "contiene",
        notcontains: "non contiene",
        greater: "maggiore",
        less: "minore",
        greaterorequal: "maggiore o uguale",
        lessorequal: "minore o uguale"
    },
    // strings for embed window
    ew: {
        angular: "Versione per Angular",
        jquery: "Versione per jQuery",
        knockout: "Versione per Knockout",
        react: "Versione per React",
        vue: "Versione per Vue",
        bootstrap: "Per framework bootstrap",
        standard: "No bootstrap",
        showOnPage: "Visualizza in questa pagina",
        showInWindow: "Visualizza in una finestra",
        loadFromServer: "Carica JSON dal server",
        titleScript: "Scripts e stili",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Seleziona la pagina da testare:"
    },
    validators: {
        answercountvalidator: "numero risposte",
        emailvalidator: "e-mail",
        numericvalidator: "numerico",
        regexvalidator: "regex",
        textvalidator: "testo"
    },
    triggers: {
        completetrigger: "completa questionario",
        setvaluetrigger: "setta valore",
        visibletrigger: "cambia visibilità"
    },
    // strings of properties
    p: {
        name: "nome",
        title: {
            name: "titolo",
            title: "Lascia vuoto se è lo stesso di 'Nome'"
        },
        page_title: { name: "titolo", title: "Titolo della pagina" }
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["it"] = italianTranslation;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);
/* unused harmony export koreanStrings */

var koreanStrings = {
    //survey templates
    survey: {
        edit: "편집",
        dropQuestion: "왼쪽 도구상자에서 질문을 여기에 놓으십시오.",
        copy: "복사",
        addToToolbox: "도구상자에 추가",
        deletePanel: "패널 삭제",
        deleteQuestion: "질문 삭제",
        convertTo: "다음으로 변경",
        drag: "항목 끌어오기"
    },
    //questionTypes
    qt: {
        default: "기본값",
        checkbox: "체크박스",
        comment: "설명",
        dropdown: "드롭다운",
        file: "파일",
        html: "HTML",
        matrix: "행렬 (단일 선택)",
        matrixdropdown: "행렬 (복수 선택)",
        matrixdynamic: "행렬 (동적 행)",
        multipletext: "텍스트 상자 그룹",
        panel: "패널",
        paneldynamic: "패널 (동적 패널)",
        radiogroup: "라디오 그룹",
        rating: "등급",
        text: "텍스트 상자",
        boolean: "불린(boolean)",
        expression: "표현식"
    },
    //Strings in Editor
    ed: {
        survey: "설문지",
        settings: "설정",
        editSurvey: "설문지 편집",
        addNewPage: "새 페이지 추가",
        moveRight: "오른쪽으로 스크롤",
        moveLeft: "왼쪽으로 스크롤",
        deletePage: "페이지 삭제",
        editPage: "페이지 편집",
        edit: "편집",
        newPageName: "페이지",
        newQuestionName: "질문",
        newPanelName: "패널",
        testSurvey: "테스트 설문지",
        testSurveyAgain: "테스트 설문지 다시하기",
        testSurveyWidth: "설문지 너비: ",
        embedSurvey: "내장 설문지",
        saveSurvey: "설문지 저장",
        designer: "설문지 디자인",
        jsonEditor: "JSON 편집기",
        undo: "실행 취소",
        redo: "복원",
        options: "옵션",
        generateValidJSON: "JSON 데이터 생성",
        generateReadableJSON: "생성 JSON 데이터 읽기",
        toolbox: "도구상자",
        toolboxGeneralCategory: "일반",
        delSelObject: "선택한 객체 삭제",
        editSelObject: "선택한 객체 편집",
        correctJSON: "JSON 데이터를 수정하십시오.",
        surveyResults: "설문 결과: ",
        modified: "수정됨",
        saving: "저장중",
        saved: "저장됨"
    },
    //Property names in table headers
    pel: {
        isRequired: "필수입니까?"
    },
    //Property Editors
    pe: {
        apply: "적용",
        ok: "확인",
        cancel: "취소",
        reset: "재설정",
        close: "닫기",
        delete: "삭제",
        addNew: "새로 만들기",
        addItem: "항목을 추가하려면 클립하십시오.",
        removeAll: "모두 삭제",
        edit: "편집",
        itemValueEdit: "조건 충족 시 보기",
        editChoices: "선택사항 편집",
        move: "이동",
        empty: "<비어있음>",
        notEmpty: "<편집 값>",
        fastEntry: "빠른 입력",
        formEntry: "양식 입력",
        testService: "서비스 테스트",
        conditionSelectQuestion: "질문 선택...",
        conditionValueQuestionTitle: "값을 입력하거나 선택하십시오.",
        conditionButtonAdd: "추가",
        conditionButtonReplace: "바꾸기",
        conditionHelp: "불린 식을 입력하십시오. 질문 혹은 페이지를 계속 볼 수 있게 하려면 참값을 반환해야 합니다. 예를 들면: {질문1} = '값1' or ({질문2} * {질문4}  > 20 and {질문3} < 5)",
        expressionHelp: "식을 입력하십시오. 다음과 같은 질문 값에 접근하려면 중괄호를 이용하십시오: '{질문1} + {질문2}', '({가격}*{수량}) * (100 - {할인})'",
        aceEditorHelp: "ctrl+space를 눌러 완성된 수식에 대한 힌트를 얻으십시오",
        aceEditorRowTitle: "현재 행",
        aceEditorPanelTitle: "현재 패널",
        showMore: "자세한 내용은 설명서를 확인하십시오.",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "유효 질문:",
        cellsEmptyRowsColumns: "최소한 하나의 열 또는 행이 있어야 합니다.",
        propertyIsEmpty: "값을 입력하십시오",
        value: "값",
        text: "텍스트",
        columnEdit: "열 편집: {0}",
        itemEdit: "항목 편집: {0}",
        url: "URL",
        path: "경로",
        valueName: "값 이름",
        titleName: "제목 이름",
        hasOther: "다른 항목이 있습니다",
        otherText: "기타 항목 텍스트",
        name: "이름",
        title: "제목",
        cellType: "셀 유형",
        colCount: "열 개수",
        choicesOrder: "항목 순서 선택",
        visible: "보입니까??",
        isRequired: "필수입니까?",
        startWithNewLine: "새 줄로 시작하겠습니까?",
        rows: "행 수",
        placeHolder: "입력 자리 표시자 ",
        showPreview: "이미지 미리보기가 표시됩니까?",
        storeDataAsText: "파일 내용을 JSON 결과에 텍스트로 저장",
        maxSize: "최대 파일 크기(bytes)",
        imageHeight: "이미지 높이",
        imageWidth: "이미지 너비",
        rowCount: "행 수",
        columnsLocation: "열 위치",
        addRowLocation: "행 버튼 위치 추가",
        addRowText: "행 버튼 텍스트 추가",
        removeRowText: "행 버튼 텍스트 제거",
        minRateDescription: "최소 설명 길이",
        maxRateDescription: "최대 설명 길이",
        inputType: "입력 유형",
        optionsCaption: "옵션 캡션",
        defaultValue: "기본값",
        cellsDefaultRow: "기본 셀 텍스트",
        surveyEditorTitle: "설문지 설정 편집",
        qEditorTitle: "편집: {0}",
        //survey
        showTitle: "제목 표시/숨김",
        locale: "기본 언어",
        mode: "모드(편집/읽기전용)",
        clearInvisibleValues: "보이지 않는 값 지우기",
        cookieName: "쿠키 이름(로컬에서 설문 조사를 두 번 사용하지 않도록 설정)",
        sendResultOnPageNext: "다음 페이지에서 설문 조사 결과 보내기",
        storeOthersAsComment: "다른 사용자의 값을 별도의 필드에 저장",
        showPageTitles: "페이지 제목 표시",
        showPageNumbers: "페이지 번호 표시",
        pagePrevText: "이전 페이지 버튼 텍스트",
        pageNextText: "다음 페이지 버튼 텍스트",
        completeText: "완료 버튼 텍스트",
        startSurveyText: "시작 버튼 텍스트",
        showNavigationButtons: "탐색 버튼 표시 (기본 탐색)",
        showPrevButton: "이전 버튼 표시 (사용자가 이전 페이지로 돌아갈 수 있음)",
        firstPageIsStarted: "설문지의 첫 번째 페이지는 시작 페이지입니다",
        showCompletedPage: "끝 부분에 완료된 페이지 표시 (완료된 HTML)",
        goNextPageAutomatic: "모든 질문에 응답 후 자동으로 다음 페이지로 이동",
        showProgressBar: "진행률 막대 표시",
        questionTitleLocation: "질문 제목 위치",
        requiredText: "질문에 필요한 기호",
        questionStartIndex: "질문 시작 색인 (1, 2 또는 'A', 'a')",
        showQuestionNumbers: "질문 번호 표시",
        questionTitleTemplate: "질문 제목 템플릿입니다. 기본값: '{no}. {require} {title}'",
        questionErrorLocation: "질문 위치 오류",
        focusFirstQuestionAutomatic: "페이지 변경시 첫 번째 질문에 초점",
        questionsOrder: "페이지의 요소 순서",
        maxTimeToFinish: "설문 조사를 마칠 수있는 최대 시간",
        maxTimeToFinishPage: "설문 조사에서 페이지를 마칠 수있는 최대 시간",
        showTimerPanel: "타이머 패널 표시",
        showTimerPanelMode: "타이머 패널 모드 표시",
        renderMode: "렌더링 모드",
        allowAddPanel: "패널 추가 허용",
        allowRemovePanel: "패널 제거 허용",
        panelAddText: "패널 텍스트 추가",
        panelRemoveText: "패널 텍스트 삭제",
        isSinglePage: "한 페이지에 모든 요소 표시",
        tabs: {
            general: "일반",
            fileOptions: "옵션",
            html: "Html 편집기",
            columns: "열",
            rows: "행",
            choices: "선택",
            items: "항목",
            visibleIf: "조건 충족시 보기",
            enableIf: "조건 충족시 허용",
            rateValues: "길이 값",
            choicesByUrl: "웹에서 선택",
            matrixChoices: "기본 선택",
            multipleTextItems: "텍스트 입력",
            validators: "유효성 검사기",
            navigation: "탐색",
            question: "질문",
            completedHtml: "완료된 HTML",
            loadingHtml: "HTML 로드 중",
            timer: "타이머 / 퀴즈",
            triggers: "트리거",
            templateTitle: "템플릿 제목"
        },
        editProperty: "편집 속성 '{0}'",
        items: "[ 항목: {0} ]",
        enterNewValue: "값을 입력하십시오.",
        noquestions: "설문 조사에는 어떤 질문도 없습니다.",
        createtrigger: "트리거를 만드십시오",
        triggerOn: "트리거 켜기",
        triggerMakePagesVisible: "페이지 표시:",
        triggerMakeQuestionsVisible: "요소 표시:",
        triggerCompleteText: "조건 충족 시 설문 조사를 작성하십시오.",
        triggerNotSet: "트리거가 설정되지 않았습니다.",
        triggerRunIf: "다음 조건 충족 시 실행",
        triggerSetToName: "다음 값 변경: ",
        triggerSetValue: "다음으로 수정: ",
        triggerIsVariable: "변수를 설문 결과에 넣지 마십시오."
    },
    //Property values
    pv: {
        true: "참",
        false: "거짓",
        inherit: "상속",
        show: "보기",
        hide: "숨기기",
        default: "기본값",
        initial: "초기값",
        random: "무작위",
        collapsed: "축소",
        expanded: "확장",
        none: "없음",
        asc: "오름차순",
        desc: "내림차순",
        indeterminate: "불확정",
        decimal: "진수",
        currency: "화폐",
        percent: "퍼센트",
        firstExpanded: "우선 확장",
        off: "꺼짐",
        onPanel: "패널에서",
        onSurvey: "설문에서",
        list: "목록",
        progressTop: "상단 진행률",
        progressBottom: "하단 진행률",
        progressTopBottom: "상하단 진행률",
        horizontal: "가로",
        vertical: "세로",
        top: "위",
        bottom: "아래",
        topBottom: "위아래",
        left: "왼쪽",
        color: "색상",
        date: "날짜",
        datetime: "날짜/시간",
        "datetime-local": "현지 날짜/시간",
        email: "이메일",
        month: "월",
        number: "숫자",
        password: "패스워드",
        range: "범위",
        tel: "tel",
        text: "텍스트",
        time: "시간",
        url: "URL",
        week: "주",
        hidden: "숨김",
        on: "켜기",
        onPage: "페이지 켜기",
        edit: "편집",
        display: "디스플레이",
        onComplete: "완료",
        onHidden: "숨김",
        all: "모두",
        page: "페이지",
        survey: "설문지",
        onNextPage: "다음 페이지로",
        onValueChanged: "값 변경"
    },
    //Operators
    op: {
        empty: "비어있습니다",
        notempty: "비어있지 않습니다",
        equal: "같습니다",
        notequal: "같지 않습니다",
        contains: "포함합니다",
        notcontains: "포함하지 않습니다",
        greater: "큰",
        less: "작은",
        greaterorequal: "크거나 같음",
        lessorequal: "작거나 같음"
    },
    //Embed window
    ew: {
        angular: "Angular 버전 사용",
        jquery: "jQuery 버전 사용",
        knockout: "Knockout 버전 사용",
        react: "React 버전 사용",
        vue: "Vue 버전 사용",
        bootstrap: "부트 스트랩 프레임",
        standard: "부트 스트랩 없음",
        showOnPage: "페이지에서 설문조사 보기",
        showInWindow: "윈도우 창에서 설문조사 보기",
        loadFromServer: "서버에서 설문조사 JSON 실행",
        titleScript: "스크립트 및 스타일",
        titleHtml: "HTML",
        titleJavaScript: "자바스크립트"
    },
    //Test Survey
    ts: {
        selectPage: "테스트 할 페이지를 선택하십시오:"
    },
    validators: {
        answercountvalidator: "답 개수",
        emailvalidator: "이메일",
        expressionvalidator: "표현식",
        numericvalidator: "숫자",
        regexvalidator: "정규식",
        textvalidator: "텍스트"
    },
    triggers: {
        completetrigger: "설문 완료",
        setvaluetrigger: "값 설정",
        visibletrigger: "선명도 변경"
    },
    //Properties
    p: {
        name: "이름",
        title: {
            name: "제목",
            title: "'이름'과 같은 경우 비워 둡니다."
        },
        navigationButtonsVisibility: "탐색 버튼 선명도",
        questionsOrder: "질문 순서",
        maxTimeToFinish: "최대 완료 시간",
        visible: "보기",
        visibleIf: "조건 충족시 보기",
        questionTitleLocation: "질문 제목 위치",
        description: "설명",
        state: "state",
        isRequired: "필수",
        indent: "들여쓰기",
        requiredErrorText: "필수 오류 텍스트",
        startWithNewLine: "새 줄로 시작",
        innerIndent: "안으로 들여쓰기",
        page: "페이지",
        width: "너비",
        commentText: "메모 텍스트",
        valueName: "이름값",
        enableIf: "조건 충족시 허가",
        defaultValue: "기본값",
        correctAnswer: "답안 수정",
        readOnly: "읽기 전용",
        validators: "유효성 검사기",
        titleLocation: "제목 위치",
        hasComment: "답변",
        hasOther: "다른 답변 허용",
        choices: "선택",
        choicesOrder: "기타 선택",
        choicesByUrl: "URL을 통한 선택",
        otherText: "기타 텍스트",
        otherErrorText: "기타 오류 텍스트",
        storeOthersAsComment: "기타 답변 저장",
        label: "라벨",
        showTitle: "제목 표시",
        valueTrue: "참값",
        valueFalse: "거짓값",
        cols: "열",
        rows: "행",
        placeHolder: "자리 표시자",
        optionsCaption: "옵션 캡션",
        expression: "표현식",
        format: "포맷",
        displayStyle: "디스플레이 스타일",
        currency: "화폐",
        useGrouping: "그룹 사용",
        showPreview: "미리보기 보기",
        allowMultiple: "다수 허용",
        imageHeight: "이미지 높이",
        imageWidth: "이미지 너비",
        storeDataAsText: "텍스트로 데이터 저장",
        maxSize: "최대 크기",
        html: "HTML",
        columns: "열",
        cells: "셀",
        isAllRowRequired: "모두 필수 행입니까",
        horizontalScroll: "가로 스크롤바",
        cellType: "셀 유형",
        columnsLocation: "열 위치",
        columnColCount: "열 개수",
        columnMinWidth: "열 최소 너비",
        rowCount: "행 수",
        minRowCount: "최소 행 개수",
        maxRowCount: "최대 행 개수",
        keyName: "keyName",
        keyDuplicationError: "주요 복제 에러",
        confirmDelete: "삭제 확인",
        confirmDeleteText: "텍스트 삭제 확인",
        addRowLocation: "행 위치 추가",
        addRowText: "행 텍스트 추가",
        removeRowText: "행 텍스트 제거",
        items: "항목",
        itemSize: "항목 크기",
        colCount: "열 개수",
        templateTitle: "템플릿 이름",
        templateDescription: "템플릿 설명",
        allowAddPanel: "패널 추가 허용",
        allowRemovePanel: "패널 제거 허용",
        panelCount: "패널 개수",
        minPanelCount: "최소 패널 개수",
        maxPanelCount: "최대 패널 개수",
        panelsState: "panelsState",
        panelAddText: "패널 텍스트 추가",
        panelRemoveText: "패널 텍스트 제거",
        panelPrevText: "이전 패널 텍스트",
        panelNextText: "다음 패널 텍스트",
        showQuestionNumbers: "질문 개수 보기",
        showRangeInProgress: "진행중인 범위 보기",
        renderMode: "renderMode",
        templateTitleLocation: "템플릿 이름 위치",
        rateValues: "길이값",
        rateMin: "최소 길이",
        rateMax: "최대 길이",
        rateStep: "rateStep",
        minRateDescription: "최소 설명 길이",
        maxRateDescription: "최대 설명 길이",
        inputType: "입력 유형",
        size: "크기",
        locale: "로컬",
        focusFirstQuestionAutomatic: "첫 질문 자동 초점",
        completedHtml: "완료된 HTML",
        completedBeforeHtml: "완료된 이전 HTML",
        loadingHtml: "HTML 로드",
        triggers: "트리거",
        cookieName: "쿠키 이름",
        sendResultOnPageNext: "현 페이지로 결과 전송",
        showNavigationButtons: "탐색 버튼 보기",
        showPrevButton: "뒤로가기 버튼 보기",
        showPageTitles: "페이지 제목 보기",
        showCompletedPage: "완료 페이지 보기",
        showPageNumbers: "페이지 수 보기",
        questionErrorLocation: "질문 오류 위치",
        showProgressBar: "진행 상태바 보기",
        mode: "모드",
        goNextPageAutomatic: "다음 페이지로 자동으로 넘어가기",
        checkErrorsMode: "오류 모드 확인",
        clearInvisibleValues: "보이지 않는 변수 제거",
        startSurveyText: "설문 테스트 시작",
        pagePrevText: "이전 텍스트 페이지",
        pageNextText: "다음 텍스트 페이지",
        completeText: "완료 텍스트",
        requiredText: "필수 텍스트",
        questionStartIndex: "질문 시작 색인",
        questionTitleTemplate: "질문 제목 템플릿",
        firstPageIsStarted: "첫 페이지에서 시작",
        isSinglePage: "단일 페이지",
        maxTimeToFinishPage: "페이지 종료 최대 시간",
        showTimerPanel: "타이머 패널 보기",
        showTimerPanelMode: "타이머 패널 모드 보기",
        text: "텍스트",
        minValue: "최소값",
        maxValue: "최대값",
        minLength: "최소 길이",
        maxLength: "최대 길이",
        allowDigits: "숫자 허용",
        minCount: "최소 개수",
        maxCount: "최대 개수",
        regex: "정규 표현식"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["ko"] = koreanStrings;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);
/* unused harmony export nbStrings */
//Uncomment this line on creating a translation file

var nbStrings = {
    //survey templates
    survey: {
        edit: "Rediger",
        dropQuestion: "Dra og slipp et spørsmål her fra Verktøylisten til venstre.",
        copy: "Kopier",
        addToToolbox: "Legg til Verktøylisten",
        deletePanel: "Slett Panel",
        deleteQuestion: "Slett spørsmål",
        convertTo: "Konverter til",
        drag: "Dra element"
    },
    //questionTypes
    qt: {
        default: "Standard",
        checkbox: "Sjekkboks",
        comment: "Kommentar",
        imagepicker: "Bilde-velger",
        dropdown: "Nedtrekksliste",
        file: "Fil",
        html: "Html",
        matrix: "Matrise (enkelvalg)",
        matrixdropdown: "Matrise (flere valg)",
        matrixdynamic: "Matrise (dynamiske rader)",
        multipletext: "Flerlinje tekst",
        panel: "Panel",
        paneldynamic: "Panel (dynamisk panel)",
        radiogroup: "Radiogruppe",
        rating: "Rangering",
        text: "Enkel tekst",
        boolean: "Boolean",
        expression: "Formel"
    },
    //Strings in Editor
    ed: {
        defaultLocale: "Standard ({0})",
        survey: "Skjema",
        settings: "Skjema innstillinger",
        editSurvey: "Rediger skjema",
        addNewPage: "Legg til ny side",
        moveRight: "Bla til høyre",
        moveLeft: "Bla til venstre",
        deletePage: "Slett side",
        editPage: "Rediger side",
        edit: "Rediger",
        newPageName: "side",
        newQuestionName: "spørsmål",
        newPanelName: "panel",
        testSurvey: "Test skjema",
        testSurveyAgain: "Test skjema igjen",
        testSurveyWidth: "Skjema bredde: ",
        embedSurvey: "Integrer skjema",
        translation: "Oversettelse",
        saveSurvey: "Lagre skjema",
        designer: "Skjema Designer",
        jsonEditor: "JSON Redigering",
        undo: "Angre",
        redo: "Gjenta",
        options: "Alternativer",
        generateValidJSON: "Lag gyldig JSON",
        generateReadableJSON: "Lag lesbar JSON",
        toolbox: "Verktøyliste",
        toolboxGeneralCategory: "Generelt",
        delSelObject: "Slett valgte elementer",
        editSelObject: "Rediger valgte elementer",
        correctJSON: "Vennligst korriger JSON.",
        surveyResults: "Skjema resultat: ",
        surveyResultsTable: "Som tabell",
        surveyResultsJson: "Som JSON",
        resultsTitle: "Spørsmål tittel",
        resultsName: "Spørsmål navn",
        resultsValue: "Svar verdi",
        resultsDisplayValue: "Vist verdi",
        modified: "Endret",
        saving: "Lagrer",
        saved: "Lagret",
        saveError: "Feil! Skjema innhold er ikke lagret.",
        translationAddLanguage: "Velg språk for oversetting",
        translationShowAllStrings: "Vis alle strenger",
        translationShowAllPages: "Vis alle sider",
        translationNoStrings: "Ingen strenger å oversette. Vennligst endre filteret.",
        translationExportToSCVButton: "Eksporter til CSV",
        translationImportFromSCVButton: "Importer fra CSV",
        translationMergeLocaleWithDefault: "Flett {0} med standard språk"
    },
    //Property names in table headers
    pel: {
        isRequired: "Nødvendig?"
    },
    //Property Editors
    pe: {
        apply: "Bruk",
        ok: "OK",
        cancel: "Avbryt",
        reset: "Tilbakestill",
        close: "Lukk",
        delete: "Slett",
        addNew: "Legg til ny",
        addItem: "Klikk for å legge til...",
        removeAll: "Fjern alt",
        edit: "Rediger",
        itemValueEdit: "Synlig dersom",
        editChoices: "Rediger valg",
        move: "Flytt",
        empty: "<tom>",
        notEmpty: "<rediger verdi>",
        fastEntry: "Rask innfylling",
        formEntry: "Innfylling i skjema",
        testService: "Sjekk tjenesten",
        conditionSelectQuestion: "Velg spørsmål...",
        conditionValueQuestionTitle: "Vennligst skriv inn/velg verdi",
        conditionButtonAdd: "Legg til",
        conditionButtonReplace: "Erstatt",
        conditionHelp: "Skriv inn et boolsk uttrykk. Det burde returnere SANN for å gjøre spørsmål/side synlig. For eksempel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "Vennligst skriv inn et uttrykk.  Du kan bruke klammeparenteser for å få tilgang til spørsmåls verdiene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
        aceEditorHelp: "Trykk ctrl+mellomrom for å få hint til å fullføre uttrykk",
        aceEditorRowTitle: "Gjeldende rad",
        aceEditorPanelTitle: "Gjeldende panel",
        showMore: "For mer detaljer - se dokumentasjonen",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "Tilgjengelige spørsmål:",
        cellsEmptyRowsColumns: "Det må være minst 1 kolonne eller rad",
        propertyIsEmpty: "Vennligst fyll inn en verdi",
        value: "Verdi",
        text: "Tekst",
        rowid: "Rad ID",
        imageLink: "Bilde lenke",
        columnEdit: "Rediger kolonne: {0}",
        itemEdit: "Rediger element: {0}",
        url: "URL",
        path: "Sti",
        valueName: "Verdi navn",
        titleName: "Tittel navn",
        hasOther: "Har annet element",
        otherText: "Annet element tekst",
        name: "Navn",
        title: "Tittel",
        cellType: "Celle type",
        colCount: "Antall kolonner",
        choicesOrder: "Velg rekkefølge på valg",
        visible: "Er synlig?",
        isRequired: "Er nødvendig?",
        startWithNewLine: "Er start med ny linje?",
        rows: "Antall rader",
        placeHolder: "Inndate plassholder",
        showPreview: "Er forhåndsvisning av bilde vist?",
        storeDataAsText: "Lagre fil innhold i JSON resultat som tekst",
        maxSize: "Maksimum filstørrelse i bytes",
        imageHeight: "Bilde høyde",
        imageWidth: "Bilde bredde",
        rowCount: "Antall rader",
        columnLayout: "Oppsett kolonner",
        addRowLocation: "Legg til rad knapp plassering",
        addRowText: "Legg til rad knapp tekst",
        removeRowText: "Fjern rad knapp tekst",
        minRateDescription: "Beskrivelse Minimum vudering",
        maxRateDescription: "Beskrivelse Maksimum vurdering",
        inputType: "Inndata type",
        optionsCaption: "Tekst for alternativer",
        defaultValue: "Standard verdi",
        cellsDefaultRow: "Standard celle tekster",
        surveyEditorTitle: "Rediger skjema innstillinger",
        qEditorTitle: "Rediger: {0}",
        maxLength: "Maksimum lengde",
        //survey
        showTitle: "Vis/skjul tittel",
        locale: "Standard språk",
        mode: "Modus (redigere/kun lesing)",
        clearInvisibleValues: "Fjern usynlige verdier",
        cookieName: "Informasjonskapsel navn (for å hindre bruk av skjema to ganger localt)",
        sendResultOnPageNext: "Send skjema resultat ved neste side",
        storeOthersAsComment: "Lagre 'andre' verdier i et separat felt",
        showPageTitles: "Vis sidetitel",
        showPageNumbers: "Vis sidenummer",
        pagePrevText: "Forrige side knapp tekst",
        pageNextText: "Neste side knapp tekst",
        completeText: "Fullfør knapp tekst",
        startSurveyText: "Start knapp tekst",
        showNavigationButtons: "Vis navigasjonsknapper (standard navigering)",
        showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
        firstPageIsStarted: "Den første siden i skjema er startside.",
        showCompletedPage: "Vis ferdigsiden på slutten (completedHtml)",
        goNextPageAutomatic: "Når en har svart alle spørsmål, gå til neste side automatisk",
        showProgressBar: "Vis fremdriftslinje",
        questionTitleLocation: "Spørsmål tittel plassering",
        requiredText: "Svar nødvendig symbol(er)",
        questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
        showQuestionNumbers: "Vis spørsmålsnummer",
        questionTitleTemplate: "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
        questionErrorLocation: "Spørsmål feil plassering",
        focusFirstQuestionAutomatic: "Sett fokus på første spørsmål når en endrer side",
        questionsOrder: "Rekkefølge på elementer på siden",
        maxTimeToFinish: "Maks tid for å gjøre ferdig skjema",
        maxTimeToFinishPage: "Maks tid til å gjøre ferdig en side i skjema",
        showTimerPanel: "Vis tidtaking",
        showTimerPanelMode: "Vis tidtaking modus",
        renderMode: "Gjengivelse modus",
        allowAddPanel: "Tillat å legge til panel",
        allowRemovePanel: "Tillat å fjerne panel",
        panelAddText: "Legg til panel tekst",
        panelRemoveText: "Fjern panel tekst",
        isSinglePage: "Vis alle elementer på en side",
        tabs: {
            general: "Generelt",
            fileOptions: "Alternativer",
            html: "Html-editor",
            columns: "Kolonner",
            rows: "Rader",
            choices: "Valg",
            items: "Elementer",
            visibleIf: "Synlig hvis",
            enableIf: "Tilgjengelig hvis",
            rateValues: "Rangering verdier",
            choicesByUrl: "Valg fra web",
            matrixChoices: "Standard valg",
            multipleTextItems: "Tekst inndata",
            validators: "Valideringer",
            navigation: "Navigering",
            question: "Spørsmål",
            completedHtml: "Fullført Html",
            loadingHtml: "Laster Html",
            timer: "Tidtaker/Quiz",
            triggers: "Triggere",
            templateTitle: "Mal tittel"
        },
        editProperty: "Rediger egenskap '{0}'",
        items: "[ Elementer: {0} ]",
        enterNewValue: "Vennligst skriv inn en verdi.",
        noquestions: "Der er ingen spørsmål i skjema.",
        createtrigger: "Vennligst lag en trigger",
        triggerOn: "Når ",
        triggerMakePagesVisible: "Gjør sider synlige:",
        triggerMakeQuestionsVisible: "Gjør elementer synlige:",
        triggerCompleteText: "Fullfør skjema dersom vellykket.",
        triggerNotSet: "Trigger er ikke satt",
        triggerRunIf: "Kjør dersom",
        triggerSetToName: "Endre verdien av: ",
        triggerFromName: "Kopier verdi fra: ",
        triggerRunExpression: "Kjør dette uttrykket:",
        triggerSetValue: "til: ",
        triggerIsVariable: "Ikke legg variabelen i resultatet."
    },
    //Property values
    pv: {
        true: "true",
        false: "false",
        inherit: "inherit",
        show: "show",
        hide: "hide",
        default: "default",
        initial: "initial",
        random: "random",
        collapsed: "collapsed",
        expanded: "expanded",
        none: "none",
        asc: "ascending",
        desc: "descending",
        indeterminate: "indeterminate",
        decimal: "decimal",
        currency: "currency",
        percent: "percent",
        firstExpanded: "firstExpanded",
        off: "off",
        onPanel: "onPanel",
        onSurvey: "onSurvey",
        list: "list",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        horizontal: "horizontal",
        vertical: "vertical",
        top: "top",
        bottom: "bottom",
        topBottom: "top and bottom",
        left: "left",
        color: "color",
        date: "date",
        datetime: "datetime",
        "datetime-local": "datetime-local",
        email: "email",
        month: "month",
        number: "number",
        password: "password",
        range: "range",
        tel: "tel",
        text: "text",
        time: "time",
        url: "url",
        week: "week",
        hidden: "hidden",
        on: "on",
        onPage: "onPage",
        edit: "edit",
        display: "display",
        onComplete: "onComplete",
        onHidden: "onHidden",
        all: "all",
        page: "page",
        survey: "survey",
        onNextPage: "onNextPage",
        onValueChanged: "onValueChanged"
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "less or equals"
    },
    //Embed window
    ew: {
        angular: "Bruk Angular versjon",
        jquery: "Bruk jQuery versjon",
        knockout: "Bruk Knockout versjon",
        react: "Bruk React versjon",
        vue: "Bruk Vue versjon",
        bootstrap: "For bootstrap framework",
        standard: "Ingen bootstrap",
        showOnPage: "Vis skjema på en side",
        showInWindow: "Vis skjema i et vindu",
        loadFromServer: "Hent skjema som JSON fra serveren",
        titleScript: "Scripts og styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Velg siden for å teste den:",
        showInvisibleElements: "Vis usynlige elementer"
    },
    validators: {
        answercountvalidator: "answer count",
        emailvalidator: "e-mail",
        expressionvalidator: "expression",
        numericvalidator: "numeric",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "skjema fullført",
        setvaluetrigger: "sett verdi",
        copyvaluetrigger: "kopier verdi",
        runexpressiontrigger: "kjør uttrykk",
        visibletrigger: "endre synlighet"
    },
    //Properties
    p: {
        name: "name",
        title: {
            name: "title",
            title: "La den være tom hvis det er samme som 'Name'"
        },
        navigationButtonsVisibility: "navigationButtonsVisibility",
        questionsOrder: "questionsOrder",
        maxTimeToFinish: "maxTimeToFinish",
        visible: "visible",
        visibleIf: "visibleIf",
        questionTitleLocation: "questionTitleLocation",
        description: "description",
        state: "state",
        isRequired: "isRequired",
        indent: "indent",
        requiredErrorText: "requiredErrorText",
        startWithNewLine: "startWithNewLine",
        innerIndent: "innerIndent",
        page: "page",
        width: "width",
        commentText: "commentText",
        valueName: "valueName",
        enableIf: "enableIf",
        defaultValue: "defaultValue",
        correctAnswer: "correctAnswer",
        readOnly: "readOnly",
        validators: "validators",
        titleLocation: "titleLocation",
        hasComment: "hasComment",
        hasOther: "hasOther",
        choices: "choices",
        choicesOrder: "choicesOrder",
        choicesByUrl: "choicesByUrl",
        otherText: "otherText",
        otherErrorText: "otherErrorText",
        storeOthersAsComment: "storeOthersAsComment",
        label: "label",
        showTitle: "showTitle",
        valueTrue: "valueTrue",
        valueFalse: "valueFalse",
        cols: "cols",
        rows: "rows",
        placeHolder: "placeHolder",
        optionsCaption: "optionsCaption",
        expression: "expression",
        format: "format",
        displayStyle: "displayStyle",
        currency: "currency",
        useGrouping: "useGrouping",
        showPreview: "showPreview",
        allowMultiple: "allowMultiple",
        imageHeight: "imageHeight",
        imageWidth: "imageWidth",
        storeDataAsText: "storeDataAsText",
        maxSize: "maxSize",
        html: "html",
        columns: "columns",
        cells: "cells",
        isAllRowRequired: "isAllRowRequired",
        horizontalScroll: "horizontalScroll",
        cellType: "cellType",
        columnsLayout: "columnsLayout",
        columnColCount: "columnColCount",
        columnMinWidth: "columnMinWidth",
        rowCount: "rowCount",
        minRowCount: "minRowCount",
        maxRowCount: "maxRowCount",
        keyName: "keyName",
        keyDuplicationError: "keyDuplicationError",
        confirmDelete: "confirmDelete",
        confirmDeleteText: "confirmDeleteText",
        addRowLocation: "addRowLocation",
        addRowText: "addRowText",
        removeRowText: "removeRowText",
        items: "items",
        itemSize: "itemSize",
        colCount: "colCount",
        templateTitle: "templateTitle",
        templateDescription: "templateDescription",
        allowAddPanel: "allowAddPanel",
        allowRemovePanel: "allowRemovePanel",
        panelCount: "panelCount",
        minPanelCount: "minPanelCount",
        maxPanelCount: "maxPanelCount",
        panelsState: "panelsState",
        panelAddText: "panelAddText",
        panelRemoveText: "panelRemoveText",
        panelPrevText: "panelPrevText",
        panelNextText: "panelNextText",
        showQuestionNumbers: "showQuestionNumbers",
        showRangeInProgress: "showRangeInProgress",
        renderMode: "renderMode",
        templateTitleLocation: "templateTitleLocation",
        rateValues: "rateValues",
        rateMin: "rateMin",
        rateMax: "rateMax",
        rateStep: "rateStep",
        minRateDescription: "minRateDescription",
        maxRateDescription: "maxRateDescription",
        inputType: "inputType",
        size: "size",
        locale: "locale",
        focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
        completedHtml: "completedHtml",
        completedBeforeHtml: "completedBeforeHtml",
        loadingHtml: "loadingHtml",
        triggers: "triggers",
        cookieName: "cookieName",
        sendResultOnPageNext: "sendResultOnPageNext",
        showNavigationButtons: "showNavigationButtons",
        showPrevButton: "showPrevButton",
        showPageTitles: "showPageTitles",
        showCompletedPage: "showCompletedPage",
        showPageNumbers: "showPageNumbers",
        questionErrorLocation: "questionErrorLocation",
        showProgressBar: "showProgressBar",
        mode: "mode",
        goNextPageAutomatic: "goNextPageAutomatic",
        checkErrorsMode: "checkErrorsMode",
        clearInvisibleValues: "clearInvisibleValues",
        startSurveyText: "startSurveyText",
        pagePrevText: "pagePrevText",
        pageNextText: "pageNextText",
        completeText: "completeText",
        requiredText: "requiredText",
        questionStartIndex: "questionStartIndex",
        questionTitleTemplate: "questionTitleTemplate",
        firstPageIsStarted: "firstPageIsStarted",
        isSinglePage: "isSinglePage",
        maxTimeToFinishPage: "maxTimeToFinishPage",
        showTimerPanel: "showTimerPanel",
        showTimerPanelMode: "showTimerPanelMode",
        defaultPanelValue: "defaultPanelValue",
        defaultRowValue: "defaultRowValue",
        hasNone: "hasNone",
        noneText: "noneText",
        text: "text",
        minValue: "minimum value",
        maxValue: "maximum value",
        minLength: "minumum length",
        maxLength: "maximum length",
        allowDigits: "allow digits",
        minCount: "minumum count",
        maxCount: "maximum count",
        regex: "regular expression"
    }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["nb"] = nbStrings;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var persianStrings = {
    //survey templates
    survey: {
        edit: "ویرایش",
        dropQuestion: "لطفا از جعبه ابزار سوالی در اینجا قرار دهید",
        copy: "کپی",
        addToToolbox: "افزودن به جعبه ابزار",
        deletePanel: "حذف پنل",
        deleteQuestion: "حذف سوال",
        convertTo: "تبدیل به"
    },
    //questionTypes
    qt: {
        checkbox: "چند انتخابی",
        comment: "نظر",
        dropdown: "لیست انتخابی",
        file: "فایل",
        html: "Html",
        matrix: "ماتریس (تک انتخابی)",
        matrixdropdown: "ماتریس (چند انتخابی)",
        matrixdynamic: "ماتریس (سطرهای داینامیک)",
        multipletext: "متن چند خطی",
        panel: "پنل",
        paneldynamic: "پنل (پنل های داینامیک)",
        radiogroup: "تک انتخابی",
        rating: "رتبه بندی",
        text: "متن تک خطی",
        boolean: "صحیح و غلط",
        expression: "توصیفی"
    },
    //Strings in Editor
    ed: {
        defaultLocale: "پیش فرض ({0})",
        survey: "نظرسنجی",
        editSurvey: "ویرایش نظرسنجی",
        addNewPage: "درج صفحه جدید",
        moveRight: "اسکرول به راست",
        moveLeft: "اسکرول به چپ",
        deletePage: "حذف صفحه",
        editPage: "ویرایش صفحه",
        edit: "ویرایش",
        newPageName: "صفحه",
        newQuestionName: "سوال",
        newPanelName: "پنل",
        testSurvey: "آزمایش نظرسنجی",
        testSurveyAgain: "آزمایش دوباره نظرسنجی",
        testSurveyWidth: "عرض نظرسنجی: ",
        embedSurvey: "نظرسنجی توکار",
        translation: "ترجمه",
        saveSurvey: "ذخیره نظرسنجی",
        designer: "طراح نظرسنجی",
        jsonEditor: "ویرایشگر JSON",
        undo: "بازگردانی",
        redo: "بازانجام",
        options: "انتخاب ها",
        generateValidJSON: "تولید کد معتبر JSON",
        generateReadableJSON: "تولید کد خوانا JSON",
        toolbox: "جعبه ابزار",
        toolboxGeneralCategory: "عمومی",
        delSelObject: "حذف مورد انتخابی",
        editSelObject: "ویرایش مورد انتخابی",
        correctJSON: "لطفا JSON را تصحیح کنید.",
        surveyResults: "نتایج نظرسنجی: ",
        surveyResultsTable: "به صورت جدول",
        surveyResultsJson: "به صورت JSON",
        resultsTitle: "عنوان سوال",
        resultsName: "نام سوال",
        resultsValue: "محتوای پاسخ",
        resultsDisplayValue: "محتوای نمایشی",
        modified: "تغییر داده شده",
        saving: "در حال ذخیره",
        saved: "ذخیره شد",
        saveError: "خطا! محتوای ویرایشگر ذخیره نشده است.",
        translationAddLanguage: "زبانی را برای ترجمه انتخاب کنید",
        translationShowAllStrings: "نمایش تمام عبارات",
        translationShowAllPages: "نمایش تمام صفحات",
        translationNoStrings: "هیچ عبارتی برای ترجمه نیست، لطفا فیلتر را عوض کنید.",
        translationExportToSCVButton: "برون بری به CSV",
        translationImportFromSCVButton: "برون ریزی از CSV",
        translationMergeLocaleWithDefault: "ادغام {0} با زبان پیش فرض"
    },
    //Property names in table headers
    pel: {
        isRequired: "اجباری؟"
    },
    //Property Editors
    pe: {
        apply: "اعمال",
        ok: "تایید",
        cancel: "لغو",
        reset: "بازنشانی",
        close: "بستن",
        delete: "حذف",
        addNew: "افزودن",
        removeAll: "حذف همه",
        edit: "ویرایش",
        empty: "<خالی>",
        fastEntry: "تکمیل سریع",
        formEntry: "تکمیل فرم",
        testService: "بررسی سرویس",
        conditionHelp: "لطفا یک مقدار بولین توصیفی وارد کنید که صحیح یا غلط را برگرداند تا صفحه سوالات نمایش داده شود. برای مثال: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "لطفا یک عبارت توصیفی را وارد کنید. شما ممکن است از کروشه برای دسترسی به مقدار سوالات استفاده کنید. برای مثال: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        aceEditorHelp: "برای مشاهده نکات تکمیلی ctrl+space را بفشارید",
        aceEditorRowTitle: "سطر فعلی",
        aceEditorPanelTitle: "پنل فعلی",
        showMore: "برای اطلاعات بیشتر لطفا سند راهنما را مطالعه کنید",
        assistantTitle: "سوالات موجود:",
        propertyIsEmpty: "لطفا یک مقدار وارد کنید",
        value: "مقدار",
        text: "متن",
        columnEdit: "ویرایش ستون: {0}",
        itemEdit: "ویرایش آیتم: {0}",
        url: "URL",
        path: "Path",
        valueName: "نام مقدار",
        titleName: "نام عنوان",
        hasOther: "دارای آیتم دیگر",
        name: "نام",
        title: "عنوان",
        cellType: "نوع سلول",
        colCount: "تعداد ستون",
        choicesOrder: "ترتیب گزینه را انتخاب کنید",
        visible: "نمایش داده شود؟",
        isRequired: "ضروری است؟",
        startWithNewLine: "با سطر جدید شروع شود؟",
        rows: "تعداد سطر",
        placeHolder: "نگهدارنده متن",
        showPreview: "پیش نمایش تصویر نشان داده شود؟",
        storeDataAsText: "ذخیره کردن محتوای فایل در JSON به عنوان متن",
        maxSize: "حداکثر سایز به بایت",
        imageHeight: "ارتفاع تصویر",
        imageWidth: "عرض تصویر",
        rowCount: "تعداد سطر",
        addRowText: "متن دکمه درج سطر",
        removeRowText: "متن دکمه حذف سطر",
        minRateDescription: "توضیح حداقل امتیاز",
        maxRateDescription: "توضیح حداکثر امتیاز",
        inputType: "نوع ورودی",
        optionsCaption: "نوشته انتخاب ها",
        defaultValue: "مقدار پیش فرض",
        surveyEditorTitle: "ویرایش نظرسنجی",
        qEditorTitle: "ویرایش سوال: {0}",
        //survey
        showTitle: "نمایش/پنهان کردن عنوان",
        locale: "زبان پیش فرض",
        mode: "حالت (ویرایش/خواندن)",
        clearInvisibleValues: "پاکسازی مقادیر پنهان",
        cookieName: "نام کوکی (به منظور جلوگیری از اجرای دوباره نظرسنجی)",
        sendResultOnPageNext: "ارسال نتایج نظرسنجی در صفحه بعدی",
        storeOthersAsComment: "ذخیره مقدار 'سایر' در فیلد جداگانه",
        showPageTitles: "نمایش عنوان صفحات",
        showPageNumbers: "نمایش شماره صفحات",
        pagePrevText: "متن دکمه صفحه قبلی",
        pageNextText: "متن دکمه صفحه بعدی",
        completeText: "متن دکمه تکمیل نظرسنجی",
        startSurveyText: "متن دکمه شروع نظرسنجی",
        showNavigationButtons: "نمایش دکمه های ناوبری (ناوبری پیش فرض)",
        showPrevButton: "نمایش دکمه قبلی (کاربر ممکن است به صفحه قبل برگردد)",
        firstPageIsStarted: "صفحه اول در نظرسنجی نقطه آغازین آن است.",
        showCompletedPage: "نمایش صفحه اتمام نظرسنجی در پایان (completedHtml)",
        goNextPageAutomatic: "با پاسخگویی به تمام سوالات، به صورت اتوماتیک به صفحه بعد برود",
        showProgressBar: "نمایش نشانگر پیشرفت",
        questionTitleLocation: "محل عنوان سوال",
        requiredText: "سوالات نشان دار اجباری هستند",
        questionStartIndex: "نمایه شروع سوالات (۱،۲ یا a و b)",
        showQuestionNumbers: "نمایش شماره های سوالات",
        questionTitleTemplate: "قالب عنوان سوال، به صورت پیش فرض: '{no}. {require} {title}'",
        questionErrorLocation: "محل خطای سوال",
        focusFirstQuestionAutomatic: "تمرکز بر روی اولین سوال با تغییر صفحه",
        questionsOrder: "ترتیب المان ها در صفحه",
        maxTimeToFinish: "نهایت زمان برای اتمام نظرسنجی",
        maxTimeToFinishPage: "نهایت زمان برای اتمام این صفحه نظرسنجی",
        showTimerPanel: "نمایش پنل زمان سنج",
        showTimerPanelMode: "نمایش حالت پنل زمان سنج",
        renderMode: "حالت رندر",
        allowAddPanel: "اجازه افزودن پنل",
        allowRemovePanel: "اجازه حذف پنل",
        panelAddText: "متن افزودن پنل",
        panelRemoveText: "متن حذف پنل",
        isSinglePage: "نمایش تمام المان ها در یک صفحه",
        tabs: {
            general: "عمومی",
            fileOptions: "انتخاب ها",
            html: "ویرایشگر HTML",
            columns: "ستون ها",
            rows: "سطرها",
            choices: "انتخاب ها",
            visibleIf: "نمایش در صورت",
            rateValues: "مقادیر رتبه بندی",
            choicesByUrl: "انتخاب ها از وب",
            matrixChoices: "انتخاب های پیشفرض",
            multipleTextItems: "فیلدهای متنی",
            validators: "اعتبارسنجی ها",
            navigation: "ناوبری",
            question: "سوال",
            completedHtml: "HTML صفحه تکمیل نظرسنجی",
            loadingHtml: "HTML بارگزاری",
            timer: "زمان سنج/کوئیز",
            triggers: "اجرا کننده",
            templateTitle: "عنوان قالب"
        },
        editProperty: "ویرایش خصوصیت '{0}'",
        items: "[ آیتم ها: {0} ]",
        enterNewValue: "لطفا یک مقدار وارد کنید",
        noquestions: "سوالی در پرسشنامه درج نشده",
        createtrigger: "اجرا کننده ای بسازید",
        triggerOn: "در ",
        triggerMakePagesVisible: "صفحات را قابل نمایش کن:",
        triggerMakeQuestionsVisible: "سوالات را قابل نمایش کن:",
        triggerCompleteText: "پرسشنامه را تکمیل کن اگر موفق بود.",
        triggerNotSet: "اجرا کننده تنظیم نشده.",
        triggerRunIf: "اجرا در صورت",
        triggerSetToName: "تعییر مقدار از: ",
        triggerSetValue: "به: ",
        triggerIsVariable: "عدم درج متغییر در نتایج پرسشنامه"
    },
    //Property values
    pv: {
        true: "صحیح",
        false: "غلط",
        inherit: "ارث بری",
        show: "آشکار",
        hide: "پنهان",
        default: "پیش فرض",
        initial: "اولیه",
        random: "تصادفی",
        collapsed: "جمع شده",
        expanded: "باز شده",
        none: "هیچ کدام",
        asc: "صعودی",
        desc: "نزولی",
        indeterminate: "نامشخص",
        decimal: "اعشاری",
        currency: "ارز",
        percent: "درصد",
        firstExpanded: "firstExpanded",
        off: "خاموش",
        onPanel: "روی پنل",
        onSurvey: "روی نظرسنجی",
        list: "لیست",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        horizontal: "افقی",
        vertical: "عمودی",
        top: "بالا",
        bottom: "پایین",
        topBottom: "بالا و پایین",
        left: "چپ",
        color: "رنگ",
        date: "تاریخ",
        datetime: "تاریخ و ساعت",
        "datetime-local": "تاریخ و سوال پیش فرض",
        email: "ایمیل",
        month: "ماه",
        number: "عدد",
        password: "رمزعبور",
        range: "دامنه",
        tel: "تلفن",
        text: "متن",
        time: "زمان",
        url: "url",
        week: "هفته",
        hidden: "مخفی",
        on: "روشن",
        onPage: "روی صفحه",
        edit: "ویرایش",
        display: "نمایش",
        onComplete: "به محض تمام شدن",
        onHidden: "به محض مخفی شدن",
        all: "تمام",
        page: "صفحه",
        survey: "نظرسنجی",
        onNextPage: "به محض صفحه بعدی",
        onValueChanged: "به محض تغییر مقدار"
    },
    //Operators
    op: {
        empty: "خالی باشد",
        notempty: "خالی نباشد",
        equal: "مساوی باشد",
        notequal: "مساوی نباشد",
        contains: "شامل",
        notcontains: "شامل نباشد",
        greater: "بزرگتر",
        less: "کوچکتر",
        greaterorequal: "بزرگتر یا مساوی",
        lessorequal: "کوچکتر یا مساوی"
    },
    //Embed window
    ew: {
        angular: "استفاده از نسخه Angular",
        jquery: "استفاده از نسخه jQuery",
        knockout: "استفاده از نسخه ناک اوت",
        react: "استفاده از نسخه React",
        vue: "استفاده از نسخه Vue",
        bootstrap: "برای فریم ورک بوتسترپ",
        standard: "بدون بوتسترپ",
        showOnPage: "نمایش نظرسنجی در یک صفحه",
        showInWindow: "نمایش نظرسنجی در یک پنجره",
        loadFromServer: "بارگزاری JSON از سرور",
        titleScript: "اسکریپت و شیوه نمایش",
        titleHtml: "HTML",
        titleJavaScript: "جاوااسکریپت"
    },
    //Test Survey
    ts: {
        selectPage: "صفحه ای را برای آزمایش انتخاب کنید:",
        showInvisibleElements: "نمایش المان های مخفی"
    },
    validators: {
        answercountvalidator: "تعداد پاسخ",
        emailvalidator: "ایمیل",
        numericvalidator: "عدد",
        regexvalidator: "regex",
        textvalidator: "متن"
    },
    triggers: {
        completetrigger: "تکمیل نظرسنجی",
        setvaluetrigger: "تنظیم مقدار",
        visibletrigger: "تغییر وضعیت دیده شدن"
    },
    //Properties
    p: {
        name: "نام",
        title: { name: "عنوان", title: "اگر خالی باشد مانند نام درج می شود" },
        survey_title: { name: "عنوان", title: "در تمام صفحات دیده می شود" },
        page_title: { name: "عنوان", title: "عنوان صفحه" },
        navigationButtonsVisibility: "پدیداری دکمه های ناوبری",
        questionsOrder: "ترتیب سوالات",
        maxTimeToFinish: "حداکثر زمان برای تکمیل",
        visible: "آشکار",
        visibleIf: "آشکار اگر",
        questionTitleLocation: "questionTitleLocation",
        description: "توضیحات",
        state: "وضعیت",
        isRequired: "اجباری؟",
        requiredIf: "اجبار اگر؟",
        indent: "indent",
        requiredErrorText: "requiredErrorText",
        startWithNewLine: "startWithNewLine",
        innerIndent: "innerIndent",
        page: "صفحه",
        width: "عرض",
        commentText: "متن نظر",
        valueName: "نام مقدار",
        enableIf: "فعال اگر",
        defaultValue: "مقدار پیش فرض",
        correctAnswer: "پاسخ صحیح",
        readOnly: "فقط خوانش",
        validators: "اعتبارسنج ها",
        titleLocation: "titleLocation",
        hasComment: "نظر دارد؟",
        hasOther: "سایر دارد؟",
        choices: "گزینه ها",
        choicesOrder: "ترتیب گزینه ها",
        choicesByUrl: "گزینه ها با لینک",
        otherText: "متن سایر",
        otherErrorText: "متن خطای سایر",
        storeOthersAsComment: "ذخیره سایر به صورت نظر",
        label: "برچسب",
        showTitle: "نامیش عنوان",
        valueTrue: "valueTrue",
        valueFalse: "valueFalse",
        cols: "ستون ها",
        rows: "سطر ها",
        placeHolder: "placeHolder",
        optionsCaption: "optionsCaption",
        expression: "expression",
        format: "فرمت",
        displayStyle: "سبک نمایش",
        currency: "ارز",
        useGrouping: "useGrouping",
        showPreview: "پیش نمایش",
        allowMultiple: "اجازه چند انتخابی",
        imageHeight: "طول عکس",
        imageWidth: "عرض عکس",
        storeDataAsText: "ذخیره داده به صورت متنی",
        maxSize: "نهایت حجم",
        html: "html",
        columns: "ستون ها",
        cells: "سلول ها",
        isAllRowRequired: "آیا تمام سطرها اجباری اند؟",
        horizontalScroll: "اسکرول افقی",
        cellType: "نوع سلول",
        columnsLayout: "columnsLayout",
        columnColCount: "columnColCount",
        columnMinWidth: "columnMinWidth",
        rowCount: "تعداد سطر",
        minRowCount: "حداقل تعداد سطر",
        maxRowCount: "حداکثر تعداد سطر",
        keyName: "keyName",
        keyDuplicationError: "keyDuplicationError",
        confirmDelete: "تاییدیه حذف",
        confirmDeleteText: "متن تاییدیه حذف",
        addRowLocation: "addRowLocation",
        addRowText: "افزودن متن سطر",
        removeRowText: "حذف متن سطر",
        items: "items",
        itemSize: "itemSize",
        colCount: "colCount",
        templateTitle: "templateTitle",
        templateDescription: "templateDescription",
        allowAddPanel: "allowAddPanel",
        allowRemovePanel: "allowRemovePanel",
        panelCount: "panelCount",
        minPanelCount: "minPanelCount",
        maxPanelCount: "maxPanelCount",
        panelsState: "panelsState",
        panelAddText: "panelAddText",
        panelRemoveText: "panelRemoveText",
        panelPrevText: "panelPrevText",
        panelNextText: "panelNextText",
        showQuestionNumbers: "showQuestionNumbers",
        showRangeInProgress: "showRangeInProgress",
        renderMode: "renderMode",
        templateTitleLocation: "templateTitleLocation",
        rateValues: "rateValues",
        rateMin: "rateMin",
        rateMax: "rateMax",
        rateStep: "rateStep",
        minRateDescription: "minRateDescription",
        maxRateDescription: "maxRateDescription",
        inputType: "inputType",
        size: "حجم",
        locale: "زبان",
        focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
        completedHtml: "completedHtml",
        completedBeforeHtml: "completedBeforeHtml",
        loadingHtml: "loadingHtml",
        triggers: "triggers",
        cookieName: "cookieName",
        sendResultOnPageNext: "sendResultOnPageNext",
        showNavigationButtons: "showNavigationButtons",
        showPrevButton: "showPrevButton",
        showPageTitles: "showPageTitles",
        showCompletedPage: "showCompletedPage",
        showPageNumbers: "showPageNumbers",
        questionErrorLocation: "questionErrorLocation",
        showProgressBar: "showProgressBar",
        mode: "mode",
        goNextPageAutomatic: "goNextPageAutomatic",
        checkErrorsMode: "checkErrorsMode",
        clearInvisibleValues: "clearInvisibleValues",
        startSurveyText: "startSurveyText",
        pagePrevText: "pagePrevText",
        pageNextText: "pageNextText",
        completeText: "completeText",
        requiredText: "requiredText",
        questionStartIndex: "questionStartIndex",
        questionTitleTemplate: "questionTitleTemplate",
        firstPageIsStarted: "firstPageIsStarted",
        isSinglePage: "isSinglePage",
        maxTimeToFinishPage: "maxTimeToFinishPage",
        showTimerPanel: "showTimerPanel",
        showTimerPanelMode: "showTimerPanelMode",
        defaultPanelValue: "defaultPanelValue",
        defaultRowValue: "defaultRowValue",
        hasNone: "hasNone",
        noneText: "noneText",
        text: "متن",
        minValue: "حداقل مقدار",
        maxValue: "حداکثر مقدار",
        minLength: "حداقل طول",
        maxLength: "حداکثر طول",
        allowDigits: "اجازه عدد",
        minCount: "حداقل تعداد",
        maxCount: "حداکثر تعداد",
        regex: "regular expression"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["fa"] = persianStrings;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var polishStrings = {
    //survey templates
    survey: {
        edit: "Edytuj",
        dropQuestion: "Przeciągnij pytanie.",
        copy: "Kopiuj",
        addToToolbox: "Dodaj do palety",
        deletePanel: "Usuń panel",
        deleteQuestion: "Usuń pytanie",
        convertTo: "Konwertuj na"
    },
    //questionTypes
    qt: {
        checkbox: "Wielokrotny wybór",
        comment: "Komentarz",
        dropdown: "Lista wyboru",
        file: "Plik",
        html: "Html",
        matrix: "Macierz (jednokrotny wybór)",
        matrixdropdown: "Matrix (wielokrotny wybór)",
        matrixdynamic: "Matrix (dynamiczne wiersze)",
        multipletext: "Wiele linii tekstu",
        panel: "Panel",
        paneldynamic: "Panel (dynamiczne panele)",
        radiogroup: "Jednokrotny wybór",
        rating: "Ocena",
        text: "Pojedyncza odpowiedź",
        boolean: "Prawda/Fałsz",
        expression: "Wyrażenie"
    },
    //Strings in Editor
    ed: {
        survey: "Ankieta",
        Survey: "Ankieta",
        editSurvey: "Edytuj ankietę",
        addNewPage: "Dodaj nową sekcję",
        deletePage: "Usuń sekcję",
        editPage: "Edytuj sekcję",
        newPageName: "sekcja",
        newQuestionName: "pytanie",
        newPanelName: "panel",
        testSurvey: "Testuj ankietę",
        testSurveyAgain: "Testuj ponownie",
        testSurveyWidth: "Szerokość ankiety: ",
        embedSurvey: "Embed Survey",
        saveSurvey: "Zapisz ankietę",
        designer: "Projektant ankiety",
        jsonEditor: "JSON Editor",
        undo: "Cofnij",
        redo: "Ponów",
        options: "Opcje",
        generateValidJSON: "Generate Valid JSON",
        generateReadableJSON: "Generate Readable JSON",
        toolbox: "Paleta",
        delSelObject: "Usuń wybrany element",
        correctJSON: "Please correct JSON.",
        surveyResults: "Wynik ankiety: ",
        modified: "Zmodyfikowana",
        saving: "Trwa zapis",
        saved: "Zapisano"
    },
    //Property names in table headers
    pel: {
        isRequired: "Wymagane?"
    },
    //Property Editors
    pe: {
        apply: "Zastosuj",
        ok: "OK",
        cancel: "Anuluj",
        reset: "Resetuj",
        close: "Zamknij",
        delete: "Usuń",
        addNew: "Dodaj nową",
        removeAll: "Usuń wszystkie",
        edit: "Edytuj",
        empty: "<pusty>",
        fastEntry: "Szybkie wprowadzanie",
        formEntry: "Formularz",
        testService: "Testuj usługę",
        conditionHelp: "Podaj wyrażenie, które zwróci wartość prawda/fałsz. Jeśli chcesz, aby sekcja lub pytanie pozostały widoczne - powinno zwrócić prawdę. Przykład: {pytanie1} = 'wartość1' or ({pytanie2} * {pytanie4}  > 20 and {pytanie3} < 5)",
        expressionHelp: "Please enter an expression. You may use curly brackets to get access to the question values: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
        aceEditorHelp: "Press ctrl+space to get expression completion hint",
        aceEditorRowTitle: "Current row",
        aceEditorPanelTitle: "Current panel",
        showMore: "For more details please check the documentation",
        assistantTitle: "Available questions:",
        propertyIsEmpty: "Podaj wartość",
        value: "Wartość",
        text: "Etykieta",
        columnEdit: "Edit column: {0}",
        itemEdit: "Edit item: {0}",
        url: "URL",
        path: "Path",
        valueName: "Value name",
        titleName: "Title name",
        hasOther: "Czy możliwa własna odpowiedź",
        otherText: "Other item text",
        name: "Nazwa",
        title: "Etykieta",
        cellType: "Typ komórki",
        colCount: "Liczba kolumn",
        choicesOrder: "Kolejność odpowiedzi",
        visible: "Czy widoczne?",
        isRequired: "Czy wymagalne?",
        startWithNewLine: "Czy rozpoczyna się nową linią?",
        rows: "Liczba wierszy",
        placeHolder: "Input place holder",
        showPreview: "Is image preview shown?",
        storeDataAsText: "Store file content in JSON result as text",
        maxSize: "Maximum file size in bytes",
        imageHeight: "Image height",
        imageWidth: "Image width",
        rowCount: "Row count",
        addRowText: "Add row button text",
        removeRowText: "Remove row button text",
        minRateDescription: "Opis najniższej oceny",
        maxRateDescription: "Opis najwyższej oceny",
        inputType: "Input type",
        optionsCaption: "Options caption",
        defaultValue: "Default value",
        surveyEditorTitle: "Edytuj ankietę",
        qEditorTitle: "Edytuj: {0}",
        //survey
        showTitle: "Pokaż/ukryj tytuł",
        locale: "Domyślny język",
        mode: "Tryb (edycja/podgląd)",
        clearInvisibleValues: "Usuń niewidoczne odpowiedzi",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "Show page titles",
        showPageNumbers: "Show page numbers",
        pagePrevText: "Page previous button text",
        pageNextText: "Page next button text",
        completeText: "Complete button text",
        startSurveyText: "Start button text",
        showNavigationButtons: "Show navigation buttons (default navigation)",
        showPrevButton: "Show previous button (user may return on previous page)",
        firstPageIsStarted: "The first page in the survey is a started page.",
        showCompletedPage: "Show the completed page at the end (completedHtml)",
        goNextPageAutomatic: "On answering all questions, go to the next page automatically",
        showProgressBar: "Show progress bar",
        questionTitleLocation: "Question title location",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
        showQuestionNumbers: "Show question numbers",
        questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
        questionErrorLocation: "Question error location",
        focusFirstQuestionAutomatic: "Focus first question on changing the page",
        questionsOrder: "Elements order on the page",
        maxTimeToFinish: "Maximum time to finish the survey",
        maxTimeToFinishPage: "Maximum time to finish a page in the survey",
        showTimerPanel: "Show timer panel",
        showTimerPanelMode: "Show timer panel mode",
        renderMode: "Render mode",
        allowAddPanel: "Allow adding a panel",
        allowRemovePanel: "Allow removing the panel",
        panelAddText: "Adding panel text",
        panelRemoveText: "Removing panel text",
        isSinglePage: "Show all elements on one page",
        tabs: {
            general: "Ogólne",
            fileOptions: "Options",
            html: "Html Editor",
            columns: "Kolumny",
            rows: "Wiersze",
            choices: "Odpowiedzi",
            visibleIf: "Widoczne jeśli",
            enableIf: "Enable If",
            rateValues: "Wartość oceny",
            choicesByUrl: "Odpowiedzi z webserwisu",
            matrixChoices: "Default Choices",
            multipleTextItems: "Text Inputs",
            validators: "Validators",
            navigation: "Navigation",
            question: "Question",
            completedHtml: "Completed Html",
            loadingHtml: "Loading Html",
            timer: "Timer/Quiz",
            triggers: "Triggers",
            templateTitle: "Template title"
        },
        editProperty: "Edit property '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Please, enter the value.",
        noquestions: "There is no any question in the survey.",
        createtrigger: "Please create a trigger",
        triggerOn: "On ",
        triggerMakePagesVisible: "Make pages visible:",
        triggerMakeQuestionsVisible: "Make elements visible:",
        triggerCompleteText: "Complete the survey if succeed.",
        triggerNotSet: "The trigger is not set",
        triggerRunIf: "Run if",
        triggerSetToName: "Change value of: ",
        triggerSetValue: "to: ",
        triggerIsVariable: "Do not put the variable into the survey result."
    },
    //Property values
    pv: {
        true: "prawda",
        false: "fałsz"
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "Less or Equals"
    },
    //Embed window
    ew: {
        angular: "Use Angular version",
        jquery: "Use jQuery version",
        knockout: "Use Knockout version",
        react: "Use React version",
        vue: "Use Vue version",
        bootstrap: "For bootstrap framework",
        standard: "No bootstrap",
        showOnPage: "Show survey on a page",
        showInWindow: "Show survey in a window",
        loadFromServer: "Load Survey JSON from server",
        titleScript: "Scripts and styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Wybierz stronę, aby ją przetestować:"
    },
    validators: {
        answercountvalidator: "answer count",
        emailvalidator: "e-mail",
        numericvalidator: "numeric",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "complete survey",
        setvaluetrigger: "set value",
        visibletrigger: "change visibility"
    },
    //Properties
    p: {
        name: "nazwa",
        title: {
            name: "tytuł",
            title: "Pozostaw pusty, jeśli ma być taki sam, jak 'Nazwa'"
        },
        page_title: { name: "tytuł", title: "Tytuł sekcji" }
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["pl"] = polishStrings;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var portugueseTranslation = {
    //survey templates
    survey: {
        edit: "Editar",
        dropQuestion: "Por favor arraste uma pergunta aqui.",
        copy: "Copiar",
        addToToolbox: "Adicionar à toolbox",
        deletePanel: "Remover Painel",
        deleteQuestion: "Remover Pergunta",
        convertTo: "Converter para",
        drag: "Arrastar elemento"
    },
    //questionTypes
    qt: {
        default: "Default",
        checkbox: "Checkbox",
        comment: "Comentário",
        imagepicker: "Selecionador de imagem",
        dropdown: "Dropdown",
        file: "Arquivo",
        html: "Html",
        matrix: "Matriz (opção única)",
        matrixdropdown: "Matriz (multiplas opções)",
        matrixdynamic: "Matriz (linhas dinâmicas)",
        multipletext: "Texto múltiplo",
        panel: "Painel",
        paneldynamic: "Painel (painéis dinâmicos)",
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Texto único",
        boolean: "Boleano",
        expression: "Expressão"
    },
    //Strings in Editor
    ed: {
        defaultLocale: "Default ({0})",
        survey: "Pesquisa",
        settings: "Configurações da Pesquisa",
        editSurvey: "Editar Pesquisa",
        addNewPage: "Adicionar Nova Página",
        moveRight: "Role para direita",
        moveLeft: "Role para esquerda",
        deletePage: "Deletar Página",
        editPage: "Editar Página",
        edit: "Editar",
        newPageName: "página",
        newQuestionName: "pergunta",
        newPanelName: "painel",
        testSurvey: "Testar pesquisa",
        testSurveyAgain: "Testar pesquisa novamente",
        testSurveyWidth: "Tamanho do pesquisa: ",
        embedSurvey: "Incorporar Pesquisa",
        translation: "Tradução",
        saveSurvey: "Salvar Pesquisa",
        designer: "Designer de Pesquisa",
        jsonEditor: "Editor de JSON",
        undo: "Desfazer",
        redo: "Refazer",
        options: "Opções",
        generateValidJSON: "Gerar JSON válido",
        generateReadableJSON: "Gerar JSON legível",
        toolbox: "Toolbox",
        toolboxGeneralCategory: "Geral",
        delSelObject: "Apagar objeto selecionado",
        editSelObject: "Editar objeto selecionado",
        correctJSON: "Por favor corrija o JSON.",
        surveyResults: "Resultado da pesquisa: ",
        surveyResultsTable: "Como Tabela",
        surveyResultsJson: "Como JSON",
        resultsTitle: "Título da Pergunta",
        resultsName: "Nome da Pergunta",
        resultsValue: "Valor da Resposta",
        resultsDisplayValue: "Mostrar Valor",
        modified: "Modificado",
        saving: "Salvando",
        saved: "Salvo",
        saveError: "Erro! Conteúdo do editor não foi salvo.",
        translationAddLanguage: "Selecione o idioma para traduzir",
        translationShowAllStrings: "Mostrar todas strings",
        translationShowAllPages: "Mostrar todas páginas",
        translationNoStrings: "Nenhuma string para traduzir. Por favor, altere o filtro.",
        translationExportToSCVButton: "Exportar para CSV",
        translationImportFromSCVButton: "Importar de CSV",
        translationMergeLocaleWithDefault: "Combinar {0} com o idioma default"
    },
    //Property names in table headers
    pel: {
        isRequired: "Obrigatório?"
    },
    //Property Editors
    pe: {
        apply: "Aplicar",
        ok: "OK",
        cancel: "Cancelar",
        reset: "Limpar",
        close: "Fechar",
        delete: "Apagar",
        addNew: "Adicionar Novo",
        addItem: "Clique para adicionar um item...",
        removeAll: "Remover Todos",
        edit: "Editar",
        itemValueEdit: "Visível Se",
        editChoices: "Editar Opções",
        move: "Mover",
        empty: "<vazio>",
        notEmpty: "<editar valor>",
        fastEntry: "Entrada Rápida",
        formEntry: "Entrada com formulário",
        testService: "Testar o serviço",
        conditionSelectQuestion: "Selecionar pergunta...",
        conditionValueQuestionTitle: "Por favor, entre/selecione o valor",
        conditionButtonAdd: "Add",
        conditionButtonReplace: "Substituir",
        conditionHelp: "Por favor, entre com uma expressão boleana. Deve retornar verdadeiro para manter a pergunta/página visível. Por exemplo: {´pergunta1} = 'valor1' ou ({pergunta2} * {pergunta4} > 20 e {pergunta3} < 5)",
        expressionHelp: "Por favor informe uma expressão boleana. Ela deve retornar verdadeiro para manter a pergunta/página visível. Por exemplo: {´pergunta1} = 'valor1' or ({pergunta2} = 3 and {pergunta3} < 5)",
        aceEditorHelp: "Pressione ctrl+space para autocompletar",
        aceEditorRowTitle: "Linha atual",
        aceEditorPanelTitle: "Painel atual",
        showMore: "Para mais detalhes, por favor visite a documentação",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "Perguntas disponíveis:",
        cellsEmptyRowsColumns: "Deve haver ao menos uma coluna ou linha",
        propertyIsEmpty: "Por favor informe um valor na propriedade",
        value: "Valor",
        text: "Texto",
        rowid: "ID da Linha",
        imageLink: "Link da Imagem",
        columnEdit: "Editar coluna: {0}",
        itemEdit: "Editar item: {0}",
        url: "URL",
        path: "Caminho",
        valueName: "Nome do valor",
        titleName: "Nome do título",
        hasOther: "Tem item 'outros'",
        otherText: "Texto do item 'outros'",
        name: "Nome",
        title: "Título",
        cellType: "Tipo de célula",
        colCount: "Contagem de células",
        choicesOrder: "Selecione a ordem das alternativas",
        visible: "É visível?",
        isRequired: "É obrigatório?",
        startWithNewLine: "Começa com uma nova linha?",
        rows: "Contagem de linhas",
        placeHolder: "Texto de referência",
        showPreview: "Mostra pré-visualização de imagem?",
        storeDataAsText: "Gravar conteúdo de arquivo no resultado JSON como texto",
        maxSize: "Tamanho máximo de arquivo em bytes",
        imageHeight: "Altura da imagem",
        imageWidth: "Largura da imagem",
        rowCount: "Contagem de linhas",
        columnLayout: "Layout das colunas",
        addRowLocation: "Localização do botão de adicionar linha",
        addRowText: "Texto do botão para adicionar linhas",
        removeRowText: "Texto do botão para remover linhas",
        minRateDescription: "Descrição de qualificação mínima",
        maxRateDescription: "Descrição de qualificação máxima",
        inputType: "Tipo de entrada",
        optionsCaption: "Título de opção",
        defaultValue: "Valor default",
        cellsDefaultRow: "Texto default das células",
        surveyEditorTitle: "Editar configurações da pesquisa",
        qEditorTitle: "Editar pergunta: {0}",
        maxLength: "Tamanho máximo",
        //survey
        showTitle: "Mostrar/ocultar título",
        locale: "Idioma default",
        mode: "Modo (editável/somente leitura)",
        clearInvisibleValues: "Limpar valores invisíveis",
        cookieName: "Nome do cookie (para desativar rode a pesquisa duas vezes localmente)",
        sendResultOnPageNext: "Enviar resultado da pesquisa na página seguinte",
        storeOthersAsComment: "Armazenar 'outros' valores em um campo separado",
        showPageTitles: "Mostrar título da página",
        showPageNumbers: "Mostrar número da página",
        pagePrevText: "Texto para botão de página anterior",
        pageNextText: "Texto para botão de página seguinte",
        completeText: "Texto para botão de completar",
        startSurveyText: "Texto para botão de começar",
        showNavigationButtons: "Mostrar botões de navegação (navegação default)",
        showPrevButton: "Mostrar botão de voltar (usuário pode retornar para página anterior)",
        firstPageIsStarted: "Primeira página da pesquisa é a página de início.",
        showCompletedPage: "Mostrar a página de conclusão no final (completedHtml)",
        goNextPageAutomatic: "Ao responder todas as perguntas, ir automaticamente para a próxima página",
        showProgressBar: "Mostrar barra de progresso",
        questionTitleLocation: "Localização do título da pergunta",
        requiredText: "Símbolo(s) para perguntas obrigatórias",
        questionStartIndex: "Index das perguntas (1, 2 or 'A', 'a')",
        showQuestionNumbers: "Mostrar número das perguntas",
        questionTitleTemplate: "Template do título da pergunta, default é: '{no}. {obrigatório} {título}'",
        questionErrorLocation: "Localização do erro da pergunta",
        focusFirstQuestionAutomatic: "Focar automaticamente na primeira pergunta ao trocar de página",
        questionsOrder: "Ordenar elementos na página",
        maxTimeToFinish: "Tempo máximo para finalizar pesquisa",
        maxTimeToFinishPage: "Tempo máximo para finalizar página da pesquisa",
        showTimerPanel: "Mostrar o painel de cronômetro",
        showTimerPanelMode: "Mostrar painel de modo de cronômetro",
        renderMode: "Modo de renderização",
        allowAddPanel: "Permitir adicionar painel",
        allowRemovePanel: "Permitir remover painel",
        panelAddText: "Texto de adicionar painel",
        panelRemoveText: "Texto de remover painel",
        isSinglePage: "Mostrar todos elementos em uma página",
        tabs: {
            general: "Geral",
            fileOptions: "Opções",
            html: "Editor Html",
            columns: "Colunas",
            rows: "Linhas",
            choices: "Opções",
            items: "Itens",
            visibleIf: "Visível se",
            enableIf: "Habilitar se",
            requiredIf: "Obrigatório se",
            rateValues: "Valores de qualificação",
            choicesByUrl: "Opções com origem na Web",
            matrixChoices: "Opções padrão",
            multipleTextItems: "Entradas de texto",
            validators: "Validadores",
            navigation: "Navegação",
            question: "Pergunta",
            completedHtml: "Completo Html",
            loadingHtml: "Carregando Html",
            timer: "Cronômetro/Quiz",
            triggers: "Triggers",
            templateTitle: "Título do template"
        },
        editProperty: "Editar propriedade '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Por favor, informe o valor.",
        noquestions: "Não há nenhuma pergunta na pesquisa.",
        createtrigger: "Por favor, crie um gatilho",
        triggerOn: "Ligado ",
        triggerMakePagesVisible: "Tornar páginas visíveis:",
        triggerMakeQuestionsVisible: "Tornar perguntas visíves:",
        triggerCompleteText: "Completar a pesquisa se obtiver êxito.",
        triggerNotSet: "O gatilho não está definido",
        triggerRunIf: "Executar se",
        triggerSetToName: "Mudar o valor de: ",
        triggerFromName: "Copiar valor de: ",
        triggerRunExpression: "Rodar essa expressão:",
        triggerSetValue: "para: ",
        triggerIsVariable: "Não colocar a variável no resultado da pesquisa."
    },
    //Property values
    pv: {
        true: "verdadeiro",
        false: "falso",
        inherit: "inherit",
        show: "mostrar",
        hide: "ocultar",
        default: "default",
        initial: "inicial",
        random: "aleatório",
        collapsed: "colapsado",
        expanded: "expandido",
        none: "nenhum",
        asc: "ascendente",
        desc: "descendente",
        indeterminate: "indeterminado",
        decimal: "decimal",
        currency: "moeda",
        percent: "percentagem",
        firstExpanded: "primeiro expandido",
        off: "desligado",
        onPanel: "no painel",
        onSurvey: "na pesquisa",
        list: "lista",
        progressTop: "progresso superior",
        progressBottom: "progresso inferior",
        progressTopBottom: "progresso superior inferior",
        horizontal: "horizontal",
        vertical: "vertical",
        top: "superior",
        bottom: "inferior",
        topBottom: "superior and bottom",
        left: "esquerda",
        color: "cor",
        date: "data",
        datetime: "data e hora",
        "datetime-local": "data e hora - local",
        email: "email",
        month: "mês",
        number: "número",
        password: "senha",
        range: "intervalo",
        tel: "tel",
        text: "texto",
        time: "hora",
        url: "url",
        week: "semana",
        hidden: "oculto",
        on: "ligado",
        onPage: "na página",
        edit: "editar",
        display: "mostrar",
        onComplete: "ao completar",
        onHidden: "ao ocultar",
        all: "todos",
        page: "página",
        survey: "pesquisa",
        onNextPage: "na página seguinte",
        onValueChanged: "ao mudar valor"
    },
    //Operators
    op: {
        empty: "está vazio",
        notempty: "não está vazio",
        equal: "é igual",
        notequal: "não é igual",
        contains: "contém",
        notcontains: "não contém",
        greater: "maior",
        less: "menor",
        greaterorequal: "maior ou igual",
        lessorequal: "menor ou igual"
    },
    //Embed window
    ew: {
        angular: "Usar versão Angular",
        jquery: "Usar versão jQuery",
        knockout: "Usar versão Knockout",
        react: "Usar versão React",
        vue: "Usar versão Vue",
        bootstrap: "Para framework bootstrap",
        standard: "Sem bootstrap",
        showOnPage: "Mostrar pesquisa em uma página",
        showInWindow: "Mostrar pesquisa em uma janela",
        loadFromServer: "Carregar JSON da pesquisa de um servidor",
        titleScript: "Scripts e estilos",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Selecione a página para testar:",
        showInvisibleElements: "Mostrar elementos invisíveis"
    },
    validators: {
        answercountvalidator: "contador de respostas",
        emailvalidator: "e-mail",
        expressionvalidator: "expressão",
        numericvalidator: "numérico",
        regexvalidator: "regex",
        textvalidator: "texto"
    },
    triggers: {
        completetrigger: "completar pesquisa",
        setvaluetrigger: "definir valor",
        copyvaluetrigger: "copiar valor",
        runexpressiontrigger: "rodar expressão",
        visibletrigger: "alterar visibilidade"
    },
    //Properties
    p: {
        name: "nome",
        title: {
            name: "título",
            title: "Deixar vazio se for o mesmo que 'Nome'"
        },
        navigationButtonsVisibility: "Visibilidade dos botões de navegação",
        questionsOrder: "Ordenar elementos na página",
        maxTimeToFinish: "Tempo máximo para finalizar pesquisa",
        visible: "Visível?",
        visibleIf: "Visível se",
        questionTitleLocation: "Localização do título da pergunta",
        description: "Descrição",
        state: "Estado",
        isRequired: "Obrigatório?",
        requiredIf: "Obrigatório se",
        indent: "Indentação",
        requiredErrorText: "Texto de erro para obrigatório",
        startWithNewLine: "Começar com uma nova linha",
        innerIndent: "Indentação interna",
        page: "Página",
        width: "Largura",
        commentText: "Texto do comentário",
        valueName: "Nome do valor",
        enableIf: "Habilitar se",
        defaultValue: "Valor default",
        correctAnswer: "Resposta correta",
        readOnly: "Somente leitura",
        validators: "Validadores",
        titleLocation: "Localização do título",
        hasComment: "Tem comentário",
        hasOther: "Tem item 'outros'",
        choices: "Opções",
        choicesOrder: "Selecione a ordem das alternativas",
        choicesByUrl: "Opções com origem na Web",
        otherText: "Texto do item 'outros'",
        otherErrorText: "Texto de erro da opção 'outros'",
        storeOthersAsComment: "Armazenar 'outros' valores em um campo separado",
        label: "Label",
        showTitle: "Mostrar título",
        valueTrue: "Valor verdadeiro",
        valueFalse: "Valor falso",
        cols: "Colunas",
        rows: "Linhas",
        placeHolder: "placeholder",
        optionsCaption: "Título das opções",
        expression: "Expressão",
        format: "Formato",
        displayStyle: "Mostrar estilo",
        currency: "Moeda",
        useGrouping: "Usar agrupamento",
        showPreview: "Mostrar preview",
        allowMultiple: "Permitir múltiplos",
        imageHeight: "Altura da imagem",
        imageWidth: "Largura da imagem",
        storeDataAsText: "Armazenar dados como texto",
        maxSize: "Tamanho máximo",
        html: "html",
        columns: "Colunas",
        cells: "Células",
        isAllRowRequired: "Todas linhas são obrigatórias",
        horizontalScroll: "Scroll horizontal",
        cellType: "Tipo de célula",
        columnsLayout: "Layout de colunas",
        columnColCount: "Contador de células de coluna",
        columnMinWidth: "Largura mínima da coluna",
        rowCount: "Contagem de linhas",
        minRowCount: "Contagem de linhas mínima",
        maxRowCount: "Contagem de linhas máxima",
        keyName: "Nome da chave",
        keyDuplicationError: "Erro de chave duplicada",
        confirmDelete: "Confirmar deleção",
        confirmDeleteText: "Texto de confirmar deleção",
        addRowLocation: "Localização do botão de adicionar linha",
        addRowText: "Texto do botão para adicionar linhas",
        removeRowText: "Texto do botão para remover linhas",
        items: "Itens",
        itemSize: "Tamanho do item",
        colCount: "Contagem de células",
        templateTitle: "Título do template",
        templateDescription: "Descrição do template",
        allowAddPanel: "Permitir adicionar painel",
        allowRemovePanel: "Permitir remover painel",
        panelCount: "Contador do painel",
        minPanelCount: "Contador do painel mínimo",
        maxPanelCount: "Contador do painel máximo",
        panelsState: "Estado dos painéis",
        panelAddText: "Texto de adicionar painel",
        panelRemoveText: "Texto de remover painel",
        panelPrevText: "Texto do painel anterior",
        panelNextText: "Texto do próximo painel",
        showQuestionNumbers: "Mostrar número das perguntas",
        showRangeInProgress: "showRangeInProgress",
        renderMode: "Modo de renderização",
        templateTitleLocation: "Localização do título do template",
        rateValues: "Valores de qualificação",
        rateMin: "Qualificação mínima",
        rateMax: "Qualificação máxima",
        rateStep: "Incremento da qualificação",
        minRateDescription: "Descrição de qualificação mínima",
        maxRateDescription: "Descrição de qualificação máxima",
        inputType: "Tipo de entrada",
        size: "Tamanho",
        locale: "Localidade",
        focusFirstQuestionAutomatic: "Focar automaticamente na primeira pergunta",
        completedHtml: "Completo Html",
        completedBeforeHtml: "Completo Html antes",
        loadingHtml: "Carregando Html",
        triggers: "Triggers",
        cookieName: "Nome do cookie",
        sendResultOnPageNext: "Enviar resultado da pesquisa na página seguinte",
        showNavigationButtons: "Mostrar botões de navegação (navegação default)",
        showPrevButton: "Mostrar botão de voltar (usuário pode retornar para página anterior)",
        showPageTitles: "Mostrar título da página",
        showCompletedPage: "Mostrar a página de conclusão no final (completedHtml)",
        showPageNumbers: "Mostrar número da página",
        questionErrorLocation: "Localização do erro da pergunta",
        showProgressBar: "Mostrar barra de progresso",
        mode: "Modo",
        goNextPageAutomatic: "Ao responder todas as perguntas, ir automaticamente para a próxima página",
        checkErrorsMode: "Modo de verificação de erros",
        clearInvisibleValues: "Limpar valores invisíveis",
        startSurveyText: "Texto para botão de começar",
        pagePrevText: "Texto para botão de página anterior",
        pageNextText: "Texto para botão de página seguinte",
        completeText: "Texto para botão de completar",
        requiredText: "Símbolo(s) para perguntas obrigatórias",
        questionStartIndex: "Index das perguntas (1, 2 or 'A', 'a')",
        questionTitleTemplate: "Template do título da pergunta, default é: '{no}. {obrigatório} {título}'",
        firstPageIsStarted: "Primeira página da pesquisa é a página de início.",
        isSinglePage: "Mostrar todos elementos em uma página",
        maxTimeToFinishPage: "Tempo máximo para finalizar página da pesquisa",
        showTimerPanel: "Mostrar o painel de cronômetro",
        showTimerPanelMode: "Mostrar painel de modo de cronômetro",
        defaultPanelValue: "valor default do painel",
        defaultRowValue: "valor default da linha",
        hasNone: "não tem nenhum",
        noneText: "nenhum texto",
        text: "texto",
        minValue: "valor mínimo",
        maxValue: "valor máximo",
        minLength: "tamanho mínimo",
        maxLength: "tamanho máximo",
        allowDigits: "permitir dígitos",
        minCount: "contador mínimo",
        maxCount: "contador máximo",
        regex: "expressão regular"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["pt"] = portugueseTranslation;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var simplifiedChineseTranslation = {
    // strings for survey templates
    survey: {
        edit: "编辑",
        dropQuestion: "请将问题放置于此",
        copy: "复制",
        addToToolbox: "添加到工具箱",
        deletePanel: "删除面板",
        deleteQuestion: "删除题目",
        convertTo: "转变为"
    },
    // strings for question types
    qt: {
        checkbox: "多项选择",
        comment: "多行文本框",
        dropdown: "下拉框",
        file: "文件上传",
        html: "Html 代码",
        matrix: "矩阵 (单选题)",
        matrixdropdown: "矩阵 (下拉框)",
        matrixdynamic: "矩阵 (动态问题)",
        multipletext: "文本框组",
        panel: "面板",
        paneldynamic: "面板(动态)",
        radiogroup: "单项选择",
        rating: "评分",
        text: "文本框",
        boolean: "布尔选择",
        expression: "表达式"
    },
    // strings for editor
    ed: {
        survey: "调查问卷",
        editSurvey: "修改",
        addNewPage: "添加新页面",
        deletePage: "删除页面",
        editPage: "编辑页面",
        newPageName: "页面",
        newQuestionName: "问题",
        newPanelName: "面板",
        testSurvey: "测试问卷",
        testSurveyAgain: "再次测试问卷",
        testSurveyWidth: "问卷宽度: ",
        embedSurvey: "将问卷嵌入网页",
        saveSurvey: "保存问卷",
        designer: "问卷设计器",
        jsonEditor: "JSON 编辑器",
        undo: "撤销",
        redo: "恢复",
        options: "选项",
        generateValidJSON: "生成 JSON 数据",
        generateReadableJSON: "生成易读的 JSON 数据",
        toolbox: "工具箱",
        delSelObject: "删除所选对象",
        editSelObject: "编辑所选对象",
        correctJSON: "请修正 JSON 数据",
        surveyResults: "问卷结果: ",
        modified: "已修改",
        saving: "保存中...",
        saved: "已保存"
    },
    //Property names in table headers
    pel: {
        isRequired: "是否为必填项?"
    },
    // strings for property editors
    pe: {
        apply: "应用",
        ok: "确定",
        cancel: "取消",
        reset: "重置",
        close: "关闭",
        delete: "删除",
        addNew: "新建",
        removeAll: "全部删除",
        edit: "编辑器",
        empty: "<空>",
        fastEntry: "快速输入",
        formEntry: "表单输入",
        testService: "测试服务",
        showMore: "更多细节请查看文档",
        conditionHelp: "请输入一个布尔表达式。当布尔值为真，问题/页面可见。例如：{question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "请输入一项条件判断。当条件判断为真时问题/页面将可见。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        propertyIsEmpty: "请为该属性设定一个值",
        value: "值",
        text: "显示文本",
        columnEdit: "编辑列: {0}",
        itemEdit: "编辑选项: {0}",
        hasOther: "可添加其他答案?",
        otherText: "其他答案文本",
        url: "URL",
        path: "Path",
        valueName: "Value name",
        titleName: "Title name",
        name: "题目名",
        title: "题目文本",
        cellType: "单元格类型",
        colCount: "列数",
        choicesOrder: "设置选项顺序",
        visible: "是否可见?",
        isRequired: "是否为必填项?",
        startWithNewLine: "问题是否新起一行?",
        rows: "文本框行数",
        placeHolder: "占位文本",
        showPreview: "是否显示图像预览?",
        storeDataAsText: "以 JSON 文本方式存储文件",
        maxSize: "文件最大尺寸 (Bytes)",
        imageHeight: "图片高度",
        imageWidth: "图片宽度",
        rowCount: "默认行数",
        addRowText: "添加条目按钮文本",
        removeRowText: "删除条目按钮文本",
        minRateDescription: "最小值提示",
        maxRateDescription: "最大值提示",
        inputType: "文本框类型",
        optionsCaption: "下拉框提示语",
        qEditorTitle: "编辑问题: {0}",
        //survey
        showTitle: "显示/隐藏 标题",
        locale: "默认语言",
        mode: "模式 (编辑/只读)",
        clearInvisibleValues: "清除隐藏值",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "显示页面标题",
        showPageNumbers: "显示页数",
        pagePrevText: "前一页按钮文本",
        pageNextText: "后一页按钮文本",
        completeText: "完成按钮文本",
        startSurveyText: "开始按钮文本",
        showNavigationButtons: "显示导航按钮 (默认导航)",
        showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
        firstPageIsStarted: "调查的第一页面为起始页.",
        showCompletedPage: "结尾展示完成后的页面 (completedHtml)",
        goNextPageAutomatic: "回答本页所有问题后，自动跳转到下一页",
        showProgressBar: "显示进度条",
        questionTitleLocation: "问题的标题位置",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
        showQuestionNumbers: "显示问题编号",
        questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
        questionErrorLocation: "问题错误定位",
        focusFirstQuestionAutomatic: "改变页面时聚焦在第一个问题",
        questionsOrder: "Elements order on the page",
        maxTimeToFinish: "完成调查的最长时间",
        maxTimeToFinishPage: "完成调查中页面的最长时间",
        showTimerPanel: "显示计时器面板",
        showTimerPanelMode: "显示计时器面板模式",
        renderMode: "渲染模式",
        allowAddPanel: "允许添加面板",
        allowRemovePanel: "允许删除面板",
        panelAddText: "添加面板文本",
        panelRemoveText: "删除面板文本",
        isSinglePage: "在一个页面上展示所有元素",
        tabs: {
            general: "通用项",
            navigation: "导航",
            question: "问题",
            completedHtml: "完成后的Html",
            loadingHtml: "加载中的Html",
            timer: "问卷计时器",
            trigger: "触发器",
            fileOptions: "选项",
            html: "HTML 编辑器",
            columns: "设置列",
            rows: "设置行",
            choices: "设置选项",
            visibleIf: "设置可见条件",
            enableIf: "Enable If",
            rateValues: "设置评分值",
            choicesByUrl: "通过 URL 导入选项",
            matrixChoices: "默认选项",
            multipleTextItems: "文本输入",
            validators: "校验规则"
        },
        editProperty: "编辑属性: '{0}'",
        items: "[ 项目数量: {0} ]",
        enterNewValue: "请设定值",
        noquestions: "问卷中还没有创建任何问题",
        createtrigger: "请创建触发器",
        triggerOn: "当 ",
        triggerMakePagesVisible: "使页面可见:",
        triggerMakeQuestionsVisible: "使问题可见:",
        triggerCompleteText: "如果满足条件，则完成问卷",
        triggerNotSet: "触发器尚未设置",
        triggerRunIf: "满足下列条件时执行",
        triggerSetToName: "修改下列问题值: ",
        triggerSetValue: "修改为: ",
        triggerIsVariable: "在问卷提交结果中不要包含该变量"
    },
    // strings for operators
    op: {
        empty: "为空",
        notempty: "不为空",
        equal: "等于",
        notequal: "不等于",
        contains: "包含",
        notcontains: "不包含",
        greater: "大于",
        less: "小于",
        greaterorequal: "大于等于",
        lessorequal: "小于等于"
    },
    // strings for embed window
    ew: {
        angular: "使用 Angular 时",
        jquery: "使用 JQuery 时",
        knockout: "使用 Knockout 时",
        react: "使用 React 时",
        vue: "使用 Vue 时",
        bootstrap: "使用 Bootstrap 时",
        standard: "不使用 Bootstrap 时",
        showOnPage: "嵌入页面显示",
        showInWindow: "使用单独的问卷窗口",
        loadFromServer: "从服务器加载问卷 JSON 数据",
        titleScript: "脚本和样式",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    validators: {
        answercountvalidator: "数量检查",
        emailvalidator: "Email",
        numericvalidator: "数字",
        regexvalidator: "正则表达式",
        textvalidator: "文本"
    },
    triggers: {
        completetrigger: "完成问卷",
        setvaluetrigger: "设置问题值",
        visibletrigger: "修改可见性"
    },
    // strings of properties
    p: {
        commentText: "备注文本",
        choices: "选项",
        choicesByUrl: "Url选项",
        choicesOrder: "选项排序",
        colCount: "列数",
        correctAnswer: "正确答案",
        defaultVaule: "默认选项",
        description: "说明",
        enableIf: "允许判断",
        hasComment: "hasComment",
        hasOther: "允许其他答案",
        otherText: "其他答案文本",
        page: "所在页面",
        readOnly: "只读",
        indent: "缩进",
        isRequired: "必选",
        requiredErrorText: "requiredErrorText",
        otherErrorText: "requiredErrorText",
        startWithNewLine: "允许问题在新行",
        //survey
        showTitle: "显示/隐藏 标题",
        locale: "默认语言",
        mode: "模式 (编辑/只读)",
        clearInvisibleValues: "清除隐藏值",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "显示页面标题",
        showPageNumbers: "显示页数",
        pagePrevText: "前一页按钮文本",
        pageNextText: "后一页按钮文本",
        completeText: "完成按钮文本",
        startSurveyText: "开始按钮文本",
        showNavigationButtons: "显示导航按钮 (默认导航)",
        showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
        firstPageIsStarted: "调查的第一页面为起始页.",
        showCompletedPage: "结尾展示完成后的页面 (completedHtml)",
        goNextPageAutomatic: "回答本页所有问题后，自动跳转到下一页",
        showProgressBar: "显示进度条",
        questionTitleLocation: "问题的标题位置",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
        showQuestionNumbers: "显示问题编号",
        questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
        questionErrorLocation: "问题错误定位",
        focusFirstQuestionAutomatic: "改变页面时聚焦在第一个问题",
        questionsOrder: "页面中元素的顺序",
        maxTimeToFinish: "完成调查的最长时间",
        maxTimeToFinishPage: "完成调查中页面的最长时间",
        showTimerPanel: "显示计时器面板",
        showTimerPanelMode: "显示计时器面板模式",
        renderMode: "渲染模式",
        allowAddPanel: "允许添加面板",
        allowRemovePanel: "允许删除面板",
        panelAddText: "添加面板文本",
        panelRemoveText: "删除面板文本",
        isSinglePage: "在一个页面上展示所有元素",
        name: "名字",
        title: {
            name: "标题",
            title: "如果与名字相同，请设置为空值"
        },
        survey_title: {
            name: "标题",
            title: "问卷标题在每页上都会显示"
        },
        page_title: {
            name: "标题",
            title: "页面标题"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["zh-cn"] = simplifiedChineseTranslation;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var spanishTranslation = {
    // strings for survey templates
    survey: {
        edit: "Editar",
        dropQuestion: "Por favor coloque una pregunta aquí de la caja de herramientas en la izquierda.",
        copy: "Copiar",
        addToToolbox: "Añadir a la caja de herramientas",
        deletePanel: "Eliminar Panel",
        deleteQuestion: "Borrar Pregunta",
        convertTo: "Convertir a",
        drag: "Arrastrar Elemento"
    },
    //questionTypes
    qt: {
        default: "Predefinido",
        checkbox: "Checkbox",
        comment: "Comentario",
        dropdown: "Dropdown",
        file: "Archivo",
        html: "Html",
        matrix: "Matriz (elección única)",
        matrixdropdown: "Matriz (elección múltiple)",
        matrixdynamic: "Matriz (filas dinámicas)",
        multipletext: "Texto múltiple",
        panel: "Panel",
        paneldynamic: "Panel (paneles dinámicos)",
        radiogroup: "Grupo de radio",
        rating: "Rating",
        text: "Entrada sencilla",
        boolean: "Booleano",
        expression: "Expresión"
    },
    //Strings in Editor
    ed: {
        survey: "Encuesta",
        settings: "Ajustar Encuesta",
        editSurvey: "Editar Encuesta",
        addNewPage: "Añadir Nueva Página",
        moveRight: "Moverse hacia la derecha",
        moveLeft: "Moverse hacia la izquierda",
        deletePage: "Borrar Página",
        editPage: "Editar Página",
        edit: "Editar",
        newPageName: "página",
        newQuestionName: "pregunta",
        newPanelName: "panel",
        testSurvey: "Probar Encuesta",
        testSurveyAgain: "Probar Encuesta Otra Vez",
        testSurveyWidth: "Ancho de Encuesta: ",
        embedSurvey: "Empotrar Encuesta",
        saveSurvey: "Guardar Encuesta",
        designer: "Diseñador de Encuesta",
        jsonEditor: "Editor de JSON",
        undo: "Deshacer",
        redo: "Rehacer",
        options: "Opciones",
        generateValidJSON: "Generar JSON válido",
        generateReadableJSON: "Generar JSON legible",
        toolbox: "Caja de herramientas",
        toolboxGeneralCategory: "Categoría General",
        delSelObject: "Borrar objeto seleccionado",
        editSelObject: "Editar objeto seleccionado",
        correctJSON: "Por favor corrija JSON.",
        surveyResults: "Resultado de Encuesta: ",
        modified: "Modificado",
        saving: "Salvando",
        saved: "Salvado"
    },
    //Property names in table headers
    pel: {
        isRequired: "Requerido?"
    },
    //Property Editors
    pe: {
        apply: "Aplicar",
        ok: "OK",
        cancel: "Cancelar",
        reset: "Restaurar",
        close: "Cerrar",
        delete: "Borrar",
        addNew: "Añadir nuevo",
        addItem: "Click para añadir articulo...",
        removeAll: "Quitar todos",
        edit: "Editar",
        itemValueEdit: "Visible Si",
        editChoices: "Editar Opciones",
        move: "Mover",
        empty: "<vacío>",
        notEmpty: "<editar valor>",
        fastEntry: "Entrada rápida",
        formEntry: "Entrar en forma",
        testService: "Pruebe el servicio",
        conditionSelectQuestion: "Seleccionar pregunta...",
        conditionValueQuestionTitle: "Porfavor selecciona el valor",
        conditionButtonAdd: "Añadir",
        conditionButtonReplace: "Reemplazar",
        conditionHelp: "Por favor proporcione una expresión booleana. Debería regresar verdadero para mantener la pregunta/página visible. Por ejemplo: {pregunta1} = 'valor1' or ({pregunta2} * {pregunta4}  > 20 and {pregunta3} < 5)",
        expressionHelp: "Por favor proporcione una expresión. Puede hacer uso de llaves para tener acceso a los valores de la pregunta: '{pregunta1} + {pregunta2}', '({precio}*{cantidad}) * (100 - {descuento})'",
        aceEditorHelp: "Presione ctrl+espacio para obtener un indicio de completado de expresión",
        aceEditorRowTitle: "Fila actual",
        aceEditorPanelTitle: "Panel actual",
        showMore: "Por favor use la documentación para más detalles",
        conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
        assistantTitle: "Preguntas disponibles:",
        cellsEmptyRowsColumns: "Debe haber al menos una columna o fila",
        propertyIsEmpty: "Por favor proporcione un valor",
        value: "Valor",
        text: "Texto",
        columnEdit: "Editar columna: {0}",
        itemEdit: "Editar artículo: {0}",
        url: "URL",
        path: "trayecto",
        valueName: "Nombre del valor",
        titleName: "Título",
        hasOther: "Tiene otro artículo",
        otherText: "Texto de otro artículo",
        name: "Nombre",
        title: "Título",
        cellType: "Tipo de celda",
        colCount: "Conteo de columnas",
        choicesOrder: "Orden de selección de elecciones",
        visible: "Es visible?",
        isRequired: "Es requerido?",
        startWithNewLine: "Es inicio con nueva línea?",
        rows: "Conteo de filas",
        placeHolder: "Marcador de entrada",
        showPreview: "Se muestra avance de imagen?",
        storeDataAsText: "Guardar contenido de archivo en resultado JSON como texto",
        maxSize: "Tamaño máximo de archivo en bytes",
        imageHeight: "Altura de imagen",
        imageWidth: "Ancho de imagen",
        rowCount: "Conteo de filas",
        columnsLocation: "Columns location",
        addRowLocation: "Agregar ubicación de botón de fila",
        addRowText: "Añadir texto de boton de fila",
        removeRowText: "Quitar texto de boton de fila",
        minRateDescription: "Descripción de la tasa mínima",
        maxRateDescription: "Descripción de la tarifa máxima",
        inputType: "Tipo de entrada",
        optionsCaption: "Leyenda de opciones",
        defaultValue: "Valor de defecto",
        cellsDefaultRow: "Textos de celdas por defecto",
        surveyEditorTitle: "Editar ajustes de encuesta",
        qEditorTitle: "Editar: {0}",
        //survey
        showTitle: "Mostrar/esconder título",
        locale: "Lenguaje de defecto",
        mode: "Modo (editar/solo lectura)",
        clearInvisibleValues: "Borrar valores invisibles",
        cookieName: "Nombre de Cookie (para deshabilitar corra encuesta dos veces localmente)",
        sendResultOnPageNext: "Mandar resultados de encuesta en página siguiente",
        storeOthersAsComment: "Guardar valor 'otros' en campo separado",
        showPageTitles: "Mostrar títulos de página",
        showPageNumbers: "Mostrar números de página",
        pagePrevText: "Texto de botón de página previa",
        pageNextText: "Texto de botón de página próxima",
        completeText: "Texto de botón de completado",
        startSurveyText: "Texto de botón de inicio",
        showNavigationButtons: "Mostrar botones de navigación (navegación de defecto)",
        showPrevButton: "Mostrar botón previo (el usuario puede regresar en página previa)",
        firstPageIsStarted: "La primera página en la encuesta es una página iniciada.",
        showCompletedPage: "Mostrar la página completada al final (completedHtml)",
        goNextPageAutomatic: "Al contestar todas las preguntas, ir a la próxima página automáticamente",
        showProgressBar: "Mostrar barra de progreso",
        questionTitleLocation: "Localización de título de pregunta",
        requiredText: "La pregunta requiere de símbolo(s)",
        questionStartIndex: "Índice de inicio de pregunta (1, 2 o 'A', 'a')",
        showQuestionNumbers: "Mostrar números de preguntas",
        questionTitleTemplate: "Plantilla de título de pregunta, defecto es: '{no}. {require} {title}'",
        questionErrorLocation: "Error en ubucación de la pregunta",
        focusFirstQuestionAutomatic: "Foco en primera pregunta al cambiar la página",
        questionsOrder: "Órden de elementos en la página",
        maxTimeToFinish: "Tiempo máximo para finalizar la encuesta",
        maxTimeToFinishPage: "Tiempo máximo para finalizar una página en la encuesta",
        showTimerPanel: "Mostrar panel de temporizador",
        showTimerPanelMode: "Modo de muestra de panel de temporizador",
        renderMode: "Modo de interpretador",
        allowAddPanel: "Permitir adición de un panel",
        allowRemovePanel: "Permitir remoción del panel",
        panelAddText: "Añadiendo texto de panel",
        panelRemoveText: "Quitando texto de panel",
        isSinglePage: "Mostrar todos los elementos en una página",
        tabs: {
            general: "General",
            fileOptions: "Opciones",
            html: "Editor Html",
            columns: "Columnas",
            rows: "Filas",
            choices: "Opciones",
            items: "Elementos",
            visibleIf: "Visible Si",
            enableIf: "Habilitar Si",
            rateValues: "Valores de tasa",
            choicesByUrl: "Opciones de la Web",
            matrixChoices: "Opciones de defecto",
            multipleTextItems: "Entradas de texto",
            validators: "Validadores",
            navigation: "Navegación",
            question: "Pregunta",
            completedHtml: "Html Completado",
            loadingHtml: "Cargando Html",
            timer: "Temporizador/Quiz",
            triggers: "Disparadores",
            templateTitle: "Título de plantilla"
        },
        editProperty: "Editar propiedad '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Por favor, proporcione el valor.",
        noquestions: "No hay ni una pregunta en la encuesta.",
        createtrigger: "Por favor cree un disparador",
        triggerOn: "En ",
        triggerMakePagesVisible: "Hacer páginas visibles:",
        triggerMakeQuestionsVisible: "Hacer elementos visibles:",
        triggerCompleteText: "Complete la encuesta en caso de éxito.",
        triggerNotSet: "El disparador no está configurado",
        triggerRunIf: "Correr si",
        triggerSetToName: "Cambiar valor de: ",
        triggerSetValue: "a: ",
        triggerIsVariable: "No poner la variable en el resultado de la encuesta."
    },
    //Property values
    pv: {
        true: "verdadero",
        false: "falso",
        inherit: "heredar",
        show: "mostrar",
        hide: "ocultar",
        default: "predefinido",
        initial: "inicial",
        random: "aleatorio",
        collapsed: "colapsado",
        expanded: "expandido",
        none: "ninguna",
        asc: "ascendente",
        desc: "descendente",
        indeterminate: "indeterminado",
        decimal: "decimal",
        currency: "moneda",
        percent: "por ciento",
        firstExpanded: "primeroExpandido",
        off: "apagado",
        onPanel: "onPanel",
        onSurvey: "onSurvey",
        list: "lista",
        progressTop: "progresoArriba",
        progressBottom: "progresoAbajo",
        progressTopBottom: "progresoArribaAbajo",
        horizontal: "horizontal",
        vertical: "vertical",
        top: "arriba",
        bottom: "abajo",
        topBottom: "arriba y abajo",
        left: "izquierda",
        color: "color",
        date: "fecha",
        datetime: "fecha y hora",
        "datetime-local": "fechaHora-local",
        email: "correo electrónico",
        month: "mes",
        number: "número",
        password: "contraseña",
        range: "rango",
        tel: "teléfono",
        text: "texto",
        time: "tiempo",
        url: "url",
        week: "semana",
        hidden: "oculto",
        on: "encendido",
        onPage: "onPage",
        edit: "editar",
        display: "mostrar",
        onComplete: "Cuando se complete",
        onHidden: "Cuando se oculte",
        all: "todo",
        page: "página",
        survey: "encuesta",
        onNextPage: "Cuando se cambie de página",
        onValueChanged: "Cuando el valor cambie"
    },
    //Operators
    op: {
        empty: "es vacío",
        notempty: "no es vacío",
        equal: "igual a",
        notequal: "no igual a",
        contains: "contiene",
        notcontains: "no contiene",
        greater: "mayor",
        less: "menor",
        greaterorequal: "mayor o igual a",
        lessorequal: "menor or igual a"
    },
    //Embed window
    ew: {
        angular: "Use versión Angular",
        jquery: "Use versión jQuery",
        knockout: "Use versión Knockout",
        react: "Use versión React",
        vue: "Use versión Vue",
        bootstrap: "Para entorno bootstrap",
        standard: "No bootstrap",
        showOnPage: "Mostrar encuesta en una página",
        showInWindow: "Mostrar encuesta en una ventana",
        loadFromServer: "Cargar JSON de encuesta del servidor",
        titleScript: "Scripts y estilos",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Test Survey
    ts: {
        selectPage: "Seleccione la página para probarla:"
    },
    validators: {
        answercountvalidator: "cuenta de respuestas",
        emailvalidator: "e-mail",
        expressionvalidator: "expresión",
        numericvalidator: "numerico",
        regexvalidator: "regex",
        textvalidator: "texto"
    },
    triggers: {
        completetrigger: "encuesta completa",
        setvaluetrigger: "valor ajustado",
        visibletrigger: "cambio de visibilidad"
    },
    //Properties
    p: {
        name: "nombre",
        title: {
            name: "título",
            title: "Dejarlo vacío, si es igual que 'Nombre'"
        },
        page_title: { name: "título", title: "Título de página" },
        navigationButtonsVisibility: "Visibilidad de botones de navegación",
        questionsOrder: "Orden de las preguntas",
        maxTimeToFinish: "Tiempo máximo para terminar",
        visible: "Visible",
        visibleIf: "Visible Si",
        questionTitleLocation: "preguntaTituloLocacion",
        description: "Descripción",
        state: "Estado",
        isRequired: "Es Requerido",
        indent: "Indentar",
        requiredErrorText: "Texto del error",
        startWithNewLine: "Comenzar con una nueva línea",
        innerIndent: "Identación interna",
        page: "Página",
        width: "Ancho",
        commentText: "Texto del Comentario",
        valueName: "Nombre del valor",
        enableIf: "Habilitado Si",
        defaultValue: "Valor por defecto",
        correctAnswer: "Respuesta correcta",
        readOnly: "Solo Lectura",
        validators: "Validadores",
        titleLocation: "Titulo de la ubicación",
        hasComment: "Tiene Comentario",
        hasOther: "Tiene Otro",
        choices: "Elecciones",
        choicesOrder: "Orden de las opciones",
        choicesByUrl: "Opciones por URL",
        otherText: "Otro Texto",
        otherErrorText: "Texto del error para otro",
        storeOthersAsComment: "Guardar otros como comentario",
        label: "Etiqueta",
        showTitle: "Mostrar Título",
        valueTrue: "Valor Verdadero",
        valueFalse: "Valor Falso",
        cols: "Columnas",
        rows: "Filas",
        placeHolder: "Marcador de entrada",
        optionsCaption: "Opciones de Título",
        expression: "Expresión",
        format: "Formato",
        displayStyle: "Estilo de visualización",
        currency: "Moneda",
        useGrouping: "Usar agrupación",
        showPreview: "Mostrar vista previa",
        allowMultiple: "Permitir múltiples",
        imageHeight: "Altura de la imagen",
        imageWidth: "Ancho de la imagen",
        storeDataAsText: "Almacenar datos como texto",
        maxSize: "Tamaño máximo",
        html: "html",
        columns: "columnas",
        cells: "celdas",
        isAllRowRequired: "Se requieren todas las filas",
        horizontalScroll: "Desplazamiento horizontal",
        cellType: "Tipo de celda",
        columnsLocation: "Columnas de Locación",
        columnColCount: "Conteo de columna",
        columnMinWidth: "Ancho mínimo de columna",
        rowCount: "Conteo de fila",
        minRowCount: "Conteo mínima de fila",
        maxRowCount: "Conteo máxima de fila",
        keyName: "Nombre clave",
        keyDuplicationError: "Mensaje de error para clave de duplicada",
        confirmDelete: "Confirmación de eliminación",
        confirmDeleteText: "Texto de la confirmación para eliminación",
        addRowLocation: "Agrega fila de ubicación",
        addRowText: "Agregar texto de la fila",
        removeRowText: "Quitar texto de la fila",
        items: "ítems",
        itemSize: "Tamaño del ítem",
        colCount: "Conteo de columnas",
        templateTitle: "Título de la plantilla",
        templateDescription: "Descripción de la platilla",
        allowAddPanel: "Permitir agregar panel",
        allowRemovePanel: "Permitir eliminar panel",
        panelCount: "Conteo de panel",
        minPanelCount: "Conteo mínimo de panel",
        maxPanelCount: "Conteo máximo de panel",
        panelsState: "Paneles de Estado",
        panelAddText: "Agregar texto al panel",
        panelRemoveText: "Eliminar texto al panel",
        panelPrevText: "Texto anterior del panel",
        panelNextText: "Texto siguiente del panel",
        showQuestionNumbers: "Nostrar números de pregunta",
        showRangeInProgress: "Mostrar el rango de progreso",
        renderMode: "Modo renderizado",
        templateTitleLocation: "Plantilla del Título Ubicación",
        rateValues: "Valores de tarifa",
        rateMin: "Tarifa mínima",
        rateMax: "Tarifa máxima",
        rateStep: "Pasos de tarifa",
        minRateDescription: "Descripción mínima de tarifa",
        maxRateDescription: "Descripción máxima de tarifa",
        inputType: "Tipo de entrada",
        size: "Tamaño",
        locale: "Lugar",
        focusFirstQuestionAutomatic: "Enfocar primera pregunta automática",
        completedHtml: "HTML Completado",
        completedBeforeHtml: "Completado antes de HTML",
        loadingHtml: "Cargando HTML",
        triggers: "Disparadores",
        cookieName: "Nombre de la cookie",
        sendResultOnPageNext: "Enviar resultado a la página siguiente",
        showNavigationButtons: "Mostrar botones de navegación",
        showPrevButton: "Mostrar botón anterior",
        showPageTitles: "Mostrar Títulos de la página",
        showCompletedPage: "Mostrar página completada",
        showPageNumbers: "Mostrar los números de página",
        questionErrorLocation: "Pregunta error ubicación",
        showProgressBar: "Mostrar barra de progreso",
        mode: "Modo",
        goNextPageAutomatic: "Ir a la siguiente página automática",
        checkErrorsMode: "Verifica el modo de errores",
        clearInvisibleValues: "Limpiar en valores visibles",
        startSurveyText: "Comenzar el texto de la encuesta",
        pagePrevText: "Texto anterior de la página",
        pageNextText: "Texto siguiente de la página",
        completeText: "Texto completado de la página",
        requiredText: "Texto requerido",
        questionStartIndex: "Índice de inicio de pregunta",
        questionTitleTemplate: "Título platilla de la pregunta",
        firstPageIsStarted: "Se inicia la primera página",
        isSinglePage: "Es una sola página",
        maxTimeToFinishPage: "Tiempo máximo para terminar la página",
        showTimerPanel: "Mostrar tiempo del panel",
        showTimerPanelMode: "Mostrar tiempo del modo panel",
        text: "texto",
        minValue: "Valor mínimo",
        maxValue: "Valor máximo",
        minLength: "Largo mínimo",
        maxLength: "Largo máximo",
        allowDigits: "Permitir dígitos",
        minCount: "Conteo mínimo",
        maxCount: "Conteo máximo",
        regex: "Expresión regular"
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["es"] = spanishTranslation;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(0);

var traditionalChineseTranslation = {
    // strings for survey templates
    survey: {
        edit: "編輯",
        dropQuestion: "請將問題放置於此",
        copy: "複製",
        addToToolbox: "添加到工具箱",
        deletePanel: "刪除面板",
        deleteQuestion: "刪除題目",
        convertTo: "轉變為"
    },
    // strings for question types
    qt: {
        checkbox: "多項選擇",
        comment: "多行文本框",
        dropdown: "下拉框",
        file: "文件上傳",
        html: "Html 代碼",
        matrix: "矩陣 (單選題)",
        matrixdropdown: "矩陣 (下拉框)",
        matrixdynamic: "矩陣 (動態問題)",
        multipletext: "文本框組",
        panel: "面板",
        paneldynamic: "面板(動態)",
        radiogroup: "單項選擇",
        rating: "評分",
        text: "文本框",
        boolean: "布林選項",
        expression: "表達式"
    },
    // strings for editor
    ed: {
        survey: "調查問捲",
        editSurvey: "修改",
        addNewPage: "添加新頁面",
        deletePage: "刪除頁面",
        editPage: "編輯頁面",
        newPageName: "頁面",
        newQuestionName: "問題",
        newPanelName: "面板",
        testSurvey: "測試問捲",
        testSurveyAgain: "再次測試問捲",
        testSurveyWidth: "問捲寬度: ",
        embedSurvey: "將問捲嵌入網頁",
        saveSurvey: "保存問捲",
        designer: "問捲設計器",
        jsonEditor: "JSON 編輯器",
        undo: "還原",
        redo: "重做",
        options: "選項",
        generateValidJSON: "生成 JSON",
        generateReadableJSON: "生成易讀的 JSON",
        toolbox: "工具箱",
        delSelObject: "刪除所選對象",
        editSelObject: "編輯所選對象",
        correctJSON: "修正 JSON",
        surveyResults: "問卷結果: ",
        modified: "已修改",
        saving: "保存中...",
        saved: "已保存"
    },
    //Property names in table headers
    pel: {
        isRequired: "是否為必填項?"
    },
    // strings for property editors
    pe: {
        apply: "應用",
        ok: "確定",
        cancel: "取消",
        reset: "重置",
        close: "關閉",
        delete: "刪除",
        addNew: "新建",
        removeAll: "全部刪除",
        edit: "編輯器",
        empty: "<空>",
        fastEntry: "快速輸入",
        formEntry: "表單輸入",
        testService: "測試服務",
        showMore: "更多細節...",
        conditionHelp: "請輸入一個布林表達式。當布林值為真，問題/頁面可見。例如：{question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
        expressionHelp: "請輸入一項條件判斷。當條件判斷為真時問題/頁面將可見。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        propertyIsEmpty: "請為該屬性設定一個值",
        value: "值",
        text: "顯示文本",
        columnEdit: "編輯列: {0}",
        itemEdit: "編輯選項: {0}",
        hasOther: "可添加其他答案?",
        otherText: "其他答案文本",
        url: "URL",
        path: "Path",
        valueName: "Value name",
        titleName: "Title name",
        name: "題目名",
        title: "題目文本",
        cellType: "單元格類型",
        colCount: "列數",
        choicesOrder: "設置選項順序",
        visible: "是否可見?",
        isRequired: "是否為必填項?",
        startWithNewLine: "問題是否新起一行?",
        rows: "文本框行數",
        placeHolder: "占位文本",
        showPreview: "是否顯示圖像預覽?",
        storeDataAsText: "以 JSON 文本方式存儲文件",
        maxSize: "文件最大尺寸 (Bytes)",
        imageHeight: "圖片高度",
        imageWidth: "圖片寬度",
        rowCount: "默認行數",
        addRowText: "添加條目按鈕文本",
        removeRowText: "刪除條目按鈕文本",
        minRateDescription: "最小值提示",
        maxRateDescription: "最大值提示",
        inputType: "文本框類型",
        optionsCaption: "下拉框提示語",
        qEditorTitle: "編輯問題: {0}",
        //survey
        showTitle: "顯示/隱藏 標題",
        locale: "默認語言",
        mode: "模式 (編輯/只讀)",
        clearInvisibleValues: "清除隱藏值",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "顯示頁面標題",
        showPageNumbers: "顯示頁數",
        pagePrevText: "前一頁按鈕文本",
        pageNextText: "後一頁按鈕文本",
        completeText: "完成按鈕文本",
        startSurveyText: "開始按鈕文本",
        showNavigationButtons: "顯示導航按鈕 (默認導航)",
        showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
        firstPageIsStarted: "調查的第一頁面為起始頁.",
        showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
        goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
        showProgressBar: "顯示進度條",
        questionTitleLocation: "問題的標題位置",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "問題起始標誌 (1, 2 or 'A', 'a')",
        showQuestionNumbers: "顯示問題編號",
        questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
        questionErrorLocation: "問題錯誤定位",
        focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
        questionsOrder: "Elements order on the page",
        maxTimeToFinish: "完成調查的最長時間",
        maxTimeToFinishPage: "完成調查中頁面的最長時間",
        showTimerPanel: "顯示計時器面板",
        showTimerPanelMode: "顯示計時器面板模式",
        renderMode: "渲染模式",
        allowAddPanel: "允許添加面板",
        allowRemovePanel: "允許刪除面板",
        panelAddText: "添加面板文本",
        panelRemoveText: "刪除面板文本",
        isSinglePage: "在一個頁面上展示所有元素",
        tabs: {
            general: "通用項",
            navigation: "導航",
            question: "問題",
            completedHtml: "完成後的Html",
            loadingHtml: "加載中的Html",
            timer: "問捲計時器",
            trigger: "觸發器",
            fileOptions: "選項",
            html: "HTML 編輯器",
            columns: "設置列",
            rows: "設置行",
            choices: "設置選項",
            visibleIf: "設置可見條件",
            enableIf: "Enable If",
            rateValues: "設置評分值",
            choicesByUrl: "通過 URL 導入選項",
            matrixChoices: "默認選項",
            multipleTextItems: "文本輸入",
            validators: "校驗規則"
        },
        editProperty: "編輯屬性: '{0}'",
        items: "[ 項目數量: {0} ]",
        enterNewValue: "請設定值",
        noquestions: "問捲中還沒有創建任何問題",
        createtrigger: "請創建觸發器",
        triggerOn: "當 ",
        triggerMakePagesVisible: "使頁面可見:",
        triggerMakeQuestionsVisible: "使問題可見:",
        triggerCompleteText: "如果滿足條件，則完成問捲",
        triggerNotSet: "觸發器尚未設置",
        triggerRunIf: "滿足下列條件時執行",
        triggerSetToName: "修改下列問題值: ",
        triggerSetValue: "修改為: ",
        triggerIsVariable: "在問捲提交結果中不要包含該變量"
    },
    // strings for operators
    op: {
        empty: "為空",
        notempty: "不為空",
        equal: "等於",
        notequal: "不等於",
        contains: "包含",
        notcontains: "不包含",
        greater: "大於",
        less: "小於",
        greaterorequal: "大於等於",
        lessorequal: "小於等於"
    },
    // strings for embed window
    ew: {
        angular: "使用 Angular 時",
        jquery: "使用 JQuery 時",
        knockout: "使用 Knockout 時",
        react: "使用 React 時",
        vue: "使用 Vue 時",
        bootstrap: "使用 Bootstrap 時",
        standard: "不使用 Bootstrap 時",
        showOnPage: "嵌入頁面顯示",
        showInWindow: "使用單獨的問捲視窗",
        loadFromServer: "從服務器加載問捲 JSON 數據",
        titleScript: "腳本和樣式",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    validators: {
        answercountvalidator: "數量檢查",
        emailvalidator: "Email",
        numericvalidator: "數字",
        regexvalidator: "正則表達式",
        textvalidator: "文本"
    },
    triggers: {
        completetrigger: "完成問捲",
        setvaluetrigger: "設置問題值",
        visibletrigger: "修改可見性"
    },
    // strings of properties
    p: {
        commentText: "備註文本",
        choices: "選項",
        choicesByUrl: "Url選項",
        choicesOrder: "選項排序",
        colCount: "列數",
        correctAnswer: "正確答案",
        defaultVaule: "預設選項",
        description: "說明",
        enableIf: "允許判斷",
        hasComment: "hasComment",
        hasOther: "允許其他答案",
        otherText: "其他答案文本",
        page: "所在頁面",
        readOnly: "只讀",
        indent: "縮排",
        isRequired: "必填",
        requiredErrorText: "requiredErrorText",
        otherErrorText: "requiredErrorText",
        startWithNewLine: "允許問題在新行",
        //survey
        showTitle: "顯示/隱藏 標題",
        locale: "默認語言",
        mode: "模式 (編輯/只讀)",
        clearInvisibleValues: "清除隱藏值",
        cookieName: "Cookie name (to disable run survey two times locally)",
        sendResultOnPageNext: "Send survey results on page next",
        storeOthersAsComment: "Store 'others' value in separate field",
        showPageTitles: "顯示頁面標題",
        showPageNumbers: "顯示頁數",
        pagePrevText: "前一頁按鈕文本",
        pageNextText: "後一頁按鈕文本",
        completeText: "完成按鈕文本",
        startSurveyText: "開始按鈕文本",
        showNavigationButtons: "顯示導航按鈕 (默認導航)",
        showPrevButton: "顯示前一頁按鈕 (用戶可返回至前一頁面)",
        firstPageIsStarted: "調查的第一頁面為起始頁.",
        showCompletedPage: "結尾展示完成後的頁面 (completedHtml)",
        goNextPageAutomatic: "回答本頁所有問題後，自動跳轉到下一頁",
        showProgressBar: "顯示進度條",
        questionTitleLocation: "問題的標題位置",
        requiredText: "The question required symbol(s)",
        questionStartIndex: "問題起始標志 (1, 2 or 'A', 'a')",
        showQuestionNumbers: "顯示問題編號",
        questionTitleTemplate: "問題標題模板, 默認為: '{no}. {require} {title}'",
        questionErrorLocation: "問題錯誤定位",
        focusFirstQuestionAutomatic: "改變頁面時聚焦在第一個問題",
        questionsOrder: "頁面中元素的順序",
        maxTimeToFinish: "完成調查的最長時間",
        maxTimeToFinishPage: "完成調查中頁面的最長時間",
        showTimerPanel: "顯示計時器面板",
        showTimerPanelMode: "顯示計時器面板模式",
        renderMode: "渲染模式",
        allowAddPanel: "允許添加面板",
        allowRemovePanel: "允許刪除面板",
        panelAddText: "添加面板文本",
        panelRemoveText: "刪除面板文本",
        isSinglePage: "在一個頁面上展示所有元素",
        name: "名字",
        title: {
            name: "標題",
            title: "如果與名字相同，請設置為空值"
        },
        survey_title: {
            name: "標題",
            title: "問捲標題在每頁上都會顯示"
        },
        page_title: {
            name: "標題",
            title: "頁面標題"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["zh-tw"] = traditionalChineseTranslation;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* unused harmony export SurveyDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysManager; });


var ServiceAPI = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ServiceAPI, _super);
    function ServiceAPI(baseUrl, accessKey) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        _this.accessKey = accessKey;
        return _this;
    }
    ServiceAPI.prototype.getActiveSurveys = function (onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.baseUrl + "/getActive?accessKey=" + this.accessKey);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.createSurvey = function (name, onCreate) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.baseUrl + "/create?accessKey=" + this.accessKey + "&name=" + name);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onCreate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.saveSurvey = function (id, json, onSave) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.baseUrl + "/changeJson?accessKey=" + this.accessKey);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onSave && onSave(xhr.status == 200, result, xhr.response);
        };
        xhr.send(JSON.stringify({ Id: id, Json: json, Text: json }));
    };
    ServiceAPI.prototype.updateSurveyName = function (id, name, onUpdate) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.baseUrl +
            "/changeName/" +
            id +
            "?accessKey=" +
            this.accessKey +
            "&name=" +
            name);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onUpdate && onUpdate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return ServiceAPI;
}(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__["dxSurveyService"]));
var SurveyDescription = /** @class */ (function () {
    function SurveyDescription(name, createdAt, id, resultId, postId) {
        if (name === void 0) { name = ko.observable(""); }
        if (createdAt === void 0) { createdAt = new Date(Date.now()).toDateString(); }
        if (id === void 0) { id = ""; }
        if (resultId === void 0) { resultId = ""; }
        if (postId === void 0) { postId = ""; }
        this.name = name;
        this.createdAt = createdAt;
        this.id = id;
        this.resultId = resultId;
        this.postId = postId;
    }
    return SurveyDescription;
}());

var SurveysManager = /** @class */ (function () {
    function SurveysManager(baseUrl, accessKey, editor) {
        var _this = this;
        this.baseUrl = baseUrl;
        this.accessKey = accessKey;
        this.editor = editor;
        this.isEditMode = ko.observable(false);
        this.surveyId = ko.observable();
        this.surveys = ko.observableArray();
        this.currentSurvey = ko.observable();
        this.currentSurveyName = ko.observable("");
        this.isLoading = ko.observable(false);
        this.nameEditorKeypress = function (model, event) {
            if (event.keyCode === 13) {
                _this.edit(model, event);
            }
            else if (event.keyCode === 27) {
                _this.isEditMode(false);
            }
        };
        var hash = window.location.hash;
        if (hash.indexOf("#") === 0) {
            this.surveyId(hash.slice(1));
        }
        this.api = new ServiceAPI(baseUrl + SurveysManager.serviceUrlPath, accessKey);
        editor.isAutoSave = true;
        editor.showState = true;
        editor.saveSurveyFunc = function (saveNo, callback) {
            if (!editor.surveyId && !_this.surveyId()) {
                _this.addHandler(function (success) { return callback(saveNo, success); });
            }
            if (!!editor.surveyId || !!_this.surveyId()) {
                _this.api.saveSurvey(editor.surveyId || _this.surveyId(), editor.text, function (success) { return callback(saveNo, success); });
            }
        };
        this.surveys(this.getSurveys());
        if (!this.surveyId()) {
            this.currentSurvey(this.surveys()[0]);
        }
        else {
            var survey = this.surveys().filter(function (s) { return s.id === _this.surveyId(); })[0];
            if (!!survey) {
                this.currentSurvey(survey);
                this.surveyId(undefined);
            }
            else {
                editor.loadSurvey(this.surveyId());
            }
        }
        var onCurrentSurveyChanged = function (survey) {
            if (!!survey) {
                _this.surveyId(undefined);
                window.location.hash = "#" + survey.id;
                if (editor.surveyId === survey.id)
                    return;
                editor.loadSurvey(survey.id);
                editor.surveyId = survey.id;
                editor.surveyPostId = survey.postId;
            }
            else {
                if (!_this.surveyId()) {
                    editor.surveyId = "";
                    editor.surveyPostId = "";
                    window.location.hash = "";
                    editor.text = "";
                }
            }
        };
        this.currentSurvey.subscribe(onCurrentSurveyChanged);
        onCurrentSurveyChanged(this.currentSurvey());
        var currentSurveyCanBeAttached = ko.observable(false);
        ko.computed(function () {
            var survey = _this.currentSurvey();
            currentSurveyCanBeAttached(false);
            if (!!survey) {
                _this.api.updateSurveyName(survey.id, survey.name.peek(), function (success) {
                    currentSurveyCanBeAttached(success);
                });
            }
        });
        this.toolbarItem = {
            id: "svd-attach-survey",
            template: "attach-survey",
            visible: currentSurveyCanBeAttached,
            action: ko.computed(function () {
                return "https://dxsurvey.com/Home/AttachSurvey/" +
                    (_this.currentSurvey() && _this.currentSurvey().id);
            }),
            css: "link-to-attach",
            innerCss: "icon-cloud",
            title: "Attach survey to your SurveyJS service account..."
        };
    }
    SurveysManager.prototype.getSurveys = function () {
        return JSON.parse(window.localStorage.getItem(SurveysManager.StorageKey) || "[]").map(function (item) {
            return new SurveyDescription(ko.observable(item.name), item.createdAt, item.id, item.resultId, item.postId);
        });
    };
    SurveysManager.prototype.setSurveys = function (surveys) {
        window.localStorage.setItem(SurveysManager.StorageKey, ko.toJSON(surveys));
    };
    SurveysManager.prototype.edit = function (model, event) {
        var survey = this.currentSurvey();
        if (!!survey) {
            if (this.isEditMode()) {
                survey.name(this.currentSurveyName());
                this.setSurveys(this.surveys());
                this.api.updateSurveyName(survey.id, survey.name());
                this.isEditMode(false);
            }
            else {
                this.currentSurveyName(survey.name());
                this.isEditMode(true);
                event.target.parentNode.parentElement.getElementsByTagName("input")[0].focus();
            }
        }
    };
    SurveysManager.prototype.addHandler = function (onAdd) {
        var _this = this;
        this.isLoading(true);
        this.api.createSurvey("NewSurvey", function (success, result, response) {
            var newSurveyDescription = new SurveyDescription(ko.observable(result.Name), result.CreatedAt, result.Id, result.ResultId, result.PostId);
            _this.surveys.push(newSurveyDescription);
            _this.setSurveys(_this.surveys());
            _this.editor.surveyId = result.Id;
            _this.editor.surveyPostId = result.PostId;
            _this.api.saveSurvey(result.Id, _this.editor.text);
            _this.currentSurvey(newSurveyDescription);
            _this.isLoading(false);
            onAdd && onAdd(success, result, response);
        });
    };
    SurveysManager.prototype.add = function () {
        this.addHandler();
    };
    SurveysManager.prototype.remove = function () {
        if (confirm("Do you really want to remove current survey?")) {
            this.surveys.remove(this.currentSurvey());
            this.setSurveys(this.surveys());
            this.currentSurvey(this.surveys()[0]);
        }
    };
    Object.defineProperty(SurveysManager.prototype, "cssEdit", {
        get: function () {
            return this.isEditMode() ? "icon-saved" : "icon-edit";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "cssAdd", {
        get: function () {
            return !this.surveyId() ? "icon-new" : "icon-fork";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleEdit", {
        get: function () {
            return this.isEditMode() ? "Save survey name" : "Edit survey name";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleAdd", {
        get: function () {
            return !this.surveyId() ? "Add new survey" : "Fork this survey";
        },
        enumerable: true,
        configurable: true
    });
    SurveysManager.serviceUrlPath = "/api/MySurveys";
    SurveysManager.StorageKey = "mySurveys";
    return SurveysManager;
}());



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_knockout_sortable_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_knockout_sortable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vendor_knockout_sortable_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesEditor; });




var PagesEditor = /** @class */ (function () {
    function PagesEditor(editor, element) {
        var _this = this;
        this.editor = editor;
        this.element = element;
        this.isNeedAutoScroll = true;
        this.isDraggingPage = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.prevPagesForSelector = [];
        this._selectedPage = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.getDisplayText = function (page) {
            return (_this.editor.showObjectTitles ? page.title : "") || page.name;
        };
        this.pageSelection = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"]({
            read: function () { return _this._selectedPage(); },
            write: function (newVal) {
                if (!!newVal && typeof newVal.getType === "function") {
                    _this.selectedPage = newVal;
                }
                else {
                    if (_this.editor.pages().length > 0) {
                        _this.addPage();
                    }
                }
            }
        });
        this.onPageClick = function (model, event) {
            _this.isNeedAutoScroll = false;
            _this.editor.selectPage(model);
            event.stopPropagation();
            _this.updateMenuPosition();
        };
        this.getPageClass = function (page) {
            var result = page === _this.selectedPage ? "svd_selected_page svd-light-bg-color" : "";
            if (_this.editor.pages().indexOf(page) !== _this.editor.pages().length - 1) {
                result += " svd-border-right-none";
            }
            return result;
        };
        this.getPageMenuIconClass = function (page) {
            return page === _this.selectedPage && _this.isActive()
                ? "icon-gearactive"
                : "icon-gear";
        };
        this.showActions = function (page) {
            return page === _this.selectedPage && _this.isActive();
        };
        this.pagesSelection = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            if (!_this.isDraggingPage()) {
                _this.prevPagesForSelector = _this.editor
                    .pages()
                    .concat([{ name: _this.getLocString("ed.addNewPage") }]);
            }
            return _this.prevPagesForSelector;
        });
        this._selectedPage(this.editor.pages()[0]);
        this.editor.koSelectedObject.subscribe(function (newVal) {
            if (!_this.isActive()) {
                if (!!editor.survey.currentPage &&
                    editor.survey.currentPage != _this._selectedPage()) {
                    _this._selectedPage(editor.survey.currentPage);
                }
                return;
            }
            _this._selectedPage(newVal.value);
            if (_this.isNeedAutoScroll) {
                _this.scrollToSelectedPage();
            }
            else {
                _this.isNeedAutoScroll = true;
            }
        });
    }
    PagesEditor.prototype.addPage = function () {
        this.editor.addPage();
    };
    PagesEditor.prototype.copyPage = function (page) {
        this.editor.copyPage(page);
    };
    PagesEditor.prototype.deletePage = function () {
        this.editor.deletePage();
    };
    PagesEditor.prototype.showPageSettings = function (page) {
        this.editor.showQuestionEditor(page);
    };
    Object.defineProperty(PagesEditor.prototype, "sortableOptions", {
        get: function () {
            var _this = this;
            return {
                onStart: function (evt) {
                    _this.isDraggingPage(true);
                },
                onEnd: function (evt) {
                    _this.isNeedAutoScroll = false;
                    _this.editor.movePage(evt.oldIndex, evt.newIndex);
                    _this.isDraggingPage(false);
                },
                handle: ".svd-page-name",
                animation: 150
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagesEditor.prototype, "selectedPage", {
        get: function () {
            return this._selectedPage();
        },
        set: function (newPage) {
            this.editor.selectPage(newPage);
        },
        enumerable: true,
        configurable: true
    });
    PagesEditor.prototype.isLastPage = function () {
        return this.editor.pages().length === 1;
    };
    PagesEditor.prototype.moveLeft = function (model, event) {
        var pagesElement = this.element.querySelector(".svd-pages");
        pagesElement.scrollLeft -= 50;
        this.updateMenuPosition();
    };
    PagesEditor.prototype.moveRight = function (model, event) {
        var pagesElement = this.element.querySelector(".svd-pages");
        pagesElement.scrollLeft += 50;
        this.updateMenuPosition();
    };
    PagesEditor.prototype.scrollToSelectedPage = function () {
        var pagesElement = this.element.querySelector(".svd-pages");
        if (!pagesElement)
            return;
        var index = this.editor.pages().indexOf(this.selectedPage);
        var pageElement = pagesElement.children[index];
        if (!pageElement)
            return;
        pagesElement.scrollLeft =
            pageElement.offsetLeft -
                pagesElement.offsetLeft -
                pagesElement.offsetWidth / 2;
        this.updateMenuPosition();
    };
    // onKeyDown(el: any, e: KeyboardEvent) {
    //   if (this.koPages().length <= 1) return;
    //   var pages = this.koPages();
    //   var pageIndex = -1;
    //   for (var i = 0; i < pages.length; i++) {
    //     if (pages[i].page && pages[i].koSelected()) {
    //       pageIndex = i;
    //     }
    //   }
    //   if (pageIndex < 0) return;
    //   if (e.keyCode == 46 && this.onDeletePageCallback)
    //     this.onDeletePageCallback(el.page);
    //   if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
    //     pageIndex += e.keyCode == 37 ? -1 : 1;
    //     if (pageIndex < 0) pageIndex = pages.length - 1;
    //     if (pageIndex >= pages.length) pageIndex = 0;
    //     var page = pages[pageIndex].page;
    //     this.onSelectPageCallback(page);
    //     this.setSelectedPage(page);
    //   }
    // }
    PagesEditor.prototype.onWheel = function (model, event) {
        var pagesElement = model.element.querySelector(".svd-pages");
        event = event || window.event;
        if (!!event.originalEvent) {
            event = event.originalEvent;
        }
        var delta = event.deltaY || event.detail || event.wheelDelta;
        pagesElement.scrollLeft -= delta;
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        this.updateMenuPosition();
    };
    PagesEditor.prototype.updateMenuPosition = function () {
        var pagesElement = this.element.querySelector(".svd-pages");
        var menuElements = pagesElement.getElementsByClassName("svd-page-actions");
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.left =
                menuElements[i].parentElement.offsetLeft -
                    pagesElement.scrollLeft +
                    "px";
        }
    };
    PagesEditor.prototype.getLocString = function (str) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(str);
    };
    PagesEditor.prototype.isActive = function () {
        var selectedObject = this.editor.koSelectedObject();
        if (!selectedObject)
            return;
        return __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(selectedObject.value) === __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Page;
    };
    return PagesEditor;
}());

__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("pages-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new PagesEditor(params.editor, componentInfo.element);
        }
    },
    template: { element: "svd-page-selector-template" }
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyCellsEditor; });






var SurveyPropertyCellsEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyCellsEditor, _super);
    function SurveyPropertyCellsEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koColumns = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koCanEdit = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        return _this;
    }
    SurveyPropertyCellsEditor.prototype.getValueText = function (value) {
        var strName = !value ? "empty" : "notEmpty";
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe." + strName);
    };
    SurveyPropertyCellsEditor.prototype.beforeShow = function () {
        _super.prototype.beforeShow.call(this);
        this.setupCells();
    };
    SurveyPropertyCellsEditor.prototype.onBeforeApply = function () {
        if (!this.canEdit)
            return;
        var matrix = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["QuestionMatrix"]("");
        matrix.setSurveyImpl(this.object.survey);
        matrix.rows = this.rows;
        matrix.columns = this.columns;
        matrix.cells = this.object.cells;
        var rows = this.koRows();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cells = row.koCells();
            for (var j = 0; j < matrix.columns.length; j++) {
                if (row.rowIndex < 0) {
                    matrix.setDefaultCellText(j, cells[j].text());
                }
                else {
                    matrix.setCellText(rows[i].rowIndex, j, cells[j].text());
                }
            }
        }
        if (!matrix.cells.isEmpty) {
            this.koValue(matrix.cells);
        }
        else {
            this.koValue(null);
        }
    };
    Object.defineProperty(SurveyPropertyCellsEditor.prototype, "editorType", {
        get: function () {
            return "cells";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyCellsEditor.prototype.onValueChanged = function () {
        if (this.isShowingModal) {
            this.setupCells();
        }
    };
    Object.defineProperty(SurveyPropertyCellsEditor.prototype, "canEdit", {
        get: function () {
            return this.rows.length > 0 && this.columns.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyCellsEditor.prototype, "rows", {
        get: function () {
            return this.object && this.object.rows ? this.object.rows : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyCellsEditor.prototype, "columns", {
        get: function () {
            return this.object && this.object.columns ? this.object.columns : [];
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyCellsEditor.prototype.getCellText = function (rowIndex, columnIndex) {
        if (rowIndex < 0)
            return this.object.getDefaultCellText(columnIndex);
        return this.object.getCellText(rowIndex, columnIndex);
    };
    SurveyPropertyCellsEditor.prototype.setupCells = function () {
        this.koRows([]);
        this.koColumns([]);
        this.koCanEdit(this.canEdit);
        if (!this.canEdit)
            return;
        var cols = [];
        for (var i = 0; i < this.columns.length; i++) {
            cols.push(this.columns[i].text);
        }
        var rows = [];
        rows.push(this.createRow(-1, __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.cellsDefaultRow")));
        for (var i = 0; i < this.rows.length; i++) {
            rows.push(this.createRow(i, this.rows[i].text));
        }
        this.koColumns(cols);
        this.koRows(rows);
    };
    SurveyPropertyCellsEditor.prototype.createRow = function (rowIndex, rowText) {
        var row = {
            rowIndex: rowIndex,
            rowText: rowText,
            koCells: __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]()
        };
        var cells = [];
        for (var i = 0; i < this.columns.length; i++) {
            cells.push({ text: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.getCellText(rowIndex, i)) });
        }
        row.koCells(cells);
        return row;
    };
    return SurveyPropertyCellsEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("cells", function (property) {
    return new SurveyPropertyCellsEditor(property);
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionEditors_questionEditorDefinition__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyNestedPropertyEditor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionEditors_questionEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entries__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemValuesEditor; });
/* unused harmony export SurveyPropertyItemValuesEditorItem */










var SurveyPropertyItemValuesEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemValuesEditor, _super);
    function SurveyPropertyItemValuesEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.optionsShowTextView = true;
        _this.koShowTextView = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        var self = _this;
        if (property) {
            _this.detailDefinition =
                __WEBPACK_IMPORTED_MODULE_6__questionEditors_questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].definition[_this.getItemValueClassName()];
        }
        _this.koItemsText = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koActiveView.subscribe(function (newValue) {
            if (newValue == "form")
                self.updateItems(self.koItemsText());
            else
                self.koItemsText(self.getItemsText());
        });
        _this.changeToTextViewClick = function () {
            self.koActiveView("text");
        };
        _this.changeToFormViewClick = function () {
            self.koActiveView("form");
        };
        _this.modalName =
            "modelEditor" + "itemvalues" + __WEBPACK_IMPORTED_MODULE_9__entries__["SurveyPropertyModalEditor"].idCounter;
        __WEBPACK_IMPORTED_MODULE_9__entries__["SurveyPropertyModalEditor"].idCounter++;
        _this.modalNameTarget = "#" + _this.modalName;
        return _this;
    }
    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "editorType", {
        get: function () {
            return "itemvalue[]";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "editorTypeTemplate", {
        get: function () {
            return "itemvalues";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "hasDetailButton", {
        get: function () {
            return !!this.detailDefinition;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyItemValuesEditor.prototype.getItemValueClassName = function () {
        return this.property ? this.editorType + "@" + this.property.name : "";
    };
    SurveyPropertyItemValuesEditor.prototype.getEditorName = function () {
        if (!this.koEditItem() || !this.koEditItem().item)
            return "";
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */]
            .getString("pe.itemEdit")["format"](this.koEditItem().item.value);
    };
    SurveyPropertyItemValuesEditor.prototype.beforeShow = function () {
        _super.prototype.beforeShow.call(this);
        var props = this.getDefinedProperties();
        if (!!props && props.length > 0) {
            this.createColumns();
        }
    };
    SurveyPropertyItemValuesEditor.prototype.getProperties = function () {
        var props = this.getDefinedProperties();
        if (!!props && props.length > 0)
            return props;
        return this.getDefaultProperties();
    };
    SurveyPropertyItemValuesEditor.prototype.getDefinedProperties = function () {
        if (this.property && this.object && this.object.getType) {
            var properties = __WEBPACK_IMPORTED_MODULE_6__questionEditors_questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(this.object.getType() + "@" + this.property.name);
            if (properties && properties.length > 0) {
                return this.getPropertiesByNames(this.property.className, properties);
            }
        }
        return [];
    };
    SurveyPropertyItemValuesEditor.prototype.getDefaultProperties = function () {
        var properties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getProperties(this.property.className);
        var res = [];
        for (var i = 0; i < properties.length; i++) {
            if (!properties[i].visible)
                continue;
            res.push(properties[i]);
        }
        return res;
    };
    SurveyPropertyItemValuesEditor.prototype.createEditorOptions = function () {
        var options = _super.prototype.createEditorOptions.call(this);
        options.showTextView = true;
        options.itemsEntryType =
            (this.options["options"] &&
                this.options["options"].itemValuesEditorEntryType) ||
                "form";
        return options;
    };
    SurveyPropertyItemValuesEditor.prototype.onSetEditorOptions = function (editorOptions) {
        _super.prototype.onSetEditorOptions.call(this, editorOptions);
        this.optionsShowTextView = editorOptions.showTextView;
        this.updateShowTextViewVisibility();
        this.koActiveView(editorOptions.itemsEntryType || "form");
    };
    SurveyPropertyItemValuesEditor.prototype.createNewEditorItem = function () {
        var _this = this;
        var nextValue = null;
        var values = this.koItems().map(function (item) {
            return item.item.itemValue;
        });
        var itemText = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["surveyLocalization"].getString("choices_Item");
        nextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* getNextValue */])(itemText, values);
        var itemValue = this.createEditorItemCore(nextValue);
        if (this.options) {
            this.options.onItemValueAddedCallback(this.editablePropertyName, itemValue, values);
        }
        return new SurveyPropertyItemValuesEditorItem(itemValue, function () { return _this.columns; }, this.options, this.getItemValueClassName());
    };
    SurveyPropertyItemValuesEditor.prototype.createEditorItem = function (item) {
        var _this = this;
        var itemValue = this.createEditorItemCore(null);
        itemValue.setData(item);
        return new SurveyPropertyItemValuesEditorItem(itemValue, function () { return _this.columns; }, this.options, this.getItemValueClassName());
    };
    SurveyPropertyItemValuesEditor.prototype.createEditorItemCore = function (item) {
        var itemValue = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(this.property.className);
        itemValue.setData(item);
        if (this.object) {
            itemValue["survey"] = this.object.survey;
            itemValue["object"] = this.object;
        }
        itemValue.locOwner = this;
        return itemValue;
    };
    SurveyPropertyItemValuesEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var item = editorItem.item;
        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
        if (!alwaySaveTextInPropertyEditors &&
            item.text == item.value &&
            !this.isTextLocalized(item)) {
            item.text = null;
        }
        var itemValue = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        itemValue.setData(item);
        delete itemValue["survey"];
        delete itemValue["object"];
        return itemValue;
    };
    SurveyPropertyItemValuesEditor.prototype.isTextLocalized = function (item) {
        return Object.keys(item.locText.values).length > 1;
    };
    SurveyPropertyItemValuesEditor.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        if (this.isShowingModal) {
            if (this.koActiveView() !== "form") {
                this.koItemsText(this.getItemsText());
            }
        }
        this.updateShowTextViewVisibility();
    };
    SurveyPropertyItemValuesEditor.prototype.onBeforeApply = function () {
        if (this.koActiveView() !== "form") {
            this.updateItems(this.koItemsText());
        }
        _super.prototype.onBeforeApply.call(this);
    };
    SurveyPropertyItemValuesEditor.prototype.onListDetailViewChanged = function () {
        _super.prototype.onListDetailViewChanged.call(this);
        this.updateShowTextViewVisibility();
    };
    SurveyPropertyItemValuesEditor.prototype.updateItems = function (text) {
        var items = [];
        if (text) {
            var properties = this.getProperties();
            var texts = text.split("\n");
            for (var i = 0; i < texts.length; i++) {
                if (!texts[i])
                    continue;
                var elements = texts[i].split(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"].Separator);
                var valueItem = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(this.property.className);
                properties.forEach(function (p, i) {
                    valueItem[p.name] = elements[i];
                });
                items.push(valueItem);
            }
        }
        this.koItems(this.getItemsFromValue(items));
    };
    SurveyPropertyItemValuesEditor.prototype.getItemsText = function () {
        return this.koItems()
            .filter(function (item) { return !item.cells[0].hasError; })
            .map(function (item) {
            return item.cells
                .map(function (cell) { return cell.value || ""; })
                .join(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"].Separator)
                .replace(/\|$/, "");
        })
            .join("\n");
    };
    SurveyPropertyItemValuesEditor.prototype.updateShowTextViewVisibility = function () {
        if (!this.koShowTextView)
            return;
        if (!this.optionsShowTextView || this.columns.length == 0) {
            this.koShowTextView(false);
            return;
        }
        this.koShowTextView(!this.hasVisibleIfOrEnableIf() && !this.hasMultipleLanguage());
    };
    SurveyPropertyItemValuesEditor.prototype.hasMultipleLanguage = function () {
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            //TODO replace with locText.hasNonDefaultText()
            var json = items[i].item.locText.getJson();
            if (!!json && typeof json !== "string") {
                var keys = Object.keys(json);
                if (keys.length > 1)
                    return true;
                return keys[0] != "default";
            }
        }
        return false;
    };
    SurveyPropertyItemValuesEditor.prototype.hasVisibleIfOrEnableIf = function () {
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            if (!!items[i].item.visibleIf || items[i].item.enableIf)
                return true;
        }
        return false;
    };
    return SurveyPropertyItemValuesEditor;
}(__WEBPACK_IMPORTED_MODULE_7__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyItemValuesEditorItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemValuesEditorItem, _super);
    function SurveyPropertyItemValuesEditorItem(item, getColumns, options, className) {
        if (className === void 0) { className = ""; }
        var _this = _super.call(this, item, getColumns, options) || this;
        _this.item = item;
        _this.className = className;
        return _this;
    }
    SurveyPropertyItemValuesEditorItem.prototype.createSurveyQuestionEditor = function () {
        return new __WEBPACK_IMPORTED_MODULE_8__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.item, null, this.className, this.options);
    };
    return SurveyPropertyItemValuesEditorItem;
}(__WEBPACK_IMPORTED_MODULE_7__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_4__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("itemvalue[]", function (property) {
    return new SurveyPropertyItemValuesEditor(property);
}, "itemvalue");


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionEditors_questionEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyNestedPropertyEditor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyDropdownColumnsEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyMatrixDropdownColumnsItem; });






var SurveyPropertyDropdownColumnsEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDropdownColumnsEditor, _super);
    function SurveyPropertyDropdownColumnsEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyPropertyDropdownColumnsEditor.prototype, "editorType", {
        get: function () {
            return "matrixdropdowncolumns";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDropdownColumnsEditor.prototype.getEditorName = function () {
        if (!this.koEditItem())
            return "";
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */]
            .getString("pe.columnEdit")["format"](this.koEditItem().column.name);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createNewEditorItem = function () {
        var _this = this;
        var newColumn = this.createEditorItemCore(null);
        var columns = [];
        for (var i = 0; i < this.koItems().length; i++) {
            columns.push(this.koItems()[i].column);
        }
        columns.push(newColumn);
        if (this.options) {
            this.options.onMatrixDropdownColumnAddedCallback(this.object, newColumn, columns);
        }
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn, function () { return _this.columns; }, this.options);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItem = function (item) {
        var _this = this;
        var newColumn = this.createEditorItemCore(item);
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn, function () { return _this.columns; }, this.options);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var newColumn = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["MatrixDropdownColumn"]("");
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(editorItem.column);
        new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toObject(json, newColumn);
        return newColumn;
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItemCore = function (item) {
        var newColumn = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["MatrixDropdownColumn"]("");
        newColumn["object"] = this.object;
        newColumn.colOwner = this.object;
        if (item) {
            var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(item);
            new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toObject(json, newColumn);
        }
        return newColumn;
    };
    SurveyPropertyDropdownColumnsEditor.prototype.getProperties = function () {
        var names = this.getPropertiesNames("matrixdropdowncolumn", [
            "isRequired",
            "cellType",
            "name",
            "title"
        ]);
        return this.getPropertiesByNames("matrixdropdowncolumn", names);
    };
    return SurveyPropertyDropdownColumnsEditor;
}(__WEBPACK_IMPORTED_MODULE_4__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyMatrixDropdownColumnsItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyMatrixDropdownColumnsItem, _super);
    function SurveyPropertyMatrixDropdownColumnsItem(column, getColumns, options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this, column, getColumns, options) || this;
        _this.column = column;
        var self = _this;
        column.registerFunctionOnPropertyValueChanged("cellType", function () {
            self.resetSurveyQuestionEditor();
        }, "colEdit");
        return _this;
    }
    SurveyPropertyMatrixDropdownColumnsItem.prototype.createSurveyQuestionEditor = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.column, null, "matrixdropdowncolumn@" + this.column.cellType, this.options);
    };
    return SurveyPropertyMatrixDropdownColumnsItem;
}(__WEBPACK_IMPORTED_MODULE_4__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("matrixdropdowncolumns", function (property) {
    return new SurveyPropertyDropdownColumnsEditor(property);
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyMultipleValuesEditor; });






var SurveyPropertyMultipleValuesEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyMultipleValuesEditor, _super);
    function SurveyPropertyMultipleValuesEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.items = [];
        _this.koEditingValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.setItems();
        return _this;
    }
    SurveyPropertyMultipleValuesEditor.prototype.getValueText = function (value) {
        if (!value)
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.empty");
        if (!Array.isArray(value))
            value = [value];
        var str = "[";
        for (var i = 0; i < value.length; i++) {
            if (i > 0)
                str += ", ";
            str += this.getTextByItemValue(value[i]);
        }
        str += "]";
        return str;
    };
    SurveyPropertyMultipleValuesEditor.prototype.setObject = function (value) {
        _super.prototype.setObject.call(this, value);
        this.setItems();
        this.setEditingValue();
    };
    SurveyPropertyMultipleValuesEditor.prototype.updateValue = function () {
        _super.prototype.updateValue.call(this);
        this.setEditingValue();
    };
    SurveyPropertyMultipleValuesEditor.prototype.onBeforeApply = function () {
        this.koValue([].concat(this.koEditingValue()));
    };
    Object.defineProperty(SurveyPropertyMultipleValuesEditor.prototype, "editorType", {
        get: function () {
            return "multiplevalues";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyMultipleValuesEditor.prototype.getBackgroundCls = function (value) {
        return this.koEditingValue().indexOf("" + value) === -1 ? "svd-light-background-color" : "svd-main-background-color";
    };
    SurveyPropertyMultipleValuesEditor.prototype.setItems = function () {
        __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ItemValue"].setData(this.items, this.property.choices);
        this.koItems(this.items);
    };
    SurveyPropertyMultipleValuesEditor.prototype.getTextByItemValue = function (val) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].value == val)
                return this.items[i].text;
        }
        return val;
    };
    SurveyPropertyMultipleValuesEditor.prototype.setEditingValue = function () {
        var val = this.koValue();
        if (val == null || val == undefined)
            val = [];
        if (!Array.isArray(val))
            val = [val];
        this.koEditingValue(val);
    };
    return SurveyPropertyMultipleValuesEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("multiplevalues", function (property) {
    return new SurveyPropertyMultipleValuesEditor(property);
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyResultfullEditor; });
/* unused harmony export SurveyPropertyResultfullEditorItem */






var SurveyPropertyResultfullEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyResultfullEditor, _super);
    function SurveyPropertyResultfullEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.items = [];
        _this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.createSurvey();
        return _this;
    }
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "editorType", {
        get: function () {
            return "restfull";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "restfullValue", {
        get: function () {
            if (this.editingObject)
                return this.editingObject[this.property.name];
            if (this.editingValue)
                return this.editingValue;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyResultfullEditor.prototype.getValueText = function (value) {
        if (!value || !value.url)
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.empty");
        var str = value.url;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyResultfullEditor.prototype.addItem = function (propName, val) {
        var self = this;
        this.items.push(new SurveyPropertyResultfullEditorItem(propName, val ? val[propName] : "", function (item) {
            self.onItemValueChanged(item);
        }));
    };
    SurveyPropertyResultfullEditor.prototype.onItemValueChanged = function (item) {
        this.question.choicesByUrl[item.name] = item.koValue();
        this.run();
    };
    SurveyPropertyResultfullEditor.prototype.onValueChanged = function () {
        var val = this.restfullValue;
        this.items = [];
        this.addItem("url", val);
        this.addItem("path", val);
        this.addItem("valueName", val);
        this.addItem("titleName", val);
        if (val && val["getCustomPropertiesNames"]) {
            var customProperties = val["getCustomPropertiesNames"]();
            for (var i = 0; i < customProperties.length; i++) {
                var propName = customProperties[i];
                if (propName === "visibleIfName")
                    continue; //TODO remove later
                this.addItem(propName, val);
            }
        }
        this.koItems(this.items);
    };
    SurveyPropertyResultfullEditor.prototype.onBeforeApply = function () {
        var val = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["ChoicesRestfull"]();
        val["owner"] = this.editingObject;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            val[item.name] = item.koValue();
        }
        this.setValueCore(val);
    };
    SurveyPropertyResultfullEditor.prototype.run = function () {
        this.question.choicesByUrl.run();
    };
    SurveyPropertyResultfullEditor.prototype.createSurvey = function () {
        this.survey = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"]();
        this.survey.showNavigationButtons = false;
        this.survey.showQuestionNumbers = "off";
        var page = this.survey.addNewPage("page1");
        this.question = page.addNewQuestion("dropdown", "q1");
        this.question.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.testService");
        this.question.choices = [];
    };
    return SurveyPropertyResultfullEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

var SurveyPropertyResultfullEditorItem = /** @class */ (function () {
    function SurveyPropertyResultfullEditorItem(name, val, onValueChanged) {
        this.name = name;
        this.onValueChanged = onValueChanged;
        this.isSetttingValue = false;
        this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](val ? val : "");
        var self = this;
        this.koValue.subscribe(function (newValue) {
            if (!self.isSetttingValue) {
                self.onValueChanged(self);
            }
        });
    }
    SurveyPropertyResultfullEditorItem.prototype.setValue = function (val) {
        this.isSetttingValue = true;
        this.koValue(val);
        this.isSetttingValue = false;
    };
    return SurveyPropertyResultfullEditorItem;
}());

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("restfull", function (property) {
    return new SurveyPropertyResultfullEditor(property);
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTextItemsEditor; });
/* unused harmony export SurveyPropertyTextItemsItem */







var SurveyPropertyTextItemsEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsEditor, _super);
    function SurveyPropertyTextItemsEditor(property) {
        return _super.call(this, property) || this;
    }
    Object.defineProperty(SurveyPropertyTextItemsEditor.prototype, "editorType", {
        get: function () {
            return "textitems";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextItemsEditor.prototype.getEditorName = function () {
        if (!this.koEditItem())
            return "";
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */]
            .getString("pe.columnEdit")["format"](this.koEditItem().koName());
    };
    SurveyPropertyTextItemsEditor.prototype.createNewEditorItem = function () {
        var _this = this;
        var newItem = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["MultipleTextItem"](this.getNewName());
        newItem["object"] = this.object;
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyTextItemsItem(newItem, function () { return _this.columns; }, this.options);
    };
    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) {
        var _this = this;
        return new SurveyPropertyTextItemsItem(item, function () { return _this.columns; }, this.options);
    };
    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var newItem = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["MultipleTextItem"]();
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(editorItem.item);
        new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toObject(json, newItem);
        return newItem;
    };
    SurveyPropertyTextItemsEditor.prototype.getProperties = function () {
        var names = this.getPropertiesNames("multipletext@items", [
            "isRequired",
            "name",
            "title"
        ]);
        return this.getPropertiesByNames("multipletextitem", names);
    };
    SurveyPropertyTextItemsEditor.prototype.getNewName = function () {
        var objs = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            var item = items[i].item;
            if (!!item) {
                objs.push({ name: item.name });
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2__surveyHelper__["b" /* SurveyHelper */].getNewName(objs, "text");
    };
    return SurveyPropertyTextItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyTextItemsItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsItem, _super);
    function SurveyPropertyTextItemsItem(item, getColumns, options) {
        var _this = _super.call(this, item, getColumns, options) || this;
        _this.item = item;
        return _this;
    }
    SurveyPropertyTextItemsItem.prototype.createSurveyQuestionEditor = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.item, null, "multipletextitem", this.options);
    };
    return SurveyPropertyTextItemsItem;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_6__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("textitems", function (property) {
    return new SurveyPropertyTextItemsEditor(property);
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyConditionEditor__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyDefaultValueEditor__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTriggersEditor; });
/* unused harmony export SurveyPropertyTrigger */
/* unused harmony export SurveyPropertyVisibleTrigger */
/* unused harmony export SurveyPropertySetValueTrigger */
/* unused harmony export SurveyPropertyCopyValueTrigger */
/* unused harmony export SurveyPropertyRunExpressionTrigger */
/* unused harmony export SurveyPropertyTriggerObjects */








var SurveyPropertyTriggersEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTriggersEditor, _super);
    function SurveyPropertyTriggersEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.availableTriggers = [];
        _this.triggerClasses = [];
        var self = _this;
        _this.onDeleteClick = function () {
            self.koItems.remove(self.koSelected());
        };
        _this.onAddClick = function (item) {
            self.addItem(item.value);
        };
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koSelected.subscribe(function (newValue) {
            if (!!newValue) {
                newValue.beforeShow();
            }
        });
        _this.koPages = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koQuestions = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koQuestionNames = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koElements = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.triggerClasses = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveytrigger", true);
        _this.availableTriggers = _this.getAvailableTriggers();
        _this.koTriggers = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.getLocalizedTriggers());
        return _this;
    }
    Object.defineProperty(SurveyPropertyTriggersEditor.prototype, "editorType", {
        get: function () {
            return "triggers";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTriggersEditor.prototype.onValueChanged = function () {
        if (this.editingObject) {
            var allQuestions = this.editingObject.getAllQuestions();
            this.koPages(this.getElements(this.editingObject.pages));
            this.koQuestions(this.getElements(allQuestions));
            this.koQuestionNames(this.getQuestionNames(allQuestions));
            this.koElements(this.getElements(this.getAllElements()));
        }
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    //TODO this code should be in the library
    SurveyPropertyTriggersEditor.prototype.getAllElements = function () {
        var res = [];
        var pages = this.editingObject.pages;
        for (var i = 0; i < pages.length; i++) {
            this.addElemenetsIntoList(pages[i], res);
        }
        return res;
    };
    SurveyPropertyTriggersEditor.prototype.addElemenetsIntoList = function (element, list) {
        var elements = element.getElementsInDesign(false);
        if (!elements)
            return;
        for (var i = 0; i < elements.length; i++) {
            list.push(elements[i]);
            this.addElemenetsIntoList(elements[i], list);
        }
    };
    SurveyPropertyTriggersEditor.prototype.addItem = function (triggerType) {
        var trigger = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(triggerType);
        var triggerItem = this.createPropertyTrigger(trigger);
        this.koItems.push(triggerItem);
        this.koSelected(triggerItem);
    };
    SurveyPropertyTriggersEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"]();
        var trigger = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, trigger);
        return this.createPropertyTrigger(trigger);
    };
    SurveyPropertyTriggersEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var editorTrigger = editorItem;
        return editorTrigger.createTrigger();
    };
    SurveyPropertyTriggersEditor.prototype.getLocalizedTriggers = function () {
        var res = [];
        for (var i = 0; i < this.availableTriggers.length; i++) {
            var name = this.availableTriggers[i];
            res.push({ value: name, text: __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getTriggerName(name) });
        }
        return res;
    };
    SurveyPropertyTriggersEditor.prototype.getAvailableTriggers = function () {
        var result = [];
        for (var i = 0; i < this.triggerClasses.length; i++) {
            result.push(this.triggerClasses[i].name);
        }
        return result;
    };
    SurveyPropertyTriggersEditor.prototype.getElements = function (items) {
        var _this = this;
        var elements = [];
        var options = this.options;
        items.forEach(function (item) {
            var element = {};
            element.name = item.name;
            element.text = item.name;
            if (_this.options &&
                _this.options.showTitlesInExpressions &&
                item["title"]) {
                element.text = item.title;
            }
            if (item.isPage) {
                element.page = item;
            }
            else {
                element.question = item;
            }
            elements.push(element);
        });
        options &&
            options.onConditionQuestionsGetListCallback(this.editablePropertyName, this, options, elements);
        return elements;
    };
    SurveyPropertyTriggersEditor.prototype.getQuestionNames = function (questions) {
        var items = [];
        for (var i = 0; i < questions.length; i++) {
            questions[i].addConditionNames(items);
        }
        var names = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].indexOf("[") < 0) {
                names.push(items[i]);
            }
        }
        return names;
    };
    SurveyPropertyTriggersEditor.prototype.createPropertyTrigger = function (trigger) {
        var triggerItem = null;
        trigger["survey"] = this.object;
        if (trigger.getType() == "visibletrigger") {
            triggerItem = new SurveyPropertyVisibleTrigger(trigger, this.koPages, this.koElements, this.options);
        }
        if (trigger.getType() == "setvaluetrigger") {
            triggerItem = new SurveyPropertySetValueTrigger(trigger, this.koQuestions, this.editingObject, this.options);
        }
        if (trigger.getType() == "copyvaluetrigger") {
            triggerItem = new SurveyPropertyCopyValueTrigger(trigger, this.koQuestions, this.options);
        }
        if (trigger.getType() == "runexpressiontrigger") {
            triggerItem = new SurveyPropertyRunExpressionTrigger(trigger, this.koQuestions, this.options);
        }
        if (!triggerItem) {
            triggerItem = new SurveyPropertyTrigger(trigger, this.options);
        }
        return triggerItem;
    };
    return SurveyPropertyTriggersEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyTrigger = /** @class */ (function () {
    function SurveyPropertyTrigger(trigger, options) {
        var _this = this;
        this.trigger = trigger;
        this.availableOperators = [];
        this.conditionEditor = null;
        this.availableOperators = __WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].getOperators();
        this.triggerType = trigger.getType();
        this.koType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.triggerType);
        this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.name);
        this.koOperator = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.operator);
        this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.value);
        var expressionProperty = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.findProperty("trigger", "expression");
        if (expressionProperty) {
            this.conditionEditor = new __WEBPACK_IMPORTED_MODULE_6__propertyConditionEditor__["a" /* SurveyPropertyConditionEditor */](expressionProperty);
            this.conditionEditor.options = options;
            this.conditionEditor.showHelpText = false;
            if (!this.trigger.expression) {
                this.trigger.expression = this.trigger.buildExpression();
            }
            this.conditionEditor.object = this.trigger;
        }
        var self = this;
        this.koRequireValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            return self.koOperator() != "empty" && self.koOperator() != "notempty";
        });
        this.koIsValid = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            if (!!_this.conditionEditor) {
                var text = self.conditionEditor.koTextValue();
                return !!text;
            }
            if (self.koName() && (!self.koRequireValue() || self.koValue()))
                return true;
            return false;
        });
        this.koText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            self.koName();
            self.koOperator();
            self.koValue();
            return self.getText();
        });
    }
    SurveyPropertyTrigger.prototype.beforeShow = function () {
        if (!!this.conditionEditor) {
            this.conditionEditor.beforeShow();
        }
    };
    SurveyPropertyTrigger.prototype.createTrigger = function () {
        var trigger = (__WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(this.triggerType));
        if (!!this.conditionEditor) {
            trigger["expression"] = this.conditionEditor.koTextValue();
        }
        else {
            //TODO remove else code
            trigger.name = this.koName();
            trigger.operator = this.koOperator();
            trigger.value = this.koValue();
        }
        return trigger;
    };
    SurveyPropertyTrigger.prototype.getText = function () {
        if (!this.koIsValid())
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerNotSet");
        if (!!this.conditionEditor) {
            var res = this.conditionEditor.koTextValue();
            if (!res)
                return "";
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerRunIf") + ": " + res;
        }
        return (__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerRunIf") +
            " '" +
            this.koName() +
            "' " +
            this.getOperatorText() +
            this.getValueText());
    };
    SurveyPropertyTrigger.prototype.getOperatorText = function () {
        var op = this.koOperator();
        for (var i = 0; i < this.availableOperators.length; i++) {
            if (this.availableOperators[i].name == op)
                return this.availableOperators[i].text;
        }
        return op;
    };
    SurveyPropertyTrigger.prototype.getValueText = function () {
        if (!this.koRequireValue())
            return "";
        return " " + this.koValue();
    };
    return SurveyPropertyTrigger;
}());

var SurveyPropertyVisibleTrigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyVisibleTrigger, _super);
    function SurveyPropertyVisibleTrigger(trigger, koPages, koQuestions, options) {
        var _this = _super.call(this, trigger, options) || this;
        _this.trigger = trigger;
        _this.pages = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakePagesVisible"), koPages(), trigger.pages);
        _this.questions = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakeQuestionsVisible"), koQuestions(), trigger.questions);
        return _this;
    }
    SurveyPropertyVisibleTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.pages = this.pages.koChoosen().map(function (o) { return o.name; });
        trigger.questions = this.questions.koChoosen().map(function (o) { return o.name; });
        return trigger;
    };
    return SurveyPropertyVisibleTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertySetValueTrigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertySetValueTrigger, _super);
    function SurveyPropertySetValueTrigger(trigger, koQuestions, triggerSurvey, options) {
        var _this = _super.call(this, trigger, options) || this;
        _this.trigger = trigger;
        _this.triggerSurvey = triggerSurvey;
        _this.koQuestions = koQuestions;
        _this.koSurvey = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](SurveyPropertySetValueTrigger.emptySurvey);
        _this.koHasSurvey = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.kosetToName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setToName);
        _this.kosetValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setValue);
        _this.koisVariable = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.isVariable);
        var self = _this;
        _this.kosetToName.subscribe(function (newValue) {
            if (!self.koisVariable()) {
                self.kosetValue(null);
            }
            self.buildSurvey();
        });
        _this.koisVariable.subscribe(function (newValue) {
            self.kosetToName("");
            self.kosetValue(null);
            self.buildSurvey();
        });
        _this.buildSurvey();
        return _this;
    }
    SurveyPropertySetValueTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.setToName = this.kosetToName();
        trigger.setValue = this.kosetValue();
        trigger.isVariable = this.koisVariable();
        return trigger;
    };
    Object.defineProperty(SurveyPropertySetValueTrigger.prototype, "setToNameOptions", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.conditionSelectQuestion");
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertySetValueTrigger.prototype.buildSurvey = function () {
        var question = !this.koisVariable() && !!this.kosetToName()
            ? this.triggerSurvey.getQuestionByName(this.kosetToName())
            : null;
        if (!question) {
            this.survey = null;
            this.koHasSurvey(false);
            this.koSurvey(SurveyPropertySetValueTrigger.emptySurvey);
            return;
        }
        var qJson = __WEBPACK_IMPORTED_MODULE_7__propertyDefaultValueEditor__["a" /* SurveyPropertyDefaultValueEditor */].createJsonFromQuestion(question);
        qJson.titleLocation = "top";
        qJson.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerSetValue");
        this.survey = __WEBPACK_IMPORTED_MODULE_7__propertyDefaultValueEditor__["a" /* SurveyPropertyDefaultValueEditor */].createSurveyFromJsonQuestion(qJson);
        this.survey.setValue("question", this.kosetValue());
        var self = this;
        this.survey.onValueChanged.add(function (sender, options) {
            self.kosetValue(options.value);
        });
        this.koSurvey(this.survey);
        this.koHasSurvey(true);
    };
    SurveyPropertySetValueTrigger.emptySurvey = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["Survey"]();
    return SurveyPropertySetValueTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertyCopyValueTrigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyCopyValueTrigger, _super);
    function SurveyPropertyCopyValueTrigger(trigger, koQuestions, options) {
        var _this = _super.call(this, trigger, options) || this;
        _this.trigger = trigger;
        _this.koQuestions = koQuestions;
        _this.kosetToName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger["setToName"]);
        _this.kofromName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger["fromName"]);
        return _this;
    }
    SurveyPropertyCopyValueTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger["setToName"] = this.kosetToName();
        trigger["fromName"] = this.kofromName();
        return trigger;
    };
    return SurveyPropertyCopyValueTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertyRunExpressionTrigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyRunExpressionTrigger, _super);
    function SurveyPropertyRunExpressionTrigger(trigger, koQuestions, options) {
        var _this = _super.call(this, trigger, options) || this;
        _this.trigger = trigger;
        _this.koQuestions = koQuestions;
        _this.kosetToName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger["setToName"]);
        _this.korunExpression = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger["runExpression"]);
        return _this;
    }
    SurveyPropertyRunExpressionTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger["setToName"] = this.kosetToName();
        trigger["runExpression"] = this.korunExpression();
        return trigger;
    };
    return SurveyPropertyRunExpressionTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertyTriggerObjects = /** @class */ (function () {
    function SurveyPropertyTriggerObjects(title, allObjects, choosenObjects) {
        var _this = this;
        this.title = title;
        this.koObjects = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koChoosen = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        this.koChoosenSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        this.deleteItem = function () {
            _this.changeItems(_this.koChoosenSelected(), _this.koChoosen, _this.koObjects);
        };
        this.addItem = function () {
            _this.changeItems(_this.koSelected(), _this.koObjects, _this.koChoosen);
        };
        allObjects.forEach(function (obj) {
            if (choosenObjects.indexOf(obj.name) !== -1) {
                _this.koChoosen.push(obj);
            }
            else {
                _this.koObjects.push(obj);
            }
        });
    }
    SurveyPropertyTriggerObjects.prototype.changeItems = function (item, removedFrom, addTo) {
        if (!item)
            return;
        removedFrom.remove(item);
        addTo.push(item);
        removedFrom.sort();
        addTo.sort();
    };
    return SurveyPropertyTriggerObjects;
}());

__WEBPACK_IMPORTED_MODULE_5__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("triggers", function (property) {
    return new SurveyPropertyTriggersEditor(property);
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectEditor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editorLocalization__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditorFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyValidatorsEditor; });
/* unused harmony export SurveyPropertyValidatorItem */







var SurveyPropertyValidatorsEditor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyValidatorsEditor, _super);
    function SurveyPropertyValidatorsEditor(property) {
        var _this = _super.call(this, property) || this;
        _this.availableValidators = [];
        _this.validatorClasses = [];
        var self = _this;
        _this.selectedObjectEditor = new __WEBPACK_IMPORTED_MODULE_4__objectEditor__["a" /* SurveyObjectEditor */]();
        _this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koSelected.subscribe(function (newValue) {
            self.selectedObjectEditor.selectedObject =
                newValue != null ? newValue.validator : null;
        });
        _this.validatorClasses = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveyvalidator", true);
        _this.availableValidators = _this.getAvailableValidators();
        _this.koValidators = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.getLocalizedValidators());
        _this.onDeleteClick = function () {
            self.koItems.remove(self.koSelected());
        };
        _this.onAddClick = function (item) {
            self.addItem(item.value);
        };
        return _this;
    }
    Object.defineProperty(SurveyPropertyValidatorsEditor.prototype, "editorType", {
        get: function () {
            return "validators";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyValidatorsEditor.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    SurveyPropertyValidatorsEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"]();
        var validator = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, validator);
        this.setItemProperties(validator);
        return new SurveyPropertyValidatorItem(validator);
    };
    SurveyPropertyValidatorsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var item = editorItem;
        delete item.validator["survey"];
        return item.validator;
    };
    SurveyPropertyValidatorsEditor.prototype.addItem = function (validatorType) {
        var newValidator = new SurveyPropertyValidatorItem(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.createClass(validatorType));
        this.setItemProperties(newValidator.validator);
        this.koItems.push(newValidator);
        this.koSelected(newValidator);
    };
    SurveyPropertyValidatorsEditor.prototype.setItemProperties = function (validator) {
        if (this.object) {
            validator["survey"] = this.object.survey;
        }
        validator.locOwner = this;
    };
    SurveyPropertyValidatorsEditor.prototype.getLocalizedValidators = function () {
        var res = [];
        for (var i = 0; i < this.availableValidators.length; i++) {
            var name = this.availableValidators[i];
            res.push({
                value: name,
                text: __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getValidatorName(name)
            });
        }
        return res;
    };
    SurveyPropertyValidatorsEditor.prototype.getAvailableValidators = function () {
        var res = [];
        for (var i = 0; i < this.validatorClasses.length; i++) {
            res.push(this.validatorClasses[i].name);
        }
        return res;
    };
    SurveyPropertyValidatorsEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        if (this.koSelected() == null)
            return;
        this.koSelected().validator[property.name] = newValue;
    };
    return SurveyPropertyValidatorsEditor;
}(__WEBPACK_IMPORTED_MODULE_3__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyValidatorItem = /** @class */ (function () {
    function SurveyPropertyValidatorItem(validator) {
        this.validator = validator;
        this.text = __WEBPACK_IMPORTED_MODULE_5__editorLocalization__["a" /* editorLocalization */].getValidatorName(validator.getType());
    }
    return SurveyPropertyValidatorItem;
}());

__WEBPACK_IMPORTED_MODULE_6__propertyEditorFactory__["a" /* SurveyPropertyEditorFactory */].registerEditor("validators", function (property) {
    return new SurveyPropertyValidatorsEditor(property);
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_scss__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__accordion_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccordionModel; });


var template = __webpack_require__(128);
var AccordionItemModel = /** @class */ (function () {
    function AccordionItemModel(data, template) {
        var _this = this;
        this.data = data;
        this.template = template;
        this.collapsed = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.toggle = function () { return _this.collapsed(!_this.collapsed()); };
        var self = this;
        data.onExpand = function () {
            self.collapsed(false);
        };
    }
    Object.defineProperty(AccordionItemModel.prototype, "title", {
        get: function () {
            return this.data.title;
        },
        enumerable: true,
        configurable: true
    });
    return AccordionItemModel;
}());

var AccordionModel = /** @class */ (function () {
    function AccordionModel(params) {
        this.tabs = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () {
            return __WEBPACK_IMPORTED_MODULE_0_knockout__["unwrap"](params.tabs)
                .map(function (tabData) { return new AccordionItemModel(tabData, __WEBPACK_IMPORTED_MODULE_0_knockout__["unwrap"](params.template)); });
        });
        !!this.tabs()[0] && this.tabs()[0].collapsed(false);
    }
    return AccordionModel;
}());

__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("svd-accordion", {
    viewModel: AccordionModel,
    template: template
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splitter_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splitter_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splitter_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitterComponentViewModel; });


var SplitterComponentViewModel = /** @class */ (function () {
    function SplitterComponentViewModel(params, componentInfo) {
        var splitterElement = componentInfo.element;
        var container = componentInfo.element.parentElement;
        var siblings = [];
        var minLeft = params.minLeft || 10;
        var minRight = params.minRight || 10;
        for (var i = 0; i < container.children.length; i++) {
            siblings.push(container.children[i]);
        }
        var splitterElementIndex = siblings.indexOf(splitterElement);
        var leftElement = siblings[splitterElementIndex - 1];
        var rightElement = siblings[splitterElementIndex + 1];
        var onresize = function () {
            splitterElement.style.left =
                siblings
                    .slice(0, splitterElementIndex)
                    .reduce(function (w, s) { return w + s.offsetWidth; }, 0) -
                    splitterElement.offsetWidth +
                    "px";
        };
        window.addEventListener("resize", onresize);
        onresize();
        var onmousemove = function (event) {
            var newLeft = leftElement.offsetWidth + event.movementX;
            var newRight = rightElement.offsetWidth - event.movementX;
            if (newLeft > minLeft && newRight > minRight) {
                splitterElement.style.left =
                    splitterElement.offsetLeft + event.movementX + "px";
                leftElement.style.width = (newLeft / container.offsetWidth) * 100 + "%";
                rightElement.style.width =
                    (newRight / container.offsetWidth) * 100 + "%";
            }
        };
        var onmouseup = function () {
            splitterElement.className = splitterElement.className.replace(/\ssvd-active-splitter/g, "");
            document.removeEventListener("mousemove", onmousemove);
            document.removeEventListener("mouseleave", onmouseup);
            document.removeEventListener("mouseup", onmouseup);
        };
        splitterElement.onmousedown = function () {
            splitterElement.className += " svd-active-splitter";
            document.addEventListener("mousemove", onmousemove);
            document.addEventListener("mouseleave", onmouseup);
            document.addEventListener("mouseup", onmouseup);
        };
    }
    return SplitterComponentViewModel;
}());

__WEBPACK_IMPORTED_MODULE_0_knockout__["components"].register("svd-splitter", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new SplitterComponentViewModel(params, componentInfo);
        }
    },
    template: '<div class="svd-splitter"></div>'
});


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"icon-actionaddtotoolbox\"><path d=\"M7.3 8H1v2h5.2c.2-.7.6-1.4 1.1-2zM10 6.2V5H1v2h7.3c.5-.3 1.1-.6 1.7-.8zM1 2h9v2H1zM11.5 7C9 7 7 9 7 11.5S9 16 11.5 16s4.5-2 4.5-4.5S14 7 11.5 7zm2.5 5h-2v2h-1v-2H9v-1h2V9h1v2h2v1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actionconvertto\"><path d=\"M3 10L0 7h6zM13 7l3 3h-6z\"></path><path d=\"M8 4c1.5 0 2.8.8 3.4 2h2.2c-.8-2.3-3-4-5.7-4C4.7 2 2 4.7 2 8h2c0-2.2 1.8-4 4-4zM11.9 9c-.4 1.7-2 3-3.9 3-1 0-1.9-.4-2.6-1H2.8c1 1.8 3 3 5.2 3 3 0 5.4-2.2 5.9-5h-2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actioncopy\"><path d=\"M2 6h9v9H2z\"></path><path d=\"M5 3v2h7v7h2V3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actiondelete\"><path d=\"M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm3 8l-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1-2 2 2 2z\"></path></symbol><symbol viewBox=\"0 0 32 32\" id=\"icon-actiondragelement\"><path d=\"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actioneditelement\"><path d=\"M1 15h4l-4-4zM7 5l-5 5 4 4 5-5zM14 6l-4-4-2 2 4 4zM9 14h5v1H9z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actionhidetitle\"><path d=\"M15.7 7.7c-.1-.1-1.5-1.7-3.4-3L15 2l-1-1-2.9 2.9C10.1 3.4 9 3 8 3 4.3 3 .4 7.5.3 7.7L0 8l.3.3c.1.1 1.5 1.7 3.4 3L1 14l1 1 2.9-2.9c1 .5 2.1.9 3.1.9 3.7 0 7.6-4.5 7.7-4.7L16 8l-.3-.3zM2 8c.8-.8 3.4-3 6-3 .6 0 .6 0 0 0-1.7 0-3 1.3-3 3 0 .6.2 1.1.4 1.6l-.6.6C3.5 9.4 2.5 8.5 2 8zm6 3c-.6 0-.6 0 0 0 1.7 0 3-1.3 3-3 0-.6-.2-1.1-.4-1.6l.6-.6c1.3.8 2.3 1.7 2.8 2.2-.8.8-3.4 3-6 3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actionisrequired\"><circle cx=\"7.5\" cy=\"13.5\" r=\"1.5\"></circle><path d=\"M8 10l1-9H6l1 9z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actionnotrequired\"><path d=\"M14 1L8.4 6.6 9 1H6l.8 7.2L1 14l1 1L15 2z\"></path><circle cx=\"7.5\" cy=\"13.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-actionshowtitle\"><path d=\"M15.7 7.7C15.6 7.5 11.7 3 8 3S.4 7.5.3 7.7L0 8l.3.3c.1.2 4 4.7 7.7 4.7s7.6-4.5 7.7-4.7L16 8l-.3-.3zM8 11c-2.6 0-5.2-2.2-6-3 .8-.8 3.4-3 6-3s5.2 2.2 6 3c-.8.8-3.4 3-6 3z\"></path><circle cx=\"8\" cy=\"8\" r=\"3\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-add\"><path d=\"M14 7h-4V3H7v4H3v3h4v4h3v-4h4z\"></path></symbol><symbol viewBox=\"0 0 10 10\" id=\"icon-arrow_down_10x10\"><path d=\"M2 2L0 4l5 5 5-5-2-2-3 3z\"></path></symbol><symbol viewBox=\"0 0 10 10\" id=\"icon-arrow_up_10x10\"><path d=\"M8 9l2-2-5-5-5 5 2 2 3-3z\"></path></symbol><symbol viewBox=\"0 0 34 34\" id=\"icon-arrowdown_34x34\"><style><![CDATA[.st0{fill:#fff}]]></style><path class=\"st0\" d=\"M12 16l2-2 3 3 3-3 2 2-5 5z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-cloud_24x24\"><style><![CDATA[.st0{fill:#1ab394}]]></style><path class=\"st0\" d=\"M75 6.5C75 4.6 73.4 3 71.5 3S68 4.6 68 6.5c0 1.4.8 2.6 2 3.2-.2 1-.7 1.8-1.7 2.3-.4.2-.9.4-1.3.6-.8.3-1.7.6-2.5.9-.2.1-.3.1-.5.2v-6c1.2-.6 2-1.8 2-3.2C66 2.6 64.4 1 62.5 1S59 2.6 59 4.5c0 1.4.8 2.6 2 3.2v9.7c-1.2.6-2 1.8-2 3.2 0 1.8 1.6 3.4 3.5 3.4s3.5-1.6 3.5-3.5c0-1.4-.8-2.6-2-3.2.1-.5.4-1 .9-1.2.3-.1.6-.3 1-.4 1.1-.4 2.1-.7 3.2-1.2 1.4-.6 2.5-1.5 3.1-2.9.2-.4.3-1.1.4-1.8C74 9.3 75 8.1 75 6.5zM62.5 3c.8 0 1.5.7 1.5 1.5S63.3 6 62.5 6 61 5.3 61 4.5 61.7 3 62.5 3zm0 19c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM70 6.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S72.3 8 71.5 8 70 7.3 70 6.5zM9 18l1 1 2-2v6h2v-6l2 2 1-1-4-4z\"></path><path class=\"st0\" d=\"M20.9 7.9c.1-.3.1-.6.1-.9 0-2.8-2.2-5-5-5-2.6 0-4.7 1.9-4.9 4.4C10.3 5.6 9.2 5 8 5 5.8 5 4 6.8 4 9v.2c-1.7.4-3 1.3-3 3.8 0 2.3 2.4 3 4 3h3l5-5 5 5c2.8 0 5-1.2 5-4 0-1.7-.8-3.1-2.1-4.1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-autocomplete\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M15 6H7v10h9v-1H8v-2h7v2h1V6h-1zm0 6H8v-2h7v2zm0-3H8V7h7v2zM3 10H1V4h2V3H0v8h3zM14 5h1V3H6v1h8zM5 1h1V0H3v1h1v11H3v1h3v-1H5z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-barrating\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M12.1 15l-4.6-2.4L2.9 15l.9-5.1L0 6.3l5.2-.7L7.5 1l2.3 4.6 5.2.7-3.8 3.6.9 5.1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-datepicker\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M3 7h2v2H3zM7 11h2v2H7zM3 11h2v2H3zM11 11h2v2h-2zM11 7h2v2h-2zM10 6H6v4h4V6zM9 9H7V7h2v2zM4 0h1v3H4zM11 0h1v3h-1z\"></path><path class=\"st0\" d=\"M13 2v2h-3V2H6v2H3V2H0v14h16V2h-3zm2 13H1V5h14v10z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-editor\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M1 3h2v5H2v1h4V8H5V3h2v1h1V1H0v3h1zM10 5h6v1h-6zM10 8h6v1h-6zM0 11h16v1H0zM0 14h16v1H0z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-microphone\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M11 3.4C11 2.1 9.9 1 8.6 1h-.2C7.1 1 6 2.1 6 3.4V5h5V3.4zM8.4 10h.3C9.9 10 11 8.9 11 7.6V6H6v1.6C6 8.9 7.1 10 8.4 10z\"></path><path class=\"st0\" d=\"M12 6v.9c0 2.2-1.6 4.1-3.5 4.1S5 9.1 5 6.9V6H4v1c0 2.5 1.8 4.6 4 4.9V14H6v1h5v-1H9v-2.1c2.2-.3 4-2.4 4-4.9V6h-1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-nouislider\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M0 10h16v2H0zM2 4v3l2 2 2-2V4zM10 4v3l2 2 2-2V4z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-signaturepad\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M0 0v15h16V0H0zm15 14H1V1h14v13z\"></path><path class=\"st0\" d=\"M2.6 10.2c.1.1.1.2.2.3-.2.3-.4.6-.7.8l.7.7c.2-.3.5-.6.7-.9h.1c.2.1.9.1 1.1.1 1.5-.1 2.3-.5 2.8-.8h.1l.6.3h.6c.7-.1 1.9-.8 2.5-1.2.2-.1.5-.3.5-.3v.2c0 .2 0 .3.1.5.1.3.3.4.6.5.2 0 .4 0 .5-.1.1-.3.8-1 1-1.3V8c-.1.1-.3.2-.4.4-.2.2-.5.4-.8.6l-.1.1v-.3c0-.2 0-.4-.1-.5-.1-.4-.5-.6-.9-.4-.1.1-.4.2-.6.4-.9.6-2 1.2-2.2 1.3-.1 0-.2.1-.4.1l.1-.1c.3-.3.7-.6.9-1 .2-.3.3-.6.3-.9 0-.4 0-.7-.2-1.1-.1-.3-.4-.6-.8-.7-.2-.1-.4-.1-.7 0-.2.1-.5.2-.7.4-.3.3-.5.6-.6 1-.1.2-.1.5-.1.7 0 .4 0 .7.1 1.1 0 .2.1.3.2.5-.6.3-1.5.7-2.8.6v-.1c0-.1.1-.3.2-.4.4-.7.7-1.4.9-2.1.2-.6.3-1.3.3-1.9V4.3c0-.3-.1-.6-.3-.8-.2-.4-.6-.6-1-.5-.3.1-.5.2-.7.4-.3.2-.6.5-.8.9-.2.5-.4 1-.6 1.6-.1.5-.2 1-.2 1.5s0 1 .1 1.4c.1.6.3 1 .5 1.4zm5-2.5c.1-.2.2-.5.4-.6.2-.2.4-.2.7-.2.1 0 .2.1.2.2.1.3.1.6-.1.8-.2.3-.4.6-.6.8-.2.2-.3.3-.5.4-.1-.1-.1-.2-.1-.4v-1zM3 6.7c.1-.6.3-1.3.6-1.8.1-.3.3-.5.5-.8.1 0 .2-.1.2-.1.1-.1.2 0 .3.1.1.1.1.3.1.4 0 .4.1.9 0 1.3 0 .8-.2 1.6-.5 2.3-.3.5-.5 1-.8 1.5-.1 0-.2-.1-.2-.2-.2-.6-.3-1.2-.3-1.8 0-.3.1-.6.1-.9z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-sortablejs\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M7 1h9v2H7zM9 6h7v2H9zM11 11h5v2h-5zM5 10l1 1c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9v-2C2.2 1.5 0 4 0 7c0 3.3 2.7 6 5.9 6H6l-1 1 1 1 3-3-3-3-1 1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-tagbox\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M15 11H0V5h15v6zM1 10h13V6H1v4z\"></path><path class=\"st0\" d=\"M2 7h4v2H2zM7 7h4v2H7z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-delete_24x24\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#1AB394\" d=\"M6 8l2-2 4 4 4-4 2 2-4 4 4 4-2 2-4-4-4 4-2-2 4-4-4-4z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-edit\"><g fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M19 4l-9 9 4 4 9-9-4-4zM8 15v4h4l-4-4zM1 17v2h4v-2H1z\"></path></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-boolean\"><path d=\"M0 16h10V6H0v10zm2-6l2 2 4-4 1 1-5 5-3-3 1-1z\"></path><path d=\"M5 1v4h1V2h8v8h-3v1h4V1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-checkbox\"><path d=\"M1 1v14h14V1H1zm6 10L4 8l1-1 2 2 4-4 1 1-5 5z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-comment\"><path d=\"M8 2C4.1 2 1 4.2 1 7c0 1.9 1.5 3.6 3.8 4.4C4.6 13.1 3 14 3 14s1.5-.2 2.7-.9c.4-.2.9-.8 1.3-1.2.3.1.6.1 1 .1 3.9 0 7-2.2 7-5s-3.1-5-7-5zM4 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-default\"><path d=\"M0 4h4V0H0v4zm6 0h4V0H6v4zm6-4v4h4V0h-4zM0 10h4V6H0v4zm6 0h4V6H6v4zm6 0h4V6h-4v4zM0 16h4v-4H0v4zm6 0h4v-4H6v4zm6 0h4v-4h-4v4z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-dropdown\"><path d=\"M1 1v6h14V1H1zm10 5L8 3l1-1 2 2 2-2 1 1-3 3zm-8 5h12V9H3v2zm0 4h12v-2H3v2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-expression\"><path d=\"M15 9l-4 4-2-2-1 1 3 3 5-5zM4 4v1h2v1H3v3h4V4H4zm2 4H4V7h2v1zM8 8h1v1H8z\"></path><path d=\"M1 1h13v7l1-1V0H0v12h6l1-1H1z\"></path><path d=\"M10 4h1v1h-1zM9 5h1v1H9zM11 5h1v1h-1zM11 3h1v1h-1zM9 3h1v1H9z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-file\"><path d=\"M9 0v5h5z\"></path><path d=\"M8 0H2v16h12V6H8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-html\"><path d=\"M4 4L0 8l4 4 1-1-3-3 3-3zM11 4l-1 1 3 3-3 3 1 1 4-4z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-imagepicker\"><style><![CDATA[.st0{fill:#3d4d5d}]]></style><path class=\"st0\" d=\"M15 14H0V1h15v13zM1 13h13V2H1v11z\"></path><path class=\"st0\" d=\"M2 3v9h11V3H2zm4 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 7l2-3 1 1 2-3 4 5H3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-matrix\"><path d=\"M4 1C2.3 1 1 2.3 1 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path><circle cx=\"4\" cy=\"4\" r=\"1\"></circle><path d=\"M12 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-matrixdropdown\"><path d=\"M4 1C2.3 1 1 2.3 1 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path><circle cx=\"4\" cy=\"4\" r=\"1\"></circle><path d=\"M12 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path><circle cx=\"4\" cy=\"12\" r=\"1\"></circle><path d=\"M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-matrixdynamic\"><path d=\"M3 1C1.3 1 0 2.3 0 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path><circle cx=\"3\" cy=\"4\" r=\"1\"></circle><path d=\"M11 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM3 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM8 15h2l-2-2zM9.03 11.99l4.03-4.03 1.98 1.98-4.03 4.03z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-multipletext\"><path d=\"M0 2v12h16V2H0zm5 9H2V9h3v2zm0-4H2V5h3v2zm9 4H7V9h7v2zm0-4H7V5h7v2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-panel_dynamic\"><path d=\"M2 8h10v1H2zM2 11h8l1-1H2zM9 16h2l-2-2zM14 9l-4 4 2 2 4-4zM3 3v2H2l2 2 2-2H5V3zM11 5V3H9v2H8l2 2 2-2z\"></path><path d=\"M1 1h12v7l1-1V0H0v14h7l1-1H1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-panel\"><path d=\"M0 0v16h16V0H0zm15 15H1V1h14v14z\"></path><path d=\"M2 12h12v2H2zM2 9h12v2H2zM11 8L8 5h2V2h2v3h2zM5 8L2 5h2V2h2v3h2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-paneldynamic\"><path d=\"M2 8h10v1H2zM2 11h8l1-1H2zM9 16h2l-2-2zM14 9l-4 4 2 2 4-4zM3 3v2H2l2 2 2-2H5V3zM11 5V3H9v2H8l2 2 2-2z\"></path><path d=\"M1 1h12v7l1-1V0H0v14h7l1-1H1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-radiogroup\"><path d=\"M3 1C1.3 1 0 2.3 0 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM8 3v2h8V3H8zm0 10h8v-2H8v2z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-rating\"><path d=\"M0 7h1l1-1v5h1V5H2L0 7zm5 5h5V4H5v8zm1-5h2V6H6V5h3v3H7v2h2v1H6V7zm6-2v1h2v1h-2v1h2v2h-2v1h3V5h-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-text\"><path d=\"M2 1v3h1V3h4v10H5v1h6v-1H9V3h4v1h1V1H2z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-fork_24x24\"><path opacity=\".9\" d=\"M-40-20c-1.2 0-2-.9-2-2v-2c0-1.1.9-2 2-2h.1c1.1 0 2 .9 2 2v2.1c-.1 1-1 1.9-2.1 1.9z\"></path><path opacity=\".5\" d=\"M-40-2c-1.2 0-2-.9-2-2v-2c0-1.1.9-2 2-2h.1c1.1 0 2 .9 2 2v2c-.1 1.1-1 2-2.1 2z\"></path><path opacity=\".2\" d=\"M-52-14c0-1.2.9-2 2-2h2.1c1.1 0 2 .9 2 2v.1c0 1.1-.9 2-2 2H-50c-1.1-.1-2-1-2-2.1z\"></path><path opacity=\".7\" d=\"M-34-14c0-1.2.9-2 2-2h2.1c1.1 0 2 .9 2 2v.1c0 1.1-.9 2-2 2H-32c-1.1-.1-2-1-2-2.1z\"></path><path opacity=\".1\" d=\"M-44.5-18.6c-.8.8-2.1.8-2.8.1l-1.2-1.2c-.8-.8-.8-2 0-2.8l.1-.1c.8-.8 2-.8 2.8 0l1.2 1.2c.7.8.7 2.1-.1 2.8z\"></path><path opacity=\".6\" d=\"M-31.5-5.5c-.8.8-2.1.8-2.8.1l-1.2-1.2c-.8-.8-.8-2 0-2.8l.1-.1c.8-.8 2-.8 2.8 0l1.2 1.2c.7.8.7 2-.1 2.8z\"></path><path opacity=\".3\" d=\"M-48.5-5.5c-.8-.8-.8-2.1-.1-2.8l1.2-1.2c.8-.8 2-.8 2.8 0l.1.1c.8.8.8 2 0 2.8l-1.2 1.2c-.7.7-2 .7-2.8-.1z\"></path><path opacity=\".8\" d=\"M-35.4-18.5c-.8-.8-.8-2.1-.1-2.8l1.2-1.2c.8-.8 2-.8 2.8 0l.1.1c.8.8.8 2 0 2.8l-1.2 1.2c-.8.7-2.1.7-2.8-.1z\"></path><path opacity=\".9\" fill=\"#9D9FA1\" d=\"M-22-13l2-2 4 4 9-9 2 2-11 11z\"></path><path d=\"M41-19h-1.2c-.2-.7-.4-1.3-.8-1.9l.8-.8c.4-.4.4-1 0-1.4l-.7-.7c-.4-.4-1-.4-1.4 0l-.8.8c-.6-.4-1.2-.6-1.9-.8V-25c0-.5-.5-1-1-1h-1c-.5 0-1 .5-1 1v1.2c-.7.2-1.3.4-1.9.8l-.8-.8c-.4-.4-1-.4-1.4 0l-.7.7c-.4.4-.4 1 0 1.4l.8.8c-.4.6-.6 1.2-.8 1.9H26c-.5 0-1 .5-1 1v1c0 .5.5 1 1 1h1.2c.2.7.4 1.3.8 1.9l-.8.8c-.4.4-.4 1 0 1.4l.7.7c.4.4 1 .4 1.4 0l.8-.8c.6.4 1.2.6 1.9.8v1.2c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-1.2c.7-.2 1.3-.4 1.9-.8l.8.8c.4.4 1 .4 1.4 0l.7-.7c.4-.4.4-1 0-1.4l-.8-.8c.4-.6.6-1.2.8-1.9H41c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1zm-7.5 5.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\"></path><path opacity=\".9\" fill=\"#9D9FA1\" d=\"M13-15v-3h-1.2c-.1-.4-.3-.8-.5-1.2l.9-.9-2.2-2-.9.9c-.4-.2-.8-.4-1.2-.5V-23H5v1.2c-.4.1-.8.3-1.2.5l-.8-.8L.8-20l.9.9c-.2.4-.4.8-.5 1.2H0v3h1.2c.1.4.3.8.5 1.2l-.9.7L3-10.8l.9-.9c.4.2.8.4 1.2.5v1.2h3v-1.2c.4-.1.8-.3 1.2-.5l.9.9 2.1-2.1-.9-.9c.2-.4.4-.8.5-1.2H13zm-6.5 1.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z\"></path><path opacity=\".6\" fill=\"#9D9FA1\" d=\"M23-9v-2h-1.1c-.1-.4-.2-.7-.4-1l.8-.8-1.4-1.4-.9.8c-.3-.2-.7-.3-1-.4V-15h-2v1.1c-.4.1-.7.2-1 .4l-.8-.8-1.4 1.4.8.8c-.2.3-.3.7-.4 1H13v2h1.1c.1.4.2.7.4 1l-.8.8 1.4 1.4.9-.7c.3.2.7.3 1 .4V-5h2v-1.1c.4-.1.7-.2 1-.4l.8.8 1.4-1.4-.8-.9c.2-.3.3-.7.4-1H23zm-5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path><path opacity=\".5\" fill=\"#9D9FA1\" d=\"M-69-7h3v5h-3z\"></path><path opacity=\".9\" fill=\"#9D9FA1\" d=\"M-69-23h3v5h-3z\"></path><path opacity=\".2\" fill=\"#9D9FA1\" d=\"M-72.993-13.993v3h-5v-3z\"></path><path opacity=\".7\" fill=\"#9D9FA1\" d=\"M-56.993-13.993v3h-5v-3z\"></path><path opacity=\".6\" fill=\"#9D9FA1\" d=\"M-64.615-7.549l2.121-2.12 3.536 3.535-2.122 2.121z\"></path><path opacity=\".1\" fill=\"#9D9FA1\" d=\"M-75.98-18.791l2.121-2.122 3.536 3.536-2.122 2.121z\"></path><path opacity=\".3\" fill=\"#9D9FA1\" d=\"M-72.505-9.669l2.121 2.121-3.535 3.536-2.122-2.121z\"></path><path opacity=\".8\" fill=\"#9D9FA1\" d=\"M-61.14-20.912l2.121 2.121-3.535 3.536-2.122-2.121z\"></path><path fill=\"#1AB394\" d=\"M21 6.5C21 4.6 19.4 3 17.5 3S14 4.6 14 6.5c0 1.4.8 2.6 2 3.2-.2 1-.7 1.8-1.7 2.3-.4.2-.9.4-1.3.6-.8.3-1.7.6-2.5.9-.2.1-.3.1-.5.2v-6c1.2-.6 2-1.8 2-3.2C12 2.6 10.4 1 8.5 1S5 2.6 5 4.5c0 1.4.8 2.6 2 3.2v9.7c-1.2.6-2 1.8-2 3.2C5 22.4 6.6 24 8.5 24s3.5-1.6 3.5-3.5c0-1.4-.8-2.6-2-3.2.1-.5.4-1 .9-1.2.3-.1.6-.3 1-.4 1.1-.4 2.1-.7 3.2-1.2 1.4-.6 2.5-1.5 3.1-2.9.2-.4.3-1.1.4-1.8C20 9.3 21 8.1 21 6.5zM8.5 3c.8 0 1.5.7 1.5 1.5S9.3 6 8.5 6 7 5.3 7 4.5 7.7 3 8.5 3zm0 19c-.8 0-1.5-.7-1.5-1.5S7.7 19 8.5 19s1.5.7 1.5 1.5S9.3 22 8.5 22zM16 6.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S18.3 8 17.5 8 16 7.3 16 6.5z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-gear\"><path d=\"M12 7V5H9.9c-.1-.4-.3-.7-.5-1l1.5-1.5-1.4-1.4L8 2.6c-.3-.2-.6-.4-1-.5V0H5v2.1c-.4.1-.7.3-1 .5L2.5 1.1 1.1 2.5 2.6 4c-.2.3-.4.6-.5 1H0v2h2.1c.1.4.2.7.4 1L1.1 9.5l1.4 1.4L4 9.4c.3.2.7.3 1 .4V12h2V9.9c.4-.1.7-.2 1-.4L9.5 11l1.4-1.4L9.4 8c.2-.3.3-.7.4-1H12zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-gearactive\"><path d=\"M12 7V5H9.9c-.1-.4-.3-.7-.5-1l1.5-1.5-1.4-1.4L8 2.6c-.3-.2-.6-.4-1-.5V0H5v2.1c-.4.1-.7.3-1 .5L2.5 1.1 1.1 2.5 2.6 4c-.2.3-.4.6-.5 1H0v2h2.1c.1.4.2.7.4 1L1.1 9.5l1.4 1.4L4 9.4c.3.2.7.3 1 .4V12h2V9.9c.4-.1.7-.2 1-.4L9.5 11l1.4-1.4L9.4 8c.2-.3.3-.7.4-1H12zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-inplacecheck\"><path d=\"M2 7l1-1 2 2 5-5 1 1-6 6z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-inplacedelete\"><path d=\"M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-inplacedraggable\"><path d=\"M0 4h7v7H0z\"></path><path d=\"M2 3h6v6h1V2H2z\"></path><path d=\"M4 1h6v6h1V0H4z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-inplaceedit\"><path d=\"M1 11h3L1 8zM6 3L2 7l3 3 4-4zM11 4L8 1 7 2l3 3zM7 10h5v1H7z\"></path></symbol><symbol viewBox=\"0 0 12 12\" id=\"icon-inplaceplus\"><path d=\"M11 5H7V1H5v4H1v2h4v4h2V7h4z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-left\"><path d=\"M11 12l-2 2-6-6 6-6 2 2-4 4z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-new_24x24\"><path fill=\"#1AB394\" d=\"M18 11h-5V6h-3v5H5v3h5v5h3v-5h5z\"></path></symbol><symbol viewBox=\"0 0 20 20\" id=\"icon-noncommercial\"><path d=\"M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM2 10c0-1.4.4-2.8 1.1-3.9l7.6 7.6c-.3.1-.6.2-.9.2-1.1 0-2.1-.4-3-1.1l-1 1.8c.2.2.5.5.9.7s.9.4 1.4.5c.3.1.6.1.9.2v1h2v-1.3c.5-.1.9-.3 1.2-.5l1.7 1.7c-1.1.7-2.5 1.1-3.9 1.1-4.4 0-8-3.6-8-8zm14.1 5.1l-2.4-2.4v-.3c0-.6-.1-1.2-.3-1.6s-.5-.7-.8-.9c-.3-.2-.7-.4-1.1-.5l-1.2-.3c-.1-.1-.2-.1-.4-.2L8.4 7.4c0-.3.2-.6.4-.8.3-.2.7-.3 1.3-.3.8 0 1.6.3 2.4 1l.9-1.8c-.5-.4-1-.7-1.6-.9-.3-.1-.6-.2-.9-.2V3H9v1.4c-.7.1-1.3.3-1.7.7-.2.2-.4.4-.5.7L4.9 3.9C6.3 2.7 8 2 10 2c4.4 0 8 3.6 8 8 0 2-.7 3.7-1.9 5.1z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"icon-right\"><path d=\"M5 4l2-2 6 6-6 6-2-2 4-4z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-modified\"><path opacity=\".9\" d=\"M14 11V8h-1.2c-.1-.4-.3-.8-.5-1.2l.9-.8L11 3.8l-.9.9c-.3-.2-.7-.4-1.1-.5V3H6v1.2c-.4.1-.8.3-1.2.5L4 3.8 1.8 6l.9.9c-.2.3-.4.7-.5 1.1H1v3h1.2c.1.4.3.8.5 1.2l-.9.8L4 15.2l.9-.9c.4.2.8.4 1.2.5V16h3v-1.2c.4-.1.8-.3 1.2-.5l.9.9 2.1-2.1-.9-.9c.2-.4.4-.8.5-1.2H14zm-6.5 1.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z\"></path><path opacity=\".6\" d=\"M24 17v-2h-1.1c-.1-.4-.2-.7-.4-1l.8-.8-1.4-1.4-.9.8c-.3-.2-.7-.3-1-.4V11h-2v1.1c-.4.1-.7.2-1 .4l-.8-.8-1.4 1.4.8.8c-.2.3-.3.7-.4 1H14v2h1.1c.1.4.2.7.4 1l-.8.8 1.4 1.4.8-.8c.3.2.7.3 1 .4V21h2v-1.1c.4-.1.7-.2 1-.4l.8.8 1.4-1.4-.7-.9c.2-.3.3-.7.4-1H24zm-5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-saved\"><path opacity=\".9\" d=\"M4 13l2-2 4 4 9-9 2 2-11 11z\"></path></symbol><symbol viewBox=\"0 0 24 24\" id=\"icon-saving\"><path opacity=\".5\" d=\"M10 17h3v5h-3z\"></path><path opacity=\".9\" d=\"M10 1h3v5h-3z\"></path><path opacity=\".2\" d=\"M6 10v3H1v-3z\"></path><path opacity=\".7\" d=\"M22 10v3h-5v-3z\"></path><path opacity=\".6\" d=\"M14.39 16.45l2.12-2.121 3.536 3.535-2.121 2.121z\"></path><path opacity=\".1\" d=\"M2.954 5.136l2.121-2.121L8.61 6.55 6.49 8.672z\"></path><path opacity=\".3\" d=\"M6.49 14.328l2.12 2.122-3.535 3.535-2.121-2.121z\"></path><path opacity=\".8\" d=\"M17.925 3.015l2.121 2.12-3.535 3.536-2.122-2.12z\"></path></symbol></svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"convert-action\">\n    <span class=\"svda_question_action\">\n        <!-- ko if: allowChangeType -->\n        <select onmousewheel=\"return false;\" class=\"svda_current_type svd-main-color svd-light-bg-color\" data-bind=\"foreach: availableTypes, event: { change: onConvertType }, attr: {title: title}\">\n            <option class=\"svd-light-bg-color\" data-bind=\"text: $data.name, value: $data.value, attr:{selected: $data.value === $parent.type ? 'selected': null}\"></option>\n        </select>\n        <!-- /ko -->\n        <!-- ko ifnot: allowChangeType -->\n        <span data-bind=\"text: text\" class=\"svda_current_type svd-main-color\"> </span>\n        <!-- /ko -->\n    </span>\n</script>\n\n<script type=\"text/html\" id=\"action-separator\">\n    <span class=\"svda_action_separator svd-dark-border-color\">\n    </span>\n</script>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container svd-light-bg-color\" data-bind=\"css: themeCss\">\n  <!-- ko ifnot: haveCommercialLicense -->\n  <div class=\"svd_commercial_container\">\n    <a\n      class=\"svd_commercial_text\"\n      href=\"https://surveyjs.io/Licenses#BuildSurvey\"\n      target=\"_blank\"\n    >\n      <span>\n        <svg-icon\n          class=\"svd-primary-icon\"\n          params=\"iconName: 'icon-noncommercial', size: 20\"\n        ></svg-icon>\n      </span>\n      <span class=\"svd_commercial_product svd-main-color\"\n        >SurveyJS Builder</span\n      >\n      <span class=\"svd_noncommercial_use svd-light-text-color\"\n        >for non-commercial use only</span\n      >\n    </a>\n  </div>\n  <!-- /ko  -->\n  <ul\n    class=\"navbar-default container-fluid nav nav-tabs editor-tabs svd-light-bg-color\"\n  >\n    <!-- ko foreach: tabs -->\n    <li\n      class=\"nav-item\"\n      data-bind=\"css: {active: $parent.koViewType() == name}\"\n    >\n      <a class=\"nav-link\" href=\"#\" data-bind=\"click: action, text: title\"></a>\n    </li>\n    <!-- /ko -->\n  </ul>\n  <div class=\"panel card svd_content svd-dark-bg-color\">\n    <!-- ko foreach: tabs -->\n    <div data-bind=\"visible: $parent.koViewType() == name\">\n      <!-- ko template: { name: template, data: data, afterRender: function(element, model) { $parent.onEditorTabRenderedCallback(name, element, model, $data); } } -->\n      <!-- /ko -->\n    </div>\n    <!-- /ko -->\n  </div>\n  <div\n    data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"\n  ></div>\n</div>\n";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\n    <div data-bind=\"visible: !hasAceEditor\">\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\n        <!-- ko foreach: koErrors -->\n        <div>\n            <span>Error: </span><span data-bind=\"text: text\"></span>\n        </div>\n        <!-- /ko  -->\n    </div>\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\n</script>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveys-manage\">\n    <div class=\"svd-manage\">\n        <div class=\"svd-manage-mask\" data-bind=\"visible: isLoading\"></div>\n        <div class=\"svd-manage-control svd-light-border-color\">\n            <select onmousewheel=\"return false;\" class=\"svd-manage-select\" data-bind=\"visible: !isEditMode(), options: surveys,\n                        optionsText: 'name',\n                        value: currentSurvey,\n                        optionsCaption: 'Choose survey to edit or start editing and survey will be saved automatically...'\"></select>\n            <input type=\"text\" class=\"svd-manage-name\" data-bind=\"visible: isEditMode, value: currentSurveyName, event: { keyup: nameEditorKeypress }\"\n            />\n        </div>\n        <div class=\"svd-manage-buttons\">\n            <span class=\"icon\" data-bind=\"visible: currentSurvey, click: edit, css: cssEdit, attr: { title: titleEdit }\"></span>\n            <span class=\"icon\" data-bind=\"visible: !isEditMode(), click: add, css: cssAdd, attr: { title: titleAdd }\"></span>\n            <span class=\"icon icon-delete\" title=\"Delete current survey\" data-bind=\"visible: !isEditMode() && !surveyId() && currentSurvey(), click:remove\"></span>\n        </div>\n    </div>\n</script>\n<script type=\"text/html\" id=\"attach-survey\">\n    <a target=\"_blank\" href=\"#\" data-bind=\"attr: { href: action, title: title }\">\n        <span class=\"icon\" data-bind=\"css: innerCss\"></span>\n        <span data-bind=\"text: title\"></span>\n    </a>\n</script>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\n    <table class=\"table svd_table-nowrap svd_properties_grid\">\n        <tbody data-bind=\"foreach: koProperties\">\n            <!-- ko template: { name: 'objecteditorproperty', afterRender: $parent.koAfterRender } -->\n            <!-- /ko -->\n        </tbody>\n    </table>\n</script>\n<script type=\"text/html\" id=\"objecteditorproperty\">\n    <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\n        <td width=\"50%\">\n            <span data-bind=\"text: displayName, attr: {title: title || displayName}\"></span>\n        </td>\n        <td class=\"svd-light-text-color form-group\" width=\"50%\">\n            <div data-bind=\"event: { keydown: $data.editor.keyDownHandler }\">\n                <!-- ko template: { name: 'propertyeditor-' + editorTypeTemplate, data: $data.editor } -->\n                <!-- /ko -->\n            </div>\n        </td>\n    </tr>\n</script>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"svd-page-selector-template\">\n  <div class=\"svd-page-selector svd_custom_select svd-light-bg-color svd-light-border-color\">\n      <select onmousewheel=\"return false;\" data-bind=\"options: pagesSelection, value: pageSelection, optionsText: getDisplayText\"></select>\n  </div>\n  <div tabindex=\"0\" class=\"svd-page-scroller-arrow\" data-bind=\"key2click, clickNoFocus: moveLeft, attr: {title: getLocString('ed.moveLeft')}\">\n      <span>\n          <svg-icon class=\"svd-secondary-icon\" params=\"iconName: 'icon-left'\"></svg-icon>\n      </span>\n  </div>\n\n  <div class=\"svd-pages\" data-bind=\"sortable: {foreach: editor.pages, options: sortableOptions}, event: {wheel: onWheel}\">\n      <div tabindex=\"0\" class=\"svd-page svd-light-border-color\" data-bind=\"key2click, css: $parent.getPageClass($data), clickNoFocus: $parent.onPageClick\">\n          <span class=\"svd-page-name\" data-bind=\"text: $parent.getDisplayText($data)\"></span>\n          <span class=\"svd-page-actions-container\">\n              <svg-icon data-bind=\"css: $parent.getPageMenuIconClass($data)\" params=\"iconName: $parent.getPageMenuIconClass($data), size: 12\"></svg-icon>\n              <div style=\"position: static\">\n                  <div class=\"svd-page-actions svd-dark-border-color svd-light-bg-color\" data-bind=\"visible: $parent.showActions($data)\">\n                      <span class=\"svd-page-action\" data-bind=\"click: function(model, event) {$parent.showPageSettings($data); event.stopPropagation();}, attr: {title: $parent.getLocString('ed.editPage')}\">\n                          <span>\n                              <svg-icon class=\"svd-primary-icon\" params=\"iconName: 'icon-actioneditelement'\"></svg-icon>\n                          </span>\n                          <span class=\"svd-main-color\" data-bind=\"text: $parent.getLocString('ed.edit')\"></span>\n                      </span>\n                      <span class=\"svd-page-action\" data-bind=\"click: function(model, event) {$parent.deletePage($data); event.stopPropagation();}, attr: {title: $parent.getLocString('ed.deletePage')}, visible: !$parent.isLastPage()\">\n                          <svg-icon class=\"svd-primary-icon\" params=\"iconName: 'icon-actiondelete'\"></svg-icon>\n                      </span>\n                      <span class=\"svda_action_separator svd-dark-border-color\" data-bind=\"visible: !$parent.isLastPage()\"></span>\n                      <span class=\"svd-page-action\" data-bind=\"click: function(model, event) {$parent.copyPage($data); event.stopPropagation();}, attr: {title: $parent.getLocString('survey.Copy')}\">\n                          <svg-icon class=\"svd-primary-icon\" params=\"iconName: 'icon-actioncopy'\"></svg-icon>\n                      </span>\n                  </div>\n              </div>\n          </span>\n      </div>\n  </div>\n  <div tabindex=\"0\" class=\"svd-page-scroller-arrow\" data-bind=\"key2click, clickNoFocus: moveRight, attr: {title: getLocString('ed.moveRight')}\">\n      <span>\n          <svg-icon class=\"svd-secondary-icon\" params=\"iconName: 'icon-right'\"></svg-icon>\n      </span>\n  </div>\n  <div tabindex=\"0\" class=\"svd-page-add\" data-bind=\"key2click, clickNoFocus: addPage, attr: {title: getLocString('ed.addNewPage')}\">\n      <span>\n          <svg-icon class=\"svd-secondary-icon\" params=\"iconName: 'icon-add'\"></svg-icon>\n      </span>\n  </div>\n</script>\n";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\n    <div class=\"sjs-cb-wrapper\">\n        <label>\n            <div class=\"sjs-cb-container\">\n                <input class=\"svd_editor_control\" type=\"checkbox\" data-bind=\"checked: koValue, disable: $data.readOnly\">\n                <span class=\"checkmark\" data-bind=\"css: { 'svd-main-background-color': koValue, 'svd-light-background-color': !koValue() }\"></span>\n                <!-- ko if: $data.isDiplayNameVisible -->\n                <span class=\"sjs-cb-label\" data-bind=\"text: $data.displayName\"></span>\n                <!-- /ko -->\n            </div>\n        </label>\n    </div>\n</script>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-cells\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-cells\">\n    <div class=\"panel card\">\n        <div data-bind=\"visible:!koCanEdit(), text: $root.getLocString('pe.cellsEmptyRowsColumns')\"></div>\n        <div  data-bind=\"visible: koCanEdit\" style=\"overflow:auto\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <!-- ko foreach: koColumns -->\n                        <th>\n                            <span data-bind=\"text:$data\"></span>\n                        </th>\n                        <!-- /ko -->\n                    </tr>\n                </thead>\n                <tbody>\n                    <!-- ko foreach: koRows  -->\n                    <tr>\n                        <td>\n                        <span data-bind=\"text:rowText\"></span>\n                        </td>\n                        <!-- ko foreach: koCells -->\n                        <td style=\"min-width:120px\" class=\"form-group\">\n                            <textarea rows=\"2\" cols=\"25\" class=\"form-control\" data-bind=\"textInput:text\"></textarea>\n                        </td>\n                        <!-- /ko -->\n                    </tr>\n                    <!-- /ko -->\n                </tbody>\n            </table>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-condition\">\n  <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n  <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-condition\">\n  <div class=\"propertyeditor-condition\">\n      <div class=\"form-inline form-group\">\n          <div class=\"form-control svd_custom_select\">\n              <select onmousewheel=\"return false;\" style=\"max-width:200px\" data-bind=\"value: koAddConditionQuestion\">\n                <option data-bind=\"text: addConditionQuestionOptions, attr: {title: addConditionQuestionOptions}\" ></option>\n                <!-- ko foreach: koAddConditionQuestions -->\n                <option data-bind=\"value: name, text: (text || '').substring(0, 80), attr: {title: text}\" ></option>\n                <!-- /ko -->\n              </select>\n          </div>\n          <div class=\"form-control svd_custom_select\">\n              <select onmousewheel=\"return false;\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koAddConditionOperator\"></select>\n          </div>\n          <input class=\"form-control\" type=\"text\" data-bind=\"textInput:koAddConditionValue, enable: koAddContionValueEnabled\" style=\"width:120px\"\n          />\n          <input type=\"button\" class=\"form-control btn btn-primary\" data-bind=\"enable: koCanAddCondition, click: onConditionAddClick, value: koAddConditionButtonText\"\n          />\n          <div class=\"svd_wrap_elements\" data-bind=\"visible:koHasValueSurvey\">\n              <survey-widget params=\"survey: koValueSurvey\"></survey-widget>\n          </div>\n      </div>\n      <!-- ko if: $parent.hasAceEditor -->\n      <span data-bind=\"text:$data.getLocString('pe.aceEditorHelp')\"></span>\n      <div id=\"expression-ace-editor\" style=\"height: 200px; width: 100%;\" data-bind=\"value:koValue, aceEditor:{questions: $parent.availableQuestions, question: $data.editingObject, editor: $parent}\"></div>\n      <!-- /ko -->\n\n      <!-- ko if: !$parent.hasAceEditor -->\n      <textarea class=\"svd-dark-border-color\" data-bind=\"value:koTextValue\" rows=\"4\" autofocus=\"autofocus\"></textarea>\n      <!-- /ko -->\n\n      <!-- <div class=\"assistant\">\n          <div class=\"assistant-title\" data-bind=\"text:$data.getLocString('pe.assistantTitle')\"></div>\n          <div class=\"assistant-content\" data-bind=\"foreach:availableQuestions\">\n              <div class=\"assistant-item\" data-bind=\" text:name, click:function () { $parent.insertQuestion($data, $element); } \"></div>\n          </div>\n      </div> -->\n      <!-- ko if: showHelpText -->\n      <span data-bind=\"text:$data.getLocString('pe.conditionHelp')\" style=\"white-space:normal \"></span>\n      <div data-bind=\"visible: $data.hasLocString('pe.conditionShowMoreUrl')\">\n          <a data-bind=\"attr: { href: $data.getLocString('pe.conditionShowMoreUrl')}, text:$data.getLocString('pe.showMore')\" target=\"_blank\"></a>\n      </div>\n      <!-- /ko -->\n  </div>\n</script>\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-custom\">\n    <!-- ko template: { name: \"propertyeditor-customcontent\", data: $data, afterRender: $data.koAfterRender } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditor-customcontent\"><div></div></script>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-value\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-value\">\n    <form>\n        <div class=\"svd_wrap_elements\">\n            <survey-widget params=\"survey: koSurvey\"></survey-widget>\n        </div>\n    </form>\n</script>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\n    <div class=\"svd_custom_select svd_property_editor_dropdown\">\n        <select onmousewheel=\"return false;\" class=\"form-control svd_editor_control\" data-bind=\"value: koValue, disable: readOnly, options: koChoices,  optionsValue: 'value',  optionsText: 'text', hasFocus: koHasFocus\"  style=\"width:100%\"></select>\n    </div>\n</script>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-error\">\n    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koDisplayError\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Error:</span>\n        <span data-bind=\"text:koErrorText\"></span>\n    </div>\n</script>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\n    <div class=\"propertyeditor-expression\">\n        <!-- ko if: $parent.hasAceEditor -->\n        <span data-bind=\"text:$root.getLocString('pe.aceEditorHelp')\"></span>\n        <div id=\"expression-ace-editor\" style=\"height: 400px; width: 100%;\" data-bind=\"value:koValue, aceEditor: {questions: $parent.availableQuestions, question: $data.editingObject, editor: $parent}\"></div>\n        <!-- /ko -->\n\n        <!-- ko if: !$parent.hasAceEditor -->\n        <textarea class=\"svd-dark-border-color\" data-bind=\"value:koTextValue\" rows=\"4\" autofocus=\"autofocus\"></textarea>\n        <!-- /ko -->\n        <!-- <div class=\"assistant\">\n            <div class=\"assistant-title\" data-bind=\"text:$root.getLocString('pe.assistantTitle')\"></div>\n            <div class=\"assistant-content\" data-bind=\"foreach:availableQuestions\">\n                <div class=\"assistant-item\" data-bind=\"text:name, click:function () { $parent.insertQuestion($data, $element); } \"></div>\n            </div>\n        </div> -->\n        <!-- ko if: showHelpText -->        \n            <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\n            <!-- <div>\n                <a data-bind=\"text:$root.getLocString('pe.showMore')\" target=\"_blank\" href=\"https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf\"></a>\n            </div> -->\n        <!-- /ko -->\n    </div>\n</script>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\n  <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\n  <textarea class=\"form-control\" data-bind=\"value:koValue, disable: readOnly\" style=\"width:100%;height:auto\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\n    <!-- ko template: { name: 'propertyeditor-modal' } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-itemvalues\">\n    <div style=\"margin-bottom:3px\" data-bind=\"visible: koIsList() && koShowTextView()\">\n        <button class=\"btn btn-sm btn-xs\" data-bind=\"css: {'btn-primary': koActiveView() === 'form', 'btn-link': koActiveView() !== 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\n        <button class=\"btn btn-sm btn-xs\" data-bind=\"css: {'btn-primary': koActiveView() !== 'form', 'btn-link': koActiveView() === 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\n    </div>\n    <div data-bind=\"visible: koActiveView() == 'form'\">\n        <!-- ko template: { name: 'propertyeditorcontent-nesteditems', data: $data } -->\n        <!-- /ko -->\n    </div>\n    <div data-bind=\"visible:koIsList() && koActiveView() != 'form'\">\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditorcontent-nesteditems', data: $data } -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\n    <div class=\"input-group form-group\" data-bind=\"visible:!$data.isEditable\">\n        <a tabindex=\"0\" class=\"form-control\" data-bind=\"key2click, click: $data.onShowModal, attr: {'data-target' : modalNameTarget}\">\n            <span data-bind=\"text: koText\"></span>\n        </a>\n        <div class=\"input-group-addon\">\n            <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-bind=\"click: $data.onShowModal, attr: {'data-target' : modalNameTarget}, text: $root.getLocString('pe.edit')\"></span>\n        </div>\n    </div>\n    <div class=\"input-group form-group\" data-bind=\"visible:$data.isEditable\">\n        <input class=\"form-control svd_editor_control\" type=\"text\" data-bind=\"value: koValue\" />\n        <div class=\"input-group-addon\">\n            <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-bind=\"click: $data.onShowModal, attr: {'data-target' : modalNameTarget}, text: $root.getLocString('pe.edit')\"></span>\n        </div>\n    </div>\n\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-bind=\"click: onResetClick\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:$data.koTitleCaption\"></h4>\n                </div>\n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: {name: 'propertyeditor-error', data: $data} -->\n                    <!-- /ko -->\n                    <!-- ko template: { name: 'propertyeditor-modalcontent', data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"visible: $data.koShowApplyButton, click: $data.onApplyClick, value: $root.getLocString('pe.apply')\"\n                        style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default btn-secondary\" data-bind=\"click: $data.onOkClick, value: $root.getLocString('pe.ok')\"\n                        style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: $data.onResetClick, value: $root.getLocString('pe.cancel')\"\n                        style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modalcontent\">\n    <div data-bind=\"html: $data.koHtmlTop\"></div>\n    <!-- ko template: { name: 'propertyeditorcontent-' + editorTypeTemplate, data: $data, afterRender: $data.koAfterRender } -->\n    <!-- /ko -->\n    <div data-bind=\"html: $data.koHtmlBottom\"></div>\n</script>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-multiplevalues\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-multiplevalues\">\n    <div style=\"max-height:300px; overflow-y:scroll;\">\n        <!-- ko foreach: { data: koItems, as: 'item'}  -->\n        <div class=\"sjs-cb-wrapper\" data-bind=\"style:{display: 'inline-block'\">\n            <label>\n                <div class=\"sjs-cb-container\">\n                    <input type=\"checkbox\" data-bind=\"attr: {value: item.value}, checked: $parent.koEditingValue\" />\n                    <span class=\"checkmark\" data-bind=\"css: $parent.getBackgroundCls(item.value)\">\n                        <span class=\"check\"></span>\n                    </span>\n                    <span class=\"sjs-cb-label\" style=\"position: static;\" data-bind=\"text: item.text\"></span>\n                </div>\n            </label>\n        </div>\n        <!-- /ko -->\n    </div>\n</script>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditorcontent-nested\">\n    <div style=\"padding-left: 10px;\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" data-bind=\"click: onCancelEditItemClick\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span>\n        </button>\n        <span data-bind=\"text: koEditorName\"></span>\n      <!-- ko template: { name: \"questioneditor-content\", data: koEditItem().itemEditor } -->\n      <!-- /ko -->\n  </div>\n</script>\n";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditorcontent-nesteditems\">\n    <div data-bind=\"visible: koIsList\"  style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\n        <table class=\"svd_items_table\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <!-- ko foreach: columns -->\n                    <th data-bind=\"text: text\"></th>\n                    <!-- /ko -->\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody data-bind=\"sortable: { foreach: koItems, options: { handle: '.svd-drag-handle', animation: 150 } }\">\n                <tr>\n                    <td class=\"svd-itemvalue-actions-container\">\n                        <div class=\"svd-drag-handle svd-itemvalue-action\">\n                            ☰\n                        </div>\n                        <button type=\"button\" class=\"btn btn-default btn-secondary svd-textitems-edit svd-itemvalue-action\" data-bind=\"click: $parent.onEditItemClick\">\n                            <span class=\"glyphicon glyphicon-edit\" data-bind=\"text: $root.getLocString('pe.edit')\"></span>\n                        </button>\n                    </td>\n                    <!-- ko foreach: cells -->\n                    <td class=\"form-group\">\n                        <!-- ko template: { name: 'propertyeditor', data: objectProperty.editor } -->\n                        <!-- /ko -->\n                    </td>\n                    <!-- /ko -->\n                    <td class=\"svd-textitems-column\">\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" data-bind=\"visible: $parent.koAllowAddRemoveItems, click: $parent.onDeleteClick\">\n                            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div class=\"svd-items-control-footer\" data-bind=\"visible: koAllowAddRemoveItems\">\n            <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\n            <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n        </div>\n    </div>\n    <!-- ko if: !koIsList() -->\n    <!-- ko template: { name: \"propertyeditorcontent-nested\", data: $data } -->\n    <!-- /ko -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\n    <input class=\"form-control svd_editor_control\" type=\"number\" data-bind=\"value: koValue, disable: readOnly\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\n  <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n  <!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\n  <form>\n      <div class=\"form-group\" data-bind=\"foreach: koItems\">\n          <div class=\"form-group\">\n              <label data-bind=\"attr: {for: name}, text: $root.getLocString('pe.'+name)\"></label>\n              <input type=\"text\" data-bind=\"attr: {id: name}, value:koValue\" class=\"form-control\"></input>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"titleName\">\n              <span data-bind=\"text:$root.getLocString('pe.testService')\"></span>\n          </label>\n          <div class=\"form-control svd_custom_select\" style=\"display: block;\">\n              <select onmousewheel=\"return false;\" data-bind=\"options: question.visibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\n          </div>\n      </div>\n  </form>\n</script>\n";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\n    <input class=\"form-control svd_editor_control\" type=\"text\" data-bind=\"value: koValue, disable: readOnly, attr: {placeholder: defaultValue}\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\n  <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\n  <textarea class=\"form-control\" data-bind=\"value:koValue, disable: readOnly, attr: {rows: isDiplayNameVisible ? '2' : '5'}\" style=\"width:100%;height:auto\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\n    <!-- ko template: { name: 'propertyeditorcontent-nesteditems', data: $data } -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\n    <div class=\"propertyeditor-triggers\">\n        <div class=\"input-group form-group\">\n            <div class=\"input-group-addon first-addon\" data-bind=\"visible: koAllowAddRemoveItems\">\n                <div class=\"ddmenu-container\">\n                    <div style=\"-webkit-tap-highlight-color:rgba(0,0,0,0)\" data-bind=\"trueclick\"></div>\n\n                    <div class=\"ddmenu\">\n                        <span tabindex=\"0\" data-bind=\"attr: { title: $root.getLocString('pe.addNew') }\">\n                            <span class=\"glyphicon glyphicon-plus svd-main-color\"></span>\n                        </span>\n                        <div tabindex=\"0\" data-bind=\"trueclick\"></div>\n                        <ul class=\"svd-light-bg-color\">\n                            <!-- ko foreach: koTriggers -->\n                            <li>\n                                <a data-bind=\"click: $parent.onAddClick, text:$data.text\"></a>\n                            </li>\n                            <!-- /ko  -->\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-control svd_custom_select\">\n                <select onmousewheel=\"return false;\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\n            </div>\n            <span data-bind=\"visible: koAllowAddRemoveItems, attr: { title: $root.getLocString('pe.delete') }, enable: koSelected() != null, click: onDeleteClick\"\n                class=\"input-group-addon btn-danger\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n            </span>\n        </div>\n        <div data-bind=\"visible: koSelected() == null\">\n            <div data-bind=\"visible: koQuestionNames().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\n            <div data-bind=\"visible: koQuestionNames().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\n        </div>\n        <div data-bind=\"visible: koSelected() != null\">\n            <div data-bind=\"with: koSelected\">\n                <!-- ko if: conditionEditor != null -->\n                    <!-- ko template: { name: 'propertyeditorcontent-condition', data: conditionEditor } -->\n                    <!-- /ko -->\n                <!-- /ko -->\n                <!-- ko if: conditionEditor == null -->\n                <div class=\"form-inline form-group\">\n                    <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\n                    <div class=\"form-control svd_custom_select\">\n                        <select onmousewheel=\"return false;\" data-bind=\"options:$parent.koQuestionNames, value: koName\"></select>\n                    </div>\n                    <div class=\"form-control svd_custom_select\">\n                        <select onmousewheel=\"return false;\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\n                    </div>\n                    <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\n                </div>\n                <!-- /ko -->\n                <!-- ko if: koType() == 'visibletrigger' -->\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\n                        <!-- /ko -->\n                    </div>\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\n                        <!-- /ko -->\n                    </div>\n                </div>\n                <!-- /ko -->\n                <!-- ko if: koType() == 'completetrigger' -->\n                <div class=\"row\">\n                    <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\n                </div>\n                <!-- /ko -->\n                <!-- ko if: koType() == 'setvaluetrigger' -->\n                <div class=\"row col-lg-12 col-sm-12\">\n                    <div data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName, visible: koisVariable\" />\n                            <div class=\"form-control svd_custom_select\" data-bind=\"visible: !koisVariable()\">\n                                <select onmousewheel=\"return false;\" data-bind=\"options:koQuestions, value: kosetToName, optionsText: 'text', optionsValue: 'name', optionsCaption: setToNameOptions\"></select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <!-- ko template: { name: \"propertyeditor-boolean\", data: { koValue: koisVariable, displayName: $root.getLocString('pe.triggerIsVariable'), isDiplayNameVisible: true } } -->\n                        <!-- /ko -->\n                    </div>\n                    <div class=\"col-lg-12 col-sm-12\">\n                        <div class=\"form-group\" data-bind=\"visible:koisVariable\">\n                            <div data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></div>\n                            <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\n                        </div>\n                        <div class=\"form-group\" data-bind=\"visible:koHasSurvey\">\n                            <survey-widget params=\"survey: koSurvey\"></survey-widget>\n                        </div>\n                    </div>\n                </div>\n                <!-- /ko -->\n                <!-- ko if: koType() == 'copyvaluetrigger' -->\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <div class=\"form-group\">\n                            <div data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></div>\n                            <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-sm-6\">\n                        <div class=\"form-group\">\n                            <div data-bind=\"text: $root.getLocString('pe.triggerFromName')\"></div>\n                            <input class=\"form-control\" type=\"text\" data-bind=\"value:kofromName\" />\n                        </div>\n                    </div>\n                </div>\n                <!-- /ko -->\n                <!-- ko if: koType() == 'runexpressiontrigger' -->\n                <div class=\"row\">\n                    <div class=\"form-group col-lg-12 col-sm-12\">\n                        <div data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                        <div data-bind=\"text: $root.getLocString('pe.triggerRunExpression')\"></div>\n                        <textarea class=\"form-control\" type=\"text\" data-bind=\"value:korunExpression\" rows=\"3\"></textarea>\n                    </div>\n                </div>\n                <!-- /ko -->\n            </div>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\n  <div>\n      <div class=\"form-group\" data-bind=\"text: title\"></div>\n      <div class=\"form-group input-group\">\n          <select onmousewheel=\"return false;\" class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected, optionsText: 'text'\"></select>\n          <span class=\"input-group-addon btn-danger\" data-bind=\"click: deleteItem\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n          </span>\n      </div>\n      <div class=\"form-group input-group\">\n          <div class=\"form-control svd_custom_select\">\n              <select onmousewheel=\"return false;\" data-bind=\"options:koObjects, value: koSelected, optionsText: 'text'\"></select>\n          </div>\n          <span class=\"input-group-addon btn-default\" data-bind=\"click: addItem\">\n              <span class=\"glyphicon glyphicon-plus svd-main-color\"></span>\n          </span>\n      </div>\n  </div>\n</script>\n";

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } -->\n    <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\n    <div class=\"propertyeditor-validators\">\n        <div class=\"input-group form-group\">\n            <div class=\"input-group-addon first-addon\" data-bind=\"visible: koAllowAddRemoveItems\">\n                <div class=\"ddmenu-container\">\n                    <div style=\"-webkit-tap-highlight-color:rgba(0,0,0,0)\" data-bind=\"trueclick\"></div>\n\n                    <div class=\"ddmenu\">\n                        <span tabindex=\"0\">\n                            <span class=\"glyphicon glyphicon-plus svd-main-color\"></span>\n                        </span>\n\n                        <div tabindex=\"0\" data-bind=\"trueclick\"></div>\n                        <ul class=\"svd-light-bg-color\">\n                            <!-- ko foreach: koValidators -->\n                            <li>\n                                <a href=\"#\" data-bind=\"click: $parent.onAddClick\">\n                                    <span data-bind=\"text:$data.text\"></span>\n                                </a>\n                            </li>\n                            <!-- /ko  -->\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-control svd_custom_select\">\n                <select onmousewheel=\"return false;\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\n            </div>\n            <span class=\"input-group-addon btn-danger\" data-bind=\"visible: koAllowAddRemoveItems, enable: koSelected() != null, click: onDeleteClick\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n            </span>\n        </div>\n        <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n    </div>\n</script>";

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor\">\n    <label data-bind=\"text:displayName, visible: showDisplayNameOnTop\"></label>\n    <!-- ko template: {name: 'propertyeditor-error', data: $data} -->\n    <!-- /ko -->\n    <!-- ko template: {name: $data.contentTemplateName, data: $data} -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\n    <!-- ko if: $data.useTabsInElementEditor -->\n    <ul class=\"nav nav-tabs modal-tabs\" data-bind=\"foreach: koTabs\">\n        <li class=\"nav-item\" role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\">\n            <a class=\"nav-link\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}\">\n                <span data-bind=\"text:$data.title\"></span>\n            </a>\n        </li>\n    </ul>\n    <!-- ko foreach: koTabs -->\n    <div data-bind=\"if: $parent.koActiveTab() === $data.name\" style=\"margin-top:5px\">\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject, afterRender: $data.koAfterRender } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko  -->\n    <!-- /ko  -->\n    <!-- ko ifnot: $data.useTabsInElementEditor -->\n    <svd-accordion params=\"tabs: koTabs, template: 'svd-editor-tab-template'\"></svd-accordion>\n    <!-- /ko  -->\n</script>\n\n<script type=\"text/html\" id=\"svd-editor-tab-template\">\n    <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject, afterRender: $data.koAfterRender } -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\n    <div id=\"surveyquestioneditorwindow\" class=\"modal\" data-bind=\"with:koEditor\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-bind=\"click: onResetClick\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\n                </div>\n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"visible: koShowApplyButton, click: onApplyClick, value: $root.getLocString('pe.apply')\"\n                        style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default btn-secondary\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\"\n                        style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\"\n                    />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab\">\n  <div class=\"row\" data-bind=\"css: 'svd-popup-editor-tab-' + name\">\n      <div class=\"col-sm-12\">\n          <!-- ko foreach: properties.rows -->\n          <div class=\"form-group\">\n              <!-- ko foreach: properties -->\n                  <div data-bind=\"event: { keydown: objectProperty.editor.keyDownHandler }\">\n                  <!-- ko template: { name: 'propertyeditor', data: objectProperty.editor } --><!-- /ko -->\n                  </div>\n              <!-- /ko  -->\n          </div>\n          <!-- /ko  -->\n      </div>\n  </div>\n</script>\n";

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\n    <div class=\"row\">\n        <div class=\"form-control svd_custom_select svd_embed_tab\">\n            <select onmousewheel=\"return false;\" data-bind=\"value:koLibraryVersion\">\n                <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\n                <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\n                <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\n                <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\n                <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\n            </select>\n        </div>\n        <div class=\"form-control svd_custom_select svd_embed_tab\">\n            <select onmousewheel=\"return false;\" data-bind=\"value:koScriptUsing\">\n                <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\n                <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\n            </select>\n        </div>\n        <div class=\"form-control svd_custom_select svd_embed_tab\">\n            <select onmousewheel=\"return false;\" data-bind=\"value:koShowAsWindow\">\n                <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\n                <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\n            </select>\n        </div>\n        <label class=\"checkbox-inline form-check-label\" data-bind=\"visible:koHasIds\">\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\n        </label>\n    </div>\n    <div class=\"panel card\">\n        <div class=\"panel-heading card-header\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel card\" data-bind=\"visible: koVisibleHtml\">\n        <div class=\"panel-heading card-header\" data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel card\">\n        <div class=\"panel-heading card-header\" data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveylive\">\n  <div data-bind=\"visible: koIsRunning()\">\n      <span data-bind=\"visible: koPages().length > 1\">\n          <label  for=\"testSurveyPageChanged\" data-bind=\"text: selectPageText\"></label>\n          <span id=\"testSurveyPageChanged\">\n              <select onmousewheel=\"return false;\" class=\"form-control\" data-bind=\"options: koPages, optionsText: 'title', optionsValue: 'page', value: koActivePage, optionsAfterRender: setPageDisable\"></select>\n          </span>\n      </span>\n       <span>\n          <label  for=\"testSurveyLocale\" data-bind=\"text: localeText\"></label>\n          <span id=\"testSurveyLocale\">\n              <select onmousewheel=\"return false;\" class=\"form-control\" data-bind=\"options: koLanguages, value: koActiveLanguage, optionsText:'text', optionsValue: 'value'\"></select>\n          </span>\n      </span>\n      <label>\n          <div class=\"sjs-cb-container\">\n              <input class=\"svd_editor_control\" type=\"checkbox\" data-bind=\"checked: survey.showInvisibleElements\">\n              <span class=\"checkmark\" data-bind=\"css: { 'svd-main-background-color': survey.showInvisibleElements, 'svd-light-background-color': !survey.showInvisibleElements }\"></span>\n              <span class=\"sjs-cb-label\" data-bind=\"text: showInvisibleElementsText\"></span>\n          </div>\n       </label>\n  </div>\n  <survey-widget params=\"survey: koSurvey\"></survey-widget>\n  <!-- ko ifnot: koIsRunning -->\n  <div class=\"svd_test_results\">\n      <div class=\"svd_results_header\">\n          <button class=\"btn btn-primary\" data-bind=\"click: selectTestClick, text: testSurveyAgainText\"></button>\n          <h2 data-bind=\"text: surveyResultsText\"></h2>\n      </div>\n      <ul class=\"navbar-default container-fluid nav nav-tabs editor-tabs\">\n          <li class=\"nav-item active\" data-bind=\"css: {active: koResultViewType() === 'table'}\">\n              <a class=\"nav-link\" href=\"#\" data-bind=\"click: selectTableClick, text: $root.getLocString('ed.surveyResultsTable')\"></a>\n          </li>\n          <li class=\"nav-item\" data-bind=\"css: {active: koResultViewType() === 'text'}\">\n              <a class=\"nav-link\" href=\"#\" data-bind=\"click: selectJsonClick, text: $root.getLocString('ed.surveyResultsJson')\"></a>\n          </li>\n      </ul>\n      <div class=\"svd_results_text svd-light-bg-color\" data-bind=\"visible: koResultViewType() === 'text'\">\n          <div data-bind=\"html: koResultText\"></div>\n      </div>\n      <div class=\"svd_results_table svd-light-bg-color\" data-bind=\"visible: koResultViewType() === 'table'\">\n          <table>\n              <thead>\n                  <tr class=\"svd-light-background-color\">\n                      <th class=\"svd-dark-border-color\" data-bind=\"text: resultsTitle\"></th>\n                      <th class=\"svd-dark-border-color\" data-bind=\"text: resultsName\"></th>\n                      <th class=\"svd-dark-border-color\" data-bind=\"text: resultsValue\"></th>\n                      <th class=\"svd-dark-border-color\" data-bind=\"text: resultsDisplayValue\"></th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <!-- ko foreach: koResultData -->\n                  <!-- ko template: \"survey-result-table-row\" -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n              </tbody>\n          </table>\n      </div>\n  </div>\n  <!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"survey-result-table-row\">\n  <tr data-bind=\"click: function() { isNode && collapsed(!collapsed()); }\">\n      <td class=\"svd-dark-border-color\">\n          <!-- ko if: isNode -->\n          <span class=\"survey-result-marker\" data-bind=\"css: { 'survey-result-marker--expanded': !collapsed() }\">▶</span>\n          <!-- /ko -->\n          <span data-bind=\"text: title\"></span></td>\n      <td class=\"svd-dark-border-color\" data-bind=\"text: name\"></td>\n      <td class=\"svd-dark-border-color\"><div class=\"survey-result-value\" data-bind=\"text: getString(value)\"></div></td>\n      <td class=\"svd-dark-border-color\" data-bind=\"text: getString(displayValue)\"></td>\n  </tr>\n  <!-- ko if: isNode && !collapsed() -->\n  <!-- ko foreach: data -->\n  <!-- ko template: \"survey-result-table-row\" -->\n  <!-- /ko -->\n  <!-- /ko -->\n  <!-- /ko -->\n</script>\n";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"se-tab-designer\">\n    <div\n    class=\"row svd_survey_designer\"\n  >\n    <div\n      class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 svd_toolbox svd-dark-bg-color\"\n    >\n      <!-- ko if: toolbox.koHasCategories -->\n      <div\n        class=\"panel-group\"\n        role=\"tablist\"\n        data-bind=\"foreach: toolbox.koCategories\"\n      >\n        <div class=\"panel panel-info\">\n          <div\n            class=\"svd-toolbox-category-header\"\n            role=\"tab\"\n            data-bind=\"click: expand\"\n          >\n            <span\n              data-bind=\"css: { 'svd-main-color': !koCollapsed() }, text: name\"\n            ></span>\n            <!-- ko if: koCollapsed -->\n            <svg-icon\n              class=\"icon-toolbox-arrow\"\n              params=\"iconName: 'icon-arrow_down_10x10', size: 10\"\n            ></svg-icon>\n            <!-- /ko -->\n            <!-- ko ifnot: koCollapsed -->\n            <svg-icon\n              class=\"icon-toolbox-arrow svd-primary-icon\"\n              params=\"iconName: 'icon-arrow_up_10x10', size: 10\"\n            ></svg-icon>\n            <!-- /ko -->\n          </div>\n          <div\n            role=\"tabpanel\"\n            data-bind=\"css: { 'panel-collapse collapse': koCollapsed}\"\n          >\n            <!-- ko foreach: items -->\n            <div\n              tabindex=\"0\"\n              draggable=\"true\"\n              class=\"svd_toolbox_item svd-light-border-color\"\n              data-bind=\"css: 'svd_toolbox_item_' + iconName, key2click, clickNoFocus: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\"\n            >\n              <span data-bind=\"attr: {title: title}\">\n                <svg-icon params=\"iconName: iconName\"></svg-icon>\n              </span>\n              <span\n                class=\"svd_toolbox_item_text hidden-sm hidden-xs\"\n                data-bind=\"text:title\"\n              ></span>\n            </div>\n            <!-- /ko  -->\n          </div>\n        </div>\n      </div>\n      <!-- /ko  -->\n      <!-- ko if: !toolbox.koHasCategories() -->\n      <div\n        class=\"svd_toolbox_title hidden-sm hidden-xs\"\n        data-bind=\"text: $root.getLocString('ed.toolbox')\"\n      ></div>\n      <!-- ko foreach: toolbox.koItems -->\n      <div\n        tabindex=\"0\"\n        draggable=\"true\"\n        class=\"svd_toolbox_item svd-light-border-color\"\n        data-bind=\"css: 'svd_toolbox_item_' + iconName, key2click, clickNoFocus: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\"\n      >\n        <span data-bind=\"attr: {title: title}\">\n          <svg-icon params=\"iconName: iconName\"></svg-icon>\n        </span>\n        <span\n          class=\"svd_toolbox_item_text hidden-sm hidden-xs\"\n          data-bind=\"text:title\"\n        ></span>\n      </div>\n      <!-- /ko  -->\n      <!-- /ko  -->\n    </div>\n    <svd-splitter params=\"minLeft: 100, minRight: 600\"></svd-splitter>\n    <div\n      class=\"col-xs-11 svd_editors\"\n      data-bind=\"css: {'col-lg-7 col-md-7 col-sm-8': koShowPropertyGrid, 'col-lg-10 col-md-10 col-sm-11': !koShowPropertyGrid(), 'svd_wide': !koShowPropertyGrid()}\"\n    >\n      <div class=\"svd_toolbar\">\n        <!-- ko foreach: toolbarItems -->\n        <span\n          tabindex=\"0\"\n          class=\"svd_action\"\n          data-bind=\"css: $data.css, visible: visible, attr: { id: id }\"\n        >\n          <!-- ko template: { name: $data.template || 'svd-toolbar-button', data: $data.data || $data } -->\n          <!-- /ko -->\n        </span>\n        <!-- /ko -->\n      </div>\n      <pages-editor params=\"editor:$data\" data-bind=\"visible: koShowPagesToolbox\">\n      </pages-editor>\n      <div\n        class=\"svd_questions_editor svd-light-bg-color\"\n        id=\"scrollableDiv\"\n        data-bind=\"style: { height: koDesignerHeight }, event: { dragover: dragOverQuestionsEditor, drop: dropOnQuestionsEditor }\"\n      >\n        <div id=\"surveyjs\"></div>\n        <!-- ko if: isCurrentPageEmpty -->\n        <div\n          class=\"empty-message\"\n          data-bind=\"text: $root.getLocString('survey.dropQuestion')\"\n        ></div>\n        <!-- /ko -->\n      </div>\n    </div>\n    <svd-splitter params=\"minLeft: 600, minRight: 150\"></svd-splitter>\n    <div\n      class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs svd_properties svd-light-border-color svd-light-bg-color\"\n      data-bind=\"visible: koShowPropertyGrid\"\n    >\n      <div class=\"svd_object_selector svd-light-border-color\">\n        <div class=\"svd_custom_select\">\n          <select\n            onmousewheel=\"return false;\"\n            id=\"objectSelector\"\n            class=\"form-control\"\n            data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"\n          ></select>\n        </div>\n        <span\n          data-bind=\"click: editCurrentObject, attr: { title: $root.getLocString('ed.editSelObject')}\"\n        >\n          <svg-icon\n            class=\"svd-primary-icon icon-edit\"\n            params=\"iconName: 'icon-edit', size:24\"\n          ></svg-icon>\n        </span>\n      </div>\n      <div\n        class=\"svd_object_editor\"\n        data-bind=\"style: {height: koDesignerHeight}\"\n      >\n        <div\n          data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"\n        ></div>\n      </div>\n    </div>\n  </div>\n</script>\n<script type=\"text/html\" id=\"se-tab-test\">\n  <div data-bind=\"style: {width: koTestSurveyWidth}\">\n    <div id=\"surveyjsExample\" data-bind=\"template: { name: 'surveylive', data: surveyLive }\"></div>\n  </div>\n</script>\n";

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"svd-toolbar-button\">\n    <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable: $data.enabled || true, click: action, css: $data.innerCss\">\n        <span data-bind=\"text: title\"></span>\n    </button>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-options\">\n    <div class=\"ddmenu-container toolbar-options btn-group inline\">\n        <div style=\"-webkit-tap-highlight-color:rgba(0,0,0,0)\" data-bind=\"trueclick\"></div>\n\n        <div class=\"ddmenu\">\n            <span class=\"btn btn-primary\" tabindex=\"0\">\n                <span data-bind=\"text: title\"></span>\n                <span class=\"caret\"></span>\n            </span>\n            <div tabindex=\"0\" data-bind=\"trueclick\"></div>\n            <ul class=\"svd-light-bg-color\">\n                <!-- ko foreach: items -->\n                <li data-bind=\"css: $data.css\">\n                    <a href=\"#\" data-bind=\"click: action, text: title\"></a>\n                </li>\n                <!-- /ko -->\n            </ul>\n        </div>\n    </div>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-state\">\n    <span class=\"icon\">\n        <svg-icon class=\"icon-status\" params=\"iconName: innerCss, size: 24\"></svg-icon>\n    </span>\n    <span class=\"svd-light-text-color\" data-bind=\"text: title\"></span>\n</script>";

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"translation\">\n    <div class=\"form-group svd-translation-tab\">\n        <div class=\"form-group svd-language-select\">\n        <div class=\"svd_custom_select svd-light-bg-color svd-light-border-color\"> \n            <select onmousewheel=\"return false;\" data-bind=\"options: koAvailableLanguages, value: koSelectedLanguageToAdd, optionsText:'text', optionsCaption: $data.selectLanguageOptionsCaption\"></select>\n        </div>\n        <div class=\"svd-translation-tab-show-all-strings-container\">\n        <!-- ko template: { name: 'propertyeditor-boolean', data: {  koValue: koShowAllStrings, displayName: $data.showAllStringsText, isDiplayNameVisible: true } } -->\n        <!-- /ko -->\n        </div>\n        <div class=\"svd_custom_select svd-light-bg-color svd-light-border-color\"> \n            <select onmousewheel=\"return false;\" data-bind=\"options: koFilteredPages, value: koFilteredPage, optionsValue: 'value', optionsText:'text'\"></select>\n        </div>\n        </div>\n        <div>\n        <!-- ko foreach: {data: $data.koLocales, as: 'item' } -->\n        <label data-bind=\"visible: !!item.locale\">\n        <!-- ko template: { name: 'propertyeditor-boolean', data: {  koValue: item.koVisible, displayName: $parent.getLocaleName($data.locale), isDiplayNameVisible: true } } -->\n        <!-- /ko -->\n        </label>\n        <!-- /ko -->\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\"  type=\"button\" data-bind=\"visible:$data.koCanMergeLocaleWithDefault, text:$data.koMergeLocaleWithDefaultText, click:$data.koMergeLocaleWithDefault\"></button>\n            <button class=\"btn btn-primary\"  type=\"button\" data-bind=\"text:$data.exportToCSVText, click:$data.koExportToSCVFile\"></button>\n            <button class=\"btn btn-primary\"  type=\"button\" onclick=\"this.getElementsByTagName('input')[0].click();\">\n            <input type=\"file\" style=\"display:none;\" accept=\".csv\" data-bind=\"event: { change: function() { $data.koImportFromSCVFile($element) } }\" />\n            <span data-bind=\"text:$data.importFromCSVText\"></span>\n            </button>\n        </div>\n        <div class=\"svd-translation-no-strings svd-light-text-color\" data-bind=\"visible:$data.koIsEmpty\">\n            <span data-bind=\"text:$data.noStringsText\"></span>\n        </div>\n        <!-- ko ifnot: $data.koIsEmpty -->\n        <!-- ko template: { name: \"translation-group\", data: $data.koRoot } -->\n        <!-- /ko -->    \n        <!-- /ko -->    \n    </div>    \n</script>\n<script type=\"text/html\" id=\"translation-group\">\n    <div class=\"svd-translation-strings svd-light-border-color svd-light-bg-color\">\n        <table class=\"svd_items_table\" data-bind=\"visible: $data.locItems.length > 0\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <!-- ko foreach: $data.koLocales -->\n                    <th data-bind=\"visible: $data.koVisible, text: $parent.getLocaleName($data.locale), style: {width: $parent.locWidth}\"></th>\n                    <!-- /ko -->\n                </tr>\n            </thead>\n            <tbody data-bind=\"foreach: {data: $data.locItems, as: 'item' }\">\n                <tr>\n                    <td style=\"max-width: 200px; min-width:100px\"><span data-bind=\"text:item.text\"></span></td>\n                    <!-- ko foreach: $parent.koLocales -->\n                    <td data-bind=\"visible: $data.koVisible, style: {width: $data.koVisible ? $parent.locWidth : '0px'}\">\n                        <textarea class=\"form-control\" style=\"width:100%\" data-bind=\"visible: $data.koVisible, value:item.koValue($data.locale), attr: {placeholder: !$data.locale? item.defaultValue : ''}\"></textarea>\n                    </td>\n                    <!-- /ko -->\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"svd-translation-panel-strings\" data-bind=\"foreach: {data: $data.groups, as: 'group' }\">\n            <div class=\"svd-toolbox-category-header\" role=\"tab\" data-bind=\"click: function(){ group.koExpanded(!group.koExpanded())}\">\n                <span class=\"svd-translation-panel-strings-title\"data-bind=\"css: { 'svd-main-color': group.koExpanded() }, text: group.name\"></span>\n                <!-- ko ifnot: koExpanded -->\n                <svg-icon class=\"icon-toolbox-arrow\" params=\"iconName: 'icon-arrow_down_10x10', size: 10\"></svg-icon>\n                <!-- /ko -->\n                <!-- ko if: koExpanded -->\n                <svg-icon class=\"icon-toolbox-arrow svd-primary-icon\" params=\"iconName: 'icon-arrow_up_10x10', size: 10\"></svg-icon>\n                <!-- /ko -->\n            </div>\n            <div data-bind=\"visible: koExpanded\">\n            <!-- ko template: { name: \"translation-group\", data: group } -->\n            <!-- /ko -->\n            <div>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svda-content\">\n  <span class=\"svda-image-editor\">\n    <span\n      class=\"edit-image-item\"\n      data-bind=\"click: chooseImage, clickBubble: false, attr: { title: getLocString('pe.edit') }\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplaceedit', size: 12\"\n      ></svg-icon>\n    </span>\n  </span>\n  <span\n    class=\"svda-drag-handle\"\n    data-bind=\"attr: { title: getLocString('pe.move') }\"\n  >\n    <svg-icon\n      class=\"svd-primary-icon\"\n      params=\"iconName: 'icon-inplacedraggable', size: 12\"\n    ></svg-icon>\n  </span>\n  <!--ko ifnot: isLastItem -->\n  <span\n    class=\"svda-delete-item\"\n    data-bind=\"click: deleteItem, attr: { title: getLocString('pe.delete') }\"\n  >\n    <svg-icon\n      class=\"svd-primary-icon\"\n      params=\"iconName: 'icon-inplacedelete', size: 12\"\n    ></svg-icon>\n  </span>\n  <!-- /ko -->\n</div>\n";

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svda-content\">\n  <span\n    class=\"svda-title-editor-content\"\n    data-bind=\"visible: isEditing\"\n    style=\"display: none;\"\n  >\n    <input\n      data-bind=\"textInput: editingName, event: { keyup: nameEditorKeypress, blur: postEdit }\"\n      style=\"border-top: none; border-left: none; border-right: none; outline: none; background-color: transparent; display: inline-block;\"\n    />\n    <span\n      class=\"svda-edit-button\"\n      data-bind=\"click: postEdit, enable: editingName() != ''\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplacecheck', size: 12\"\n      ></svg-icon>\n    </span>\n    <!-- <span class=\"svda-edit-button\" data-bind=\"click: cancelEdit\">✕</span> -->\n  </span>\n  <span\n    class=\"svda-title-editor-content svda-title-editor-start\"\n    data-bind=\"visible: !isEditing()\"\n  >\n    <span style=\"display: none;\" data-bind=\"text: editingName\"></span>\n    <span\n      class=\"edit-survey-name\"\n      data-bind=\"click: startEdit, attr: { title: getLocString('pe.edit') }\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplaceedit', size: 12\"\n      ></svg-icon>\n    </span>\n  </span>\n  <!-- ko if: isDraggable -->\n  <span\n    class=\"svda-drag-handle\"\n    data-bind=\"attr: { title: getLocString('pe.move') }, visible: !isEditing()\"\n  >\n    <svg-icon\n      class=\"svd-primary-icon\"\n      params=\"iconName: 'icon-inplacedraggable', size: 12\"\n    ></svg-icon>\n  </span>\n  <!-- /ko -->\n  <!--ko ifnot: isLastItem -->\n  <span\n    class=\"svda-delete-item\"\n    data-bind=\"click: deleteItem, attr: { title: getLocString('pe.delete') }, visible: !isEditing()\"\n  >\n    <svg-icon\n      class=\"svd-primary-icon\"\n      params=\"iconName: 'icon-inplacedelete', size: 12\"\n    ></svg-icon>\n  </span>\n  <!-- /ko -->\n</div>\n";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- ko foreach: actions -->\n    <!-- ko if: !$data.template -->\n    <span class=\"svda_question_action svd-main-color\" data-bind=\"key2click, clickNoFocus: function() { onClick($parent.question); }, attr: {title: text, tabindex: $data.needFocus === undefined || !!$data.needFocus ? 0 : undefined }\">\n        <span>\n            <svg-icon class=\"svd-primary-icon\" data-bind=\"css: $parent.getStyle($data)\" params=\"iconName: $parent.getStyle($data)\"></svg-icon>\n        </span>\n        <span data-bind=\"text: $data.hasTitle ? text: ''\"></span>\n    </span>\n    <!-- /ko -->\n    <!-- ko if: !!$data.template -->\n    <!-- ko template: template -->\n    <!-- /ko -->\n    <!-- /ko -->\n    <!-- /ko -->\n</div>";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svda-content\">\n  <span\n    class=\"svda-title-editor-content\"\n    data-bind=\"visible: isEditing\"\n    style=\"display: none;\"\n  >\n    <input\n      data-bind=\"textInput: editingName, event: { keyup: nameEditorKeypress, blur: postEdit }\"\n      style=\"border-top: none; border-left: none; border-right: none; outline: none; background-color: transparent; display: inline-block; margin: -6px;\"\n    />\n    <span\n      class=\"svda-edit-button\"\n      data-bind=\"click: postEdit, enable: editingName() != ''\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplacecheck', size: 12\"\n      ></svg-icon>\n    </span>\n    <!-- <span class=\"svda-edit-button\" data-bind=\"click: cancelEdit\">✕</span> -->\n  </span>\n  <span\n    class=\"svda-title-editor-content svda-title-editor-start\"\n    data-bind=\"visible: !isEditing()\"\n  >\n    <span style=\"display: none;\" data-bind=\"text: editingName\"></span>\n    <span\n      class=\"edit-survey-name\"\n      data-bind=\"click: startEdit, attr: { title: getLocString('pe.edit') }\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplaceedit', size: 12\"\n      ></svg-icon>\n    </span>\n  </span>\n  <!--ko ifnot: isLastItem -->\n  <span\n    class=\"svda-delete-item\"\n    data-bind=\"click: deleteItem, attr: { title: getLocString('pe.delete') }, visible: !isEditing()\"\n  >\n    <svg-icon\n      class=\"svd-primary-icon\"\n      params=\"iconName: 'icon-inplacedelete', size: 12\"\n    ></svg-icon>\n  </span>\n  <!-- /ko -->\n</div>\n";

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svda-select-items-editor\">\n  <div class=\"svda-select-items-title\" data-bind=\"click: toggle\">\n    <span\n      class=\"svd-main-color\"\n      data-bind=\"text: getLocString('pe.editChoices')\"\n    ></span>\n  </div>\n  <div\n    class=\"svda-select-items-content svd-dark-border-color svd-light-bg-color\"\n    data-bind=\"visible: isExpanded\"\n  >\n    <div class=\"svda-select-items-collection\">\n      <!-- ko foreach: { data: choices, afterRender: choicesRendered } -->\n      <div class=\"item_editable item_draggable\">\n        <span data-bind=\"text: text\"></span>\n        <span>\n          <item-editor\n            params=\"name: $parent.valueName, valueChanged: $parent.valueChanged, target: $data, model: $data, item: $data, question: $parent.question, editor: $parent.editor\"\n          ></item-editor>\n        </span>\n      </div>\n      <!-- /ko -->\n    </div>\n    <!-- ko if: question.hasOther -->\n    <div class=\"item_editable\">\n      <span data-bind=\"text: otherText\"></span>\n      <span>\n        <item-editor\n          params=\"name: &quot;otherText&quot;, target: question, model: question, valueChanged: otherValueChanged, item: question.otherItem, question: question, editor: editor\"\n        ></item-editor>\n      </span>\n    </div>\n    <!-- /ko -->\n    <div\n      class=\"svda-add-new-item\"\n      data-bind=\"click: addItem, attr: { title: getLocString('pe.addItem') }\"\n    >\n      <svg-icon\n        class=\"svd-primary-icon\"\n        params=\"iconName: 'icon-inplaceplus', size: 12\"\n      ></svg-icon>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svda-content\">\n    <span class=\"svda-title-editor-content\" data-bind=\"visible: isEditing\" style=\"display: none;\">\n        <input data-bind=\"textInput: editingName, event: { keyup: nameEditorKeypress, blur: postEdit }\" style=\"border-top: none; border-left: none; border-right: none; outline: none; background-color: transparent; display: inline-block;\"\n        />\n        <span class=\"svda-edit-button\" data-bind=\"click: postEdit, enable: editingName() != ''\">\n            <svg-icon class=\"svd-primary-icon\" params=\"iconName: 'icon-inplacecheck', size: 12\"></svg-icon>\n        </span>\n        <!-- <span class=\"svda-edit-button\" data-bind=\"click: cancelEdit\">✕</span> -->\n    </span>\n    <span class=\"svda-title-editor-content svda-title-editor-start\" data-bind=\"visible: !isEditing()\">\n        <span style=\"display: none;\" data-bind=\"text: editingName\"></span>\n        <span class=\"edit-survey-name\" data-bind=\"click: startEdit, attr: { title: getLocString('pe.edit') }\">\n            <svg-icon class=\"svd-primary-icon\" params=\"iconName: 'icon-inplaceedit', size: 12\"></svg-icon>\n        </span>\n    </span>\n</div>";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(83) + " " + __webpack_require__(84) + "\n" + __webpack_require__(86) + " " + __webpack_require__(87) + "\n" + __webpack_require__(117) + " " + __webpack_require__(116) + "\n" + __webpack_require__(120) + "\n" + __webpack_require__(114) + "\n" + __webpack_require__(113) + "\n" + __webpack_require__(115) + "\n" + __webpack_require__(112) + "\n" + __webpack_require__(88) + "\n" + __webpack_require__(93) + "\n" + __webpack_require__(96) + "\n" + __webpack_require__(90) + "\n" + __webpack_require__(95) + "\n" + __webpack_require__(97) + "\n" + __webpack_require__(101) + "\n" + __webpack_require__(102) + "\n" + __webpack_require__(98) + "\n" + __webpack_require__(99) + "" + __webpack_require__(100) + "\n" + __webpack_require__(104) + "\n" + __webpack_require__(105) + "\n" + __webpack_require__(92) + "\n" + __webpack_require__(106) + "\n" + __webpack_require__(107) + "\n" + __webpack_require__(89) + "\n" + __webpack_require__(108) + "\n" + __webpack_require__(109) + "\n" + __webpack_require__(110) + "\n" + __webpack_require__(111) + "\n" + __webpack_require__(91) + "\n" + __webpack_require__(85) + " " + __webpack_require__(119) + "\n" + __webpack_require__(82) + "\n" + __webpack_require__(103) + "" + __webpack_require__(94) + "\n" + __webpack_require__(81) + " " + __webpack_require__(118) + "\n";

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- ko foreach: tabs -->\n    <div class=\"svd-accordion-tab-header\" role=\"tab\" data-bind=\"click: toggle\">\n        <span data-bind=\"css: { 'svd-main-color': !collapsed() }, text: title\"></span>\n        <!-- ko if: collapsed -->\n        <svg-icon class=\"icon-toolbox-arrow\" params=\"iconName: 'icon-arrow_down_10x10', size: 10\"></svg-icon>\n        <!-- /ko -->\n        <!-- ko ifnot: collapsed -->\n        <svg-icon class=\"icon-toolbox-arrow svd-primary-icon\" params=\"iconName: 'icon-arrow_up_10x10', size: 10\"></svg-icon>\n        <!-- /ko -->\n    </div>\n    <div class=\"svd-accordion-tab-content\" role=\"tab\" data-bind=\"ifnot: collapsed\">\n        <!-- ko template: { name: template, data: data } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko -->\n</div>";

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textWorker__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSONEditor; });


var SurveyJSONEditor = /** @class */ (function () {
    function SurveyJSONEditor() {
        this.isProcessingImmediately = false;
        this.timeoutId = -1;
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koErrors = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        var self = this;
        this.koText.subscribe(function (newValue) {
            self.onJsonEditorChanged();
        });
    }
    SurveyJSONEditor.prototype.init = function (editorElement) {
        if (!this.hasAceEditor)
            return;
        this.aceEditor = ace.edit(editorElement);
        var self = this;
        //TODO add event to change ace theme and mode
        //this.aceEditor.setTheme("ace/theme/monokai");
        //this.aceEditor.session.setMode("ace/mode/json");
        this.aceEditor.setShowPrintMargin(false);
        this.aceEditor.getSession().on("change", function () {
            self.onJsonEditorChanged();
        });
        this.aceEditor.getSession().setUseWorker(true);
        __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */].newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "hasAceEditor", {
        get: function () {
            return typeof ace !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "text", {
        get: function () {
            if (!this.hasAceEditor)
                return this.koText();
            return this.aceEditor.getValue();
        },
        set: function (value) {
            this.isProcessingImmediately = true;
            this.koText(value);
            if (this.aceEditor) {
                this.aceEditor.setValue(value);
                this.aceEditor.renderer.updateFull(true);
            }
            this.processJson(value);
            this.isProcessingImmediately = false;
        },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.show = function (value) {
        this.text = value;
        if (this.aceEditor) {
            this.aceEditor.focus();
        }
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "isJsonCorrect", {
        get: function () {
            this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](this.text);
            return this.textWorker.isJsonCorrect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "survey", {
        get: function () {
            return this.textWorker.survey;
        },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.onJsonEditorChanged = function () {
        if (this.timeoutId > -1) {
            clearTimeout(this.timeoutId);
        }
        if (this.isProcessingImmediately) {
            this.timeoutId = -1;
        }
        else {
            var self = this;
            this.timeoutId = window.setTimeout(function () {
                self.timeoutId = -1;
                self.processJson(self.text);
            }, SurveyJSONEditor.updateTextTimeout);
        }
    };
    SurveyJSONEditor.prototype.processJson = function (text) {
        this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](text);
        if (this.aceEditor) {
            this.aceEditor
                .getSession()
                .setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        }
        else {
            this.koErrors(this.textWorker.errors);
        }
    };
    SurveyJSONEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = {
                row: error.position.start.row,
                column: error.position.start.column,
                text: error.text,
                type: "error"
            };
            annotations.push(annotation);
        }
        return annotations;
    };
    SurveyJSONEditor.updateTextTimeout = 1000;
    return SurveyJSONEditor;
}());



/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* fork of the https://github.com/SortableJS/knockout-sortablejs because of es modules build error 
    waiting for approve pullrequests:
     * https://github.com/SortableJS/knockout-sortablejs/pull/9)
     * https://github.com/SortableJS/knockout-sortablejs/pull/1/files
*/

/*global ko*/

(function(factory) {
  "use strict";
  //get ko ref via global or require
  var koRef;
  if (typeof ko !== "undefined") {
    //global ref already defined
    koRef = ko;
  } else if (
    true
  ) {
    //commonjs / node.js
    koRef = __webpack_require__(1);
  }
  //get sortable ref via global or require
  var sortableRef;
  if (typeof Sortable !== "undefined") {
    //global ref already defined
    sortableRef = Sortable;
  } else if (
    true
  ) {
    //commonjs / node.js
    sortableRef = __webpack_require__(9);
  }
  //use references if we found them
  if (koRef !== undefined && sortableRef !== undefined) {
    factory(koRef, sortableRef);
  } else if (true) {
    //if both references aren't found yet, get via AMD if available
    //we may have a reference to only 1, or none
    if (koRef !== undefined && sortableRef === undefined) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function(amdSortableRef) {
        factory(koRef, amdSortableRef);
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (koRef === undefined && sortableRef !== undefined) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(amdKnockout) {
        factory(amdKnockout, sortableRef);
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (koRef === undefined && sortableRef === undefined) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  } else {
    //no more routes to get references
    //report specific error
    if (koRef !== undefined && sortableRef === undefined) {
      throw new Error("knockout-sortable could not get reference to Sortable");
    } else if (koRef === undefined && sortableRef !== undefined) {
      throw new Error("knockout-sortable could not get reference to Knockout");
    } else if (koRef === undefined && sortableRef === undefined) {
      throw new Error(
        "knockout-sortable could not get reference to Knockout or Sortable"
      );
    }
  }
})(function(ko, Sortable) {
  "use strict";

  var init = function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext,
      sortableOptions
    ) {
      var options = buildOptions(valueAccessor, sortableOptions);

      // It's seems that we cannot update the eventhandlers after we've created
      // the sortable, so define them in init instead of update
      [
        "onStart",
        "onEnd",
        "onRemove",
        "onAdd",
        "onUpdate",
        "onSort",
        "onFilter",
        "onMove",
        "onClone"
      ].forEach(function(e) {
        if (options[e] || eventHandlers[e])
          options[e] = function(
            eventType,
            parentVM,
            parentBindings,
            handler,
            e
          ) {
            var itemVM = ko.dataFor(e.item),
              // All of the bindings on the parent element
              bindings = ko.utils.peekObservable(parentBindings()),
              // The binding options for the draggable/sortable binding of the parent element
              bindingHandlerBinding = bindings.sortable || bindings.draggable,
              // The collection that we should modify
              collection =
                bindingHandlerBinding.collection ||
                bindingHandlerBinding.foreach;
            if (handler) handler(e, itemVM, parentVM, collection, bindings);
            if (eventHandlers[eventType])
              eventHandlers[eventType](
                e,
                itemVM,
                parentVM,
                collection,
                bindings
              );
          }.bind(undefined, e, viewModel, allBindings, options[e]);
      });

      var sortableElement = Sortable.create(element, options);

      // Destroy the sortable if knockout disposes the element it's connected to
      ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
        sortableElement.destroy();
      });
      return ko.bindingHandlers.template.init(element, valueAccessor);
    },
    update = function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext,
      sortableOptions
    ) {
      // There seems to be some problems with updating the options of a sortable
      // Tested to change eventhandlers and the group options without any luck

      return ko.bindingHandlers.template.update(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext
      );
    },
    eventHandlers = (function(handlers) {
      var moveOperations = [],
        tryMoveOperation = function(
          e,
          itemVM,
          parentVM,
          collection,
          parentBindings
        ) {
          // A move operation is the combination of a add and remove event,
          // this is to make sure that we have both the target and origin collections
          var currentOperation = {
              event: e,
              itemVM: itemVM,
              parentVM: parentVM,
              collection: collection,
              parentBindings: parentBindings
            },
            existingOperation = moveOperations.filter(function(op) {
              return op.itemVM === currentOperation.itemVM;
            })[0];

          if (!existingOperation) {
            moveOperations.push(currentOperation);
          } else {
            // We're finishing the operation and already have a handle on
            // the operation item meaning that it's safe to remove it
            moveOperations.splice(moveOperations.indexOf(existingOperation), 1);

            var removeOperation =
                currentOperation.event.type === "remove"
                  ? currentOperation
                  : existingOperation,
              addOperation =
                currentOperation.event.type === "add"
                  ? currentOperation
                  : existingOperation;

            moveItem(
              itemVM,
              removeOperation.collection,
              addOperation.collection,
              addOperation.event.clone,
              addOperation.event
            );
          }
        },
        // Moves an item from the "from" collection to the "to" collection, these
        // can be references to the same collection which means it's a sort.
        // clone indicates if we should move or copy the item into the new collection
        moveItem = function(itemVM, from, to, clone, e) {
          // Unwrapping this allows us to manipulate the actual array
          var fromArray = from(),
            // It's not certain that the items actual index is the same
            // as the index reported by sortable due to filtering etc.
            originalIndex = fromArray.indexOf(itemVM),
            newIndex = e.newIndex;

          // We have to find out the actual desired index of the to array,
          // as this might be a computed array. We could otherwise potentially
          // drop an item above the 3rd visible item, but the 2nd visible item
          // has an actual index of 5.
          if (e.item.previousElementSibling) {
            newIndex = to().indexOf(ko.dataFor(e.item.previousElementSibling));
            newIndex += newIndex > originalIndex ? 0 : 1;
          }

          // Remove sortables "unbound" element
          e.item.parentNode.removeChild(e.item);

          // This splice is necessary for both clone and move/sort
          // In sort/move since it shouldn't be at this index/in this array anymore
          // In clone since we have to work around knockouts valuHasMutated
          // when manipulating arrays and avoid a "unbound" item added by sortable
          fromArray.splice(originalIndex, 1);
          // Update the array, this will also remove sortables "unbound" clone
          from.valueHasMutated();
          if (clone && from !== to) {
            // Read the item
            fromArray.splice(originalIndex, 0, itemVM);
            // Force knockout to update
            from.valueHasMutated();
          }
          // Force deferred tasks to run now, registering the removal
          !!ko.tasks && ko.tasks.runEarly();
          // Insert the item on its new position
          to().splice(newIndex, 0, itemVM);
          // Make sure to tell knockout that we've modified the actual array.
          to.valueHasMutated();
        };

      handlers.onRemove = tryMoveOperation;
      handlers.onAdd = tryMoveOperation;
      handlers.onUpdate = function(
        e,
        itemVM,
        parentVM,
        collection,
        parentBindings
      ) {
        // This will be performed as a sort since the to/from collections
        // reference the same collection and clone is set to false
        moveItem(itemVM, collection, collection, false, e);
      };

      return handlers;
    })({}),
    // bindingOptions are the options set in the "data-bind" attribute in the ui.
    // options are custom options, for instance draggable/sortable specific options
    buildOptions = function(bindingOptions, options) {
      // deep clone/copy of properties from the "from" argument onto
      // the "into" argument and returns the modified "into"
      var merge = function(into, from) {
          for (var prop in from) {
            if (
              Object.prototype.toString.call(from[prop]) === "[object Object]"
            ) {
              if (
                Object.prototype.toString.call(into[prop]) !== "[object Object]"
              ) {
                into[prop] = {};
              }
              into[prop] = merge(into[prop], from[prop]);
            } else into[prop] = from[prop];
          }

          return into;
        },
        // unwrap the supplied options
        unwrappedOptions =
          ko.utils.peekObservable(bindingOptions()).options || {};

      // Make sure that we don't modify the provided settings object
      options = merge({}, options);

      // group is handled differently since we should both allow to change
      // a draggable to a sortable (and vice versa), but still be able to set
      // a name on a draggable without it becoming a drop target.
      if (
        unwrappedOptions.group &&
        Object.prototype.toString.call(unwrappedOptions.group) !==
          "[object Object]"
      ) {
        // group property is a name string declaration, convert to object.
        unwrappedOptions.group = { name: unwrappedOptions.group };
      }

      return merge(options, unwrappedOptions);
    };

  ko.bindingHandlers.draggable = {
    sortableOptions: {
      group: { pull: "clone", put: false },
      sort: false
    },
    init: function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      return init(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext,
        ko.bindingHandlers.draggable.sortableOptions
      );
    },
    update: function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      return update(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext,
        ko.bindingHandlers.draggable.sortableOptions
      );
    }
  };

  ko.bindingHandlers.sortable = {
    sortableOptions: {
      group: { pull: true, put: true }
    },
    init: function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      return init(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext,
        ko.bindingHandlers.sortable.sortableOptions
      );
    },
    update: function(
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      return update(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext,
        ko.bindingHandlers.sortable.sortableOptions
      );
    }
  };
});


/***/ })
/******/ ]);
});