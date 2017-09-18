import React from 'react'
import "../css/mine.css"
//import login_title from "../images/login_title.gif"
//import login_title2 from "../images/login_title2.gif"
//import regist_title from "../images/reg_title.gif"
//import regist_title2 from "../images/reg_title2.gif"
import img_user from "../images/login_user.gif"
import img_pwd from "../images/login_psw.gif"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
	console.log(key);

}
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
					<Tabs onChange={callback} type="card" className="tabs">
					    <TabPane tab="" key="1" id="tab1">
					    	<div className="tab_conent">				    		
					    		<p className="log">
					    			User Login
					    		</p>
					    		<img src={img_user} className="user"/>
					    		<input id="name"/>
					    		<img src={img_pwd} className="pwd"/>
					    		<input id="psw"/>
						    	<div className="con">
						    		<p>
						    			<input type="checkbox"/>
						    			<span>一个月内免费登录</span>
						    		</p>
						    		<p>
						    			<input type="checkbox"/>
						    			<span>忘记密码</span>
						    		</p>	
						    		<button>登录</button>
						    	</div>
					    	</div>
					    </TabPane>
					    <TabPane tab="" key="2" id="tab2">
					    	<div className="tab2_conent">				    		
					    		<p className="log">
					    			User Join
					    		</p>
					    		<span style={{top:"1.9rem"}}>电子邮件</span>
					    		<input id="email"/>
					    		<span style={{top:"2.4rem"}}>密码</span>
					    		<input id="pass"/>
					    		<span style={{top:"2.9rem"}}>确认密码</span>
					    		<input id="pass"/>
					    		<span style={{top:"3.4rem"}}>用户名</span>
					    		<input id="pass"/>
					    		<span style={{top:"3.9rem"}}>性别</span>
					    		<input id="pass"/>
					    		<span style={{top:"4.4rem"}}>手机号</span>
					    		<input id="pass"/>
					    		<span style={{top:"4.9rem"}}>验证码</span>
					    		<input id="pass"/>
						    	<div className="con">
						    		<p>
						    			*注册即送100元现金礼包*
						    		</p>
						    		
						    		<p className="xieyi">
						    			<input type="checkbox"/>
						    			我已阅读并同意《时尚起义用户使用条款》
						    		</p>
						    		
						    		<button>注册</button>
						    	</div>
					    	</div>
					    </TabPane>
					</Tabs>

						
				</header>
			</div>
		)
	}
} 	