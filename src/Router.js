import React,{ Component } from 'react';
import { HashRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import asyncComponent from './components/Async';
const FooterComponent = asyncComponent(() => import('./components/Footer'));
const NothingComponents =  asyncComponent(() => import('./views/404'));

class RouterComponent extends Component {
	render() {
		return (
		<React.Fragment>
		<Router>
		<Switch>
		<Route path="/" component={FooterComponent} />
		// <Route path="*" component={NothingComponents} />
		</Switch>
		<Redirect from="/*" to={'/home'}></Redirect>
		</Router>
		</React.Fragment>
		)
	}
}

export default RouterComponent;