import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin, Clock, ChevronDown, ChevronUp, Send } from "lucide-react";

import contactImage from "../assets/images/contact.png";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const contactInfo = [
  {
    icon: <Phone size={20} className="text-[#E67E22]" />,
    bgColor: "#FFF3E0",
    label: "Call Us",
    lines: ["08922-352111"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bgColor: "#E8F5E9",
    label: "WhatsApp",
    lines: ["+91 93968 88883"],
  },
  {
    icon: <Mail size={20} className="text-[#8B3DB8]" />,
    bgColor: "#F3E8FF",
    label: "Email Us",
    lines: ["bhuvanacademy9@gmail.com"],
  },
];

const getInTouch = [
  {
    icon: <Phone size={18} className="text-[#E67E22]" />,
    bgColor: "#FFF3E0",
    label: "Phone",
    lines: ["08922-352111"],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bgColor: "#E8F5E9",
    label: "Mobile / WhatsApp",
    lines: ["+91 93968 88883 / +91 93924 88883"],
  },
  {
    icon: <Mail size={18} className="text-[#8B3DB8]" />,
    bgColor: "#F3E8FF",
    label: "Email",
    lines: ["bhuvanacademy9@gmail.com", "rajakandi5@gmail.com"],
  },
  {
    icon: <Clock size={18} className="text-[#2A9D8F]" />,
    bgColor: "#E0F4F2",
    label: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

const faqs = [
  { q: "What are the admission requirements?", a: "You need 10+2 or equivalent for UG programs and a graduation degree for PG programs along with valid ID and address proof." },
  { q: "How long does the admission process take?", a: "The admission process typically takes 3–5 working days after submission of all required documents." },
  { q: "Are the programs UGC recognized?", a: "Yes, all programs offered at Bhuvan Academy are from UGC-recognized universities." },
  { q: "Can I study while working?", a: "Absolutely. Our distance learning programs are designed for working professionals and can be pursued at your own pace." },
  { q: "How can I make the fee payment?", a: "Fee can be paid online via bank transfer, UPI, or in person at our center." },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

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
            <span className="text-[#E67E22] font-medium">Contact Us</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 pb-14 items-start">
            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#22333B] leading-tight">
                Contact <span className="text-[#E67E22]">Us</span>
              </h1>
              <p className="mt-4 text-gray-600 leading-7 max-w-md">
                We're here to help! Reach out to us for any queries or support.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: c.bgColor }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{c.label}</p>
                      {c.lines.map((line, j) => (
                        <p key={j} className="text-[#22333B] font-semibold text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — building image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={contactImage}
                  alt="Bhuvan Academy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Contact Form + Map + Get in Touch ── */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left — Send Message form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#22333B] mb-6">Send Us a Message</h2>

              {submitted && (
                <div className="mb-5 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-3 text-sm font-medium">
                  ✅ Message sent! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#E67E22] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#E67E22] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#E67E22] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#22333B] text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-[#1a2830] transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* Right — Map + Get in Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Map placeholder */}
              <div>
                <h2 className="text-2xl font-bold text-[#22333B] mb-4">Our Location</h2>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <iframe
                    title="Bhuvan Academy Location"
                    src="https://www.google.com/maps?q=Bhuvan+Academy,RTC+Complex+Road,Vizianagaram+535001,Andhra+Pradesh,India&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <div className="flex items-start gap-3 mt-3 bg-[#FAF7F2] rounded-xl px-4 py-3">
                  <MapPin size={16} className="text-[#E67E22] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-5">
                    Bhuvan Academy, RTC Complex Road,<br />
                    Vizianagaram – 535 001, Andhra Pradesh, India.
                  </p>
                </div>
              </div>

              {/* Get in Touch list */}
              <div>
                <h3 className="text-lg font-bold text-[#22333B] mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  {getInTouch.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-sm text-[#22333B] font-medium">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#22333B] mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#E67E22] rounded-full mb-8" />

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-[#22333B] text-[15px] pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp size={18} className="text-[#E67E22] flex-shrink-0" />
                      : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 text-[15px] leading-7 border-t border-gray-100 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
