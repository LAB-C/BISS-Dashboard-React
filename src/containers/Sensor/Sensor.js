import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Sensor.scss';
import Graph from '../../components/Graph/Graph'

import data from '../../assets/db/graph.json'

const cx = classNames.bind(styles)

class Sensor extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <div className={cx('Sensor')}>
                <h1>디바이스 <span>{data[id].label}</span></h1>
                <Graph data={[data[id]]} />

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>센서 이름</th>
                                <th>날짜</th>
                                <th>값</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[id].data.map((item, i) => (
                                <tr>
                                    <td>{data[id].label}</td>
                                    <td>{data[id].date[i]}</td>
                                    <td>{item}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(Sensor)
