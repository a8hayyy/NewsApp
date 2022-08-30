import React, { useState } from "react";
import axios from "axios";
import Each from './Each'

function FetchNews() {
  const [news, setNews] = useState([]);


  function fetch() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c91dab34418f407a82c4b210e790e512"
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }

  return (
    <>
    <div className="container">
      <div className="row">
      <div className="col-4">
        <button className='btn btn-primary' onClick={fetch}>Fetch News</button>
      </div>
      </div>
    </div>
    <div className='container'>
        <div className="row">

      {news.map((value) => {
        return (
          <Each image={value.urlToImage} title={value.title} description={value.description}/>
        );
      })}
      </div>
    </div>
    </>
  );
}

export default FetchNews;
