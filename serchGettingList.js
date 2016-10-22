//THIS IS WORKING 

import React from 'react';
var $ = require('jquery');


var Home = React.createClass({
 


 getInitialState() {
    return ({present: false, src: null, title:null})
  },

fetchMovie() {
    var search = $('#find').val()
    console.log('is it working?:', search)
    var that = this
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + search,
      success: function(data)
      {
        console.log('is it data working?:', data)
        console.log('what data?',typeof data)
       const moviePoster = data.Search[0].Poster;
       const movieTitle = data.Search[0].Title;
       {/*   */}   const movieType = data.Search[0].Type;
        const movieYear = data.Search[0].Year;
        const movieId = data.Search[0].imdbID;

        {that.data.Search.map(function(ele,idx){
        return (
          <li key={idx}>
            {ele.Poster}
            {ele.Title}

          </li>
          )

         })
       }``
       

       

       

        that.setState({present: true, src: moviePoster, title: movieTitle, type: movieType, year: movieYear, id: movieId})
        console.log('is it movieTitle working?:', movieTitle)

        
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
            placeholder="giphy">
          </input>
          <button onClick={this.fetchMovie}>
            <i className="fa fa-search">Search</i>
          </button>
        </div>
        Movie title: {this.state.title}<br/>
        Type: {this.state.type}<br/>
        Year: {this.state.year}<br/>
        imdbID: {this.state.id} 
        Luis<br/>


        <div className="resultRow" style={backgroundImageStyle}><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        </div>
      </div>
    )
  }
})





export default Home;



