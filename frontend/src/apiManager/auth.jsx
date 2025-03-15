import AxiosInstances from ".";
const signIn = (data) => {
  return AxiosInstances.post("/auth/login", data);
};

const signUp = (data) => {
  return AxiosInstances.post("/auth/signup", data);
};

export default { signIn, signUp };
