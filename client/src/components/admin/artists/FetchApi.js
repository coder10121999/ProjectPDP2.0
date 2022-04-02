import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`,
    },
  };
};

export const getAllArtist = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/artist/all-artist`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createArtist = async ({
  cName,
  cImage,
  cDescription,
  cStatus,
}) => {
  let formData = new FormData();
  formData.append("cImage", cImage);
  formData.append("cName", cName);
  formData.append("cDescription", cDescription);
  formData.append("cStatus", cStatus);

  try {
    let res = await axios.post(
      `${apiURL}/api/artist/add-artist`,
      formData,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editArtist = async (cId, des, status) => {
  let data = { cId: cId, cDescription: des, cStatus: status };
  try {
    let res = await axios.post(
      `${apiURL}/api/artist/edit-artist`,
      data,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArtist = async (cId) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/category/delete-artist`,
      { cId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
