import React, { Component } from 'react';
import { Carousel } from 'antd';
// import ReactDOM from 'react-dom';
import '../../assets/css/home.css';


class ColumnComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			contentPhotos : props.contentPhotos
		}
	}
	onChange(a, b, c) {
	  // console.log(a, b, c);
	}
	render() {
		return (
		<div>
		<Carousel afterChange={this.onChange.bind(this)} autoplay='true' dots="false">
		   {
			   this.state.contentPhotos.map((list,key) => {
				   return (
				        <div key={key} className='ColumnStyle'>
						  <img src={list.photo} />
				        </div>
				   )
			   })
		   }
		  </Carousel>
		</div>
		)
	}
}

export default ColumnComponents;