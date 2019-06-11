import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as classNames from 'classnames/bind'

import styles from './List.scss';
const cx = classNames.bind(styles)

export default class Header extends Component {
    render() {
        const { user, type, img, header } = this.props;

        return (
            <div className={cx("List")}>
                <h2>
                    <span>{user}</span> {header}
                </h2>
                <ul>
                    {this.props.item.map((items, i) => (
                        <Link key={i} to={`${type}=${i}`} >
                            <img src={img} alt="" />
                            <div>
                                <span>{items.name}</span>
                                {items.info.substr(1, 30)}...
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}
