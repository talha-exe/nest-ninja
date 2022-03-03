import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <Link href="/" passHref><a><Image src="/logo_new.png" alt="Ninja List" width={100} height={100}/></a></Link>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </nav> );
}
export default Navbar;
