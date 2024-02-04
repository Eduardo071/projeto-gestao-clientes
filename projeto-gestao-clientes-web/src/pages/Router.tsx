import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";

export default function AppRoutes() {
return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
)
}