import Nav from "./components/Nav";
import {
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  Count,
} from "./sections/index";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <Count />
      <Services />
      <SpecialOffer />
      <Subscribe />

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
