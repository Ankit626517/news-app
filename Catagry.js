

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Cardboot() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=aa4a1b251a7f4678a56bc9108027c02f"
      )
      .then((res) => {
        //   console.log(res);
        setData(res.data.articles);
      });
  });
  const news = data.map((value, index) => {
    return (
      <div key={index}  style={{ width: "18rem" }}>
        <img src={value.urlToImage}  alt="..." />
        <div>
          <h5 >{value.title}</h5>
          <p >{value.description}</p>
          <a href={value.url} >
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
  return <div>{news}</div>;
}