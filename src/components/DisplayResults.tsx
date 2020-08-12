import React, { MouseEvent, ReactElement } from "react";
import { Article, Keywords } from "../assets/NYTResponse";

interface Props {
  results: Article[];
  changePageNumber: (a: MouseEvent, b: string) => void;
  pageNumber: number;
}

export const DisplayResults = (props: Props): ReactElement => (
  <div>
    {props.results.map((result: Article) => (
      <div key={result._id}>
        <h2>{result.headline.main}</h2>
        {result.multimedia.length > 1 ? (
          <img
            alt="article"
            src={`http://www.nytimes.com/${result.multimedia[1].url}`}
          />
        ) : (
          null
        )}
        <p>
          {result.snippet}
          <br />
          {result.keywords.length > 0 ? " Keywords: " : ""}
        </p>
        <ul>
          {result.keywords.map((keyword: Keywords) => (
            <li key={keyword.value}> {keyword.value} </li>
          ))}
        </ul>
        <a href={result.web_url}>
          <button>Read It</button>
        </a>
      </div>
    ))}
    <div>
      <button onClick={(e): void => props.changePageNumber(e, "down")}>
        <h4>Previous 10</h4>
      </button>
      <h4>page number: {props.pageNumber + 1}</h4>
      <button onClick={(e): void => props.changePageNumber(e, "up")}>
        <h4>Next 10</h4>
      </button>
    </div>
  </div>
);
