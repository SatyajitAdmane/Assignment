import React from 'react';

const DataAnalysis = ({ sdata }) => {
  // Parse the JSON data
//   const jsonData = JSON.parse(data);

  // Filter data based on machine_status
  const status0Count = sdata.filter(entry => entry.machine_status === 0).length;
  const status1Count = sdata.filter(entry => entry.machine_status === 1).length;

  return (
    <div>
      <h2>Data Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Machine Status 0</td>
            <td>{status0Count}</td>
          </tr>
          <tr>
            <td>Machine Status 1</td>
            <td>{status1Count}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataAnalysis;
