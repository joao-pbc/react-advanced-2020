import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const clickHandle = () => {
    let title = 'change title';
    console.log({title});
  };
  return  (
    <>
      <h2>{title}</h2>
      <button type='button' onClick={clickHandle}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
