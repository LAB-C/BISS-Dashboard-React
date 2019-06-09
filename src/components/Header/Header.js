import React, { Component } from 'react'
import * as classNames from 'classnames/bind'

import styles from './Header.scss';

import logo from '../../assets/images/ic-logo.svg'
import profile from '../../assets/images/profile.png'

const cx = classNames.bind(styles)

export default class Header extends Component {
  render () {
    return (
      <nav id={cx("Header")}>
        <ul>
          <li>
            <a href='/'>
              <img src={logo} id='logo' alt='BISS' />
            </a>
            <div />
          </li>
          <li>
            <div>
              <div src={profile} alt="profile" />
              <div>
                <div>
                  <span>고태건</span>( gtg7784 )
                </div>
                <div>선린인터넷고등학교</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}
