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
                            {items}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
