import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import HorizontalTimescaleBarChart from './c1.js';
import sampleData from './sample-data.json';
import  DataAnalysis from './DataAnalysis';
import TopRightButtons from './buttons';
import Weatherapp from './Temperature';
import MachineStatusVisualization from './MachineStatusVisualization.js';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  
  
  return (
    <div className="App">
      <TopRightButtons/>
      <MachineStatusVisualization data={sampleData}/>
      <DataAnalysis sdata={sampleData} />
      <Weatherapp/>
    </div>
  );
}

export default App;
