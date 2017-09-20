import React from 'react'


import '../css/home.css';

import { Carousel } from 'antd';
import Img from '../images/714165_16259662_k3_2.gif'
import Img1 from '../images/slide_08.jpg'

export default class Detail extends React.Component {
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
					</div>
					
					
					
					
					<h2 className="main_class">
						<strong>New  </strong>
						Arrivals
					</h2>
					<div className="list_body">
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
					</div>
					
					
					
					<h2 className="main_class">
						<strong>Weekly  </strong>
						Best
					</h2>
					<div className="list_body">
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