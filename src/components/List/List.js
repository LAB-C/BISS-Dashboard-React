import React, { Component } from 'react'
import './List.scss'

export default class Header extends Component {
    render() {
        console.log(this.props.item)
        return (
            <div className="List">
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
