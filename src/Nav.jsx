import React from 'react';
import {Link} from 'react-router';
import './Nav.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


{/*NAVIGATION BAR*/}
var Nav = React.createClass({
  render: function() {
    return (
    <div>

       { /*FIRST NAV*/}
      <nav className="navbar main">
          <div className="logo col-xs-3">
            <a href="/" className="logoWidth">
             <img src= "http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />
            </a>
          </div>

          {/*SOCIAL MEDIA
        <div className="socialSearch col-xs-9">
           

            <div className="input-group">
            <input type="text" className="form-control search" placeholder=" Quick Search"/>
              <button className="btn btn-success" type="button">Search</button>
          </div>

      </div>
*/}
      </nav>

      { /*SECOND NAV*/}
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">


              <li className="linetext"><Link to="/">Home</Link></li>
              <li className="linetext"><Link to="/movies/nowPlaying" params={{search: "nowPlaying"}}>Now Playing</Link></li>
              <li className="linetext"><Link to="/movies/featured" params={{search: "featured"}}>Featured movies</Link></li>
              <li className="linetext"><Link to="/movies/classic" params={{search: "classic"}}>Classics</Link></li>
              <li className="linetext"><Link to="/movies/All" params={{search: "all"}}>All Movies</Link></li>


              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/movies/sci-fi" params={{search: "sci-fi"}}>Science Fiction</Link></li>
                  <li><Link to="/movies/comedy" params={{search: "comedy"}}>Comedy</Link></li>
                  <li><Link to="/movies/horror" params={{search: "horror"}}>Horror</Link></li>
                  <li><Link to="/movies/action" params={{search: "action"}}>Action</Link></li>
                  <li><Link to="/movies/romance" params={{search: "romance"}}>Romance</Link></li>
                  <li><Link to="/movies/war" params={{search: "war"}}>War</Link></li>
                </ul>
              </li>
            </ul>



             {/*RIGHT NAV**/}
            <ul className="nav navbar-nav navbar-right">
              <li ><a href="http://123music.to" className="glyphicon glyphicon-headphones">Music</a></li>   {/*if  doesn't wor just add: http://123music.to/**/}
              <li ><Link to="/login" className="glyphicon glyphicon-circle-arrow-up">Login</Link></li>

            </ul>

          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

export default Nav;
