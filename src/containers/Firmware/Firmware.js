import React, { Component } from 'react'

import * as classNames from 'classnames/bind'

import styles from './Firmware.scss';
const cx = classNames.bind(styles)

class Firmware extends Component {
  render() {
    return (
        <div className={cx('Firmware')}>
            <h1>Upload <span>upload firmware</span></h1>
            <div>
                
            </div>
      </div>
    );
  }
}

export default Firmware
