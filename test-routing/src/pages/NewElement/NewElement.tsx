import React from 'react';

const NewElement = () => {
  const [ state, setState ] = React.useState();
  console.log(state, setState);
  return (
    <div>
      <h1>
        NewElement
      </h1>
    </div>
  );
};

export default NewElement;
