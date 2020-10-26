import axios from "axios";

const KEY = "AIzaSyA9BjrABu8Sscj3rbSAyw77VSUA-Zgx_jM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
