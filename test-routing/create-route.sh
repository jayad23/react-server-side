mkdir "./src/pages/$1"
echo "import React from 'react';

const $1 = () => {
  const [ state, setState ] = React.useState();
  console.log(state, setState);
  return (
    <div>
      <h1>
        $1
      </h1>
    </div>
  );
};

export default $1;" > "./src/pages/$1/$1.tsx"