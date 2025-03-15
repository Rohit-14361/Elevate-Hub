import AxiosInstances from ".";

const getAllMentors = () => {
  return AxiosInstances.get("/mentor");
};

const getMentorsByUserName = (username) => {
  return AxiosInstances.get("/mentor" + username);
};

const mentorApi = {
  getAllMentors,
  getMentorsByUserName,
};

export default mentorApi;
