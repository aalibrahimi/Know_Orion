"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/MyComponents/Footer";
import SandEffect from "@/MyComponents/sand-effect";
import Navbar from "@/MyComponents/navbar";
import Contact from "@/MyComponents/Contact";
import BackgroundFrame from "@/MyComponents/backgroundFrame";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";
import AboutPage from "@/MyComponents/about";

type ProjectItem = {
  title: string;
  location: string;
  category: string;
  year: number;
  image: string;
};

export default function Home() {
  const t = useTranslations("HomePage");
  const p = useTranslations("Projects");
  const c = useTranslations("ContactPage");

  const locale = useLocale();
  let isRTL = isRtlLang(locale);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projects: ProjectItem[] = [
    {
      title: p("project.1.title"),
      location: p("project.1.location"),
      category: p("project.1.category"),
      year: Number(p("project.1.year")),
      image: "/hero_building.jpg",
    },
    {
      title: p("project.2.title"),
      location: p("project.2.location"),
      category: p("project.2.category"),
      year: Number(p("project.2.year")),
      image: "/orion_hero1.jpg",
    },
    {
      title: p("project.3.title"),
      location: p("project.3.location"),
      category: p("project.3.category"),
      year: Number(p("project.3.year")),
      image: "/orion_hero2.jpg",
    },
    {
      title: p("project.4.title"),
      location: p("project.4.location"),
      category: p("project.4.category"),
      year: Number(p("project.4.year")),
      image: "/orion_hero3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex flex-col justify-center items-center bg-blue-300 px-4 py-16 md:py-0"
      >
        <BackgroundFrame className="z-5" />
        <div className={`w-[50px] h-screen absolute overflow-hidden ${isRTL ? 'right-1/5' : 'inset-1/5'} top-0`}>
          <SandEffect intensity={"heavy"} />
          <SandEffect intensity={"heavy"} />
        </div>
        <div className={`w-[50px] h-screen absolute overflow-hidden ${isRTL ? 'left-130' : 'right-130'}`}>
          <SandEffect intensity={"heavy"} />
          <SandEffect intensity={"heavy"} />
        </div>

        <motion.div
          className="container mx-auto px-4 z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={fadeIn}
          >
            <span className="text-blue-600">{t("title.1")}</span> {t("title.2")}
            <br />
            <span className="text-red-500">{t("title.3")}</span>
            {t("title.4")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            variants={fadeIn}
          >
            {t("titleDesc")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeIn}
          >
            <Link href="#contact">
              <Button className="px-6 py-6 rounded-none font-medium flex items-center gap-2 bg-blue-900 text-white hover:bg-gray-800 transition-all">
                {t("btn1")}
                {isRTL ? (
                  <ArrowLeft className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                className="px-6 py-6 rounded-none bg-white border-black text-black hover:bg-black hover:text-white"
              >
                {t("btn2")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeIn}
          >
            <div className="flex justify-center items-center mt-2 gap-4">
              <Link href="https://knoz.codewithali.com/" target="_blank">
                <div className="bg-white border-black border-2 rounded-full hover:bg-blue-400/80 object-cover w-12 h-12 flex justify-center items-center">
                  <Image
                    src="/KnozIcon.svg"
                    alt="Knoz Icon"
                    width={1000}
                    height={1000}
                    className="w-15 h-auto"
                    draggable={false}
                  />
                </div>
              </Link>

              <Link href="https://www.orionuae.com/" target="_blank">
                <div className="bg-white border-red-500 border-2 rounded-full hover:bg-red-700/65 hover:contrast-175 object-cover w-12 h-12 flex justify-center items-center">
                  <Image
                    src="/OrionIcon.svg"
                    alt="Knoz Icon"
                    width={1000}
                    height={1000}
                    className="w-15 h-auto"
                    draggable={false}
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-center px-2">
            <span className="text-2xl sm:text-3xl font-bold text-blue-700">
              {t("stats.exp.nr")}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 text-center font-bold">
              {t("stats.exp.txt")}
            </span>
          </div>
          <div className="flex flex-col items-center px-2">
            <span className="text-2xl sm:text-3xl font-bold text-red-700">
              {t("stats.projects.nr")}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 text-center font-bold">
              {t("stats.projects.txt")}
            </span>
          </div>
          <div className="flex flex-col items-center px-2">
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">
              {t("stats.members.nr")}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 text-center z-10 font-bold">
              {t("stats.members.txt")}
            </span>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutPage />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-black">
                {p("title")}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                {p("desc")}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-black hover:bg-gray-800 text-white text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 flex items-center">
                {p("btn")}
                {isRTL ? (
                  <ArrowLeft className={`${isRTL ? 'mr-2' : 'ml-2'} h-3 w-3 sm:h-4 sm:w-4`} />
                ) : (
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-3 w-3 sm:h-4 sm:w-4`} />
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[300px] md:h-[350px] bg-gray-100 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="bg-white text-black mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-white/80 text-sm">
                          {project.location}
                        </p>
                        <p className="text-white/80 text-sm">{project.year}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black flex items-center"
                      >
                        {p("innerbtn")}
                        {isRTL ? (
                          <ExternalLink className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3`} />
                        ) : (
                          <ExternalLink className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3`} />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact header={c("header")} desc={c("desc")} btnText={c("submitBtn")} />

      {/* Footer */}
      <Footer />
    </main>
  );
}