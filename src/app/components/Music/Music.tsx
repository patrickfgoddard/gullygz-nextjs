// Eliminated album info
import Image from "next/image";
import eliminatedCover from "../../../../public/eliminated-cover-250.jpg";

export default function Music() {
  return (
    <div className="music">
      <div className="cover">
        <a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/eliminated">
          <Image
            src={eliminatedCover} 
            width={250} 
            height={250} 
            alt="Cover of Gully G'z EP Eliminated" 
          />
        </a>
      </div>
      <div className="info">
          <p>Our debut six song EP, <b><i>Eliminated</i></b>, out now!</p>
          <p>Engineered and produced by Matt Lynch / <a href="https://mysteriousmammal.com/">Mysterious Mammal Recording</a></p>
          <ul>
            <li><a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/eliminated">Bandcamp</a></li>
            <li>EP can also be listened to on Tidal, Amazon, Apple Music, YouTube, etc.</li>
          </ul>
      </div>
    </div>
  )}