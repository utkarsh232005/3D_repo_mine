import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import Image from "next/image";

function Feedbacks() {
  return (
    <section className="w-full py-16">
      <div className="bg-black-100 rounded-[20px] max-w-7xl mx-auto mt-12">
        <div className="bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </div>
        <div className="sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            >
              <p className="text-white tracking-wider text-[18px]">
                {testimonial.testimonial}
              </p>
              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                  <p className="text-white font-medium text-[16px]">
                    <span className="text-[#915eff]">@</span> {testimonial.name}
                  </p>
                  <p className="mt-1 text-secondary text-[12px]">
                    {testimonial.designation} of {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
