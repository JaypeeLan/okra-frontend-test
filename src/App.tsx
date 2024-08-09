import {
  ContactSection,
  Footer,
  Header,
  ResourcesSection,
} from "../components";
import "../styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default App;
