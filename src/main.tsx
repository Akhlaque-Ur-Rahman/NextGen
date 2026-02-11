
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  