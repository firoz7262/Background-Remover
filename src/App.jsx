// import { useState } from "react";

// import "./App.css";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header />
//       <Home />
//       <Login />
//     </>
//   );
// }

// export default App;

// chatgpt

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Bgremove from "./components/Bgremove";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // ✅ Always show header
  const showHeader = true;

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bgremove" element={<Bgremove />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
