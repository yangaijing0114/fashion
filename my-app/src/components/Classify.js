import React from 'react'
import "../css/Classify.css"

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
export default class Classify extends React.Component {
	render() {
		return (
			<div className="classify_box">
					 <Tabs onChange={callback} type="card">
					    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
					    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
					    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
					  </Tabs>
			
			</div>
		)
	}
} 