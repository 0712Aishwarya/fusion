import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import HeroImgFull from "../assets/heroGen.png";
import flower from "../assets/flower.jpg";
import couple from "../assets/couple.jpg";
import bride from "../assets/bridal.jpg"
import HeroImg from "../assets/heroside.png"
const HeroSection = () => {
  const fullText = "Creating memories to last a lifetime";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) {
        clearInterval(typing);
        setTimeout(() => setIsTypingDone(true), 200);
      }
    }, 60);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative h-[800px] w-full flex items-center justify-center bg-[#d7d5c8] px-4 overflow-visible">
      {/* Decorative Background Images */}
      <img
        src={HeroImgFull}
        alt="Decorative Left"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-60 w-80"
      />
      <img
        src={HeroImgFull}
        alt="Decorative Right"
        className="absolute right-0 top-3/4 transform -translate-y-1/2 opacity-60 w-80"
      />

     {/* Left-side Bride Image */}
{/* Bride + Floral Images Group */}
<div className="absolute top-[65%] left-0 transform -translate-y-1/2 z-10 flex items-center">
  {/* Bride Image */}
  <img
    src={couple}
    alt="Bride"
    className="w-[300px] border-2 boder-white shadow-xl"
  />

  {/* Floral Image */}
  <div className="relative -ml-[90px] z-20 ">
    <img
      src={flower}
      alt="Floral Basket"
      className="w-[200px] border-2 border-white shadow-2xl"
      style={{
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "0",
      }}
    />
  </div>
</div>
{/* Right-side Couple Image at Bottom */}
{/* Right-side Couple Image hanging slightly below */}
<div className="absolute right-0 bottom-[-40px] z-20">
  <img
    src={bride}
    alt="Couple"
    className="w-[300px]  shadow-lg border-2 border-white"
  />
</div>


{/* herolowerdesign */}
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src={HeroImg}
        alt="Hero"
      />

      {/* Hero Content */}
      <div className="relative z-10 p-12 flex flex-col gap-6 max-w-2xl w-full text-center items-center">
        <h1 className="text-[70px] font-serif font-normal tracking-wide text-current leading-snug whitespace-nowrap overflow-hidden">
          {!isTypingDone ? (
            displayedText
          ) : (
            <>
              Creating memories to <br /> last a lifetime
            </>
          )}
        </h1>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="px-6 py-2 bg-gradient-to-r from-[#7B3F00] to-[#38230d] text-white rounded-md font-semibold hover:opacity-90 transition-all"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;