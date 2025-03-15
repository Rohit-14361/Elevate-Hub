import { TOKEN } from "../const";

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};

const setToken = () => {
  sessionStorage.setItem(TOKEN);
};
const removeToken = () => {
  sessionStorage.removeItem(TOKEN);
};

export { getToken, setToken, removeToken };
