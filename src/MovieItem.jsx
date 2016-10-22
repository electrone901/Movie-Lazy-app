import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
// require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';



var MovieItem = React.createClass({
    render: function() {
    return (
      
      
         <div className="gallery">{/*styles img gallery*/}
            <div className="itemGallery">
              <li className="listGallery"><h4 className="title">{this.props.info.title}</h4><br/> 
                <img src={this.props.info.img}/><br/>
              </li>
            </div>   
         </div>
    )
  }
})

export default MovieItem;
