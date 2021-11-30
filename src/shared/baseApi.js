import axios from "axios";
import md5 from "md5";

const baseAPI = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
});

const now = Date.now();

const publicKey = "0c9b705ac2b9ca4ab141bb0807a58873";
const privateKey = "e93967d8e3a48a2b3abf9ddafc3b0a439ee34fbb";

let params = {
  apikey: publicKey,
  ts: now,
};
params.hash = md5(params.ts + privateKey + publicKey);

export { baseAPI, params };
