const content = [
  {
    title: "MISSION",
    body:
      "To fuse world-class engineering with high-concept artistry to build digital products that offer true ownership, mechanical depth, and unparalleled visual fidelity.",
  },
  {
    title: "VISION",
    body:
      "To become the primary architectural bridge between traditional high-end entertainment and the decentralized future.",
  },
];

export function MissionVision() {
  return (
    <section
      className="px-6 py-20 lg:px-12"
      style={{
        backgroundColor: "#f4f4ff",
        backgroundImage:
          "radial-gradient(circle, rgba(160,160,190,0.45) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          {content.map((item) => (
            <div key={item.title} className="text-left">
              <h2
                className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-gray-900"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {item.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
