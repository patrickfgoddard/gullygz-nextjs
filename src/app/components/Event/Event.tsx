import { Special_Elite } from "next/font/google";

import styles from './Event.module.scss';

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

interface EventProps {
  /** The text to display inside the button */
  title? : string;
  dateMonth?: string;
  dateYear?: string;
  dateDay?: string;
  time?: string;
  price?: string;
  venueName?: string;
  venueStreetAddress?: string;
  venueCity?: string;
  venueState?: string;
  venueZip?: string;
  description?: string;
}
const Event: React.FC<EventProps> = (props) => { 
  const dateClasses = [styles.event__date, specialElite.className].join(' ');
  return ( 
      <div className={styles.event}>
        <div className={dateClasses}>
          <div className={styles.event__date_month}>{props.dateMonth}</div>
          <div className={styles.event__date_day}>{props.dateDay}</div>
          <div className={styles.event__date_year}>{props.dateYear}</div>
        </div>
        <div>
          <div className={styles.event__venue_name}>{props.venueName}</div>
          <div className={styles.event__venue_address}>
            {props.venueStreetAddress}<br />
            {props.venueCity}, {props.venueState} {props.venueZip}
          </div>
          <p>Doors at {props.time}. 21+, ${props.price} cover charge.</p>
          <p className={styles.event__description}>{props.description}</p>
        </div>
      </div>
  );
}

export default Event;