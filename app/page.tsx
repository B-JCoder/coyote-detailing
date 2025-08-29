"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Car,
  Droplets,
  Shield,
  ArrowRight,
  CheckCircle,
  Sun,
  Moon,
} from "lucide-react";

export default function CoyoteDetailingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your booking request! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const selectServiceAndScroll = (serviceType: string) => {
    setFormData({
      ...formData,
      service: serviceType,
    });
    scrollToSection("booking");
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:469-999-3453";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:Juluanimota@icloud.com";
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode ? "bg-slate-950" : "bg-gray-50",
    navBg: isDarkMode ? "bg-slate-900/95" : "bg-white/95",
    navBorder: isDarkMode ? "border-slate-700/50" : "border-gray-200",
    text: isDarkMode ? "text-slate-100" : "text-gray-900",
    textSecondary: isDarkMode ? "text-slate-300" : "text-gray-700",
    textMuted: isDarkMode ? "text-slate-400" : "text-gray-600",
    cardBg: isDarkMode
      ? "from-slate-800/90 to-slate-700/60"
      : "from-white to-gray-50/80",
    cardBorder: isDarkMode ? "border-slate-600/50" : "border-gray-300",
    sectionBg: isDarkMode ? "bg-slate-900" : "bg-white",
    sectionAlt: isDarkMode ? "bg-slate-950" : "bg-gray-100",
    heroBg: isDarkMode
      ? "from-slate-950 via-purple-950/30 to-blue-950/40"
      : "from-blue-50 via-purple-50/60 to-indigo-100/80",
    heroText: isDarkMode
      ? "from-white via-blue-100 to-purple-200"
      : "from-gray-900 via-blue-800 to-purple-800",
    heroSubtext: isDarkMode ? "text-blue-100/90" : "text-gray-700",
    footerBg: isDarkMode ? "bg-slate-950" : "bg-gray-900",
    inputBg: isDarkMode
      ? "bg-slate-800 border-slate-600 text-slate-100"
      : "bg-white border-gray-300 text-gray-900",
    selectBg: isDarkMode
      ? "bg-slate-800 border-slate-600 text-slate-100"
      : "bg-white border-gray-300 text-gray-900",
  };

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? `${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.navBorder} shadow-lg`
            : `${
                isDarkMode ? "bg-slate-900/80" : "bg-white/80"
              } backdrop-blur-sm border-b ${themeClasses.navBorder}/50`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/images/coyote-logo-new.png"
                alt="Coyote Detailing Logo"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                {[
                  { label: "Home", id: "hero" },
                  { label: "About", id: "about" },
                  { label: "Services", id: "services" },
                  { label: "Our Work", id: "work" },
                  { label: "Testimonials", id: "testimonials" },
                  { label: "Book Now", id: "booking" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative ${themeClasses.text} hover:text-primary transition-all duration-300 group text-sm xl:text-base font-medium`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${themeClasses.text} hover:text-primary transition-all duration-300 hover:scale-110`}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`${themeClasses.text} hover:text-primary transition-all duration-300 hover:scale-110 p-2`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${themeClasses.text} hover:text-primary transition-all duration-300 hover:scale-110 p-2`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.navBorder}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Our Work", id: "work" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Book Now", id: "booking" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 ${
                    themeClasses.text
                  } hover:text-primary hover:${
                    isDarkMode ? "bg-slate-800/50" : "bg-gray-100"
                  } transition-all duration-300 w-full text-left rounded-md font-medium`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${themeClasses.heroBg}`}
        >
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]"
                : "bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"
            }`}
          ></div>
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.15),transparent_50%)]"
                : "bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"
            }`}
          ></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-primary/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-primary/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent/50 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 sm:mb-12 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                <img
                  src="/images/coyote-logo-new.png"
                  alt="Coyote Detailing Logo"
                  className="relative h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl animate-float filter brightness-110 max-w-[90%]"
                />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance animate-fade-in-up leading-tight sm:leading-snug">
              <span
                className={`bg-gradient-to-r ${themeClasses.heroText} bg-clip-text text-transparent`}
              >
                Premium Mobile
              </span>
              <br />
              <span
                className={`bg-gradient-to-r ${
                  isDarkMode
                    ? "from-purple-200 via-blue-200 to-white"
                    : "from-purple-600 via-blue-600 to-gray-800"
                } bg-clip-text text-transparent`}
              >
                Car Detailing
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl ${themeClasses.heroSubtext} mb-8 sm:mb-10 max-w-4xl mx-auto text-pretty animate-fade-in-up delay-200 leading-relaxed px-2 sm:px-4`}
            >
              Professional car detailing services that come to you. Serving DFW,
              Frisco, and McKinney with{" "}
              <span
                className={`${
                  isDarkMode ? "text-white" : "text-gray-900"
                } font-semibold`}
              >
                luxury care
              </span>{" "}
              for your vehicle.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up delay-300 px-2 sm:px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 group border-0 rounded-full w-full sm:w-auto"
                onClick={() => scrollToSection("booking")}
              >
                Book Your Service
                <ArrowRight
                  className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 rounded-full w-full sm:w-auto"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>

            {/* Location & Contact */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base md:text-lg ${
                isDarkMode ? "text-blue-100/80" : "text-gray-600"
              } animate-fade-in-up delay-400 px-2 sm:px-4`}
            >
              <div
                className={`flex items-center gap-3 hover:${
                  isDarkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300 group justify-center sm:justify-start`}
              >
                <div
                  className={`p-2 ${
                    isDarkMode ? "bg-white/10" : "bg-gray-200"
                  } rounded-full group-hover:${
                    isDarkMode ? "bg-white/20" : "bg-gray-300"
                  } transition-all duration-300`}
                >
                  <MapPin size={20} />
                </div>
                <span className="font-medium">DFW • Frisco • McKinney</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div
                  className={`p-2 ${
                    isDarkMode ? "bg-white/10" : "bg-gray-200"
                  } rounded-full hover:${
                    isDarkMode ? "bg-white/20" : "bg-gray-300"
                  } transition-all duration-300`}
                >
                  <Phone size={20} />
                </div>
                <button
                  onClick={handlePhoneCall}
                  className={`hover:${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } transition-all duration-300 hover:scale-105 font-medium`}
                >
                  469-999-3453
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className={`w-5 sm:w-6 h-8 sm:h-10 border-2 ${
              isDarkMode ? "border-white/30" : "border-gray-400"
            } rounded-full flex justify-center`}
          >
            <div
              className={`w-1 h-3 sm:w-1.5 sm:h-3 ${
                isDarkMode ? "bg-white/50" : "bg-gray-500"
              } rounded-full mt-2 animate-pulse`}
            ></div>
          </div>
        </div> */}
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 sm:py-20 ${themeClasses.sectionBg} relative`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-900/10 to-blue-900/10"
              : "bg-gradient-to-r from-purple-100/30 to-blue-100/30"
          }`}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}
            >
              About Coyote Detailing
            </h2>
            <p
              className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto text-pretty`}
            >
              We bring professional car detailing services directly to your
              location, combining convenience with exceptional quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h3
                className={`text-xl sm:text-2xl font-semibold ${themeClasses.text} mb-4 sm:mb-6`}
              >
                Why Choose Us?
              </h3>
              {[
                {
                  icon: Sparkles,
                  title: "Premium Quality",
                  description:
                    "Professional-grade products and techniques for exceptional results.",
                },
                {
                  icon: Car,
                  title: "Mobile Convenience",
                  description:
                    "We come to your home or office - no need to travel anywhere.",
                },
                {
                  icon: Shield,
                  title: "Fully Insured",
                  description:
                    "Complete peace of mind with full insurance coverage.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${themeClasses.text} mb-2 group-hover:text-primary transition-colors duration-300`}
                    >
                      {feature.title}
                    </h4>
                    <p className={themeClasses.textSecondary}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`bg-gradient-to-br ${themeClasses.cardBg} p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border ${themeClasses.cardBorder}`}
            >
              <img
                src="/professional-car-detailing-service-in-action.png"
                alt="Professional car detailing"
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6 shadow-lg"
              />
              <p className={`${themeClasses.textSecondary} text-center italic`}>
                "Your vehicle deserves the best care, and we deliver it right to
                your doorstep."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-16 sm:py-20 ${themeClasses.sectionAlt}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}
            >
              Our Services
            </h2>
            <p
              className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto text-pretty`}
            >
              Comprehensive car detailing services tailored to keep your vehicle
              looking its absolute best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: Sparkles,
                title: "Exterior Cleaning",
                features: [
                  "Hand wash and dry",
                  "Paint decontamination",
                  "Wax and polish application",
                  "Wheel and tire cleaning",
                  "Chrome and trim restoration",
                ],
                service: "exterior",
              },
              {
                icon: Droplets,
                title: "Interior Cleaning",
                features: [
                  "Deep vacuum cleaning",
                  "Leather conditioning",
                  "Dashboard and console detailing",
                  "Window cleaning (interior)",
                  "Odor elimination treatment",
                ],
                service: "interior",
              },
            ].map((serviceItem, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 ${themeClasses.cardBorder} hover:border-primary/30 transform hover:scale-105 bg-gradient-to-br ${themeClasses.cardBg}`}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 sm:p-4 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg">
                      <serviceItem.icon className="text-primary" size={28} />
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl font-semibold ${themeClasses.text} group-hover:text-primary transition-colors duration-300`}
                    >
                      {serviceItem.title}
                    </h3>
                  </div>
                  <ul
                    className={`space-y-3 sm:space-y-4 ${themeClasses.textSecondary} mb-6 sm:mb-8`}
                  >
                    {serviceItem.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-3 group-hover:${themeClasses.text} transition-colors duration-300`}
                      >
                        <CheckCircle
                          className="text-primary flex-shrink-0"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    onClick={() => selectServiceAndScroll(serviceItem.service)}
                  >
                    Book {serviceItem.title}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      size={16}
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className={`py-16 sm:py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}
            >
              Our Work
            </h2>
            <p
              className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto text-pretty`}
            >
              See the quality and professionalism we bring to every vehicle we
              service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                src: "/luxury-car-detailing-1.png",
                alt: "Professional car detailing in progress",
              },
              {
                src: "/luxury-car-detailing-2.png",
                alt: "Clean shiny car after detailing",
              },
              {
                src: "/luxury-car-detailing-3.png",
                alt: "Professional detailing equipment",
              },
              {
                src: "/luxury-car-detailing-4.png",
                alt: "Mobile detailing service setup",
              },
              {
                src: "/luxury-car-detailing-5.png",
                alt: "Interior cleaning process",
              },
              {
                src: "/luxury-car-detailing-6.png",
                alt: "Sparkling clean car exterior",
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-48 sm:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge
                        variant="secondary"
                        className="bg-primary/90 text-primary-foreground shadow-lg"
                      >
                        Professional Work
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`py-16 sm:py-20 ${themeClasses.sectionAlt}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}
            >
              What Our Customers Say
            </h2>
            <p
              className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto text-pretty`}
            >
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Frisco, TX",
                rating: 5,
                text: "Absolutely amazing service! My car looks brand new. The convenience of having them come to my home was perfect.",
              },
              {
                name: "Mike Rodriguez",
                location: "McKinney, TX",
                rating: 5,
                text: "Professional, thorough, and reasonably priced. I've been using Coyote Detailing for over a year now.",
              },
              {
                name: "Jennifer Lee",
                location: "Dallas, TX",
                rating: 5,
                text: "The attention to detail is incredible. They transformed my car inside and out. Highly recommend!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} hover:border-primary/20`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current transition-all duration-300 hover:scale-110"
                        size={20}
                      />
                    ))}
                  </div>
                  <p
                    className={`${themeClasses.textSecondary} mb-4 italic text-base sm:text-lg leading-relaxed`}
                  >
                    "{testimonial.text}"
                  </p>
                  <div
                    className={`border-t ${
                      isDarkMode ? "border-slate-600" : "border-gray-300"
                    } pt-4`}
                  >
                    <p className={`font-semibold ${themeClasses.text}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${themeClasses.textMuted}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section
        id="booking"
        className={`py-16 sm:py-20 ${themeClasses.sectionBg}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${themeClasses.text} mb-4`}
            >
              Book Your Service
            </h2>
            <p
              className={`text-lg sm:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto text-pretty`}
            >
              Ready to give your car the premium treatment it deserves? Get in
              touch with us today.
            </p>
          </div>

          <Card
            className={`border-2 ${themeClasses.cardBorder} shadow-2xl bg-gradient-to-br ${themeClasses.cardBg}`}
          >
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.inputBg}`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.inputBg}`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.inputBg}`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.selectBg}`}
                    >
                      <option value="">Select a service</option>
                      <option value="exterior">Exterior Cleaning</option>
                      <option value="interior">Interior Cleaning</option>
                      <option value="both">
                        Full Service (Interior + Exterior)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="date"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Preferred Date *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.inputBg}`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="time"
                      className={`block text-sm font-medium ${themeClasses.text}`}
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.selectBg}`}
                    >
                      <option value="">Select time</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${themeClasses.text}`}
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your vehicle, location, or any special requests..."
                    className={`w-full transition-all duration-300 focus:scale-105 focus:shadow-lg ${themeClasses.inputBg}`}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Submit Booking Request
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${themeClasses.footerBg} text-white py-12 relative overflow-hidden`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-950/20 to-blue-950/20"
              : "bg-gradient-to-r from-purple-900/30 to-blue-900/30"
          }`}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img
                src="/images/coyote-logo-new.png"
                alt="Coyote Detailing Logo"
                className="h-12 sm:h-16 w-auto mb-4 transition-transform duration-300 hover:scale-105"
              />
              <p className={`text-slate-300 mb-4 leading-relaxed`}>
                Premium mobile car detailing services in the DFW area. We bring
                professional care directly to you.
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-4 text-white`}>
                Contact Info
              </h3>
              <div className="space-y-3 text-slate-300">
                <div
                  className={`flex items-center gap-3 hover:text-primary transition-colors duration-300`}
                >
                  <Phone size={16} />
                  <button
                    onClick={handlePhoneCall}
                    className={`hover:text-primary transition-colors`}
                  >
                    469-999-3453
                  </button>
                </div>
                <div
                  className={`flex items-center gap-3 hover:text-primary transition-colors duration-300`}
                >
                  <Mail size={16} />
                  <button
                    onClick={handleEmailClick}
                    className={`hover:text-primary transition-colors`}
                  >
                    Juluanimota@icloud.com
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Serving DFW, Frisco & McKinney</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-4 text-white`}>
                Services
              </h3>
              <ul className="space-y-3 text-slate-300">
                {[
                  { label: "Exterior Cleaning", service: "exterior" },
                  { label: "Interior Cleaning", service: "interior" },
                  { label: "Full Service Detailing", service: "both" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => selectServiceAndScroll(item.service)}
                      className={`hover:text-primary transition-all duration-300 hover:translate-x-1`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className={`text-slate-400`}>Mobile Service</li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t border-slate-700 mt-8 pt-8 text-center text-slate-400`}
          >
            <p>&copy; 2024 Coyote Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
