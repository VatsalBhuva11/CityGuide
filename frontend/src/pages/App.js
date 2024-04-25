import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Register from "./Register";
import Login from "./Login";
import Blog from "./Blog";
import OpenBlog from "./OpenBlog";
import NewBlog from "./NewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/blog" element={<OpenBlog />}></Route>
        <Route path="/newBlog" element={<NewBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
