import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../common/Container";

const testimonials = [
  {
    quote:
      "Bhuvan Academy helped me complete my MBA while managing my job. The support and guidance are excellent!",
    name: "Ramesh Kumar",
    role: "MBA Student",
    initials: "RK",
    color: "#E67E22",
  },
  {
    quote:
      "Flexible learning and affordable fees made my graduation journey smooth and successful.",
    name: "S. Priyanka",
    role: "B.Com Graduate",
    initials: "SP",
    color: "#2A9D8F",
  },
  {
    quote:
      "The faculty support is outstanding. I highly recommend Bhuvan Academy for distance education.",
    name: "Anil Varma",
    role: "B.Tech Student",
    initials: "AV",
    color: "#8B3DB8",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 relative">
          <span className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#22333B] mt-2">
            What Our Students Say
          </h2>
          <div className="w-12 h-1 bg-[#E67E22] rounded-full mx-auto mt-4" />

          {/* Nav arrows */}
          <div className="absolute right-0 top-0 flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E67E22] hover:text-[#E67E22] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E67E22] hover:text-[#E67E22] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#FAF7F2] rounded-2xl p-6 border-2 transition-all duration-300 ${
                index === current
                  ? "border-[#E67E22] shadow-md"
                  : "border-transparent"
              }`}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-4"
                style={{ color: t.color }}
              >
                "
              </div>

              <p className="text-gray-600 text-[15px] leading-7 mb-6">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[#22333B] text-[15px]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#E67E22] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
