import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Clock3,
  Building2,
  GraduationCap,
  Laptop,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
|--------------------------------------------------------------------------
| CONTACT DETAILS
|--------------------------------------------------------------------------
| Replace these with the actual trainer/company details.
*/

const CONTACT = {
  email: "training@nexustech.edu",
  phone: "+91 9876543210",
  whatsapp: "919876543210",
  linkedin: "https://www.linkedin.com/",
};

const Contact = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | PREFILL FORM FROM URL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "corporate-training") {
      setFormData((prev) => ({
        ...prev,
        interestedIn: "Corporate Training",
      }));
    }

    if (type === "college-training") {
      setFormData((prev) => ({
        ...prev,
        interestedIn: "College Training",
      }));
    }

    if (type === "lab" || type === "lab-access") {
      setFormData((prev) => ({
        ...prev,
        interestedIn: "IT Labs",
      }));
    }
  }, [searchParams]);

  /*
  |--------------------------------------------------------------------------
  | INPUT HANDLER
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT - EMAILJS
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        interested_in: formData.interestedIn || "Not specified",
        message: formData.message,
        to_email: CONTACT.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Unable to send your message right now. Please try again or contact us directly by email."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | RESET FORM
  |--------------------------------------------------------------------------
  */

  const handleSendAnother = () => {
    setSubmitted(false);
    setError("");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interestedIn: "",
      message: "",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | STYLES
  |--------------------------------------------------------------------------
  */

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

  const labelClass =
    "mb-2 block text-sm font-medium text-slate-700";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* ================================================================
            HEADER
        ================================================================= */}

        {/* <section className="px-6 pb-10 pt-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let’s Connect
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Tell us what you’re looking for and our team will help you find
              the right training, course, or learning solution.
            </p>
          </div>
        </section> */}

        <br />

        {/* ================================================================
            MAIN FORM SECTION
        ================================================================= */}

        <section className="px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">

              {/* ==========================================================
                  LEFT INFORMATION
                  HIDDEN ON MOBILE AND TABLET
              =========================================================== */}

              <div className="hidden bg-slate-50 p-7 sm:p-10 lg:block lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                  Get In Touch
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  Tell Us How We Can Help
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Whether you are looking for corporate training, college
                  programs, individual courses, or hands-on IT labs, send us
                  your requirements and we’ll get back to you.
                </p>

                {/* BENEFITS */}

                <div className="mt-8 space-y-5">

                  {/* QUICK RESPONSE */}

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Clock3 size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Quick Response
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Share your requirements and our team will get back to
                        you.
                      </p>
                    </div>
                  </div>

                  {/* CORPORATE */}

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Building2 size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Corporate Training
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Training programs designed around organizational
                        requirements.
                      </p>
                    </div>
                  </div>

                  {/* COLLEGE */}

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <GraduationCap size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        College Training
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Practical technical training for students and
                        institutions.
                      </p>
                    </div>
                  </div>

                  {/* LABS */}

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Laptop size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Hands-on IT Labs
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Practice with real-world infrastructure and
                        technologies.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* ==========================================================
                  FORM
              =========================================================== */}

              <div className="p-6 sm:p-10 lg:p-12">

                {/* SUCCESS MESSAGE */}

                {submitted ? (
                  <div className="flex min-h-[480px] flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <CheckCircle2 size={34} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-slate-900">
                      Message Sent
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                      Thank you for contacting us. We’ve received your message
                      and will get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={handleSendAnother}
                      className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* FORM TITLE */}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        Send Us a Message
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Fill in the details below and we’ll get in touch.
                      </p>
                    </div>

                    {/* ERROR */}

                    {error && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">
                        <AlertCircle
                          size={19}
                          className="mt-0.5 shrink-0"
                        />

                        <p>{error}</p>
                      </div>
                    )}

                    {/* NAME + EMAIL */}

                    <div className="grid gap-5 md:grid-cols-2">

                      <div>
                        <label className={labelClass}>
                          Name
                          <span className="ml-1 text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                          required
                          disabled={submitting}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Email
                          <span className="ml-1 text-red-500">*</span>
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                          required
                          disabled={submitting}
                        />
                      </div>

                    </div>

                    {/* PHONE + INTERESTED IN */}

                    <div className="grid gap-5 md:grid-cols-2">

                      <div>
                        <label className={labelClass}>
                          Phone
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={inputClass}
                          disabled={submitting}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Interested In
                        </label>

                        <select
                          name="interestedIn"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          className={inputClass}
                          disabled={submitting}
                        >
                          <option value="">
                            Select an option
                          </option>

                          <option value="Corporate Training">
                            Corporate Training
                          </option>

                          <option value="College Training">
                            College Training
                          </option>

                          <option value="Individual Courses">
                            Individual Courses
                          </option>

                          <option value="IT Labs">
                            IT Labs
                          </option>

                          <option value="Networking">
                            Networking
                          </option>

                          <option value="Cloud Computing">
                            Cloud Computing
                          </option>

                          <option value="Linux">
                            Linux
                          </option>

                          <option value="Windows Server">
                            Windows Server
                          </option>

                          <option value="VMware & Virtualization">
                            VMware & Virtualization
                          </option>

                          <option value="Other">
                            Other
                          </option>
                        </select>
                      </div>

                    </div>

                    {/* MESSAGE */}

                    <div>
                      <label className={labelClass}>
                        Message
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need..."
                        rows={6}
                        className={inputClass}
                        required
                        disabled={submitting}
                      />
                    </div>

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            OTHER CONTACT OPTIONS
        ================================================================= */}

        <section className="px-6 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">

            {/* SECTION HEADER */}

            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                Other Ways to Reach Us
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Prefer to Contact Us Directly?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Choose any of the options below and reach us through your
                preferred channel.
              </p>
            </div>

            {/* CONTACT CARDS */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <MessageCircle size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  WhatsApp
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Chat with us
                </p>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${CONTACT.email}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Email
                </h3>

                <p className="mt-1 break-all text-sm text-slate-500">
                  {CONTACT.email}
                </p>
              </a>

              {/* PHONE */}

              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Phone
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {CONTACT.phone}
                </p>
              </a>

              {/* LINKEDIN */}

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="27"
                    height="27"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28h-.03zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V8.99H3.56v11.46z" />
                  </svg>
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  LinkedIn
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Connect with us
                </p>
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;