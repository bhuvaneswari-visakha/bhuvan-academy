import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Search, ArrowRight, Headphones } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { courseCategories } from "../data/courses";
import heroImage from "../assets/images/courses.png";

const tabs = ["All Categories", ...courseCategories.map((c) => c.title)];

const categoryIcons = {
  "School Education": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  "Undergraduate": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "Postgraduate": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M12 14c-5 0-8 2-8 4v1h16v-1c0-2-3-4-8-4z" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  "Diploma & Others": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="currentColor" opacity="0.3" />
      <path d="M7 8h10M7 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "Professional Courses": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" fill="currentColor" opacity="0.3" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

function Courses() {
  const [activeTab, setActiveTab] = useState("All Categories");
  const [search, setSearch] = useState("");

  const filtered =
    activeTab === "All Categories"
      ? courseCategories
      : courseCategories.filter((c) => c.title === activeTab);

  const searchFiltered = filtered.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.items.some((item) => item.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#FAF7F2] pt-28 pb-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <NavLink to="/" className="hover:text-[#E67E22] transition-colors">Home</NavLink>
            <span>›</span>
            <span className="text-[#E67E22] font-medium">Courses</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center pb-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#22333B] leading-tight">
                Our <span className="text-[#E67E22]">Courses</span>
              </h1>
              <p className="mt-4 text-gray-600 leading-7 max-w-lg">
                Explore a wide range of programs designed to match your career
                aspirations.
              </p>

              {/* Search */}
              <div className="mt-7 flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md border border-gray-100 max-w-sm">
                <Search size={18} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for a course..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute w-72 h-72 rounded-full bg-orange-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src={heroImage}
                alt="Students"
                className="relative z-10 max-h-72 w-auto object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Category Tabs ── */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-[#E67E22] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-[#E67E22]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Course Cards Grid ── */}
      <section className="py-14 bg-[#FAF7F2]">
        <Container>
          {searchFiltered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-3 opacity-40" />
              <p className="text-lg">No courses match your search.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {searchFiltered.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                  whileHover={{ y: -6 }}
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
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: category.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <button
                    className="flex items-center gap-1 text-[15px] font-semibold transition-colors hover:gap-2"
                    style={{ color: category.color }}
                  >
                    View Courses <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#22333B] rounded-3xl px-8 py-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Headphones size={26} className="text-[#E67E22]" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Need Help Choosing the Right Course?
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Our academic counselors are here to guide you.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <NavLink to="/contact">
                <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-[#22333B] whitespace-nowrap">
                  Contact Us
                </Button>
              </NavLink>
              <NavLink to="/admissions">
                <Button className="flex items-center gap-2 whitespace-nowrap">
                  Apply Now <ArrowRight size={15} />
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Courses;
