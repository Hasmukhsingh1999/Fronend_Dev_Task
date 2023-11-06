import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import ClientProviders from "./clientProvider/ClientProvider";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ClientProviders>
        <Navbar />
        <App />
        <Footer/>
      </ClientProviders>
    </Provider>
  </React.StrictMode>
);
