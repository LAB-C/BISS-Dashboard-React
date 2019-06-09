import React, { Component } from 'react'

import * as classNames from 'classnames/bind'

import styles from './List.scss';
const cx = classNames.bind(styles)

export default class Header extends Component {
    render() {
        console.log(this.props.item)
        return (
            <div className={cx("List")}>
                <h2>
                    <span>{this.props.user}</span>
                    {this.props.header}
                </h2>
                <ul>
                    {this.props.item.map((items, i) => (
                        <li key={i}>
                            <img src={this.props.path} alt="" />
                            <div>
                                <span>{items[1]}</span>
                                {items[0].substr(1, 30)}...
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
