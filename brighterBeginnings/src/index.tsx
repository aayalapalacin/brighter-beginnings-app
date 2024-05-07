//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//include your index.scss file into the bundle
import "./front/styles/globals.css";

//import your own components
import Layout from "./front/js/layout";

//render your react application
const container = document.querySelector("#app");
const root = createRoot(container!);
root.render(<Layout />);
