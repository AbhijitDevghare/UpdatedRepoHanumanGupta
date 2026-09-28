import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of IT training do you offer?",
    answer:
      "We provide technical training across Networking, Linux, Windows Server, VMware & Virtualization, Cloud Computing, Automation, Programming, Database Technologies, and emerging IT technologies. You can choose an individual course based on the technology you want to learn, or discuss a customized program for a college or organization.",
  },

  {
    question: "Will I actually get to practice what I learn?",
    answer:
      "Yes. Practical work is an important part of the training. Instead of stopping at concepts and theory, learners can work through configurations, commands, troubleshooting exercises, and technology-specific scenarios in a lab environment. This gives you an opportunity to practice the same type of technical tasks discussed during the training.",
  },

  {
    question: "What are the virtual IT labs used for?",
    answer:
      "The virtual labs provide a separate environment where you can safely practice technical tasks. For example, you can work with Windows or Linux systems, configure networking, install software, test configurations, troubleshoot problems, and repeat an exercise when needed. The purpose is to turn the concepts covered during training into practical experience.",
  },

  {
    question: "I'm a student. Can I join the training?",
    answer:
      "Yes. The courses are designed around practical IT technologies and can be useful for students who want to build technical skills beyond their academic curriculum. Depending on the course, you can learn technologies such as networking, Linux, Windows Server, virtualization, cloud, and other infrastructure-related topics.",
  },

  {
    question: "Do you provide training directly for colleges?",
    answer:
      "Yes. College training programs can be organized around the students, selected technologies, available time, and practical requirements. A program can focus on a particular technology or combine multiple areas to give students broader exposure to industry-relevant IT environments.",
  },

  {
    question: "Do you provide corporate training?",
    answer:
      "Yes. Corporate training can be structured around an organization's technology environment and team requirements. The program can focus on a specific technology, a particular skill gap, or a combination of topics relevant to the team's work. Training can also include practical exercises so participants can apply what they learn.",
  },

  {
    question: "Can training be customized for our requirements?",
    answer:
      "Yes. Customized training can be planned around your team's technology stack, roles, current skill levels, and learning objectives. Instead of following a fixed structure, the training topics and practical exercises can be aligned with the areas your students or team actually need to work on.",
  },

  {
    question: "How do I choose the right course?",
    answer:
      "Start with the technology or role you want to develop. If you are interested in networking, look at Networking or CCNA-related training. If your focus is infrastructure, Linux, Windows Server, VMware, cloud, or automation courses may be relevant. If you are unsure, you can contact us and explain what you are trying to learn or achieve, and we can discuss the available training options.",
  },

  {
    question: "Do the courses include hands-on troubleshooting?",
    answer:
      "Practical troubleshooting can be part of the training and lab exercises. Rather than only showing the correct configuration, learners can work through technical scenarios where they need to identify an issue, check the configuration, make changes, and verify the result. This helps connect technical concepts with actual problem-solving.",
  },

  {
    question: "Can I request training on a technology that isn't listed?",
    answer:
      "If you have a specific technology or training requirement that is not currently listed in the course catalog, you can contact us with the details. For customized college and corporate programs, the training structure can be discussed according to the required technology, learning objectives, duration, and practical requirements.",
  },

  {
    question: "How does the training process work?",
    answer:
      "The process starts by understanding what you want to learn and who the training is for. From there, the relevant technologies and learning objectives can be identified, the training structure can be planned, and practical exercises can be included where required. For customized programs, the content can be aligned with the organization's or college's requirements.",
  },

  {
    question: "How can I enquire about a training program?",
    answer:
      "You can use the Contact Us section to tell us what you are looking for. Include details such as the technology, number of learners, whether the training is for students or an organization, and any preferred schedule or format. This gives us enough context to understand your requirement and discuss the appropriate training option.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:pt-2">
            <h2 className="text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
              Questions about
              <br />
              <span className="text-brand-blue">
                our training?
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Whether you're a student, college coordinator, or
              organization looking for technical training, here
              are answers to some of the questions you may have
              before getting started.
            </p>

            <div className="mt-7 hidden border-l-2 border-blue-100 pl-5 lg:block">
              <p className="text-sm font-semibold text-brand-navy">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Contact us with your requirement and we'll discuss
                the available training options with you.
              </p>
            </div>
          </div>

          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    border-b border-slate-200
                    last:border-b-0
                  "
                >

                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex w-full items-center
                      justify-between gap-6
                      px-5 py-5
                      text-left
                      transition-colors duration-200
                      hover:bg-slate-50
                      sm:px-6 sm:py-6
                    "
                  >
                    <span
                      className={`
                        text-sm font-semibold
                        leading-6
                        transition-colors
                        sm:text-base
                        ${
                          isOpen
                            ? "text-brand-blue"
                            : "text-brand-navy"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        transition-all duration-200
                        ${
                          isOpen
                            ? "bg-blue-50 text-brand-blue"
                            : "bg-slate-50 text-slate-400"
                        }
                      `}
                    >
                      <ChevronDown
                        size={18}
                        className={`
                          transition-transform duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    id={`faq-answer-${index}`}
                    className={`
                      grid transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">

                        <div className="border-l-2 border-blue-100 pl-4">
                          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}