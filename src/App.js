// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home category="general" />} />
        <Route path="/business" element={<Home category="business" />} />
        <Route path="/technology" element={<Home category="technology" />} />
        <Route path="/sports" element={<Home category="sports" />} />
        <Route path="/entertainment" element={<Home category="entertainment" />} />
        <Route path="/health" element={<Home category="health" />} />
        <Route path="/science" element={<Home category="science" />} />
      </Routes>
    </Router>
  );
}

export default App;


