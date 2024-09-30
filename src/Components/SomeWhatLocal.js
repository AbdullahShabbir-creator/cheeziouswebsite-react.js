import React from 'react';

const SomeWhatLocal = ({ cards }) => {
  return (
    <div>
      <h3 className='somelocal mt-3 p-3'>Somewhat Local Page</h3>
      <div className="card-list">
        {cards}
      </div>
    </div>
  );  
};

export default SomeWhatLocal;
