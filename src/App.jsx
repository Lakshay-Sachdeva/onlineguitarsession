import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
    </div>
  );
};
