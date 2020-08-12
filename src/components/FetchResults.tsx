import React, {
  useState,
  useEffect,
  MouseEvent,
  FormEvent,
  ReactElement
} from "react";
import { DisplayResults } from "./DisplayResults";
import { NYTResponse, Article } from "../assets/NYTResponse";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "b2e02612e179494c9f1f57577b582a0a";

export const FetchResults = (): ReactElement => {
  const emptyResults: Article[] = [];
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [results, setResults] = useState(emptyResults);

  const fetchResults = (): void => {
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
    url = startDate ? `${url}&begin_date=${startDate}` : url;
    url = endDate ? `${url}&end_date=${endDate}` : url;
    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then((data: NYTResponse) => {
        setResults(data.response.docs);
        console.log(data);
      })
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    if (search) {
      fetchResults();
    }
  }, [pageNumber]);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setPageNumber(0);
  };

  const changePageNumber = (event: MouseEvent, direction: string): void => {
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

  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e): void => handleSubmit(e)}>
          <span>Enter a single search term (required):</span>
          <input
            type="text"
            name="search"
            onChange={(e): void => {
              setSearch(e.target.value);
              console.log(e.target);
            }}
            required
          />
          <br />
          <span>Enter a start date:</span>
          <input
            type="date"
            name="startDate"
            pattern="[0-9]{8}"
            onChange={(e): void => setStartDate(e.target.value)}
          />
          <br />
          <span>Enter an end date:</span>
          <input
            type="date"
            name="endDate"
            pattern="[0-9]{8}"
            onChange={(e): void => setEndDate(e.target.value)}
          />
          <br />
          <button className="submit">Submit Search</button>
        </form>
        {results.length > 0 ? (
          <DisplayResults
            results={results}
            changePageNumber={changePageNumber}
            pageNumber={pageNumber}
          />
        ) : null}
      </div>
    </div>
  );
};
