// import React, { useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import auth from "../apiManager/auth";
// import toast from "react-hot-toast";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     setIsLoading(true);

//     try {
//       const res = await auth.signin(formData);
//       console.log(res);
//       reset();
//       toast.success("Logged in successfully");
//       navigate("/");
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-green-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-4">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
//           {heading}
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full py-2 px-4 border border-[#8f8584] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               {...register("name", { required: "Name is required" })}
//             />
//             {errors.name && (
//               <p className="text-red-600 text-left">{errors.name.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full py-2 border-[#8f8584] px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               {...register("username", {
//                 required: "Username is required",
//                 minLength: {
//                   value: 4,
//                   message: "username must be of at least 4 character long",
//                 },
//               })}
//             />
//             {errors.username && (
//               <p className="text-red-600 text-left">
//                 {errors.username.message}
//               </p>
//             )}
//           </div>

//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full py-2 border-[#8f8584] px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "Invalid email address",
//                 },
//               })}
//             />
//             {errors.email && (
//               <p className="text-red-600 text-left">{errors.email.message}</p>
//             )}
//           </div>

//           <div className="mb-6">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full py-2 px-4 border-[#8f8584] border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "password must be of at least 6 characters long",
//                 },
//               })}
//             />
//             {errors.password && (
//               <p className="text-red-600 text-left">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-700 transition"
//             disabled={isLoading}
//           >
//             {isLoading ? "Loading..." : "Signup"}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-6">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-green-600 font-medium hover:underline"
//           >
//             Signin
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../apiManager/auth";
import toast from "react-hot-toast";
import useUserStore from "../store/user";
import { setToken } from "../helper/index";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await auth.login(data);
      console.log("Login response : ", res);
      reset();
      setUser(res.data.user);
      setToken(res.data.token);
      toast.success(res.data.message || "Login successfully!");
      navigate("/");
    } catch (error) {
      setIsLoading(false); // Reset loading state
      console.log(error);
      toast.error(
        "Login failed: " +
          (error.response?.data?.message || "Please check your credentials")
      );
    }
    setIsLoading(false);
  };

  return (
    <div className="h-screen bg-[#DCFCE7] flex justify-center items-center ">
      <div className="bg-white min-w-min w-[500px]  flex flex-col rounded-lg min-h-[450px]">
        <h2 className="font-bold text-[38px] text-center mt-10">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-lg  text-center mt-4">
          Sign in to access your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <div className="mt-6 ">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 border-[#8f8584] px-4 border rounded-lg bg-[#F3F4F6]  focus:outline-none focus:ring-2 focus:ring-green-500"
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

          <div className="mt-6 ">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 border-[#8f8584] bg-[#F3F4F6]  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be of at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-left">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6  bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account yet?
          <NavLink
            to="/signup/student"
            className="text-green-600 font-medium hover:underline"
          >
            Sign up
          </NavLink>
        </p>
        <p className="text-center mt-2">
          Become a{" "}
          <NavLink
            to="/signup/mentor"
            className="text-green-600 font-medium hover:underline"
          >
            Mentor
          </NavLink>{" "}
          with us.
        </p>
      </div>
    </div>
  );
};

export default Login;
