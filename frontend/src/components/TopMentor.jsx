import React, { useEffect, useState } from "react";
import useMentorStore from "../store/mentor";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const TopMentor = () => {
  const [topMentors, setTopMentors] = useState([]);
  const navigate = useNavigate();
  const { setMentorData } = useMentorStore();
  console.log("from mentor component");

  const selectTopMentor = (mentors) => {
    const topSelectedMentors = [];
    const totalMentors = mentors.length;
    while (topSelectedMentors < 4 && topSelectedMentors.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors);
      const randomMentor = mentors[randomIndex];
      if (!topSelectedMentors.includes(randomMentor)) {
        topSelectedMentors.push(randomMentor);
      }
    }

    return topSelectedMentors;
  };
  const fetchAllMentors = async () => {
    try {
      const response = await mentorApi.getAllMentors();
      console.log("getting data from mentor api");
      console.log(response);
      const allMentors = response?.data?.mentors || [];
      setMentorData(allMentors);
      setTopMentors(selectTopMentor(allMentors));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);
  return (
    <div className="max-w-[1050px] mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-10">Top Mentors</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topMentors.map((mentor) => {
          return <MentorCard mentor={mentor} key={mentor?._id} />;
        })}
      </div>
      <button
        className="bg-green-300 text-lg py-2 px-5 rounded-lg outline-none border-none font-bold text-green-700 transition transform hover:scale-105 mt-16"
        onClick={() => navigate("/mentors")}
      >
        View All
      </button>
    </div>
  );
};

export default TopMentor;

// // 1hr 29:51 min --- video stopped for further proceed ...

// import React from "react";

// function TopMentor() {
//   return <div>HIi</div>;
// }

// export default TopMentor;

// 10 march
