import React, { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import auth from "../apiManager/auth";
function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { role } = useParams();
  const heading =
    role === "mentor" ? "Sign Up as Mentor" : "Sign Up as Student";

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("data", data, role);
    const formData = {
      ...data,
      role,
    };
    console.log("formData", formData);
    try {
      const response = await auth.signUp(formData);
      console.log("response", response.data.message);
      reset();

      toast.success("Account created successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // const normalFunction = (e) => {
  //   e.preventDefault();
  //   console.log("hello");
  // };
  const { register, handleSubmit, reset, formState: errors } = useForm();
  return (
    <div className="bg-[#DCFCE7] h-full flex justify-center  items-center">
      {/* form container */}
      <div className="bg-[#FCFFFD] rounded-md flex flex-col  w-[35%] h-[70%] ">
        <div className="flex gap-y-4 flex-col items-center justify-center">
          <div className="text-center">
            <h1>{heading}</h1>
            <p>Sign up to create your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
            {/* email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,

                    message:
                      "Invalid Email Address must be of length of 4 characters long",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            {/* username */}
            <div>
              <input
                type="text"
                placeholder="Your Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be of length 4 characters long",
                  },
                })}
              />
            </div>
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username.message}</p>
            )}
            {/* password */}
            <div>
              <input
                type="text"
                placeholder="Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be of at least 6 characters long",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            {/* button */}
            <div>
              <button disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign up"}
              </button>
            </div>
          </form>
          <p>Already have an account?</p>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
