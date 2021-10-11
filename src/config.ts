const mockUser = {
  email: "mockUser@email.com",
};

const APPID = "vue3_startup";

const getToken = () => {
  return window.localStorage.getItem(`${APPID}_userToken`) || null;
};

const setToken = (token: string) => {
  window.localStorage.setItem(`${APPID}_userToken`, token);
};

let config = {} as any;
config = {
  user: import.meta.env.VITE_APP_MODE === "development" ? mockUser : null,
  isLogin: false,
  corpId: import.meta.env.VITE_APP_CORP_ID,
  agentId: import.meta.env.VITE_APP_AGENT_ID,
  token: getToken(),
  appId: APPID,
  logout: function () {
    this.user = null;
    this.token = null;
    window.localStorage.removeItem(`${APPID}_userToken`);
  },
};

export default config;
