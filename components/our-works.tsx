import Link from "next/link";

const works = [
  { id: "work-1", image: "/images/Games/Game-Velocity.png", href: "" },
  // { id: "work-2", image: "/images/Games/Game-Velocity.png", href: "/works/2" },
  // { id: "work-3", image: "/images/Games/Game-Velocity.png", href: "/works/3" },
  // { id: "work-4", image: "/images/Games/Game-Velocity.png", href: "/works/4" },
  // { id: "work-5", image: "/images/Games/Game-Velocity.png", href: "/works/5" },
  // { id: "work-6", image: "/images/Games/Game-Velocity.png", href: "/works/6" },
  // { id: "work-7", image: "/images/Games/Game-Velocity.png", href: "/works/7" },
  // { id: "work-8", image: "/images/Games/Game-Velocity.png", href: "/works/8" },
];

export function OurWorks() {
  return (
    <section className="bg-white py-20">
      <div className="px-6 lg:px-12">
        <h2
          className="mb-10 text-center text-4xl sm:text-5xl font-bold uppercase tracking-wide text-black"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          OUR WORKS
        </h2>
      </div>
      <div className="mx-auto flex w-full flex-wrap justify-center px-6 lg:px-12">
        {works.map((work) => (
          <Link
            key={work.id}
            href={work.href}
            className="group relative aspect-square w-full overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <img
              src={work.image}
              alt="Our work"
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:rotate-[0.6deg]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
