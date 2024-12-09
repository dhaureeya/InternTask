import React from 'react'
import "./Layout.css"

const Layout = ({ flag, title, subtitle, description }) => {
    return (
        <div className="card">
          <div className="card-header">
            <img src={flag} alt="Flag" className="card-flag" />
            <h3 className="card-title">{title}</h3>
          </div>
          <h4 className="card-subtitle">{subtitle}</h4>
          <p className="card-description">{description}</p>
        </div>
      );
  };

export default Layout