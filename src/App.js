import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo" className="w-8 h-8" />
            <h1 className="font-bold text-xl">Company</h1>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#services" className="hover:text-pink-600">Our Services</a>
            <a href="#pricing" className="hover:text-pink-600">Pricing</a>
            <a href="#faq" className="hover:text-pink-600">FAQ</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
              Get a Quote
            </button>
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-3 shadow">
            <a href="#about" className="block hover:text-pink-600">About</a>
            <a href="#services" className="block hover:text-pink-600">Our Services</a>
            <a href="#pricing" className="block hover:text-pink-600">Pricing</a>
            <a href="#faq" className="block hover:text-pink-600">FAQ</a>
            <button className="bg-pink-600 text-white w-full py-2 rounded-full font-semibold hover:bg-pink-700 transition">
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-pink-100 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Your Resume <span className="text-pink-600">Deserves A Yes</span> Let’s Make It Happen
          </h1>
          <p className="text-gray-700 md:text-lg">
            If your resume isn’t getting responses, it’s time for an upgrade. Get a professionally written resume that stands out and helps you land your next job faster.
          </p>
          <div className="flex space-x-4">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">Resume Packages</button>
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition">Contact Us</button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
            alt="Resume Girl"
            className="w-72 md:w-96"
          />
          <div className="bg-white shadow-md rounded-xl flex items-center p-3 mt-4 space-x-3">
            <div className="text-2xl font-bold text-green-600">4.9★</div>
            <div>
              <p className="text-sm text-gray-500">Instructor Rating</p>
              <p className="text-gray-800 font-semibold">260+ Resumes Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="text-center py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          You’re Not Just <span className="text-pink-600">Another Applicant</span> — Your Resume Shouldn’t Look Like One
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "A Resume Format That Gets You Interviews",
              desc: "Crafted to highlight your skills beyond traditional resumes.",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              title: "A Cover Letter Style That Stands Out Strong",
              desc: "Stand out with clear structure and perfect tone that fits your profile.",
              icon: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
            },
            {
              title: "A LinkedIn Profile That Works For You",
              desc: "Attract the right jobs with an optimized and recruiter-ready profile.",
              icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
            },
            {
              title: "An Interview Strategy That Builds Confidence",
              desc: "Get personalized tips and real mock sessions to nail your interviews.",
              icon: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img src={item.icon} alt="icon" className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
