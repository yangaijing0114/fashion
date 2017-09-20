import React from 'react';
import "../css/Shopcart.css";
import img_shop from '../images/cart_step.jpg'
import img_yifu from '../images/yifu.jpg'


export default class Shopcart extends React.Component {
	render() {
		return (
			<div className="shop_box">
			    <div className="shop_top">
			     	<i className="icon iconfont icon-jiankuohaocudazuo"></i>
			     	<strong>我的购物车</strong>
			     	<i className="icon iconfont icon-gouwuche"></i>
			    
			    </div>

			    <img src={img_shop} className="stop_shop"/>
			    <div className="shop_bottom">
			    	<ul className="shop_btm_box">
			    	  <div className="shop_btm_box_pi">
			    		<li className="shop_btm_li1">
			    		    
			    		    <h5><input type="checkbox" name="" id="" value=""/>活动商品</h5>
			    		    <span>共<strong>2</strong>件</span>
			    		</li>
			    		<li className="shop_btm_li2">			    			
			    			<h6><input type="checkbox" name="" id="" value=""/><span>活动</span></h6>
			    			<b>亲~在购买73元活动可享受8/5折优惠</b>
			    		</li>
			    		<li className="shop_btm_li3_shop">
			    		    <input type="checkbox" name="" id="" value=""/>
			    		    <img src={img_yifu} className="stop_yifu"/>
			    		    <div className="shop_btm_shop_right">
			    		    	<p>asdfasfsafasafasewar</p>
			    		    	<p  className="shop_btm_p2">3213241234124312</p>
			    		    	<div  className="shop_btm_jiage">
			    		    		<div className="shop_btm_suanshi">
			    		    			<input type="button" name="" id="jian" value="-"/>
				    		    		<span>1</span>
				    		    		<input type="button" name="" id="jia" value="+"/>
			    		    		</div>
			    		    		<div className="shop_btm_shuoming">
			    		    		         <b>0%/游客</b>
			    		    		    <br/>
			    		    		    <span>原价110</span>
			    		    		    <strong>现价110</strong>	
			    		    		</div>
			    		    		
			    		    	</div>
			    		    	
			    		        
			    		    </div>
			    		</li>
			    		<li  className="shop_btm_li4">
			    			<div className="shop_btm_shop_mingxibiao">
			    		    	<p>活动商品金额(<span>1</span>)</p>
			    		    	<p>+美妆商品金额(<span>1</span>)</p>
			    		    	<p>-会员优惠(<span>1</span>)</p>
			    		    	<p>=支付今额小计(<span>1</span>)</p>			    		    
			    		    </div>			    		
			    		</li>
			    		</div>
			    			  <div className="shop_btm_box_pi">
			    		<li className="shop_btm_li1">
			    		    
			    		    <h5><input type="checkbox" name="" id="" value=""/>活动商品</h5>
			    		    <span>共<strong>2</strong>件</span>
			    		</li>
			    		<li className="shop_btm_li2">			    			
			    			<h6><input type="checkbox" name="" id="" value=""/><span>活动</span></h6>
			    			<b>亲~在购买73元活动可享受8/5折优惠</b>
			    		</li>
			    		<li className="shop_btm_li3_shop">
			    		    <input type="checkbox" name="" id="" value=""/>
			    		    <img src={img_yifu} className="stop_yifu"/>
			    		    <div className="shop_btm_shop_right">
			    		    	<p>asdfasfsafasafasewar</p>
			    		    	<p  className="shop_btm_p2">3213241234124312</p>
			    		    	<div  className="shop_btm_jiage">
			    		    		<div className="shop_btm_suanshi">
			    		    			<input type="button" name="" id="jian" value="-"/>
				    		    		<span>1</span>
				    		    		<input type="button" name="" id="jia" value="+"/>
			    		    		</div>
			    		    		<div className="shop_btm_shuoming">
			    		    		         <b>0%/游客</b>
			    		    		    <br/>
			    		    		    <span>原价110</span>
			    		    		    <strong>现价110</strong>	
			    		    		</div>
			    		    		
			    		    	</div>
			    		    	
			    		        
			    		    </div>
			    		</li>
			    		<li  className="shop_btm_li4">
			    			<div className="shop_btm_shop_mingxibiao">
			    		    	<p>活动商品金额(<span>1</span>)</p>
			    		    	<p>+美妆商品金额(<span>1</span>)</p>
			    		    	<p>-会员优惠(<span>1</span>)</p>
			    		    	<p>=支付今额小计(<span>1</span>)</p>			    		    
			    		    </div>			    		
			    		</li>
			    		</div>
			    		<li className="shop_botm_zongjia">
			    			<div className="shop_botm_zj_qubu">			    		    	
			    		        <span><input type="checkbox" name=""  value=""/>全选</span>
			    		        <div className="shop_botm_zj_qubu_heji">
			    		        	总计(<strong>¥222</strong>)
			    		        	<br/>
			    		        	(不含运费)
			    		        </div>
			    		    </div>
			    		    <button>
			    		    	结算
			    		    </button>
			    		</li>
			    	</ul>
			    	
			    		    
			    </div>			
			</div>
		)
	}
} 