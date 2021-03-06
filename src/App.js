import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src={logo} className="logo img-fluid" alt="logo" />{" "}
          <span>DICTIONARY</span>
        </header>
        <main>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
