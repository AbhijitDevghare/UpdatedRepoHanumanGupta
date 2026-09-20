import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
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

  /*
  |--------------------------------------------------------------------------
  | PREFILL FORM FROM URL
  |--------------------------------------------------------------------------
  | Examples:
  | /contact?type=corporate-training
  | /contact?type=college-training
  | /contact?type=lab
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
  };

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.message
    ) {
      return;
    }

    setSubmitted(true);
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

        <section className="px-6 pb-10 pt-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let’s Connect
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Choose the easiest way to reach us or send us a quick message.
            </p>

          </div>
        </section>

        {/* ================================================================
            DIRECT CONTACT OPTIONS
        ================================================================= */}

        <section className="px-6 pb-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* ------------------------------------------------------------
                  WHATSAPP
              ------------------------------------------------------------- */}

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <MessageCircle
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  WhatsApp
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Chat with us
                </p>
              </a>

              {/* ------------------------------------------------------------
                  EMAIL
              ------------------------------------------------------------- */}

              <a
                href={`mailto:${CONTACT.email}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Mail
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  Email
                </h2>

                <p className="mt-1 break-all text-sm text-slate-500">
                  {CONTACT.email}
                </p>
              </a>

              {/* ------------------------------------------------------------
                  PHONE
              ------------------------------------------------------------- */}

              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Phone
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  Phone
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {CONTACT.phone}
                </p>
              </a>

              {/* ------------------------------------------------------------
                  LINKEDIN
              ------------------------------------------------------------- */}

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                  {/* LinkedIn SVG */}
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

                <h2 className="mt-4 text-base font-semibold text-slate-900">
                  LinkedIn
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Connect with us
                </p>
              </a>

            </div>
          </div>
        </section>

        {/* ================================================================
            FORM
        ================================================================= */}

        <section className="px-6 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">

            <div className="mb-7 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                Or Send a Message
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Tell Us How We Can Help
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              {/* ==========================================================
                  SUCCESS MESSAGE
              =========================================================== */}

              {submitted ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 size={34} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    Message Sent
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                    Thank you for contacting us. We’ll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);

                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        interestedIn: "",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send Another Message
                  </button>

                </div>
              ) : (

                /* ==========================================================
                   FORM
                =========================================================== */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label className={labelClass}>
                        Name
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Email
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                        required
                      />
                    </div>

                  </div>

                  {/* Phone + Interested In */}
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

                  {/* Message */}
                  <div>

                    <label className={labelClass}>
                      Message
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      rows={5}
                      className={inputClass}
                      required
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                </form>

              )}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;