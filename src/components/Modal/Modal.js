import React, { Component } from 'react'
import Modal from 'react-modal';

import * as classNames from 'classnames/bind'

import styles from './Modal.scss';
const cx = classNames.bind(styles)
 
const customStyles = {
    content : {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform: 'translate(-50%, -50%)',
        border: '0px solid #000',
        width: 'calc(78vw - 60px)',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.5)',
        paddingTop: '150px'
    }
};

export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalInfo: 0
        };
        
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    componentWillReceiveProps() {
        this.setState({
            showModal: this.props.showModal,
            modalInfo: this.props.modalInfo
        });
    }
    
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { data, id } = this.props;
        const { modalInfo } = this.state;
        
        return (
            <Modal isOpen={this.state.showModal} style={customStyles}>
                <div className={cx('Modal')}>
                    <div>
                        <div />
                        <button onClick={this.handleCloseModal} >X</button>
                    </div>
                    <h1>트랜젝션 정보</h1>
                    TX HASH: {data[id].transaction[modalInfo][0]}
                </div>
            </Modal>
        )
    }
}
