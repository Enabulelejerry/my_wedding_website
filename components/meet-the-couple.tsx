export default function MeetTheCoupleSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-light/10 via-white to-peach-light/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-4">
            Meet the Couple
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">💕</span>
            <div className="h-px w-12 bg-gold" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Combined Photo */}
          <div className="lg:w-2/5 relative">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-blue/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-peach/30 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue/20 to-transparent rounded-full blur-2xl" />

              {/* Main photo container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/images/white_couple.jpg"
                  alt="Enabulele Jerry & Esther Samson"
                  className="w-full h-[500px] object-cover"
                />

                {/* Stronger overlay for white clothing */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Text with better contrast */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm font-light text-white/90 mb-1 drop-shadow-lg">
                    Together Forever
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-white drop-shadow-2xl">
                    Jerry & Esther
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Description */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/10 to-peach/10 px-6 py-3 rounded-full border border-gold/30 mb-6">
                <span className="text-2xl">👑</span>
                <h3 className="text-2xl font-serif font-bold text-deep-blue">
                  Enabulele Jerry & Esther Samson
                </h3>
                <span className="text-2xl">👑</span>
              </div>

              <p className="text-lg text-soft-text leading-relaxed mb-6">
                Two souls, one heartbeat. We are Jerry and Esther - partners in
                life, best friends in adventure, and soon to be husband and
                wife. Our journey together is built on a foundation of faith,
                laughter, and unwavering support for one another.
              </p>

              <p className="text-lg text-soft-text leading-relaxed mb-8">
                Jerry's strength and dedication perfectly complement Esther's
                grace and warmth. Together, we believe in creating a life filled
                with purpose, joy, and endless love. We can't wait to begin this
                new chapter surrounded by the people who mean the most to us.
              </p>
            </div>

            {/* Individual Highlights */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="text-3xl mb-3">💫</div>
                <h4 className="font-serif font-bold text-deep-blue text-lg mb-2">
                  Jerry's Heart
                </h4>
                <p className="text-soft-text text-sm leading-relaxed">
                  "Finding Esther was like coming home to a place I never knew
                  existed. She's my answered prayer and my greatest adventure."
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-serif font-bold text-deep-blue text-lg mb-2">
                  Esther's Joy
                </h4>
                <p className="text-soft-text text-sm leading-relaxed">
                  "Jerry is my rock, my safe haven, and the love that makes
                  every day brighter. I'm blessed to call him mine forever."
                </p>
              </div>
            </div>

            {/* Wedding Date Highlight */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gold/5 to-peach/5 rounded-xl border border-gold/30">
              <p className="text-deep-blue font-light">
                <span className="font-bold">December 20, 2025</span> - The day
                our forever officially begins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
