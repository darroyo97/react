import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog'
import NoMatch from './components/NoMatch'
import Forms from './components/Forms'
import BaseLayout from './components/layout/BaseLayout'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect from="/aboutus" to="/" />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/forms" component={Forms} />
        {/* <Route path="/blog/:blogID" component={Blog} /> */}
        <Route component={NoMatch} />




      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

