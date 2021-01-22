import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
const App = () => {
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const resp = await fetch(url);
      if (resp.status >= 200 && resp.status <= 299) {
        const data = await resp.json();
        setIsLoading(false);
        console.log(await data);
        return setTours(data);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {!isLoading && tours.length === 0 && (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )}
      {isLoading && <Loading />}
      {isError && <h2>Error ...</h2>}
      {!isLoading && !isError && tours.length !== 0 && (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      )}
    </>
  );
};

export default App;
