"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date("2025-12-20T10:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/benin_couple.jpg')",
        backgroundPosition: "center 3%", // Moves the image down
      }}
      // className="relative min-h-screen flex items-center bg-[top_left] justify-center overflow-hidden pt-20 bg-cover  bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/images/couples.jpg')",
      //   backgroundSize: "cover",

      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundColor: "#000", // or your theme color for empty areas
      //   height: "100vh",
      // }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Additional gradient overlay for aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach/20 via-transparent to-black/40 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative sparkles */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-radial from-gold/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-radial from-blue/15 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
          Enabulele Jerry{" "}
          <span className="block text-4xl md:text-6xl mt-2">
            & Esther Samson
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          Our Fairytale Begins
        </p>
        <p className="text-lg md:text-xl text-[#D4AF37] mb-12 font-bold">
          December 20<sup>th</sup> 2025 💫
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto">
          {[
            { label: "Days", value: countdown.days },
            { label: "Hours", value: countdown.hours },
            { label: "Mins", value: countdown.minutes },
            { label: "Sec", value: countdown.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/20 to-gold/30 backdrop-blur-md rounded-lg p-4 border border-gold/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-2xl md:text-3xl font-serif font-bold text-white">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-sm text-white/80 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-white hover:bg-white/90 text-deep-blue px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
            onClick={() =>
              document
                .getElementById("rsvp")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ✨ Save the Date
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-transparent"
            onClick={() =>
              document
                .getElementById("details")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Details
          </Button>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white" />
          <span className="text-2xl text-white">💕</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}
