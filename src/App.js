import logo from "./logo.svg";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info className="info"></Info>
        <About></About>
        <Interest></Interest>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
