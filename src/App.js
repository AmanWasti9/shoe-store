import "./App.css";
import Design from "./Components/Design/Design";
import Design1 from "./Components/Design/Design1";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Reasons from "./Components/Reasons/Reasons";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <br />
      <Products />
            <Reasons />

      <Design />
      <Design1 />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />

    </div>
  );
}

export default App;
