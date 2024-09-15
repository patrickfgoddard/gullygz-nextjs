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
        <Section title="Bio">
          <div className="intro">
            <figure>
              <Image
                src={regalPhoto}
                alt="Photo of Gully G'z performing live at Regal Inn in Lakewood, CA, April 13, 2024. Photo by Juliet L."
                width={350}
                height={197}
                priority={true}
              />
              <figcaption>Gully G&apos;z performing live at Regal Inn in Lakewood, CA, April 13, 2024. Photo by Juliet L.</figcaption>
            </figure>
            <div className="intro-copy">
            <h3>Indie Rock with a Surf Punk Twist</h3>
            <p>Gully G&#39;z are a high-energy rock trio from Long Beach, CA, blending indie and post-punk with surf rock elements. Their debut EP, <a href="https://gullygz.bandcamp.com/album/eliminated">Eliminated</a>, combines influences from The Wipers, Replacements, Dick Dale, Meat Puppets, and Husker Du.</p>
            <h3>Established in 2021</h3>
            <p>Rising from the ashes of Covid and their previous band, Stingray Barbie, Gully G&#39;z bring a fresh batch of songs and determination to the LA and OC music scene.</p>
            <h3>Catch them Live</h3>
            <p>Gully G&#39;z are currently gigging around LA and OC. Follow them on social media for upcoming shows and updates!</p>
              
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
          <form
            action="https://formspree.io/f/xanwevpo"
            method="POST"
          >
            <label>
              Your email:
              <input type="email" name="email" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
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
