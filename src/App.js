import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./Components/Shop";
import ShopList from "./Components/ShopList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop-list" element={<ShopList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
