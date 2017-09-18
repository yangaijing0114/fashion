import React from 'react'
import "../css/mine.css"
import login_title from "../images/login_title.gif"
import login_title2 from "../images/login_title2.gif"
import regist_title from "../images/reg_title.gif"
import regist_title2 from "../images/reg_title2.gif"
export default class Mine extends React.Component {

	render() {
		return (
			<div className="my">
				<header>
					<div className="my_head_bar">
						<a href="javascript:;" className="all">全部</a>
						<a href="javascript:;" className="search">搜索</a>
						<a href="javascript:;" className="cart">购物车</a>
						<a href="javascript:;" className="my">消息</a>
					</div>
					<ul className="my_nav">
						<li><a href="">男装</a><span>|</span></li>
						<li><a href="">女装</a><span>|</span></li>
						<li><a href="">美妆</a><span>|</span></li>
					</ul>
					<ul className='login'>
						<li className="login_button">
							<img src={login_title2} id="login_title2" onClick={this.change}/>
						</li>
        				<li>
        					<img src={regist_title} id="reg_title" onClick={this.change}/>
        				</li>
					</ul>
						
				</header>
			</div>
		)
	}
} 	