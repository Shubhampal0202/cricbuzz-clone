import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./match.css";
import BattingTable from "./BattingTable";
import BowlingTable from "./BowlingTable";

function Match() {
  const { matches } = useSelector((state) => state.matches);
  console.log("matches", matches);
  const params = useParams();
  let { matchId } = params;
  const [matchData, setMatchData] = useState("");
  const [loading, setLoading] = useState(true);
  let team1BattingIst = [];
  let team1Batting2nd = [];
  let team1BowlingIst = [];
  let team1Bowling2nd = [];

  let team2BattingIst = [];
  let team2Batting2nd = [];
  let team2BowlingIst = [];
  let team2Bowling2nd = [];

  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`,
    headers: {
      "X-RapidAPI-Key": "d2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fn() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMatchData(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    fn();
  }, [matchId]);

  if (matchData && matchData.scoreCard.length > 0) {
    console.log(">>>>>", matchData.scoreCard[0].batTeamDetails.batsmenData);
    let team1_batting1 = "";
    let team2_bowling1 = "";
    let team2_batting1 = "";
    let team1_bowling1 = "";
    let team1_batting2 = "";
    let team2_bowling2 = "";
    let team2_batting2 = "";
    let team1_bowling2 = "";

    if (matchData.scoreCard[0]) {
      team1_batting1 = matchData.scoreCard[0].batTeamDetails.batsmenData;
      team2_bowling1 = matchData.scoreCard[0].bowlTeamDetails.bowlersData;
    }

    if (matchData.scoreCard[1]) {
      team2_batting1 = matchData.scoreCard[1].batTeamDetails.batsmenData;
      team1_bowling1 = matchData.scoreCard[1].bowlTeamDetails.bowlersData;
    }

    if (matchData.scoreCard[2]) {
      team1_batting2 = matchData.scoreCard[2].batTeamDetails.batsmenData;
      team2_bowling2 = matchData.scoreCard[2].bowlTeamDetails.bowlersData;
    }

    if (matchData.scoreCard[3]) {
      team2_batting2 = matchData.scoreCard[3].batTeamDetails.batsmenData;
      team1_bowling2 = matchData.scoreCard[3].bowlTeamDetails.bowlersData;
    }

    for (const key in team1_batting1) {
      team1BattingIst.push(team1_batting1[key]);
    }
    for (const key in team2_bowling1) {
      team2BowlingIst.push(team2_bowling1[key]);
    }
    for (const key in team2_batting1) {
      team2BattingIst.push(team2_batting1[key]);
    }
    for (const key in team1_bowling1) {
      team1BowlingIst.push(team1_bowling1[key]);
    }

    for (const key in team1_batting2) {
      team1Batting2nd.push(team1_batting2[key]);
    }

    for (const key in team2_bowling2) {
      team2Bowling2nd.push(team2_bowling2[key]);
    }

    for (const key in team2_batting2) {
      team2Batting2nd.push(team2_batting2[key]);
    }

    for (const key in team1_bowling2) {
      team1Bowling2nd.push(team1_bowling2[key]);
    }
  }
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="matchDetails">
          {matchData && matchData.scoreCard.length > 0 ? (
            <>
              <div className="status">{matchData && matchData.status}</div>
              <BattingTable
                data={team1BattingIst}
                matchData={matchData}
                i={0}
              />
              <BowlingTable data={team2BowlingIst} />
              {matchData && matchData.scoreCard[1] && (
                <>
                  <BattingTable
                    data={team2BattingIst}
                    matchData={matchData}
                    i={1}
                  />
                  <BowlingTable data={team1BowlingIst} />
                </>
              )}

              {matchData && matchData.scoreCard[2] && (
                <>
                  <BattingTable
                    data={team1Batting2nd}
                    matchData={matchData}
                    i={2}
                  />
                  <BowlingTable data={team2Bowling2nd} />
                </>
              )}

              {matchData && matchData.scoreCard[3] && (
                <>
                  <BattingTable
                    data={team2Batting2nd}
                    matchData={matchData}
                    i={3}
                  />
                  <BowlingTable data={team1Bowling2nd} />
                </>
              )}
            </>
          ) : (
            <h2>match not started yet</h2>
          )}
        </div>
      )}
    </>
  );
}

export default Match;
