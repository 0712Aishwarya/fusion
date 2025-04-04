import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
  ];

  return (
    <section className="py-20 bg-[#f3ebe2] font-[Nunito Sans]">
      <div className="max-w-[1500px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-black mb-10 text-center">
          OUR SERVICES
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((element) => (
            <div key={element.id} className="relative h-[300px] overflow-hidden group rounded-md shadow-md">
              <img
                src={element.url}
                alt={element.title}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute inset-0 bg-[#fff7ea] flex justify-center items-center text-[#a2783a] text-xl sm:text-2xl font-light translate-y-full group-hover:translate-y-0 transition-all duration-300">
                {element.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
