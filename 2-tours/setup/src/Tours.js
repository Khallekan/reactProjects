import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  // console.log(tours);
  // console.log(removeTour);

  // const [id, image, info, name, price] = tours;
  return (
    <section>
      <div className='title' style={{ marginTop: '4rem' }}>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
