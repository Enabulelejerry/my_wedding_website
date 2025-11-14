"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import OurStorySection from "@/components/our-story-section";
import MeetTheCoupleSection from "@/components/meet-the-couple";
import MeetTheSquadSection from "@/components/meet-the-squad";
import GallerySection from "@/components/gallery-section";
import WeddingDetailsSection from "@/components/wedding-details";
import GiftsSection from "@/components/gifts-section";
import RSVPSection from "@/components/rsvp-section";
import FooterSection from "@/components/footer-section";
import FloatingPetals from "@/components/floating-petals";
import OurPromiseSection from "@/components/our-story-section";

export default function Home() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Smooth scroll behavior handled by CSS
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-blue-light to-peach-light scroll-smooth">
      <FloatingPetals />
      <HeroSection />
      <OurPromiseSection />
      <MeetTheCoupleSection />
      <MeetTheSquadSection />
      <GallerySection />
      <WeddingDetailsSection />
      <GiftsSection />
      {/* <RSVPSection /> */}
      <FooterSection />
    </div>
  );
}
