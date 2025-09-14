// src/routes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Company from "./pages/company/Company";
import Courses from "./pages/courses/Courses";
import Faq from "./pages/faq/Faq";
import Pricing from "./pages/pricing/Pricing";
import Job from "./pages/jobs/Job";
import Profile from "./pages/profile/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/company" element={<Company/>}></Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/princing" element={<Pricing />} />
        <Route path="/job" element={<Job />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
