import React from 'react'
import '../css/home.css';
export default class Detail extends React.Component {
	render() {
		return (
			<div>
				<header>
					<div className="head_bar">
						<a href="javascript:;" className="all">全部</a>
						<a href="javascript:;" className="search">搜索</a>
						<a href="javascript:;" className="cart">购物车</a>
						<a href="javascript:;" className="my">消息</a>
					</div>
					<ul className="nav">
						<li><a href="">男装</a></li>
						<li><a href="">女装</a></li>
						<li><a href="">美妆</a></li>
					</ul>
				</header>
			</div>
		)
	}
}