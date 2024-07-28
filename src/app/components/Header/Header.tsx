import Image from "next/image";
import gullygzLogo from '../../../../public/gully-gz-logo.svg';
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({ 
  subsets: ['latin'],
  weight: "400" 
});

export default function Header () {
  return (
    <header>
      <Image
        src={gullygzLogo}
        alt="Gully G'z Logo"
        width={400}
        height={188}
        priority
      />
      <h1 className={specialElite.className}><span className="sr-only">Gully G&apos;z - </span>Long Beach Rock Trio</h1>
    </header>
  )
}