// Read through all events
import Event from '../Event/Event';
import data from './events.json';

export default function Events() {
  return (
    <>
      {data.map((event) => (
        <Event key={event.date} {...event} />
      ))}
    </>
  )
}