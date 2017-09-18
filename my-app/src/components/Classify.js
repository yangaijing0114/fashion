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
			<div className="card-container">
				<Tabs type="card">
			      <TabPane tab="男装" key="1">
			        <p>Content of Tab Pane 1</p>
			        <p>Content of Tab Pane 1</p>
			        <p>Content of Tab Pane 1</p>
			      </TabPane>
			      <TabPane tab="女装" key="2">
			        <p>Content of Tab Pane 2</p>
			        <p>Content of Tab Pane 2</p>
			        <p>Content of Tab Pane 2</p>
			      </TabPane>
			      <TabPane tab="美妆" key="3">
			        <p>Content of Tab Pane 3</p>
			        <p>Content of Tab Pane 3</p>
			        <p>Content of Tab Pane 3</p>
			      </TabPane>
			    </Tabs>
			</div>
		)
	}
} 