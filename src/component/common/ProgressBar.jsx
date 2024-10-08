import React from 'react'

function ProgressBar({heading, percentage}) {
  return (
    <div className="my-12">
      <h2 className="my-4 text-2xl font-bold">{heading}</h2>
      <div className="bg-primary w-full h-3 rounded-md">
        <div className={`bg-primary-light h-3 rounded-md`} style={{width: percentage+"%"}}></div>
      </div>
    </div>
  );
}

export default ProgressBar