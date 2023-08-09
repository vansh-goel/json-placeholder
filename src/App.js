import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const json = await response.json();
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

    </div>
  );
}

export default App;
