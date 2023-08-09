import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  },[reqType])

  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
    <List data={data} />
    <Table data={data} />
    </div>
  );
}

export default App;
