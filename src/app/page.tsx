import Image from "next/image";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Events from "./components/Events/Events";
import Music from "./components/Music/Music";
import regalPhoto from "../../public/gully-regal-2024.webp";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

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
              
            <p>Rising from the ashes of COVID and their former band, Gully G&apos;z have played a handful of shows throughout Long Beach, including at various private parties, <a rel="noreferrer" target="_blank"  href="https://alexsbar.com/">Alex&apos;s Bar</a>, <a rel="noreferrer" target="_blank" href="https://www.instagram.com/vine_lb/">Vine</a>, Dizzy&apos;s On Vinyl, B&apos;s Cocktails, and Regal Inn. They released their first EP, <a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/eliminated">Eliminated</a>, in November 2021.</p>

            <p>Gully G&apos;z can be best described as indie rock/post pop cow surf punk.</p>

            <blockquote>
              &quot;Think Husker Du and Meat Puppets getting together for a jam in Orange County.&quot;
              <cite>Matt Lynch of <a href="https://mysteriousmammal.com/">Mysterious Mammal Recording</a></cite>
            </blockquote>
            </div>
          </div>
        </Section>
        <Section title="Shows">
          <Events />
        </Section>
        <Section title="Music">
          <Music />
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
          {/* <ul className="inline-list follow">
            <li><a rel="noreferrer" href="https://www.instagram.com/gullygzband" target="_blank">
              Gully G&apos;z on Instagram</a></li>
            <li><a rel="noreferrer" href="https://gullygz.bandcamp.com" target="_blank">
              
              Gully G&apos;z on Bandcamp</a></li>
          </ul> */}
          <SocialIcon url="https://www.instagram.com/gullygzband" />
          <SocialIcon url="https://www.facebook.com/gullygzband/" />

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
