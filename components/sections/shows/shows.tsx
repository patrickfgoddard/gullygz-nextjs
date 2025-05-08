import { useState } from "react";
import { Ultra } from "next/font/google";
import Show from "./show";

import data from "./shows.json";

function getDate() {
  const today = new Date();
  const month = today.getMonth().toString().padStart(2, "0");
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, "0");
  return `${year}${month.padStart(2, "0")}${date}`;
}

const ultra = Ultra({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Shows() {
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <section id="shows" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2
          className={`text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}
        >
          Upcoming Shows
        </h2>
        <div className="grid-cols-2 md:grid gap-8">
          {data.map((show, index) => {
            const date = new Date(show.date);
            const dateYear = date.getFullYear();
            const dateMonth = date.getMonth().toString().padStart(2, "0");
            const dateDay = date.getDate().toString().padStart(2, "0");
            const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
            return dateCompare >= getDate() ? (
              <Show key={index} {...show} />
            ) : null;
          })}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowPrevious(!showPrevious)}
          className="mt-8 block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showPrevious ? "Hide Previous Shows" : "Show Previous Shows"}
        </button>

        {/* Previous Shows Section */}
        {showPrevious && (
          <>
            <h2
              className={`text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}
            >
              Previous Shows
            </h2>
            {data
              .filter((show) => {
                const date = new Date(show.date);
                const dateYear = date.getFullYear();
                const dateMonth = date.getMonth().toString().padStart(2, "0");
                const dateDay = date.getDate().toString().padStart(2, "0");
                const dateCompare = `${dateYear}${dateMonth}${dateDay}`;
                return dateCompare < getDate(); // Filter for previous dates
              })
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
              .map((show, index) => (
                <div className="mb-8" key={index}>
                  <Show {...show} />
                </div>
              ))}
          </>
        )}
      </div>
    </section>
  );
}