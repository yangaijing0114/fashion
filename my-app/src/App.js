import React from 'react';
import './App.css'
import './css/home.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { DatePicker, message } from 'antd';

import Home from './components/Home'
import Classify from './components/Classify'
import Shopcart from './components/Shopcart'
import Mine from './components/Mine'
import ClassifyChild from './components/ClassifyChild'

const App = () => (
  <Router>
    <div className="app">
    	<div className="conent">
	    	<Route exact path="/" component={Home}/>
	      <Route path="/classify" component={Classify}/>
	      <Route path="/shopcart" component={Shopcart}/>	
	      <Route path="/mine" component={Mine}/>
<<<<<<< HEAD
	      
=======
	      <Route path="/classifyChild" component={ClassifyChild}/>
>>>>>>> a63ecff9589ac8d4b5a1bbe9d350d1d998261826
    	</div>
      <ul className="nav">
        <li><i className="icon iconfont icon-shouye"></i><Link to="/">首页</Link></li>
        <li><i className="icon iconfont icon-fenlei"></i><Link to="/classify">分类</Link></li>
        <li><i className="icon iconfont icon-gouwuche"></i><Link to="/shopcart">购物车</Link></li>
        <li><i className="icon iconfont icon-wode"></i><a href="/mine">我的</a></li>
      </ul>      
    </div>
  </Router>
)
export default App;
