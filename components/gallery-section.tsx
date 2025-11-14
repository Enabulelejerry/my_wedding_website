"use client";

import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { query: "/gallery/gal_1.jpg" },
    { query: "/gallery/gal_2.jpg" },
    { query: "/gallery/gal_3.jpg" },
    { query: "/gallery/gal_4.jpg" },
    { query: "/gallery/gal_7.jpg" },
    { query: "/gallery/gal_8.jpg" },
    { query: "/gallery/gal_11.jpg" },
    { query: "/gallery/gal_12.jpg" },
    { query: "/gallery/gal_16.jpg" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-peach-light/20 to-blue-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-4">
            Gallery of Love
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">📸</span>
            <div className="h-px w-12 bg-gold" />
          </div>
        </div>

        {/* CSS Grid Masonry - Better for full images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.query}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-lg">💕</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={images[selectedImage].query}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
