import React from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      url: "https://th.bing.com/th/id/R.a3e4fbea4e1dd46e2a19ad7111cc7de0?rik=0YSzuathUNAbpw&riu=http%3a%2f%2fwww.dipakstudios.com%2fgallery%2f1535303839_E2I7007-Edit.jpg&ehk=MtcHN3heenSJi2FCQ9yGCGnZCL9C3k2W9V%2fgKVfi6QU%3d&risl=&pid=ImgRaw&r=0",
      title: "Wedding Events",
      description: "From venue to vows, we craft unforgettable wedding experiences tailored just for you.",
    },
    {
      id: 2,
      url: "https://thepaintsesh.com/wp-content/uploads/2021/04/corporate-580e8bbf3df78c2c73adc69a-scaled.jpeg",
      title: "Corporate Events",
      description: "Professional and polished events that reflect your brand and engage your audience.",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/originals/0b/3a/e7/0b3ae7e1ce00751ed9753b5bf91cc6fa.jpg",
      title: "Theme Decor",
      description: "Transform your event with custom themes and decor that wow your guests.",
    },
    {
      id: 4,
      url: "https://1.bp.blogspot.com/-qLz5kdLbd4Q/VcjfZ-FCcGI/AAAAAAAAAIM/tFcu2_3gF2w/s1600/Fotolia_52594996_Subscription_Monthly_XXL.jpg",
      title: "Catering",
      description: "Delicious cuisine crafted by expert chefs to suit every taste and occasion.",
    },
    {
      id: 5,
      url: "https://c.pxhere.com/photos/68/ee/camera_canon_lens_photography_focus_ae1_background_dslr-104099.jpg!d",
      title: "Photography",
      description: "Capture every magical moment with stunning, professional photography.",
    },
    {
      id: 6,
      url: "https://th.bing.com/th/id/OIP.k9YDWApinEKl7YhaUpUdvQHaE8?rs=1&pid=ImgDetMain",
      title: "Birthday Events",
      description: "Celebrate milestones with joy, color, and creativity designed just for you.",
    },
  ];
  
  return (
    <Element name="services">
    <section className="bg-[#f3ebe2] py-20 font-serif">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-12 tracking-wide">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
            key={service.id}
            className="relative overflow-hidden rounded-xl shadow-lg group h-[420px]"
          >
            <img
              src={service.url}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
            {/* Text Content */}
            <div className="absolute bottom-0 p-6 w-full text-white z-10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              {/* <p className="text-sm text-gray-200">Location or tag here</p> */}
          
              {/* Decorative line */}
              <div className="my-2 w-10 h-1 bg-[#c8a15c] rounded-full"></div>
          
              <p className="text-sm">
                  {service.description}
              </p>

          
              <a
                href="#"
                className="inline-block mt-3 text-[#f0c177] font-semibold hover:underline"
              >
                Know More →
              </a>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Services;
