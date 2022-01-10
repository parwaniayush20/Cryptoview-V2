
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import moment from 'moment';
import Chart from 'chart.js/auto';



const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format('YYYY-MM-DD'));
  }


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={3} className="chart-title">Total Market Capitalization and Volume, $</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Net Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current Price: {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />


    </>
  );
};

export default LineChart;

// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
