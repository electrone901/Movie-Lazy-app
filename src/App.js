//IMPORTING REQUIRED PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


//IMPORTING COMPONENTS
import Nav from './Nav.jsx';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx'
import nowPlaying from './nowPlaying.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/movies/:searchNav" component={nowPlaying} />
      <Route path="/Login" component={Login} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
