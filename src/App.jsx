import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import ITLabs from "./pages/ITLabs";
import CorporateTraining from "./pages/CorporateTraining";
import CollegeTraining from "./pages/CollegeTraining";
import TrainingExperience from "./pages/TrainingExperience";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:category" element={<Courses />} />
      <Route path="/courses/:category/:course" element={<CourseDetails />} />
      <Route path="/it-labs" element={<ITLabs />} />
      <Route path="/corporate-training" element={<CorporateTraining />} />
      <Route path="/college-training" element={<CollegeTraining />} />
      <Route path="/training-experience" element={<TrainingExperience />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
