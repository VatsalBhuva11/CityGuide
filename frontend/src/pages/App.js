import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Register from "./Register";
import Login from "./Login";
import City from "./City";
import Places from "./Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user/itenary"></Route>
        <Route path="/places" element={<Places />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
