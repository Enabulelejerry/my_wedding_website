export default function OurPromiseSection() {
  const promises = [
    {
      icon: "💝",
      title: "To Love",
      description:
        "To cherish each other through all of life's seasons, in joy and in challenge.",
    },
    {
      icon: "🤲",
      title: "To Support",
      description:
        "To be each other's biggest champion and safest harbor in every storm.",
    },
    {
      icon: "🌠",
      title: "To Grow",
      description:
        "To build a life together that reflects our deepest values and shared dreams.",
    },
    {
      icon: "🏡",
      title: "To Build",
      description:
        "To create a home filled with warmth, laughter, and endless love.",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/couple_relax.jpg')",
        backgroundPosition: "center 3%", // Moves the image down
      }}
    >
      {/* Dark overlay with opacity */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/20 via-transparent to-gold/10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Promise
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">💕</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto">
            The vows we carry in our hearts as we begin our journey as husband
            and wife
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white/40 backdrop-blur-lg border border-white/50 shadow-2xl hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">
                {promise.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 drop-shadow-lg">
                {promise.title}
              </h3>
              <p className="text-white/95 leading-relaxed drop-shadow-md">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Romantic quote at the bottom */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 border border-white/40">
            <p className="text-white italic text-lg drop-shadow-lg">
              "In your light, I learn how to love. In your beauty, how to make
              poems."
              <span className="block text-sm mt-2 not-italic text-white/80">
                - Rumi
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
