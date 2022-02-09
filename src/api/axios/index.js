import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    accept: "application/json",
    "content-type": "application/json; charset=utf-8",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWFmOTU3NWQ3Yjk0NWExMDZmNTY3NCIsImlhdCI6MTY0NDA2ODAxMCwiZXhwIjoxNjQ2NjYwMDEwfQ.dHM-H14d4t9ftUdZQDQNVeu3YLmRemf0fDIk-FL2ncY",
  },
});
