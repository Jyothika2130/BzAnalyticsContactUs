"use client";

import { SetStateAction, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PageHero from "../components/PageHero";
import ContactLocations from "../components/ContactLocations";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [timeline, setTimeline] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");

  const [captcha, setCaptcha] = useState<string | null>(null);
  const [source, setSource] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    project?: string;
    timeline?: string;
    businessType?: string;
    captcha?: string;
    source?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.project.trim())
      newErrors.project = "Project details are required";

    if (!timeline) newErrors.timeline = "Please select a timeline";

    if (!businessType) newErrors.businessType = "Please select a business type";

    if (!source) newErrors.source = "Please select an option";

    if (!captcha) newErrors.captcha = "Please verify that you are not a robot";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully ✅");

      console.log({
        ...formData,
        timeline,
        businessType,
        captcha,
        source,
      });
    }
  };

  return (
    <>
      <Header />

      <div className="relative">
        <PageHero title="Contact Us" breadcrumb="Contact us" />

        <section className="relative bg-white text-black dark:bg-black dark:text-white py-16 md:py-24 overflow-hidden">
          <span className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-sm tracking-widest text-gray-400 uppercase text-center mb-4">
              Contact with BZ
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
              Get in touch <br /> with Bz Team
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-14">
              We’re ready to become your personal guide through the software
              experience as we bring your app or website to life.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">
              Your Contact details
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
                placeholder="First name"
              />

              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
                placeholder="Last name"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Email address"
              />

              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                placeholder="Phone number"
              />
            </form>
<h3 className="text-lg font-semibold text-center mb-4">
            Project Details
            </h3>
            <textarea
              name="project"
              rows={6}
              value={formData.project}
              onChange={handleChange}
              placeholder="Tell us about your project"
              className="input w-full resize-none"
            />
          </div>
        </section>
      </div>

      <section className="bg-white text-black dark:bg-black dark:text-white py-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 my-2">
          <h3 className="text-xl font-semibold text-center mb-4 font-bold">
            What's your timeline?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              "No timeline(just researching)",
              "planning(looking to start in 6 months)",
              "immediate(ready to start today)",
            ].map((value) => (
              <label
                key={value}
                className="flex flex-col items-center cursor-pointer gap-3"
              >
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === value}
                  onChange={() => setTimeline(value)}
                  className="hidden"
                />

                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    timeline === value
                      ? "border-orange-500"
                      : "border-black dark:border-white"
                  }`}
                >
                  {timeline === value && (
                    <span className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                  )}
                </span>

                <p className="font-medium capitalize">{value}</p>
              </label>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-center my-10">
            Type of business
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-2">
            {["Startup", "Small to medium business", "Enterprise"].map(
              (type) => (
                <label
                  key={type}
                  className="flex flex-col items-center cursor-pointer gap-3"
                >
                  <input
                    type="radio"
                    name="business"
                    checked={businessType === type}
                    onChange={() => setBusinessType(type)}
                    className="hidden"
                  />

                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      businessType === type
                        ? "border-orange-500"
                        : "border-black dark:border-white"
                    }`}
                  >
                    {businessType === type && (
                      <span className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                    )}
                  </span>

                  <p className="font-medium">{type}</p>
                </label>
              ),
            )}
          </div>

          {errors.businessType && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.businessType}
            </p>
          )}
          <div className="w-full max-w-xl mx-auto mt-6">
            <h3 className="text-lg font-semibold text-center mb-4">
              Where did you hear about us?
            </h3>

            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white px-5 py-4 rounded-md"
            >
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="referral">Referral</option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>

          <div className="flex flex-col items-center mt-10 gap-6">
            <ReCAPTCHA
              sitekey="6LctE4YsAAAAADDAowc8rnztiGm3L_l_hkRh3D7b"
              onChange={(value: SetStateAction<string | null>) => setCaptcha(value)}
            />

            <button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-12 py-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <ContactLocations />

      <Footer />
    </>
  );
}
