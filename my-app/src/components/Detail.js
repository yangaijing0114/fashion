import React from 'react'
import '../css/home.css';
export default class Detail extends React.Component {
	
	constructor(){
		super();
		this.state = {
			Goods : [],
			Goods_name :[],
			Goods_img:[],
 			Goods_detail1:[],
 			Goods_detail2:[],
 			Goods_primecost:[],
 			Goods_presentprice:[]
		}
	}
	
	
	componentDidMount(){

		let data;

		fetch("/api/getdata").then((res) => {
//			console.log(res)
		 	return res.json();
		 }).then((_data)=>{
//		 	console.log(data)
			setTimeout(()=>{
				for (var i = 0; i <_data.length; i++) {
					if (_data[i]._id === this.props.match.params.id) {
						data= _data[i];
					
					
						setTimeout(() => {
							this.setState({ //让页面上数据更新
					 			Goods: data,
					 			Goods_name: data.explain,
					 			Goods_img:data.img,
					 			Goods_detail1:data.detail1,
					 			Goods_detail2:data.detail2,
					 			Goods_primecost:data.primecost,
					 			Goods_presentprice:data.presentprice
					 		})	
						},0)
					}
				}
			},0)
		 	
		 })
		 
	}
	
	
	render() {
		console.log(this.state.Goods)
		console.log(this.props.match.params.id)
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
				</main>
				
				<div>
					<img src={this.state.Goods_img} />
					<p>{this.state.Goods_name}</p>
					<p>{this.state.Goods_primecost}</p>
					<p>{this.state.Goods_presentprice}</p>
					<img src={this.state.Goods_detail1} />
					<img src={this.state.Goods_detail2} />
				</div>		
			</div>
		)
	}
} 