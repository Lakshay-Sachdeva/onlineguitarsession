import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Services />
      <Pricing />
    </div>
  );
};
