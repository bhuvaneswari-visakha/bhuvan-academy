import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import heroImage from "../assets/images/admissions.png";

const highlights = [
  {
    icon: "📋",
    title: "Simple Process",
    desc: "Easy and transparent admission process",
    bgColor: "#FFF3E0",
  },
  {
    icon: "🎓",
    title: "UGC Recognized",
    desc: "All programs from recognized universities",
    bgColor: "#E0F4F2",
  },
  {
    icon: "₹",
    title: "Affordable Fees",
    desc: "Quality education with affordable fee structure",
    bgColor: "#E8F5E9",
  },
  {
    icon: "🎧",
    title: "Student Support",
    desc: "We are here to help you at every step",
    bgColor: "#F3E8FF",
  },
];

const steps = [
  {
    number: "1",
    title: "Choose Your Course",
    desc: "Select the program that suits your goals",
    icon: "📚",
  },
  {
    number: "2",
    title: "Submit Application",
    desc: "Fill the application form online or offline",
    icon: "📝",
  },
  {
    number: "3",
    title: "Document Verification",
    desc: "We verify your documents for confirmation",
    icon: "🔍",
  },
  {
    number: "4",
    title: "Admission Confirmed",
    desc: "Receive confirmation and start your learning journey",
    icon: "✅",
  },
];

const eligibility = [
  "10+2 or equivalent for Undergraduate programs",
  "Graduation for Postgraduate programs",
  "Valid ID proof and address proof",
  "Other criteria as per chosen program",
];

const documents = [
  "Passport size photograph",
  "10th & 12th mark sheets",
  "Graduation mark sheets (if applicable)",
  "ID proof (Aadhar / Passport / Voter ID)",
  "Address proof",
];

function Admissions() {
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
            <span className="text-[#E67E22] font-medium">Admissions</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center pb-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#22333B] leading-tight">
                Admissions
                <br />
                <span className="text-[#E67E22]">Made Simple</span>
              </h1>
              <p className="mt-4 text-gray-600 leading-7 max-w-md">
                Start your journey with Bhuvan Academy. Quality education is
                just a few steps away.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <NavLink to="/contact">
                  <Button className="flex items-center gap-2">
                    Apply Now <ArrowRight size={16} />
                  </Button>
                </NavLink>
                <button className="flex items-center gap-2 border border-[#22333B] text-[#22333B] px-6 py-3 rounded-full font-medium hover:bg-[#22333B] hover:text-white transition-all duration-300">
                  <Download size={16} />
                  Download Brochure
                </button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute w-72 h-72 rounded-full bg-orange-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src={heroImage}
                alt="Admissions"
                className="relative z-10 max-h-80 w-auto object-contain"
              />
            </motion.div>
          </div>
        </Container>

        {/* Highlights bar */}
        <div className="bg-white border-t border-gray-100 shadow-sm">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: h.bgColor }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#22333B] text-sm">{h.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-4">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── Admission Process ── */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#22333B] mb-2">
            Admission Process
          </h2>
          <div className="w-12 h-1 bg-[#E67E22] rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-orange-100 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Circle number */}
                <div className="w-16 h-16 rounded-full bg-[#E67E22] text-white flex flex-col items-center justify-center mb-4 shadow-lg shadow-orange-200">
                  <span className="text-xs font-bold opacity-70">{step.number}</span>
                  <span className="text-2xl -mt-1">{step.icon}</span>
                </div>
                <h3 className="font-bold text-[#22333B] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-5 max-w-[160px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Eligibility & Documents ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#22333B] mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#E67E22] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#22333B] mb-6">
                Required Documents
              </h3>
              <ul className="space-y-4">
                {documents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF7F2] border border-orange-100 rounded-3xl px-8 py-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#22333B]">
                  Ready to take the next step?
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Join thousands of successful learners at Bhuvan Academy.
                </p>
              </div>
            </div>
            <NavLink to="/contact">
              <Button className="flex items-center gap-2 whitespace-nowrap">
                Apply Now <ArrowRight size={16} />
              </Button>
            </NavLink>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Admissions;
