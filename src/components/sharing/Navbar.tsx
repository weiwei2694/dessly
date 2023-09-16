import { icons, routes } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import MobileNavbar from "../sub-components/MobileNavbar"

const font = Poppins({ subsets: ["latin"], weight: "600" });

const Navbar = () => {
  return (
    <nav className="py-10 flex">
        {/* Dekstop */}
        <div className="flex-1 hidden md:flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="DressLy" width={109} height={26} />
            </Link>

            <ul className="flex items-center gap-x-6">
                {routes.map(route => (
                    <Link
                        key={route.title}
                        href={route.href}
                        className={font.className}
                    >
                        {route.title}
                    </Link>
                ))}
            </ul>
            
            <ul className="flex items-center gap-x-6">
                {icons.map(icon => (
                    <li key={icon.icon}>
                        <Link href="/">
                            <Image src={icon.icon} alt={icon.icon} width={24} height={24} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        {/* Mobile */}
        <div className="flex-1 flex md:hidden justify-between items-center">
            <MobileNavbar />

            <Link href="/">
                <Image src="/logo.png" alt="DressLy" width={109} height={26} />
            </Link>

            <ul>
                <li>
                    <Link href="/">
                    <Image src="/bag.png" alt="/bag.png" width={24} height={24} />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar