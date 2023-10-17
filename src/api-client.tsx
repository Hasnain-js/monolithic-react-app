import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
  const response = await axios.get(API_SERVER_URL + "/contests");
  return response.data.contests;
};
export const fetchContest = async (id: string) => {
  const response = await axios.get(
    API_SERVER_URL + "/contest/" + id,
  );
  return response.data.contest;
};

export const addNewNameToContest = async ({
  contestId,
  newNameValue,
}) => {
  const response = await axios.post(
    API_SERVER_URL + "/contest/" + contestId,
    { newNameValue },
  );
  return response.data.updatedContest;
};
