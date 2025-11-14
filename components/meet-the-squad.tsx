export default function MeetTheSquadSection() {
  const squad = [
    {
      name: "Best Man",
      role: "Brother to the Groom",
      image: "/images/best_man.jpg",
    },
    {
      name: "Best Lady",
      role: "Friend of the Bride",
      image: "/images/best_lady.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-light/10 via-white to-gold/5">
      <div className="max-w-8xl mx-auto">
        {" "}
        {/* Even larger max-width */}
        <div className="text-center mb-20">
          {" "}
          {/* Increased bottom margin */}
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-blue mb-6">
            Meet the Squad
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-gold" />
            <span className="text-gold text-3xl">🕊️</span>
            <div className="h-px w-16 bg-gold" />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-20">
          {" "}
          {/* Larger gap */}
          {squad.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-8">
                {/* Main image container - Extra large */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Text overlay */}
                  <div className="absolute bottom-8 left-8 text-left">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#D4AF37] text-xl font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
