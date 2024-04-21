import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input
        type="text"
        className="w-full border border-info outline-info p-2  rounded-md"
        {...props}
        />
        <div className="feedback h-7 "></div>
    </div>
  );
}

export default Input