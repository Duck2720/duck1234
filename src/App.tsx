import HomePage from "pages/User/HomePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ClienLayout from "./layouts/client.layout";
import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ClienLayout />}>
            <Route index element={<Navigate to="/Home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
