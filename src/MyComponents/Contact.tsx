"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";
import { motion } from "motion/react";
import ScrollContent from "./scrollContent";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useFormDataStore } from "@/stores/store";
import { useTranslations } from "next-intl";

interface Props {
  scrollToTop?: boolean | false;
  header?: string;
  desc?: string;
  btnText?: string;
}

export default function Contact({ scrollToTop, header, desc, btnText }: Props) {
  const t = useTranslations("ContactPage");

  const {
    FirstName,
    setFirstName,
    LastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    projectType,
    setProjectType,
    projectDetails,
    setProjectDetails,
  } = useFormDataStore();
  const formData = {
    FirstName,
    LastName,
    email,
    phone,
    projectType,
    projectDetails,
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (scrollToTop) {
      scrollTo({ top: 0 });
    }

    setIsMounted(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Apply conditional animation based on device capability and user preference
  const getAnimationProps = (delay = 0) => {
    if (!isMounted || isReducedMotion) {
      return {}; // No animation on SSR or when reduced motion is preferred
    }

    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3, delay },
    };
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
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
    hidden: { x: 100, opacity: 0 },
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        // Need to send content to API
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setProjectDetails("");

      setStatus({
        type: "success",
        message: t("status.succMsg"),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: t("status.errMsg"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="flex items-center justify-center min-h-screen">
      <Image
        src="/building_frame.svg"
        width={1000}
        height={1000}
        className="w-full h-screen absolute z-5"
        alt="Construction Building Frame"
        draggable={false}
      />
      <section className="relative w-full overflow-hidden py-16 bg-white to-black/40">
        <div className="container mx-auto px-4">
          {/* Section Header - Centered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
              {header}
            </h2>
            <p className="text-gray-600">{desc}</p>
          </motion.div>

          {/* Contact Content */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Form Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-3/5 z-10"
              >
                <form onSubmit={handleSubmit} className="h-full">
                  <Card className="bg-white text-black shadow-xl border-0 rounded-xl overflow-hidden h-full">
                    <CardHeader className="pb-2 pt-6">
                      <CardTitle className="text-xl">
                        {t("form.header")}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {t("form.desc")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Name Fields - Responsive */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="firstName"
                            className="text-xs font-medium text-gray-700"
                          >
                            {t("form.fName.label")}
                          </label>
                          <Input
                            id="firstName"
                            value={formData.FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={t("form.fName.placeholder")}
                            className="h-10 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="lastName"
                            className="text-xs font-medium text-gray-700"
                          >
                            {t("form.lName.label")}
                          </label>
                          <Input
                            id="lastName"
                            value={formData.LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder={t("form.lName.placeholder")}
                            className="h-10 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-gray-700"
                        >
                          {t("form.email.label")}
                        </label>
                        <Input
                          id="email"
                          value={formData.email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder={t("form.email.placeholder")}
                          className="h-10 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      {/* Phone & Project Type - Responsive */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="phone"
                            className="text-xs font-medium text-gray-700"
                          >
                            {t("form.phone.label")}
                          </label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t("form.phone.placeholder")}
                            className="h-10 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="projectType"
                            className="text-xs font-medium text-gray-700"
                          >
                            {t("form.projectType.label")}
                          </label>
                          <select
                            id="projectType"
                            className="h-10 w-full rounded-md border border-blue-300 text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            onChange={(e) => setProjectType(e.target.value)}
                          >
                            <option value="">
                              {t("form.projectType.options.1")}
                            </option>
                            <option value="Commercial Construction">
                              {t("form.projectType.options.2")}
                            </option>
                            <option value="Residential Development">
                              {t("form.projectType.options.3")}
                            </option>
                            <option value="Infrastructure Project">
                              {t("form.projectType.options.4")}
                            </option>
                            <option value="Engineering Consultation">
                              {t("form.projectType.options.5")}
                            </option>
                            <option value="Other">
                              {t("form.projectType.options.6")}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="message"
                          className="text-xs font-medium text-gray-700"
                        >
                          {t("form.projectDetails.label")}
                        </label>
                        <Textarea
                          id="message"
                          value={formData.projectDetails}
                          onChange={(e) => setProjectDetails(e.target.value)}
                          placeholder={t("form.projectDetails.placeholder")}
                          className="border-blue-300 min-h-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row items-center justify-between pt-0 pb-6 px-6 gap-4">
                      {/* Status Messages */}
                      {status.type && (
                        <div
                          className={`p-3 rounded-lg text-sm w-full ${
                            status.type === "success"
                              ? "bg-green-50 text-green-800"
                              : "bg-red-50 text-red-800"
                          }`}
                        >
                          {status.message}
                        </div>
                      )}
                      <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-blue-900/20 transition-all text-sm w-full sm:w-auto"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {t("btnLoading")}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="mr-2 h-5 w-5" />
                            {btnText ? `${btnText}` : "Send Inquiry"}
                          </span>
                        )}
                      </motion.button>
                    </CardFooter>
                  </Card>
                </form>
              </motion.div>

              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-2/5 z-10"
              >
                <div className="space-y-4 h-full flex flex-col">
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden border border-blue-300 shadow-xl p-6 flex-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col space-y-6">
                      <h3 className="font-bold text-lg text-black/80">
                        {t("sideCard.title")}
                      </h3>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-full">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-black/80">
                            {t("sideCard.info.1.title")}
                          </p>
                          <p className="text-sm text-gray-600">
                            {t("sideCard.info.1.desc")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-full">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-black/80">
                            {t("sideCard.info.2.title")}
                          </p>
                          <p className="text-sm text-gray-600">
                            {t("sideCard.info.2.desc")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-full">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-black/80">
                            {t("sideCard.info.3.title")}
                          </p>
                          <p className="text-sm text-gray-600">
                            {t("sideCard.info.3.desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden border border-blue-300 shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src="/orion_hero1.jpg"
                        alt="Map"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <p className="font-bold">
                            {t("sideCard.imgCard.title")}
                          </p>
                          <p className="text-sm">
                            {t("sideCard.imgCard.extra")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
