
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Topics} from "./Topics";
import {Home} from "./Home";
import {Gallery} from "./Gallery";

function App() {

  return (
    <BrowserRouter>
        <h1> İnan Kazancı</h1>
        <nav>
            <Link className="link" to="/">Home</Link> {" "}
            <Link className="link"  to="/about">Topics</Link> {" "}
            <Link className="link"  to="/contact">Gallery</Link>
        </nav>
        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Topics />} />
            <Route path="/contact" element={<Gallery />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
