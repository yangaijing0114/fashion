import React from 'react'
import "../css/Classify.css"
export default class Classify extends React.Component {
	render() {
		return (
			<div className="classify_box">
				<div className="classify_top">
				    <ol>
				    	<li>男装</li>
				    	<li>女装</li>
				    	<li>美妆</li>
				    </ol>
				</div>
					<ul className="classify_bottom">
					    <div className="classify_title"><a>新品</a><a>一周爆款</a><a>热卖商品</a><a>最佳口碑</a></div>
				    	<li><span>上衣<strong>TOP</strong></span><p>></p></li>
				    	<li><span>衬衫&罩衫<strong>SHIRTS & BLOUSE</strong></span><p>></p></li>
				    	<li><span>外套<strong>OUTER</strong></span><p>></p></li>
				    	<li><span>半身裙<strong>SKIRT</strong></span><p>></p></li>
				    	<li><span>连衣裙<strong>DRESS</strong></span><p>></p></li>
				    	<li><span>裤装<strong>PANTS</strong></span><p>></p></li>
				    	<li><span>鞋&包<strong>BAG & SHOES</strong></span><p>></p></li>
				    	<li><span>配饰<strong>ACC</strong></span><p>></p></li>
				    	<li><span>内衣<strong>INNER</strong></span><p>></p></li>
				    	<li><span>连衣裙<strong>DRESS</strong></span><p>></p></li>
				    	<li><span>裤装<strong>PANTS</strong></span><p>></p></li>
				    	<li><span>鞋&包<strong>BAG & SHOES</strong></span><p>></p></li>
				    	<li><span>配饰<strong>ACC</strong></span><p>></p></li>
				    	<li><span>内衣<strong>INNER</strong></span><p>></p></li>
				    </ul>		
			</div>
		)
	}
} 