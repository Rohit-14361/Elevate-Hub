import AxiosInstances from ".";
const login = (data) => {
  return AxiosInstances.post("/auth/login", data).then((response) => {
    return response;
  });
};

const signup = (data) => {
  return AxiosInstances.post("/auth/signup", data);
};

export default { login, signup };
