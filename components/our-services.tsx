const serviceCards = [
  {
    title: "GAME DEVELOPMENT",
    description: "From game design to game launch, we’re here to bring your vision to life.",
    image: "/images/game-dev.JPG",
  },
  {
    title: "VFX & ANIMATION",
    description: "Captivate CGI animation and expert cinematic direction.",
    image: "/images/cgi-virtual-production.jpg",
  },
  {
    title: "WEB & APPLICATION",
    description: "Responsive and high-performance websites designed with precision.",
    image: "/images/web-application.JPG",
  },
  {
    title: "VIRTUAL REALITY",
    description:
      "Develop customized applications that enhance your connection with clients.",
    image: "/images/virtual-reality.JPG",
  },
];

export function OurServices() {
  return (
    <section id="services" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-4xl sm:text-5xl font-bold uppercase tracking-wide text-black"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          Our Services
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col overflow-hidden border border-black/30 bg-white shadow-sm"
            >
              <div className="h-80 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 py-8 text-black text-left">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-base leading-relaxed text-black/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
