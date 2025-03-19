import AxiosInstances from ".";
const Login = (data) => {
  return AxiosInstances.post("/auth/login", data);
};

const signUp = (data) => {
  return AxiosInstances.post("/auth/signup", data);
};

export default { Login, signUp };
