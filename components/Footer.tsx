// import Link from "next/link";
import { Logo } from "./Logo";
import { AiFillPhone, AiFillSignature } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="relative py-12">
      {/* Background heart watermark */}
      {/* <div className="absolute right-0 top-0 opacity-10">
        <div className="h-96 w-96 bg-[url('/placeholder.svg')] bg-contain bg-center bg-no-repeat" />
      </div> */}

      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-1 flex items-center gap-2">
            <Logo />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className=" md:text-xl mt-3 text-black fontTomorrow flex flex-row items-center justify-center ">
            <AiFillPhone className="mr-3" />{" "}      
              09066428296
            </h3>
            <h3 className=" md:text-xl mt-1 text-black fontTomorrow flex flex-row items-center justify-center ">
            <AiFillSignature className="mr-3" />{" "}
              contact@boslightmulti-serviceslimited.com
            </h3>
          </div>
          {/* Navigation */}
          {/* <nav className="mt´3 mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  FAQ‘s
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav> */}

          {/* Copyright */}
          <div className="mt-3 text-sm text-gray-500">
            © 2025 Boslight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
