// Eliminated album info
import Image from "next/image";
import eliminatedCover from "../../../../public/eliminated-cover-250.jpg";
import attentionShoppersCover from "../../../../public/attentionshoppers-cover-250.jpg";

export default function Music() {
  return (
    <>
      <div className="music">
        <div className="cover">
          <a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/attention-shoppers">
            <Image
              src={attentionShoppersCover} 
              width={250} 
              height={250} 
              alt="Cover of Gully G'z EP Attention Shoppers" 
            />
          </a>
        </div>
        <div className="info">
            <p>Out December 20, 2024, <b><i>Attention Shoppers</i></b>, is available now for pre-order!</p>
            <p>Engineered and mixed by Scott Holmes at <a rel="noreferrer" target="_blank" href="https://www.dreammachinelb.com/">Dream Machine LB</a> and mastered by J.P.Bendzinski/Wizard Audio</p>
            <ul>
              <li><a rel="noreferrer" target="_blank" href="https://gullygz.bandcamp.com/album/attention-shoppers">Bandcamp</a></li>
            </ul>
        </div>
      </div>
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
    </>
  )}