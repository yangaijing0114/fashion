import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '../css/home.css';

<<<<<<< HEAD
import { Carousel } from 'antd';

import Img1 from '../images/slide_08.jpg'
import {Link} from 'react-router-dom'

export default class Detail extends React.Component {
	

	    constructor(){
			super();
			this.state = {
				Goods : []
			}
		}

		componentDidMount(){
			
			fetch("/api/getdata").then((res) => {
			 	return res.json();
			 }).then((data)=>{
			 	console.log(data)
			 	this.setState({ //让页面上数据更新
			 		Goods: data
			 	})
			 })	
		}





render() {
	    const settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      autoplay: true
	    };

		return (
			<div>
=======
import { Carousel, Menu, Icon, Button } from 'antd';
import Img from '../images/714165_16259662_k3_2.gif'
import Img1 from '../images/slide_08.jpg'
const SubMenu = Menu.SubMenu;
export default class Home extends React.Component {
	constructor(){
		super();
		this.toggleCollapsed = this.toggleCollapsed.bind(this)
	}
	  state = {
	    collapsed: false,
	  }
	  toggleCollapsed = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	  }

	render() {
		    const settings = {
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      autoplay: true
		    };
		return (
			<div className="home">				
				 <div style={{ width: 240 }} className="sidebar ">
			        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
			          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
			        </Button>
			        <Menu
			          defaultSelectedKeys={['1']}
			          defaultOpenKeys={['sub1']}
			          mode="inline"
			          theme="dark"
			          inlineCollapsed={this.state.collapsed}
			        >
			          <Menu.Item key="1">
			            <Icon type="pie-chart" />
			            <span>Option 1</span>
			          </Menu.Item>
			          <Menu.Item key="2">
			            <Icon type="desktop" />
			            <span>Option 2</span>
			          </Menu.Item>
			          <Menu.Item key="3">
			            <Icon type="inbox" />
			            <span>Option 3</span>
			          </Menu.Item>
			          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
			            <Menu.Item key="5">Option 5</Menu.Item>
			            <Menu.Item key="6">Option 6</Menu.Item>
			            <Menu.Item key="7">Option 7</Menu.Item>
			            <Menu.Item key="8">Option 8</Menu.Item>
			          </SubMenu>
			          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
			            <Menu.Item key="9">Option 9</Menu.Item>
			            <Menu.Item key="10">Option 10</Menu.Item>
			            <SubMenu key="sub3" title="Submenu">
			              <Menu.Item key="11">Option 11</Menu.Item>
			              <Menu.Item key="12">Option 12</Menu.Item>
			            </SubMenu>
			          </SubMenu>
			        </Menu>
			      </div>
>>>>>>> b0b78b85d5e6a96891f9154350afee812d0aa889
				<header>
					<div className="head_bar">
						<a href="javascript:;" className="all">全部</a>
						<a href="javascript:;" className="search">搜索</a>
						<a href="javascript:;" className="cart">购物车</a>
						<a href="javascript:;" className="my">消息</a>
					</div>
					<ul className="head_nav">
						<li><a href="">男装</a></li>
						<li><a href="">女装</a></li>
						<li><a href="">美妆</a></li>
					</ul>	
				</header>
				<main>
					<div className="main_nav">
						<a href="" className="left"></a>
						<a href="" className="right"></a>
						<div className="main_list" style={{position: "relative"}}>
							<a href="" style={{position: "absolute",top:"-0.2rem",left:"0.4rem"}}>新品10%</a>
							<a href="" style={{position: "absolute",top:"-0.2rem",left:"1.8rem"}}>上衣</a>
							<a href="" style={{position: "absolute",top:"-0.2rem",left:"2.6rem"}}>衬衫%罩衫</a>
							<a href="" style={{position: "absolute",top:"-0.2rem",left:"4.15rem"}}>外套</a>
							<a href="" style={{position: "absolute",top:"-0.2rem",left:"4.9rem"}}>半衣裙</a>
						</div>
					</div>
					<Carousel {...settings}>
							    <div className="head_ban1"></div>
							    <div className="head_ban2"></div>
							    <div className="head_ban3"></div>
							    <div className="head_ban4"></div>
					</Carousel>
					<h2 className="main_class">
						<strong>Best  </strong>
						Seller
					</h2>
					<div className="list_body">
<<<<<<< HEAD
						{
							this.state.Goods.map((item,index) => {
								return  <Link to ={"/detail/"+ item._id }  key={item._id} className="salelist">
											<div className="list_shopImg">
													<img src={item.img} style={{border:"0",width:"100%"}} alt=""/>
											</div>
											<div className="list_shopName">									
												{item.explain}					
											</div>
											<div className="list_shopPrice">
												{item.presentprice}	
											</div>		
										</Link>
							})
						}
=======
						<div className="salelist">
							<div className="list_shopImg">

						
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								
							
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
							
						</div>
						<div className="salelist">
							<div className="list_shopImg">
								<a href="">
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								</a>
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
						</div>
						<div className="salelist">
							<div className="list_shopImg">
								<a href="">
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								</a>
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
						</div>
						<div className="salelist">
							<div className="list_shopImg">
								<a href="">
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								</a>
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
						</div>
						<div className="salelist">
							<div className="list_shopImg">
								<a href="">
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								</a>
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
						</div>
						<div className="salelist">
							<div className="list_shopImg">
								<a href="">
									<img src={Img} style={{border:"0",width:"100%"}} alt=""/>
								</a>
							</div>
							<div className="list_shopName">
								<a href="">
									★难得的机会★ 弹力~~完全舒适的裤子
								</a>
							</div>
							<div className="list_shopPrice">
								<a href="">
									¥ 129
								</a>
							</div>
						</div>
>>>>>>> b0b78b85d5e6a96891f9154350afee812d0aa889
					</div>
					
					
					
					<h2 className="main_class">
						<strong>New  </strong>
						Arrivals
					</h2>
					<div className="list_body">
						{
							this.state.Goods.map((item,index) => {
								return  <Link to ={"/detail/"+ item._id }  key={item._id} className="salelist">
											<div className="list_shopImg">
													<img src={item.img} style={{border:"0",width:"100%"}} alt=""/>
											</div>
											<div className="list_shopName">									
												{item.explain}					
											</div>
											<div className="list_shopPrice">
												{item.presentprice}	
											</div>		
										</Link>
							})
						}
					</div>
					
					
					
					<h2 className="main_class">
						<strong>Weekly  </strong>
						Best
					</h2>
					<div className="list_body">
						{
							this.state.Goods.map((item,index) => {
								return  <Link to ={"/detail/"+ item._id }  key={item._id} className="salelist">
											<div className="list_shopImg">
													<img src={item.img} style={{border:"0",width:"100%"}} alt=""/>
											</div>
											<div className="list_shopName">									
												{item.explain}					
											</div>
											<div className="list_shopPrice">
												{item.presentprice}	
											</div>		
										</Link>
							})
						}
					</div>
					
					
					<div>
						<a href="">
							<img src={Img1}  style={{border:"0",width:"100%",margin:"0 0 1.2rem 0"}} alt=""/>		
						</a>
					</div>
				</main>	
		
				
			</div>
		)
	}
}