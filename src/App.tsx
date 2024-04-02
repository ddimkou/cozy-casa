import Nav from "./components/Nav";
import {
  Footer,
  Hero,
  PopularProducts,
  Reviews,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />

      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
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
