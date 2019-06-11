import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Device.scss';
import data from '../../assets/db/device.json'
import img from '../../assets/images/device0.jpg'

import Modals from '../../components/Modal/Modal'

const cx = classNames.bind(styles)

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalInfo: 0
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(i) {
    this.setState({
      showModal: true,
      modalInfo: i
    });
  }
  
  render() {
    const { id } = this.props.match.params;
    const { showModal, modalInfo } = this.state;

    return (
        <div className={cx('Device')}>
          <Modals data={data} id={id} showModal={showModal} modalInfo={modalInfo} />
          <h1>Device <span>{data[id].name}</span></h1>
        
          <div>
            <div style={{ 'backgroundImage': `url(${img})` }} />
            <div>
              <div>
                <span>Device :</span> {data[id].name}
              </div>
              <div>
                <span>Hash :</span> {data[id].info}
              </div>
              <div>
                <span>Last Transaction : </span> {data[id].transaction[0][0]}
              </div>
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
                <tr onClick={() => this.handleOpenModal(i)} key={i}>
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

export default withRouter(Device)
