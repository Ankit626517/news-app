import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const categoryChangeToI = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }

  const categoryChangeToU = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }

  const categoryChangeToC = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }

  const categoryChangeToJ = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }


  const categoryChangeToTC = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }
  const categoryChangeToS = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }
  const categoryChangeToB = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }
  const categoryChangeToA = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }
  const categoryChangeToH = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=aa4a1b251a7f4678a56bc9108027c02f')
      .then((res) => {
        setData(res.data.articles);
      });
  }
  const news = data.map((value, index) => {
    return (
      <div key={index} className="yogesh" >
        <img src={value.urlToImage} alt="..." />
        <div className='ankit'>
          <h5 ><b>{value.title}</b></h5>
          <p >{value.description}</p><br />
          <a className='kink' href={value.url} >
            <b><i> Read  more</i></b>
          </a>
        </div>
      </div>
    )
  })

  return (<>

    <div className='main'>
      <div className='sidebar'>
        <div className='cate'>
          <h3>Category</h3>
          <hr /><br />

          <button onClick={categoryChangeToJ}>General</button>
          <br />
          <br />
          {/* <button onClick={categoryChageToSP}>Sports</button> */}

          <button onClick={categoryChangeToS}>Science</button>
          <br />
          <br />
          <button onClick={categoryChangeToTC}>Technology</button>
          <br />
          <br />
          <button onClick={categoryChangeToB}>Business</button>
          <br />
          <br />


          <button onClick={categoryChangeToA}>Entertainment</button>
          <br />
          <br />
          <button onClick={categoryChangeToH}>Helth</button><br /><br />
        </div>
        <div>
          <h2>Country</h2>
          <hr />
          <br />

          <button onClick={categoryChangeToI}>India</button><br /> <br />
          < button onClick={categoryChangeToU}>USA</button><br /> <br />
          < button onClick={categoryChangeToC}>Canada</button><br /> <br />
        </div>
      </div>
      <div>
        <div>
        </div>
        {news}

      </div>
    </div>
  </>
  )
}
