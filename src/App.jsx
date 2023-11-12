import { Layout } from "./Layout";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contacts } from "./sections/Contacts";

export function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  );
}
