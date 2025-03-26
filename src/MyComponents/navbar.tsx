"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

interface Language {
  code: string;
  name: string;
  flag?: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "ar" },
];

export default function Navbar() {
  const t = useTranslations("NavBar");
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );

  const [scrollY, setScrollY] = useState(0);
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavbarSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: t("routes.home"), href: "#home" },
    { label: t("routes.about"), href: "#about" },
    { label: t("routes.projects"), href: "#projects" },
    { label: t("routes.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const matchedLanguage =
      languages.find((lang) => lang.code === locale) || languages[0];
    setCurrentLanguage(matchedLanguage);
  }, [locale]);

  const changeLanguage = (language: Language) => {
    // Change language while staying on current path
    // router.replace(pathname, {locale: language.code})
    if (language.code === locale) return;

    window.location.href = `/${language.code}${pathname === "/" ? "" : pathname} `;

    // router.push(pathname, {locale: language.code})
    // setCurrentLanguage(language)
    // Here you would typically call your i18n library's function to change the locale
    // For example: i18n.changeLanguage(language.code);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isNavbarSolid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="text-2xl font-bold block">
            {/* First Row */}
            <div className="flex items-center gap-2">
              <Link href="https://knoz.codewithali.com/" target="_blank">
                <span className="text-blue-600 font-extrabold flex justify-center items-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/knoz.png"
                    alt="Knoz Logo"
                    width={1000}
                    height={1000}
                    className="w-10 h-auto inline mb-1"
                  />
                  <p className="inline ml-1">{t("company.knoz")}</p>
                </span>
              </Link>
              <Separator orientation="vertical" className="h-8 w-0.5" />
              <Link href="https://www.orionuae.com/" target="_blank">
                <span className="text-red-600 font-medium flex justify-center items-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/orion_logo.png"
                    alt="Orion Logo"
                    width={1000}
                    height={1000}
                    className="w-8 h-auto inline"
                  />
                  <p className="inline ml-1">{t("company.orion")}</p>
                </span>
              </Link>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-center">
              <span className="text-sky-950 font-bold flex justify-center items-center hover:scale-105 transition-transform duration-300">
                <Image
                  src="/alpha_logo.png"
                  alt="Alpha Logo"
                  width={1000}
                  height={1000}
                  className="w-10 h-auto inline"
                />
                <p className="inline ml-1">{t('company.alpha')}</p>
              </span>
            </div>
          </section>
        </motion.div>
        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-md transition-all duration-100 relative group ${
                isNavbarSolid
                  ? "text-gray-900 font-medium"
                  : "text-gray-900 font-bold"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md text-black hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline-block">
                {currentLanguage.flag}
              </span>
              <span className="sr-only">{t("labelSwitchLang")}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-gray-950 text-black dark:text-white"
          >
            <DropdownMenuLabel>{t("labelSelectLang")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                className={cn(
                  "cursor-pointer flex items-center gap-2",
                  currentLanguage.code === language.code &&
                    "font-medium bg-gray-100 dark:bg-gray-800"
                )}
                onClick={() => changeLanguage(language)}
              >
                <span className="text-base">{language.flag}</span>
                {language.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="mailto:Knozalnajah@gmail.com" className="hidden md:block">
          <Button
            variant="outline"
            className="text-white border-black bg-blue-700"
          >
            {t("btn")}
          </Button>
        </Link>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-black"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
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
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-gray-900 font-medium text-lg py-2 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="mailto:Knozalnajah@gmail.com"
                  onClick={closeMenu}
                  className="mt-2"
                >
                  <Button
                    variant="outline"
                    className="w-full text-white border-black bg-blue-700"
                  >
                    {t("btn")}
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
