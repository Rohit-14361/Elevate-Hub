import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";
import TopMentor from "../components/TopMentor";
import Nav from "../components/Nav";
function Home() {
  const [show, setShow] = useState(false);
  const toggleAccordion = (index) => {
    setShow(show === index ? null : index); // Toggle the accordion
  };

  const data = [
    {
      title: "Expert Career Guidance",
      desc: "Gain career insights and advice from seasoned mentors. Receive support for resume building, job interviews, and navigating your professional growth.",
      button: <NavLink to="#">Learn more</NavLink>,
    },
    {
      title: "Personalized Learning Paths",
      desc: "Our mentors design personalized learning plans that cater to your unique goals, helping you stay focused and motivated throughout your journey.",
      button: <NavLink to="#">Learn More</NavLink>,
    },
    {
      title: "Affordable and Flexible",
      desc: "ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.",
      button: <NavLink to="#">Learn More</NavLink>,
    },
    {
      title: "Build Valuable Networks",
      desc: "Mentorship opens doors to valuable networking opportunities. Build lasting relationships with mentors and professionals in your field.",
      button: <NavLink to="#">Learn More</NavLink>,
    },
    {
      title: "Continuous Progress Tracking",
      desc: "Monitor your progress and achievements with the help of our built-in tools, which make goal-setting and tracking easy and motivating.",
      button: <NavLink to="#">Learn More</NavLink>,
    },
    {
      title: "Global Mentorship Opportunities",
      desc: "With ElevateHub, you can connect with mentors from across the globe. Gain diverse perspectives and expand your horizons with international opportunities.",
      button: <NavLink to="#">Learn More</NavLink>,
    },
  ];

  const accData = [
    {
      ques: "What is Elevate Hub?",
      ans: "Elevate Hub is a platform designed to connect ambitious individuals with expert mentors to help them grow in their careers and personal development.",
    },
    {
      ques: "How do I become a mentor",
      ans: "Simply click on 'Join as a Mentor', fill out your profile, and start sharing your expertise once approved!",
    },
    {
      ques: "Can I select my own mentor?",
      ans: "Yes! Browse through our list of mentors, check their expertise, and choose the one that fits your needs best.",
    },
    {
      ques: "Are there any fees for mentorship?",
      ans: "We offer both free and premium mentorship options, with pricing clearly listed based on mentor experience.",
    },
    {
      ques: "How do memborship sessions work?",
      ans: "After selecting a mentor, you can schedule sessions via video calls, messaging, or email.",
    },
    {
      ques: "What i need to support",
      ans: "Our dedicated support team is here to assist with any questions or issues you may have.",
    },
  ];

  const [faqData, setFaqData] = useState(accData);
  return (
    <>
      <Nav />
      <div className="bg-[#F9F9F9]">
        {/* Hero section */}
        <section className="relative  bg-[#DCFCE7] p-12">
          <div className="flex  p-20 ">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-7xl font-extrabold text-green-900">
                <span>Elevate Hub:</span>
                <br />
                Your journey, our guidance
              </h1>
              <p className="text-[26px]  text-green-700">
                Every great achiever was inspired by a great mentor. <br />
                Find yours today!
              </p>
              <div className="mt-8 ">
                <NavLink to="">
                  <button className="bg-green-600 px-7 py-4 border-[#19be19] text-xl  border-2 text-white font-semibold rounded-md cursor-pointer transition-all duration-300 hover:bg-green-800 hover:scale-105">
                    Match with a Mentor
                  </button>
                </NavLink>
              </div>
            </div>
            {/* image section */}

            <div className=" w-6/12">
              <div className="flex justify-end ">
                <img
                  className="h-90 min-w-[580px] rounded-md"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}
        <section className=" px-16 mt-44  ">
          <div className="flex  shadow-lg  bg-gray-50">
            {/* image-section */}
            <div className="w-6/12 h-full  ">
              <img
                src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mentor"
                className="rounded-bl-lg bg-cover h-full  bg-center rounded-tl-lg"
              />
            </div>
            {/* text-section */}
            <div className="w-6/12 bg-[#f1f0f0] rounded-tr-2xl rounded-br-2xl">
              <div className="p-24 ">
                <h1 className="text-5xl text-black font-bold">
                  Elevate Your Carrer <br />
                  with ElevateHub
                </h1>
                <div className="mt-4 ">
                  <p className="text-[18px] leading-6">
                    {" "}
                    <span className="text-black font-bold">Elevate Hub</span> is
                    the unlimate designed to connect you with experienced
                    mentors who can help you unlock your potential. Whether
                    you're seeking career advice,skill development, or personal
                    growth,ElevateHub is here to guide you every step of the
                    way.
                  </p>
                </div>
                {/* button section */}
                <div className="mt-5 flex">
                  <div>
                    <button className="text-white font-semibold bg-blue-500 rounded-md px-4 py-2">
                      {" "}
                      Join ElevateHub
                    </button>
                  </div>
                  <div className="text-blue-700 flex items-center space-x-2">
                    <p className="text-center font-bold">Discover More</p>
                    <span className="text-xl">
                      {" "}
                      <IoSearchOutline />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* feature section */}

        <section className="bg-[#F9F9F9]">
          <div>
            <div className="px-28 ">
              <h2 className="text-center font-bold text-4xl mt-44">
                Unlock Your Growth Journey with Elevate Hub
              </h2>
              <p className="text-xl text-center  text-gray-700 mt-16">
                ElevateHub is designed to connect you with the right mentors,
                guiding you to success. Whether it's enhancing your skills or
                reaching career <br /> goals, we’re here to help you thrive.
              </p>
            </div>
            <div className="grid grid-cols-3   gap-10 p-16 mt-16 ">
              {data.map((result) => (
                <div className="border-2 hover:scale-105 transition-[scale] duration-200 flex flex-col p-8 justify-center gap-y-6 rounded-md bg-white border-none shadow-xl">
                  <h2 className="black   text-center font-semibold text-[22px] ">
                    {result.title}
                  </h2>
                  <p className="text-[#333] leading-6">{result.desc}</p>
                  <button className="text-[#4D786E] text-xl font-semibold text-center">
                    {result.button}
                  </button>
                </div>
              ))}
            </div>

            {/* model section */}
          </div>
        </section>

        {/* modal section */}
        <section className="bg-[#F3F4F6] mt-16">
          {/* heading of modal */}
          <div className="flex flex-col p-8  justify-center items-center">
            <h2 className="font-bold mt-8  text-5xl">
              Start Your Mentorship Journey with ElevateHub
            </h2>
            <p className="text-[#222] text-center mt-8 text-xl">
              Join ElevateHub today and connect with mentors who can guide you
              towards your goals. Follow our easy steps to start achieving more
              with personalized mentorship.
            </p>
          </div>
          {/* image section */}
          <div className="h-[550px] flex gap-x-4 justify-between px-8 mt-8">
            {/* image section */}
            <div className="h-full w-[50%] ">
              <img
                src="https://zingy-bonbon-bd3357.netlify.app/static/media/mentor.38601d423d61ec593b46.png"
                alt="mentor-modals"
                className="h-full rounded-md object-center object-cover w-[650px]"
              />
            </div>
            {/* icons and text section */}

            {/* icons section */}
            <div className=" w-[50%]">
              <div className="flex gap-x-8">
                <div className="flex bg-[#14B8A6] rounded-[50%]  items-center justify-center h-[50px] w-[80px] ">
                  <h2 className="  font-bold text-xl  text-white">1</h2>
                </div>

                <div className="flex  flex-col items-center justify-center ">
                  <h2 className="text-center font-semibold text-[22px]">
                    Create Your Profile
                  </h2>
                  <p className="text-gray-600 leading-6 text-center text-lg">
                    Start your ElevateHub journey by creating a personalized
                    profile. Share your goals, interests, and areas for growth
                    to help us match you with the right mentor.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex bg-[#3B82F6] rounded-[50%]  items-center justify-center h-[50px] w-[70px] ">
                  <h2 className="  font-bold text-xl  text-white">2</h2>
                </div>

                <div className="flex  flex-col items-center justify-center mt-8">
                  <h2 className="text-center font-semibold text-[22px]">
                    Browse Mentor Profiles
                  </h2>
                  <p className="text-gray-600 leading-6 text-center text-lg">
                    Explore a wide variety of mentors from diverse fields. Use
                    filters to find experts with the skills and experience that
                    match your goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex bg-[#22C55E] rounded-[50%]  items-center justify-center h-[50px] w-[70px] ">
                  <h2 className="  font-bold text-xl  text-white">3</h2>
                </div>

                <div className="flex  flex-col items-center justify-center mt-8">
                  <h2 className="text-center font-semibold text-[22px]">
                    Select Your Ideal Mentor
                  </h2>
                  <p className="text-gray-600 leading-6 text-center text-lg">
                    Review mentor profiles, read testimonials, and choose
                    someone who aligns with your personal or professional growth
                    journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex bg-[#F97316] rounded-[50%]  items-center justify-center h-[50px] w-[70px] ">
                  <h2 className="  font-bold text-xl  text-white">4</h2>
                </div>

                <div className="flex  flex-col items-center justify-center mt-8">
                  <h2 className="text-center font-semibold text-[22px]">
                    Schedule Your First Session
                  </h2>
                  <p className="text-gray-600 leading-6 text-center text-lg">
                    Find a time that works for you and your mentor. Schedule
                    your first session and kickstart your growth with expert
                    guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex bg-[#EAB308] rounded-[50%]  items-center justify-center h-[50px] w-[70px] ">
                  <h2 className="  font-bold text-xl  text-white">5</h2>
                </div>

                <div className="flex  flex-col items-center justify-center mt-8">
                  <h2 className="text-center font-semibold text-[22px]">
                    Achieve Milestones Together
                  </h2>
                  <p className="text-gray-600 leading-6 text-center text-lg">
                    Work closely with your mentor to develop key skills, stay
                    motivated, and hit your personal or professional milestones.
                  </p>
                </div>
              </div>
            </div>
            {/* text section */}
            <div></div>
          </div>

          {/* right mentor sections */}
          <div className="flex  justify-between mt-40 mx-8 text-start">
            {/* section-1 */}
            <div className="flex w-[40%] flex-col gap-y-2 text-start  p-7  ">
              <h2 className="text-4xl font-extrabold  text-green-700">
                Find the Right Mentor <br /> for You
              </h2>
              <p className=" text-semibold text-gray-600 text-xl leading-8 mt-4">
                Unlock growth opportunities with expert mentors. Whether you're
                aiming to boost your career, enhance your skills, or explore new
                fields, Elevate Hub has the perfect mentor for you.
              </p>
              <div className=" flex  mt-4">
                <button className="bg-green-500 flex items-center text-xl font-semibold text-white p-3 rounded-md">
                  <span>Get Started</span>

                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>
            {/* section-2 */}
            <div className="flex flex-col w-[60%] gap-8">
              <div className="flex justify-around gap-x-3 ">
                <button className="border-1  px-18  hover:cursor-not-allowed hover:bg-green-500 py-5 rounded-md bg-white border-green-500">
                  Career Coaches
                </button>
                <button className="border-1  px-18 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Business Mentors
                </button>
                <button className="border-1  px-18 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Creative Mentors
                </button>
              </div>
              <div className="flex justify-around gap-x-3 ">
                <button className="border-1  px-20  hover:cursor-not-allowed hover:bg-green-500 py-3 rounded-md bg-white border-green-500">
                  Tech Experts
                </button>
                <button className="border-1  px-18 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Marketing Gurus
                </button>
                <button className="border-1  px-18 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Finance Advisor
                </button>
              </div>
              <div className="flex justify-around gap-x-2 ">
                <button className="border-1  px-16 hover:cursor-not-allowed hover:bg-green-500 py-5 rounded-md bg-white border-green-500">
                  Wellnes Coaches
                </button>
                <button className="border-1  px-16 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Education Mentors
                </button>
                <button className="border-1  px-12 py-5 rounded-md bg-white border-green-500  hover:cursor-not-allowed hover:bg-green-500">
                  Social Impact Leaders
                </button>
              </div>
            </div>
          </div>
          {/* image -section */}
          <div className="mt-8  p-16 h-[600px] w-full ">
            <img
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="mentee image section"
              className="h-full w-full rounded-lg  brightness-[70%] saturate-[70%] object-cover object-center "
            />
          </div>
        </section>

        {/* Top mentors section ---pending */}

        <section
          style={{
            background: "linear-gradient(to bottom right,#f3f4f6, #e5e7eb)",
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 6s ease infinte",
          }}
        >
          <div className="mx-auto">
            <TopMentor />
          </div>
        </section>
        {/* Top mentors section  */}

        {/* pricing section start here */}

        <section className="bg-[#F0FDF4] p-10">
          <div className="flex justify-center items-center  mt-30 gap-y-4 flex-col">
            <h2 className="text-green-700 text-[56px] font-extrabold   ">
              Flexible & Affordable Plans
            </h2>
            <p className="text-xl mt-10 text-center px-64 leading-8  text-gray-700">
              Choose a plan that fits your growth journey. Elevate Hub offers
              free access for learners, with premium options for advanced
              mentorship and exclusive resources.
            </p>
            <button className="bg-green-500 text-white rounded-full text-xl font-semibold px-7 transition-colors duration-300 hover:bg-green-600  py-5 mt-4">
              View Pricing Plans
            </button>
          </div>
        </section>
        {/* plans seciton ends here */}

        {/* FAQ / Accordion Section */}
        <section className=" bg-[#DCFCE7]">
          {/* Accordion heading */}
          <div className="  flex justify-center flex-col items-center p-24 gap-y-3 ">
            <h2 className="text-[#15803D]  font-bold text-4xl ">
              Frequently Asked Questions
            </h2>
            <h6 className="text-gray-700 mt-4 text-xl">
              Get the answers you need about Elevate Hub and how we can support
              your growth.
            </h6>
          </div>
          {/* faq  / Accordions */}
          <div className=" shadow-lg shadow-white-lg grid grid-cols-2 p-28 gap-8">
            {faqData.map((data, index) => (
              <div
                className="text-lg  flex justify-between   bg-white border-1  shadow-lg border-none rounded-lg p-6   "
                key={index}
              >
                <div>
                  <h1 className="text-lg font-bold  ">{data.ques}</h1>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                      show
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[1fr] opacity-0"
                    }`}
                  >
                    <div>{data.ans}</div>
                  </div>
                </div>

                <span
                  className="text-3xl transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => toggleAccordion(index)} // Toggle the accordion
                >
                  {show === index ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ Section ends here */}
      </div>
    </>
  );
}

export default Home;

{
  /* <div className="bg-white">*/
}
{
  /* Hero section */
}
{
  /* <section className="relative bg-green-100 py-16 px-6 md:py-24 "></section> */
}
// </div>;
