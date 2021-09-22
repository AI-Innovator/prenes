import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './home/';
import Services from './services/';
import Contact from './contact/';
import Faceliveness from './faceliveness';
import NotFound from './404';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/faceliveness" component={Faceliveness} />
        <Route component={NotFound} />
    </Switch>
);
