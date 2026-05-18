import AnimateIn from "./AnimateIn";

const services = [
  {
    num: "01",
    title: "Carpet Fitting",
    description:
      "Personal service carpet installation to the highest standard. From measuring and ordering the carpet through to immaculate fitting - every room, every style.",
    detail: "Domestic & commercial",
    image: "/service-carpet.JPG",
  },
  {
    num: "02",
    title: "Vinyl Laying",
    description:
      "Durable, stylish vinyl flooring expertly laid for any space. Waterproof, practical, and beautifully finished - kitchens, bathrooms, hallways and more.",
    detail: "All room types",
    image: "/service-vinyl.jpg",
  },
  {
    num: "03",
    title: "Residential & Commercial",
    description:
      "From full home transformations to offices, retail spaces, and hospitality environments. We deliver the same exacting finish whatever the scale.",
    detail: "Any size project",
    image: "/service-commercial.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="container-content">
        <AnimateIn className="mb-16">
          <span className="text-green text-xs font-medium tracking-[0.3em] uppercase">Services</span>
        </AnimateIn>

        <div>
          {services.map((service, i) => (
            <AnimateIn key={service.num} delay={i * 0.08}>
              <div className="border-t border-gray-100 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-display text-5xl font-bold text-green/20 leading-none">
                      {service.num}
                    </span>
                  </div>

                  <div className={`${service.image ? "lg:col-span-6" : "lg:col-span-9"}`}>
                    <h3 className="font-display text-3xl lg:text-4xl font-medium text-green mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg max-w-xl">
                      {service.description}
                    </p>
                    <p className="mt-6 text-xs font-medium tracking-[0.25em] uppercase text-rose">
                      {service.detail}
                    </p>
                  </div>

                  {service.image && (
                    <div className="lg:col-span-5">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale-[20%]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </section>
  );
}
