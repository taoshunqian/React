import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './Async.js';
import { Spin } from "antd";
import '../assets/css/footer.css';
import logo from '../assets/image/footer/logo.svg';
import HeaderComponent from './Header.js';
import { setHeaderTitle, getHeaderTitle } from '../utils/utils';

// 路由
const HomeComponent = asyncComponent(() => import('../views/Home/Home'));
const AboutComponent = asyncComponent(() => import('../views/About/About'));
const MyComponent = asyncComponent(() => import('../views/My/My'));
const ProductComponent = asyncComponent(() => import('../views/Product/Product'));

class FooterComponent extends Component {
	constructor(porps) {
	    super(porps);
		this.state = {
			backgroundColor:'#ffffff',
			loading:false,
			color:'#000000',
			activeDome:'',
			activeTitle:'首页',
			FooyterDatas: [{
				id:1,
				title:'首页',
				to:HomeComponent,
				path:'/home',
				active:true,
			},{
				id:2,
				title:'关于',
				to:AboutComponent,
				path:'/about',
				active:false,
			},{
				id:4,
				title:'产品中心',
				to:ProductComponent,
				path:'/product',
				active:false,
			},{
				id:3,
				title:'我的',
				to:MyComponent,
				path:'/my',
				active:false,
			}]
		}
	}
	static setHeaderTitle (name) {
		var x = new setHeaderTitle(name);
		return x;
	}
	componentWillMount() {
	}
	componentWillReceiveProps(newprops) {
		this.setState({
			activeDome : newprops['location']['pathname'],
			loading:false
		});
		FooterComponent.setHeaderTitle(this.state.activeTitle)
	}
	goPage(path) {
		if(typeof this.state.activeDome === 'string' && this.state.activeDome === path) {
			return false;
		}
		this.setState({
			loading:true
		})
		this.props.history.replace(path);
		this.state.FooyterDatas.forEach((item,index) => {
			if(item['path'] === path) {
				item['active'] = true;
				
				this.setState({
					activeTitle:item['title'],
				})
			}else {
				item['active'] = false
			}
		})
		
	}
	render() {
		return (
		<div>
		<div>
		<HeaderComponent backgroundColor={this.state.backgroundColor} color={this.state.color} activeTitle={this.state.activeTitle} FooyterDatas={this.state.FooyterDatas}/>
		</div>
		<div className="seizeAseat"></div>
		<Spin spinning={this.state.loading} delay={500}>
		     <div className="footerBottom">
		     	<React.Fragment>
		     	  <Switch>
		     	  <Route path={"/home"} component={HomeComponent}></Route>
		     	  <Route path={"/about"} component={AboutComponent}></Route>
		     	  <Route path={"/my"} component={MyComponent}></Route>
		     	  <Route path={"/product"} component={ProductComponent}></Route>
		     	  </Switch>
		     	</React.Fragment>	
				
		     </div>     
		</Spin>
		
			
		<div className="footer">
			<ul>
			{
				this.state.FooyterDatas.map((list,key) => {
					return (
					<li key={key}  onClick={this.goPage.bind(this,list.path)}>
					<div className="logo">
					<img src={logo} className={ list.active ? 'activeImg' : '' }></img>
					</div>
					<span className={ list.active ? 'active' : '' }>{list.title}</span>
					</li>
					)
				})
			}
			</ul>
			</div>
			
		</div>
		)
	}
	
}
export default FooterComponent;