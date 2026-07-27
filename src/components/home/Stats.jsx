import { motion } from "framer-motion";
import Container from "../common/Container";

const stats = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" fill="#E67E22" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="17" cy="7" r="3" fill="#E67E22" opacity="0.6" />
        <path d="M21 21v-2a3 3 0 00-3-3h-1" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    number: "2,500+",
    label: "Students Enrolled",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M7 8h10M7 12h7" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18v3M8 21h8" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: "50+",
    label: "Programs Offered",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M9 22V12h6v10" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    number: "10+",
    label: "Partner Universities",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#E67E22" strokeWidth="2" fill="none" />
        <path d="M12 7v5l3 3" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 2.5C9 2.5 9.5 4 12 4s3-1.5 3-1.5" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    number: "12+",
    label: "Years of Excellence",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#22333B] py-14">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
