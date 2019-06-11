import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Node.scss';

const cx = classNames.bind(styles)

class Node extends Component {
    render() {
        const { id } = this.props.match.params; 
        return (
            <div className={cx('Node')}>
                <h1>노드 <span>{}</span></h1>
            </div>
        );
    }
}

export default withRouter(Node)
