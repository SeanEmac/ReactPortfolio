import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './hompage';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/resume" component={ Resume } />
    </Switch>
)

export default Main;