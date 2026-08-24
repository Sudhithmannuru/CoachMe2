import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  About,
  Coaches,
  Donate,
  Evolved,
  Groups,
  Home,
  Innovators,
  Scheduling,
  Services,
  Team,
  Volunteer,
} from "./pages";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/meet-our-coaches" element={<Coaches />} />
        <Route path="/innovators" element={<Innovators />} />
        <Route path="/new-page" element={<Navigate to="/innovators" replace />} />
        <Route path="/team" element={<Team />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/services" element={<Services />} />
        <Route path="/group-experiences" element={<Groups />} />
        <Route path="/content" element={<Evolved />} />
      </Routes>
    </Layout>
  );
}
