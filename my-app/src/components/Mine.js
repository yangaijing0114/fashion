import React from 'react'
import "../css/mine.css"
import login_title from "../images/login_title.gif"
import login_title2 from "../images/login_title2.gif"
import regist_title from "../images/reg_title.gif"
import regist_title2 from "../images/reg_title2.gif"
export default class Mine extends React.Component {
//	constructor() {
//		// 必须在第一行执行父类构造器！！！！
//		super();
//		//在构造器中初始化state
//		this.state = {list: []};
//		this.change = this.change.bind(this);
//	}
//	change() {
//		this.state.list.push(this.refs.ipt.value);
//		console.log(this.state.list);
//
//		this.setState({
//			list: this.state.list
//		})
//	}
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