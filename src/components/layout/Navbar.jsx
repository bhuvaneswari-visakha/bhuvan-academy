import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";
import { navigationLinks } from "../../data/navigation";

const SCROLL_THRESHOLD = 40;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/40 backdrop-blur-2xl border-b border-white/30 shadow-lg shadow-black/5"
            : "bg-white/20 backdrop-blur-xl border-b border-white/20"
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 leading-none">
            {/* Logo Icon */}
            <div className="w-12 h-12 rounded-full bg-[#22333B] flex items-center justify-center flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E67E22" />
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-wide leading-tight">
                <span className="text-[#22333B]">BHUVAN</span>{" "}
                <span className="text-[#E67E22]">ACADEMY</span>
              </h1>
              <div className="bg-[#E67E22] px-2 py-0.5 rounded-sm mt-0.5">
                <p className="text-[9px] uppercase tracking-[2px] text-white font-medium">
                  An Academy of Distance Education
                </p>
              </div>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-[#E67E22]"
                      : "text-[#22333B] hover:text-[#E67E22]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="active-link"
                        className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#E67E22] rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Enquire Now Button */}
          <div className="hidden lg:block">
            <Button className="flex items-center gap-2 text-sm">
              <Send size={15} />
              Enquire Now
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-[#22333B]"
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </Container>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-white z-50 shadow-2xl p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#22333B] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E67E22" />
                      <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold leading-tight">
                      <span className="text-[#22333B]">BHUVAN</span>{" "}
                      <span className="text-[#E67E22]">ACADEMY</span>
                    </h2>
                    <p className="text-[9px] tracking-[2px] uppercase text-gray-500">
                      Distance Education
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navigationLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium ${
                        isActive
                          ? "text-[#E67E22]"
                          : "text-[#22333B] hover:text-[#E67E22]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button className="mt-6 w-full flex items-center justify-center gap-2">
                  <Send size={15} />
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
