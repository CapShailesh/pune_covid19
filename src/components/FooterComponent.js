import React from "react";
import DarkModeToggle from "./DarkMode";
function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/shailesh-borate-54a39316a/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-github"
                href="https://github.com/CapShailesh"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Made by Shailesh Borate</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
