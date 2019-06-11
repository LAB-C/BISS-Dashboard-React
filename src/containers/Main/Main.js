import React, { Component } from 'react'
import * as classNames from 'classnames/bind'

import Graph from '../../components/Graph/Graph'
import List from '../../components/List/List'

import device from '../../assets/db/device.json'
import sensor from '../../assets/db/sensor.json'
import node from '../../assets/db/node.json'
import hash from '../../assets/db/hash.json'

import ic_android from '../../assets/images/ic_android.png'
import ic_arduino from '../../assets/images/ic_arduino.png'
import ic_blockchain from '../../assets/images/ic_blockchain.png'
import ic_transaction from '../../assets/images/ic_transaction.png'

import data from '../../assets/db/graph.json'

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
                <Graph data={data} />
            </div>
            <div>
              <List item={sensor} user="고태건" header="님의 센서 목록" img={ic_arduino} type="sensor" />
            </div>
          </div>
          <div>
            <div>
              <List item={device} user="고태건" header="님의 디바이스 목록" img={ic_android} type="device" />
            </div>
            <div>
              <List item={node} user="고태건" header="님의 노드 목록" img={ic_blockchain} type="node" />
            </div>
            <div>
              <List item={hash} user="A" header='장치의 트렌젝션' img={ic_transaction} type="tran" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App
