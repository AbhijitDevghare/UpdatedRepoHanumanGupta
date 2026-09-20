import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowcaseSlider from "../components/ShowcaseSlider";
import TechnologyOverview from "../components/TechnologyOverview";
import TrustBar from "../components/TrustBar";
import CoursePreview from "../components/CoursePreview";
import ITLabsPreview from "../components/ITLabsPreview";
import CorporateTrainingPreview from "../components/CorporateTrainingPreview";
import CollegeTrainingPreview from "../components/CollegeTrainingPreview";
import TrainingExperiencePreview from "../components/TrainingExperiencePreview";
import WhyChooseUs from "../components/WhyChooseUs";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import AlumniSlider from "../components/AluminiSlider";

export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <main>
      
        {/* <TrustBar /> */}
        <Hero />

        <ShowcaseSlider />

        <CoursePreview />

        <TechnologyOverview />

        <ITLabsPreview />

        <CollegeTrainingPreview />

        <CorporateTrainingPreview />

        <TrainingExperiencePreview />

        <AlumniSlider />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
