import React, { Component } from "react";

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsDuck</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
       
      </ul>
      
      <button
                className={"btn btn-light mx-2"} 
          
              >
                
                <div className="form-check form-switch">
                Dark/Light
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    // onClick={props.togglemode}
                    id="flexSwitchCheckDefault"
                  />
                  
                </div>
                </button>
    </div>
  </div>
</nav>
      </div>
    );
  }
}
