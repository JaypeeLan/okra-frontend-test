import { Footer, Header } from "../components";
import "../styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "200vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
