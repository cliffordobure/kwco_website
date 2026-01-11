/* eslint-disable no-unused-vars */
// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Check,
  Scale,
  Briefcase,
  FileText,
  Clock,
  Target,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lightbulb,
  Eye,
  ChevronRight,
  Star,
  TrendingUp,
  Building2,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// Import banner images
import banner1 from "./../assets/newImages/hero2.png";
import banner2 from "./../assets/newImages/hero3.png";
import banner3 from "./../assets/newImages/hero4.png";
import banner4 from "./../assets/newImages/hero5.png";
// import banner5 from "./../assets/newImages/slidder5.jpg";
import banner6 from "./../assets/newImages/hero6.png";
import banner7 from "./../assets/newImages/hero7.png";
// import banner8 from "./../assets/newImages/slidder8.jpg";
import banner9 from "./../assets/newImages/slidder9.jpg";

import bank from "./../assets/client/kingdom bank.png";
import Melvin from "./../assets/team/Melvin.jpg";
import Jackline from "./../assets/newImages/jackylanding.jpg";
import Seif from "./../assets/newImages/seifbest.jpg";
import bidico from "./../assets/client/bidco_logo.png";
import hashi from "./../assets/headers/hashi.png";
import Skbig from "./../assets/newImages/skbest4.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Array of your banner images
  const bannerImages = [banner2, banner3, banner4, banner6, banner7];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval);
  }, [bannerImages.length]);

  // Mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-12 h-12" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters with proven track record.",
      link: "/practice-areas/litigation",
      stats: "95% Success Rate",
    },
    {
      id: "debt-collection",
      icon: <Briefcase className="w-12 h-12" />,
      title: "Debt Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions maximize recovery rates.",
      link: "/practice-areas/debt-collection",
      stats: "87% Recovery Rate",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-12 h-12" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions with meticulous attention to detail.",
      link: "/practice-areas/conveyancing",
      stats: "500+ Transactions",
    },
    {
      id: "dispute-resolution",
      icon: <Shield className="w-12 h-12" />,
      title: "Dispute Resolution",
      description:
        "Alternative dispute resolution services including mediation and arbitration for cost-effective solutions.",
      link: "/practice-areas/dispute-resolution",
      stats: "92% Settlement Rate",
    },
  ];

  const testimonials = [
    {
      client: "Sarah Kimani",
      position: "CEO, TechStart Kenya",
      content:
        "KWCO Advocates delivered exceptional results in our complex litigation case. Their strategic approach and attention to detail exceeded our expectations.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      client: "David Ochieng",
      position: "Managing Director, FinanceCorp",
      content:
        "The debt collection team at KWCO is simply outstanding. They recovered 95% of our outstanding debts within 6 months.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      client: "Grace Wanjiku",
      position: "Property Developer",
      content:
        "Their conveyancing services are impeccable. Every transaction was handled with precision and professionalism.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "Proven",
      label: "Track Record",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "Client",
      label: "Satisfaction",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Client Support",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We maintain the highest standards of legal practice and client service.",
      icon: <Star className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Integrity",
      description:
        "Honesty and ethical conduct in all our professional relationships.",
      icon: <Shield className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Innovation",
      description:
        "Embracing modern legal solutions and technology for better outcomes.",
      icon: <Lightbulb className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Client Focus",
      description:
        "Dedicated to understanding and exceeding our clients' expectations.",
      icon: <Users className="w-12 h-12 text-blue-400" />,
    },
  ];

  const recentInsights = [
    {
      title: "Posta Kenya",
      category: "Financial",
      description:
        "Successfully handled complex debt recovery and legal compliance matters for this national postal service provider.",
      image: bank,
    },
    {
      title: "Hashi Energy",
      category: "Technology",
      description:
        "Provided comprehensive legal services for energy sector regulations and commercial transactions.",
      image: hashi,
    },
    {
      title: "Bidco Africa",
      category: "Manufacturing",
      description:
        "Expert legal guidance for corporate governance, compliance, and commercial law matters.",
      image: bidico,
    },
  ];

  const teamMembers = [
    {
      name: "SK Waweru",
      position: "Managing Partner",
      expertise: ["Debt Collection", "Banking Law", "Debt Recovery"],
      experience: "15+ Years",
      image: Skbig,
      achievements: [
        "500+ Cases Handled",
        "95% Success Rate",
        "Expert Negotiator",
      ],
    },
    {
      name: "Jackline Jowi",
      position: "Senior Partner",
      expertise: ["Litigation", "Civil Law", "Commercial Disputes"],
      experience: "12+ Years",
      image: Jackline,
      achievements: [
        "Landmark Cases",
        "Supreme Court Experience",
        "Strategic Litigation",
      ],
    },
    {
      name: "Seif Mohammed",
      position: "Partner",
      expertise: ["Conveyancing", "Property Law", "Real Estate"],
      experience: "10+ Years",
      image: Seif,
      achievements: [
        "500+ Transactions",
        "Property Expert",
        "Due Diligence Specialist",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Enhanced Hero Section with Advanced Animations */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20 animate-pulse"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Image Slider Background with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={image}
                  alt={`Law office banner ${index + 1}`}
                  className="absolute inset-0 w-full h-full hero-image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows with Hover Effects */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 hover:shadow-2xl group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 hover:shadow-2xl group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-[2px] transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Enhanced Slide Indicators with Progress */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced Content with Advanced Animations */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            {/* Animated Logo/Badge */}
            <div className="mb-8 animate-bounce-slow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Main Title with Gradient and Glow */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                KWCO Advocates
              </span>
            </h1>

            {/* Animated Tagline with Typing Effect */}
            <div
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-2xl md:text-3xl mb-4 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                <span
                  className="inline-block animate-slide-in-left"
                  style={{ animationDelay: "0.5s" }}
                >
                  Excellence in Legal Practice
                </span>
                <span className="inline-block mx-4 text-blue-400 animate-pulse">
                  •
                </span>
                <span
                  className="inline-block animate-slide-in-right"
                  style={{ animationDelay: "0.7s" }}
                >
                  Trusted by Leading Organizations
                </span>
                <span className="inline-block mx-4 text-blue-400 animate-pulse">
                  •
                </span>
                <span
                  className="inline-block animate-slide-in-left"
                  style={{ animationDelay: "0.9s" }}
                >
                  Strategic Legal Solutions for Modern Business
                </span>
              </p>
            </div>

            {/* Enhanced CTA Buttons with Hover Effects */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-5 rounded-xl text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Legal Consultation
                  <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                to="/about"
                className="group relative border-2 border-white/30 text-white px-10 py-5 rounded-xl text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Expertise
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Floating Stats */}
            <div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
              style={{ animationDelay: "1.3s" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">KWCO Advocates</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At KWCO Advocates, we are a distinguished legal practice committed
              to delivering exceptional legal services across a broad spectrum
              of practice areas. Our team of seasoned legal practitioners offers
              unparalleled expertise, strategic advocacy, and bespoke legal
              solutions tailored to meet the unique needs of our esteemed
              clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Our Mission",
                description:
                  "To be the premier law firm in Kenya by creating meaningful experiences for each client through innovative legal solutions.",
                bg: "from-blue-600/20 to-blue-800/20",
              },
              {
                icon: <Eye className="w-8 h-8 text-blue-400" />,
                title: "Our Vision",
                description:
                  "To be recognized as Kenya's most trusted legal partner, setting industry standards for excellence and innovation.",
                bg: "from-slate-600/20 to-slate-800/20",
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                title: "Our Experience",
                description:
                  "With 15+ years of cumulative experience in Kenya's legal system, we bring deep expertise to every case.",
                bg: "from-blue-600/20 to-blue-800/20",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bg} p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced About Navigation Cards */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg mr-4 mb-4"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            {[
              { to: "/about/our-story", text: "Our Story" },
              { to: "/about/mission-vision", text: "Mission & Vision" },
              { to: "/about/core-values", text: "Core Values" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="inline-flex items-center border border-slate-500/50 text-slate-300 px-6 py-4 rounded-lg hover:bg-slate-700/50 hover:border-slate-400/50 transition-all duration-300 backdrop-blur-sm mr-4 mb-4"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section
        id="values"
        className="py-24 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our practice and define our commitment
              to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Practice Areas Section */}
      <section id="practice-areas" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Expertise Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive expert services across four core practice
              areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mb-8 border border-blue-500/30">
                    {React.cloneElement(area.icon, {
                      className: "w-12 h-12 text-blue-400",
                    })}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={area.link}
                      className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors group-hover:translate-x-2 duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <span className="text-sm text-blue-400 font-semibold bg-blue-600/20 px-3 py-1 rounded-full">
                      {area.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/practice-areas"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Practice Areas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Our People Section */}
      <section
        id="our-people"
        className="py-24 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">People</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals behind KWCO Advocates' success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 team-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold inline-block">
                      {member.experience}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/our-people"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Our Full Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Client Insights Section */}
      <section id="insights" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Trusted Clients</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Delivering Excellence: Trusted by Leading Organizations for Legal
              and Debt Collection Services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentInsights.map((insight, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-lg flex items-center justify-center">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full client-logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {insight.title}
                      </h3>
                      <span className="text-blue-400 text-sm font-semibold bg-blue-600/20 px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/insights"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Clients
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Client <span className="text-blue-300">Testimonials</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Hear what our clients say about their experiences with KWCO
              Advocates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="mb-6">
                  <p className="text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-lg">{testimonial.client}</p>
                  <p className="text-blue-200">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Contact <span className="text-blue-400">Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our legal team for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-blue-400" />,
                title: "Visit Us",
                content: [
                  "Nineth Planet Apartments",
                  "Suite P4 Karbarnet Gardens",
                  "Gong Rd",
                ],
              },
              {
                icon: <Phone className="w-8 h-8 text-blue-400" />,
                title: "Call Us",
                content: ["020 20202 8640", "0792 280 484"],
              },
              {
                icon: <Mail className="w-8 h-8 text-blue-400" />,
                title: "Email Us",
                content: ["info@kwco.legal", "www.kwco.legal"],
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                  {contact.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {contact.title}
                </h3>
                {contact.content.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-300 mb-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 p-8 rounded-2xl text-center border border-red-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Emergency Legal Services
            </h3>
            <p className="text-gray-300 mb-4">
              For urgent legal matters outside office hours
            </p>
            <p className="text-3xl font-bold text-red-400">+254 725 766457</p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Ready to Work With <span className="text-blue-400">Us</span>?
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            Let our experienced team of legal professionals help you with your
            legal needs. Get started today and experience the difference that
            professional legal services make.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Started Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;

