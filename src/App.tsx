import {
  ContactSection,
  Footer,
  Header,
  ResourcesSection,
} from "../components";
import "../styles/main.scss";

const App = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <ContactSection />
      <Header />
      <ResourcesSection />

      <Footer />
    </div>
  );
};

export default App;
