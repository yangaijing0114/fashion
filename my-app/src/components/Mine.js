import React from 'react'
import "../css/mine.css"

import img_user from "../images/login_user.gif"
import img_pwd from "../images/login_psw.gif"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class Mine extends React.Component {
	constructor(){
		super();
		this.change = this.change.bind(this)
		this.judgeEmail = this.judgeEmail.bind(this)
		this.judgePass = this.judgePass.bind(this)
		this.judgePass2 = this.judgePass2.bind(this)
		this.judgeName = this.judgeName.bind(this)
		this.change = this.change.bind(this)
		this.judgePhone = this.judgePhone.bind(this)

	}
	judgeEmail(){
		var ema = this.refs.email.value
		if(!ema){
			this.refs.judged.innerHTML="邮箱不能为空";
		}else if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(ema))){
			this.refs.judged.innerHTML="邮箱格式错误"
		}else{
			this.refs.judged.innerHTML=""
		}
		
	}
	judgePass(){
		var pas = this.refs.pass.value
		if(!pas){
			this.refs.judged.innerHTML="密码不能为空";
		}else if(pas.length<6){
			this.refs.judged.innerHTML="密码太短啦，不足六个字符"
		}else if(pas.length > 16){
			this.refs.judged.innerHTML="密码太长了啦，不能超过16个字符"
		}else if(!(/^[0-9a-zA-Z]{6,16}$/.test(pas)) || !(/\d/g.test(pas)) || !(/[a-z]/gi.test(pas))){
			this.refs.judged.innerHTML="请使用字母、数字组合的字符"
		}else{
			this.refs.judged.innerHTML=""
		}
	}
	judgePass2(){
		var pas2 = this.refs.pass2.value
		if(!pas2){
			this.refs.judged.innerHTML="确认密码不能为空"			
		}
		else if(! (pas2 == this.refs.pass.value)){
			this.refs.judged.innerHTML="确认密码不一致";
		}
		else{
			this.refs.judged.innerHTML=""
		}
	}
	judgeName(){
		var name = this.refs.username.value
		if(!name){
			this.refs.judged.innerHTML="用户名不能为空"			
		}
		else if(!(/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){5,19}$/.test(name))){
			this.refs.judged.innerHTML="用户名只能由英文字母a～z(不区分大小写)、数字0～9、下划线组成";
		}
		else{
			this.refs.judged.innerHTML=""
		}
	}
	judgePhone(){
		var phone = this.refs.phone.value
		if(!phone){
			this.refs.judged.innerHTML="手机号不能为空"			
		}
		else if(!(/^1[3578]\d{9}$/.test(phone))){
			this.refs.judged.innerHTML="手机号码格式错误";
		}
		else{
			this.refs.judged.innerHTML=""
		}
	}
	change(){		
	    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
	    var str = "";
        for(var i = 0 ; i < 4 ; i ++ ){
            str += arr[Math.floor(Math.random() * arr.length)];
        }
       	this.refs.random.innerHTML=str;
       	
	}

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
					 <div className="card-container">
					    <Tabs type="card">
					      <TabPane tab="登录" key="1">
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
					      <TabPane tab="注册" key="2">
					        <div className="tab2_conent">				    		
					    		<p className="log">
					    			User Join
					    		</p>
					    		
					    		<span style={{top:"0.7rem"}}>电子邮件</span>
					    		<input type="text" id="email" ref="email" onBlur={this.judgeEmail}/>
					    		<span style={{top:"1.35rem"}}>密码</span>
					    		<input type="text" id="pass" ref="pass" onBlur={this.judgePass}/>
					    		<span style={{top:"2rem"}}>确认密码</span>
					    		<input type="text" id="pass" ref="pass2" onBlur={this.judgePass2}/>
					    		<span style={{top:"2.65rem"}}>用户名</span>
					    		<input type="text" id="username" ref="username" onBlur={this.judgeName}/>
					    		<span style={{top:"3.3rem"}}>性别</span>
					    		<input id="sex"/>
					    		<div className="sex">
					    			<input type="radio" name="sex"/>
					    			<span>男</span>
					    			<input type="radio" name="sex"/>
					    			<span>女</span>
					    		</div>
					    		<span style={{top:"3.95rem"}}>手机号</span>
					    		<input type="text" id="phone" ref="phone" onBlur={this.judgePhone}/>
					    		<span style={{top:"4.6rem"}}>验证码</span>
					    		<input id="verify"/>
					    		<p id="ver_rand" ref="random" onClick={this.change}>
					    			
					    		</p>
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
					    	<p className="judged" ref="judged"></p>
					      </TabPane>
					    </Tabs>
					  </div>


						
				</header>
				
			</div>
		)
	}
} 	