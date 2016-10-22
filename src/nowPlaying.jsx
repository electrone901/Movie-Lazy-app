import React from 'react';
var $ = require('jquery');
import data from './data';
import MovieItem from './MovieItem.jsx'

import 'bootstrap/dist/css/bootstrap.css';


var nowPlaying = React.createClass({
 
 getInitialState() {
    return ({present: false, src: null, title:null})
  },

  componentWillMount: function () {   
    var movies = data.getMovies(); 
    this.setState({movieGallery: movies});   
    this.generateMenuItems(movies, this.props);   
  }, 
  
  componentWillReceiveProps: function (nextProps) {
    this.generateMenuItems(this.state.movieGallery, nextProps)
  }, 

  generateMenuItems: function (movies, props) {
    var search = props.params.searchNav;
    var targetArray = [];
    var movieArray = [];

    console.log(search)
    if (search == 'nowPlaying' || search =='featured' || search =='classic') {
      targetArray = movies.filter((ele, ind,arr) => {
        return arr[ind].adj == search;
      }) 
    }  

    else if (search == "sci-fi" || search == 'comedy' || search == "horror" || search == "action" || search == "romance" || search == "war"
      ){
      targetArray = movies.filter((ele, ind,arr) => {
        return arr[ind].genre == search;
      }) 
    }

    else if (search == "All") {
       targetArray = movies;
    } 
    
    targetArray.forEach((ele, ind, arr) => {
        movieArray.push(
          <div>
          <MovieItem  key={'item_'+ind} info={ele}/>
          </div>
        )
    })

    this.setState({shownItems: movieArray})
    console.log("itemArray", movieArray)
  },
 
  render() {
   {/* var backgroundImageStyle = {
      backgroundImage: "url(" + this.state.src + ")"
    };
     var list = this.state.filteredList.map((movie)=>{
          return <li> <h1> {movie.title} </h1> 
                        <img src={movie.img} alt={movie.title}/>
                </li>
      })
    */}

    return (
      <div className="galleryContainer">
        {this.state.shownItems}
      </div>
    )
  }
})





export default nowPlaying;



