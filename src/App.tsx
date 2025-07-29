import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes></Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
