import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { courseCategories } from "../../data/courses";
import Container from "../common/Container";

const categoryIcons = {
  "School Education": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  "Undergraduate": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "Postgraduate": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M12 14c-5 0-8 2-8 4v1h16v-1c0-2-3-4-8-4z" fill="currentColor" opacity="0.7" />
      <path d="M18 5l2-2M20 8h2M18 11l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Diploma & Others": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="currentColor" opacity="0.3" />
      <path d="M7 8h10M7 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 17l2 3 2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Professional Courses": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" fill="currentColor" opacity="0.3" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default function CourseSection() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <Container>
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#22333B] mt-2">
              Popular Courses
            </h2>
          </div>
          <NavLink
            to="/courses"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#22333B] border border-gray-300 rounded-full px-5 py-2 hover:border-[#E67E22] hover:text-[#E67E22] transition-colors"
          >
            View All Courses <ArrowRight size={15} />
          </NavLink>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courseCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, shadow: "xl" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-shadow"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: category.bgColor, color: category.color }}
              >
                {categoryIcons[category.title]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#22333B] mb-4">
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2 mb-5">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: category.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <NavLink
                to="/courses"
                className="flex items-center gap-1 text-[15px] font-semibold transition-colors"
                style={{ color: category.color }}
              >
                View Courses <ArrowRight size={14} />
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <NavLink
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#22333B] border border-gray-300 rounded-full px-5 py-2 hover:border-[#E67E22] hover:text-[#E67E22] transition-colors"
          >
            View All Courses <ArrowRight size={15} />
          </NavLink>
        </div>
      </Container>
    </section>
  );
}
