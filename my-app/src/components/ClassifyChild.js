import React from 'react'
import '../css/ClassifyChild.css'
import { Carousel } from 'antd';
import Img from '../images/714165_16259662_k3_2.gif'
import Img1 from '../images/slide_08.jpg'



export default class ClassifyChild extends React.Component{
	render(){
		const settings = {
		      dots: true,
		      infinite: true,
		      speed: 500,
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      autoplay: true
		    };
		return (
			<div className="ClassifyChild_box">
				<header>
					<i className="icon iconfont icon-jiankuohaocudazuo"></i>
			     		<h4>上衣</h4>
			     	<i className="icon iconfont icon-gouwuche"></i>					
				</header>
				<div className="ClassifyChild_shangyi">
					<div className="ClassifyChild_shangyi_box">
						<div className="ClassifyChild_shangyi_top">
							<div className="ClassifyChild_shangyi_list" style={{position: "relative"}}>
								<a href="" className="ClassifyChild_shangyi_left"></a>							    
								<a href="" style={{position: "absolute",top:"-0.2rem",left:"0.4rem"}}>新品10%</a>
								<a href="" style={{position: "absolute",top:"-0.2rem",left:"1.8rem"}}>上衣</a>
								<a href="" style={{position: "absolute",top:"-0.2rem",left:"2.6rem"}}>衬衫%罩衫</a>
								<a href="" style={{position: "absolute",top:"-0.2rem",left:"4.15rem"}}>外套</a>
								<a href="" style={{position: "absolute",top:"-0.2rem",left:"4.9rem"}}>半衣裙</a>
								<a href="" className="ClassifyChild_shangyi_right"></a>
							</div>
	                    	<h2 className="ClassifyChild_shangyi_class">
								上衣
							</h2>
							 <Carousel {...settings}>
							    <div className="ClassifyChild_shangyi_ban1"></div>
							    <div className="ClassifyChild_shangyi_ban2"></div>
							    <div className="ClassifyChild_shangyi_ban3"></div>
							    <div className="ClassifyChild_shangyi_ban4"></div>
							</Carousel>
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
								</div><div className="salelist">
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
						
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}
