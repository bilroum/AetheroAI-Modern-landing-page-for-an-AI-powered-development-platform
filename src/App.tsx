import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Pricing } from "./components/sections/Pricing";
import { CallToAction } from "./components/sections/CallToAction";

function App() {
  return (
    <Layout title="landing page react-ts">
      <Hero />
      <Brands />
      <Services />
      <About />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}

export default App;
