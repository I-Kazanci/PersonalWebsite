
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { Analytics } from '@vercel/analytics/next';
import {Topics} from "./Topics";
import {Home} from "./Home";
import {Gallery} from "./Gallery";

function App() {

  return (
    <BrowserRouter>
        <Analytics />
        <h1> İnan Kazancı</h1>
        <nav>
            <Link className="link" to="/">Home</Link> {" "}
            <Link className="link"  to="/topics">Topics</Link> {" "}
            <Link className="link"  to="/gallery">Gallery</Link>
        </nav>
        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
