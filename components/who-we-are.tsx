export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden px-6 py-20 text-white sm:py-24 lg:px-12 lg:py-28"
      style={{ backgroundColor: "#5f5bd6" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/Gemini_Generated_Image_8tgcx68tgcx68tgc.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-16 min-[1500px]:max-w-7x1 min-[1500px]:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold uppercase tracking-wide sm:text-5xl lg:text-6xl">
            <span className="block min-[1500px]:hidden">
              Who We
              <br />
              Are
            </span>
            <span className="hidden min-[1500px]:flex min-[1500px]:items-start min-[1500px]:gap-3">
              <span className="block">
                <span className="block">Who</span>
                <span className="block">Are</span>
              </span>
              <span className="block">We</span>
            </span>
          </h2>
        </div>
        <div className="text-center text-base leading-relaxed text-white/90 sm:text-lg lg:text-left lg:text-xl">
          <p>
            Nitro Forge Studio (NFS) is a premier hybrid development studio and creative
            agency specializing in the intersection of high-fidelity gaming, blockchain
            infrastructure, and immersive visual storytelling. Founded by a cohort of AAA
            industry veterans and academic leaders, NLG operates at the bleeding edge of
            the 2026 Digital Economy.
          </p>
          <p className="mt-6 text-white">
            We don't just build games; we engineer scalable ecosystems and cinematic
            experiences that define the next generation of the web.
          </p>
        </div>
      </div>
    </section>
  );
}
