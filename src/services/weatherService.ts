import axiosWrap from "./axiosWrap";

export const getWeather: any = () => {
  return axiosWrap({
    url: `/weather_mini?city=上海`,
    method: "get",
  });
};
