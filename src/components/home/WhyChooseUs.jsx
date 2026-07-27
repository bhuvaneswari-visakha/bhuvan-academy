import {
  GraduationCap,
  BadgeCheck,
  Users,
  Clock,
  BookOpen,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "UGC Recognized Programs",
    description: "Pursue recognized undergraduate and postgraduate degrees."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study anytime, anywhere at your own pace."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced educators and industry professionals."
  },
  {
    icon: BadgeCheck,
    title: "Affordable Fees",
    description: "Quality education at budget-friendly tuition fees."
  },
  {
    icon: BookOpen,
    title: "Wide Range of Courses",
    description: "Choose from engineering, management, commerce, science and more."
  },
  {
    icon: Headphones,
    title: "Student Support",
    description: "Dedicated guidance throughout your learning journey."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#22333B] mt-3 text-gray-900">
            Why Bhuvan Academy?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            We provide flexible, affordable, and career-oriented education
            designed to help students achieve their academic goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
                  <Icon className="text-orange-500" size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-lg">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}