import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dataprovider from "./Componets/DataProvider/Dataprovider.jsx";
import reducer from "./Utility/reducer.js";
import { initialState } from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dataprovider reducer={reducer} initialState={initialState}>
      <App />
    </Dataprovider>
  </StrictMode>
);
