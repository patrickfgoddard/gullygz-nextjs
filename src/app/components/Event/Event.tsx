import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

interface EventProps {
  /** The text to display inside the button */
  title? : string;
  date?: string;
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
  
  return ( 
      <div className="event"> 
        <h3 className={specialElite.className}>{props.date}</h3>
        <div className="event-description">
          <div><strong>{props.venueName}</strong></div>
          <div>{props.venueStreetAddress}</div>
          <div>{props.venueCity}, {props.venueState} {props.venueZip}</div>
          <div>Doors at {props.time}. 21+, ${props.price} cover charge.</div>
          <div>{props.description}</div>
        </div>
      </div> 
  ); 
} 

export default Event;