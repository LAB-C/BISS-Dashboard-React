import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Node.scss';

import data from '../../assets/db/node.json'
import img from '../../assets/images/node0.jpg'

const cx = classNames.bind(styles)

class Node extends Component {
    render() {
        const { id } = this.props.match.params; 
        return (
            <div className={cx('Node')}>
                <h1>노드 <span>{data[id].name}</span></h1>
        
                <div>
                    <div style={{ 'backgroundImage': `url(${img})` }} />
                    <div>
                        <span>Device :</span> {data[id].name} <br/>
                        <span>Hash :</span> {data[id].info} <br />
                        <span>Last Transaction : </span> {data[id].transaction[0][0]}
                    </div>
                </div>
        
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>TX Hash</th>
                                <th>To</th>
                                <th>From</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[id].transaction.map((item, i) => (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(Node)
