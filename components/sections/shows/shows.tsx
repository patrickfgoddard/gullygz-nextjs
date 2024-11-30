import { Ultra } from 'next/font/google';
import Show from './show';

import data from './shows.json';

function getDate() {
  const today = new Date();
  const month = today.getMonth().toString().padStart(2, "0");
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, "0");
  return `${year}${month.padStart(2, "0")}${date}`;
  // return today.toISOString();
}


const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin']
})

export default function Shows() {
  return (
    <section id="shows" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className={`text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}>Upcoming Shows</h2>
        <div className="grid-cols-2 md:grid gap-8">
        {data.map((show, index) => {
          const date = new Date(show.date);
          const dateYear = date.getFullYear();
          const dateMonth = date.getMonth().toString().padStart(2, "0");
          const dateDay = date.getDate().toString().padStart(2, "0");
          const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
          return (
            dateCompare >= getDate() ?
            <Show key={index} {...show} />
            : null
          );
        })}
        </div>
      </div>
    </section>
  );
}