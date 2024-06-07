import { Special_Elite } from "next/font/google";

import styles from './PreviousEvent.module.scss';

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

interface EventProps {
  /** The text to display inside the button */
  title? : string;
  date: string;
  price?: string;
  venueName?: string;
  venueStreetAddress?: string;
  venueCity?: string;
  venueState?: string;
  venueZip?: string;
  description?: string;
  time?: string;
}

function getDayOfWeek(date: Date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

const Event: React.FC<EventProps> = (props) => { 
  const dateClasses = styles.event__date;

  const date = new Date(props.date);
  const dateYear = date.getFullYear();
  const dateMonth = date.toLocaleString('default', { month: 'long' });
  const dateDay = date.getDate();
  const dateTimestamp = date.getHours();
  const dayOfWeek = getDayOfWeek(date);

  return ( 
      <div className={styles.previous_event}>
        <div className={dateClasses}>
          {dayOfWeek}, {dateMonth} {dateDay}, {dateYear}
        </div>
        <div>
          <div>{props.venueName}</div>
          <div>{props.venueCity}, {props.venueState}</div>
          <div><em>{props.description}</em></div>
        </div>
      </div>
  );
}

export default Event;