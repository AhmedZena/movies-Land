import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
import { store } from "../store";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: "117cee1ceab912261211fc0b8f98b0cc",
  },
});

// interceptor for Movie

// const loader = useSelector(
//   (state: { loader: { loader: boolean } }) => state.loader.loader
// );
// const dispatch = useDispatch();

// request interceptor
axiosInstanceMovie.interceptors.request.use(
  (config) => {
    if (config.method === "post" || config.method === "put") {
      //   dispatch({ type: "loader/setLoader", payload: true });
      store.dispatch({ type: "loader/setLoader", payload: true });
      config.headers["authorization"] = `Bearer  dfdf`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstanceMovie.interceptors.response.use(
  (response) => {
    console.log(response);
    // dispatch({ type: "loader/setLoader", payload: false });
    store.dispatch({ type: "loader/setLoader", payload: false });
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
