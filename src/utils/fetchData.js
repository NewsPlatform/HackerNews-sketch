import fetch from "sketch-module-fetch-polyfill";
import Constants from "./constants";

const BASE_LOCAL_URL = "https://localhost:9000/data";

export const loadLocalStory = id =>
  require(`../../resources/data${Constants.API[id]}`);
export const loadLocalItem = id =>
  require(`../../resources/data/v0/item/${id}.json`);

export const loadStory = key =>
  fetch(`${BASE_LOCAL_URL}/${Constants.API[key]}`).then(res => res.json());
export const loadItem = key =>
  fetch(`${BASE_LOCAL_URL}/v0/item/${id}.json`).then(res => res.json());

export const loadAPIStory = key =>
  fetch(`${Constants.API_URL}/${Constants.API[key]}`).then(res => res.json());
export const loadAPIItem = key =>
  fetch(`${Constants.API_URL}/v0/item/${id}.json`).then(res => res.json());
