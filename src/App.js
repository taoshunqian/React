import logo from './logo.svg';
import { Button, DatePicker, version, Tooltip } from "antd";
import "antd/dist/antd.css";
import './App.css';
// import Routers from './Router';
// import { SearchOutlined } from '@ant-design/icons';
import HomeComponents from './views/Home/Home';
import MyComponents from './views/My/My';
import ProductComponents from './views/Product/Product';
import ProductDetailsComponents from './views/ProductDetails/ProductDetails';
import AboutComponent from './views/About/About';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
	<div>
	<header>
	<NavLink to="/home" activeClassName="nav-active">首页组件</NavLink>
	<NavLink to="/my" activeClassName="nav-active">个人组件</NavLink>
	<NavLink to="/product" activeClassName="nav-active">产品中心</NavLink>
	<NavLink to="/about" activeClassName="nav-active">设置</NavLink>
	</header>
	
	
	<Route path="/home" component={HomeComponents}></Route>
	<Route path="/my" component={MyComponents}></Route>
	<Route path="/product" component={ProductComponents}></Route>
	<Route path="/productDetails/:id" component={ProductDetailsComponents}></Route>
	<Route path="/about" component={AboutComponent}></Route>
	
	<Redirect from="/*" to="/home"></Redirect>
	
	</div>
	</Router>
  );
}

export default App;
