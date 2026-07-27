import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CourseSection from "../components/home/CourseSection";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testmonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseSection />
      <Stats />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;
