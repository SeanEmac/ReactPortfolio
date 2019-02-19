import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Spotify */}
          <Card shadow={5} className="project-card">
            <CardTitle className="card-title" style={{background: 'url(https://pngimage.net/wp-content/uploads/2018/06/node-js-logo-png-1.png) center / cover'}} ></CardTitle>
            <CardText>
            <h4>Spotify playlist maker</h4> 
              Lorem Ipsum
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/SeanEmac/SpotifyPlaylistApp" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Intern Search */}
          <Card shadow={5} className="project-card">
            <CardTitle className="card-title" style={{background: 'url(https://pngimage.net/wp-content/uploads/2018/06/node-js-logo-png-1.png) center / cover'}} ></CardTitle>
            <CardText>
            <h4>Internship search</h4>
              Lorem Ipsum
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/SeanEmac/InternshipWebApp" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Rent Data */}
          <Card shadow={5} className="project-card">
            <CardTitle className="card-title" style={{background: 'url(https://openclipart.org/image/2400px/svg_to_png/248484/387.png) bottom / cover'}} ></CardTitle>
            <CardText>
            <h4>Rent data visualisation</h4>
              Lorem Ipsum
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/SeanEmac/Ireland-Rent-Data" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
          </Card>
          {/* Slack Bot */}
          <Card shadow={5} className="project-card">
            <CardTitle className="card-title" style={{background: 'url(https://openclipart.org/image/2400px/svg_to_png/248484/387.png) bottom / cover'}} ></CardTitle>
            <CardText>
            <h4>Slack Bot</h4>
              Lorem Ipsum
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/SeanEmac/SlackBot" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Client Server */}
          <Card shadow={5} className="project-card">
            <CardTitle className="card-title" style={{background: 'url(https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Java.png) center / cover'}}></CardTitle>
            <CardText>
            <h4>Client-Server chatroom</h4> 
              Lorem Ipsum
            </CardText>
            <CardActions>
                <Button colored href="https://github.com/SeanEmac" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Node</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;