import React, { useMemo, useState } from 'react'
import Accordian from './common/Accordian';
import classNames from 'classnames';
import { faqData } from '../data/faqData';

function Faq() {
  const data = useMemo(() => faqData.map((i, ind) => ({ 
    ...i, 
    active: false, 
    from: ind % 2 === 0 ? "left" : "right", 
    ind: ind 
  })), [faqData]);
  
  const [state, setState]= useState(
    data
  );

  console.log(state, "state");

  const isLeftActive = state?.filter(i=> i.from==="left").some(i=> i.active === true);
  const isRightActive = state?.filter(i=> i.from==="right").some(i=> i.active === true);
  return (
    <div className='w-full min-h-screen bg-primary px-20 py-36'>
      <div className='flex flex-wrap'>
        <div className='lg:w-1/2 w-full'>
          <p className='upper text-muted font-bold lg:my-4 my-2'>FAQ</p>
          <h1 className='text-5xl text-white font-bold lg:my-10 my-0'>The Most Questions</h1>
        </div> 
      </div>

      <div className='lg:flex block lg:gap-x-10'>
        <div className={classNames("w-full lg:w-1/2", {"lg:w-5/6": isLeftActive})}>
          {
            state?.filter(i=> i.from=="left").map((item, ind)=> {
              return(
                <Accordian key={ind} head={item.question} desc={item.answer}  control={{ind:item.ind, state:state}} handleToggle={setState}/>
              )
            })
          }
        </div>
        <div className={classNames("w-full", "lg:w-1/2", {"lg:w-5/6": isRightActive})}>
        {
            state?.filter(i=> i.from=="right").map((item, ind)=> {
              return(
                <Accordian key={ind} head={item.question} desc={item.answer}  control={{ind:item.ind, state:state}} handleToggle={setState}/>
              )
            })
          }
        
        </div>

      </div>
    



    </div>
  )
}

export default Faq