// Read through all events
'use client'

import { useState } from 'react';
import Event from '../Event/Event';
import PreviousEvent from '../PreviousEvent/PreviousEvent';
import data from './events.json';
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

function getDate() {
  const today = new Date();
  let month = today.getMonth().toString().padStart(2, "0");
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, "0");
  return `${year}${month.padStart(2, "0")}${date}`;
  // return today.toISOString();
}

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      {data.map((event, index) => {
        const date = new Date(event.date);
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth().toString().padStart(2, "0");
        const dateDay = date.getDate().toString().padStart(2, "0");
        const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
        return (
          <>
            {dateCompare >= getDate() &&      
              <Event key={index} {...event} />
            }
          </>
        );
      })}
      <h3 className={specialElite.className}>Previous Shows <button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</button></h3>
      
      {isOpen && data.toReversed().map((event, index) => {
        const date = new Date(event.date);
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth().toString().padStart(2, "0");
        const dateDay = date.getDate().toString().padStart(2, "0");
        const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
        return (
          <>
            {dateCompare < getDate() &&      
              <PreviousEvent key={index} {...event} />
            }
          </>
        );
      })}
    </div>     
  )
}