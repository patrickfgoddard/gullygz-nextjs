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
        <Section title="Bio">
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
              
              <p><strong>Gully G’z</strong> are a rock trio from Long Beach, CA. Their songs are a fertile stew of indie and post-pop-cow-surf punk. Their debut EP, <a href="https://gullygz.bandcamp.com/album/eliminated"><em>Eliminated</em></a>, cross-pollinates The Wipers, Replacements, Dick Dale, Meat Puppets, and Husker Du. They fit nicely on bills with cathartic punk rawk, as well as jangly indie pop, and demented, acid-tinged country. </p>
              <p>Established in 2021, Gully G’z rose from the ashes of Covid and the demise of their previous band, Stingray Barbie, with a fresh batch of songs and determination to soldier on in the face of an uncertain future.</p>

              <p>They are currently gigging around LA and OC. Feel free to connect!</p>
              <p>Gully G&apos;z is Julie Goforth - bass, Matt Lucca - Drums, Patrick Goddard - Guitar/vocals.</p>
            </div>
            <blockquote>
              &quot;Think Husker Du and Meat Puppets getting together for a jam in Orange County.&quot;
              <cite>Matt Lynch of <a href="https://mysteriousmammal.com/">Mysterious Mammal Recording</a></cite>
            </blockquote>
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
