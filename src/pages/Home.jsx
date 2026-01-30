import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;