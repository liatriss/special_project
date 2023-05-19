import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Auth/AuthProvider"
import ContextWrapper from "./context/ContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextWrapper>
          <App />
        </ContextWrapper>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
