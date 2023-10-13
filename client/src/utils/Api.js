import axios from "axios";

// const params = {
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_KEY,
//   },
// };

const headers = {
  Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_KEY,
};

export const fetchDataFormApi = async (url, params) => {
  try {
    let data = await axios.get(process.env.REACT_APP_DEV_URL + url, {
      headers,
      params,
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
