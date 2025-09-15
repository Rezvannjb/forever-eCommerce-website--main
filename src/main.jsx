import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { SessionProvider } from "./context/SessionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SessionProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </SessionProvider>
  </BrowserRouter>
);
