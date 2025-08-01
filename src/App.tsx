import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from "react-redux"
import { store } from "./store/store"
import NavBar from "./components/NavBar"
import Home from "./pages/public_portfolio/Home"
import Projects from "./pages/public_portfolio/Projects"
import ProjectDetail from "./pages/public_portfolio/ProjectDetail"
import Contact from "./pages/public_portfolio/Contact"
import "./styles/main.css"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
