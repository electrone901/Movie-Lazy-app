import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import MenuItem from './menuitem';
import {Details} from './detailmodal.jsx';


var Gallery = React.createClass({
	generateMenuItems: function(gallery, props) {
		var search = props.params.search;
		var targetArray = [];
		var itemArray = [];

		if (search == "cat" || search == "unicorn" || search == "giraffe" || search == "dragon" || search == "walrus") {
			targetArray = gallery.filter((ele, ind, arr) => {return arr[ind].animal == search;})
		} else if (search == "eerie" || search == "funny" || search == "weird") {
			targetArray = gallery.filter((ele, ind, arr) => {return arr[ind].adj == search;})
		} else if (search == "all") {
			targetArray = gallery;
		}

		targetArray.forEach((ele, ind, arr) => {
			itemArray.push(
				<div>
					<MenuItem key={'item_'+ind} info={ele}/>{/*get Info of all items*/}
					<Details key={'modal_'+ind} info={ele}/>{/*get moreInfo buttons*/}
				</div>
			)
		})
		this.setState({shownItems: itemArray})
		console.log("itemArray", itemArray)
	    {/*sets state to the arra*/}
	},
	getInitialState: function () {
		return {gallery: null, shownItems: null}
	},
	componentWillMount: function () {
		var gallery = data.getGallery()
		this.setState({gallery: gallery})
		this.generateMenuItems(gallery, this.props);
	}, 
	componentWillReceiveProps: function (nextProps) {
		this.generateMenuItems(this.state.gallery, nextProps);
		
	},
	render: function () {
		return (
			<div className="galleryContainer">
				{this.state.shownItems}
				console.log("itemArray", itemArray)
			</div>
		)
	}
})

export default Gallery;


// this is going to be for input search
// var nameArr = this.state.originalList.filter(poke => poke.name.includes(name))
//    name ? this.setState({filteredList: nameArr}) : this.setState({filteredList: this.state.originalList})

// initialState 
// 	gallery: {}

//    this.setState({gallery: data.getGallery.map((elem,indx)=><div key={indx}>elem.title</div>)})
