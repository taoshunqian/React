import React,{ Component } from 'react';
import '../assets/css/header.css';
import {
  LeftOutlined,
} from '@ant-design/icons';
import { 
  Row, 
  Col, 
} from "antd";
import { setRouter,getHeaderTitle } from '../utils/utils';
const twoToneColor = {
	color:'#000000'
}

class HeaderComponent extends Component {
	constructor(porps) {
	    super(porps);
		this.state = {
			style: {
				backgroundColor: porps['backgroundColor'] === '' || porps['backgroundColor'] !== '#ffffff' ? porps['backgroundColor'] : '#ffffff',
				color: porps['color'] === '' || porps['color'] !== '#ffffff' ? porps['color'] : '#ffffff',
			},
			activeTitle:porps['activeTitle'],
			leftOut:setRouter(porps['FooyterDatas']),
		};
	}
	static getHeaderTitle () {
		var x = new getHeaderTitle();
		console.log(x);
		return x;
	}
	componentWillMount() {
	}
	componentDidMount() {
	    // console.log("componentDidMount-组件完全挂载")
	}
	componentWillReceiveProps(newProps) {
		if(typeof newProps['activeTitle'] === 'string') {
			this.setState({
				activeTitle:newProps['activeTitle']
			})
		}
	}
	render() {
		let leftOut;
		if(this.state.leftOut) {
			leftOut = ('')
		}else {
			leftOut = (
			<LeftOutlined/>
			)
		}
		return (
		<div className="header" style={this.state.style}>
		<Row>
		      <Col className="gutter-row" span={2}>
		        <div className="leftHeader">
		        {leftOut}
		        </div>
		      </Col>
		      <Col className="gutter-row"  span={14} offset={3}>
		        <div className="headerTitle">{this.state.activeTitle}</div>
		      </Col>
		</Row>
		</div>	
		)
	}
}

export default HeaderComponent;