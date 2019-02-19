import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/profile.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profile}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hi</h1>
              <p>Hello</p>

            <hr/>

          <p>Java | JavaScript | NodeJS | Python | Docker | AWS</p>

        <div className="social-links">

          <a href="https://www.linkedin.com/in/mccannsean11/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/SeanEmac" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          <a href="mailto:s.mccann11@nuigalway.ie" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;