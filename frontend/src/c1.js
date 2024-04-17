import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function MachineVibrationChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Vibration',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        data: [],
      },
    ],
  });

  // Sample data (replace with your actual data fetching logic)
  const sampleData = [
    {
        "ts": "2024-01-21T15:00:00Z",
        "machine_status": 1,
        "vibration": 529
    },
    {
        "ts": "2024-01-21T15:00:01Z",
        "machine_status": 1,
        "vibration": 536
    },
    {
        "ts": "2024-01-21T15:00:02Z",
        "machine_status": 1,
        "vibration": 536
    },
    {
        "ts": "2024-01-21T15:00:03Z",
        "machine_status": 1,
        "vibration": 544
    },
    {
        "ts": "2024-01-21T15:00:04Z",
        "machine_status": 1,
        "vibration": 544
    },
    {
        "ts": "2024-01-21T15:00:05Z",
        "machine_status": 1,
        "vibration": 584
    },
    {
        "ts": "2024-01-21T15:00:06Z",
        "machine_status": 1,
        "vibration": 574
    }];

  useEffect(() => {
    const formattedData = sampleData.map((d) => ({
      ...d,
      // Parse timestamps if needed for time scale (replace with your parsing logic)
      ts: new Date(d.ts)  // Example parsing
    }));

    setData({
      labels: formattedData.map((d) => d.ts), // Adjust labels based on parsing
      datasets: [
        {
          data: formattedData.map((d) => d.vibration),
        },
      ],
    });
  }, []);

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default MachineVibrationChart;