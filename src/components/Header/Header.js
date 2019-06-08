import React, { Component } from 'react'
import './Header.scss'

import logo from '../../assets/images/ic-logo.svg'
import profile from '../../assets/images/profile.png'

export default class Header extends Component {
  render () {
    return (
      <nav id='Header'>
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
