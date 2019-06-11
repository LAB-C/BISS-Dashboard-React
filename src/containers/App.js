import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as classNames from 'classnames/bind'
import Header from '../components/Header/Header'
import Main from './Main/Main'
import Node from './Node/Node'
import Sensor from './Sensor/Sensor'
import Device from './Device/Device'
import Transaction from './Tran/Tran'
import Login from './Login/Login'

import styles from './App.scss';
const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/sensor=:id" exact component={Sensor} />
          <Route path="/node=:id" exact component={Node} />
          <Route path="/device=:id" exact component={Device} />
          <Route path="/tran=:id" exact component={Transaction} />
          <Route path="/login" exact component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App
