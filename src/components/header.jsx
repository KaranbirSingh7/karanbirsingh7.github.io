import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand fixed-top">
    <Link className="navbar-brand" to="/">
      KARANBIR SINGH
    </Link>

    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/resume">
            <div className="nav-link-highlighter">
              <span>Resume</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/contact">
            <div className="nav-link-highlighter">
              <span>Contact</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
