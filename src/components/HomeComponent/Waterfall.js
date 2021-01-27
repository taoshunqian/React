import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../../assets/css/home.css';
import logo from '../../assets/image/footer/logo.svg';
import CarouselComponents from './Carousel.js';

class WaterfallComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			watrfallLayout : [
				{
					font:' 三月到大理赏樱花不远不近',
					photo:logo,
					label:'爆款'
				},
				{
					font:'三月到大理赏樱花不远不近，才是最好的距离余生',
					photo:logo,
					label:'爆款'
				},
				{
					font:'三月到大理赏樱花不远不近，',
					photo:logo,
					label:'爆款'
				},{
					font:'三月到大理赏樱花不远不近在部队那些日',
					photo:logo,
				},{
					font:'三月到大理赏樱花不远不近，才是最好的距离余生，',
					photo:logo,
				},{
					font:'',
					photo:'',
					contentPhotos:[{
						photo:logo
					},{
						photo:logo
					},{
						photo:logo
					}]
				}
			]
		}
	}
	componentDidMount() {
	}
	showLayOut(photo) {
		return <img src={photo} />;
	}
	showLabel(label) {
		return <span>{ label }</span>
	}
	shoeCarousel(contentPhotos) {
		return <CarouselComponents contentPhotos={contentPhotos}  />
	}
	render() {
		return (
		<div className="waterfall">
		{
			this.state.watrfallLayout.map((list,key)=> {
				return (
				     <div className="item" key={key}>
				         <div className="item-content">
						 {list && list.photo ? this.showLayOut(list.photo) : ''}
						 {list && list.label ? this.showLabel(list.label) : ''}
						 {list && list.contentPhotos ? this.shoeCarousel(list.contentPhotos) : ''}
				         <p>{list.font}</p>
				         </div>
				     </div>
				)
			})
		} 
		</div>
		)
	}
}

export default WaterfallComponents;