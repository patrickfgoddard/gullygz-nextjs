import { Special_Elite } from "next/font/google";

import styles from './Event.module.scss';

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

const Event: React.FC<EventProps> = (props) => { 
  const dateClasses = [styles.event__date, specialElite.className].join(' ');

  const date = new Date(props.date);
  const dateYear = date.getFullYear();
  const dateMonth = date.toLocaleString('default', { month: 'long' });
  const dateDay = date.getDate();
  const dateTimestamp = date.getHours();

  return ( 
      <div className={styles.event}>
        <div className={dateClasses}>
          <div className={styles.event__date_month}>{dateMonth}</div>
          <div className={styles.event__date_day}>{dateDay}</div>
          <div className={styles.event__date_year}>{dateYear}</div>
        </div>
        <div>
          <div className={styles.event__venue_name}>{props.venueName}</div>
          <div className={styles.event__venue_address}>
            {props.venueStreetAddress}<br />
            {props.venueCity}, {props.venueState} {props.venueZip}
          </div>
          <div>Doors at {props.time}. 21+, ${props.price} cover charge.</div>
          <div className={styles.event__description}>{props.description}</div>
        </div>
      </div>
  );
}

export default Event;