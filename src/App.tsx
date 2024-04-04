import Nav from "./components/Nav";
import {
  Footer,
  Hero,
  PopularProducts,
  Reviews,
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

      <section>
        <SpecialOffer />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
