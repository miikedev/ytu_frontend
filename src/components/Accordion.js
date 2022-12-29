import React, { useState } from 'react'
import { accordionData } from '../data/AccordionData';
import './According.css'

export const Accordion = (props) => {
  const [selected, setSelected] = useState(null);
  function toggleAccordion(i) {
    if(selected === i) {
       return setSelected(null)
    }
    setSelected(i)
}
    
  
  return (
    <div className='ms-3 mt-4'>
      {accordionData.map((item, i) => 
        <div key={item.id} className='col-lg-10 col-sm-12 col-md-11 bg-body shadow rounded p-3 mb-1'>
        <div onClick={() => toggleAccordion(i)}>
            <div className='d-flex justify-content-between align-items-center' style={{cursor: "pointer"}}>
                 <h6 className='fs-5'>{item.question}</h6>
                 <div>
                     <button className='btn-style' style={{color: "#103F54"}}>{selected === i ?'-' : '+'}</button>
                 </div>
            </div>
            <div className={selected === i ? 'answer-show mt-3' : 'answer mt-3'}>
                {item.answerElement}
            </div>
        </div>
         
    </div>
      )}
</div>
)
}
