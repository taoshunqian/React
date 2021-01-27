import React, { Component } from 'react';
import { Carousel } from 'antd';

import '../../assets/css/home.css';


class ItemsComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			tabPhotos : props.tabPhotos
		}
	}
	render() {
		return (
		<div className="tabStyle">
            <ul>
			     {
					 this.state.tabPhotos.map((list,key) => {
						 return (
						    <li key={key}>
							   <img src={list.photo} />
							   <p>{list.title}</p>
							</li>
						 )
					 })
				 }
			 </ul>
		</div>
		)
	}
}

export default ItemsComponents;