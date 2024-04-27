import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

interface SectionProps {
  /** The text to display inside the button */
  title?: string;
  /** html that follows title */
  children: React.ReactNode;
 
}
export default function Section ({title, children}: SectionProps) {
  return (
    <section>
      {title ? (
        <h2 className={specialElite.className}>
          { title }
        </h2>
      ) : null}
      { children }
    </section>
  )
}