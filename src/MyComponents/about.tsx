"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations('AboutPage');

  const slideFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const slideFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section heading with better spacing */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            <span className="text-blue-600">{t('title.1')}</span>,
            <span className="text-red-600">{t('title.2')}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            {t('titleDesc')}
          </p>
        </div>

        {/* Two-column layout for about section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/orion_hero1.jpg"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
          >
            <div className="flex gap-2 items-center mb-4">
              <span className="text-2xl font-bold text-blue-600">{t('knozSection.title.1')}</span>
              <span className="text-xl text-gray-700">{t('knozSection.title.2')}</span>
            </div>
            <p className="text-gray-600 mb-6">
              {t('knozSection.desc')}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('knozSection.stats.exp.nr')} {t('knozSection.stats.exp.txt')}
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('knozSection.stats.projects.nr')} {t('knozSection.stats.projects.txt')}
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('knozSection.stats.info')}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ORION section - columns reversed */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
            className="order-2 md:order-1"
          >
            <div className="flex gap-2 items-center mb-4">
              <span className="text-2xl font-bold text-red-600">{t('orionSection.title.1')}</span>
              <span className="text-xl text-gray-700">{t('orionSection.title.2')}</span>
            </div>
            <p className="text-gray-600 mb-6">
              {t('orionSection.desc')}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('orionSection.stats.exp.nr')} {t('orionSection.stats.exp.txt')}
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('orionSection.stats.designs.nr')} {t('orionSection.stats.designs.txt')}
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700">
                  {t('orionSection.stats.info')}
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
            className="relative h-[400px] md:h-[500px] order-1 md:order-2"
          >
            <Image
              src="/orion_hero2.jpg"
              alt="Engineering work"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* Combined Unison Section - After the ORION section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-blue-50 rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative h-[400px] md:h-[500px] ">
              <Image
                src="/orion_hero3.jpg"
                alt="KNOZ ORION Unified"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex gap-2 items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">{t('knozSection.title.1')}</span>
                <span className="text-2xl font-bold text-black">|</span>
                <span className="text-2xl font-bold text-red-600">{t('orionSection.title.1')}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                {t('knozOrionSection.subtitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('knozOrionSection.desc')}
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    {t('knozOrionSection.stats.1')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    {t('knozOrionSection.stats.2')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                  {t('knozOrionSection.stats.3')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                  {t('knozOrionSection.stats.4')}
                  </span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="rounded-none border-black text-black bg-gradient-to-r from-blue-400 via-blue-500 to-red-400 hover:text-white"
              >
                {t('knozOrionSection.stats.btn')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
