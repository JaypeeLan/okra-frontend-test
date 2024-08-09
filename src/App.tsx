import { Footer, Header, ResourcesSection } from "../components";
import "../styles/main.scss";

const App = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <Header />
      <div></div>
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default App;
