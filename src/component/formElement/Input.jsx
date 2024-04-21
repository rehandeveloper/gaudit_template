import React from 'react'

const Input = (props) => {
  return (
    <input
      type="text"
      className="w-full border border-info outline-info p-2  rounded-md"
      {...props}
    />
  );
}

export default Input