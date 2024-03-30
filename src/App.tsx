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
      {/* Nav */}
      <section className="">
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
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
