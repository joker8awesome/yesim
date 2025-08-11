import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <FAQ />
        <Contact />
      </Container>
      <FloatingNav />
    </>
  );
};

export default HomePage;
