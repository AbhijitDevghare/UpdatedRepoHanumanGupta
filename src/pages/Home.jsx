import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShowcaseSlider from "../components/ShowcaseSlider";
import CoursePreview from "../components/CoursePreview";
import TechnologyOverview from "../components/TechnologyOverview";
import ITLabsPreview from "../components/ITLabsPreview";
import CollegeTrainingPreview from "../components/CollegeTrainingPreview";
import CorporateTrainingPreview from "../components/CorporateTrainingPreview";
import TrainingExperiencePreview from "../components/TrainingExperiencePreview";
import AlumniSlider from "../components/AluminiSlider";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import TopBar from "../components/TopBar";


/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   ANIMATED SECTION
========================================================= */

function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   HOME
========================================================= */

export default function Home() {
  return (
    <>
      
      <Navbar />

      <main>

        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Hero />
        </motion.div>


        {/* SHOWCASE */}

        <AnimatedSection>
          <ShowcaseSlider />
        </AnimatedSection>


        {/* COURSE PREVIEW */}

        <AnimatedSection>
          <CoursePreview />
        </AnimatedSection>


        {/* TECHNOLOGY */}

        <AnimatedSection>
          <TechnologyOverview />
        </AnimatedSection>


        {/* IT LABS */}

        <AnimatedSection>
          <ITLabsPreview />
        </AnimatedSection>


        {/* COLLEGE TRAINING */}

        <AnimatedSection>
          <CollegeTrainingPreview />
        </AnimatedSection>


        {/* CORPORATE TRAINING */}

        <AnimatedSection>
          <CorporateTrainingPreview />
        </AnimatedSection>


        {/* TRAINING EXPERIENCE */}

        <AnimatedSection>
          <TrainingExperiencePreview />
        </AnimatedSection>


        {/* ALUMNI */}

        <AnimatedSection>
          <AlumniSlider />
        </AnimatedSection>


        {/* FINAL CTA */}

        <AnimatedSection>
          <FinalCTA />
        </AnimatedSection>

          <FAQSection/>
      </main>

      <Footer />
    </>
  );
}