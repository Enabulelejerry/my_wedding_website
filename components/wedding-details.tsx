export default function WeddingDetailsSection() {
  return (
    <section
      id="details"
      className="py-20 px-4 bg-gradient-to-br from-blue-light/10 via-white to-peach-light/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-4">
            Wedding Details
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">💒</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-xl text-soft-text mt-6 max-w-2xl mx-auto">
            Join us as we celebrate our special day
          </p>
        </div>

        {/* Main Details Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Church Ceremony Card */}
          <div className="bg-gradient-to-br from-white to-gold/5 rounded-2xl p-8 border-2 border-gold/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛪</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-deep-blue">
                Church Ceremony
              </h3>
              <div className="w-12 h-1 bg-gold mx-auto mt-2"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gold text-lg mt-1">📍</span>
                <div>
                  <p className="font-semibold text-deep-blue">
                    Living Faith Church
                  </p>
                  <p className="text-soft-text text-sm">Upper Igun Branch</p>
                  <p className="text-soft-text text-sm">
                    126-132 Upper Igun Street, Benin City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-gold text-lg mt-1">📅</span>
                <div>
                  <p className="font-semibold text-deep-blue">
                    Saturday, December 20th, 2025
                  </p>
                  <p className="text-soft-text text-sm">
                    9:00 AM - Ceremony Begins
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-gold text-lg mt-1">👔</span>
                <div>
                  <p className="font-semibold text-deep-blue">Dress Code</p>
                  <p className="text-soft-text text-sm">
                    Traditional & Formal Attire
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gold/20">
              <p className="text-sm text-gold italic text-center">
                "Where two become one in God's presence"
              </p>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-gradient-to-br from-white to-blue/5 rounded-2xl p-8 border-2 border-blue/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue to-peach rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-deep-blue">
                Reception
              </h3>
              <div className="w-12 h-1 bg-blue mx-auto mt-2"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue text-lg mt-1">📍</span>
                <div>
                  <p className="font-semibold text-deep-blue">
                    Global Event Center
                  </p>
                  <p className="text-soft-text text-sm">
                    22 Nekpen Nekpen Street
                  </p>
                  <p className="text-soft-text text-sm">
                    Between 2nd & 3rd East Circular, Benin City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue text-lg mt-1">⏰</span>
                <div>
                  <p className="font-semibold text-deep-blue">
                    Immediately After Church Service
                  </p>
                  <p className="text-soft-text text-sm">
                    12:00 PM - Till Joy Lasts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue text-lg mt-1">🎵</span>
                <div>
                  <p className="font-semibold text-deep-blue">Entertainment</p>
                  <p className="text-soft-text text-sm">
                    Live Music, Dinner & Dancing
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue/20">
              <p className="text-sm text-blue italic text-center">
                "Let's celebrate love, laughter, and forever"
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg text-center">
            <div className="text-3xl mb-3">🚗</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">
              Parking
            </h4>
            <p className="text-sm text-soft-text">
              Ample parking available at both venues
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg text-center">
            <div className="text-3xl mb-3">🎁</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">Gifts</h4>
            <p className="text-sm text-soft-text">
              Your presence is the best present!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg text-center">
            <div className="text-3xl mb-3">📞</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">
              Questions?
            </h4>
            <p className="text-sm text-soft-text">
              Contact Terry (08165714280) or Francis (09031933991)
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 bg-gradient-to-r from-gold/5 to-peach/5 rounded-2xl p-8 border border-gold/20">
          <h3 className="text-2xl font-serif font-bold text-deep-blue text-center mb-6">
            Day Timeline
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="font-semibold text-gold">9:00 AM</p>
                <p className="text-sm text-soft-text">Church Ceremony</p>
              </div>
            </div>
            <div className="text-2xl text-gold">→</div>
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="font-semibold text-gold">12:00 PM</p>
                <p className="text-sm text-soft-text">Reception Begins</p>
              </div>
            </div>
            <div className="text-2xl text-gold">→</div>
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="font-semibold text-gold">2:00 PM</p>
                <p className="text-sm text-soft-text">Celebration & Dancing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
