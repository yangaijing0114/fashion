import React from 'react';
import "../css/Shopcart.css";
import img_shop from '../images/cart_step.jpg'


export default class Shopcart extends React.Component {
	render() {
		return (
			<div>
			    <div>
			     	<span></span>
			     	<strong>我的购物车</strong>
			    
			    </div>
			    <img src={img_shop} className="stop_shop"/>
				
			
			
			</div>
		)
	}
} 