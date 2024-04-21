import classNames from 'classnames'
import React from 'react'
import { ArrowForwardOutline } from 'react-ionicons'

function ServiceCard({item}) {
    const {label, desc, Icon, active=false} = item;
  return (
    <div className={classNames(
    "group w-full min-h-64 p-8  rounded-lg border border-primary services",
   { 'hover:bg-white bg-primary transition-colors active': active},
   { 'hover:bg-primary transition-colors': !active},
    )}
    >
        <i>
           
            <Icon  cssClasses={"icon"}/>
        </i>
        <h4 className={classNames(
            "font-bold text-2xl my-4",
            { 'group-hover:text-black text-white ': active},
            { 'group-hover:text-white text-black': !active},
            ) }>{label}</h4>
        <p className={
            classNames({
                'group-hover:text-secondary text-white': active},
               { 'group-hover:text-white text-secondary': !active}
            )
        
    }
        >
            {desc}
        </p>

        <button className={classNames('py-5 uppercase mt-5 transition-transform duration-300 hover:-translate-y-2',
        { "group-hover:text-primary-light text-white":active},
        { "group-hover:text-white text-primary-light":!active},
            )}>
           <span>Read more </span> 
            <ArrowForwardOutline   width={"15px"} cssClasses={"icon inline mb-1 mx-2"}/>
        </button>

    </div>
  )
}

export default ServiceCard