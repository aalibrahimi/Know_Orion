import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import GradientText from "./GradientText";
import ScrollContent from "./scrollContent";
import { motion } from "motion/react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export function Footer(): React.ReactElement {
  const t = useTranslations('Footer')

  const footerLinks: FooterGroup[] = [
    {
      title: t('nav.company.title'),
      links: [
        { name: t('nav.company.links.1'), href: "/about" },
        { name: t('nav.company.links.2'), href: "/careers" },
        { name: t('nav.company.links.3'), href: "/contact" },
      ],
    },
    {
      title: t('nav.resources.title'),
      links: [
        { name: t('nav.resources.links.1'), href: "/blog" },
        { name: t('nav.resources.links.2'), href: "/docs" },
        { name: t('nav.resources.links.3'), href: "/help" },
      ],
    },
    {
      title: t('nav.legal.title'),
      links: [
        { name: t('nav.legal.links.1'), href: "/privacy" },
        { name: t('nav.legal.links.2'), href: "/terms" },
        { name: t('nav.legal.links.3'), href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="py-4 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
        <div className="flex items-center">
          <span className="text-blue-500 font-bold">KNOZ</span>
          <span className="mx-1 font-bold">|</span>
          <span className="text-red-500 font-bold">ORION</span>
        </div>

        <span className="h-4 w-px bg-gray-700 hidden md:block"></span>

        <p>
          &copy; {new Date().getFullYear()} KNOZ | ORION. All rights
          reserved.
        </p>

        <span className="h-4 w-px bg-gray-700 hidden md:block"></span>

        <Link
          href="https://codewithali.com/"
          draggable={false}
          className="font-semibold group transition-all duration-300 hover:scale-105 flex items-center"
        >
          <img
            src="/codewithali.png"
            className="h-6 w-auto mix-blend-screen isolate mr-2"
            alt="CodeWithAli Logo"
            draggable={false}
          />
          <p className="text-slate-600 group-hover:hidden">CodeWithAli</p>
          <p className="text-blue hidden group-hover:inline">
            <GradientText>CodeWithAli</GradientText>
          </p>
        </Link>
      </div>
    </div>
  </footer>
  );
}

      // {/* Footer */}
      // <footer className="bg-gray-900 text-white py-12">
      //   <div className="container">
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      //       <div>
      //         <h3 className="font-bold text-lg mb-4">Orion Engineering</h3>
      //         <p className="text-gray-400 text-sm mb-4">
      //           Providing comprehensive and specialist services of the highest quality in Architecture, Engineering,
      //           Planning, Construction Supervision and Project Management.
      //         </p>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-lg mb-4">Knoz Al Najjah</h3>
      //         <p className="text-gray-400 text-sm mb-4">
      //           One of Iraq's leading construction companies specializing in delivering complex construction projects
      //           across multiple sectors.
      //         </p>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-lg mb-4">Quick Links</h3>
      //         <ul className="space-y-2 text-gray-400 text-sm">
      //           <li>
      //             <Link href="#about" className="hover:text-white transition-colors">
      //               About Us
      //             </Link>
      //           </li>
      //           <li>
      //             <Link href="#services" className="hover:text-white transition-colors">
      //               Services
      //             </Link>
      //           </li>
      //           <li>
      //             <Link href="#projects" className="hover:text-white transition-colors">
      //               Projects
      //             </Link>
      //           </li>
      //           <li>
      //             <Link href="#contact" className="hover:text-white transition-colors">
      //               Contact
      //             </Link>
      //           </li>
      //         </ul>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-lg mb-4">Contact Information</h3>
      //         <ul className="space-y-2 text-gray-400 text-sm">
      //           <li>Dubai, UAE & Baghdad, Iraq</li>
      //           <li>info@orionengineering.com</li>
      //           <li>info@knozalnajjah.com</li>
      //           <li>+971 4 123 4567 / +964 7 123 4567</li>
      //         </ul>
      //       </div>
      //     </div>

      //     <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      //       <p className="text-gray-400 text-sm">
      //         &copy; {new Date().getFullYear()} Orion Engineering & Knoz Al Najjah. All rights reserved.
      //       </p>
      //       <div className="mt-4 md:mt-0">
      //         <ul className="flex space-x-4">
      //           <li>
      //             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
      //               Privacy Policy
      //             </Link>
      //           </li>
      //           <li>
      //             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
      //               Terms of Service
      //             </Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </footer>