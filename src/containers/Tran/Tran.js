import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Tran.scss';

import Graph from '../../components/Graph/Graph'

const cx = classNames.bind(styles)

class Transaction extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <div className={cx('Transaction')}>
                <h1>트랜젝션 <span>{id}</span></h1>
                <div>
                <Graph />
                </div>
            </div>
        );
    }
}

export default withRouter(Transaction)
