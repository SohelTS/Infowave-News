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



import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer"; // We'll create this later

function App() {
  const [category, setCategory] = useState("General"); // default category

  return (
    <div>
      <Navbar onCategoryChange={setCategory} />
      <Home category={category} />
      <Footer />
    </div>
  );
}

export default App;
