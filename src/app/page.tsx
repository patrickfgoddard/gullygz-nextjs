import Image from "next/image";
// import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Events from "./components/Events/Events";
import regalPhoto from "../../public/gully-regal-2024.webp";
import eliminatedCover from "../../public/eliminated-cover-250.jpg";

export default function Home() {
  return (
    <>
      <Header />  
      <main>
        {/* Intro */}
        <Section>
          <div className="intro">
            <figure>
              <Image 
                src={regalPhoto}
                alt="Photo of Gully G'z performing live at Regal Inn in Lakewood, CA, April 13, 2024. Photo by Juliet L." 
                width={350}
                height={197} />
              <figcaption>Gully G&apos;z performing live at Regal Inn in Lakewood, CA, April 13, 2024. Photo by Juliet L.</figcaption>
            </figure>
            <div className="intro-copy">
              <p><strong>Gully G&apos;z</strong> is a three-piece rock band from Long Beach, CA.</p>
              <p>Formed in 2021, Matthew Lucca (drums), Julie Goforth (bass) and Patrick Goddard (guitar, vocals) were members of punk and roll band, <span className="name-drop">Stingray Barbie</span>, who had a mix of covers and originals and played frequently around Long Beach and Orange County.</p>
            </div>
          </div>
        </Section>
        <Section title="Shows">
          <Events />
        </Section>
        <Section title="Music">
          <p>
            <a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/eliminated">
              <Image
                src={eliminatedCover} 
                width={250} 
                height={250} 
                alt="Cover of Gully G'z EP Eliminated" 
              />
            </a>
          </p>
          <p>Our debut six song EP, <b><i>Eliminated</i></b>, out now!</p>
          <p>Engineered and produced by Matt Lynch / <a href="https://mysteriousmammal.com/">Mysterious Mammal Recording</a></p>
          <ul>
            <li><a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/eliminated">Bandcamp</a></li>
            <li>EP can also be listened to on Tidal, Amazon, Apple Music, YouTube, etc.</li>
          </ul>
        </Section>
        <Section title="Video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/hqzCOw_E-1k?si=q0CgO5E62lM4hwx2" 
            title="YouTube video player" 
            ></iframe>
        </Section>
        <Section title="Follow">
        <ul className="inline-list follow">
        <li><a rel="noreferrer" href="https://www.instagram.com/gullygzband" target="_blank">
          Gully G&apos;z on Instagram</a></li>
        <li><a rel="noreferrer" href="https://gullygz.bandcamp.com" target="_blank">
          
          Gully G&apos;z on Bandcamp</a></li>
      </ul>
        </Section>
        <Section title="Contact">
        <form name="contact" method="POST" data-netlify="true">
        <label>Your Name: <input type="text" name="name" /></label>
        <label>Your Email: <input type="email" name="email" /></label>
        <label>Message: <textarea name="message"></textarea></label>
        <button type="submit">Send</button>
      </form>
        </Section>
      </main>
      <footer>
        All content &copy; { new Date().getFullYear() } Gully G&apos;z.
      </footer>
    </>
  );
}
