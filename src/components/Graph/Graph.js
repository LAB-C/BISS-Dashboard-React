import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Graph.scss';

const options = {
    scaleShowGridLines: false,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: false,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: false,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: false,
}

function datefunc(max, i, arr) {
    if (i > max) return arr;

    const date = new Date(new Date().setDate(new Date().getDate()-i));
    const dateString =
    date.toLocaleString("ko", { year: "numeric" }) + ' ' +
    date.toLocaleString("ko", { month: "numeric" }) + ' ' +
    date.toLocaleString("ko", { day: "numeric" });

    arr.push(dateString);

    return datefunc(max, i + 1, arr);
}

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: datefunc(6, 0, []),
                datasets: this.props.data
            }
        }
    }
    render() {
        const { data } = this.state;
        return(
            <div className="Graph">
                <h2><span>센서 그래프</span> Sensor Graph</h2>
                <Line
                    data={data}
                    options={options}
                    width={780}
                    height={250}
                />
            </div>
        );
    }
}

export default Graph;