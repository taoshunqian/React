import React, { Component } from 'react';
import { Carousel } from 'antd';
// import ReactDOM from 'react-dom';
import logo from '../../assets/image/footer/logo.svg';
import '../../assets/css/home.css';

// 头部走马灯
import CarouselComponents from '../../components/HomeComponent/Carousel';
import ItemsComponents from '../../components/HomeComponent/Items';
import ColumnComponents from '../../components/HomeComponent/Column';
import WaterfallComponents from '../../components/HomeComponent/Waterfall';

class HomeComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			contentPhotos:[{
				id:1,
				photo:logo
			},{
				id:2,
				photo:logo
			},{
				id:3,
				photo:logo
			},{
				id:4,
				photo:logo
			}],
			tabPhotos : [{
				title:'天猫新品',
				photo:logo
			},{
				title:'今日爆款',
				photo:logo
			},{
				title:'飞猪旅行',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			},{
				title:'天猫超市',
				photo:logo
			}]
		}
	}
	render() {
		return (
		<div>
		  <div className="contentStyle">
		     <CarouselComponents contentPhotos={this.state.contentPhotos} />
		  </div>
		  <div className="tabStyle">
		     <ItemsComponents tabPhotos={this.state.tabPhotos} />
		  </div>
		  <div className="ColumnStyle">
		     <ColumnComponents contentPhotos={this.state.contentPhotos} />
		  </div>
		  <div className="waterfallStyle">
		     <WaterfallComponents />
		  </div>
		</div>
		)
	}
}

export default HomeComponents;