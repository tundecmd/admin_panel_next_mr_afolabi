import axios from "axios";

const API_URL = "http://localhost:2500/api/";

const getPrograms = () => {
  return axios.get(API_URL + "admin/programs").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const ProgramService = {
  getPrograms,
};

export default ProgramService;
