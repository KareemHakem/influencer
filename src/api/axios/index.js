import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "http://localhost:5000/",
  headers: {
    accept: "application/json",
    "content-type": "application/json; charset=utf-8",
  },
});
