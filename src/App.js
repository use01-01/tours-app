import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './index.css';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const removeItem = (id) => {
    setTours(tours.filter((tour) => (tour.id !== id ? tour : null)));
  };
  const getData = async () => {
    const response = await axios.get(url);
    setTours(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(tours);
  return (
    <section>
      {isLoading && <Loading />}
      <Tours tours={tours} removeItem={removeItem} />
    </section>
  );
}

export default App;
