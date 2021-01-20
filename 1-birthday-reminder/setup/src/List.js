import React from 'react';

const List = ({ name, age, image, id }) => {
  // return people.map(({ id, name, age, image }) => {
  //   return (
  //     <article key={id} className='person'>
  //       <img src={image} alt={`${name} profile image`} />
  //       <h4>{name}</h4>
  //       <p>{age}</p>
  //     </article>
  //   );
  // });

  console.log(name, age, image);
  return (
    <>
      <article className='person'>
        <img src={image} alt={`${name} profile`} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    </>
  );
};

export default List;
