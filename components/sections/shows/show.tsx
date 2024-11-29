import { Ultra } from 'next/font/google';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react';
//import exp from 'constants';

const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin']
})

interface ShowProps {
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
  flyer?: undefined | string;
}

const Show: React.FC<ShowProps> = (props) => { 
  // const dateClasses = [styles.event__date].join(' ');

  const date = new Date(props.date);
  const dateYear = date.getFullYear();
  const dateMonth = date.toLocaleString('default', { month: 'long' });
  const dateDay = date.getDate();
  // const dateTimestamp = date.getHours();
  const dayOfWeek = getDayOfWeek(date);

  function getDayOfWeek(date: Date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  return ( 
    <Card className="flex gap-8">
      <div>
        <CardHeader>
        
          <CardTitle className={ultra.className}>
          <div>{dayOfWeek}, {dateMonth} {dateDay}, {dateYear}</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="font-bold">{props.venueName}</div>
            <div>
                {props.venueStreetAddress}<br />
                {props.venueCity}, {props.venueState} {props.venueZip}
            </div>
            <div>Doors at {props.time}. 21+, ${props.price} cover charge.</div>
            <div>{props.description}</div>
            {!props.flyer ? null : 
              <Dialog>
                <DialogTrigger className="mt-8 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 border border-amber-700 rounded">View Flyer</DialogTrigger>
                <DialogContent  className="bg-black display: flex flex-col items-center justify-center"
                
                >
                  <DialogHeader>
                    <DialogTitle
                      className="sr-only">{props.title}</DialogTitle>
                  </DialogHeader>

                  <Image
                        src={props.flyer}
                        alt="Event Flyer"
                        width={600}
                        height={300}
                        className="h-full w-auto"
                      />
                  <DialogFooter className="sm:justify-center">
                    <DialogClose 
                      className='mt-8 bg-white text-black font-bold py-1 px-1 rounded absolute right-2 top-1'
                      asChild>
                        
                      <Button type="button" variant="secondary">
                        <X />
                        <span className="sr-only">Close </span>
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
                
              </Dialog>
            }
          
        </CardContent>
      </div>
      <div className="grid place-items-center space-y-1.5 p-6">
          {!props.flyer ? null :
            <Image
                src={props.flyer}
                alt="Event Flyer"
                width={100}
                height={300}
              />
          }
      </div>
    </Card>
  );
}

export default Show;