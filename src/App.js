import {HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post' element={<Post />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
