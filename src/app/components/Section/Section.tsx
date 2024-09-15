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
        <h2>
          { title }
        </h2>
      ) : null}
      { children }
    </section>
  )
}