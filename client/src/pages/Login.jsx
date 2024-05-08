import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log("login okay", response.data);
      window.location.href = "/";
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-neutral-200 rounded-[50px] items-center rounded-[3px] border-1 w-[80vh] h-[50vh] flex flex-col  justify-center text-white relative p-8">
        <h1 className="text-3xl font-sans font-medium text-slate-600">
          Login to national Healthcare provder registry
        </h1>
        <form onSubmit={handlelogin}>
          <div className="mt-4 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-s text-slate-800">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" outline-2 outline-slate-700 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full "
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="name" className="block text-s text-slate-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" outline outline-slate-200 rounded-full  text-black mt-2 h-10 px-2 py-1 w-full "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-slate-900 text-sm ">
                Do not have an account?{" "}
                <span>
                  {" "}
                  <Link
                    to="/registration"
                    className=" text-orange-700 hover:text-orange-600"
                  >
                    Register Here
                  </Link>{" "}
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-orange-700 mt-2 tracking-tight flex justify-center text-white px-8 py-2 rounded-full hover:bg-orange-600"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
