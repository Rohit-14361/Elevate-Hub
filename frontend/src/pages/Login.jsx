import React, { useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../apiManager/auth";
import toast from "react-hot-toast";
import useUserStore from "../store/user";
import { setToken } from "../helper";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response = await auth.Login(data);
      reset();
      setUser(response.data.user);
      setToken(response.data.token);
      navigate("/");
      toast.success("Login Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Login failed! Please  check your credentials");
    }
    setIsLoading(false);
  });

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Welcome Back{" "}
        </h2>
        <p className="mt-2 text-gray-600">Login to access your account</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 border-[#8f8584] px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-left">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-4 border-[#8f8584] border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "password must be of at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-left">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-700 transition"
          disabled={isLoading ? "Loading..." : "Login"}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Don&#x27;t have an account yet?{" "}
        <NavLink
          to="/signup/student"
          className="text-green-600 font-medium hover:underline"
        >
          {" "}
          SignUp
        </NavLink>
      </p>
      <p>
        Become a <Navigate to="/signup/mentor"> mentor</Navigate> with us.
      </p>
    </div>
  );
};

export default Login;

// 7 march 1:10
