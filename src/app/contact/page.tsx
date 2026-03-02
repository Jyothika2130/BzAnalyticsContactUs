"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import ContactLocations from "../components/ContactLocations";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [timeline, setTimeline] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");

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
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project details are required";
    }

    if (!timeline) {
      newErrors.timeline = "Please select a timeline";
    }

    if (!businessType) {
      newErrors.businessType = "Please select a business type";
    }

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
      });
    }
  };

  return (
    <>
      <Header />

      <div className="relative">
        <PageHero title="Contact Us" breadcrumb="Contact" />

        <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
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
              <div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </form>

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
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
            {errors.project && (
              <p className="text-red-500 text-sm mt-1">
                {errors.project}
              </p>
            )}
          </div>
        </section>
      </div>

      
      <section className="bg-black text-white py-16 md:py-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-semibold text-center mb-10 font-bold">
            What's your timeline?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-2 ">
            {["No timeline(just researching)", "planning(looking to start in 6 months)", "immediate(ready to satrt today)"].map((value) => (
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
                      : "border-white"
                  }`}
                >
                  {timeline === value && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </span>
                <p className="font-medium capitalize">{value}</p>
              </label>
            ))}
          </div>

          {errors.timeline && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.timeline}
            </p>
          )}

          <h3 className="text-xl font-semibold text-center my-10">
            Type of business
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-2">
            {["Startup", "Small to medium business", "Enterprise"].map((type) => (
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
                      : "border-white"
                  }`}
                >
                  {businessType === type && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </span>
                <p className="font-medium">{type}</p>
              </label>
            ))}
          </div>

          {errors.businessType && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.businessType}
            </p>
          )}

          <div className="flex justify-center mt-12">
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