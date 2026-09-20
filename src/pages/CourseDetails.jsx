import { Link, useParams } from "react-router-dom";
import CourseCTA from "../components/CourseCTA";
import CourseHero from "../components/CourseHero";
import CourseHighlights from "../components/CourseHighlights";
import CourseOverview from "../components/CourseOverview";
import CurriculumAccordion from "../components/CurriculumAccordion";
import CurriculumDownload from "../components/CurriculumDownload";
import Footer from "../components/Footer";
import LearningOutcomes from "../components/LearningOutcomes";
import Navbar from "../components/Navbar";
import PracticalLearning from "../components/PracticalLearning";
import Prerequisites from "../components/Prerequisites";
import RelatedCourses from "../components/RelatedCourses";
import TargetAudience from "../components/TargetAudience";
import TopBar from "../components/TopBar";
import { getCourseDetail } from "../data/courseDetails";

export default function CourseDetails() {
  const { category, course: courseSlug } = useParams();
  const course = getCourseDetail(category, courseSlug);

  if (!course) {
    return (
      <>
        {/* <TopBar /> */}
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
            COURSE NOT FOUND
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-brand-navy">
            This course is not available yet
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Return to the course catalog to explore the available learning
            paths.
          </p>
          <Link
            to="/courses"
            className="mt-7 inline-flex rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue"
          >
            Browse Courses →
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <CourseHero course={course} />
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <CourseOverview course={course} />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <LearningOutcomes outcomes={course.learningOutcomes} />
            <Prerequisites prerequisites={course.prerequisites} />
          </div>
          <CurriculumAccordion modules={course.modules} />
          <PracticalLearning course={course} />
          <CourseHighlights highlights={course.highlights} />
          <TargetAudience audience={course.targetAudience} />
          <CurriculumDownload course={course} />
          <RelatedCourses course={course} />
          <CourseCTA course={course} />
        </div>
      </main>
      <Footer />
    </>
  );
}
