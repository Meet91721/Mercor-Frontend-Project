import React, { useState, useEffect } from "react";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(parseInt(window.pageYOffset));
    })
  })
  return (
    <div className="md:h-[500vh] bg-black h-auto" >
      <Section1 scrollY={scrollY} />
      <Section2 />
    </div>
  );
}

export default App;
