import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
