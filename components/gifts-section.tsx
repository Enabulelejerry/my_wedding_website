import { Button } from "@/components/ui/button";

export default function GiftsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gold/5 via-white to-peach/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-4">
            Gifts & Blessings
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">💝</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-xl text-soft-text mt-6 max-w-2xl mx-auto">
            Your love and support mean the world to us as we start our journey
            together
          </p>
        </div>

        {/* Main Gift Card */}
        <div className="bg-gradient-to-br from-white to-gold/10 rounded-3xl p-8 md:p-12 border-2 border-gold/30 shadow-2xl hover:shadow-3xl transition-all duration-300 mb-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-peach rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💕</span>
            </div>
            <p className="text-xl md:text-2xl text-soft-text leading-relaxed italic mb-2">
              "Your presence at our wedding is the greatest gift we could ask
              for"
            </p>
            <p className="text-lg text-gold font-light">
              However, if you wish to bless us...
            </p>
          </div>

          {/* Account Details - Enhanced */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gold/5 to-peach/5 rounded-2xl p-6 border-2 border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-2xl mb-3 block">👨‍💼</span>
                <h3 className="text-xl font-serif font-bold text-deep-blue mb-2">
                  Groom's Account
                </h3>
                <div className="w-8 h-1 bg-gold mx-auto mb-3"></div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-soft-text mb-1">Account Name</p>
                  <p className="text-lg font-semibold text-deep-blue">
                    Enabulele Jerry
                  </p>
                </div>
                <div>
                  <p className="text-sm text-soft-text mb-1">Access Bank</p>
                  <p className="text-xl font-bold text-gold">o811386160</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-peach/5 to-gold/5 rounded-2xl p-6 border-2 border-peach/20 hover:border-peach/40 transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-2xl mb-3 block">👩‍💼</span>
                <h3 className="text-xl font-serif font-bold text-deep-blue mb-2">
                  Bride's Account
                </h3>
                <div className="w-8 h-1 bg-peach mx-auto mb-3"></div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-soft-text mb-1">Account Name</p>
                  <p className="text-lg font-semibold text-deep-blue">
                    Esther Samson
                  </p>
                </div>
                <div>
                  <p className="text-sm text-soft-text mb-1">ESther Samson</p>
                  <p className="text-lg font-bold text-peach">2209156591</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Message */}
          <div className="text-center">
            <p className="text-soft-text mb-6 leading-relaxed">
              Every blessing, no matter the size, will be cherished and used to
              build our future together. Thank you for being part of our love
              story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-gold to-peach hover:from-gold/90 hover:to-peach/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                💝 Copy Account Number
              </Button>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                📱 Save Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Gift Options */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <div className="text-3xl mb-3">🏠</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">
              Home Essentials
            </h4>
            <p className="text-sm text-soft-text">
              Help us build our first home together
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <div className="text-3xl mb-3">🌴</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">
              Honeymoon Fund
            </h4>
            <p className="text-sm text-soft-text">
              Contribute to our first adventure as newlyweds
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <div className="text-3xl mb-3">💫</div>
            <h4 className="font-serif font-bold text-deep-blue mb-2">
              Future Dreams
            </h4>
            <p className="text-sm text-soft-text">
              Support our long-term goals and aspirations
            </p>
          </div>
        </div> */}

        {/* Final Thank You */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gold/20">
            <span className="text-gold text-xl">🙏</span>
            <p className="text-soft-text font-light">
              Thank you for your generosity and love
            </p>
            <span className="text-gold text-xl">🙏</span>
          </div>
        </div>
      </div>
    </section>
  );
}
