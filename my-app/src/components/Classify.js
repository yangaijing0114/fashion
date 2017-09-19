import React from 'react'
import "../css/Classify.css"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class Classify extends React.Component {
	render() {
		return (
			
		<div className="classify">
			<div className="card-container">
				<Tabs type="card">
			      <TabPane tab="女装" key="1">
			        <li><span>上衣<strong>TOP</strong></span><p>></p></li>
			    	<li><span>衬衫&罩衫<strong>SHIRTS & BLOUSE</strong></span><p>></p></li>
			    	<li><span>外套<strong>OUTER</strong></span><p>></p></li>
			    	<li><span>半身裙<strong>SKIRT</strong></span><p>></p></li>
			    	<li><span>连衣裙<strong>DRESS</strong></span><p>></p></li>
			    	<li><span>裤装<strong>PANTS</strong></span><p>></p></li>
			    	<li><span>鞋&包<strong>BAG & SHOES</strong></span><p>></p></li>
			    	<li><span>配饰<strong>ACC</strong></span><p>></p></li>
			    	<li><span>内衣<strong>INNER</strong></span><p>></p></li>
			    	<li><span>精品<strong>SUMMER</strong></span><p>></p></li>
			    	<li><span>运动装<strong>VAVI MELLO</strong></span><p>></p></li>
			    	
			    	
			      </TabPane>
			      <TabPane tab="男装" key="2">
			        <li><span>外套<strong>OUTER</strong></span><p>></p></li>
			    	<li><span>T恤衫<strong>T-SHIRTS & BLOUSE</strong></span><p>></p></li>
			    	<li><span>衬衫<strong>SHIRTS</strong></span><p>></p></li>
			    	<li><span>针织衫&开襟衫<strong>KNIT & CARDIGAN</strong></span><p>></p></li>
			    	<li><span>裤装<strong>PANTS</strong></span><p>></p></li>
			    	<li><span>鞋<strong>SHOES</strong></span><p>></p></li>
			    	<li><span>包<strong>BAG</strong></span><p>></p></li>
			    	<li><span>配饰<strong>ACC</strong></span><p>></p></li>
			    
			      </TabPane>
			      <TabPane tab="美妆" key="3">
			        <li><span>彩妆<strong>MAKE UP</strong></span><p>></p></li>
			    	<li><span>护肤<strong>SKIN CARE</strong></span><p>></p></li>
			    	<li><span>头发护理<strong>HAIR CARE</strong></span><p>></p></li>
			    	<li><span>身体护理<strong>BODY CARE</strong></span><p>></p></li>
			    	<li><span>工具<strong>TOOL</strong></span><p>></p></li>
			    	<li><span>香水/香薰<strong>PERFUME/CANDLE</strong></span><p>></p></li>
			    	<li><span>男士<strong>MEN</strong></span><p>></p></li>
			    	<li><span>生活<strong>LIFE</strong></span><p>></p></li>
			    
			      </TabPane>
			    </Tabs>
			</div>
		</div>
		)
	}
} 