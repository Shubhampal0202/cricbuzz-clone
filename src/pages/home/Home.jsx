import React, { useEffect, useState } from "react";
import { fetchMatches } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import MatchCard from "../../Components/matchCard/MatchCard";
import "./home.css";
import Tabs from "../../Components/tabs/Tabs";
import Select from "../../Components/select/Select";

function Home() {
  const dispatch = useDispatch();

  const [matchCatagory, setMatchCatagory] = useState("All");
  const { matches, loading, error, matchType } = useSelector(
    (state) => state.matches
  );

  useEffect(() => {
    dispatch(fetchMatches(matchType));
  }, [matchType]);

  function transformData() {
    let filterArr = matches;
    if (matchCatagory == "International") {
      filterArr = filterArr.filter((val) => {
        return val.matchType == "International";
      });
    }

    if (matchCatagory == "Domestic") {
      filterArr = filterArr.filter((val) => {
        return val.matchType == "Domestic";
      });
    }
    if (matchCatagory == "Women") {
      filterArr = filterArr.filter((val) => {
        return val.matchType == "Women";
      });
    }
    return filterArr;
  }
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <div className="filter">
            <Tabs />
            <Select
              matchCatagory={matchCatagory}
              setMatchCatagory={setMatchCatagory}
            />
          </div>
          <div className="matches">
            {transformData().length > 0 &&
              transformData().map((match) => {
                return match.seriesMatches.map((m) => {
                  if (m.seriesAdWrapper) {
                    return m.seriesAdWrapper.matches.map((mat, index) => {
                      console.log("mat", mat.matchInfo.seriesName);
                      return <MatchCard key={index} match={mat} />;
                    });
                  }
                });
              })}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
