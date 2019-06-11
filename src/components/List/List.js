import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                        <Link key={i} to={`${this.props.type}=${items[1]}`}>
                            <img src={this.props.img} alt="" />
                            <div>
                                <span>{items[1]}</span>
                                {items[0].substr(1, 30)}...
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}
