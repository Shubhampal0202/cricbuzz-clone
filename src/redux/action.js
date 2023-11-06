import axios from "axios";
export const fetchMatches = (matchType) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${matchType}`,
    headers: {
      "X-RapidAPI-Key": "d2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  return async (dispatch) => {
    dispatch({ type: "fetch-matches-request" });
    try {
      const { data : {typeMatches} } = await axios.request(options);
      dispatch({ type: "fetch-matches-success", payload: typeMatches });
    } catch (error) {
      dispatch({ type: "fetch-matches-failure",payload:error });
    }
  };
};
