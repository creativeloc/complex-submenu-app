import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppProvider } from "./Context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
)
