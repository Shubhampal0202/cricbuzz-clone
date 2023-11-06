const initialState = {
  matches: [],
  loading: false,
  error: "",
  matchType: "recent",
};
console.log("useReducer");
export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-matches-request":
      console.log("fetch-matches-request");
      return { ...state, loading: true };
    case "fetch-matches-success":
      console.log("fetch-matches-success");
      return { ...state, loading: false, matches: action.payload };
    case "fetch-matches-failure":
      console.log("fetch-matches-failure");
      return { ...state, error: action.payload, loading: false };
    case "changeMatchType":
      return { ...state, matchType: action.payload };
    default:
      return state;
  }
};
