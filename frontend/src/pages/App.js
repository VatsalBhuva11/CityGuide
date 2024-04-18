import { BrowserRouter, Routes, Route } from "react-router-dom";
import  DashBoard from './DashBoard'

function App() {
    return (
        <BrowserRouter>
        <Routes>
        
        <Route
        path = '/dashboard'
        element={<DashBoard/>}></Route>

        </Routes>
        </BrowserRouter>
    );

}

export default App;
