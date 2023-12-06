import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ text, img, yellowBg }) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const textElement = textRef.current;
    const imgElement = imgRef.current;

    /* Animations */
    if (textElement && imgElement) {
      gsap.set([textElement], { opacity: 0, x: 40 });
      gsap.set([imgElement], { opacity: 0, x: -40, scale: 0.9 });

      const t1 = gsap.timeline({
        defaults: { duration: 2, ease: "power2.out" },
      });

      /* Back to normal display */
      t1.to([textElement, imgElement], {
        opacity: 1,
        stagger: { each: 0.07 },
        x: 0,
        scale: 1,
      });
    }
  }, []);

  const containerClass = `flex justify-center items-center ${
    yellowBg ? "bg-[#f9de4e]" : "bg-transparent"
  } hero-container`;

  return (
    <div className={containerClass}>
      <div className="w-1/2 p-2 md:p-4">
        <h2
          className="text-2xl md:text-4xl lg:text-6xl pl-12 font-bold hero-text"
          ref={textRef}
        >
          {text}
        </h2>
      </div>
      <div className="w-1/2 p-2 md:p-4 bg-[url('/rectangle.png')] bg-contain bg-bottom bg-no-repeat">
        <img
          ref={imgRef}
          src={img}
          alt="vector-img"
          className="w-full h-auto hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
