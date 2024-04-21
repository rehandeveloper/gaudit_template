import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      type="text"
      rows={5}
      className="w-full border border-info outline-info p-2  rounded-md"
      {...props}
    />
  );
};

export default Textarea;
