"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.DisplayResults = (props) => (react_1.default.createElement("div", null,
    props.results.map((result) => (react_1.default.createElement("div", { key: result._id },
        react_1.default.createElement("h2", null, result.headline.main),
        result.multimedia.length > 1 ? (react_1.default.createElement("img", { alt: "article", src: `http://www.nytimes.com/${result.multimedia[1].url}` })) : (""),
        react_1.default.createElement("p", null,
            result.snippet,
            react_1.default.createElement("br", null),
            result.keywords.length > 0 ? " Keywords: " : ""),
        react_1.default.createElement("ul", null, result.keywords.map((keyword) => (react_1.default.createElement("li", { key: keyword.value },
            " ",
            keyword.value,
            " ")))),
        react_1.default.createElement("a", { href: result.web_url },
            react_1.default.createElement("button", null, "Read It"))))),
    react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: (e) => props.changePageNumber(e, "down") }, "Previous 10"),
        "page number: ",
        props.pageNumber + 1,
        react_1.default.createElement("button", { onClick: (e) => props.changePageNumber(e, "up") }, "Next 10"))));
//# sourceMappingURL=DisplayResults.js.map