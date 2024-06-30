import React, { useState } from 'react';
import classNames from 'classnames';

function Accordian({head, desc, control, handleToggle}) {
    const {ind, key, state} = control;
    const show = state[ind]["active"];
const onToggle =()=>{

    const updated = state?.map((i,index)=> index ===ind? {...i, active: !i.active}: i)
 
    handleToggle(   
      updated
    );

}
  return (
     
  <div className="my-4">
  <div className={classNames("flex justify-between items-center border transition cursor-pointer rounded-lg  px-6 py-4", {"bg-white text-black": show, "text-white": !show})} onClick={onToggle}>
    <h2 className="font-semibold">{head}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
    </svg>
  </div>

  <div className={classNames("px-4 py-4 text-muted", {"hidden": !show})}>
   {desc}
  </div>
</div>
  )
}

export default Accordian