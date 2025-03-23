"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/loading-animation";
import DynamicBackground from "@/MyComponents/dynamic-background";
import ScrollContent from "@/MyComponents/scrollContent";
import { Link } from "@/i18n/navigation";
import {
  Award,
  Briefcase,
  Building2,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  // <DynamicBackground>
  //   <h3>Home</h3>
  // </DynamicBackground>

  return (
    <DynamicBackground>
      <div className="h-screen w-full grid grid-cols-2">
        {/* Navbar */}
        <header className="absolute top-0 left-0 right-0 z-50 w-full sticky ">
          <div className="container flex h-24 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-white">
                <span>Knoz </span>
                <span className="text-white/70"> | </span>
                <span>Orion </span>
              </div>

              <div className="hidden md:Lblock text-lg font-light tracking-widere text-white/80">
                Builders Construct + Associates
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 ">
              <Link
                href="#about"
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              >
                About Us{" "}
              </Link>
              <Link
                href="#vision"
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              >
                {" "}
                Vision
              </Link>
              <Link
                href="#services"
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              >
                Projects{" "}
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              >
                {" "}
                Contact
              </Link>
            </nav>
          </div>
          {/* <button className="md:hidden text-white">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
         
      </button> */}
        </header>

        {/* Hero */}
        <ScrollContent
          contentID="title"
          range={{ in: 0, out: 500 }}
          class="col-start-1 row-start-1 mb-25 text-white text-4xl flex justify-center items-center transition-opacity duration-300"
        >
          Knoz x Orion
        </ScrollContent>
        <br />
        <ScrollContent
          contentID="title1"
          range={{ in: 0, out: 500 }}
          class="col-start-1 row-start-1 text-white text-4xl flex justify-center items-center transition-opacity duration-300"
        >
          Welcome!
        </ScrollContent>
      </div>

      {/* Section 2 */}
      <ScrollContent
        contentID="title2"
        range={{ in: 200, out: 1100 }}
        class="col-start-1 row-start-1 text-white text-4xl flex justify-center items-center transition-opacity duration-300"
      >
        Welcome 2!
      </ScrollContent>
      {/* <h3 className="text-black">Home</h3> */}

      <ScrollContent contentID="bottomNav" range={{ in: 200, out: 1100 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
            <div className="flex justify-center mb-4">
              <Building2 className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold">Commercial Construction</h3>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold">Residential Development</h3>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
            <div className="flex justify-center mb-4">
              <Briefcase className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold">Project Management</h3>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold">Sustainable Building</h3>
          </div>
        </div>

        <div className="absolute right-0  space-y-4 text-white">
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5" />
            <span>info@bc-a.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5" />
            <span>123 Construction Ave, Building City</span>
          </div>
        </div>
      </ScrollContent>
    </DynamicBackground>
  );
}
