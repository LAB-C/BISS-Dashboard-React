import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Sensor.scss';

const cx = classNames.bind(styles)

class Sensor extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <div className={cx('Sensor')}>
                <h1>디바이스 <span>{id}</span></h1>
            </div>
        );
    }
}

export default withRouter(Sensor)
