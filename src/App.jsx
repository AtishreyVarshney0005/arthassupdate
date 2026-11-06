import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientTrust from "./components/ClientTrust";
import Approach from "./components/Approach";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Approach />
        <ClientTrust />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
