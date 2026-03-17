"use client";

import { useState, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactFormPage() {
  const [timeline, setTimeline] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [source, setSource] = useState("");
const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";

    if (!formData.project.trim())
      newErrors.project = "Project details required";

    if (!timeline) newErrors.timeline = "Select timeline";
    if (!businessType) newErrors.businessType = "Select business type";
    if (!source) newErrors.source = "Select source";
    if (!captcha) newErrors.captcha = "Verify captcha";

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
        source,
        captcha,
      });
    }
  };

  return (
    <>
      {/* TOP SECTION */}
      <section className="bg-white text-black dark:bg-black dark:text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase text-center mb-4">
            Contact with BZ
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
            Get in touch <br /> with Bz Team
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-14">
            We’re ready to become your personal guide through the software
            experience as we bring your app or website to life.
          </p>

          <h3 className="text-2xl font-bold mb-8 text-center">
            Your Contact details
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input w-full h-[63px]"
              placeholder="First name"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input w-full h-[63px]"
              placeholder="Last name"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full h-[63px]"
              placeholder="Email address"
            />

            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="input w-full h-[63px]"
              placeholder="Phone number"
            />
          </form>

          <h3 className="text-2xl font-medium text-center mb-4">
            Project Details
          </h3>

          <textarea
            name="project"
            rows={6}
            value={formData.project}
            onChange={handleChange}
            placeholder="Tell us about your project"
            className="input w-full h-[130px]"
          />
        </div>
      </section>

      {/* RADIO SECTION */}
      <section className="bg-white dark:bg-black py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          {/* TIMELINE */}
          <h3 className="text-2xl font-bold mb-10 text-black dark:text-white">
            What's your timeline?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "No timeline",
                sub: "(just researching)",
              },
              {
                title: "Planning",
                sub: "(looking to start in 6 months)",
              },
              {
                title: "Immediate",
                sub: "(ready to start today)",
              },
            ].map((item) => (
              <label
                key={item.title}
                className="flex flex-col items-center cursor-pointer gap-3"
              >
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === item.title}
                  onChange={() => setTimeline(item.title)}
                  className="hidden"
                />

                {/* RADIO */}
                <span
                  className={`w-5 h-5 rounded-full border dark:border-none flex items-center justify-center ${
                    timeline === item.title
                      ? "bg-orange-500"
                      : "bg-white"
                  }`}
                >
                  {timeline === item.title && (
                    <span className="w-2.5 h-2.5 bg-amber-600  dark:bg-white rounded-full" />
                  )}
                </span>

                <p className="font-medium text-black dark:text-white">
                  {item.title}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[180px]">
                  {item.sub}
                </p>
              </label>
            ))}
          </div>

          {/* BUSINESS */}
          <h3 className="text-2xl font-bold mt-16 mb-10 text-black dark:text-white">
            Type of business
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                    className={`w-5 h-5 rounded-full border dark:border-none flex items-center justify-center ${
                      businessType === type
                        ? "bg-orange-500"
                        : "bg-white "
                    }`}
                  >
                    {businessType === type && (
                      <span className="w-2.5 h-2.5 bg-amber-600 dark:bg-white  rounded-full" />
                    )}
                  </span>

                  <p className="font-medium text-black dark:text-white max-w-[180px]">
                    {type}
                  </p>
                </label>
              ),
            )}
          </div>

    <div className="relative w-full max-w-2xl mx-auto mt-12">
  
  {/* SELECT BOX */}
  <div
    onClick={() => setOpen(!open)}
    className="w-full h-[60px] flex items-center justify-between px-4 rounded-md cursor-pointer input
   e"
  >
    {source || "Select an option"}
    <span className="text-gray-500">▼</span>
  </div>

  {open && (
    <div className="absolute w-full mt-2 rounded-md overflow-hidden z-10 ">
      {[
        "Select an option",
        "Social media",
        "Referral",
        "Advertisement",
      ].map((item) => (
        <div
          key={item}
          onClick={() => {
            setSource(item);
            setOpen(false);
          }}
          className="
            px-4 py-3 cursor-pointer transition
            border-b border-black dark:border-white
            bg-[#EAEAEA] dark:bg-black
            text-black dark:text-[#EAEAEA] 
            hover:bg-orange-500 hover:text-white 
          "
        >
          {item}
        </div>
      ))}
    </div>
  )}
</div>

          {/* CAPTCHA + BUTTON */}
          <div className="flex flex-col items-center mt-10 gap-6">
            <ReCAPTCHA
              sitekey="6LctE4YsAAAAADDAowc8rnztiGm3L_l_hkRh3D7b"
              onChange={(value) => setCaptcha(value)}
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
    </>
  );
}