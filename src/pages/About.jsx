import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Stats from "../components/home/Stats";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import heroImage from "../assets/images/about.png";
import campusImage from "../assets/images/about-campus.png";

const whyFeatures = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E67E22" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "UGC Recognized",
    desc: "All programs are from recognized universities",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M7 8h10M7 12h7" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Wide Range of Programs",
    desc: "50+ UG, PG & Diploma programs",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M12 8v4l3 3" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Affordable Fees",
    desc: "Quality education with affordable fee structure",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M12 7v5l4 2" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Flexible Learning",
    desc: "Study anytime, anywhere at your own pace",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" fill="none" stroke="#E67E22" strokeWidth="2" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 11l2 2 4-4" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Expert Guidance",
    desc: "Learn from experienced faculty and mentors",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 18v-6a9 9 0 0118 0v6" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" stroke="#E67E22" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Student support at every step",
  },
];

function About() {
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
            <span className="text-[#E67E22] font-medium">About Us</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#22333B] leading-tight">
                About<br />
                <span className="text-[#E67E22]">Bhuvan Academy</span>
              </h1>
              <p className="mt-5 text-gray-600 leading-7 max-w-lg">
                Empowering learners through quality distance education and
                helping them build successful careers with confidence.
              </p>

              {/* Mini stats */}
              <div className="mt-8 flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-lg">🏆</div>
                  <div>
                    <p className="text-xl font-bold text-[#22333B]">10+</p>
                    <p className="text-xs text-gray-500">Years of Excellence</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-lg">👩‍🎓</div>
                  <div>
                    <p className="text-xl font-bold text-[#22333B]">2,500+</p>
                    <p className="text-xs text-gray-500">Happy Students</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="absolute w-80 h-80 rounded-full bg-orange-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src={heroImage}
                alt="Bhuvan Academy student"
                className="relative z-10 max-h-80 w-auto object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={campusImage}
                  alt="Bhuvan Academy Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#E67E22] text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-2xl font-bold">2005</p>
                <p className="text-xs opacity-90">Established</p>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm">
                OUR STORY
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#22333B] mt-2 mb-5">
                Building Futures Since 2005
              </h2>
              <p className="text-gray-600 leading-7 mb-4">
                Bhuvan Academy was established with the vision of making higher
                education accessible, flexible and affordable for everyone. We
                partner with UGC-recognized universities to deliver
                career-oriented programs through distance learning mode.
              </p>
              <p className="text-gray-600 leading-7 mb-7">
                Over the years, we have guided thousands of students to achieve
                their academic goals and build successful careers.
              </p>
              <NavLink
                to="/admissions"
                className="inline-flex items-center gap-2 text-[#E67E22] font-semibold border border-[#E67E22] rounded-full px-6 py-2.5 hover:bg-[#E67E22] hover:text-white transition-colors"
              >
                Know More About Us <ArrowRight size={16} />
              </NavLink>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Target size={24} className="text-[#E67E22]" />
                </div>
                <span className="text-[#E67E22] font-semibold uppercase tracking-widest text-xs">
                  OUR MISSION
                </span>
              </div>
              <p className="text-gray-600 leading-7">
                To provide accessible, affordable and quality education through
                innovative distance learning programs that empower learners to
                achieve their dreams.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Eye size={24} className="text-[#2A9D8F]" />
                </div>
                <span className="text-[#2A9D8F] font-semibold uppercase tracking-widest text-xs">
                  OUR VISION
                </span>
              </div>
              <p className="text-gray-600 leading-7">
                To be a trusted leader in distance education, transforming lives
                through knowledge and creating a better tomorrow.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Why Choose Bhuvan Academy ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#22333B]">
              Why Choose Bhuvan Academy?
            </h2>
            <div className="w-12 h-1 bg-[#E67E22] rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center bg-[#FAF7F2] rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#22333B] mb-1">{f.title}</h3>
                <p className="text-[11px] text-gray-500 leading-4">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Director Quote ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-3 gap-8 items-center"
          >
            {/* Avatar */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-[#22333B] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                KR
              </div>
              <div>
                <p className="font-bold text-[#22333B]">K. Raja</p>
                <p className="text-sm text-gray-500">Director, Bhuvan Academy</p>
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-2">
              <div className="text-6xl text-[#E67E22] font-serif leading-none mb-2">"</div>
              <p className="text-gray-700 leading-8 text-lg italic">
                At Bhuvan Academy, we believe education is the most powerful
                weapon to change lives. We are committed to providing quality
                distance education and guiding every student towards success.
              </p>
            </div>

            {/* Badge */}
            <div className="hidden lg:flex flex-col items-center gap-1 absolute right-12">
            </div>
          </motion.div>

          {/* 10+ badge beside quote */}
          <div className="flex justify-end mt-4">
            <div className="bg-[#22333B] text-white rounded-2xl px-6 py-3 inline-flex items-center gap-3 shadow">
              <span className="text-2xl font-bold text-[#E67E22]">10+</span>
              <span className="text-sm text-gray-300">Years of Excellence</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats Banner ── */}
      <Stats />

      {/* ── CTA ── */}
      <section className="py-14 bg-[#FAF7F2]">
        <Container>
          <div className="bg-white rounded-3xl px-8 py-10 lg:px-14 lg:py-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#22333B]">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Join thousands of successful learners at Bhuvan Academy.
                </p>
              </div>
            </div>
            <NavLink to="/admissions">
              <Button className="flex items-center gap-2 whitespace-nowrap">
                Apply Now <ArrowRight size={16} />
              </Button>
            </NavLink>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default About;
