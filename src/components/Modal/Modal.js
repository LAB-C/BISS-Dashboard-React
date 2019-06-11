import React, { Component } from 'react'
import Modal from 'react-modal'

import * as classNames from 'classnames/bind'

import styles from './Modal.scss'
import ic_x from '../../assets/images/ic_x.png'
    
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
            <Modal isOpen={this.state.showModal} style={customStyles} ariaHideApp={false}>
                <div className={cx('Modal')}>
                    <div>
                        <div />
                        <button onClick={this.handleCloseModal} >
                            <img src={ic_x} alt="X"/>
                        </button>
                    </div>
                    <div>
                        <h1>트랜젝션 정보</h1>
                        <div/>
                    </div>
                    <p>
                        <span>TX HASH :</span> {data[id].transaction[modalInfo][0]}
                    </p>
                    <p>
                        <span>Hash :</span> {data[id].info}
                    </p>
                    <p>
                        <span>Last Transaction : </span> {data[id].transaction[0][0]}
                    </p>
                </div>
            </Modal>
        )
    }
}
