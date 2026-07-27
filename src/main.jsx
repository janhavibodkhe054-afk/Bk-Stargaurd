import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App.jsx";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);