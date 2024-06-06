// Read through all events
import { get } from 'http';
import Event from '../Event/Event';
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
    </div>     
  )
}