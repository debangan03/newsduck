import React, { Component } from 'react'

export default class Newscomponent extends Component {
  render() {
    let {title,description,imageUrl,Url}=this.props;
    return (
      <div>
        <div className="card" style={{ width: "15rem" }}>
  <img src={!imageUrl?"https://mir-s3-cdn-cf.behance.net/project_modules/disp/158e3b74707155.5c3791ed6a050.gif":imageUrl} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...
    </p>
    <a href={Url} target="-blank" className="btn btn-primary" >
      Read more
    </a>
  </div>
</div>

      </div>
    )
  }
}
