import React, { Component } from 'react';
import { Carousel } from 'antd';
// import ReactDOM from 'react-dom';
import '../../assets/css/home.css';


class CarouselComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			contentPhotos : props.contentPhotos,
			waterfallShow : props.waterfallShow ? props.waterfallShow : false,
			showStyle : {
				"width" : "166px",
				"height" : "177px",
			}
		}
	}
	onChange(a, b, c) {
	  // console.log(a, b, c);
	}
	render() {
		return (
		<div className="setStyle">
		<Carousel afterChange={this.onChange.bind(this)} autoplay='true'>
		   {
			   this.state.contentPhotos.map((list,key) => {
				   return (
				        <div key={key} className='contentStyle'>
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

export default CarouselComponents;