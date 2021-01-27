import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductComponents extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			productDatas:[{
				id:1,
				title:'产品名称1'
			},{
				id:2,
				title:'产品名称2'
			},{
				id:3,
				title:'产品名称3'
			}]
		}
	}
	render() {
		return (
		<div>
		<h2></h2>
		<ul>
		</ul>
		{
			this.state.productDatas.map((list,key) => {
				return (
				<li key={key}>
                 <Link to={`/productDetails/${list.id}`}>{list.title}</Link>
				</li>
				)
			})
		}
		</div>
		)
	}
}

export default ProductComponents;