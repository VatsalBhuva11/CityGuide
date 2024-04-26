import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Register from "./Register";
import Login from "./Login";
import City from "./City";
import Places from "./Places";
import Blog from "./Blog";
import OpenBlog from "./OpenBlog";
import NewBlog from "./NewBlog";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/places" element={<Places />} />
        <Route path="/city" element={<City />} />
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/blog" element={<OpenBlog />}></Route>
        <Route path="/blog/1" element={<Blog1 />}></Route>
        <Route path="/blog/2" element={<Blog2 />}></Route>
        <Route path="/blog/3" element={<Blog3 />}></Route>
        <Route path="/blog/4" element={<Blog4 />}></Route>
        <Route path="/newBlog" element={<NewBlog/>}></Route>
        <Route path="/user/itenary" ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
