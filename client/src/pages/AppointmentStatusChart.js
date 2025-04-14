import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';
import { Card } from '@mui/material';

const STATUS_COLORS = {
  completed: ' #28a745', // green
  cancelled: '#dc3545', // red
  pending: ' #ffc107',   // yellow
};

const AppointmentStatusChart = () => {
  const [chartData, setChartData] = useState([]);
  const [financeData, setfinanceData] = useState([]);

  useEffect(() => {
    axios.get('http://3.128.53.252:3001/api/landingPage/status-count')
      .then((res) => {
        const formattedData = res.data.map((item) => ({
          name: item._id.charAt(0).toUpperCase() + item._id.slice(1),
          value: item.count,
          itemStyle: {
            color: STATUS_COLORS[item._id] || '#90A4AE',
          },
        }));
        setChartData(formattedData);
      })
      .catch((err) => {
        console.error('Error fetching chart data:', err);
      });
  }, []);
  useEffect(() => {
    axios.get('http://3.128.53.252:3001/api/landingPage/finance-count')
      .then((res) => {
        setfinanceData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching chart data:', err);
      });
  }, []);

  const options = {
    title: {
      text: 'Appointment Summary',
      left: 'center',
      top: 10,
      bottom: 20,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: ({ name, value }) => `Status: ${name}<br/>Count: ${value}`,
    },
    legend: {

      orient: 'horizontal',
      left: 'center',
      bottom: -5,
    },
    series: [
      {
        name: 'Appointments',
        type: 'pie',
        radius: ['40%', '70%'], // donut style
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: '{b}: {c}',
        },
        data: chartData,
      },
    ],
  };
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div style={{ width: '100%',display: 'flex',  alignItems: 'center',gap:100
   }}>
    <div style={{width:'50%',boxShadow: '0px 0px 20px rgba(222, 222, 222, 0.5)',borderRadius: '6px',border: '1px solid #e0e0e0', padding: '20px', backgroundColor: '#fff', marginTop: '20px', marginBottom: '20px'}}>
      <ReactECharts option={options} style={{ height: 300 }} />
    </div>
    <div style={{width:'50%'}}>
    <Card style={{
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      maxWidth: '70%',
      border: '1px solid #e0e0e0',
      margin: '20px',
      textAlign: 'center',
      transition: 'transform 0.2s ease-in-out',
    }}>
      <h3 style={{ color: '#1f2937', fontSize: '1rem', marginBottom: '0.5rem' }}>Total Registered Financial Advisors</h3>
      <p style={{ fontSize: '2rem', fontWeight: '700', color: '#111827' }}>{financeData.total}</p>
    </Card>

    <Card style={{
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      maxWidth: '70%',
      border: '1px solid #e0e0e0',
      margin: '20px',

      textAlign: 'center',
      transition: 'transform 0.2s ease-in-out',
    }}>
      <h3 style={{ color: '#1f2937', fontSize: '1rem', marginBottom: '0.5rem' }}>Newly Joined Financial Advisors : <strong>{currentMonth}</strong></h3>
      <p style={{ fontSize: '2rem', fontWeight: '700', color: '#111827' }}>{financeData.joinedThisMonth}</p>
    </Card>
  </div>

    </div>
  );
};

export default AppointmentStatusChart;
