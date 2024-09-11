"use strict";

const got = require("got");

const get = async (path, filter = {}) => {
  try {
    const queryString = Object.keys(filter)
      .map((key) => key + "=" + filter[key])
      .join("&");

    let url = `${process.env.BASE_URL}${path}`;

    if (queryString) {
      url += `?${queryString}`;
    }

    const response = await got.get(url);

    let responseData = JSON.parse(response.body);

    return responseData;
  } catch (error) {
    console.error(error);

    return null;
  }
};

module.exports = {
  get,
};
