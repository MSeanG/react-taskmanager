import React from 'react';

export const ChildComponent = ({onClick, count}) => {
  return (
    <button onClick={onClick}>Click me {count}</button>
  );
};