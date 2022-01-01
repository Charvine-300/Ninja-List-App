import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (  
    <nav>
        <div className="logo">
          <Image width={150} height={77} src="/logo.png" alt="Ninja List Logo" />
        </div>
        <Link href="/"><a> Home </a></Link>
        <Link href="/about"><a> About </a></Link>
        <Link href="/contact"><a> Contact Us </a></Link>
    </nav>
  );
}
 
export default Navbar;