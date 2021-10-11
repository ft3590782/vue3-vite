import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import appInfo from "@/config";
import { Toast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

let axiosWrap = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL as string,
  headers: {},
  // 是否跨站点访问控制请求
  // withCredentials: true,
  timeout: 30000,
  // transformRequest: [
  //   (data) => {
  //     data = JSON.stringify(data);
  //     return data;
  //   },
  // ],
  // validateStatus() {
  //   // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
  //   return true;
  // },
  // transformResponse: [
  //   (data) => {
  //     if (typeof data === "string" && data.startsWith("{")) {
  //       data = JSON.parse(data);
  //     }
  //     return data;
  //   },
  // ],
});

axiosWrap.interceptors.request.use((config: AxiosRequestConfig) => {
  // console.log('用户信息', appInfo.user)
  config.headers!["Authorization"] =
    appInfo.user && appInfo.user.id_token ? ` Bearer ${appInfo.user.id_token}` : "";
  return config;
});

axiosWrap.interceptors.response.use(
  (result: AxiosResponse) => {
    return result;
  },
  (err: AxiosError) => {
    if (err.response!.status === 401) {
      router.replace("/login");
      return Promise.reject(err.response);
    } else {
      Toast("服务器出错了...");
      return Promise.reject(err.response);
    }
  }
);

export default axiosWrap;
