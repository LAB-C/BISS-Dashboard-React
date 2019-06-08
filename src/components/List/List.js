import React, { Component } from 'react'
import './List.scss'

export default class Header extends Component {
    // constructor(props) {
    //     super(props)

    //     this.setState({
    //         item: this.props.item
    //     })
    // }
    
    render() {
        return (
            <div>
                <h2>{this.props.header}</h2>
                <ul>
                    {this.props.item.map((items) => (
                        <li>
                            {items}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
