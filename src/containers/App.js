import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as classNames from 'classnames/bind'
import Header from '../components/Header/Header'
import Main from './Main/Main'
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
          <Route path="/login" exact component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App
