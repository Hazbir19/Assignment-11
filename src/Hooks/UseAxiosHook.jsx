import axios from "axios";
export const AxiosHook = axios.create({
  baseURL: "https://assignment-11-server-six-liard.vercel.app",
});
const UseAxiosHook = () => {
  return AxiosHook;
};

export default UseAxiosHook;
