import React from 'react'
import cover from '../images/ironman.svg'

const IndexPage = ({ pageContext, data }) => (
  <div>
    <div className="jumbotron">
      <div className="jumbotron-inner container">
        <div className="jumbotron-inner_img">
          <div className="jumbotron-inner_astro">
            <img src={cover} alt="ironman" />
          </div>
        </div>
        <div className="jumbotron-inner_tagline">
          <h1 className="display-3">Karanbir Singh</h1>
          <h4 className="display-7">Platform Engineer @ Manulife</h4>
          <p> All - Star Dev | Code Fanatic | Linux Hacker </p>
        </div>
      </div>
    </div>

    {/* IronMan Vector Graphics Credit */}

    <div className="container margin-bottom-1">
      <div className="row">
        <div className="col-md-12">
          <h3 className="main-title header-margin-2">WHOAMI</h3>
          <h4>Engineer with a focus on PaaS and automation.</h4>
          <p>
            I currently work as a Platform Engineer at
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.manulife.ca"
            >
              {' '}
              Manulife
            </a>{' '}
            where I'm in charge of running Confluence and Jira
            (Platform-as-a-Service)
          </p>
          <p>I enjoy exploring different tools and programming languages.</p>
        </div>
      </div>
      <div className="credit">
        <a href="https://pngtree.com/freepng/iron-man-vector-art_3764300.html">
          Graphic by Israfil Arif
        </a>
      </div>
      <div style={{ paddingBottom: '5em' }} />
    </div>
  </div>
)

export default IndexPage
