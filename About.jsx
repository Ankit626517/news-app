import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="style"></div>
        <div>
          <h1 className="ab">
              <i><b>About me</b></i>{" "}
          </h1>
        </div>
        <div className="style2"></div>
        <div className="box">
          <div className="child1">
            <h1>
              I am <br />
              Ankit Rathor
            </h1>
            <p>
              Hello everyone My name is ankit rathor and I am currently doing
              B.Tech (C.S.E) from LNCT Indore College. I am currently doing MERN
              stack training in college, in which I have learned HTML, CSS,
              JavaScript, Reactjs, Bootstrap. I can't explain but can write
              code. I have learned HTML and CSS very well.
            </p>
            <br />
            <h1>Social media :)\/</h1>
            <br />
            <a href="https://instagram.com/itz_ankitrathor_01">
              <img className="icone" src="../instagram.png" alt="insta" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-rathore-256b91235/">
              <img className="icone" src="../linkendin.png" alt="insta" />
            </a>
            <a href="*">
              <img className="icone" src="../telegram.png" alt="telegram" />
            </a>
            <a href="https://wa.me/message/KJHGTVRVCT47I1">
              <img className="ico" src="../whatsapp.png" alt="whatsapp" />
            </a>
            <br />
            <br />
            <br />
            <a href="https://www.lnctindore.edu.in/">My College</a>
          </div>
          <div className="child2">
            <img src="./about.png" alt="hii" />
          </div>
        </div>
      </>
    );
  }
}
