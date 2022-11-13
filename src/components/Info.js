import React, { Fragment } from "react";
import me from "../me.jpg";
import "./Info.css";
const Info = () => {
  return (
    <Fragment>
      <img src={me} alt="my pic" />
      <h2 className="name">Brady Yang</h2>
      <p className="job-title">Senior Software Engineer</p>
      <div className="button-set">
        <button className="email-button">Email</button>
        <button className="linkedin-button">LinkedIn</button>
      </div>
    </Fragment>
  );
};

export default Info;
