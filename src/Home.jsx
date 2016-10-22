import React from 'react';
var $ = require('jquery');
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

var Home = React.createClass({
 getInitialState() {
    return ({present: false, src: null, title:null})
  },

fetchMovie() {
    var search = $('#find').val()
    var plot= "&y=&plot=short&r=json"
    console.log('is it working?:', search)
    var that = this
    $.ajax({
      // url: "http://www.omdbapi.com/?s=" + search,
      url: "http://www.omdbapi.com/?t=" + search + plot,
            // http://www.omdbapi.com/?t=batman&y=&plot=short&r=json
      success: function(data)
      {
        console.log('is it data working?:', data)
        console.log('what data?',typeof data)

        const moviePoster = data.Poster;
        const movieTitle = data.Title;
        const moviePlot = data.Plot;
        const movieYear = data.Year;
        const movieActors = data.Actors;
        const movieAwards = data.Awards;
        const movieGenre = data.Genre;
        const movieLanguage = data.Language;
        const movieRated = data.Rated;
        const movieRuntime = data.Runtime;

        that.setState({present: true, src: moviePoster, title: movieTitle, plot: moviePlot, year: movieYear,
          actors: movieActors, awards: movieAwards, genre: movieGenre, lang: movieLanguage, rated: movieRated, time: movieRuntime

        })
      }
    })
  },
  
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.fetchMovie();
  
    }
  },
  render() {
    var backgroundImageStyle = {
      backgroundImage: "url(" + this.state.src + ")"
    };
    return (
      <div className="container">
      
        <div className="searchRow">
          <input 
            id="find" 
            type="text" 
            onKeyPress={this.handleKeyPress}
            placeholder="Enter a title, movie or actor">
          </input>
          <button id='searchButton' onClick={this.fetchMovie}>
            <i className="fa fa-success">Search</i>
          </button>
        </div>

        <div className="movieResults">
          <h4>Movie title: {this.state.title}</h4><br/>
          <div className="resultRow" style={backgroundImageStyle}><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          
          </div>
          <h5>
            Description: {this.state.plot}<br/>
            Actors: {this.state.actors}<br/>
            Win Awards: {this.state.awards}<br/>
            Genre: {this.state.genre}<br/>
            Language: {this.state.lang}<br/>
            Rated: {this.state.rated}<br/>
            Duration: {this.state.time}<br/>
            Year: {this.state.year}<br/>
          </h5>
        </div>
        
        

        
      </div>
    )
  }
})





export default Home;



