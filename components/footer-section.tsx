export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-deep-rose/95 to-rose-gold/90 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Quote */}
        <div className="text-center mb-12 border-b border-white/20 pb-8">
          <p className="text-2xl md:text-3xl font-serif font-light italic leading-relaxed">
            "Two souls, one heart, one eternal love."
          </p>
        </div>

        {/* Social Links & Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Social Media */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Follow Our Journey</h4>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity text-lg">
                📘 Facebook
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity text-lg">
                📷 Instagram
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/90 text-sm">
              Questions? We'd love to hear from you! <br />
              Send us a message anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <a href="#details" className="hover:text-white transition-colors">
                Details
              </a>
              <a href="#rsvp" className="hover:text-white transition-colors">
                RSVP
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2025 Enabulele Jerry & Esther Samson. <br />
            Made with 💕 for our special day.
          </p>
        </div>
      </div>
    </footer>
  )
}
