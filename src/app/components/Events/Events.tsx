// Read through all events
'use client'

import { useState } from 'react';
import Event from '../Event/Event';
import PreviousEvent from '../PreviousEvent/PreviousEvent';
import data from './events.json';

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
      {/* Current dates */}
      {data.map((event, index) => {
        const date = new Date(event.date);
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth().toString().padStart(2, "0");
        const dateDay = date.getDate().toString().padStart(2, "0");
        const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
        return (
          dateCompare >= getDate() ?      
            <Event key={index} {...event} />
          : null
        );
      })}
      <h3>Previous Shows <button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</button></h3>
      
      {/* Previous Dates */}
      {isOpen && data.toReversed().map((event, index) => {
        const date = new Date(event.date);
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth().toString().padStart(2, "0");
        const dateDay = date.getDate().toString().padStart(2, "0");
        const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
        return (
          dateCompare < getDate() ? (
            <PreviousEvent key={index} {...event} />
          ) : null
        );
      })}
    </div>     
  )
}