import React,{ Component } from 'react';
import { Route,Link } from 'react-router-dom';
import JianliComponent from './Jianjie';
import ShezhiComponent from './Shezhi'


class AboutComponent extends Component {
	constructor(porps) {
		super(porps);
		this.state = {
			AboutDatas: [{
				id:1,
				to:JianliComponent,
				title:'简历',
				path:'/about/',
			},{
				id:2,
				to:ShezhiComponent,
				title:'设置',
				path:'/about/jianli',
			}]
		}
	}
	render() {
		return (
		<div>
		<ul>
		{
			this.state.AboutDatas.map((list,key) => {
				return (
				<li key={key}>
				<Link to={list.path}>{list.title}</Link>
				</li>
				)
			})
		}
		</ul>
		<ul>
		<li >
		<Route exact path='/about/' component={JianliComponent} />
		<Route  path='/about/jianli' component={ShezhiComponent} />
		</li>
		</ul>
		</div>
		)
	}
}

export default AboutComponent;