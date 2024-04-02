import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/app/constants";


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 border-b-2 border-b-[#F5F5F5]">
    
    <div className="flex items-center justify-center">
    <Link href="/">
        <Image
        src="/navlogo.svg"
        width={140}
        height={70}
        alt="Online Academy Logo"
        />
    </Link>

    <ul className="hidden h-full gap-7 4xl:flex ml-14">
    {NAV_LINKS.map((eachlink) => (
      <Link href={eachlink.href} key={eachlink.key}
      className="regular-16 text-gray-50 cursor-pointer pb-1.5
       hover:font-bold">{eachlink.text}</Link>)
    )}
    </ul>
    </div>

    <div className="hidden p-1 bg-[#FAF9F9] md:flexCenter w-[220px]">
    <input type="search" className="text-gray-30 p-2 bold-13 w-full mr-1.5 bg-transparent focus:outline-none" placeholder="Search Anything" />
    <Image
        src="/search.png"
        width={19}
        height={4}
        alt="Search icon"
        />
    </div>

    <div className="4xl:hidden">
    <Image
        src="/icon-hamburger.svg"
        width={30}
        height={10}
        alt="menu icon"
        />
    </div>

    <div className="hidden 4xl:flexCenter">
        <div className="lg:flexCenter">
            <Image
                className="rounded-[9px] mr-1.5"
                src="/avatar.png"
                width={40}
                height={20}
                alt="Profile picture"
                />

            <div className="rounded-[9px]">
                <h5 className="regular-16 capitalize text-black-70">Behzad pashaei</h5>
                <p className="regular-13  text-gray-50">ui & ux designer</p>
            </div>
        </div>

        <div className="ml-4 p-2 bg-[#FAFAFA] rounded-[7px]">
            <Image
            src="/bell.svg"
            width={20}
            height={10}
            alt="Notification icon"
            /> 
        </div> 
    </div>
   
    </nav>
  )
}

export default Navbar