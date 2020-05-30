import React from 'react';

function SlideLinker(props) {
  const state = JSON.stringify(props)
  
  return (
    <div>
      <p>{state}</p>
    </div>
  );
}

export default SlideLinker;
