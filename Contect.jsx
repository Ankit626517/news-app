import React from "react";

export default function Contect() {

  return (
    <>
      <div className="contect">
        <div className="con">
          <form>
            <div className="ime">
              <img src="../images.png" />
            </div>
            <br />
            <div className="border">
              <h className="text">
                <b>First name:-</b>
              </h>
              <br />
              <input
                className="form"
                placeholder="Enter your First Name"
                type="text"
                name="fname"
              />
              <br />
              <h className="text">
                <b>Last name:- </b>
              </h>
              <br />
              <input
                className="form"
                type="text"
                placeholder="enter your Last Name"
                name="lname"
              />
              <br />
              <h className="text">
                <b>E-mail:-</b>
              </h>
              <br />
              <input
                className="form"
                type="text"
                placeholder="Enter your E-mail"
                name="fname"
              />
              <br />
              <h className="text">
                <b>MObile No.:-</b>
              </h>
              <br />
              <input
                className="form"
                type="text"
                placeholder="Enter your Mobile No."
                name="lname"
              />
              <br />
              <h className="massege">
                <b>Drop your massege...</b>
              </h>
              <br />
              <input
                className="mas"
                type="massege"
                placeholder="Enter your Massege......."
                name="lname"
              />
              <br />
              <button className="button">Submit</button>

              <br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
