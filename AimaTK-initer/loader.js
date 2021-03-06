"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// prepare function
function asyncForEach(array, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < array.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, callback(array[index], index, array)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// load questions
var questions = require('./AIMA_SOAL.json');
var API_ENDPOINT = "http://localhost/api/";
var start = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, asyncForEach(questions, function (dimensionS) { return __awaiter(_this, void 0, void 0, function () {
                    var dimension, e_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                dimension = dimensionS.dimension;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, 4, 6]);
                                return [4 /*yield*/, axios_1.default.get(API_ENDPOINT + "questions/add/dimension/", {
                                        params: {
                                            dimension: dimension,
                                            name: dimensionS.name,
                                        },
                                    })];
                            case 2:
                                _a.sent();
                                console.log("OK");
                                return [3 /*break*/, 6];
                            case 3:
                                e_1 = _a.sent();
                                console.log('requesting: {');
                                console.log('dimension:', dimension);
                                console.log('}');
                                console.error(e_1.response.data);
                                return [3 /*break*/, 6];
                            case 4: return [4 /*yield*/, asyncForEach(dimensionS.subdimensions, function (SubDimension) { return __awaiter(_this, void 0, void 0, function () {
                                    var subdimension, e_2;
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                subdimension = SubDimension.subdimension;
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, 4, 6]);
                                                return [4 /*yield*/, axios_1.default.get(API_ENDPOINT + "questions/add/dimension/sub/", {
                                                        params: {
                                                            dimension: dimension,
                                                            subdimension: subdimension,
                                                            name: SubDimension.name,
                                                        },
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [3 /*break*/, 6];
                                            case 3:
                                                e_2 = _a.sent();
                                                console.log('requesting: {');
                                                console.log('subdimension:', subdimension);
                                                console.log('}');
                                                console.error(e_2.response.data);
                                                return [3 /*break*/, 6];
                                            case 4: return [4 /*yield*/, asyncForEach(SubDimension.questions, function (question) { return __awaiter(_this, void 0, void 0, function () {
                                                    var params, e_3;
                                                    var _this = this;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                params = {
                                                                    dimension: dimension,
                                                                    subdimension: subdimension,
                                                                    number: question.number,
                                                                    question: question.question,
                                                                    answers: [],
                                                                };
                                                                return [4 /*yield*/, asyncForEach(question.answers, function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                                                        return __generator(this, function (_a) {
                                                                            params.answers.push(JSON.stringify(answer));
                                                                            return [2 /*return*/];
                                                                        });
                                                                    }); })];
                                                            case 1:
                                                                _a.sent();
                                                                _a.label = 2;
                                                            case 2:
                                                                _a.trys.push([2, 4, , 5]);
                                                                return [4 /*yield*/, axios_1.default.get(API_ENDPOINT + "questions/add/", { params: params })];
                                                            case 3:
                                                                _a.sent();
                                                                return [3 /*break*/, 5];
                                                            case 4:
                                                                e_3 = _a.sent();
                                                                console.error(e_3.response.data);
                                                                return [3 /*break*/, 5];
                                                            case 5: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                            case 5:
                                                _a.sent();
                                                return [7 /*endfinally*/];
                                            case 6: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                            case 5:
                                _a.sent();
                                return [7 /*endfinally*/];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
start();
//# sourceMappingURL=loader.js.map