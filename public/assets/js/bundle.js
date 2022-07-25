/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calcularImpostos.js":
/*!*****************************************!*\
  !*** ./src/modules/calcularImpostos.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcularTributos)
/* harmony export */ });
function calcularTributos(faturamento, atividade, eSimplesNacional) {
  if (eSimplesNacional.checked) {
    return (faturamento * atividade * 0.00208 * 60).toFixed(2);
  } else {
    return (faturamento * 0.00112 * 60).toFixed(2);
  }
}

/***/ }),

/***/ "./src/modules/fetchAjax.js":
/*!**********************************!*\
  !*** ./src/modules/fetchAjax.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcularImpostos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcularImpostos */ "./src/modules/calcularImpostos.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var formCalculadoraTributaria = document.querySelector("#calculadora-tributaria");
formCalculadoraTributaria.addEventListener("submit", function (event) {
  event.preventDefault();
  var nomeEmpresa = formCalculadoraTributaria.querySelector("#nomeEmpresa").value;
  var cnpjEmpresa = formCalculadoraTributaria.querySelector("#cnpj").value;
  var emailEmpresa = formCalculadoraTributaria.querySelector("#email").value;
  var faturamento = formCalculadoraTributaria.querySelector("#faturamento").value;
  var atividade = document.querySelector("#select").value;
  var eSimplesNacional = document.querySelector("#radio-no");
  var cnpjVerdadeiro = validarCNPJ(cnpjEmpresa);

  if (cnpjVerdadeiro) {
    fetch("https://formsubmit.co/ajax/contato.lucas0105@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Email: emailEmpresa,
        Empresa: nomeEmpresa,
        CNPJ: cnpjEmpresa,
        Faturamento: faturamento
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return console.log(data);
    })["catch"](function (error) {
      return console.log(error);
    });
    var calculation = (0,_calcularImpostos__WEBPACK_IMPORTED_MODULE_0__["default"])(faturamento, atividade, eSimplesNacional);
    loadPage(formCalculadoraTributaria, calculation, nomeEmpresa);
  } else {
    erroCnpj();
  }
});

function loadPage(_x, _x2, _x3) {
  return _loadPage.apply(this, arguments);
}

function _loadPage() {
  _loadPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(element, calculation, nomeEmpresa) {
    var get, response, html;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            get = element.getAttribute("GET");
            _context.next = 4;
            return fetch(get);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.text();

          case 7:
            html = _context.sent;
            loadResult(html, calculation, nomeEmpresa);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log("Deu erro!");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _loadPage.apply(this, arguments);
}

function loadResult(response, calculation, nomeEmpresa) {
  var result = document.querySelector(".container");
  result.innerHTML = response;
  document.querySelector(".valorRecuperado").innerHTML = "R$ ".concat(calculation);
  document.querySelector(".spanEmpresa").innerHTML = nomeEmpresa;
}

function validarCNPJ(value) {
  if (!value) return false;
  var isString = typeof value === 'string';
  var validTypes = isString || Number.isInteger(value) || Array.isArray(value);
  if (!validTypes) return false;

  if (isString) {
    if (value.length > 18) return false;
    var digitsOnly = /^\d{14}$/.test(value);
    var validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);
    if (digitsOnly || validFormat) true;else return false;
  }

  var match = value.toString().match(/\d/g);
  var numbers = Array.isArray(match) ? match.map(Number) : [];
  if (numbers.length !== 14) return false;

  var items = _toConsumableArray(new Set(numbers));

  if (items.length === 1) return false;

  var calc = function calc(x) {
    var slice = numbers.slice(0, x);
    var factor = x - 7;
    var sum = 0;

    for (var i = x; i >= 1; i--) {
      var n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    var result = 11 - sum % 11;
    return result > 9 ? 0 : result;
  };

  var digits = numbers.slice(12);
  var digit0 = calc(12);
  if (digit0 !== digits[0]) return false;
  var digit1 = calc(13);

  if (digit1 === digits[1]) {
    return true;
  }
}

function erroCnpj() {
  var campoErro = document.querySelector(".cnpjError");
  var cnpjErro = "CNPJ Inválido";
  campoErro.innerHTML = cnpjErro;
}

/***/ }),

/***/ "./src/modules/formMask.js":
/*!*********************************!*\
  !*** ./src/modules/formMask.js ***!
  \*********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormMask = /*#__PURE__*/function () {
  function FormMask(element, mask, replacementChar, charsToIgnore) {
    _classCallCheck(this, FormMask);

    element.type = "tel";
    element.FormMask = this;
    this.input = element;
    this.mask = mask;
    this["char"] = replacementChar;
    this.specialChars = charsToIgnore;
    this.applyListeners();
  }

  _createClass(FormMask, [{
    key: "applyListeners",
    value: function applyListeners() {
      var _this = this;

      this.input.addEventListener("focus", function () {
        return _this.moveCursorToStart();
      });
      this.input.addEventListener("click", function () {
        return _this.moveCursorToStart();
      });
      this.input.addEventListener("blur", function (e) {
        var inputChars = _this.input.value.split("");

        var ignore = inputChars.indexOf(_this["char"]) < 0;
        var className = ignore ? "valid" : "invalid";

        _this.cleanAndSetClasses(_this.input, [className]);

        if (_this.input.value == _this.mask) _this.input.value = "";
      });
      this.input.addEventListener("keydown", function (e) {
        if (e.key == "Backspace" || e.key == "Delete") {
          _this.deleteValue(_this.input.value.split(""));

          e.preventDefault();
        }
      });
      this.input.addEventListener("beforeinput", function (e) {
        e.preventDefault();
        var key = e.key || e.data;
        var numberKey = !isNaN(key) && key != " ";
        if (!numberKey) return;

        var inputChars = _this.input.value.split("");

        _this.maskPattern(inputChars, key);
      });
      this.input.addEventListener("paste", function (e) {
        var data = e.clipboardData.getData("text");

        _this.onPasteData(data);

        e.preventDefault();
      });
    }
  }, {
    key: "moveCursorToStart",
    value: function moveCursorToStart() {
      this.cleanAndSetClasses(this.input, []);

      if (this.input.value == "" || this.input.value == this.mask) {
        this.input.value = this.mask;
        var inputChars = this.input.value.split("");
        var indexToStart = inputChars.indexOf(this["char"]);
        this.input.setSelectionRange(indexToStart, indexToStart);
      }
    }
  }, {
    key: "cleanAndSetClasses",
    value: function cleanAndSetClasses(element, classes) {
      element.classList.remove("valid", "invalid");
      classes.forEach(function (className) {
        return element.classList.add(className);
      });
    }
  }, {
    key: "maskPattern",
    value: function maskPattern(inputChars, key) {
      var cursor = this.input.selectionStart;

      for (var i = cursor; i < inputChars.length; i++) {
        var ignore = this.specialChars.indexOf(inputChars[i]) >= 0;
        if (!ignore) break;
        cursor++;
      }

      inputChars.splice(cursor, 1, key);
      this.insertValue(inputChars.join(""), cursor + 1);
    }
  }, {
    key: "insertValue",
    value: function insertValue(result, cursor) {
      if (result.length != this.mask.length) return;
      this.input.value = result;
      if (cursor >= 0) this.input.setSelectionRange(cursor, cursor);
    }
  }, {
    key: "deleteValue",
    value: function deleteValue(inputChars) {
      var withoutSelectionRange = this.checkSelectionRange(inputChars);
      if (!withoutSelectionRange) return;
      var cursor = this.input.selectionStart;

      for (var i = 0; i < inputChars.length; i++) {
        var ignore = this.specialChars.indexOf(inputChars[cursor - 1]) >= 0;
        if (!ignore) break;
        cursor -= 1;
      }

      inputChars.splice(cursor - 1, 1, this["char"]);
      this.insertValue(inputChars.join(""), cursor - 1);
    }
  }, {
    key: "checkSelectionRange",
    value: function checkSelectionRange(inputChars) {
      if (this.input.selectionStart == this.input.selectionEnd) return true;
      var start = this.input.selectionStart;
      var end = this.input.selectionEnd;

      for (var i = start; i < end; i++) {
        var nonSpecialChar = this.specialChars.indexOf(inputChars[i]) < 0;
        if (nonSpecialChar) inputChars.splice(i, 1, this["char"]);
      }

      this.insertValue(inputChars.join(""), start);
      return false;
    }
  }, {
    key: "onPasteData",
    value: function onPasteData(data) {
      var _this2 = this;

      var maskChars = this.mask.split("");
      var dataChars = data.split("");
      var onlyNumbers = dataChars.filter(function (value) {
        return !isNaN(value) && value != " ";
      });
      var maskWithoutSpecialChars = maskChars.filter(function (value) {
        return value == _this2["char"];
      });
      var numberOfChars = maskWithoutSpecialChars.length;

      for (var i = 0; i < numberOfChars; i++) {
        var positionChar = maskChars.indexOf(this["char"]);
        var number = onlyNumbers[i] || this["char"];
        maskChars.splice(positionChar, 1, number);
      }

      this.input.value = "";
      this.insertValue(maskChars.join(""), maskChars.indexOf(this["char"]));
    }
  }]);

  return FormMask;
}();

var input = document.querySelector("#cnpj");
new FormMask(input, "__.___.___/____-__", "_", [".", "/", "-"]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 550px) {\r\n  .formulario {\r\n    width: 18rem;\r\n  }\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  background: linear-gradient(45deg, rgb(232, 241, 199) 20%, #009034 100%);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.formulario {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 20px 20px 35px 20px;\r\n  border-radius: 15px;\r\n  align-items: center;\r\n  width: 365px;\r\n  background: white;\r\n  gap: 10px;\r\n}\r\n\r\n#logo {\r\n  width: 20%;\r\n}\r\n\r\n.t1 {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  margin-top: -20px;\r\n  text-transform: uppercase;\r\n  color: rgb(20, 158, 20);\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  width: 100%;\r\n}\r\n\r\n.enviar {\r\n  background-color: #009034;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 15px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  width: 100%;\r\n  border: rgba(212, 212, 212, 0.438);\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: background-color 300ms ease-in-out;\r\n}\r\n\r\n.enviar:hover  {\r\n  background-color: #00722a;\r\n}\r\n\r\nlabel {\r\n  margin: 0 0 2px 2px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border-radius: 7px;\r\n  border: 0.3px solid gray;\r\n}\r\n\r\nh3 {\r\n  margin-left: 2px;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n.form-radio {\r\n  display: flex;\r\n  width: 100%;\r\n  gap: 12px;\r\n}\r\n\r\n.radio-group {\r\n  display: flex;\r\n}\r\n\r\n.radio-group .radio {\r\n  width: 18px;\r\n}\r\n\r\n.radio-group label {\r\n  margin-left: 8px;\r\n}\r\n\r\n.radio-group input {\r\n  margin-left: 4px;\r\n}\r\n\r\n#select {\r\n  padding: 5px;\r\n  -webkit-appearance: initial;\r\n  border-radius: 7px;\r\n}\r\n\r\n.saudacao {\r\n  font-size: 25px;\r\n}\r\n\r\n.mensagemRecuperar {\r\n  font-size: 10.5px;\r\n  text-align: center;\r\n}\r\n\r\n.valorRecuperado {\r\n  margin-top: 20px;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n}\r\n\r\n.contentButtons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.contentButtons button {\r\n  margin-top: 15px;\r\n  background-color: #009034;\r\n  color: white;\r\n  padding: 7px 10px;\r\n  font-size: 13.5px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  border: rgba(212, 212, 212, 0.438);\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: background-color 300ms ease-in-out;\r\n}\r\n\r\n.contentButtons button:hover  {\r\n  background-color: #00722a;\r\n}\r\n\r\n.cnpjError {\r\n  margin-left: 2px;\r\n  font-size: 11px;\r\n  color: red;\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,4DAA4D;AAC9D;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,wEAAwE;EACxE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,4DAA4D;EAC5D,WAAW;EACX,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;EACf,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,4DAA4D;EAC5D,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;EACf,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ","sourcesContent":["@media screen and (max-width: 550px) {\r\n  .formulario {\r\n    width: 18rem;\r\n  }\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  background: linear-gradient(45deg, rgb(232, 241, 199) 20%, #009034 100%);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.formulario {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 20px 20px 35px 20px;\r\n  border-radius: 15px;\r\n  align-items: center;\r\n  width: 365px;\r\n  background: white;\r\n  gap: 10px;\r\n}\r\n\r\n#logo {\r\n  width: 20%;\r\n}\r\n\r\n.t1 {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  margin-top: -20px;\r\n  text-transform: uppercase;\r\n  color: rgb(20, 158, 20);\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  width: 100%;\r\n}\r\n\r\n.enviar {\r\n  background-color: #009034;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 15px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  width: 100%;\r\n  border: rgba(212, 212, 212, 0.438);\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: background-color 300ms ease-in-out;\r\n}\r\n\r\n.enviar:hover  {\r\n  background-color: #00722a;\r\n}\r\n\r\nlabel {\r\n  margin: 0 0 2px 2px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  padding: 8px;\r\n  border-radius: 7px;\r\n  border: 0.3px solid gray;\r\n}\r\n\r\nh3 {\r\n  margin-left: 2px;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n.form-radio {\r\n  display: flex;\r\n  width: 100%;\r\n  gap: 12px;\r\n}\r\n\r\n.radio-group {\r\n  display: flex;\r\n}\r\n\r\n.radio-group .radio {\r\n  width: 18px;\r\n}\r\n\r\n.radio-group label {\r\n  margin-left: 8px;\r\n}\r\n\r\n.radio-group input {\r\n  margin-left: 4px;\r\n}\r\n\r\n#select {\r\n  padding: 5px;\r\n  -webkit-appearance: initial;\r\n  border-radius: 7px;\r\n}\r\n\r\n.saudacao {\r\n  font-size: 25px;\r\n}\r\n\r\n.mensagemRecuperar {\r\n  font-size: 10.5px;\r\n  text-align: center;\r\n}\r\n\r\n.valorRecuperado {\r\n  margin-top: 20px;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n}\r\n\r\n.contentButtons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.contentButtons button {\r\n  margin-top: 15px;\r\n  background-color: #009034;\r\n  color: white;\r\n  padding: 7px 10px;\r\n  font-size: 13.5px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  border: rgba(212, 212, 212, 0.438);\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n  transition: background-color 300ms ease-in-out;\r\n}\r\n\r\n.contentButtons button:hover  {\r\n  background-color: #00722a;\r\n}\r\n\r\n.cnpjError {\r\n  margin-left: 2px;\r\n  font-size: 11px;\r\n  color: red;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_calcularImpostos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calcularImpostos */ "./src/modules/calcularImpostos.js");
/* harmony import */ var _modules_fetchAjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchAjax */ "./src/modules/fetchAjax.js");
/* harmony import */ var _modules_formMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formMask */ "./src/modules/formMask.js");
/* harmony import */ var _modules_formMask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_formMask__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map