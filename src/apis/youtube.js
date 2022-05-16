import axios from "axios";

const KEY = "AIzaSyCev2SHupaQr91eWXLX5owEGFX7K_PeV5Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
