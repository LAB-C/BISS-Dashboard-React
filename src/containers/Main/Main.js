import React, { Component } from 'react'
import * as classNames from 'classnames/bind'

import Graph from '../../components/Graph/Graph'
import List from '../../components/List/List'

import device from '../../assets/db/device.json'
import sensor from '../../assets/db/sensor.json'
import node from '../../assets/db/node.json'
import hash from '../../assets/db/hash.json'

import styles from './Main.scss';

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('Main')}>
        <h1>대시보드 <span>Dashboard</span></h1>
        <div>
          <div>
            <div>
              <Graph/>
            </div>
            <div>
              {/* <List item={sensor}/> */}
            </div>
          </div>
          <div>
            <div>
              <List item={device} header="고태건님의 디바이스 목록"/>
            </div>
            <div>
              <List item={node} header="고태건님의 노드 목록"/>
            </div>
            <div>
              <List item={hash} header='"A" 장치의 트렌젝션' />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App
