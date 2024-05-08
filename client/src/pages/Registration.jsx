import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowOtp(true);
  // };
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log({ name, email, password, aadhaar });

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
        aadhaar,
      });
      console.log("response success", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.log("all the fields are required", error);
      throw error;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-slate-200   items-center rounded-[50px] border-1 w-[80vh] h-[60vh] flex flex-col justify-center text-slate-800 relative">
        {/* Adjust margin-top for the h1 element */}
        <h1 className="text-2xl font-sans font-medium mt-0">
          Create your Healthcare and Professional ID
        </h1>
        <p className="text-xs text-gray-700">
          The Healthcare Professional ID will connect you to India's digital
          health ecosystem.
        </p>
        <br />

        <form onSubmit={handleSignup}>
          <div className="mt-4 w-full justify-between flex flex-col">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm mt-2 text-slate-800"
              >
                Enter your Name as per Aadhar card
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="outline outline-slate-200 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="block mt-2 text-sm text-slate-800"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="outline outline-slate-200 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="name"
                className="block mt-2 text-sm text-slate-800"
              >
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="outline outline-slate-200 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="name"
                className="block mt-2 text-sm text-slate-800"
              >
                Enter your adhaar Number
              </label>
              <input
                type="text"
                id="aadhaar"
                name="aadhaar"
                className="outline outline-slate-200 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-orange-600 mt-2 tracking-tight flex justify-center mb-2 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
