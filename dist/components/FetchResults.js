"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DisplayResults_1 = require("./DisplayResults");
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "b2e02612e179494c9f1f57577b582a0a";
exports.FetchResults = () => {
    const emptyResults = [];
    const [search, setSearch] = react_1.useState("");
    const [startDate, setStartDate] = react_1.useState("");
    const [endDate, setEndDate] = react_1.useState("");
    const [pageNumber, setPageNumber] = react_1.useState(0);
    const [results, setResults] = react_1.useState(emptyResults);
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? `${url}&begin_date=${startDate}` : url;
        url = endDate ? `${url}&end_date=${endDate}` : url;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            setResults(data.response.docs);
            console.log(data);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        if (search) {
            fetchResults();
        }
    }, [pageNumber]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    };
    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if (direction === "down") {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
            }
        }
        if (direction === "up") {
            setPageNumber(pageNumber + 1);
        }
    };
    return (react_1.default.createElement("div", { className: "main" },
        react_1.default.createElement("div", { className: "mainDiv" },
            react_1.default.createElement("form", { onSubmit: (e) => handleSubmit(e) },
                react_1.default.createElement("span", null, "Enter a single search term (required):"),
                react_1.default.createElement("input", { type: "text", name: "search", onChange: (e) => {
                        setSearch(e.target.value);
                        console.log(e.target);
                    }, required: true }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", null, "Enter a start date:"),
                react_1.default.createElement("input", { type: "date", name: "startDate", pattern: "[0-9]{8}", onChange: (e) => setStartDate(e.target.value) }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", null, "Enter an end date:"),
                react_1.default.createElement("input", { type: "date", name: "endDate", pattern: "[0-9]{8}", onChange: (e) => setEndDate(e.target.value) }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { className: "submit" }, "Submit Search")),
            results.length > 0 ? (react_1.default.createElement(DisplayResults_1.DisplayResults, { results: results, changePageNumber: changePageNumber, pageNumber: pageNumber })) : null)));
};
//# sourceMappingURL=FetchResults.js.map