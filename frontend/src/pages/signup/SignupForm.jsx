import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to the dashboard or the desired page
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Name:
          </label>
          <input
            type="name"
            id="name"
            autoFocus
            value={name}
            onChange={handleNameChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-2">
        <div className="flex justify-around">
          <span className="text-xl font-semibold">Already have an Account</span>
          <Link to="/signin">
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md w-20"
              id="logOut"
            >
              Signin
            </button>
          </Link>
        </div>
        <div className="flex justify-around mt-2">
          <span className="text-xl font-semibold mr-28 pr-5">Go Back</span>
          <Link to="/dashboard">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md w-20">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
