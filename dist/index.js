"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const FetchResults_1 = require("./components/FetchResults");
const Index = () => (react_1.default.createElement("div", null,
    react_1.default.createElement(FetchResults_1.FetchResults, null)));
react_dom_1.default.render(react_1.default.createElement(Index, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map