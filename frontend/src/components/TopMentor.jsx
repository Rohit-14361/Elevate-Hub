import React, { useEffect, useState } from "react";
import useMentorStore from "../store/mentor";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";
const TopMentor = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
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
      selectTopMentors(selectTopMentor(allMentors));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);
  return (
    <>
      <div>
        <h1>Top Mentors</h1>
        <div>{topMentors}</div>
      </div>
    </>
  );
};

export default TopMentor;

// // 1hr 29:51 min --- video stopped for further proceed ...

// import React from "react";

// function TopMentor() {
//   return <div>HIi</div>;
// }

// export default TopMentor;
