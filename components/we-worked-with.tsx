const partners = [
  { name: "GungHo", image: "/images/partners/partner_gungho.png" },
  { name: "Nissin", image: "/images/partners/partner_nissin.png" },
  { name: "Robot", image: "/images/partners/partner_robot.png" },
  { name: "Shirogumi", image: "/images/partners/partner_shirogumi.png" },
  { name: "Toei", image: "/images/partners/partner_toei.png" },
  { name: "Globe", image: "/images/partners/partner_globe.png" },
  { name: "Microsoft", image: "/images/partners/partner_microsoft.png" },
  { name: "Neeuro", image: "/images/partners/partner_neeuro.png" },
  { name: "Naughty Dog", image: "/images/partners/partner_naughtydog.png" },
];

export function WeWorkedWith() {
  return (
    <section
      className="px-6 py-24 lg:px-12"
      style={{
        backgroundColor: "#f4f4ff",
        backgroundImage:
          "radial-gradient(circle, rgba(160,160,190,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(210,210,235,0.5), rgba(255,255,255,0.95))",
        backgroundSize: "16px 16px, 100% 100%",
        backgroundPosition: "0 0, 0 0",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center text-4xl sm:text-5xl font-bold uppercase tracking-wide text-black"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          WE&apos;VE WORKED WITH
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 w-full max-w-[180px] items-center justify-center rounded border border-black/20 bg-white p-4 shadow-sm sm:h-28 md:h-32"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
