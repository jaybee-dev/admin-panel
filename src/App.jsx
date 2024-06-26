import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import DinoTrade from "./components/pages/dinos/DinoTrade.jsx";
import ItemTrade from "./components/pages/items/ItemTrade.jsx";
import SaddleTrade from "./components/pages/saddles/SaddleTrade.jsx";
import TekTrade from "./components/pages/tek/TekTrade.jsx";
import BossTrade from "./components/pages/bosses/BossTrade.jsx";
import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id='main'>
        <div className="bg-background text-text grid grid-rows-main min-h-screen">
        <Header />
        <Navbar />
        {/* Start routes */}
        {/* <Pannel /> */}
        <Routes>
          <Route path="dinos" element={<DinoTrade />} />
          <Route path="items" element={<ItemTrade />} />
          <Route path="saddles" element={<SaddleTrade />} />
          <Route path="tek" element={<TekTrade />} />
          <Route path="bosses" element={<BossTrade />} />
        </Routes>
        {/* End routes */}
        <Footer />
      </div>
    </div>
  );
}

export default App
